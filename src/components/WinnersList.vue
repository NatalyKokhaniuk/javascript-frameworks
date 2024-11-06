<script setup lang="ts">
import type { User } from '@/models/user'
import VueButton from '@/components/VueButton.vue'
import Winner from '@/components/Winner.vue'

defineProps<{
  winners: User[]
  usersCount: number
}>()

const emit = defineEmits({
  newWinner: () => true,
  deleteWinner: (winner: User) => {
    return winner
  }
})

const deleteWinner = (winner: User) => {
  emit('deleteWinner', { ...winner })
}
</script>

<template>
  <div class="mb-3 mt-5 p-4 d-flex bg-white border border-1 border-secondary rounded">
    <div class="w-75 border border-secondary border-1 p-3 rounded">
      <div class="d-flex">
        <Winner
          v-for="(winner, index) of winners"
          :key="index"
          :winner="winner"
          @onDelete="deleteWinner"
        ></Winner>
        <span class="text-secondary p-1">Winners</span>
      </div>
    </div>
    <div class="w-25 d-flex justify-content-center align-items-center">
      <VueButton
        button-type="button"
        button-style="primary"
        :disabled="winners.length === 3 || usersCount === 0"
        @onClick="$emit('newWinner')"
        >New Winner
      </VueButton>
    </div>
  </div>
</template>

<style scoped></style>
