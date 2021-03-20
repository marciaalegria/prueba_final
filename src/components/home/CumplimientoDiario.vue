<template>
<v-container class="contenido">
    <v-row>
        <v-col>
        <h1 class="titulo">{{nombre}}</h1>
        </v-col>
    </v-row>
    <v-row class="informacion">
        <v-col>
        <div class="valor">{{porcentaje}}%</div>
        <div class="detalle_valor"><a href="">Ver detalles</a></div>
        </v-col>
        <v-col>
            <div class="valor">{{entregadas}}</div>
            <div class="detalle_valor">ordenes entregadas</div>
        </v-col>
        <v-col>
            <div class="valor">{{pendientes}}</div>
            <div class="detalle_valor">ordenes pendientes</div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cumplimiento-diario',
    // props: {},
    data: function(){
        return {
           nombre: '',
           entregadas:'',
           pendientes:''
            
        }
    },
     computed: {
         porcentaje(){
             let resultado = 0;
             if (this.entregadas > 0){
                 resultado= (this.pendientes * 100) / this.entregadas;
             }
             return resultado.toFixed(0);
         }
     },
    methods: {
        // -- Metodos
        fetchVentas(){
            axios.get('http://localhost:8080/api/dashboard.json')
            .then(resp=> {
                console.log(resp.data.kpis[0].nombre)
                let nombre= resp.data.kpis[0].nombre
                let entregadas= resp.data.kpis[0].entregadas
                let pendientes = resp.data.kpis[0].pendientes
                
                this.nombre=nombre;
                this.entregadas=entregadas;
                this.pendientes= pendientes
                })
            .catch(error=>{
                console.log(error)
            })
        }
    },
    created(){
        this.fetchVentas();
    }
    // components: {},
}
</script>

<style scoped>
    .titulo{
        text-align: center;
        font-weight: bold;
    }
    .informacion{
        padding: 0 30px;
    }
    .valor{
        text-align: center;
        font-weight: 20px;
    }
    .detalle_valor{
        text-align: center;
        font-weight: bolder;
    }
    .contenido{
        border: 1px solid gray;
    }
    
</style>