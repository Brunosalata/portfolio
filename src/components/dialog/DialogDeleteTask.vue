<template>
  <v-row justify="center">
    <v-dialog
      v-model="taskStore.showDialogDeleteTask"
      persistent
      width="auto"
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
          Are you sure you want to delete this task?
        </v-card-title>
        <v-card-text>This action can't be reverted.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="eleveted"
            @click="taskStore.toggleDelete()"
          >
            No
          </v-btn>
          <v-btn
            color="primary"
            variant="tonal"
            @click="taskStore.deleteTask()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup>
  import { useTaskStore } from '@/store/task';

  const taskStore = useTaskStore();

</script>
  