<script setup lang="ts">
import type { User } from '@/models/user'

defineProps<{
  winner: User
}>()

const emit = defineEmits({
  onDelete: (winner: User) => {
    return winner
  }
})
</script>

<template>
  <span class="rounded text-white bg-primary p-1 ms-1 me-1">
    {{ winner.name }}
    <i role="button" @click="$emit('onDelete', winner)" class="ps-2 fa-solid fa-xs text-black">x</i>
  </span>
</template>

<style scoped></style>
