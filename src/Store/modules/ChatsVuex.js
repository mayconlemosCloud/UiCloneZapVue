
export default {
  namespaced: true,
  state: {
    contatoOne: []
  },
  getters: {
    //   getUser (state) {
    //     return state.user
    //   },
    //   getShowLogin (state) {
    //     return state.showLogin
    //   }
  },
  mutations: {
    //   setUser (state, data) {
    //     state.user = data;
    //   },
    //   setShowLogin (state, data) {
    //     state.showLogin = data;
    //   },
    Contato(state,data) { 
      state.contatoOne = data;
    }
  },
  actions: {
    //   setUser ({ commit }, data) {
    //     commit('setUser', data);
    //   },
    //   setShowLogin ({ commit }, data) {
    //     commit('setShowLogin', data);
    //   }
  }
}