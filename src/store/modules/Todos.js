import axios from "axios"

export default {
    state: {
        todos:[
            {
                id:1,
                title:"Sample data"
            }
        ]
    },
    getters: {
        getTodos(state){
            return state.todos
        }
    },
    mutations: {
        setTodos(state,todos){
            state.todos = todos
        }
    },
    actions: {
        async fetchTodos(context){
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos")    
            context.commit("setTodos",res.data)
        }
    }
}