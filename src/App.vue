<template>
    <div id="app">
        <h1>Bionicle</h1>
        <v-main />
    </div>
</template>

<script>
    import vMain from './components/v-main'

    export default {
        name: 'App',
        components: {
            vMain
        }
    }
</script>

<style>
    #app {
        font-family: system-ui;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
