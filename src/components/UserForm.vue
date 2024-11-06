<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CreateUserRequest } from '@/models/user'
import VueButton from '@/components/VueButton.vue'
import VueInput from '@/components/VueInput.vue'

const touchedFields = ref({
  email: false,
  name: false,
  avatar: false,
  password: false,
  role: false
})

const user = ref<CreateUserRequest>({
  email: '',
  name: '',
  avatar: '',
  password: '',
  role: ''
})

const emit = defineEmits({
  addUser: (user: CreateUserRequest) => {
    user.role = user.role.toLowerCase()
    return (
      user &&
      user.name.length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) &&
      user.password &&
      user.avatar &&
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
        user.avatar
      )
    )
  }
})

const formSubmitted = ref(false)

const emailIsValid = computed(() => {
  if (user.value.email.length === 0 && !touchedFields.value.email) {
    return null
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(user.value.email)
})

const usernameIsValid = computed(() => {
  if (user.value.name.length === 0 && !touchedFields.value.name) {
    return null
  }
  return !!user.value.name
})

const passwordIsValid = computed(() => {
  if (user.value.password.length === 0 && !touchedFields.value.password) {
    return null
  }
  return !!user.value.password
})

const avatarIsValid = computed(() => {
  if (user.value.avatar.length === 0 && !touchedFields.value.avatar) {
    return null
  }
  return (
    !!user.value.avatar &&
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      user.value.avatar
    )
  )
})

const roleIsValid = computed(() => {
  if (user.value.role.length === 0 && !touchedFields.value.role) {
    return null
  }

  return (
    !!user.value.role &&
    (user.value.role.toLowerCase() === 'customer' || user.value.role.toLowerCase() === 'admin')
  )
})

function clearValues() {
  user.value.password = ''
  user.value.name = ''
  user.value.avatar = ''
  user.value.email = ''
}

function clearTouchedFields() {
  touchedFields.value.avatar = false
  touchedFields.value.email = false
  touchedFields.value.name = false
  touchedFields.value.password = false
}

const onSubmit = () => {
  emit('addUser', { ...user.value })
  formSubmitted.value = false
  clearValues()
  clearTouchedFields()
}
</script>

<template>
  <div class="pe-5 ps-5 pb-3 pt-3 rounded bg-white border border-1 border-secondary">
    <form @submit.prevent="onSubmit" class="needs-validation" novalidate>
      <h1>Register form</h1>
      <p class="text-grey">Please fill in all the fields</p>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <VueInput
          :is-valid="usernameIsValid"
          id="name"
          placeholder="Enter user name"
          v-model="user.name"
          @blur="touchedFields.name"
        ></VueInput>
        <div class="invalid-feedback">Username is required.</div>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <VueInput
          id="password"
          :is-valid="passwordIsValid"
          v-model="user.password"
          placeholder="Enter password"
          type="text"
          @blur="touchedFields.password"
        ></VueInput>
        <div class="invalid-feedback">Password is required.</div>
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <VueInput
          id="email"
          :is-valid="emailIsValid"
          placeholder="Enter email"
          v-model="user.email"
          @blur="touchedFields.email"
        ></VueInput>
        <div class="invalid-feedback">Email is required and should be in valid format.</div>
      </div>

      <div class="mb-3">
        <label for="role" class="form-label">Role (customer or admin)</label>
        <VueInput
          id="role"
          :is-valid="roleIsValid"
          placeholder="Choose role"
          v-model="user.role"
          @blur="touchedFields.role"
        ></VueInput>
        <div class="invalid-feedback">
          Role is required and should be either 'admin' or 'customer'
        </div>
      </div>

      <div class="mb-3">
        <label for="avatar" class="form-label">Avatar</label>
        <VueInput
          id="avatar"
          :is-valid="avatarIsValid"
          v-model="user.avatar"
          placeholder="Enter avatar URL"
          @blur="touchedFields.avatar"
        ></VueInput>
        <div class="invalid-feedback">Avatar is required and should be a valid url.</div>
      </div>

      <div class="d-flex justify-content-end">
        <VueButton button-type="submit" button-style="primary">Submit</VueButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.text-grey {
  color: grey;
}
</style>
