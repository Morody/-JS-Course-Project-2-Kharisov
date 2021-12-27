<template>
    <div class="v-catalog-item">

        <v-popup
            v-if="isVisibleDescription"
            @closeModal="closeModal"
            btnAddToBucket="Add to Bucket"
            :modalTitle="product_data.name"
            @addToBucketOnModal="addToBucket"
        >
            <div class="modal_info">
                <img class="v-catalog-item__img" :src=" require('../../assets/img/' + product_data.image)" alt="img">
                <p class="v-catalog-item__price">Цена: {{product_data.price}} руб.</p>
                <p class="v-catalog-item__desc">{{product_data.description}}</p>
            </div>
        </v-popup>

        <img class="v-catalog-item__img" :src=" require('../../assets/img/' + product_data.image)" alt="img">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">Цена: {{product_data.price}} руб.</p>
        <button
            class="v-catalog-item__description"
            @click="btnDescription"
        >
            Description
        </button>

        <button
            class="v-catalog-item__add_to_cart_btn btn"
            @click="addToBucket"
        >Add to product</button>
    </div>
</template>

<script>

    import vPopup from '../v-popup'

    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default(){
                    return {}
                }
            }
        },

        data(){
            return {
                isVisibleDescription: false
            }
        },
        components: {
            vPopup
        },
        methods: {
            addToBucket() {
                this.$emit('addToBucket', this.product_data)
            },

            btnDescription(){
                this.isVisibleDescription = true
            },

            closeModal(){
                this.isVisibleDescription = false

            }
        },
        mounted() {
            this.$set(this.product_data, 'amount', 1)
        }
    }
</script>

<style>


    .v-catalog-item__description {
        padding: 8px 16px;
        background: #dbe3df;
        color: #231a1a;
        border: 0;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        margin-right: 5px;
    }

    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 5px #e0e0e0;
        border-radius: 25px;
        padding: 16px;
        margin: 16px;
    }

    .v-catalog-item__add_to_cart_btn {
        padding: 8px 16px;
        background: #26ae68;
        color: #fff;
        border: 0;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
    }

    .v-catalog-item__img {
        width: 200px;
    }

    .v-catalog-item button:hover {
        background: #31c375;
    }
</style>
