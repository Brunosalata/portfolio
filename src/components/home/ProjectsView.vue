<template>
  <div height="auto">
    <div class="mt-4">
      <div class="d-flex flex-column justify-center align-center">
        <h1 class="mb-5">Projetos</h1>
      </div>
    </div>
    <v-card elevation="0">
      <v-tabs v-model="tab" color="primary" align-tabs="center">
        <v-tab :value="0">All</v-tab>
        <v-tab :value="1">Softwares</v-tab>
        <v-tab :value="2">Desenvolvimento Web</v-tab>
        <v-tab :value="3">Branding</v-tab>
      </v-tabs>
      <div class="pa-5">
        <v-divider class="mb-5"></v-divider>
        <v-window v-model="tab">
          <v-window-item v-for="n in 4" :key="n" :value="n - 1">
            <v-container fluid>
              <v-row class="flex">
                <v-col v-for="project in getProjectsByCategory(n - 1)" :key="project.id" cols="12" sm="6" md="4" lg="3">
                  <v-card height="auto" elevation="0">
                    <v-img :src="project.img" :lazy-src="`https://picsum.photos/10/6?image=${project.src}`" cover></v-img>
                    <v-card-title>{{ project.title }}</v-card-title>
                    <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
                    <v-card-text height="200" style="overflow-y: auto;">{{ project.text }}</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </div>
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
import landingPageWeb from '@/assets/img/landingPageWeb.png';

export default {
  data: () => ({
    tab: 0,
    projects: [
      // System Projects
      {
        id: 1,
        category: 1,
        img: GymProj,
        title: "Academias",
        subtitle: "Sistema de Gestão",
        text: "Software de gestão completo para controle de matrículas, treinos e finanças, facilitando a administração do seu negócio fitness."
      },
      {
        id: 2,
        category: 1,
        img: CoffeeShopProj,
        title: "Cafeterias",
        subtitle: "Sistema de Gestão",
        text: "Gerencie pedidos, estoque e vendas com facilidade. Controle tudo em um único sistema para simplificar sua cafeteria."
      },
      {
        id: 3,
        category: 1,
        img: HospitalProj,
        title: "Clínicas",
        subtitle: "Sistema de Gestão",
        text: "Simplifique agendamentos, prontuários e faturamentos. Otimize a gestão para proporcionar melhor atendimento."
      },
      {
        id: 4,
        category: 1,
        img: FinanceProj,
        title: "Finanças",
        subtitle: "Sistema de Financeiro",
        text: "Ferramenta intuitiva para monitorar gastos, receitas e fluxo de caixa, garantindo uma gestão financeira eficiente."
      },
      {
        id: 5,
        category: 1,
        img: UniversityProj,
        title: "Escolas",
        subtitle: "Sistema de Gestão",
        text: "Administre alunos, notas, horários e pagamentos de forma eficaz. Uma solução completa para gestão educacional."
      },
      {
        id: 6,
        category: 1,
        img: SelfEmployedProj,
        title: "Autônomos",
        subtitle: "Sistema de Gestão",
        text: "Controle seus projetos, clientes e finanças de forma prática. Organize-se e cresça como profissional independente."
      },
      // Web Projects
      {
        id: 7,
        category: 2,
        img: singlePageWeb,
        title: "Web Design Simplificado",
        subtitle: "Presença online intuitiva e dinâmica.",
        text: "Desenvolvimento ágil de websites dinâmicos, informativos e interativos, oferecendo uma experiência fluida para seus visitantes em uma única página."
      },
      {
        id: 8,
        category: 2,
        img: multiPageWeb,
        title: "Websites Versáteis",
        subtitle: "Presença completa e estruturada online.",
        text: "Criação de websites robustos e completos, com navegação clara e conteúdo estruturado em várias páginas para atender às necessidades específicas do seu negócio."
      },
      {
        id: 9,
        category: 2,
        img: landingPageWeb,
        title: "Landing Pages para Conversões",
        subtitle: "Página otimizada para destacar suas ofertas.",
        text: "Página direcionada para conversão, projetada para destacar uma oferta ou serviço, maximizando a conversão de visitantes em leads ou clientes."
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

<style scoped>
.v-img {
  border-radius: 1%;
}
</style>