import { createStore } from 'vuex';
// 데이터 프로퍼티 사용안하고 store(상태관리 통해서 함)
// application에서 서로 다른 컴포넌트들이 특정 데이터 공유하는 상황에서 사용해야함
// 부모 컴포넌트와 자식 컴포넌트만 데이터를 주고 받을때 극복할때 상태관리 사용 해야함
// 2주차에서 store 쓰는것은 아님.
export default createStore({
  state: {
    MainItem: [
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
    CartItem: [
      {
        productNo: '1',
        name: 'Air Jordan',
        price: 2000000,
        original_price: 15000000,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaqkWe7q2EpLZi1Gm2QR-ue0jCpbCCSYt1GwKTQ8a8Fk5U3M_9d_Df486_FqCk39LW4rl1VtqO_fOM&usqp=CAc',
        description: '최고의 러닝화 nike shoes ',
      },
      {
        productNo: '1',
        name: 'Air Jordan',
        price: 2000000,
        original_price: 15000000,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaqkWe7q2EpLZi1Gm2QR-ue0jCpbCCSYt1GwKTQ8a8Fk5U3M_9d_Df486_FqCk39LW4rl1VtqO_fOM&usqp=CAc',
        description: '최고의 러닝화 nike shoes ',
      },
    ],
  },
  getters: {
    CartItemCount: (state) => state.CartItem.length,
    PrintFirstName: (state) => state.CartItem[0].name,
    SumPrice(state) {
      let sum = 0;
      for (let i = 0; i < state.CartItem.length; i += 1) {
        sum += state.CartItem[i].price;
      }
      return `${sum.toLocaleString()}원`;
    },
  },
});
