<template>
  <blockquote class="blockquote m-5 text-center text-info">
    <h3>{{joke}}</h3>
  </blockquote>
</template>

<script>
export default {
  props: ['joke'],
}
</script>

<style lang="scss" scoped>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 3rem 10px;
  display: flex;
  align-content: center;
  align-items: center;
  min-height: 20rem;
  padding: 2rem 10px;
  quotes: '\201C''\201D''\2018''\2019';
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1rem;
  margin-right: 0.25rem;
  vertical-align: -0.4rem;
}
blockquote h3 {
  display: inline;
}
</style>

