import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        isLoading: false
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
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: { 'Content-Type': 'application/json' }
            })

            if (res.error) console.log(res.error)
        },
        deleteTask(deleteId) {
            this.tasks = this.tasks.filter(item => item.id !== deleteId)
        },
        toggleFav(favId) {
            const task = this.tasks.find(item => item.id === favId)
            task.isFav = !task.isFav
        },
        async getTasks() {
            this.isLoading = true

            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data

            this.isLoading = false
        }
    }
})

