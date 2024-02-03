<template>
  <nav>
    <div class="menu-icon">
      <div class="menu-links">
        <router-link to="/">ГЛАВНАЯ</router-link>
        <router-link to="/store">МАГАЗИН</router-link>
        <a href="https://discord.gg/xRRcaxC" target="_blank">DISCORD</a>
      </div>
      <div class="profile-box" @click="toggleDropdown"> <!-- Добавляем обработчик события click -->
        <img src="https://minotar.net/avatar/k3k.png" width="64" height="64" class="player"/>
        <img src="../components/icons/dropdown-arrow.png" alt="dropdown arrow">
        <div :class="{ 'dropdown-show': dropdownVisible, 'dropdown-hide': !dropdownVisible }">
          <router-link to="/auth">АВТОРИЗОВАТЬСЯ</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav{
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: transparent;
  transition: 0.5s;
  z-index: 1000;
  font-family: 'Ubuntu', sans-serif;
}

a{
  text-decoration: none;
}

.menu-icon{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-icon a{
  color: #F3C623;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.36px;
  margin: 0 10px;
}

.profile-box{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
}

.player{
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-right: 10px;
  image-rendering: pixelated;
}

.dropdown-show{
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  position: absolute;
  top: calc(100% + 5px);
  border-radius: 3px;
  background: #1d1d1d;
  cursor: auto;
  opacity: 1;
  transition: opacity 0.3s; /* Добавляем transition на opacity */
}

.dropdown-hide{
  position: absolute;
  pointer-events: none;
  opacity: 0;
}

@media (max-width: 1023px) {
  .menu-icon a{
    font-size: 1.2em;
  }

}

@media (max-width: 640px) {
  .menu-icon a{
    font-size: 1em;
    margin: 0 4px;
  }

}

@media (max-width: 420px) {
  .menu-links a{
    /* Задаем display: block для ссылок, чтобы они были друг под другом */
    display: block;
    margin: 10px 0 0 0;
  }
}

@media (max-width: 250px) {
  .dropdown-show{
    right: 1px;
    left: auto;
  }
}

</style>

<script setup>
import { ref } from "vue";

// Создаем реактивное свойство dropdownVisible, которое будет хранить состояние видимости выпадающего меню
const dropdownVisible = ref(false);

// Создаем метод toggleDropdown, который будет переключать dropdownVisible
const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};
</script>