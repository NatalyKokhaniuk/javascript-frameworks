<script setup lang="ts">
import { ref } from 'vue'
import VueInput from '@/components/VueInput.vue'
import VueButton from '@/components/VueButton.vue'

const query = ref<string>('')
const emit = defineEmits<{
  (e: 'search', query: string): void
}>()
const handleSearch = (query: string) => {
  emit('search', query)
}
</script>

<template>
  <div class="d-flex gap-1">
    <VueInput
      @update:modelValue="handleSearch"
      v-model="query"
      id="search-query"
      :is-valid="null"
      placeholder="Search by name..."
    ></VueInput>
    <VueButton
      @onClick="
        () => {
          handleSearch('')
          query = ''
        }
      "
      button-type="button"
      button-style="secondary"
      >Reset</VueButton
    >
  </div>
</template>

<style scoped></style>
