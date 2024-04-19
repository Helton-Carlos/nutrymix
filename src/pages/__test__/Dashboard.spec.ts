import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import route from '../../use/mocktest'
import Dashboard from '../Dashboard.vue';

describe('Dashboard', () => {

  it('renders Dashboard component', () => {
    const wrapper = mount(Dashboard, route);

    expect(wrapper).toBeTruthy();
  })
})
