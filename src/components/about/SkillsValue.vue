<template>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.title" cols="12">
        <v-row>
          <v-col cols="11">
            <h2>{{ skill.title }}</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="1">
            <h2>{{ skill.value }}</h2>
          </v-col>
        </v-row>
        <v-progress-linear :color="skill.color" :model-value="skill.value" :height="12"></v-progress-linear>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data: () => ({
      skills: [
        {
          title: 'Java e JavaFX',
          color: 'primary',
          value: 70
        },
        {
          title: 'Aplicação Web com Vue e Vuetify',
          color: 'primary',
          value: 60
        },
        {
          title: 'Marketing Digital',
          color: 'primary',
          value: 75
        },
        {
          title: 'Foco em Resultados',
          color: 'primary',
          value: 80
        },
        {
          title: 'Engajamento e Empatia',
          color: 'primary',
          value: 90
        },
      ],
    }),
  };
  </script>