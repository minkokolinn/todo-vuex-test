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
        },
        removeTodo(state,removeId){
            state.todos = state.todos.filter(todo=>todo.id!=removeId)
        },
        updateTodo(state,todo){
            state.todos.forEach(td => {
                if(td.id===todo.id){
                    td = todo
                }
            });
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
        },
        async deleteTodo(context,removeId){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`)
            context.commit("removeTodo",removeId)
        },
        async filterTodos(context,limit){
            let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            context.commit("setTodos",res.data)
        },
        async updateTodo(context,todo){
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo)
            context.commit("updateTodo",todo)
        }
    }
}