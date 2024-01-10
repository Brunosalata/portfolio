<template>
  <div height="auto">
    <div class="mt-4">
      <div class="d-flex flex-column justify-center align-center">
        <h1 class="mb-5">Projetos</h1>
      </div>
    </div>
    <v-card elevation="0">
      <v-tabs v-model="tab" color="primary" align-tabs="center">
        <v-tab :value="0">Todos</v-tab>
        <v-tab :value="1">Softwares</v-tab>
        <v-tab :value="2">Desenvolvimento Web</v-tab>
        <v-tab :value="3">Branding</v-tab>
      </v-tabs>
      <div class="projects-div">
        <div class="pa-5" style="max-width: 1200px;">
          <v-divider class="mb-5"></v-divider>
          <v-window v-model="tab">
            <v-window-item v-for="n in 4" :key="n" :value="n - 1">
              <v-container fluid>
                <v-row class="flex">
                  <v-col v-for="project in getProjectsByCategory(n - 1)" :key="project.id" cols="12" sm="6" md="4">
                    <v-card height="auto" variant="text">
                      <v-img :src="project.img" :lazy-src="project.img" cover></v-img>
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
import multiPageWeb from '@/assets/img/multiPageWeb.jpg';
import landingPageWeb from '@/assets/img/landingPageWeb.png';
import AutomationProj from '@/assets/img/automation-project.jpg';
import BrandingProj from '@/assets/img/branding-project.jpg';

export default {
  data: () => ({
    tab: 0,
    projects: [
      // System Projects
      {
        id: 1,
        category: 1,
        img: SelfEmployedProj,
        title: "Autônomos",
        subtitle: "Sistema de Gestão",
        text: "Controle seus projetos, clientes e finanças de forma prática. Organize-se e cresça como profissional independente."
      },
      {
        id: 2,
        category: 1,
        img: FinanceProj,
        title: "Finanças",
        subtitle: "Sistema de Financeiro",
        text: "Ferramenta de gestão financeira intuitiva para monitorar gastos, receitas e fluxo de caixa. A solução foi adaptada para garantir uma gestão estratégica e eficiente para o negócio."
      },
      {
        id: 3,
        category: 1,
        img: AutomationProj,
        title: "Automação",
        subtitle: "Interface de Controle",
        text: "Sistema de automação com interface moderna, intuitiva e responsiva para o controle de equipamentos. A propósta foi de simplificar o gerenciamento e monitoramento de processos, bem como tornar a rotina operacional mais eficiente."
      },
      {
        id: 4,
        category: 1,
        img: UniversityProj,
        title: "Escolas",
        subtitle: "Sistema de Gestão",
        text: "Sistema abrangente para a gestão educacional, cobrindo desde alunos e notas até horários e pagamentos. A solução foi elaborada para simplificar processos e aprimorar a experiência educacional oferecida pela sua instituição."
      },
      {
        id: 5,
        category: 1,
        img: HospitalProj,
        title: "Clínicas",
        subtitle: "Sistema de Gestão",
        text: "Sistema de gestão personalizado para clínicas, tornando mais simples os agendamentos, prontuários e faturamentos. O objetivo foi transformar a gestão do espaço médico, permitindo atendimentos mais ágiis e eficazes."
      },
      {
        id: 6,
        category: 1,
        img: CoffeeShopProj,
        title: "Cafeterias",
        subtitle: "Sistema de Gestão",
        text: "Sistema de gestão específico para cafeterias, permitindo o gerenciamento eficiente de pedidos, estoque e vendas. A solução foi pensada para simplificar a operação do estabelecimento, agregando praticidade e organização."
      },
      {
        id: 7,
        category: 1,
        img: GymProj,
        title: "Academias",
        subtitle: "Sistema de Gestão",
        text: "Sistema de gestão sob medida para academia, visando facilitar o controle de matrículas, treinos e finanças. O foco foi proporcionar uma solução personalizada para otimizar a administração do negócio fitness."
      },
      // Web Projects
      {
        id: 101,
        category: 2,
        img: singlePageWeb,
        title: "Web Design Simplificado",
        subtitle: "Intuitiva e dinâmica",
        text: "Website dinâmico e interativo, oferecendo uma experiência de navegação intuitiva e fluida para os visitantes. Solução desenvolvida sob medida para destacar a presença online com um design moderno e ágil."
      },
      {
        id: 102,
        category: 2,
        img: multiPageWeb,
        title: "Websites Versáteis",
        subtitle: "Complexa e Estruturada",
        text: "Website completo e estruturado, adaptado às necessidades específicas do negócio. A proposta foi entregar uma solução versátil, com navegação clara e conteúdo robusto para fortalecer a presença digital."
      },
      {
        id: 103,
        category: 2,
        img: landingPageWeb,
        title: "Landing Pages",
        subtitle: "Otimizada para Conversão",
        text: "Página otimizada para ações de Marketing, com foco em destacar ofertas ou serviços para atrair leads qualificados. Uma estratégia eficaz para impulsionar os resultados online com uma página direcionada para converter visitantes em clientes."
      },
      // Branding Projects
      {
        id: 201,
        category: 3,
        img: BrandingProj,
        title: "Branding Personalizado",
        subtitle: "Destaque da Identidade",
        text: "O branding é a representação visual e emocional da sua marca. Desenvolvemos estratégias visuais e narrativas para criar uma identidade única que se destaque no mercado. Desde o logotipo e paleta de cores até a voz e mensagem da marca, criamos uma conexão genuína com seu público-alvo, destacando seus valores e diferenciando sua marca da concorrência."
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
.projects-div {
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-img {
  border-radius: 1%;
}
</style>
