<template>
  <div>{{ upperCaseName }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShowName extends Vue {
  private name = 'John'

  private get upperCaseName () {
    return this.name.toUpperCase()
  }
}
</script>

<style scoped lang="scss">
</style>
