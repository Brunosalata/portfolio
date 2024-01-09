<template>
    <v-divider></v-divider>
    <v-footer class="mb-1 bg-transparent">
      <v-row justify="center" no-gutters>
        <v-btn
        v-for="(item, i) in items" 
        :key="i" 
        :to="item.to"
          color="white"
          variant="plain"
          class="mx-1" style="font-weight: 300;"
          rounded="xl"
        >
          {{ item.text }}
        </v-btn>
        <v-col class="text-center" cols="12" style="font-weight: 50;">
          <span class="text-caption font-weight-thin">© {{ new Date().getFullYear() }} — <strong>Portfolio</strong> Made By <strong>Bruno Salata</strong></span>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script setup>

const items = [
  { text: 'Home', to: "/" },
  { text: 'About', to: "/about" },
  { text: 'Projects', to: "/projects" },
  { text: 'Contact',  to: "/contact" },
];

</script>

