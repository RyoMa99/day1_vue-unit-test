import { mount, shallowMount } from '@vue/test-utils'
import User from '@/components/User.vue'
import flushPromises from 'flush-promises'
import axios from 'axios'

// axiosのモック
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({
    data: [
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
    ]
  }))
})
);

describe('User', () => {
  // it('mount render a child component', () => {
  //   const wrapper = mount(User)
  //   console.log(wrapper.html())
  //   expect(wrapper.html()).toContain('ユーザ一覧')
  // })
  // shallowMountだと子コンポーネントはstubが置かれる
  it('shallowMount not render a child component', () => {
    const wrapper = shallowMount(User)
    console.log(wrapper.html())
    // stubなので表示されない
    // expect(wrapper.html()).toContain('ユーザ一覧')
  })

  // mountを使いstubをカスタムしたスタブを置く方法
  it('mount render a child component', () => {
    const wrapper = mount(User, {
      stubs: {
        UserList: {
          template: '<h2>Stubで置き換え</h2>'
        }
      }
    })
    console.log(wrapper.html())
  })

  //  mountを使い、デフォルトのstubを使う方法
  it('mount render a child component', () => {
    const wrapper = mount(User, {
      stubs: {
        UserList: true
      }
    })
    console.log(wrapper.html())
  })

  // axois
  it("mount render a child component", async () => {
    const wrapper = mount(User);
    await flushPromises()
    // console.log(wrapper.html())
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
    const users = wrapper.findAll('li')
    expect(users).toHaveLength(2)
    expect(users.at(0).text()).toContain('Leanne')
    expect(users.at(1).text()).toContain('Howell')
  })
})
