<template>
    <div class="v-item">
        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_bucket">Back to Head</div>
        </router-link>
        <h1>Bucket</h1>
        <p v-if="!bucket_data.length">Пусто</p>
        <v-bucket-item
            v-for="(item, index) in bucket_data"
            :key="item.id"
            :bucket_item_data="item"
            @deleteFromBucket="deleteFromBucket(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
        <div class="v-bucket__total">
            <p class="total__name">Total:</p>
            <p>{{ProductTotalCost}} Р</p>
        </div>
    </div>
</template>

<script>
    import vBucketItem from './v-bucket-item'
    import {mapActions} from "vuex";

    export default {
        name: "v-item",
        components: {
            vBucketItem
        },
        props: {
            bucket_data:{
                type: Array,
                default() {
                    return [];
                }
            }
        },
        methods: {
            incrementItem(){

            },
            decrementItem(){

            },

            ...mapActions([
                'DELETE_FROM_BUCKET',
                'DECREMENT_ITEM',
                'INCREMENT_ITEM'
            ]),
            increment(index){
                this.INCREMENT_ITEM(index)
            },
            decrement(index){
                this.DECREMENT_ITEM(index)
            },
            deleteFromBucket(index){
                this.DELETE_FROM_BUCKET(index);
            }
        },
        computed: {
            ProductTotalCost(){
                let result = [];

                if (this.bucket_data.length){
                    for (let item of this.bucket_data){
                        result.push(item.price * item.amount);
                    }
                    result = result.reduce(function (sum, el){
                        return sum + el;
                    });
                    return result;
                } else {
                    return 0;
                }

            }
        }
    }
</script>

<style>
    .v-item {
        margin-bottom: 100px;
    }

    .v-bucket__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 24px;
        display: flex;
        justify-content: center;
        background: #2656ae;
        color: white;
        font-size: 20px;
    }

    .total__name {
        margin-right: 16px;
    }
</style>
