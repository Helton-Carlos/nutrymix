import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('renders Header component', () => {
    const wrapper = mount(Header);
    
    expect(wrapper).toBeTruthy();
  });

  it('renders name client Header component', () => {
    const wrapper = mount(Header);
    
    const name = wrapper.get('[data-test="name"]');

    expect(name.text()).toBe('John Smith');
  });

  it('renders name client Header component', () => {
    const wrapper = mount(Header);
    
    const name = wrapper.get('[data-test="name"]');

    expect(name.text()).toBe('John Smith');
  });

  it('renders Button Click client Header component', async () => {
    const wrapper = mount(Header);

    const itemDown = wrapper.get('[data-test="item-menu-down"]').html();

    expect(itemDown).toBe('<i class="pi pi-angle-down" data-test="item-menu-down"></i>');

    await wrapper.get('[data-test="btn-click"]').trigger('click');
    
    const itemUp = wrapper.get('[data-test="item-menu-up"]').html();

    expect(itemUp).toBe('<i class="pi pi-angle-up" data-test="item-menu-up"></i>');
  });
})