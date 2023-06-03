<script setup>
import AssignmentItem from '@/components/assignments/AssignmentItem.vue'

defineProps({
  title: {
    type: String,
    default: 'title',
    required: true
  },
  description: String,
  items: {
    type: Array,
    default: ['item 1', 'item 2'],
    required: true
  }
})
</script>

<template>
  <div v-show="items.length" class="container mx-auto py-4">
    <div class="container mx-auto py-4">
      <h1 class="text-2xl font-bold mb-4">
        {{ title }} <span>({{ items.length }})</span>
      </h1>
      <p>{{ description }}</p>
      <AssignmentItem v-for="item in items" :key="item.id" :item="item"></AssignmentItem>
    </div>
  </div>
</template>

<style scoped></style>
