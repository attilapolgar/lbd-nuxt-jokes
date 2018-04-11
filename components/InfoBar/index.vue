<template>
  <b-row id="info-bar">
    <b-col class="text-center">
      {{statistics.viewed}} jokes viewed since {{statistics.startDate}} with average rating {{statistics.averageRating}}
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ statistics: 'statistics' }),
  },
}
</script>

<style lang="scss" scoped>
#info-bar {
  background-color: rgb(240, 240, 240);
}
</style>
