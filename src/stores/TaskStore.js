// ===========================================================================================================
// 1.) import a function from pinia to create a Pinia instance
// ===========================================================================================================
import { defineStore } from "pinia";

// ===========================================================================================================
// 2.) invoke the imported function
// need 2 args => 1st is the unique name of the store, 2nd is an object where we define things like the state
// 3.) export the store
// ===========================================================================================================
export const useTaskStore = defineStore('taskStore', {
    // state is a function that returns an object
    state: () => ({
        tasks: [
            { id: 1, title: "buy some milk", isFav: false },
            { id: 2, title: "play Gloomhaven", isFav: true }
        ]
    })
})

