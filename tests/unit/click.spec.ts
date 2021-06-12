import { shallowMount, Wrapper } from '@vue/test-utils'
import Click from '@/components/Click.vue'

describe('Click.vue', () => {
  let wrapper: Wrapper<Click>
  // 繰り返しの前処理をまとめられる
  beforeEach(() => {
    wrapper = shallowMount(Click)
  })
  it('click components', async () => {
    // ボタンを押してもすぐにDOMに反映されるわけではないのでasync/awaitに
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Count is: 1')
    // console.log(wrapper.emitted('incrementCount'))
    const emitClick = wrapper.emitted('incrementCount')
    if (emitClick !== undefined) {
      expect(emitClick[0][0]).toBe(1)
    }
  })
})

describe('App', () => {
  it('click button count up', async () => {
    const wrapper = shallowMount(Click)
    wrapper.get('button').trigger('click')
    wrapper.get('button').trigger('click')
    console.log(wrapper.emitted('incrementCount'))
  })
})
