<template>
  <main>
    <div class="w3-row item-list-main" data-test="item-list-page">
      <router-link
        v-for="item in MainItem"
        :to="itemPath(item.productNo)"
        :key="item.productNo"
      >
      <ItemListItem
        :key="item.name"
        :name="item.name"
        :description="item.description"
        :img="item.image"
        :price="item.price"
        :original_price="item.original_price"
        class="w3-col s6"
        data-test="item"
      ></ItemListItem>
      </router-link>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import ItemListItem from '@/components/ItemList/Item.vue';

export default {
  components: { ItemListItem },
  name: 'ItemListPage',
  data() {
    return {
    };
  },
  methods: {
    itemPath(productNo) {
      return `/item/${productNo}`;
    },
  },
  computed: {
    ...mapState({
      MainItem: (state) => state.MainItem,
    }),
  },
};
</script>

<style>
.item-list-main {
  padding-bottom: 60px;
}
</style>
