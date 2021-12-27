<template>
    <div class="v-main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>


    export default {
        name: "v-main",

        props: {},
        computed: {},
        methods: {},
        watch: {},
        mounted() {}
    }
</script>

<style>
    .v-main {
        max-width: 1800px;
        margin: 0 auto;
    }
</style>
