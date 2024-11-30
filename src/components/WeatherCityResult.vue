<template>
  <div>{{ props.val }}</div>
  <hr v-if="props.ind < props.leng - 1" />
</template>

<script setup lang="ts">
const props = defineProps<{ val: number; ind: number; leng: number }>()
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
</style>
