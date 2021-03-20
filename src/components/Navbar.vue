<template>
    <v-toolbar dense :dark="true">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Compañía</v-toolbar-title>
        <v-btn depressed color="default" @click="$router.push('/')">Home</v-btn>
        <v-btn depressed color="default" @click="$router.push('/')">Ordenes</v-btn>
        <v-btn depressed color="default" @click="$router.push('/')">Inventario</v-btn>
        <v-spacer></v-spacer>
        <v-btn depressed color="default" @click="logout">Cerrar sesión</v-btn>

    </v-toolbar>
</template>

<script>
export default {
    name: 'nav-bar',
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
    
</style>