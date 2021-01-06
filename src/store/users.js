export default {
    namespaced: true,
    state:{
        updateState: false
    },
    mutations:{
        setUpdateState(state, bool){
            state.updateState = bool
        }
    },
    actions:{
        setUpdateState({commit}, bool){
            commit('setUpdateState', bool)
        }
    }
}