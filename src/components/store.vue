<template>
  <main>
    <div class="shop-container">
      <div class="shop-section-caption">КРИСТАЛЛЫ</div>
      <div class="shop-section">
        <div class="shopping-card">
          <div class="card-img gems-100"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  min-height: calc(100% - 70px);
  background: url("../components/icons/background-shop.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.shop-container{
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}

.shop-section-caption{
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 64px;
  font-weight: 700;
  font-family: 'Ubuntu';
  margin: 40px 0;
}

.shop-section-caption::before{
  content: '';
  position: absolute;
  right: calc(100% + 20px);
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 6px;
  background: #F3C623;
}

.shop-section-caption::after{
  content: '';
  position: absolute;
  left: calc(100% + 20px);
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 6px;
  background: #F3C623;
}

.shop-section{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.shopping-card{
  width: 250px;
  height: 446px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 24px 22px rgba(10,10,10,0.3);
  transition: 0.3s;
}

.card-img.gems-100{
  background: url("../components/icons/gems-100.jpg") center/cover no-repeat;

}

.card-img{
  position: relative;
  height: 100%;
}

</style>

<script setup>

</script>