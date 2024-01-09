<template>
    <v-row>
      <v-col v-for="(item, index) in items" :key="index">
        <v-card class="mx-auto" max-width="450" variant="tonal">
          <v-img :src="item.image" :lazy-src="item.image" height="200px" cover></v-img>
  
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
              "O projeto de controle integrado de contas foi uma iniciativa baseada em Java e JavaFX, com ênfase na gestão abrangente de contas. Utilizando a robustez do Java, desenvolvemos uma aplicação que permite o gerenciamento eficaz de informações financeiras de forma integrada. O uso do banco de dados SQLite oferece a escalabilidade necessária, enquanto a interface responsiva proporciona uma experiência de usuário otimizada em diferentes tamanhos de tela.",
            show: false,
          },
          {
            image: 'https://cdn.pixabay.com/photo/2023/07/26/09/26/industry-8150774_1280.jpg',
            title: 'Interface de Controle',
            subtitle: 'Sistema de Automação',
            content:
              "O sistema de automação para máquinas de ensaio de materiais foi uma solução criada com Java e JavaFX, visando simplificar, aprimorar e modernizar os processos de controle. Desenvolvemos uma interface intuitiva que permite aos usuários controlar e monitorar eficientemente máquinas de ensaio, seus parâmetros e acessar histórico de ensaios. A utilização do Java e JavaFX proporcionou um ambiente de desenvolvimento robusto e eficiente para garantir a precisão e segurança no manuseio de dados e operações de controle.",
            show: false,
          },
          {
            image: 'https://cdn.pixabay.com/photo/2016/11/29/06/17/computer-1867758_1280.jpg',
            title: 'Portfolio Fotográfico',
            subtitle: 'Website de Serviços',
            content:
              "O desenvolvimento do portfolio de trabalho fotográfico foi concebido com tecnologias modernas, utilizando Vue.js e Vuetify 3. Criamos uma plataforma web visualmente atraente e funcional para exibir trabalhos fotográficos de forma elegante. A combinação do Vue.js e Vuetify 3 permitiu a criação de uma interface interativa, responsiva e de alto desempenho, oferecendo uma experiência imersiva aos visitantes para explorar e apreciar o trabalho fotográfico apresentado.",
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
  