<template>
  <div>
    <Banner />
  </div>

  <div class="parallax-div mx-0">
    <div class="mt-15 parallax-div">
      <h1 class="text-h3 font-weight-thin mb-4">
        Meus Objetivos
      </h1>
      <h4 class="mb-15 subheading">
        Conheça o Desenvolvedor por Trás dos Projetos Digitais
      </h4>
    </div>
  </div>
  <v-parallax class="px-10" src="@/assets/img/banner2-bg.jpg" cover style="max-height: 600px;">
    <AboutUs />
  </v-parallax>

  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="200">
    <div class="parallax-div">
      <h1 class="text-h4 font-weight-thin mb-4">
        Meus Serviços
      </h1>
      <h4 class="subheading">
        Porque se desenvolver comigo
      </h4>
    </div>
  </v-parallax>
  <div class="d-flex justify-center align-center">
    <div style="padding-top: 80px; width: 90%;">
      <div class="pt-0 pb-15">
        <Skills />
      </div>
      <v-divider></v-divider>

    </div>
  </div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="200">
    <div class="parallax-div">
      <h1 class="text-h4 font-weight-thin mb-4">
        Tecnologias
      </h1>
      <h4 class="subheading" style="text-align: center;">
        As mais atuais e poderosas ferramentas do mercado
      </h4>
    </div>
  </v-parallax>
  <div class="pl-5 pr-5 bg-white">
    <ToolsLine />
  </div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="200">
    <div class="parallax-div">
      <h1 class="text-h4 font-weight-thin mb-4">
        Projetos
      </h1>
      <h4 class="subheading" style="text-align: center;">
        Personalizados e com foco no usuário
      </h4>
    </div>
  </v-parallax>

  <div class="d-flex justify-center align-center">
    <div style="padding-top: 80px; width: 90%;">
      <div class="pt-0 pb-0">
        <RecentProjects />
      </div>
      <div class="pt-15">
        <v-divider></v-divider>
      </div>
      <div class="pt-0 pb-5">
        <Brands />
      </div>
    </div>
  </div>
  <CallAction />
</template>

<script lang="ts" setup>
import Banner from '@/components/home/Banner.vue';
import Brands from '@/components/home/Brands.vue';
import Skills from '@/components/home/Skills.vue';
import ToolsLine from '@/components/home/ToolsLine.vue';
import RecentProjects from '@/components/home/RecentProjects.vue';
import CallAction from '@/components/home/CallAction.vue';
import AboutUs from '@/components/home/AboutUs.vue';
</script>

<style scoped>
.parallax-div {
  /* Margin horizontal de 10 unidades */
  margin-left: 10px;
  margin-right: 10px;
  /* Exibição como flexbox com direção de coluna */
  display: flex;
  flex-direction: column;
  /* Altura e largura preenchendo o espaço disponível */
  height: 100%;
  width: 100%;
  /* Alinhamento vertical e horizontal no centro */
  justify-content: center;
  align-items: center;

}
</style>