<template>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="item.image" height="200px" cover></v-img>
  
          <v-card-title>
            {{ item.title }}
          </v-card-title>
  
          <v-card-subtitle>
            {{ item.subtitle }}
          </v-card-subtitle>
  
          <v-card-actions>
            <v-btn color="primary lighten-2" variant="text">
              Detalhes
            </v-btn>
  
            <v-spacer></v-spacer>
  
            <v-btn :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleShow(index)"></v-btn>
          </v-card-actions>
  
          <v-expand-transition>
            <div v-show="item.show">
              <v-divider></v-divider>
              <v-card-text>
                {{ item.content }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            image: 'https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg',
            title: 'Controle Integrado de Contas',
            subtitle: 'Gestão Financeira',
            content:
              "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
            show: false,
          },
          {
            image: 'https://cdn.pixabay.com/photo/2023/07/26/09/26/industry-8150774_1280.jpg',
            title: 'Interface de Controle',
            subtitle: 'Sistema de Automação',
            content:
              "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
            show: false,
          },
          {
            image: 'https://cdn.pixabay.com/photo/2016/11/29/06/17/computer-1867758_1280.jpg',
            title: 'Portfolio Fotográfico',
            subtitle: 'Website de Serviços',
            content:
              "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
            show: false,
          },
          // Adicione outros itens aqui com os dados necessários para cada card
        ],
      };
    },
    methods: {
      toggleShow(index) {
        this.items[index].show = !this.items[index].show;
      },
    },
  };
  </script>
  