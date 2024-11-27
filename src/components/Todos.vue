<template>
  <div>
    <h3 class="text-primary text-center">All Todos</h3>
    <div class="container">
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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTodos"]),
  },
  mounted() {},
};
</script>

<style></style>
