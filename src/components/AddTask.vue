<template>
  <div class="add-task">
    <input type="text" v-model="newTask" placeholder="Add new task...">
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('addTask', this.newTask);
        this.newTask = '';
      }
    }
  }
};
</script>

<style scoped>
.add-task {
  margin-top: 20px;
}
.add-task input {
  width: 200px;
  padding: 5px;
  margin-right: 10px;
}
.add-task button {
  padding: 5px 10px;
}
</style>
