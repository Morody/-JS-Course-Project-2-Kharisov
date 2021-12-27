<template>
    <div class="v-catalog">
        <router-link :to="{name: 'bucket', params: {bucket_data: BUCKET}}">
            <div class="v-catalog__link_to_bucket"><i class="material-icons">shopping_cart</i>: {{BUCKET.length}}</div>
        </router-link>
        <router-link :to="{name: 'registration'}">
            <div class="v-catalog__link_to_registration">Leave contacts</div>
        </router-link>
        <v-catalog-item
            v-for="product in PRODUCTS"
            :key="product.id"
            :product_data="product"
            @addToBucket="addToBucket"
        />
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: "v-catalog",
        components:{
            vCatalogItem,
        },
        data(){
            return{
                users: [],
                products: [
                    {
                        image: "1.png",
                        name: "Экиму, Создатель масок",
                        price: 979,
                        id: "71312",
                        available: true
                    },
                    {
                        image: "2.png",
                        name: "Грозовой монстр",
                        price: 999,
                        id: "71314",
                        available: true
                    },
                    {
                        image: "3.png",
                        name: "Кетар, Тотемное животное Камня",
                        price: 799,
                        id: "71301",
                        available: true
                    },
                    {
                        image: "4.png",
                        name: "Скопио",
                        price: 7499,
                        id: "8996",
                        available: true
                    },
                    {
                        image: "5.png",
                        name: "Таху, Объединитель огня",
                        price: 900,
                        id: "71308",
                        available: true
                    },
                    {
                        image: "6.png",
                        name: "Мата Нуи",
                        price: 2900,
                        id: "71901",
                        available: true
                    }
                ]
            }
        },

        computed: {
            ...mapGetters([
                'PRODUCTS',
                'BUCKET'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_BUCKET'
            ]),
            addToBucket(data){
                this.ADD_TO_BUCKET(data);
            }
        },
        mounted: function () {
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style>
    .v-catalog {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    .v-catalog__link_to_bucket {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px #aeaeae;
    }

    .v-catalog__link_to_registration {
        position: absolute;
        top: 10px;
        right: 100px;
        padding: 16px;
        border: solid 1px #aeaeae;
    }
</style>
