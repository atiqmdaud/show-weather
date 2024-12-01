import axios from 'axios'
import { createStore } from 'vuex'
import type { CitiesGeo } from '@/types/types'

export interface State {
  seeMain: boolean
  citiesGeo: CitiesGeo[]
  cityGeo: CitiesGeo
  weather: null
  loading: boolean
  error: string | null
}

export default createStore<State>({
  state: {
    seeMain: true,
    citiesGeo: [],
    cityGeo: { name: '', state: '', country: '', lat: '', lon: '' },
    weather: null,
    loading: false,
    error: null,
  },
  getters: {
    seeMain: (state) => state.seeMain,
    citiesGeo: (state) => state.citiesGeo,
    cityGeo: (state) => state.cityGeo,
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
    setCityGeo(state, cityGeo) {
      state.cityGeo = cityGeo
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
    async fetchWeather({ commit }, cityGeo) {
      commit('setCityGeo', cityGeo)
      commit('setLoading', true)
      commit('setError', null)
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${cityGeo.lat}&lon=${cityGeo.lon}&exclude=minutely,alerts&units=metric&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
        )
        console.log(response.data)
        commit('setWeather', response.data)
      } catch (error: unknown) {
        commit('setError', error)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  modules: {},
})
