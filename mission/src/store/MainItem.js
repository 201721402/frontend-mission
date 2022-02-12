import { createStore } from 'vuex';

export default createStore({
  state: {
    HomeItem: [
      {
        productNo: '1',
        name: 'Air Jordan',
        price: 2000000,
        original_price: 15000000,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaqkWe7q2EpLZi1Gm2QR-ue0jCpbCCSYt1GwKTQ8a8Fk5U3M_9d_Df486_FqCk39LW4rl1VtqO_fOM&usqp=CAc',
        description: '최고의 러닝화 nike shoes ',
      },
      {
        productNo: '2',
        name: 'Nike air force',
        price: 134000,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQTTGEwPIvXX6CJsLGpzvAj1ciUXRFlUJtdp3WyUoJM1HewTHdPkRpCk8FP6WwcWvH9807c2qmqaQ&usqp=CAc',
        original_price: 150000,
        description: '신상 나이키 신발',
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
