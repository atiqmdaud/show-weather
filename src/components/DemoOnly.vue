<template>
  <div id="app">
    <div class="input-container">
      <input
        v-model="city"
        placeholder="Enter city"
        @keyup.enter="getWeather"
        @input="fetchSuggestions"
      />
      <span class="clear-button" @click="clearCity">&times;</span>
    </div>
    <ul v-if="suggestions.length">
      <li
        v-for="suggestion in suggestions"
        :key="`${suggestion.name},${suggestion.country}`"
        @click="
          selectSuggestion(
            suggestion.lat,
            suggestion.lon,
            suggestion.state
              ? `${suggestion.name},${suggestion.state},${suggestion.country}`
              : `${suggestion.name},${suggestion.country}`,
          )
        "
      >
        <div v-if="suggestion.state">
          {{
            `${suggestion.name},${suggestion.state ? suggestion.state : ''},${suggestion.country}`
          }}
        </div>
        <div v-else>
          {{ `${suggestion.name},${suggestion.country}` }}
        </div>
      </li>
    </ul>
    <button @click="getWeather">Get Weather</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="weather">
      <h2>{{ weather.name }}</h2>
      <h2>{{ weather.sys.country }}</h2>
      <p>{{ weather.weather[0].description }}</p>
      <!-- <p>{{ ((weather.main.temp - 32) * 5) / 9 }} °C</p> -->
      <p>{{ (weather.main.temp - 273.15).toFixed() }} °C</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const city = ref('')
const citylatlon = ref({})
const suggestions = ref<
  { name: string; state?: string; country: string; lat: string; lon: string }[]
>([])
const store = useStore()

const weather = computed(() => store.getters.weather)
const loading = computed(() => store.getters.loading)
const error = computed(() => store.getters.error)

const debounce = (func: Function, delay: number) => {
  let timeout: number
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

const fetchSuggestions = debounce(async () => {
  if (city.value.trim().length > 2) {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=10&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
      )

      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/find?q=${city.value}&type=like&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
      // )

      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
      // )
      console.log('the response is:', response.data)
      // suggestions.value = response.data.list.map((item: any) => `${item.name},${item.sys.country}`)

      // suggestions.value = response.data.list.map((item: any) => {
      //   return { name: item.name, country: item.sys.country, id: item.id }
      // })

      suggestions.value = response.data.map((item: any) => {
        return {
          name: item.name,
          state: item.state,
          country: item.country,
          lat: item.lat,
          lon: item.lon,
        }
      })

      // suggestions.value = raw.filter(
      //   (value, index, self) =>
      //     index ===
      //     self.findIndex((t: any) => t.name === value.name && t.country === value.country),
      // )
    } catch (error: any) {
      console.error('Error fetching suggestions:', error)
    }
  } else {
    suggestions.value = []
  }
}, 300)

const getWeather = () => {
  if (citylatlon.value) {
    store.dispatch('fetchWeather', citylatlon.value)
  }
}

const clearCity = () => {
  city.value = ''
  // citylatlon.value = {lat:"",lon:""}
  suggestions.value = []
}

const selectSuggestion = (lat: string, lon: string, infos: string) => {
  console.log(lat, lon)
  citylatlon.value = { lat: lat, lon: lon }
  city.value = infos
  suggestions.value = []
  getWeather()
}
</script>

<style>
/* Add some basic styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.input-container {
  position: relative;
  display: inline-block;
}

input {
  padding: 0.5em;
  padding-right: 2em; /* Adjust padding for the clear button */
  margin: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.clear-button {
  position: absolute;
  top: 50%;
  right: 10px; /* Positioning on the right side inside the input field */
  transform: translateY(-50%);
  cursor: pointer;
  color: #aaa;
  font-size: 1.2em;
}

.clear-button:hover {
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  margin: 0.5em 0;
}

li {
  padding: 0.5em;
  cursor: pointer;
}

li:hover {
  background-color: #f0f0f0;
}

button {
  padding: 0.5em 1em;
  margin: 0.5em;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
