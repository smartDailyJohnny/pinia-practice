import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 2, title: "play Gloomhaven", isFav: true }
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter((item) => item.isFav)
        },
        favCount() {
            return this.favs.length
        },
        // can't use `this` if you use arrow functions
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(deleteId) {
            this.tasks = this.tasks.filter(item => item.id !== deleteId)
        },
        toggleFav(favId) {
            const task = this.tasks.find(item => item.id === favId)
            task.isFav = !task.isFav
        }
    }
})

