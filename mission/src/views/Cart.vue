<template>
  <div id="cart-list" data-test="cart-list">
    <ItemListItem
      v-for="item in cartItem"
      :key="item.productCode"
      :name="item.name"
      :price="item.price"
      :img="item.image[0]"
      :original_price="item.original_price"
      :description="item.description"
    >
    </ItemListItem>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  components: { },
  data() {
    return {
      cartItem: [],
    };
  },
};
</script>

<style>
</style>
