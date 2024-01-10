<template>
  <div class="parallax-div">
    <v-card class="ml-0 mr-5 my-5" variant="text" style="max-width: 1200px;">
    <v-row class="d-flex justify-center align-center" no-gutters="">
        <v-col class="parallax-div d-block" cols="12" md="6" style="z-index: 100;">
          <v-parallax src="@/assets/img/banner2-bg.jpg" class="d-flex justify-center align-center" style="border-radius: 3%;" cover>
            <v-card class="ma-10 pa-5">
              <div class="img-div"><v-img src="@/assets/img/bruno-dev.jpeg" class="v-img"
                  style="border-radius: 50%; z-index: 101; max-height: 200px; max-width: 200px;"></v-img>
              </div>
              <div class="parallax-div">
                <v-card-title>Bruno Salata Lima</v-card-title>
                <v-divider class="mb-2" width="100"></v-divider>
                <v-card-subtitle>Desenvolvedor Full Stack</v-card-subtitle>
                <v-spacer></v-spacer>
                <v-card-actions class="pa-3">
                  <v-spacer></v-spacer>
                  <v-btn v-for="social in socials" :key="social.icon" class="mx-2" variant="outlined" size="45"
                    :color="social.color" :icon="social.icon" target="_blank" :href="social.link"></v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </div>
            </v-card>
          </v-parallax>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-10 bg-transparent" variant="text" elevation="0">
            <div class="parallax-div">
              <v-card-title class="text-h5">SEJAM BEM-VINDOS!</v-card-title>
              <v-divider class="mb-2" width="100"></v-divider>
              <p class="text-caption text-center">
                Meu percurso na tecnologia é marcado por uma busca contínua de aprendizado e
                evolução. Com dedicação às linguagens como Java, Vue.js e Vuetify,
                tenho como objetivo me apeifeiçoar a cada dia para a criação de sistemas
                e aplicações web que deverão evoluir junto comigo. Estou empenhado em explorar
                novos horizontes, aprendendo constantemente e aplicando novos conhecimentos em cada
                novo projeto. Essa evolução reflete o nível de desafio ao qual sou submetido,
                o que me motiva a entregar aplicações cada vez mais sólidas e alinhadas às
                expectativas dos clientes.<br /><br />Podemos explorar novas
                possibilidades e construir algo incrível, se me for dada essa chance.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: 'mdi-github',
          color: 'primary',
          link: 'https://github.com/Brunosalata'
        },
        {
          icon: 'mdi-linkedin',
          color: 'primary',
          link: 'https://www.linkedin.com/in/brunosalatalima/'
        },
      ],
    };
  },
}
</script>

<style scoped>
.img-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.parallax-div {
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