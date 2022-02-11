import { flushPromises, mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

const mockGetItemInfo = jest.fn();
jest.mock('@/api/Item/ItemApi', () => jest.fn().mockImplementation(() => ({ getItemInfo: mockGetItemInfo })));

describe('ItemInfoPage', () => {
  beforeEach(() => {
    mockGetItemInfo.mockClear();
  });

  it('redners ItemInfoPage', async () => {
    mockGetItemInfo.mockResolvedValueOnce({
      data: { item: {} },
    });

    // mock이 필요없는 요구사항이긴 하지만, 안 하면 seller info TC에서 에러가 남
    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-image"]').exists()).toBe(true);
  });

  it('renders seller info', async () => {
    const testSellerName = 'test seller';
    const testSellerImg = 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png';
    const testSellerTags = ['testing', 'tags'];
    const resultTagText = '#testing #tags';

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          seller: {
            name: testSellerName,
            profile_image: testSellerImg,
            hash_tags: testSellerTags,
          },
        },
      },

    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('[data-test="seller-name"]').text()).toBe(testSellerName);
    expect(wrapper.find('img[data-test="seller-image"]').attributes('src')).toBe(testSellerImg);
    expect(wrapper.find('[data-test="seller-hashtags"]').text()).toBe(resultTagText);
  });

  it('renders description with html', async () => {
    const testDescription = '<p>hello</p>';

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          description: testDescription,
        },
      },
    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('[data-test="description"]').html()).toContain(testDescription);
  });

  it('renders information on item', async () => {
    const testProductName = 'Testing with vue-test-utils';

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          name: testProductName,
        },
      },
    });
    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.get('[data-test="name"]').text()).toBe(testProductName);
  });

  it('render original price if product is discounted', async () => {
    const testOriginalPrice = 19800;
    const testPrice = 12510;
    const testDistcountRate = ((testOriginalPrice - testPrice) / testOriginalPrice) * 100;

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          original_price: testOriginalPrice, price: testPrice,
        },
      },
    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('#original').exists()).toBe(true);
    expect(wrapper.get('#original').text()).toBe(`${testOriginalPrice.toLocaleString()}원`);
    expect(wrapper.get('[data-test="discount-rate"]').text()).toBe(`${testDistcountRate.toFixed(0)}%`);
    expect(wrapper.get('[data-test="price"]').text()).toBe(`${testPrice.toLocaleString()}원`);
  });

  it('renders reviews', async () => {
    const testReveiwNo = 3;
    const testReviewWriter = 'test';
    const testReviewTitle = 'test review title';
    const testReviewContent = 'test review content';
    const testReviewCreated = '2020. 12. 30';

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          reviews: [{
            review_no: testReveiwNo,
            writer: testReviewWriter,
            title: testReviewTitle,
            content: testReviewContent,
            created: testReviewCreated,
          }],
        },
      },
    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('#reviews').exists()).toBe(true);
    expect(wrapper.find('[data-test="review-writer"]').text()).toBe(testReviewWriter);
    expect(wrapper.find('[data-test="review-title"]').text()).toBe(testReviewTitle);
    expect(wrapper.find('[data-test="review-content"]').text()).toBe(testReviewContent);
    expect(wrapper.find('[data-test="review-created"]').text()).toBe(testReviewCreated);
    expect(wrapper.findAll('[data-test="review-img"]').length).toBe(0);
  });

  it('renders image on review when exists', async () => {
    const testReveiwImgUrl = 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/example.jpg';

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          reviews: [{
            review_no: 1,
            writer: 'writer',
            title: 'title',
            content: 'content',
            created: '1990.12.01',
            img: testReveiwImgUrl,
          }],
        },
      },
    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('[data-test="review-img"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="review-img"]').find('img').attributes('src')).toBe(testReveiwImgUrl);
  });

  it('renders footer with price', async () => {
    const testPrice = 39800;
    const resultString = `${testPrice.toLocaleString()}원 구매`;

    mockGetItemInfo.mockResolvedValueOnce({
      data: {
        item: {
          price: testPrice,
        },
      },
    });

    const wrapper = mount(ItemInfoPage);
    await flushPromises();

    expect(wrapper.find('[data-test="footer-price"]').text()).toBe(resultString);
  });
});
