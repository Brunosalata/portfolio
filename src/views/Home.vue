<template>
  <div>
    <Banner />
  </div>
  <div class="pa-5 pt-0">
    <div class="pt-15 pb-15">
      <div class="d-flex flex-column fill-height justify-center align-center text-white mt-n5">
      <h1 class="text-h4 font-weight-thin mb-10">
        Quem Aprova
      </h1>
    </div>
      <Brands />
    </div>
    <v-divider></v-divider>
    <div class="pt-10">
      <Description />
    </div>
  </div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="200">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Atributos
      </h1>
      <h4 class="subheading">
        Porque se desenvolver com a gente
      </h4>
    </div>
  </v-parallax>
  <div class="bg-grey-darken-4 d-flex justify-center align-center">
    <div style="padding-top: 80px; width: 90%;">
      <div class="pt-0 pb-15">
        <Skills />
      </div>
      <v-divider></v-divider>
      
    </div>
  </div>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="200">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Tecnologias
      </h1>
      <h4 class="subheading">
        As mais atuais e poderosas ferrametnas do mercado
      </h4>
    </div>
  </v-parallax>
  <div class="bg-white">
    <ToolsLine />
  </div>

  <div class="bg-grey-darken-4 d-flex justify-center align-center">
    <div style="padding-bottom: 80px; width: 90%;">
      <div class="pt-15 pb-15">
        <ProjectsView />
      </div>
    </div>
  </div>
  <SlideGroup />
</template>

<script lang="ts" setup>
import Banner from '@/components/home/Banner.vue';
import Brands from '@/components/home/Brands.vue';
import SlideGroup from '@/components/home/SlideGroup.vue';
import Description from '@/components/home/Description.vue';
import Skills from '@/components/home/Skills.vue';
import ToolsLine from '@/components/home/ToolsLine.vue';
import ProjectsView from '@/components/home/ProjectsView.vue';
</script>