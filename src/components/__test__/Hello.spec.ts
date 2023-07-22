import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import mainText from '../Hello.vue';

describe('mainText', () => {
  it('renders mainText component', () => {
    const wrapper = mount(mainText);
    
    expect(wrapper).toBeTruthy();
  });

  it('renders slots mainText component', () => {
    const wrapper = mount(mainText, {
      slots: {
        default: 'Pacotes em promoção'
      }
    })
  
    expect(wrapper.text()).toContain('Pacotes em promoção');
  });
})