<template>
  <div id="task-manager-container">
    <h1>Task Manager</h1>
    <!-- Add Task Section -->
    <div class="add-task">
      <input v-model="newTaskName" placeholder="Add a new task..." />
      <button @click="addTask">Add Task</button>
    </div>
    <!-- Filter Task Section -->
    <div class="filter-task">
      <label>
        <input type="checkbox" :checked="filterCompleted" @change="filterTasks" />
        Show only incomplete tasks
      </label>
    </div>
    <!-- Task List Section -->
    <div class="task-list">
      <div v-for="(task, index) in filteredTasks" :key="index" class="task-item">
        <input type="checkbox" :checked="task.completed" @change="() => completeTask(task)" />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="cancelTask(task)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosComponent',
  data() {
    return {
      tasks: [],
      filterCompleted: false,
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
    },
    filterTasks() {
      this.filterCompleted = !this.filterCompleted
    }
  },
  computed: {
    filteredTasks() {
      return this.filterCompleted ? this.tasks.filter((task) => !task.completed) : this.tasks
    }
  }
}
</script>

<style scoped>
#task-manager-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
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
  color: #ffffff; 
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
  border-radius: 5px;
  cursor: pointer;
}

.task-item button:hover {
  background-color: #022f5e;
}

.add-task button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 3px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.add-task button:hover {
  background-color: #022f5e;
}

.filter-task {
  margin-top: 20px;
}

</style>
