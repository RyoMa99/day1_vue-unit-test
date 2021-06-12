<template>
  <div>
    <p>Count is: {{ count }}</p>
    <button @click="increment">
      +
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShowName extends Vue {
  private count = 0
  increment ():void {
    this.count++
    this.$emit('incrementCount', this.count, 'test')
  }
}

</script>

<style scoped lang="scss">
</style>
