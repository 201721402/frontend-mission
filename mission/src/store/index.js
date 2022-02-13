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
        name: 'Nike Waffle',
        price: 2000000,
        original_price: 15000000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMY5NjRkdD3ChyIKuuh0d33QcddYCpfaxw1w&usqp=CAU',
        description: 'Waffle 초특가 할인',
      },
      {
        productNo: '2',
        name: 'Nike Blazer',
        price: 134000,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6GrbcKwnqEOKnPs2EexzTnaGVWH4TQn59Jah1ffkh67Gs3sYPu_LTGzYpdVxtMZUJY8ehAqzp0aw&usqp=CAc',
        original_price: 150000,
        description: '신상 나이키 Blazer',
      },
    ],
    CartItem: [
      {
        productNo: '2',
        name: 'Nike Blazer',
        price: 134000,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ6GrbcKwnqEOKnPs2EexzTnaGVWH4TQn59Jah1ffkh67Gs3sYPu_LTGzYpdVxtMZUJY8ehAqzp0aw&usqp=CAc',
        original_price: 150000,
        description: '신상 나이키 Blazer',
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
