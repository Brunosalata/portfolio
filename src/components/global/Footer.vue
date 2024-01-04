<template>
    <v-divider></v-divider>
    <v-footer class="bg-transparent">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-1"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12" style="font-weight: 50;">
          © {{ new Date().getFullYear() }} — <strong>Portfolio</strong> Made By <strong>Fuzay Technology</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script>
export default {
  data: () => ({
    links: [
      'Home',
      'About',
      'Projects',
      'Contact',
    ],
  }),
}
</script>