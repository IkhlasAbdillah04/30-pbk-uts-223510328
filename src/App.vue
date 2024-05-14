<template>
  <div id="app">
    <header>
      <button @click="currentView = 'PostComponent'">Posts</button>
      <button @click="currentView = 'TodosComponent'">Todos</button>
    </header>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import TodosComponent from './components/TodosComponent.vue'

export default {
  name: 'App',
  components: {
    PostComponent,
    TodosComponent
  },
  data() {
    return {
      currentView: 'PostComponent'
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  display: flex;
}

body{
  background-color: #192633;

}

button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #000000;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #000000;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
