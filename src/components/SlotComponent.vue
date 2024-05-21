<template>
  <div class="slot-container">
    <slot name="header">Default Header</slot>
    <div class="content">
      <slot name="content">Default content if no content is provided.</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotComponent'
}
</script>

<style scoped>
#task-manager-container {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
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
  color: #000000;
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

.actions {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
