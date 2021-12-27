<template>
    <div class="v-popup-wrapper" ref="modal_wrapper">
        <div class="v-popup">
            <div class="v-popup__header">
                <span>{{modalTitle}}</span>
                <span>
                    <i
                        class="material-icons"
                        @click="closeModal"
                    >close</i>
                </span>
            </div>
            <div class="v-popup__body">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button class="close__modal" @click="closeModal">Close</button>
                <button
                    class="submit__button"
                    @click="addToBucketOnModal"
                >{{btnAddToBucket}}</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-popup",
        methods: {
            closeModal () {
                this.$emit('closeModal')
            },

            addToBucketOnModal(){
                this.$emit('addToBucketOnModal')
            }
        },
        props: {
            btnAddToBucket:{
                type: String,
                default: 'Ok'
            },
            modalTitle: {
                type: String,
                default: 'Modal name'
            }
        },

        mounted() {
            let vm = this;
            document.addEventListener('click', function (item) {
                if (item.target === vm.$refs['modal_wrapper']) {
                    vm.closeModal();
                }
            })
        }
    }
</script>

<style>

    .v-popup {
        padding: 16px;
        position: fixed;
        top: 50px;
        width: 400px;
        background: white;
        box-shadow: 0 0 17px 0 #2c3e50;
        z-index: 10;
    }

    .v-popup__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .v-popup__body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .v-popup__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .close__modal {
        padding: 8px;
        color: white;
        background-color: red;
    }

    .submit__button {
        padding: 8px;
        color: white;
        background-color: #84ff00;
    }

    .v-popup__header i {
        cursor: pointer;
    }

    .v-popup-wrapper {
        background: rgba(64, 64, 64, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    }
</style>
