<template>
  <div class="top">
    <div @click="store.dispatch('updateSeeMain', true)">buttn back</div>
    <div>city name,city state,city country</div>
    <div v-if="false">add btn</div>
    <div v-else>delete btn</div>
  </div>
  <div class="bottom">
    <div>date</div>
    <img src="" alt="icons" />
    <div>Temperature</div>
    <div>Condition</div>
    <div>last update</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
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
