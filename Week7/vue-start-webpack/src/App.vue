<template>
  <h1>{{msg}}</h1>
  <Hello/>
</template>

<script setup>
import { ref } from 'vue';
import Hello from '@/components/Hello';

const msg = ref('hello vue ~~~')
</script>

<style scoped>

</style>