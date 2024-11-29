<template>
  <div class="input-container">
    <i class="fas fa-search icon-left"></i>
    <!-- Search Icon (Unicode) -->
    <input type="text" placeholder="Search..." />
    <i class="fas fa-times-circle icon-right"></i>
    <!-- Circled X Icon (Unicode) -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* input {
  width: 100%;
  box-sizing: border-box;
} */

.input-container {
  position: relative;
  /* width: 300px; */
}
.input-container input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 40px 10px 35px; /* Padding for icons */
  border: 1px solid #ccc;
  border-radius: 5px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  outline: none;
}
.input-container .icon-left,
.input-container .icon-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}
.input-container .icon-left {
  left: 10px;
}
.input-container .icon-right {
  right: 10px;
  cursor: pointer;
}
.input-container .icon-right:hover {
  color: #333;
}
</style>
