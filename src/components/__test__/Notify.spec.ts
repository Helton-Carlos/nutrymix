import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import Notify from '../Notify.vue'
import { EMessages } from '../../use/message'

describe('Notify', () => {
  const { REGISTER_ERROR, REGISTER_TEXT_ERROR } = EMessages

  const prop = {
    title: REGISTER_ERROR,
    text: REGISTER_TEXT_ERROR
  }

  it('renders Notify component', () => {
    const wrapper = mount(Notify, {
      props: prop,
    });

    expect(wrapper).toBeTruthy();
  })
})
