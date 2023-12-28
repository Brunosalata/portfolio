// Utilities
import { defineStore } from 'pinia'
import { useAlertStore } from '@/store/alert'

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [] as {title: string; done: boolean}[],
    titleTaskCreating: "",
    showDialogDeleteTask: false,
    indexTaskSelected: 0,
    showDialogTaskField: false
  }),
  actions:{
    addTask(){
        if(this.titleTaskCreating.length < 5) return;
        this.tasks.push({
            title: this.titleTaskCreating,
            done: false
        })
        this.titleTaskCreating = "";
        this.saveLocalData();
        alertStore.notifyAlertTaskCreated();
    },
    deleteTask(){
        if(this.indexTaskSelected == null) return;
        this.tasks.splice(this.indexTaskSelected, 1);
        this.toggleDelete(this.indexTaskSelected);
        this.saveLocalData();
        alertStore.notifyAlertTaskDeleted();
    },
    updateTask(){
        this.saveLocalData();
        this.toggleEdit(this.indexTaskSelected);
        alertStore.notifyAlertTaskUpdated();
    },
    toggleEdit(index: number | null){
        this.showDialogTaskField = !this.showDialogTaskField;
        if (index != null)
            this.indexTaskSelected = index;
    },
    toggleDelete(index: number | null){
        this.showDialogDeleteTask = !this.showDialogDeleteTask;
        if (index != null)
            this.indexTaskSelected = index;
    },
    saveLocalData(){
        localStorage.setItem('tasks', 
            JSON.stringify(this.tasks))
    },
    getTasks(){
        const items = localStorage.getItem('tasks')
        if(items)
            this.tasks = JSON.parse(items);
    },
    toggleDoneTask(index: number){
        this.tasks[index].done = !this.tasks[index].done;
        this.saveLocalData();
    }
  }
})
