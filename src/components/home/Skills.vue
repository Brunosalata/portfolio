<template>
    <v-card class="mx-auto mt-20" max-width="90%">

        <v-container fluid>
            <v-row dense>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex" sm="6" md="6" lg="6" xl="6" xxl="6">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card id="v-card-skill" :elevation="isHovering ? 12 : 0" :class="{ 'on-hover': isHovering }"
                            v-bind="props">
                            <v-img :src="card.src" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover>
                                <div style="height: 100%;">
                                    <v-card-title style="white-space: pre-wrap" class="text-white">{{ card.title
                                    }}</v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-card-subtitle style="white-space: pre-wrap" class="text-white">{{ card.subtitle
                                    }}</v-card-subtitle>
                                </div>
                                <div class="mt-n12">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn size="small" color="surface-variant" variant="text" text="Read More"></v-btn>
                                    </v-card-actions>
                                </div>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        cards: [
            {
                title: 'Profissionalismo e Dedicação',
                subtitle: 'Profissionalismo e Dedicação',
                src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                flex: 12
            },
            {
                title: 'Design Personalizado',
                subtitle: 'Design Personalizado',
                src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                flex: 12
            },
            {
                title: 'Foco em Resolução',
                subtitle: 'Foco em Resolução',
                src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                flex: 12
            },
            {
                title: 'Suporte Continuado',
                subtitle: 'Suporte Continuado',
                src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                flex: 12
            },
        ],
        transparent: 'rgba(255, 255, 255, 0)',
    }),
}
</script>

<style scoped>
.v-card-skill {
    transition: transform .4s ease-in-out;
}

.v-card .on-hover {
    transform: scale(1.005);
}
</style>