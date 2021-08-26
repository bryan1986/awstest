import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cognitoEmail: 'ADMIN'
  },
  mutations: {
    changeEmail (state, newEmail) {
      state.cognitoEmail = newEmail
    }

  },
  actions: {
    callMutation ({ state, commit }, { newEmail }) {
      commit('changeEmail', newEmail)
    }
  },
  getters: {
    getMsg (state) {
      return `${state.cognitoEmail}`
    }
  }
})