<script setup lang="ts">
import UserInput from '@/components/UserInput.vue'
import WeatherAddedCard from '@/components/WeatherAddedCard.vue'

// import store from '@/store'
</script>

<template>
  <section id="user-input">
    <UserInput />
  </section>
  <section id="weather-list-card">
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
    <WeatherAddedCard />
  </section>
</template>

<style lang="css" scoped>
section {
  padding-left: 13px;
  padding-right: 13px;
}

section#weather-list-card {
  max-height: 70vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
