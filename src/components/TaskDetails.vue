<script setup>
import { useTaskStore } from '@/stores/TaskStore';
const taskStore = useTaskStore();

const props = defineProps({
    task: {
        type: Object,
        default: () => ({})
    }
})
</script>


<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" @click="taskStore.toggleFav(task.id)" :class="{ 'favorite': task.isFav }">favorite</i>
        </div>
    </div>
</template>

<style scoped>
.favorite {
    color: red;
}
</style>