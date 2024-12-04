<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2><RouterLink style="color: black" to="/">Weather</RouterLink></h2>
    <RouterLink style="color: black" to="/profile"
      ><i class="far fa-user" aria-hidden="true"></i
    ></RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
  <div class="footer-container">
    <footer>&copy; 2024 Show Weather Sdn Bhd. All rights reserved.</footer>
  </div>
</template>

<style scoped>
header {
  max-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: -1px;
}

li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

.footer-container {
  display: flex;
  justify-content: center;
}

footer {
  position: absolute;
  bottom: 0;
  text-align: center;
}
</style>
