<script setup>
import { ref } from 'vue'

let emit = defineEmits(['newItemAdded'])
let item = ref('')
</script>
<template>
  <form action="#" method="post" @submit.prevent="emit('newItemAdded', item)">
    <label for="item">
      <input id="item" v-model="item" name="item" type="text" />
      <input type="submit" />
    </label>
  </form>
</template>

<style scoped></style>
