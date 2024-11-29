<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import UserInput from '@/components/UserInput.vue'

// import DemoOnly from '@/components/DemoOnly.vue'

// import store from '@/store'
</script>

<template>
  <main>
    <div class="container">
      <div class="container-nav">
        <NavBar />
      </div>
      <div class="container-input">
        <UserInput />
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
.container {
  background-color: #fff;
  height: 100vh;
}

.container-nav {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.container-input {
  padding-left: 13px;
  padding-right: 13px;
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
