<template>
  <ion-app>
    <router-view></router-view>
  </ion-app>
</template>

<script>
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
export default {
  components:{

    'todos': TodoList,
    'add-todo': AddTodoItem

  }
}
</script>

<style>
</style>
