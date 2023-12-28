<template>
  <h1 class="mb-2 text-md-h3">Be there from anywhere</h1>
  <div><Carousel /></div>
  <div class="pa-5 pt-0">
    <div class="pt-15 pb-15"><Brands /></div>
    <v-divider></v-divider>
    <div class="pt-10"><Description /></div>
  </div>
  <div class="bg-grey-darken-4 d-flex justify-center align-center">
    <div style="padding-top: 80px; padding-bottom: 80px; width: 90%;">
      <div class="text-yellow-darken-1" flex style="padding-left: 2%;">
        <h1>Atributos</h1>
      </div>
      <div class="pt-10 pb-15"><Skills /></div>
      <v-divider></v-divider>
    </div>
  </div>
  <SlideGroup />
</template>

<script lang="ts" setup>
  import Carousel from '@/components/home/Carousel.vue';
  import Brands from '@/components/home/Brands.vue';
  import SlideGroup from '@/components/home/SlideGroup.vue';
  import Description from '@/components/home/Description.vue';
  import Skills from '@/components/home/Skills.vue';
</script>