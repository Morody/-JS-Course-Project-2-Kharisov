<template>
    <div class="v-registration">

        <router-link :to="{name: 'catalog'}">
            <div class="v-catalog__link_to_head">Back to Head</div>
        </router-link>

        <div class="container mt-4">
            <div class="row">
                <div class="col-sm-6 mx-auto">
                    <form @submit.prevent="onSubmit">

                        <div class="mb-3">
                            <label for="Name" class="form-label">Ваше имя</label>
                            <input type="text" class="form-control" id="name" v-model="nameUser">
                        </div>

                        <div class="mb-3">
                            <label for="Phone" class="form-label">Ваш телефон</label>
                            <input type="tel" class="form-control" id="phone" v-model="phone">
                        </div>

                        <button type="submit" class="btn btn-primary">Send</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "v-registration",
        data(){
            return {
                nameUser: null,
                phone: null
            }
        },
        methods: {
            onSubmit(){
                let Users = {
                    nameUser: this.nameUser,
                    phone: this.phone
                }
                this.$emit('getUser', Users);
                this.nameUser = null;
                this.phone = null;
            }
        }
    }
</script>

<style>
    .v-catalog__link_to_head {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px #aeaeae;
    }
</style>
