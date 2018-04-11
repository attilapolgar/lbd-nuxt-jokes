export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE'
export const RATE_JOKE = 'RATE_JOKE'

export const state = () => ({
  current: 'default joke',
  ratings: [],
})

export const mutations = {
  [GET_RANDOM_JOKE](state, joke) {
    state.current = joke
    state.ratings = [
      ...state.ratings,
      {
        id: joke.id,
        plus: 0,
        minus: 0,
      },
    ]
  },
  [RATE_JOKE](state, { id, value }) {
    state.ratings = state.ratings.map(r => {
      if (r.id === id) {
        return {
          ...r,
          plus: value === 1 ? r.plus + 1 : r.plus,
          minus: value === -1 ? r.minus + 1 : r.minus,
        }
      }
      return r
    })
  },
}

export const actions = {
  async getRandomJoke({ commit }) {
    const response = await fetch('http://api.icndb.com/jokes/random')
    const joke = await response.json()
    commit(GET_RANDOM_JOKE, joke.value)
  },
  rateJoke({ commit }, payload) {
    commit(RATE_JOKE, payload)
  },
}

export const getters = {
  currentJoke(state) {
    return {
      ...state.current,
      ...state.ratings.find(r => r.id === state.current.id),
    }
  },
}
