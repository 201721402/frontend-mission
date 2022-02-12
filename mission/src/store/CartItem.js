import { createStore } from 'vuex';

export default createStore({
  state: {
    CartItem: [
      {
        productCode: 'abcd12345',
        name: 'Air Jordan',
        price: 2000000,
        original_price: 15000000,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaqkWe7q2EpLZi1Gm2QR-ue0jCpbCCSYt1GwKTQ8a8Fk5U3M_9d_Df486_FqCk39LW4rl1VtqO_fOM&usqp=CAc',
        description: '최고의 러닝화 nike shoes ',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
