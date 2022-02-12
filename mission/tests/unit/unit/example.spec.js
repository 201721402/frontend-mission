// eslint-disable-next-line no-unused-vars
import { shallowMount, VueWrapper } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const msg = 'new message';
  /**
   * @type {VueWrapper}
   */
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders props.msg when passed', () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders submit button', () => {
    expect(wrapper.find('input[type="button"]').exists()).toBe(true);
  });

  it('renders text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  it('has paragraph element', () => {
    expect(wrapper.find('p[data-test="customInput"]').exists()).toBe(true);
  });

  it('displays text from text input', async () => {
    const testText = 'hello from test code';
    await wrapper.get('input[type="text"]').setValue(testText);

    expect(wrapper.get('p[data-test="customInput"]').text()).toEqual(testText);
  });

  it('rotates text to left one at a time per button click', async () => {
    const testText = 'I am rotating!';
    const resultText = ' am rotating!I'.trim();

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('input[type="button"]').trigger('click');

    expect(wrapper.get('p[data-test="customInput"]').text()).toBe(resultText);
  });

  it('shows alert with text and click counter', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    const testText = 'Text shown on alert!';

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('input[type="button"][data-test="clickCounter"]').trigger('click');
    await wrapper.get('input[type="button"][data-test="clickCounter"]').trigger('click');

    expect(window.alert).toBeCalledWith(`${testText} 2`);
  });
});
