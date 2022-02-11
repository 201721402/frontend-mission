import { mount } from '@vue/test-utils';
import InfoPage from '@/views/Info.vue';

describe('InfoPage', () => {
  it('renders InfoPage', () => {
    const wrapper = mount(InfoPage);

    expect(wrapper.find('[data-test="info-page"]').exists()).toBe(true);
  });
});
