import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import { h } from 'vue';
import Button from '../Button.vue';

describe('Button', () => {
  it('renders Button component', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'primary',
      },
    });

    expect(wrapper).toBeTruthy();
  })

  it('renders slots Button component', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'primary',
      },
      slots: {
        default: h('h3', {}, 'Cadastrar'),
      },
    });

    expect(wrapper.text()).toBe('Cadastrar');
  })

  it('renders props title CardMain component', () => {
    const wrapper = mount(Button, {
      props: {
        color: 'primary',
      },
    });
    
    expect(wrapper.classes()).toContain('btn-primary');
  })
})
