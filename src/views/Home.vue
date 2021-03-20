<template>
  <div class="home">
    
    <v-container>
      <v-row>
        <v-col>
          <Jumbo/>
        </v-col>
      </v-row>
      <v-row>
        <v-col><CumplimientoDiario/></v-col>
      
        <v-col><CumplimientoDiario/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbo from '@/components/home/Jumbo.vue'
import CumplimientoDiario from '@/components/home/CumplimientoDiario.vue'

export default {
  name: 'Home',
  components: {
    Jumbo,
    CumplimientoDiario
    
  }
}
</script>

