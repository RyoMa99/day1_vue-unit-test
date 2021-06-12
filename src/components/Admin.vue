<template>
  <nav>
    <a
      id="profile"
      href="/profile"
    >My Profile</a>
    <!-- <a v-if="admin" id="admin" href="/admin">Admin</a> -->
    <a
      v-show="admin"
      id="admin"
      href="/admin"
    >Admin</a>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShowName extends Vue {
  private admin = false
}
</script>

<style scoped lang="scss">
</style>
