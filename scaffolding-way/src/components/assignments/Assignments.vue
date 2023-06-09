<script setup>
import AssignmentList from '@/components/assignments/AssignmentList.vue'
import AssignmentCreate from '@/components/assignments/AssignmentCreate.vue'
import {assignments} from "@/stores/UserStore";

function newItemAdded(itemName) {
  assignments.push({
    id: assignments.length + 1,
    name: itemName,
    completed: false
  })
}

function filter() {
  return {
    inProgress: assignments.filter((item) => !item.completed),
    completed: assignments.filter((item) => item.completed),
    all: assignments
  }
}
</script>

<template>
  <AssignmentList
      v-model="assignments"
      :items="filter().inProgress"
      description="these tasks must be done"
      title="In Progress"
  >
  </AssignmentList>

  <AssignmentList
      v-model="assignments"
      :items="filter().completed"
      description="greet work for that progress"
      title="Completed"
  >
  </AssignmentList>

  <AssignmentCreate @newItemAdded="newItemAdded"></AssignmentCreate>
</template>

<style scoped></style>
