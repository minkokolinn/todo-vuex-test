import axios from "axios"

export default {
    state: {
        todos:[]
    },
    getters: {
        getTodos(state){
            return state.todos
        }
    },
    mutations: {
        setTodos(state,todos){
            state.todos = todos
        },
        setTodo(state,newtodo){
            state.todos.unshift(newtodo)
        }
    },
    actions: {
        async fetchTodos(context){
            let res = await axios.get("https://jsonplaceholder.typicode.com/todos")    
            context.commit("setTodos",res.data)
        },
        async postTodo(context,newTodo){
            let res = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            context.commit("setTodo",res.data)
        }
    }
}