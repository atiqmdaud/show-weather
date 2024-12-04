import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserInput from '../UserInput.vue'

describe('User Input', () => {
  it('renders properly', () => {
    const input = mount(UserInput).find('input')
    expect(input.attributes('placeholder')).toBe('Search for a city or airport')
  })
})
