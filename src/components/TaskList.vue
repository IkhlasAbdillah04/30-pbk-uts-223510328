<template>
  <div class="task-list">
    <TaskItem
      v-for="(task, index) in filteredTasks"
      :key="index"
      :task="task"
      @cancelTask="cancelTask"
      @completeTask="completeTask"
    />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    TaskItem
  },
  props: {
    tasks: Array,
    filterCompleted: Boolean
  },
  computed: {
    filteredTasks() {
      if (this.filterCompleted) {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks;
      }
    }
  },
  methods: {
    cancelTask(task) {
      this.$emit('cancelTask', task);
    },
    completeTask(task) {
      this.$emit('completeTask', task);
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.task-container {
  margin-bottom: 20px;
}

.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
