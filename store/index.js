export const state = () => ({
  LMS: null
})

export const mutations = {
  updateLMS(state, loco) {
    state.LMS = loco
  }
}
