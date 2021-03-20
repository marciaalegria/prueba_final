<template>
  <div class="home">
    
    <v-container>
      <Navbar/>
      <v-row>
        <v-col>
          <Jumbo/>
        </v-col>
      </v-row>
      <v-row>
        <v-col><CumplimientoDiario/></v-col>
      
        <v-col><OrdenesAtrasadasJornada/></v-col>
      </v-row>

      <v-row>
        <v-col :md="6"><UltimasOrdenes/></v-col>
        <v-col :md="6"><UltimasDevoluciones/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbo from '@/components/home/Jumbo.vue'
import CumplimientoDiario from '@/components/home/CumplimientoDiario.vue'
import OrdenesAtrasadasJornada from '@/components/home/OrdenesAtrasadasJornada.vue'
import UltimasOrdenes from '@/components/home/UltimasOrdenes.vue'
import UltimasDevoluciones from '@/components/home/UltimasDevoluciones.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Jumbo,
    CumplimientoDiario,
    OrdenesAtrasadasJornada,
    UltimasOrdenes,
    UltimasDevoluciones,
    Navbar
    
  }
}
</script>

