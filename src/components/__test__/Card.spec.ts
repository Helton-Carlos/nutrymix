import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../Card.vue'

describe('Card', () => {
  it('renders Card component', () => {
    const wrapper = mount(Card, {
      props: {
        client: 'Renato Carlos',
        type: 'dieta',
        hour: '10:00',
      },
    })

    expect(wrapper).toBeTruthy()
  })

  it('renders slots title Card component', () => {
    const wrapper = mount(Card, {
      props: {
        client: 'Renato Carlos',
        type: 'dieta',
        hour: '10:00',
      },
    })
    
    const client = wrapper.get('[data-test="client"]');
    const type = wrapper.get('[data-test="type"]');
    const hour = wrapper.get('[data-test="hour"]');
    
    expect(client.html()).toContain("Renato Carlos");
    expect(type.html()).toContain("dieta");
    expect(hour.html()).toContain("10:00");
  })
})
