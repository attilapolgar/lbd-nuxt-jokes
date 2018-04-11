<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-brand href="#">lbd-nuxt-jokes</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item :href="urls.github" target="_blank">GitHub</b-nav-item>
        <b-nav-item :href="urls.linkedin" target="_blank">LinkedIn</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    urls: {
      github: 'https://github.com/raglopa/lbd-nuxt-jokes',
      lindedin: 'https://www.linkedin.com/in/attilapolgar',
    },
  }),
}
</script>
