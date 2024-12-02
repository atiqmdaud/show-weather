<template>
  <div
    style="color: aliceblue"
    v-for="(added, index) in addedWeather"
    :key="index"
    class="container"
  >
    <div class="left">
      <div>{{ added.name }}</div>
      <div>{{ getTime(added.daily[0].dt) }}</div>
      <br />
      <div>{{ added.daily[0].summary }}</div>
    </div>
    <div class="right">
      <div>{{ added.daily[0].temp.day.toFixed() }} °C</div>
      <div class="HiLo">
        <div>H: {{ added.daily[0].temp.max.toFixed() }} °C</div>
        <div style="visibility: hidden">aa</div>
        <div>L :{{ added.daily[0].temp.min.toFixed() }} °C</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const addedWeather = computed(() => store.getters.addedWeather)

const getTime = (time: number) => {
  const date = new Date(time * 1000)

  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12 // The hour '0' should be '12'

  const formattedTime = `${hours}:${minutes} ${ampm}`
  return formattedTime
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
  /* padding-left: 5px;
  padding-right: 5px; */
  background-color: #3764d7;
}

.left,
.right {
  /* padding: 0 10px 0 10px; */
  padding: 10px;
}

.HiLo {
  display: flex;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}
</style>
