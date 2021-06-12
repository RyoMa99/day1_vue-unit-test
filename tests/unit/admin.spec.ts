import { shallowMount } from '@vue/test-utils'
import Admin from '@/components/Admin.vue'

describe('Admin.vue', () => {
  it('test Admin component', async () => {
    // const wrapper = shallowMount(Admin,{
    //   data(){
    //     return {
    //       admin: true
    //     }
    //   }
    // })
    const wrapper = shallowMount(Admin)
    // setDataの場合はDomが更新されていない為、async/awaitを使用する
    // await wrapper.setData({
    //   admin: true
    // })
    // const admin = wrapper.find('#admin')
    // v-showの場合は、getだとfalseでもエラーにならない。
    // getが要素があるかどうかをみているから
    const admin = wrapper.get('#admin')
    // const profile = wrapper.get('#profile')
    // const profile = wrapper.find('#profile')
    // console.log(profile.text())
    // expect(admin.exists()).toBe(false)
    // expect(admin.exists()).toBe(true)

    expect(admin.isVisible()).toBe(false)
  })
})
