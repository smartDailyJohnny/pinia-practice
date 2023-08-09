<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore'
import TaskDetails from '@/components/TaskDetails.vue'
import TaskForm from '@/components/TaskForm.vue';

const taskStore = useTaskStore()
// state ========================
const filter = ref('all')
// methods ======================
const setFilter = (val) => {
  filter.value = val
}
// store actions =================
taskStore.getTasks()
</script>

<template>
  <main>
    <!-- heading -->
    <header>
      <img src="@/assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="setFilter('all')">All Tasks</button>
      <button @click="setFilter('favs')">Fav Tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="taskStore.isLoading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do!</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do!</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>