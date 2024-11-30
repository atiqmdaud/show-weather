<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue'
import HourlyForecastCard from '@/components/HourlyForecastCard.vue'
import UserInput from '@/components/UserInput.vue'
import WeatherAddedCard from '@/components/WeatherAddedCard.vue'
import WeatherCityResult from '@/components/WeatherCityResult.vue'
import WeeklyForecastCard from '@/components/WeeklyForecastCard.vue'

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
    <section id="current-weather">
      <CurrentWeather />
    </section>
    <section id="hourly-forecast">
      <div>Hourly Forecast</div>
      <div class="hourly-forecast">
        <HourlyForecastCard v-for="h in ['a', 'b', 'c', 'd', 'e', 'f']" :key="h" />
      </div>
    </section>
    <section id="weekly-forecast">
      <div>Weekly Forecast</div>
      <div class="weekly-forecast">
        <WeeklyForecastCard v-for="w in ['a', 'b', 'c', 'd', 'e', 'f', 'g']" :key="w" />
      </div>
    </section>
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

section#current-weather {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  /* gap: 5px; */
}

section#hourly-forecast {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid red;
}

.hourly-forecast {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  justify-content: space-between;
}

section#weekly-forecast {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid red;
}

.weekly-forecast {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 200px;
}
</style>
