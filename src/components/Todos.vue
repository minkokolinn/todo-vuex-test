<template>
  <div>
    <h3 class="text-primary text-center">All Todos</h3>
    <div class="container">
      <AddTodo></AddTodo>
      <FilterTodo></FilterTodo>
      <div class="row">
        <div class="col-md-4 my-3" v-for="todo in getTodos" :key="todo.id">
          <div class="card text-white" :class="todo.completed?'bg-success':'bg-primary'" @dblclick="toggleCompleted(todo)">
            <div class="card-body d-flex justify-content-between">
              <span>{{ todo.title }}</span>
              <span @click="deleteTodo(todo.id)" class="deleteBtn"><i class="bi bi-trash-fill text-danger"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import FilterTodo from './FilterTodo'
import AddTodo from './AddTodo'
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    FilterTodo, AddTodo },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos","deleteTodo","updateTodo"]),
    toggleCompleted(todo){
      todo.completed = !todo.completed
      this.updateTodo(todo)
    }
  },
  mounted() {
    this.fetchTodos()
  },
};
</script>

<style>
span.deleteBtn{
  cursor: pointer;
}
</style>
