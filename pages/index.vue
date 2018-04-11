<template>
  <b-container>
    <info-bar></info-bar>
    <b-row>
      <b-col v-if="joke.id">

        <joke :joke="joke.joke"></joke>

        <b-row class="justify-content-center align-content-center align-items-center text-center">
          <b-col class="text-center">
            <h3>
              <b-badge variant="info" v-for="category of joke.categories" :key="category">{{category}}</b-badge>
            </h3>
          </b-col>
          <b-col>
            <div class="d-inline-block mx-1">
              <b-btn @click="rateJoke({id:joke.id, value:+1})" variant="outline-info">+</b-btn>
              <div>{{joke.plus}}</div>
            </div>
            <div class="d-inline-block mx-1">
              <b-btn @click="rateJoke({id:joke.id, value:-1})" variant="outline-info">-</b-btn>
              <div>{{joke.minus}}</div>
            </div>
          </b-col>
        </b-row>

        <b-btn @click="getRandomJoke()" variant="success" block class="my-5">Hit me again</b-btn>
      </b-col>
      <b-col v-if="!joke.id">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Joke from '~/components/JokeDisplay'
import InfoBar from '~/components/InfoBar'
export default {
  created() {
    this.getRandomJoke()
  },
  computed: { ...mapGetters({ joke: 'jokes/currentJoke' }) },
  components: { Joke, InfoBar },
  methods: {
    ...mapActions({
      getRandomJoke: 'jokes/getRandomJoke',
      rateJoke: 'jokes/rateJoke',
    }),
  },
}
</script>
