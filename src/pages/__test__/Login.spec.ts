import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import route from '../../use/mocktest'
import Login from '../Login.vue';

describe('Login', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders Login component', () => {
    const wrapper = mount(Login, route);

    expect(wrapper).toBeTruthy();
  })

  it('text init component', () => {
    const wrapper = mount(Login, route);
   
    expect(wrapper.html()).toContain('Faça seu login');
  })

  it('change sing up Login component', async () => {
    const wrapper = mount(Login, route);

    const button = wrapper.get('[data-test="btn-account"]');

    expect(wrapper.html()).toContain('Faça seu login');

    await button.trigger('click');
    
    expect(wrapper.html()).toContain('Crie sua conta');
  })
})
