<script setup lang="ts">
import { computed, ref } from 'vue'
import { AuthService } from '@/helpers/auth-service'

const isUserAuthenticated = computed(() => {
  console.log(AuthService.userAuthenticated.value)
  return AuthService.userAuthenticated.value
})

const logout = () => {
  AuthService.logout()
}
</script>

<template>
  <ul class="navigation">
    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/">Home</RouterLink>
    </li>

    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/about">About</RouterLink>
    </li>

    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/lottery">Lottery</RouterLink>
    </li>

    <li class="navigation__item">
      <RouterLink v-if="!isUserAuthenticated" class="navigation__link" to="/login"
        >Login</RouterLink
      >
      <button @click="logout" v-if="isUserAuthenticated" class="btn btn-secondary">Logout</button>
    </li>
  </ul>
</template>

<style scoped>
.navigation {
  list-style: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.navigation__link {
  text-decoration: none;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  color: black;
}

.navigation__link.link-active {
  color: white;
}
</style>
