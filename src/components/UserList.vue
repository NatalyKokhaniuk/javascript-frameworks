<script setup lang="ts">
import type { User } from '@/models/user'
import { computed, ref, watch } from 'vue'
import VueInput from '@/components/VueInput.vue'
import SearchBar from '@/components/SearchBar.vue'
import VueModal from '@/components/VueModal.vue'

const props = defineProps<{
  users: User[]
}>()

const refUsers = ref<User[]>([])
const userToUpdate = ref<User>({
  email: '',
  name: '',
  avatar: '',
  password: '',
  role: '',
  id: 0
})

watch(
  () => props.users,
  (newUsers) => {
    refUsers.value = newUsers
  },
  { immediate: true }
)

const emit = defineEmits({
  deleteUser: (user: User) => {
    return user !== null
  },
  updateUser: (user: User) => {
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

const userToDelete = ref<User>()

const sortedByNameAsc = ref(false)
const sortedByEmailAsc = ref(false)

const handleSortByName = () => {
  sortedByNameAsc.value = !sortedByNameAsc.value
  if (sortedByNameAsc.value) {
    refUsers.value = refUsers.value.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    refUsers.value = refUsers.value.sort((a, b) => b.name.localeCompare(a.name))
  }
}

const handleSortByEmail = () => {
  sortedByEmailAsc.value = !sortedByEmailAsc.value
  if (sortedByEmailAsc.value) {
    refUsers.value = refUsers.value.sort((a, b) => a.email.localeCompare(b.email))
  } else {
    refUsers.value = refUsers.value.sort((a, b) => b.email.localeCompare(a.email))
  }
}

const handleSearch = (query: string) => {
  query = query.trim()
  console.log(query)
  if (!query) {
    refUsers.value = props.users
  } else {
    refUsers.value = refUsers.value.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    )
  }
}

const isUpdateModalOpen = ref(false)
const isDeleteModalOpen = ref(false)

const openUpdateModal = (email: string) => {
  console.log('Email')
  console.log(email)
  userToUpdate.value = refUsers.value.filter((u) => u.email === email)[0]
  isUpdateModalOpen.value = true
}
const closeUpdateModal = () => (isUpdateModalOpen.value = false)

const openDeleteModal = (email: string) => {
  console.log('Email')
  console.log(email)
  userToDelete.value = refUsers.value.filter((u) => u.email === email)[0]
  isDeleteModalOpen.value = true
}
const closeDeleteModal = () => (isDeleteModalOpen.value = false)

const handleSubmit = () => {
  emit('updateUser', { ...userToUpdate.value! })
  formSubmitted.value = false
  clearValues()
  clearTouchedFields()
  closeUpdateModal()
}

const touchedFields = ref({
  email: false,
  name: false,
  password: false,
  avatar: false,
  role: false
})

const formSubmitted = ref(false)

const emailIsValid = computed(() => {
  if (userToUpdate.value!.email.length === 0 && !touchedFields.value.email) {
    return null
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(userToUpdate.value!.email)
})

const usernameIsValid = computed(() => {
  if (userToUpdate.value!.name.length === 0 && !touchedFields.value.name) {
    return null
  }
  return !!userToUpdate.value!.name
})

const passwordIsValid = computed(() => {
  if (userToUpdate.value.password.length === 0 && !touchedFields.value.password) {
    return null
  }
  return !!userToUpdate.value.password
})

const avatarIsValid = computed(() => {
  if (userToUpdate.value.avatar.length === 0 && !touchedFields.value.avatar) {
    return null
  }
  return (
    !!userToUpdate.value.avatar &&
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      userToUpdate.value.avatar
    )
  )
})

const roleIsValid = computed(() => {
  if (userToUpdate.value.role.length === 0 && !touchedFields.value.role) {
    return null
  }

  return (
    !!userToUpdate.value.role &&
    (userToUpdate.value.role.toLowerCase() === 'customer' ||
      userToUpdate.value.role.toLowerCase() === 'admin')
  )
})

function clearValues() {
  userToUpdate.value!.avatar = ''
  userToUpdate.value!.name = ''
  userToUpdate.value!.email = ''
  userToUpdate.value!.password = ''
}

function clearTouchedFields() {
  touchedFields.value.avatar = false
  touchedFields.value.email = false
  touchedFields.value.name = false
  touchedFields.value.password = false
}
</script>

<template>
  <div class="mt-5 d-flex gap-1">
    <button @click="handleSortByName" class="btn btn-primary">
      Sort by Name
      <i class="bi" :class="sortedByNameAsc ? 'bi-sort-alpha-down' : 'bi-sort-alpha-up'"></i>
    </button>
    <button @click="handleSortByEmail" class="btn btn-primary">
      Sort by Email
      <i class="bi" :class="sortedByEmailAsc ? 'bi-sort-alpha-down' : 'bi-sort-alpha-up'"></i>
    </button>
    <SearchBar @search="handleSearch"></SearchBar>
  </div>
  <div class="mt-3 p-4 mb-5 border border-1 border-secondary rounded bg-white">
    <table class="table rounded">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Role</th>
          <th scope="col">Image</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) of refUsers" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.role }}</td>
          <td>
            <div style="width: 50px; height: 50px">
              <img
                style="width: 100%; height: 100%; object-fit: cover"
                :src="user.avatar"
                alt="avatar"
              />
            </div>
          </td>
          <td>
            <div class="d-flex gap-1">
              <button
                @click="() => openDeleteModal(user.email)"
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
              >
                Delete
              </button>
              <button
                @click="() => openUpdateModal(user.email)"
                type="button"
                class="btn btn-success"
                data-bs-toggle="modal"
              >
                Update
              </button>
              <button
                @click="() => $router.push(`/users/${user.id}`)"
                type="button"
                class="btn btn-success"
              >
                Details
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <VueModal id="deleteUser" :isOpen="isDeleteModalOpen" @close="closeDeleteModal">
      <template #header>
        <h5 class="modal-title" id="exampleModalLabel">Delete User</h5>
      </template>
      <template #body>
        <div>
          Are you sure you want to delete user: {{ userToDelete?.name }}, {{ userToDelete?.email }}
        </div>
      </template>
      <template #footer>
        <button
          type="button"
          @click="
            () => {
              $emit('deleteUser', userToDelete)
              closeDeleteModal()
            }
          "
          class="btn btn-primary"
        >
          Yes
        </button>
      </template>
    </VueModal>

    <VueModal id="updateModal" :isOpen="isUpdateModalOpen" @close="closeUpdateModal">
      <template #header><h5 class="modal-title">Update User</h5></template>
      <template #body>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <VueInput
              id="name"
              placeholder="Enter user name"
              v-model="userToUpdate!.name"
              :is-valid="usernameIsValid"
            ></VueInput>
            <div class="invalid-feedback">Username is required.</div>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <VueInput
              id="password"
              v-model="userToUpdate!.password"
              placeholder="Enter password"
              type="text"
              :is-valid="passwordIsValid"
            ></VueInput>
            <div class="invalid-feedback">Password is required.</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VueInput
              :disabled="true"
              id="email"
              placeholder="Enter email"
              :is-valid="emailIsValid"
              v-model="userToUpdate!.email"
            ></VueInput>
            <div class="invalid-feedback">Email is required and should be in valid format.</div>
          </div>

          <div class="mb-3">
            <label for="avatar" class="form-label">Avatar</label>
            <VueInput
              id="avatar"
              v-model="userToUpdate!.avatar"
              placeholder="Enter avatar URL"
              :is-valid="avatarIsValid"
            ></VueInput>
            <div class="invalid-feedback">Avatar must be a valid URL.</div>
          </div>

          <div class="mb-3">
            <label for="role" class="form-label">Role (admin or customer)</label>
            <VueInput
              id="role"
              v-model="userToUpdate!.role"
              placeholder="Enter role"
              :is-valid="roleIsValid"
            ></VueInput>
            <div class="invalid-feedback">
              Role is required and must be either 'admin' or 'customer'
            </div>
          </div>
        </form>
      </template>
      <template #footer>
        <button
          type="submit"
          class="btn btn-primary"
          @click="
            () => {
              handleSubmit()
              closeUpdateModal()
            }
          "
        >
          Submit
        </button>
      </template>
    </VueModal>
  </div>
</template>

<style scoped></style>
