export const state = () => ({
    isOpen: false,
    title: '',
    body: '',
    buttons: []
})
  
export const mutations = {
    toggleOpen(state, payload) {
        state.isOpen = payload.isOpen
        state.title = payload.title
        state.body = payload.body
        state.buttons = payload.buttons
    },
}
  