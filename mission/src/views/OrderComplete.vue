<template>
  <div class="main-container">
      <div class="sub-container">
          <div class="icon">
            <i class="bi bi-check-square"></i>
          </div>
            주문이 완료되었습니다.
          <div class="button">
            <button @click="$router.push({name:'Home'})">홈으로 가기</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'OrderCompletePage',
};
</script>

<style>
.main-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sub-container {
    padding: 20px;
    background-color: #ffffff;
}
.icon{
    text-align: center;
}
.button{
    text-align: center;
    margin-top: 20px;
}
template {
    box-sizing: border-box;
    margin: 0px;
}
</style>
