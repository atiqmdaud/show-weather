<template>
  <div class="container">
    <div class="left">
      <div>1</div>
      <div>2</div>
      <br />
      <div>33</div>
    </div>
    <div class="right">
      <div>345678</div>
      <div>4</div>
      <br />
      <div>878</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
  /* padding-left: 5px;
  padding-right: 5px; */
  background-color: beige;
}

.left,
.right {
  padding: 0 10px 0 10px;
}
</style>
