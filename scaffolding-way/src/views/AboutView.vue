<script setup>
import { useErrorFlash, useFlash } from '@/composables/useFlash'
</script>

<template>
  <div class="about">
    <h1>This tutorial to build a todo-list</h1>
  </div>
  <button @click="useErrorFlash('OH NOO!!')">Shame Me</button>
  <button @click="useFlash('Great!')">Great Me</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
