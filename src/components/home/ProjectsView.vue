<template>
    <v-card>
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="0">All</v-tab>
        <v-tab :value="1">Softwares</v-tab>
        <v-tab :value="2">Desenvolvimento Web</v-tab>
        <v-tab :value="3">Branding</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="n in 4" :key="n" :value="n - 1">
          <v-container fluid>
            <v-row class="flex">
              <v-col
                v-for="project in getProjectsByCategory(n - 1)"
                :key="project.id"
                cols="12" sm="6" md="4" lg="3"
              >
              <v-card height="500">  
                <v-img
                    :src="project.img"
                    :lazy-src="`https://picsum.photos/10/6?image=${project.src}`"
                    aspect-ratio="1"
                    cover
                  ></v-img>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
                  <v-card-text>{{ project.text }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-window-item>
      </v-window>
    </v-card>
  </template>
  
  <script>
  import CoffeeShopProj from '@/assets/img/coffeeShop-project.jpg';
  import GymProj from '@/assets/img/gym-project.jpg';
  import HospitalProj from '@/assets/img/hospital-project.jpg';
  import FinanceProj from '@/assets/img/finance-project.jpg';
  import UniversityProj from '@/assets/img/university-project.jpg';
  import SelfEmployedProj from '@/assets/img/selfEmployed-project.jpg';
  import singlePageWeb from '@/assets/img/singlePageWeb.jpg';
  import multiPageWeb from '@/assets/img/multiPageWeb.png';
  
  export default {
    data: () => ({
      tab: 0,
      projects: [
        // System Projects
        {
          id: 1,
          category: 1,
          img: GymProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        {
          id: 2,
          category: 1,
          img: CoffeeShopProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        {
          id: 3,
          category: 1,
          img: HospitalProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        {
          id: 4,
          category: 1,
          img: FinanceProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        {
          id: 5,
          category: 1,
          img: UniversityProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        {
          id: 6,
          category: 1,
          img: SelfEmployedProj,
          title: "Title",
          subtitle: "Subtitle",
          text: "Text"
        },
        // Web Projects
        {
          id: 7,
          category: 2,
          img: singlePageWeb,
          title: "Single Page Website",
          subtitle: "Subtitle",
          text: "Em um site de uma página, todas as informações são apresentadas em uma única página, de modo que os links de navegação servem como âncoras para diferentes seções da página. Esse layout significa que sites de uma página geralmente têm rolagem suave e efeitos de paralaxe, o que lhes dá uma sensação envolvente."
        },
        {
          id: 8,
          category: 2,
          img: multiPageWeb,
          title: "Multi Page Website",
          subtitle: "Subtitle",
          text: "Um site de várias páginas contém várias páginas e subpáginas em um menu. Ao contrário do site de página única, a única maneira de navegar e visualizar páginas em design de várias páginas é clicar nos links do menu, seja ele lateral ou no topo da página."
        },
      ],
    }),
    methods: {
      getProjectsByCategory(category) {
        if (category === 0) {
          return this.projects;
        } else {
          return this.projects.filter(project => project.category === category);
        }
      }
    }
  };
  </script>