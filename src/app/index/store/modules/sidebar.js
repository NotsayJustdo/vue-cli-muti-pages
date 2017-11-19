const sidebar = {
    state: {
        opened: false
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.opened = !state.opened;
        }
    }
}

export default sidebar