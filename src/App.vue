<script setup lang="ts">
//real development start
//api use start
import { RouterLink, RouterView } from 'vue-router'
// import { RouterView } from 'vue-router'
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
    <footer>&copy; 2024 Your Company. All rights reserved.</footer>
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
  /* border: 1px solid red; */
}

li {
  list-style-type: none;
}
a {
  text-decoration: none;
}

main {
}

.footer-container {
  display: flex;
  justify-content: center;
}

footer {
  position: absolute;
  /* width: 100%; */
  bottom: 0;
  /* border: 1px solid blue; */
  /* background-color: rgb(180, 180, 177); */
  text-align: center;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

@media (min-width: 1024px) {
}
</style>
