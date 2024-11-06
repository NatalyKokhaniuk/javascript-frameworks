<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({ isOpen: Boolean, id: String })
const emit = defineEmits(['close'])
const closeModal = () => emit('close')

const button = ref<HTMLButtonElement>()

watch(
  () => props.isOpen,
  (_) => {
    button.value?.click()
  },
  { immediate: true }
)

const modalId = computed(() => {
  return '#' + props.id
})
</script>

<template>
  <button
    class="d-none"
    ref="button"
    id="hidden-btn"
    type="button"
    data-bs-toggle="modal"
    :data-bs-target="modalId"
  >
    Update
  </button>

  <div class="modal fade" tabindex="-1" :id="id" @keydown.esc="closeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="btn btn-close" @click="closeModal">x</button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
