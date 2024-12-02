<template>
  <div v-for="(day, index) in daily" :key="index" class="container">
    <div class="left">
      <img :src="`${iconBaseUrl}/${day.weather[0].icon}.png`" alt="icon" />
      <div class="day">
        <div>{{ getDay(day.dt) }}</div>
        <div>{{ day.weather[0].description }}</div>
      </div>
    </div>
    <div class="right">
      <div>
        <div>{{ day.temp.day.toFixed() }} °C</div>
      </div>
      <div>></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const weather = computed(() => store.getters.weather)
const daily = computed(() => {
  if (weather.value) {
    return weather.value.daily
  } else {
    return []
  }
})

const iconBaseUrl = 'https://openweathermap.org/img/wn'

const getDay = (time: number) => {
  const date = new Date(time * 1000)
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = weekdays[date.getDay()]
  return dayOfWeek
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: burlywood;
  padding: 5px;
  justify-content: space-between;
  border-radius: 5px;
}

.left {
  display: flex;
  gap: 15px;
  align-items: center;
}

.day {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.right {
  display: flex;
  gap: 15px;
}
</style>
