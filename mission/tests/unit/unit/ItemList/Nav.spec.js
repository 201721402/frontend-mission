import { mount, flushPromises } from '@vue/test-utils';
import ItemListFooter from '@/components/ItemList/Nav.vue';
import router from '@/router';
import App from '@/App.vue';

const mockGetItemList = jest.fn();
jest.mock('@/api/Item/ItemApi', () => jest.fn().mockImplementation(() => ({
  getItemList: mockGetItemList,
})));

describe('ItemListNav', () => {
  test('render ItemListNav', () => {
    const wrapper = mount(ItemListFooter);

    expect(wrapper.find('#item-list-nav').exists()).toBe(true);
  });

  test('contains 4 locations', () => {
    const wrapper = mount(ItemListFooter);
    const testLocationText = ['홈', '찜', '장바구니', '마이 페이지'];

    for (let i = 0; i < testLocationText.length; i += 1) {
      const localWrapper = wrapper.get(`router-link:nth-child(${i + 1})`);

      expect(localWrapper.text()).toEqual(testLocationText[i]);
    }
  });

  describe('routing rules', () => {
    let wrapper;

    beforeEach(async () => {
      router.push('/');
      await router.isReady();

      mockGetItemList.mockResolvedValue({ data: { items: [] } });

      wrapper = mount(App, {
        global: {
          plugins: [router],
        },
      });
      await flushPromises();
    });

    afterEach(() => {
      mockGetItemList.mockClear();
    });

    test('should check main page redirect to WishListPage when the link is clicked', async () => {
      await wrapper.find('[data-test="link-wish"]').trigger('click');
      await flushPromises();

      expect(wrapper.find('[data-test="wish-list-page"]').exists()).toBe(true);
    });

    test('should check main page being redirected to Cartpage when the link is clicked', async () => {
      await wrapper.find('[data-test="link-cart"]').trigger('click');
      await flushPromises();

      expect(wrapper.find('[data-test="cart-list"]').exists()).toBe(true);
    });

    test('should check main page being redirected to InfoPage when the link is clicked', async () => {
      await wrapper.find('[data-test="link-info"]').trigger('click');
      await flushPromises();

      expect(wrapper.find('[data-test="info-page"]').exists()).toBe(true);
    });
  });
});
