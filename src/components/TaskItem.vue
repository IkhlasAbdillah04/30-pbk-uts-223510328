<template>
  <div class="task-item" :class="{ 'completed': task.completed }">
    <input type="checkbox" v-model="completed" @change="completeTask">
    <span>{{ task.name }}</span>
    <button @click="cancelTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  data() {
    return {
      completed: this.task.completed
    };
  },
  methods: {
    cancelTask() {
    this.completed = false;
    this.$emit('cancelTask', this.task);
    },
    completeTask() {
  this.$emit('completeTask', this.task, !this.completed);
    }
  }
};
</script>

<style scoped>
.task-item {
  margin-bottom: 10px;
}
.completed {
  text-decoration: line-through;
}
</style>
