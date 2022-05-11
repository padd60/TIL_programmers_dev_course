<template>
  <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2>
  <Button @click="changeMsg('change Message!!!')" />
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from '~/components/Button';

const store = useStore();

const heropyMessage = computed(()=>{
  return store.state.heropy.message;
});

const changeMsg = (value)=>{
  store.state.heropy.message = value;
};
</script>
