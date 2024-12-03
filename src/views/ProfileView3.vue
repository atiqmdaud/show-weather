<template>
  <div class="profile">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="top">
      <!-- <div>btn back</div> -->
      <div class="top-title">Edit Profile</div>
      <!-- <div class="top-btn-forward">btn forward</div> -->
    </div>
    <div class="second">
      <!-- <img :src="photoUrl" alt="Profile Photo" v-if="photoUrl" /> -->
      <img src="https://placehold.co/10" alt="profile photo" width="60px" height="60px" />
      <div>
        <input type="file" v-show="!disabled" />
      </div>
      <!-- <input type="file" @change="handleFileUpload" /> -->
      <div>{{ profileInfo.name }}</div>
      <div>{{ profileInfo.email }} | {{ profileInfo.phone }}</div>
    </div>
    <div>
      <form @submit.prevent="">
        <div class="third">
          <div>
            <!-- <label for="name">Full name:</label> -->
            <input v-model="name" type="text" id="name" required :disabled="disabled" />
          </div>
          <div>
            <!-- <label for="email">Email:</label> -->
            <input v-model="email" type="email" id="email" required :disabled="disabled" />
          </div>
          <div>
            <!-- <label for="phone">Phone Number:</label> -->
            <input v-model="phone" type="tel" id="phone" required :disabled="disabled" />
          </div>
        </div>
      </form>
    </div>
    <div class="bottom">
      <button @click="handleClick" type="submit">
        {{ disabled ? 'EDIT' : 'SUBMIT' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'

const profileInfo = computed(() => {
  return {
    name: ref(localStorage.getItem('name') ? localStorage.getItem('name') : 'demo'),
    email: localStorage.getItem('email') ? localStorage.getItem('email') : 'demo@demo.com',
    phone: localStorage.getItem('phone') ? localStorage.getItem('phone') : '12345',
  }
})

const name = ref(profileInfo.value.name)

const email = ref(profileInfo.value.email)

const phone = ref(profileInfo.value.phone)

// const countryCode = ref('+60')
const disabled = ref(true)

const handleClick = () => {
  if (disabled.value) {
    handleDisabled()
  } else {
    handleSubmit()
  }
}

const handleDisabled = () => {
  console.log('clicked btn disabled')
  disabled.value = false
}

const handleSubmit = () => {
  localStorage.setItem('name', `${name.value}`)

  disabled.value = true
}
</script>

<style>
.profile {
  /* max-height: 100vh; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin: 15px;
}

.top {
  display: flex;
  /* justify-content: space-around; */
  /* border: 1px solid red; */
  justify-content: center;
}

.top-title {
  font-weight: bold;
}

.top-btn-forward {
  visibility: hidden;
}

.second {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* text-align: center; */
}

.second img {
  max-width: 100%;
  height: auto;
}

/* styles.css */
/* body {
    font-family: Arial, sans-serif;
} */

.third {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* justify-content: center; */
  /* align-items: center; */
  /* border: 1px solid red; */
  /* padding: 20px; */
}
.third input {
}

.bottom {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

input {
  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}

button {
  width: 100%;
  height: 40px;
  background-color: #2e3a5a;
  color: aliceblue;
  border-radius: 5px;
  font-size: 14px;
  border: none;
}

button:active {
  outline: none;
  box-shadow: none;
  transform: none;
}
@media (min-width: 1024px) {
}
</style>
