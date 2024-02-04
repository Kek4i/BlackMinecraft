<template>
<footer>

  <div class="container">
    <div class="credits">
      <img src="../components/icons/logo.png" alt="LOGO BLACKMC">
      <div class="authors">
        Made by kek*
      </div>
    </div>

    <div class="important-links">
      <router-link to="/rules">Правила</router-link>
    </div>
  </div>

</footer>
</template>

<style scoped>

footer{
  font-family: 'Ubuntu', sans-serif;
  background: #232323;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.container{
  display: flex;
  align-items: center;
  row-gap: 25px;
  width: 100%;
  max-width: 1320px;
}

.credits{
  flex: 3 1 40%;
  display: flex;
  align-items: center;
}

.credits img{
  width: 64px;
  margin-right: 15px;
}

.authors{
  text-align: center;
}

.important-links{
  flex: 2 2 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script setup>

</script>