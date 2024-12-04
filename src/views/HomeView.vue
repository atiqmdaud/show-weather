<script setup lang="ts">
import CurrentWeather from '@/components/CurrentWeather.vue'
import HourlyForecastCard from '@/components/HourlyForecastCard.vue'
import UserInput from '@/components/UserInput.vue'
import WeatherAddedCard from '@/components/WeatherAddedCard.vue'
import WeatherCityResult from '@/components/WeatherCityResult.vue'
import WeeklyForecastCard from '@/components/WeeklyForecastCard.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const citiesGeo = computed(() => store.getters.citiesGeo)
const seeMain = computed(() => store.getters.seeMain)
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
}

#main-sections {
  gap: 25px;
}

section#weather-city-result {
  max-height: 270px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  background-color: #3764d7;
  padding: 13px;
}

section#hourly-forecast {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
}

.weekly-forecast {
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  max-height: 80px;
}

.title-hourly,
.title-weekly {
  margin-top: 15px;
  font-weight: bold;
}
</style>
