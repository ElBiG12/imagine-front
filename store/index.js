export const state = () => ({
  lmsScrollY: null
})

export const mutations = {
  updateLMS(state, locoY) {
    state.lmsScrollY = locoY
  }
}
