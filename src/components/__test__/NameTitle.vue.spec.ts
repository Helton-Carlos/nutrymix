import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NameTitle from '../NameTitle.vue';

describe.only('NameTitle', () => {
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
  
    expect(wrapper.text()).toContain('Nome titulo');
  });

  it('renders slots subTitle NameTitle component', () => {
    const wrapper = mount(NameTitle, {
      slots: {
        subTitle: 'Nome subTitle'
      }
    })
  
    expect(wrapper.text()).toContain('Nome subTitle');
  });
})