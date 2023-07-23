import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../Header.vue';

describe('Header', () => {
  it('renders Header component', () => {
    const wrapper = mount(Header);
    
    expect(wrapper).toBeTruthy();
  });
})