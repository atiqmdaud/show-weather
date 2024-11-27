import { createStore } from 'vuex'
export interface State {
  weather: null
  loading: boolean
  error: string | null
}

export default createStore<State>({
  state: { weather: null, loading: false, error: null },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
})
