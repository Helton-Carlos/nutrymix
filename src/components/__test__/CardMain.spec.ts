import { describe, it, expect } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import CardMain from '../CardMain.vue'

describe('CardMain', () => {
  it('renders CardMain component', () => {
    const wrapper = mount(CardMain, {
      props: {
        title: 'Clientes cadastrados',
      },
    });

    expect(wrapper).toBeTruthy();
  })

  it('renders props title CardMain component', () => {
    const wrapper = mount(CardMain, {
      props: {
        title: 'Clientes cadastrados',
      },
    });

    const client = wrapper.get('[data-test="title"]');

    expect(client.text()).toBe('Clientes cadastrados');
  })

  it('renders slots title CardMain component', () => {
    const wrapper = mount(CardMain, {
      slots: {
        body: h('h1', {}, 'Named Slot'),
      },
    });

    expect(wrapper.text()).toBe('Named Slot');
  })
})
