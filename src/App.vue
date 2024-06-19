<template>
  <div id="app">
    <header>
      <router-link to="/posts" :class="{ active: currentRoute === 'PostComponent' }">Posts</router-link>
      <router-link to="/todos" :class="{ active: currentRoute === 'TodosComponent' }">Todos</router-link>
      <router-link to="/albums" :class="{ active: currentRoute === 'AlbumComponent' }">Albums</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const currentRoute = computed(() => route.name)
    return { currentRoute }
  }
}
</script>

<style scoped>
body {
  background-color: #f8f8f8; 
  margin: 0;
  font-family: 'Arial', sans-serif;
}

header {
  display: flex;
  justify-content: center;
  padding: 15px 0; 
  background-color: #ffffff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

a {
  margin: 0 15px; 
  padding: 12px 25px; 
  border: none;
  border-radius: 20px; 
  background-color: #007bff;
  color: white;
  font-size: 1rem; 
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; 
}

a:hover {
  background-color: #0056b3; 
  transform: translateY(-3px); 
}

a:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); 
}

a.active {
  background-color: #000000; 
}
</style>
