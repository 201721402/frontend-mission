<template>
  <main>
    <div class="w3-row item-list-main" data-test="item-list-page">
      <router-link
        v-for="item in items"
        :to="itemPath(item.product_no)"
        :key="item.product_no"
      >
        <ItemListItem
          :name="item.name"
          :description="item.description"
          :img="item.image"
          :price="item.price"
          :original_price="item.original_price"
          :key="item.name"
          class="w3-col s6"
          data-test="item"
        ></ItemListItem>
      </router-link>
    </div>
  </main>
</template>

<script>
import ItemListItem from '@/components/ItemList/Item.vue';

export default {
  components: { ItemListItem },
  name: 'ItemListPage',
  data() {
    return {
      items: [
        {
          productNo: 'abcd123',
          name: 'Nike air force',
          price: 134000,
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTTGEwPIvXX6CJsLGpzvAj1ciUXRFlUJtdp3WyUoJM1HewTHdPkRpCk8FP6WwcWvH9807c2qmqaQ&usqp=CAc',
          original_price: 150000,
          description: '신상 나이키 신발',
        },
      ],
    };
  },
  methods: {
    itemPath(productNo) {
      return `/item/${productNo}`;
    },
  },
};
</script>

<style>
.item-list-main {
  padding-bottom: 60px;
}
</style>
