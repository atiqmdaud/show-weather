import axios from 'axios'
import { createStore } from 'vuex'

export interface State {
  weather: any | null
  loading: boolean
  error: string | null
}

export default createStore<State>({
  state: { weather: null, loading: false, error: null },
  getters: {
    weather: (state) => state.weather,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    setWeather(state, weather) {
      state.weather = weather
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setError(state, error) {
      state.error = error
    },
  },
  actions: {
    async fetchWeather({ commit }, city: string) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
        )
        commit('setWeather', response.data)
      } catch (error: any) {
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  modules: {},
})
