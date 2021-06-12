<template>
  <div>
    <h2>ユーザ一覧</h2>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class UserList extends Vue {
  private users = []

  mounted (): void {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
  }
}
</script>

<style scoped lang="scss">
</style>
