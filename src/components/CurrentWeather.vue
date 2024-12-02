<template>
  <div class="top">
    <div @click="store.dispatch('updateSeeMain', true)">buttn back</div>
    <div v-if="cityGeo.state">{{ `${cityGeo.name}, ${cityGeo.state}, ${cityGeo.country}` }}</div>
    <div v-else>{{ `${cityGeo.name}, ${cityGeo.country}` }}</div>
    <div v-if="false">add btn</div>
    <div v-else>delete btn</div>
  </div>
  <div class="bottom">
    <div>{{ date }}</div>
    <img src="" alt="icons" />
    <div>Temperature</div>
    <div>Condition</div>
    <div>last update</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const cityGeo = computed(() => store.getters.cityGeo)
const weather = computed(() => store.getters.weather)
// const loading = computed(() => store.getters.loading)

const date = computed(() => {
  if (weather.value) {
    const date = new Date(weather.value.current.dt * 1000)
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayOfWeek = weekdays[date.getDay()]
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`
    return formattedDate
  } else {
    return 'date error!'
  }
})
// console.log('the weather', weather.value)
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
</style>
