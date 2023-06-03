<script setup>
import AssignmentList from '@/components/assignments/AssignmentList.vue'
import AssignmentCreate from '@/components/assignments/AssignmentCreate.vue'
import { reactive } from 'vue'

let items = reactive([
  {
    id: 1,
    name: 'assignment 1',
    completed: false
  },
  {
    id: 2,
    name: 'assignment 2',
    completed: false
  },
  {
    id: 3,
    name: 'assignment 3',
    completed: false
  },
  {
    id: 4,
    name: 'assignment 4',
    completed: true
  }
])

function newItemAdded(itemName) {
  items.push({
    id: items.length + 1,
    name: itemName,
    completed: false
  })
}

function filter() {
  return {
    inProgress: items.filter((item) => !item.completed),
    completed: items.filter((item) => item.completed),
    all: items
  }
}
</script>

<template>
  <AssignmentList
    v-model="items"
    :items="filter().inProgress"
    description="these tasks must be done"
    title="In Progress"
  >
  </AssignmentList>

  <AssignmentList
    v-model="items"
    :items="filter().completed"
    description="greet work for that progress"
    title="Completed"
  >
  </AssignmentList>

  <AssignmentCreate @newItemAdded="newItemAdded"></AssignmentCreate>
</template>

<style scoped></style>
