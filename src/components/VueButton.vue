<script setup lang="ts">
import type { ButtonStyle } from '@/models/button-style'
import type { ButtonType } from '@/models/button-type'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    buttonStyle: ButtonStyle
    buttonType: ButtonType
    disabled?: boolean
  }>(),
  {
    disabled: false
  }
)

const btnStyle = computed(() => {
  return 'btn-' + props.buttonStyle
})

const emit = defineEmits({
  onClick: () => true
})
</script>

<template>
  <button
    :disabled="disabled"
    :type="buttonType"
    class="btn"
    :class="btnStyle"
    @click="$emit('onClick')"
  >
    <slot></slot>
  </button>
</template>
