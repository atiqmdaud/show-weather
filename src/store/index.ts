import axios from 'axios'
import { createStore } from 'vuex'
import type { CitiesGeo } from '@/types/types'

export interface State {
  seeMain: boolean
  citiesGeo: CitiesGeo[]
  weather: any | null
  loading: boolean
  error: string | null
}

export default createStore<State>({
  state: { seeMain: true, citiesGeo: [], weather: null, loading: false, error: null },
  getters: {
    seeMain: (state) => state.seeMain,
    citiesGeo: (state) => state.citiesGeo,
    weather: (state) => state.weather,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
  mutations: {
    setSeeMain(state, seeMain) {
      state.seeMain = seeMain
    },
    setCitiesGeo(state, citiesGeo) {
      state.citiesGeo = citiesGeo
    },
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
    updateSeeMain({ commit }, seeMain) {
      commit('setSeeMain', seeMain)
    },
    fetchCitiesGeo({ commit }, citiesGeo: CitiesGeo) {
      commit('setCitiesGeo', citiesGeo)
    },
    async fetchWeather({ commit }, citylatlon: { lat: string; lon: string }) {
      commit('setLoading', true)
      commit('setError', null)
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${citylatlon.lat}&lon=${citylatlon.lon}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
        )
        // const response = await axios.get(
        //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
        // )
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
