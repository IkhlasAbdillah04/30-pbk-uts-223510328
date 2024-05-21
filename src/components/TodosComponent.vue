<template>
  <div id="task-manager-container">
    <h1>Task Manager</h1>
    <!-- Add Task Section -->
    <div class="add-task">
      <input type="text" v-model="newTaskName" placeholder="Add New Task..." class="task-input" />
      <button @click="addTask">Add Task</button>
    </div>
    <!-- Task List Section -->
    <div class="task-list" v-if="tasks.length > 0">
      <div v-for="(task, index) in filteredTasks" :key="index" class="task-item">
        <input type="checkbox" :checked="task.completed" @change="() => completeTask(task)" />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="cancelTask(task)">Delete</button>
      </div>
    </div>
    <slot-component v-else>
      <template v-slot:header>
        <h3>No Tasks</h3>
      </template>
      <template v-slot:content>
        <p>Click 'Add Task' to start adding tasks.</p>
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from './SlotComponent.vue'

export default {
  name: 'TodosComponent',
  components: {
    SlotComponent
  },
  data() {
    return {
      tasks: [],
      newTaskName: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTaskName) {
        const newTask = {
          name: this.newTaskName,
          completed: false
        }
        this.tasks.push(newTask)
        this.newTaskName = ''
      }
    },
    cancelTask(task) {
      this.tasks = this.tasks.filter((t) => t !== task)
    },
    completeTask(task) {
      task.completed = !task.completed
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks
    }
  }
}
</script>

<style scoped>
#task-manager-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 1.5rem auto;
}

h1 {
  color: #000000;
}

.task-input {
  width: 50%;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: border-color 0.3s;
}

.task-input:focus {
  border-color: #007bff;
  outline: none;
}

.task-item {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #2a4664;
  padding: 10px;
  border-radius: 10px;
  margin-top: 1rem;
}

.completed {
  text-decoration: line-through;
  color: #cccccc;
}

.task-item button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.task-item button:hover {
  background-color: #022f5e;
}

.add-task button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
}

.add-task button:hover {
  background-color: #022f5e;
}

.filter-task {
  margin-top: 20px;
}
</style>
