<template>
    <v-row class="fill-height d-flex justify-center align-center">
      <v-col v-for="n in 3" :key="n" cols="4">
        <v-carousel v-model="models[n - 1]" cycle hide-delimiters :show-arrows="false"
                    :interval="2000" height="150">
          <v-carousel-item v-for="(tool, i) in tools" :key="i" max-height="auto"
                           class="d-flex justify-center align-center">
            <div class="center-image">
              <v-img :src="i === models[n - 1] % tools.length ? tool.initialImage : tool.src"
                     @click="redirectTo(tool.href)"  style="max-height: 70%;"
              ></v-img>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </template>

<script>
export default {
    data() {
        return {
            tools: [
                {
                    initialImage: 'https://www.cdnlogo.com/logos/j/2/java.svg',
                    src: 'https://www.cdnlogo.com/logos/v/92/vue-js.svg',
                    href: 'https://www.java.com/pt-BR/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/v/23/vitejs.svg',
                    src: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg',
                    href: 'https://vitejs.dev/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/s/91/spring.svg',
                    src: 'https://www.cdnlogo.com/logos/s/41/sqlite.svg',
                    href: 'https://spring.io/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/v/92/vue-js.svg',
                    src: 'https://www.cdnlogo.com/logos/j/2/java.svg',
                    href: 'https://vuejs.org/'
                },
                {
                    initialImage: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg',
                    src: 'https://www.cdnlogo.com/logos/v/23/vitejs.svg',
                    href: 'https://vuetifyjs.com/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/s/41/sqlite.svg',
                    src: 'https://www.cdnlogo.com/logos/s/91/spring.svg',
                    href: 'https://www.sqlite.org/index.html'
                },
            ],
            models: [0, 1, 2, 3, 4] // Um modelo diferente para cada coluna
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
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Adicione essa propriedade para garantir a centralização */
  height: 100%;
}
</style>