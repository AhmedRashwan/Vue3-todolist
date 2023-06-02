<script setup>
import {useFlash, useErrorFlash} from '@/composables/useFlash';

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="useErrorFlash('OH NOO!!')">Shame Me</button>
  <button  @click="useFlash('Great!')">Great Me</button>
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
