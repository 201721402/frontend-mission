import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';

import ItemListPage from '@/views/ItemList.vue';
import ItemInfoPage from '@/views/ItemInfo.vue';

export default [
  {
    path: '/',
    name: 'Home',
    components: {
      header: ItemListHeader,
      main: ItemListPage,
      nav: ItemListNav,
    },
  },
  {
    path: '/item/:id',
    name: 'ItemInfo',
    components: {
      main: ItemInfoPage,
    },
  },
];
