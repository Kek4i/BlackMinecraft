<template>
  <main>
    <form class="recovery-form">
      <h2>Восстановление</h2>
      <input type="text" placeholder="email" name="email" class="input-email">
      <div style="position: relative; display: inline-block;">
        <input type="text" placeholder="Ник" name="name" class="input-name">
      </div>
      <button type="submit" class="submit">
        <div class="button-white-fill"></div>
        <div class="button-fill"></div>
        <div class="submit-text">Отправить</div>
      </button>
    </form>
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  background: url('../components/icons/logowanie.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

.recovery-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #242424;
  font-size: 18px;
  padding: 20px;
  box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  color: white;
}

.input-email, .input-name {
  background: #333;
  border: 0;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  transition: 0.3s;
}

.submit {
  position: relative;
  width: 100%;
  background: transparent;
  border: 0;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #1d1d1d;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s;
}

.button-white-fill {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  bottom: 0;
}

.button-fill {
  position: absolute;
  width: 0;
  height: 0;
  background: #F3C623;
  transition: 0.5s;
  left: 0;
  bottom: 0;
  border-radius: 50%;
}

.submit-text {
  position: relative;
}

</style>

<script setup>
import {onMounted} from 'vue'

onMounted(() => {
  window.scrollTo(0, 0) // прокрутить страницу вверх при загрузке
})
</script>