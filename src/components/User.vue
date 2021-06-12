<template>
  <div>
    <h1>test</h1>
    <UserList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UserList from '@/components/UserList.vue'

@Component({
  components: {
    UserList
  }
})
export default class User extends Vue {
}
</script>

<style scoped lang="scss">
</style>
