<template>
    <v-container>
        <v-row>
            <v-col class="contenedor" md="12">
                <div class="jumbo">
                    <h2>vitrina</h2>
                </div>
                <div>
                    <h2>Bienvenido</h2>
                    <p>bienvenido al sistema de ordenes e inventario de ClassicModels</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'component-jumbo',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    .jumbo{
        height: 200px;
        background: gray;
        color: white;
        text-align: center;
        padding-top: 80px;
    }
    .contenedor{
        border: 1px solid gray;
        padding: 5px;
    }
</style>