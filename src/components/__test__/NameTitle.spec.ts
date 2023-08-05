import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NameTitle from '../NameTitle.vue';

describe('NameTitle', () => {
  it('renders NameTitle component', () => {
    const wrapper = mount(NameTitle);
    
    expect(wrapper).toBeTruthy();
  });

  it('renders slots title NameTitle component', () => {
    const wrapper = mount(NameTitle, {
      slots: {
        title: 'Nome titulo'
      }
    })
  
    expect(wrapper.text()).toBe('Nome titulo');
  });

  it('renders slots subTitle NameTitle component', () => {
    const wrapper = mount(NameTitle, {
      slots: {
        subTitle: 'Nome subTitle'
      }
    })
  
    expect(wrapper.text()).toBe('Nome subTitle');
  });
})