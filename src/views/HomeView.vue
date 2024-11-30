<script setup lang="ts">
import UserInput from '@/components/UserInput.vue'
import WeatherAddedCard from '@/components/WeatherAddedCard.vue'
import WeatherCityResult from '@/components/WeatherCityResult.vue'

// import store from '@/store'
</script>

<template>
  <div v-if="false" id="main-sections">
    <section id="user-input">
      <UserInput />
    </section>
    <section v-if="false" id="weather-city-result">
      <WeatherCityResult
        v-for="(t, index) in [1, 2, 3, 4, 5]"
        :key="t"
        :val="t"
        :ind="index"
        :leng="[1, 2, 3, 4, 5].length"
      />
    </section>
    <section v-else id="weather-list-card">
      <WeatherAddedCard v-for="l in ['a', 'b', 'c']" :key="l" />
    </section>
  </div>
  <div v-else id="detail-sections">
    <section id="current-weather">current weather</section>
    <section id="hourly-forecast">Hourly forecast</section>
    <section id="weekly forecast">weekly forecast</section>
  </div>
</template>

<style lang="css" scoped>
#main-sections,
#detail-sections {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
  padding-left: 13px;
  padding-right: 13px;
}
section {
  /* padding-left: 13px; */
  /* padding-right: 13px; */
}

section#weather-city-result {
  max-height: 270px;
  /* overflow-y: scroll; */
  overflow: auto;
  /* background-color: antiquewhite; */
  /* height: 370px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* border: 1px solid #ccc; */
}
section#weather-list-card {
  max-height: 370px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
