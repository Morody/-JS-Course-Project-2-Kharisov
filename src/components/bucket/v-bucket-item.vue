<template>
    <div class="v-bucket-item">
        <img class="v-bucket-item__img" :src=" require('../../assets/img/' + bucket_item_data.image)" alt="">
        <div class="v-bucket-item__info">
            <p>{{bucket_item_data.name}}</p>
            <p>Цена: {{bucket_item_data.price}} руб.</p>
            <p>№{{bucket_item_data.id}}</p>
        </div>
        <div class="v-bucket-item__quantity">
            <p>Кол-во:</p>
            <span class="amount__btn" @click="decrementItem">-</span>
            {{bucket_item_data.amount}}
            <span class="amount__btn" @click="incrementItem">+</span>
        </div>
        <button @click="deleteFromBucket">Delete</button>
    </div>
</template>

<script>

    export default {
        name: "v-bucket-item",
        props:{
            bucket_item_data:{
                type: Object,
                default(){
                    return {};
                }
            }
        },
        methods:{
            deleteFromBucket(){
                this.$emit('deleteFromBucket')
            },
            incrementItem(){
                this.$emit('increment')
            },
            decrementItem(){
                this.$emit('decrement')
            }
        }
    }
</script>

<style>
    .v-bucket-item {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin: 16px;
    }

    .v-bucket-item img {
        max-width: 350px;
    }

    .v-bucket-item button {
        padding: 8px 16px;
        background: #26ae68;
        color: #fff;
        border: 0;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
    }

    .v-bucket-item button:hover {
        background: #31c375;
    }

    .amount__btn {
        margin: 0 5px 0 5px;
        cursor: pointer;
    }
</style>
