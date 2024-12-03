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
      <img :src="`${imageUrl}`" alt="profile photo" width="100px" height="100px" />
      <div>
        <input type="file" v-show="!disabled" @change="handleImageUpload" />
      </div>
      <!-- <input type="file" @change="handleFileUpload" /> -->
      <div>{{ profileInfo.name }}</div>
      <div>{{ profileInfo.email }} | {{ profileInfo.phone }}</div>
    </div>
    <div>
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
    </div>
    <div @click="clearLocalStorage" style="cursor: pointer; text-align: center">
      Clear LocalStorage
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

// const imageUrl = ref('https://placehold.co/100')
const handleImageUpload = (event: any) => {
  const file = event.target.files[0]
  console.log(file)
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
  }
}

const profileInfo = computed(() => {
  return {
    name: ref(
      localStorage.getItem('weatherDemo_31224_name')
        ? localStorage.getItem('weatherDemo_31224_name')
        : 'demo',
    ),
    email: ref(
      localStorage.getItem('weatherDemo_31224_email')
        ? localStorage.getItem('weatherDemo_31224_email')
        : 'demo@demo.com',
    ),
    phone: ref(
      localStorage.getItem('weatherDemo_31224_phone')
        ? localStorage.getItem('weatherDemo_31224_phone')
        : JSON.stringify(123456789),
    ),
    imageUrl: ref(
      localStorage.getItem('weatherDemo_31224_imageUrl')
        ? localStorage.getItem('weatherDemo_31224_imageUrl')
        : 'https://placehold.co/100',
    ),
  }
})

const name = ref(profileInfo.value.name)
const email = ref(profileInfo.value.email)
const phone = ref(profileInfo.value.phone)
const imageUrl = ref(profileInfo.value.imageUrl)
console.log(imageUrl.value)
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
  disabled.value = false
}

const handleSubmit = () => {
  localStorage.setItem('weatherDemo_31224_name', `${name.value}`)
  localStorage.setItem('weatherDemo_31224_email', `${email.value}`)
  localStorage.setItem('weatherDemo_31224_phone', `${phone.value}`)
  localStorage.setItem('weatherDemo_31224_imageUrl', `${imageUrl.value}`)

  disabled.value = true
}

const clearLocalStorage = () => {
  localStorage.removeItem('weatherDemo_31224_name')
  localStorage.removeItem('weatherDemo_31224_email')
  localStorage.removeItem('weatherDemo_31224_phone')
  localStorage.removeItem('weatherDemo_31224_imageUrl')
}
</script>

<style>
.profile {
  /* max-height: 100vh; */
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  margin: 15px;
  gap: 15px;
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
  gap: 10px;
  /* justify-content: space-around; */
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
  /* position: relative; */
  /* bottom: 0px; */
  margin-top: 0px;
}

input {
  outline: none;
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
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
