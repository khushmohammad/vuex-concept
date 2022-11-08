
import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      users: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    SET_USERS(state, payload) {

      state.users = payload
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', data.data)
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
})


export default store