<template>
  <div @click="store.dispatch('updateSeeMain', false)">
    <div v-if="props.cityGeo.state">
      {{ props.cityGeo.name }},
      <span class="state">{{ props.cityGeo.state ? props.cityGeo.state : '' }}</span
      >, <span class="country">{{ props.cityGeo.country }}</span>
    </div>
    <div v-else>
      {{ props.cityGeo.name }}, <span class="country">{{ props.cityGeo.country }}</span>
    </div>
    <hr v-if="props.index < props.length - 1" />
  </div>
</template>

<script setup lang="ts">
import type { WeatherCityResultProps } from '@/types/types'
import { useStore } from 'vuex'
const props = defineProps<WeatherCityResultProps>()

const store = useStore()
</script>

<style scoped>
div {
  /* background-color: aquamarine; */
}

hr {
  border: 0;
  clear: both;
  display: block;
  width: 100%;
  background-color: #ccc;
  height: 1px;
}

.state {
  /* font-size: small; */
  opacity: 0.7;
}

.country {
  /* font-size: smaller; */
  opacity: 0.7;
}
</style>
