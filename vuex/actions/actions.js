import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                alert(error);
                return error;
            });
    },

    DECREMENT_ITEM({commit}, index){
        commit('DECREMENT', index)
    },
    INCREMENT_ITEM({commit}, index){
        commit('INCREMENT', index)
    },
    ADD_TO_BUCKET({commit}, product) {
        commit('SET_BUCKET', product);
    },

    DELETE_FROM_BUCKET({commit}, index){
        commit('REMOVE_FROM_BUCKET', index)
    }
}
