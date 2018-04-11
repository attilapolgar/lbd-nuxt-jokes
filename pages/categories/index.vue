<template>
  <div>
    <h3>categories</h3>
    <div v-for="category in categories" :key="category.id">
      {{category.name}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: { ...mapState(['categories']) },
}
</script>

<style lang="scss" scoped>

</style>
