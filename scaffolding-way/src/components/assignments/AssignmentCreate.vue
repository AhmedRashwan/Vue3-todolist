<script setup>

let emit = defineEmits(['newItemAdded'])
let item = ""
</script>
<template>
  <form action="#" method="post" @submit.prevent="emit('newItemAdded', item)">
    <label for="item">
      <input id="item" v-model="item" name="item" type="text"/>
      <input type="submit"/>
    </label>
  </form>
</template>

<style scoped></style>
