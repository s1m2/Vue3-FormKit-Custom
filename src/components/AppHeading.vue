<script setup lang="ts">
export interface Props {
  level: number,
  text: string
}
defineProps<Props>()
</script>

<template>
  <component :is="`h${level}`">
    {{ text }}
  </component>
</template>

<style scoped>
</style>