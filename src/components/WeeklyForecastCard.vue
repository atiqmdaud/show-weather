<template>
  <div class="container">
    <div class="left">
      <img src="" alt="icon" />
      <div class="day">
        <div>day</div>
        <div>condition</div>
      </div>
    </div>
    <div class="right">
      <div>Temperature</div>
      <div>details btn</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: burlywood;
  padding: 5px;
  justify-content: space-between;
  border-radius: 5px;
}

.left {
  display: flex;
  gap: 15px;
  align-items: center;
}

.day {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.right {
  display: flex;
  gap: 15px;
}
</style>
