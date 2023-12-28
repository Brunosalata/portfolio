<template>
  <v-row justify="center">
    <v-dialog
      v-model="taskStore.showDialogTaskField"
      persistent
      min-width="300px"
    >
      <!-- <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          <v-text-field 
          v-model="props.task.title" 
          label="Title"
          ></v-text-field>
          <v-text-field 
          v-model="props.task.description"
          label="Description"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="tonal"
            @click="taskStore.updateTask()"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '@/store/task';

const taskStore = useTaskStore();

const props = defineProps({
  task: Object
})

</script>
  