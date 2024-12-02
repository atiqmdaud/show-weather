<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue'
import HourlyForecastCard from '@/components/HourlyForecastCard.vue'
import UserInput from '@/components/UserInput.vue'
import WeatherAddedCard from '@/components/WeatherAddedCard.vue'
import WeatherCityResult from '@/components/WeatherCityResult.vue'
import WeeklyForecastCard from '@/components/WeeklyForecastCard.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

// import store from '@/store'

const store = useStore()
const citiesGeo = computed(() => store.getters.citiesGeo)
const seeMain = computed(() => store.getters.seeMain)
// console.log(seeMain)
</script>

<template>
  <div v-if="seeMain" id="main-sections">
    <section id="user-input">
      <UserInput />
    </section>
    <section v-if="citiesGeo.length > 0" id="weather-city-result">
      <WeatherCityResult
        v-for="(cityGeo, index) in citiesGeo"
        :key="index"
        :cityGeo="cityGeo"
        :index="index"
      />
    </section>
    <section v-else id="weather-list-card">
      <WeatherAddedCard />
    </section>
  </div>
  <div v-else id="detail-sections">
    <div class="detail-sections-top">
      <section id="current-weather">
        <CurrentWeather />
      </section>
    </div>
    <div class="detail-sections-bottom">
      <section id="hourly-forecast">
        <div class="title-hourly">Hourly Forecast</div>
        <div class="hourly-forecast">
          <HourlyForecastCard />
        </div>
      </section>
      <section id="weekly-forecast">
        <div class="title-weekly">Weekly Forecast</div>
        <div class="weekly-forecast">
          <WeeklyForecastCard />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
#main-sections {
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  padding-right: 13px;
  margin-bottom: 25px;
}
#detail-sections {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.detail-sections-bottom {
  display: flex;
  flex-direction: column;
  padding-left: 13px;
  padding-right: 13px;
}

.detail-sections-top {
  display: flex;
  flex-direction: column;
  /* margin-bottom: 25px; */
}

#main-sections {
  gap: 25px;
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
  /* overflow-x: auto; */
  /* gap: 5px; */
  background-color: #3764D7;
  /* padding-left: 13px;
  padding-right: 13px; */
  padding: 13px;
}

section#hourly-forecast {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* border: 1px solid red; */
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
  gap: 10px;
  /* border: 1px solid red; */
}

.weekly-forecast {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 100px;
}

.title-hourly,
.title-weekly {
  margin-top: 15px;
  font-weight: bold;
}
</style>
