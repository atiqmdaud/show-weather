<script setup lang="ts">
//real development start
import { RouterLink, RouterView } from 'vue-router'
// import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2><RouterLink to="/">Show Weather</RouterLink></h2>
    <navbar
      ><li>
        <RouterLink to="/profile">Profile</RouterLink>
      </li>
    </navbar>
  </header>

  <main>
    <RouterView />
  </main>
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
  /* border: 1px solid red; */
}

li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

main{
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

@media (min-width: 1024px) {
}
</style>
