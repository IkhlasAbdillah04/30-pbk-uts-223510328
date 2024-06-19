<template>
  <div id="task-manager-container">
    <h1>Task Manager</h1>
    <!-- Bagian Tambah Tugas -->
    <div class="add-task">
      <input type="text" v-model="newTaskName" placeholder="Add New Task..." class="task-input" />
      <button @click="addTask">Add Task</button>
    </div>
    <!-- Bagian Daftar Tugas -->
    <div class="task-list" v-if="tasks.length > 0">
      <div v-for="(task, index) in filteredTasks" :key="index" class="task-item">
        <input type="checkbox" :checked="task.completed" @change="() => completeTask(task)" />
        <span v-if="!task.editing" :class="{ completed: task.completed }">{{ task.name }}</span>
        <input v-else type="text" v-model="task.name" @keyup.enter="saveTask(task)" @blur="cancelEdit(task)" class="edit-input" />
        <div class="task-buttons">
          <button v-if="!task.editing" @click="editTask(task)">Edit</button>
          <button v-if="task.editing" @click="saveTask(task)">Save</button>
          <button @click="deleteTask(task)">Delete</button>
        </div>
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
          completed: false,
          editing: false
        }
        this.tasks.push(newTask)
        this.newTaskName = ''
      }
    },
    deleteTask(task) {
      this.tasks = this.tasks.filter((t) => t !== task)
    },
    completeTask(task) {
      task.completed = !task.completed
    },
    editTask(task) {
      task.editing = true
    },
    saveTask(task) {
      task.editing = false
    },
    cancelEdit(task) {
      if (!task.name.trim()) {
        this.deleteTask(task)
      } else {
        task.editing = false
      }
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
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 30px;
  background-color: #ffffff; /* Menyelaraskan warna latar belakang dengan komponen lainnya */
  border-radius: 20px; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto; 
  transition: transform 0.3s, box-shadow 0.3s;
  gap: 20px;
}

#task-manager-container:hover {
  transform: translateY(-5px); 
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15); 
}

h1 {
  color: #333333; 
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.task-input {
  width: 60%; 
  padding: 12px 18px; 
  margin-bottom: 20px; 
  border: 2px solid #ccc;
  border-radius: 15px; 
  transition: border-color 0.3s;
}

.task-input:focus {
  border-color: #007bff;
  outline: none;
}

.add-task button {
  background-color: #007bff; 
  color: #fff;
  border: none;
  padding: 12px 20px; 
  border-radius: 15px; 
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-task button:hover {
  background-color: #0056b3; 
}

.task-list {
  width: 100%;
}

.task-item {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px; 
  border-radius: 15px; 
  transition: transform 0.3s, box-shadow 0.3s;
}

.task-item:hover {
  transform: translateY(-3px); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
}

.completed {
  text-decoration: line-through;
  color: #999999; 
}

.task-item button {
  background-color: #ff4d4d; 
  color: #fff;
  border: none;
  padding: 8px 12px; 
  border-radius: 10px; 
  cursor: pointer;
  transition: background-color 0.3s;
}

.task-item button:hover {
  background-color: #ff0000; 
}

.edit-input {
  width: 60%;
  padding: 8px 12px;
  margin-bottom: 0;
  border: 2px solid #ccc;
  border-radius: 15px;
  transition: border-color 0.3s;
}

.edit-input:focus {
  border-color: #007bff;
  outline: none;
}

.task-buttons {
  display: flex;
  gap: 10px;
}

.filter-task {
  margin-top: 20px;
}

</style>
