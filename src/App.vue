<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/TaskStore'
import TaskDetails from '@/components/TaskDetails.vue'

const taskStore = useTaskStore()
// state ========================
const filter = ref('all')
// methods ======================
const setFilter = (val) => {
  filter.value = val
}
</script>

<template>
  <main>
    <!-- heading -->
    <header>
      <img src="@/assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="setFilter('all')">All Tasks</button>
      <button @click="setFilter('favs')">Fav Tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Fav Tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>