<template>
  <div class="profile">
    <div class="top">
      <div class="top-title">Edit Profile</div>
    </div>
    <div class="second">
      <img
        style="object-fit: cover; border-radius: 50%"
        :src="imageUrl"
        alt="profile photo"
        width="100px"
        height="100px"
      />
      <div>
        <input type="file" v-show="!disabled" @change="handleImageUpload" />
      </div>
      <div>{{ profileInfo.name }}</div>
      <div>{{ profileInfo.email }} | {{ profileInfo.phone }}</div>
    </div>
    <div>
      <div class="third">
        <div>
          <!-- <label for="name"Name:</label> -->
          <input
            @input="inputName"
            v-model="name"
            type="text"
            id="name"
            required
            :disabled="disabled"
          />
          <div style="color: red; font-size: smaller" v-show="nameEmpty">Name cannot be empty!</div>
        </div>
        <div>
          <!-- <label for="email">Email:</label> -->
          <input
            @input="inputEmail"
            v-model="email"
            type="email"
            id="email"
            required
            :disabled="disabled"
            @blur="validateEmail"
          />
          <div style="color: red; font-size: smaller" v-show="emailEmpty">
            Email cannot be empty!
          </div>
          <div style="color: red; font-size: smaller" v-show="emailNotValid">
            Email is not valid!
          </div>
        </div>
        <div>
          <!-- <label for="phone">Phone Number:</label> -->
          <input
            @input="inputPhone"
            v-model="phone"
            type="tel"
            id="phone"
            required
            :disabled="disabled"
          />
          <div style="color: red; font-size: smaller" v-show="phoneEmpty">
            Phone cannot be empty!
          </div>
        </div>
      </div>
    </div>
    <div @click="clearLocalStorage" style="cursor: pointer; text-align: center">
      Clear LocalStorage
    </div>
    <div class="bottom">
      <button
        :disabled="hasError || hasErrorValid || nameEmpty || emailEmpty || phoneEmpty"
        @click="handleClick"
        type="submit"
      >
        {{ disabled ? 'EDIT' : 'SUBMIT' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'

let hasError = false
let hasErrorValid = false

const nameEmpty = ref(false)

const inputName = () => {
  if (name.value == '') {
    nameEmpty.value = true
    hasError = true
  } else {
    nameEmpty.value = false
    hasError = false
  }
}

const emailEmpty = ref(false)
const emailNotValid = ref(false)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateEmail = () => {
  if (emailPattern.test(`${email.value}`)) {
    emailNotValid.value = false
    hasErrorValid = false
  } else {
    emailNotValid.value = true
    hasErrorValid = true
  }
}

const inputEmail = () => {
  if (email.value == '') {
    emailEmpty.value = true
    hasError = true
  } else {
    emailEmpty.value = false
    hasError = false
  }
}

const phoneEmpty = ref(false)

const inputPhone = () => {
  if (phone.value == '') {
    phoneEmpty.value = true
    hasError = true
  } else {
    phoneEmpty.value = false
    hasError = false
  }
}

const imageUrl = ref('https://placehold.co/100')
const handleImageUpload = (event: any) => {
  const file = event.target.files[0]
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
  disabled.value = false
}

const handleSubmit = () => {
  localStorage.setItem('weatherDemo_31224_name', `${name.value}`)
  localStorage.setItem('weatherDemo_31224_email', `${email.value}`)
  localStorage.setItem('weatherDemo_31224_phone', `${phone.value}`)

  disabled.value = true
}

const clearLocalStorage = () => {
  localStorage.removeItem('weatherDemo_31224_name')
  localStorage.removeItem('weatherDemo_31224_email')
  localStorage.removeItem('weatherDemo_31224_phone')
}
</script>

<style>
.profile {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
  gap: 10px;
}

.top {
  display: flex;
  justify-content: center;
}

.top-title {
  font-weight: bold;
}

.top-btn-forward {
  visibility: hidden;
}

.second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.second img {
  max-width: 100%;
  height: auto;
}

.third {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.bottom {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 10px;
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
  cursor: pointer;
}

button:active {
  outline: none;
  box-shadow: none;
  transform: none;
}

button:disabled {
  background-color: brown;
}
</style>
