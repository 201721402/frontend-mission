<template>
  <main class="order-main">
    <h3>주문하기</h3>
    <div>
    </div>
    <div class="order-container">주문자명</div>
        <input type="text">
    <div class="order-container">전화번호</div>
        <input type="text">
    <div class="order-container">수령주소</div>
        <input type="text">
    <div class="order-container">배송 방법</div>
        <label>
            <input class="order-delivery" type="radio" name="Delivery"><i/> 택배
        </label>
        <label>
            <input class="order-delivery" type="radio" name="Delivery"><i/> 퀵 배송
        </label>
    <div class="order-container">결제 방법</div>
    <div class="box-model">
        <i class="bi bi-credit-card-2-back"></i>
        신용/체크카드
    </div>
    <div class="box-model">
        <i class="bi bi-cash-coin"></i>
        계좌이체
    </div>
    <div class="buy-Button" @click="$router.push({name:'Order'})">
        <button>구매하러 가기</button>
  </div>
  </main>
</template>

<script>
export default {
  components: {},
  name: 'OrderPage',
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style>
.order-main{
    margin-left: 30px;
}
.order-container{
    margin-top: 30px;
    margin-bottom: 10px;
}
.order-delivery{
    margin-left: 10px;
}
.box-model{
    display: inline;
    text-align: center;
    margin: 10px;
    margin-top: 10px;
    border: 1px solid #dddddd;
    padding: 10px;
}
.buy-Button {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
}
</style>
