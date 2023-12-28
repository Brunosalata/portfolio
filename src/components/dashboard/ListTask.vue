<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>Tarefas</v-list-subheader>

            <v-list-item v-for="task, index in taskStore.tasks" :key="index" :value="index" @click="taskStore.toggleDoneTask(index)">
                <template v-slot:prepend="{  }">

                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <v-list-item-title>{{ task.title }}</v-list-item-title>

                <v-list-item-subtitle>
                    {{ task.description }}
                </v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="grey-lighten" variant="text" icon="mdi-dots-vertical"></v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="0" @click="taskStore.toggleEdit(index)">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>

                            <v-list-item value="1" @click="taskStore.toggleDelete(index)">
                                <v-list-item-title>Deletar</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-list-item>
        </v-list>

        <DialogTaskField :task="taskStore.tasks[taskStore.indexTaskSelected]" />

        <DialogDeleteTask />
    </div>
</template>

<script setup>
    import DialogTaskField from "@/components/dialog/DialogTaskField.vue";
    import DialogDeleteTask from "@/components/dialog/DialogDeleteTask.vue";
    import { useTaskStore } from '@/store/task';

    const taskStore = useTaskStore();

</script>