<template>
  <h3 style="padding-left:30px">장바구니</h3>
  <div id="cart-list" data-test="cart-list">
    <router-link
      v-for="item in cartItem"
      :to="itemPath(item.productCode)"
      :key="item.productCode"
    >
    <ItemListItem
      v-for="item in cartItem"
      :key="item.productCode"
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
</template>

<script>
import ItemListItem from '@/components/ItemList/Item.vue';

export default {
  name: 'CartPage',
  components: { ItemListItem },
  data() {
    return {
      cartItem: [
        {
          productCode: 'abcd12345',
          name: 'Air Jordan',
          price: 2000000,
          original_price: 15000000,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaqkWe7q2EpLZi1Gm2QR-ue0jCpbCCSYt1GwKTQ8a8Fk5U3M_9d_Df486_FqCk39LW4rl1VtqO_fOM&usqp=CAc',
          description: '최고의 러닝화 nike shoes ',
        },
      ],
    };
  },
  methods: {
    itemPath(productCode) {
      return `/item/${productCode}`;
    },
  },
};
</script>

<style>
#cart-list {
  padding-bottom: 60px;
}
</style>
