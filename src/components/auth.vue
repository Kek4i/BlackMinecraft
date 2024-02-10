<template>
  <main>
    <form class="login-form">
      <h2>Авторизация</h2>
      <input type="text" placeholder="Ник" name="name" class="input-name">
      <div style="position: relative; display: inline-block;">
        <input :type="passwordType" placeholder="Пароль" name="password" class="input-password">
        <img src="../components/icons/eye.png" alt="Показать пароль" width="25px" height="25px"
             style="position: absolute; right: 7px; top: 8px; cursor: pointer;" @click="togglePasswordType">
      </div>
      <button type="submit" class="submit">
        <div class="button-white-fill"></div>
        <div class="submit-text">Вход</div>
      </button>
      <router-link to="/recovery">Забыли пароль?</router-link>
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

.login-form {
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

.input-name, .input-password {
  background: #333;
  border: 0;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 14px;
  transition: 0.3s;
}

.input-name:hover, .input-password:hover {
  transform: scale(105%);
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
  background-color: #fff; /* Используйте белый цвет по умолчанию */
  left: 0;
  bottom: 0;
  transition: transform 0.3s, background-color 0.3s;
}

.submit-text {
  position: relative;
}

.submit:hover .button-white-fill {
  background: #F3C623; /* Изменение цвета фона при наведении на кнопку */
}

input {
  color: white;
}

a {
  color: white;
  text-decoration: none;
}
</style>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})

const passwordType = ref('password')

const togglePasswordType = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
</script>
