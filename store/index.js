export const state = () => ({ startDate: new Date() })
export const getters = {
  statistics(state) {
    return {
      viewed: state.jokes.ratings.length,
      startDate: state.startDate,
      averageRating: state.jokes.ratings.reduce(
        (acc, curr) => acc + curr.plus - curr.minus,
        0
      ),
    }
  },
}
