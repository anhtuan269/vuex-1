import axios from 'axios'
const state = {
    products: []
}
const getters = {
   products: state => state.products

}
const mutations = {
    assignProduct (state, productDetail) {
        state.products = productDetail
    }
}
const actions = {
    async getProduct({ commit }) {
        axios.get("/products.json")
        .then()
        .then( res => {
            commit('assignProduct', res.data.result)

            console.log(res)
        })
        .catch( err => console.log(err))
    }

    
}
export default { state, getters, mutations, actions}