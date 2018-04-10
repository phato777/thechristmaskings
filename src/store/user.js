import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default {
    namespaced: true,
    state: {
        user: null,
    },
    getters: {
        user: state => state.user,
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
    },
    actions: {
        
    }
}