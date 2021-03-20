<template>
    <div>
        <v-container>        
            <h2>Monitor de Órdenes</h2>

            <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            N° orden
          </th>
          <th class="text-left">
            Cliente
          </th>
            <th class="text-left">
            Monto orden
          </th>
          <th class="text-left">
            Cantidad productos
          </th>
            <th class="text-left">
            Fecha Entrega
          </th>
          <th class="text-left">
            avance preparación
          </th>
          <th class="text-left">
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="orden in ordenes"
          :key="orden.num_orden"
        >
          <td>{{ orden.num_orden }}</td>
          <td>{{ orden.cliente }}</td>
            <td>{{ orden.monto }}</td>
          <td>{{ orden.cant_productos }}</td>
            <td>{{ orden.fecha_entrega }}</td>
          <td>{{ orden.avance_preparacion }}</td>
            <td>{{ orden.estado}}</td>
            <td><v-btn x-small color="info">Ver detalles</v-btn></td>


        </tr>
        </tbody>
        </template>
        </v-simple-table>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ordenes',
    // props: {},
    data(){
        return {
        ordenes: [

        ]
        }
    },
    // computed: {},
    methods: {
            FetchOrdenes(){
            axios.get('http://localhost:8080/api/ordenes.json')
            .then(resp=>{
                console.log(resp.data.ordenes)
                alert('ol')
                this.ordenes= resp.data.ordenes;
            })
            .catch(error=>{
                console.log(error)
            })
            
        }
    },
    // components: {},
}
</script>

<style scoped>
    
</style>