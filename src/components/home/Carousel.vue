<template>
  <v-carousel
    cycle
    width="100%"
    height="500"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      class="align-end"
    >

      <v-card 
      variant="tonal" 
      elevation="2"
      position="">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-text>{{ item.text }}</v-card-text>
      </v-card>

    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            title: 'Titulo 1',
            text: 'Texto 1'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            title: 'Titulo 2',
            text: 'Texto 2'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: 'Titulo 3',
            text: 'Texto 3'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            title: 'Titulo 4',
            text: 'Texto 4'
          },
        ],
      }
    },
  }
</script>