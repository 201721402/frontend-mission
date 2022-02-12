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
import ItemApi from '@/api/Item/ItemApi';

export default {
  components: { ItemListItem },
  name: 'ItemListPage',
  data() {
    return {
      items: [],
    };
  },
  methods: {
    itemPath(productNo) {
      return `/item/${productNo}`;
    },
  },
  async created() {
    const apiClient = new ItemApi();
    const response = await apiClient.getItemList();
    this.items = response.data.items;
  },
};
</script>

<style>
.item-list-main {
  padding-bottom: 60px;
}
</style>