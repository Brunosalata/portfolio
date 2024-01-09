<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-app>
    <div>
      <AppBar />
    </div>

    <v-main>
      <v-container fluid class="pa-0 mt-n16">
        <router-view />
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script setup>
import AppBar from '@/components/global/AppBar.vue';
import Footer from '@/components/global/Footer.vue';

</script>

