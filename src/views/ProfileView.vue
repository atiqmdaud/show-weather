<template>
  <div class="profile">
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="top">
      <div>btn back</div>
      <div class="top-title">Edit Profile</div>
      <div class="top-btn-forward">btn forward</div>
    </div>
    <div class="second">
      <img :src="photoUrl" alt="Profile Photo" v-if="photoUrl" />
      <input type="file" @change="handleFileUpload" />
      <label for="photo">Profile Photo:</label>
      <div>name | phone number</div>
    </div>
    <div class="third">
      <form @submit.prevent="">
        <div>
          <label for="name">Name:</label> <input v-model="name" type="text" id="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="phone">Phone Number:</label>
          <input v-model="phone" type="tel" id="phone" required />
        </div>
      </form>
    </div>
    <div class="bottom">
      <button type="submit">Edit/Submit</button>
    </div>
  </div>
</template>

<style>
.profile {
  /* max-height: 100vh; */
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
}

.top {
  display: flex;
  justify-content: space-around;
  /* border: 1px solid red; */
}

.top-title {
  font-weight: bold;
}

.top-btn-forward {
  visibility: hidden;
}
@media (min-width: 1024px) {
}
</style>
