<template>
  <div>
    <select v-model="limit" @change="filterTodos(limit)">
        <option value="5">5</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="200">200</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            limit:5
        }
    },
    methods:{
        ...mapActions(["filterTodos"])
    }
}
</script>

<style>

</style>