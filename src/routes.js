import TodoList from './components/TodoList.vue'
import AddTodoItem from './components/AddTodoItem.vue'

export default [

    { path: '', redirect: '/todos'},
    { path: '/todos', component: TodoList },
    { path: '/todos/add', component: AddTodoItem}

]