import { shallowMount } from '@vue/test-utils'
import ShowName from '@/components/ShowName.vue'

describe('ShowName.vue', () => {
  it('computed property upper case', () => {
    const wrapper = shallowMount(ShowName)
    expect(wrapper.text()).toMatch('JOHN')
  })
})
