<template>
  <form @submit.prevent="submitForm">
    <input
      v-model="name"
      type="text"
    >
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Form extends Vue {
  private name = ''

  submitForm (): void {
    this.$emit('submitted', { name: this.name })
  }
}
</script>

<style scoped lang="scss">
</style>
