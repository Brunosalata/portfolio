<template>
  <v-row class="fill-height d-flex justify-center align-center">
    <v-col v-for="(tool, i) in tools" :class="['ma-0 mr-5 ml-5 pa-0', selectedClass]" :key="i" cols="3">
      <v-img :src="tool.src" @click="redirectTo(tool.href)"
        class="mt-3" max-height="50px"></v-img>
      <div style="text-align: center;">
      </div>
    </v-col>
  </v-row>
</template>

<script>
import biopdiClient from '@/assets/img/biopdiClient.png';
import labicobacClient from '@/assets/img/labicobacClient.png';

export default {
    data() {
        return {
            tools: [
                {
                    src: biopdiClient,
                    href: 'https://biopdi.com.br'
                },
                {
                    src: labicobacClient,
                    href: 'https://labicobac.vercel.app/'
                },
            ],
            models: [0, 1] // Um modelo diferente para cada coluna
        };
    },
    methods: {
        redirectTo(link) {
            window.open(link, '_blank');
        }
    }
};
</script>

<style scoped>
.v-img {
    cursor: pointer;
    height: 100%;
    width: 100%;
    border-radius: 0%;
}
</style>