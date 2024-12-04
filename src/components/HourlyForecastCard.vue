<template>
  <div v-for="(hour, index) in hourly" :key="index" class="container">
    <img :src="`${iconBaseUrl}/${hour.weather[0].icon}.png`" alt="icon" />
    <div>{{ hour.temp.toFixed() }} °C</div>
    <div style="font-size: 12px;opacity: 0.7;">{{ getTime(hour.dt) }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const weather = computed(() => store.getters.weather)
const hourly = computed(() => {
  if (weather.value) {
    return weather.value.hourly
  } else {
    return []
  }
})

const iconBaseUrl = 'https://openweathermap.org/img/wn'

const getTime = (time: number) => {
  const date = new Date(time * 1000)

  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12

  const formattedTime = `${hours}:${minutes} ${ampm}`
  return formattedTime
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #F5F5F5;
  padding: 5px;
  border-radius: 5px;
}
</style>
