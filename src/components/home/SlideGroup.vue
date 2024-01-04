<template>
    <v-sheet
      class="mx-auto bg-transparent"
      width="100%"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-card
            :color="isSelected ? 'primary' : 'grey-lighten-1'"
            class="ma-4"
            height="200"
            width="150"
            @click="toggle"
          >
          <v-img class="align-end text-white" cover
                    src="https://img.freepik.com/fotos-premium/pulverizacao-de-pesticidas-com-trator-ou-campo-agricola_54391-7282.jpg">
                    <v-card-title>Agro Monitoring</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-3">Frota Agrícola</v-card-subtitle>

                <v-card-text>
                    <div>Monitoramento de frota agrícola</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, porro?</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" color="primary">Ver mais</v-btn>
                    <!-- <v-btn prepend-icon="mdi-home" variant="tonal" color="success">Success</v-btn> //botaotexto + icon -->
                    <!-- <v-btn icon="mdi-home" variant="tonal" color="primary"></v-btn> //botao de icon-->
                </v-card-actions>
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  size="48"
                  icon="mdi-close-circle-outline"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </template>

<script>
export default {
  data: () => ({
    model: null,
  }),
}
</script>