<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="newTodo.title">
    <div class="input-group-append">
        <button class="btn btn-primary" @click="postTodo(newTodo)">add todo</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            newTodo:{
                title:""
            }
        }
    },
    methods: {
        ...mapActions(["postTodo"])
    }
}
</script>

<style>

</style>