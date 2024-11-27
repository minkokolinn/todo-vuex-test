<template>
  <div>
    <h3 class="text-primary text-center">All Todos</h3>
    <div class="container">
      <AddTodo></AddTodo>
      <div class="row">
        <div class="col-md-4 my-3" v-for="todo in getTodos" :key="todo.id">
          <div class="card bg-primary text-white">
            <div class="card-body">
              {{ todo.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AddTodo from './AddTodo'
import { mapActions, mapGetters } from "vuex";

export default {
  components: { AddTodo },
  computed: {
    ...mapGetters(["getTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos"])
  },
  mounted() {
    this.fetchTodos()
  },
};
</script>

<style></style>
