<template>
<div>
  <h2>Últimas Ordenes</h2>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Numero orden
          </th>
          <th class="text-left">
            Cliente
          </th>
            <th class="text-left">
            Fecha  Entrega
          </th>
          <th class="text-left">
            Estado
          </th>
           <th class="text-left">
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
          <td>{{ orden.fecha_entrega }}</td>
          <td>{{ orden.estado }}</td>
          <td><v-btn x-small color="info">Ver detalles</v-btn></td>
            
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Ultimas-ordenes',
    // props: {},

    data () {
      return {
        ordenes:[

        ]
      }
    },
  
    // computed: {},
    methods: {
        FetchOrdenes(){
            axios.get('http://localhost:8080/api/dashboard.json')
            .then(resp=>{
                console.log(resp.data.ultimas_ordenes)
                this.ordenes= resp.data.ultimas_ordenes;
            })
            .catch(error=>{
                console.log(error)
            })
            
        }
    },
    created(){
        this.FetchOrdenes();
    }
    // components: {},
}
</script>

<style scoped>
    
</style>