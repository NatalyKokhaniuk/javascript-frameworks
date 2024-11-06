<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import type { User } from '@/models/user'
import axios from 'axios'

const route = useRoute()

const user = ref<User | null>(null)

onMounted(() => {
  axios.get(`users/${route.params.id}`).then((r) => (user.value = { ...r.data }))
})

watch(
  () => route.params.id,
  (newId, oldId) => {
    user.value = axios.get(`users/${newId}`)
  }
)
</script>

<template>
  <div class="user-container" v-if="user !== null">
    <div class="user__image">
      <img :src="user.avatar" alt="avatar" />
    </div>
    <div class="user__body">
      <p>ID: {{ user.id }}</p>
      <p>Role: {{ user.role }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Password: {{ user.password }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  display: flex;
  flex-direction: row;
  width: auto;
  gap: 25px;
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;
}

.user__image {
  width: 200px;
  height: 200px;
}

.user__image > img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
