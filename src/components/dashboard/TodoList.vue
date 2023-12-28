<template>
    <v-text-field 
    clearable 
    label="Add Task" 
    :rules="rules"
    v-model="taskStore.titleTaskCreating" 
    @keyup.enter="taskStore.addTask"
    ></v-text-field>

    <ListTask />
</template>

<script setup>
    import { onMounted } from 'vue';
    import ListTask from '@/components/dashboard/ListTask.vue';
    import { useTaskStore } from '@/store/task';

    const taskStore = useTaskStore();

    const rules = [
        value => {
            if(!value || value.length >=5)
                return true;
            return 'You must enter a Task title with more than 5 caracters.';
        },
    ];

    onMounted(()=>{
        taskStore.getTasks();
    })
</script>