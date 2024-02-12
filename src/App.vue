<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/navigation/navigationComponent.vue";
import Footer from "./components/footer/footerComponent.vue"
</script>

<template>
  <Nav />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
