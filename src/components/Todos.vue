<template>
  <div>
    <h1>Daftar Todos</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Tambah Todo Baru">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" v-model="todo.completed">
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: ''
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

