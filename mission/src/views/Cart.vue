<template>
  <h3 style="padding-left:30px">장바구니</h3>
  <div id="cart-list" data-test="cart-list">
    <router-link
      v-for="item in CartItem"
      :to="itemPath(item.productNo)"
      :key="item.productCode"
    >
    <ItemListItem
      :key="item.productNo"
      :name="item.name"
      :price="item.price"
      :img="item.image"
      :original_price="item.original_price"
      :description="item.description"
      class="w3-col s6"
    >
    </ItemListItem>
    </router-link>
  </div>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div id="buy-Button" @click="$router.push({name:'Order'})">
    <button>구매하러 가기</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ItemListItem from '@/components/ItemList/Item.vue';

export default {
  components: { ItemListItem },
  name: 'CartPage',
  methods: {
    itemPath(productCode) {
      return `/item/${productCode}`;
    },
  },
  computed: {
    ...mapState({
      CartItem: (state) => state.CartItem,
    }),
  },
};
</script>

<style>
#cart-list {
  padding-bottom: 60px;
}
#buy-Button{
  text-align: center;
}
</style>
