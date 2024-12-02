<template>
  <div class="top white-color">
    <div @click="store.dispatch('updateSeeMain', true)">buttn back</div>
    <div style="margin-bottom: 10px" v-if="cityGeo.state">
      {{ `${cityGeo.name}, ${cityGeo.state}, ${cityGeo.country}` }}
    </div>
    <div v-else>{{ `${cityGeo.name}, ${cityGeo.country}` }}</div>
    <div @click="addedWeather(weather)" v-if="true">add btn</div>
    <div v-else>delete btn</div>
  </div>
  <div class="bottom white-color">
    <div style="font-size: small">{{ date }}</div>
    <img :src="icon" alt="icons" />
    <div class="temperature">{{ temperature }} °C</div>
    <div class="condition">{{ condition }}</div>
    <div style="margin-top: 10px; font-size: small">Last update {{ updatedTime }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cityGeo = computed(() => store.getters.cityGeo)
const weather = computed(() => store.getters.weather)
// const loading = computed(() => store.getters.loading)

const getDate = () => {
  const date = new Date(weather.value.current.dt * 1000)
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = weekdays[date.getDay()]
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()
  const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`
  return formattedDate
}

const getTime = () => {
  const date = new Date(weather.value.current.dt * 1000)

  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12 // The hour '0' should be '12'

  const formattedTime = `${hours}:${minutes} ${ampm}`
  return formattedTime
}

const date = computed(() => {
  if (weather.value) {
    return getDate()
  } else {
    return 'date error!'
  }
})

// const iconBaseUrl = "https://openweathermap.org/img/wn/01d@2x.png"
const iconBaseUrl = 'https://openweathermap.org/img/wn'

const icon = computed(() => {
  if (weather.value) {
    const iconName = weather.value.current.weather[0].icon
    return `${iconBaseUrl}/${iconName}.png`
  } else {
    return ''
  }
})

const condition = computed(() => {
  if (weather.value) {
    return weather.value.current.weather[0].description
  } else {
    return 'condition error!'
  }
})

const temperature = computed(() => {
  if (weather.value) {
    return weather.value.current.temp.toFixed()
  } else {
    return 'temp error!'
  }
})

const updatedTime = computed(() => {
  if (weather.value) {
    return getTime()
  } else {
    return 'updated time error!'
  }
})
// console.log('the weather', weather.value)

const addedWeather = (addedWeather: any) => {
  store.dispatch('fetchAddedWeather', addedWeather)
}
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: aliceblue; */
}

.bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: antiquewhite; */
}

.temperature,
.condition {
  font-size: x-large;
}

.white-color {
  color: aliceblue;
}
</style>
