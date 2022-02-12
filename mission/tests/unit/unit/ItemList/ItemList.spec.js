import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

import App from '@/App.vue';
import itemRoutes from '@/router/item';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: itemRoutes,
});

// mock은 global한 단계에서 해줘야 함
const mockGetItemList = jest.fn();
const mockGetItemInfo = jest.fn();
jest.mock('@/api/Item/ItemApi', () => jest.fn().mockImplementation(() => ({ getItemList: mockGetItemList, getItemInfo: mockGetItemInfo })));

describe('ItemListPage', () => {
  beforeEach(() => {
    mockGetItemList.mockClear();
  });

  test('renders ItemListPage', async () => {
    mockGetItemList.mockResolvedValueOnce({ data: { items: [] } });
    const wrapper = mount(ItemListPage);
    await flushPromises();

    // 컴포넌트의 root tag에 대해서 테스트를 하자
    expect(wrapper.find('[data-test="item-list-page"]').exists()).toBe(true);
  });

  test('renders multiple ItemListItem component', async () => {
    const dataItemList = [
      {
        name: 'product 1', price: 13400, display_price: '13,400원', description: 'description 1',
      },
      {
        name: 'product 2', price: 23500, display_price: '23,500원', description: 'test description 2',
      },
      {
        name: 'product 3', price: 34800, display_price: '34,800원', description: 'testing description 3',
      },
    ];
    mockGetItemList.mockResolvedValueOnce({ data: { items: dataItemList } });
    const wrapper = mount(ItemListPage);
    await flushPromises();

    const itemWrapper = wrapper.findAllComponents(ItemListItem);

    expect(itemWrapper).toHaveLength(dataItemList.length);

    for (let i = 0; i < dataItemList.length; i += 1) {
      const currentItemWrapper = itemWrapper[i];

      expect(currentItemWrapper.get('[data-test="name"]').text()).toEqual(dataItemList[i].name);
      expect(currentItemWrapper.get('[data-test="price"]').text()).toEqual(dataItemList[i].display_price);
      expect(currentItemWrapper.get('[data-test="description"]').text()).toEqual(dataItemList[i].description);
    }
  });

  it('renders proper link to ItemInfoPage', async () => {
    const dataItemList = [
      { product_no: 'testNo' },
    ];
    mockGetItemList.mockResolvedValueOnce({ data: { items: dataItemList } });
    mockGetItemInfo.mockResolvedValue({ data: { item: {} } });
    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: { plugins: [router] },
    });
    await flushPromises();

    await wrapper.findComponent(ItemListItem).trigger('click');
    await flushPromises();

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
});
