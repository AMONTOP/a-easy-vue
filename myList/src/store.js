import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    lists:[],
    count:1
  },
  getters:{
    getTotalCount(state){
      return state.count <10 ? '0'+ state.count : state.count
    }
  },
  mutations:{
    addItem(state, value){
      state.lists.push(value)
    },
    increment(state){
      state.count++
    }
  },
  actions:{
    increment(context,data){
      console.log(data)
      context.commit('increment',data)
    }
  }
})
