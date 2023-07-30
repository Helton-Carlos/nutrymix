import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Modal from '../Modal.vue'

describe('Modal', () => {
  it('renders Modal component', () => {
    const wrapper = mount(Modal, {
      slots: {
        default: 'Cadastrar',
      },
    });

    expect(wrapper).toBeTruthy();
  })
})
