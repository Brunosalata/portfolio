<template>
  <v-container style="max-width: 1000px;">
    <v-row class="align-center" no-gutters>
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <div class="image-container">
          <v-img class="image" src="@/assets/img/bruno.jpeg" lazy-src="@/assets/img/bruno.jpeg"></v-img>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pt-3 bg-transparent" elevation="0">
          <v-card-title style="white-space: pre-wrap" class="text-h4 text-yellow-darken-1">Bruno Salata
            Lima</v-card-title>
          <v-card-subtitle style="white-space: pre-wrap" class="text-h7">Desenvolvedor Full Stack - Desktop e
            Web</v-card-subtitle>
          <v-card-text class="text-justify">Olá, sou Bruno Salata Lima, um entusiasta e desenvolvedor Full Stack
            apaixonado
            pelo mundo da tecnologia. Minha jornada neste campo me levou a dominar uma ampla gama de
            ferramentas e tecnologias. Do Java e JavaFX para aplicativos desktop, ao Vue, Vuetify,
            Pinia e Spring Framework para a criação de experiências web cativantes, minha jornada tem
            sido repleta de aprendizado e aperfeiçoamento constante.</v-card-text>
          <v-card-text class="text-justify">Minha paixão pela construção
            de soluções digitais vai além do código. Busco entender profundamente as necessidades dos
            usuários, explorando o campo do marketing, UX e UI para criar interfaces que não apenas
            funcionem bem, mas também encantem.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>

<style scoped>
.image-container {
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.image {
  max-width: 100%;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 10%;
  object-fit: contain; /* Mantém a proporção, ajustando ao espaço disponível */
}
</style>