<template>
  <div class="filter-task">
    <input type="checkbox" v-model="filterCompleted">
    <label for="filterCompleted">Show only incomplete tasks</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterCompleted: false
    };
  },
  watch: {
    filterCompleted() {
      this.$emit('filterTasks', this.filterCompleted);
    }
  }
};
</script>

<style scoped>
.filter-task {
  margin-top: 10px;
}
</style>
