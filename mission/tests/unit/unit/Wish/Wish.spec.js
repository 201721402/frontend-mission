import { mount } from '@vue/test-utils';
import WishListPage from '@/views/WishList.vue';

describe('WishListPage', () => {
  it('renders WishListPage', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.find('[data-test="wish-list-page"]').exists()).toBe(true);
  });
});
