<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div>{{ msg }}</div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const msg = ref('hello!!!');
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
