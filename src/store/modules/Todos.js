export default {
    state: {
        todos:[
            {
                title:"HTML",
                id:1
            },
            {
                title:"CSS",
                id:2
            },
            {
                title:"Javascript",
                id:3
            }
        ]
    },
    getters: {
        getTodos(state){
            return state.todos
        }
    },
    mutations: {},
    actions: {}
}