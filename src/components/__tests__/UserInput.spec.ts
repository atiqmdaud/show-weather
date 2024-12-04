import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserInput from '../UserInput.vue'

describe('User Input', () => {
  it('renders properly', () => {
    const wrapper = mount(UserInput)
    expect(wrapper.text()).toContain('Enter City')
  })
})
