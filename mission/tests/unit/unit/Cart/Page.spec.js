import { mount } from '@vue/test-utils';
import CartPage from '@/views/Cart.vue';

describe('CartPage', () => {
  test('renders CartPage', () => {
    const wrapper = mount(CartPage);

    expect(wrapper.find('[data-test="cart-list"]').exists()).toBe(true);
  });
});
