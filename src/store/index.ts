import axios from 'axios'
import { createStore } from 'vuex'
import type { CitiesGeo } from '@/types/types'

export interface State {
  seeMain: boolean
  citiesGeo: CitiesGeo[]
  cityGeo: CitiesGeo
  weather: null
  loading: boolean
  error: string
  addedWeather: any
}

export default createStore<State>({
  state: {
    seeMain: true,
    citiesGeo: [],
    cityGeo: { name: '', state: '', country: '', lat: '', lon: '' },
    weather: null,
    loading: false,
    error: '',
    addedWeather: [],
  },
  getters: {
    seeMain: (state) => state.seeMain,
    citiesGeo: (state) => state.citiesGeo,
    cityGeo: (state) => state.cityGeo,
    weather: (state) => state.weather,
    loading: (state) => state.loading,
    error: (state) => state.error,
    addedWeather: (state) => state.addedWeather,
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
    setAddedWeather(state, addedWeather) {
      state.addedWeather.push(addedWeather)
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
      commit('setError', '')
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${cityGeo.lat}&lon=${cityGeo.lon}&exclude=minutely,alerts&units=metric&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
        )
        console.log('my res is', response.data)
        commit('setWeather', response.data)
      } catch (error) {
        console.log('error')
        // console.log(error.request.statusText)
        commit('setError', `${error}`)
      } finally {
        commit('setLoading', false)
      }
    },
    fetchAddedWeather({ commit }, cityGeoWeather) {
      console.log(cityGeoWeather)
      commit('setAddedWeather', cityGeoWeather)
    },
  },
  modules: {},
})
