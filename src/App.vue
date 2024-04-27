<template>
  <div id="app">
    <h1>Task Manager</h1>
    <AddTask @addTask="addTask" />
    <FilterTask @filterTasks="setFilter" />
    <TaskList
      :tasks="tasks"
      :filterCompleted="filterCompleted"
      @cancelTask="cancelTask"
      @completeTask="completeTask"
    />
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue'
import FilterTask from './components/FilterTask.vue'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    AddTask,
    FilterTask,
    TaskList
  },
  data() {
    return {
      tasks: [],
      filterCompleted: false
    }
  },
  methods: {
    addTask(taskName) {
      const newTask = {
        name: taskName,
        completed: false
      }
      this.tasks.push(newTask)
    },
    cancelTask(task) {
      this.tasks = this.tasks.filter((t) => t !== task)
    },
    completeTask(task) {
      task.completed = true
    },
    setFilter(filterValue) {
      this.filterCompleted = filterValue
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.task-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}

.task-item button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.task-item button:hover {
  background-color: #c82333;
}

.add-task {
  margin-bottom: 20px;
}

.add-task button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.add-task button:hover {
  background-color: #0056b3;
}

.filter-task {
  margin-top: -10px;
  margin-bottom: 10px;
}

</style>
