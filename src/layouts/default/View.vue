<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-app class="app">
    <v-card style="overflow: initial; z-index: initial;">
    <AppBar />
  </v-card>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-main>
    
  </v-app>
  <Footer />
</template>

<script setup>
import Footer from '@/components/global/Footer.vue';
import AppBar from '@/components/global/AppBar.vue';

</script>

