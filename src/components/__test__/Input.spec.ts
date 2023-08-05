import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../Input.vue'

describe('Input', () => {
  it('renders Input component', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Digite o nome',
        placeholder: 'Laura Carla Brito',
        type: 'text',
        modelValue: 'Laura Carla Brito',
        error: true,
      },
    })

    expect(wrapper).toBeTruthy()
  })

  it('renders props label Input component', () => {
    const wrapper = mount(Input, {
      props: {
        label: 'Digite o nome',
        placeholder: 'Laura Carla Brito',
        type: 'text',
        modelValue: 'Laura Carla Brito',
        error: true,
      },
    })

    const label = wrapper.get('[data-test="label"]')

    expect(label.text()).toBe('Digite o nome')
  })

  it('renders props class error Input component', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Laura Carla Brito',
        type: 'text',
        modelValue: 'Laura Carla Brito',
        error: true,
      },
    })

    const input = await wrapper.get('[data-test="input"]')

    expect(input.classes()).toContain('input-off')
  })

  it('renders props class right Input component', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Laura Carla Brito',
        type: 'text',
        modelValue: 'Laura Carla Brito',
        error: false,
      },
    })

    const input = await wrapper.get('[data-test="input"]')

    expect(input.classes()).toContain('input-on')
  })

  it('renders modelValue Input component', async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: 'Laura Carla Brito',
        type: 'text',
        modelValue: 'Laura Carla Brito',
        error: false,
      },
    })

    await wrapper.find('input').setValue('Laura Carla Brito')

    expect(wrapper.props('modelValue')).toBe('Laura Carla Brito')
  })
})
