<script setup>
import AddTask from '@/components/AddTask.vue';
import TaskItem from '@/components/TaskItem.vue';
import TaskList from '@/components/TaskList.vue';
import FilterTask from '@/components/FilterTask.vue';
</script>

<template>
  <main>
    <TaskItem />
    <TaskList />
    <AddTask />
    <FilterTask />
  </main>
</template>