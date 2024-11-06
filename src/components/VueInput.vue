<script setup lang="ts">
import type { InputType } from '@/models/input-type'
withDefaults(
  defineProps<{
    id: string
    type: InputType
    required?: boolean
    placeholder: string
    pattern?: string
    disabled?: boolean
    isValid: boolean | null
  }>(),
  {
    disabled: false,
    required: true,
    type: 'text',
    pattern: ''
  }
)
const model = defineModel()
</script>
<template>
  <input
    :id="id"
    v-model="model"
    :placeholder="placeholder"
    :required="required"
    :type="type"
    class="form-control"
    :class="isValid !== null ? (isValid ? 'is-valid' : 'is-invalid') : ''"
    :pattern="pattern"
    :disabled="disabled"
  />
</template>
