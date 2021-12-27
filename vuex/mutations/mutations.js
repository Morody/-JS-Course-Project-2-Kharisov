export default {
    SET_PRODUCTS_TO_STATE: (state, product) => {
        state.products = product;
    },
    SET_BUCKET(state, product) {
        if (state.bucket.length){
            let isProductExists = false;
            state.bucket.map(function (item){
                if (item.id === product.id){
                    isProductExists = true;
                    item.amount++;
                }
            });
            if (!isProductExists){
                state.bucket.push(product);
            }
        } else {
            state.bucket.push(product);
        }
    },

    REMOVE_FROM_BUCKET: (state, index) => {
        state.bucket.splice(index, 1);
    },

    INCREMENT: (state, index) => {
        state.bucket[index].amount++;
    },
    DECREMENT: (state, index) => {
        if (state.bucket[index].amount > 1)
            state.bucket[index].amount--;
    }
}
