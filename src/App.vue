<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/navigation.vue";
import Footer from "./components/mainFooter.vue"
</script>

<template>
  <Nav />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
