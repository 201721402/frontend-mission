import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';
import WishListPage from '@/views/WishList.vue';

import CartPage from '@/views/Cart.vue';
import InfoPage from '@/views/Info.vue';

export default [
  {
    path: '/info',
    name: 'Info',
    components: {
      header: ItemListHeader,
      main: InfoPage,
      nav: ItemListNav,
    },
  },
  {
    path: '/wish',
    name: 'WishList',
    components: {
      header: ItemListHeader,
      main: WishListPage,
      nav: ItemListNav,
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      header: ItemListHeader,
      main: CartPage,
      nav: ItemListNav,
    },
  },
];
