import {createStore} from 'vuex'
import Product from './module/products.js'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'


const store = createStore({
    state: { isShow:false},
    getters,
    mutations,
    actions,
    modules: {
        Product
    }

})

export default store;