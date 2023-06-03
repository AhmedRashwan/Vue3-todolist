<script setup>
defineProps({
  item: Object
})
let emit = defineEmits(['update:item'])
</script>
<template>
  <label class="text-gray-800">
    <input
      v-model="item.completed"
      class="form-checkbox h-4 w-4 text-gray-600 rounded-sm mr-2"
      completed="item.completed"
      type="checkbox"
      @input="emit('update:item', $event.target.value)"
    />
    {{ item.name }}
  </label>
  <br />
</template>

<style scoped></style>
