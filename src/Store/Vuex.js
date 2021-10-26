
import Vue from 'vue'
import Vuex from 'vuex'

import ChatsVuex from './modules/ChatsVuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  
 
  modules: {
    ChatsVuex
  }
})


export {store}

