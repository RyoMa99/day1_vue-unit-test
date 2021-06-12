import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
  it('Form component', () => {
    const wrapper = shallowMount(Form)
    const input = wrapper.get('input')
    input.setValue('John Doe')
    wrapper.trigger('submit')
    const emittedForm = wrapper.emitted('submitted')
    if (emittedForm !== undefined) {
      console.log(emittedForm)
      expect(emittedForm[0][0]).toEqual({
        name: 'John Doe'
      })
    }
  })
})
