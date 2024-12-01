<template>
  <div class="input-container">
    <i class="fas fa-search icon-left"></i>

    <input
      ref="autoFocusInput"
      type="text"
      placeholder="Enter city"
      v-model="city"
      @input="fetchCitiesGeo"
      @keyup.enter="fetchCitiesGeo"
    />
    <i class="fas fa-times-circle icon-right" @click="clearCity"></i>
  </div>
  <div class="error-too-short" v-show="tooShort">Too Short</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import type { CitiesGeo } from '@/types/types'
import { countryCodes } from '@/data/CountryCode'
import { useStore } from 'vuex'

const city = ref<string>('')
const tooShort = ref(false)
// const demoCitySuggestion = computed(() => store.getters.citiesGeo) //import computed
const store = useStore()

const autoFocusInput = ref<HTMLInputElement>()

const debounce = (func: Function, delay: number) => {
  let timeout: number
  return (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

const fetchCitiesGeo = debounce(async () => {
  if (city.value.trim().length > 2) {
    tooShort.value = false
    try {
      // console.log('req..')
      // console.log(city.value)
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}`,
      )
      // console.log('the response is:', response.data)

      const citiesGeo = response.data.map((item: CitiesGeo) => {
        return {
          name: item.name,
          state: item.state,
          country: countryCodes[item.country as keyof typeof countryCodes] || item.country,
          lat: item.lat,
          lon: item.lon,
        }
      })
      store.dispatch('fetchCitiesGeo', citiesGeo)
    } catch (error: unknown) {
      console.error('Error fetching suggestions:', error)
    }
  } else if (city.value.trim().length == 0) {
    tooShort.value = false
    store.dispatch('fetchCitiesGeo', [])
  } else {
    tooShort.value = true
    // store.dispatch('fetchCitiesGeo', [])
  }
  // console.log(demoCitySuggestion.value)
}, 300)

const clearCity = () => {
  city.value = ''
  store.dispatch('fetchCitiesGeo', [])
  autoFocusInput.value?.focus()
}
</script>

<style scoped>
/* input {
  width: 100%;
  box-sizing: border-box;
} */

.input-container {
  position: relative;
  /* width: 300px; */
}
.input-container input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 40px 10px 35px; /* Padding for icons */
  border: 1px solid #ccc;
  border-radius: 5px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  outline: none;
}
.input-container .icon-left,
.input-container .icon-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.input-container .icon-left {
  left: 10px;
}
.input-container .icon-right {
  right: 10px;
  cursor: pointer;
}
.input-container .icon-right:hover {
  color: #333;
}

.error-too-short {
  color: red;
  font-size: small;
  margin-top: 3px;
}
</style>
