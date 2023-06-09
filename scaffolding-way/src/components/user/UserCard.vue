<script setup>
import Assignments from '@/components/assignments/Assignments.vue';
import {assignments, userDetails} from "@/stores/UserStore";</script>
<template>
  <br>
  <h3 style="color:  hsla(160, 100%, 37%, 1);">User Details</h3>
  <p>My name: <span style="color: hsla(160, 100%, 37%, 1);">{{ userDetails.name }}</span></p>
  <p>email: <span style="color:  hsla(160, 100%, 37%, 1);">{{ userDetails.email }}</span></p>
  <p>phone: <span style="color:  hsla(160, 100%, 37%, 1);">{{ userDetails.phone }}</span></p>
  <br>
  <h3 style="color: hsla(160, 100%, 37%, 1);">User Assignments <span>({{ assignments.length }})</span></h3>
  <Assignments></Assignments>
</template>