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
        totalCount() {
            return this.tasks.length
        }
    }
})

