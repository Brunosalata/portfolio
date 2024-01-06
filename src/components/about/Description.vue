<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" class="pa-3 my-auto" height="400px" style="vertical-align: middle;">
        <div class="pa-5">
          <v-card variant="flat" style="border-radius: 10%;">
            <v-img cover height="auto"
              style="border-radius: 30%; object-fit: cover; object-position: top; filter:grayscale(10%); z-index: 990;"
              src="@/assets/img/bruno.jpeg"></v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="pa-3 my-auto" style="vertical-align: middle;">
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
          <v-card-text style="text-align: right;">BSL</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>