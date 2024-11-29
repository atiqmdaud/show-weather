<script setup lang="ts">
// import DemoOnly from '@/components/DemoOnly.vue'

// import store from '@/store'
</script>

<template>
  <main>
    <div class="container">123</div>
  </main>
</template>

<style lang="css" scoped>
.container {
  background-color: #c3c3c3;
  height: 100vh;
}

/* xs */
@media (min-width: 475px) {
  .container {
    max-width: 475px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* 2xl */
/* @media (min-width: 1536px) {} */
</style>
