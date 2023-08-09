<script setup>
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
  <main>
    <!-- heading -->
    <header>
      <img src="@/assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        {{ task.title }}
      </div>
    </div>
  </main>
</template>