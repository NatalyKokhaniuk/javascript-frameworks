<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { AuthService } from '@/helpers/auth-service'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()
const loginMessage = ref<string>('')
const loginClass = ref<string>('text-black')

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Email should be in valid format').required('Email is required'),
    password: yup.string().required('Password is required')
  })
})

const onSubmit = handleSubmit(async (values) => {
  loginMessage.value = 'Logging in...'
  loginClass.value = 'tex'
  const response = await AuthService.login(values.email, values.password)
  if (response.success) {
    loginMessage.value = ''
    router.push('/').then()
  } else {
    loginClass.value = 'text-danger'
    loginMessage.value = response.errorMessage
  }
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__form">
      <form @submit="onSubmit">
        <h2 class="text-center">Login</h2>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input class="form-control" type="email" v-model="email" v-bind="emailAttrs" />
          <div class="text-danger">{{ errors.email }}</div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input class="form-control" type="password" v-model="password" v-bind="passwordAttrs" />
          <div class="text-danger">{{ errors.password }}</div>
        </div>

        <div class="d-flex justify-content-end">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
      <div v-if="loginMessage" :class="loginClass">
        {{ loginMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper__form {
  width: 300px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
}
</style>
