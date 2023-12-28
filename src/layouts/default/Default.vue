<template>
  <v-app>
    <Alert v-if="alertStore.showAlert"/>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultView from './View.vue';
  import Alert from '@/components/alert/Alert.vue';
  import { useAlertStore } from '@/store/alert';

  const alertStore = useAlertStore();
</script>
