<template>
    <div class="d-flex fill-height align-center justify-center">
        <v-slide-group v-model="model" show-arrows>
            <v-slide-group-item v-for="brand in brands" :key="brand">
                <v-card color="transparent" elevation="0" class="ma-5" height="100" width="150" @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-img :src="brand.src" @click="redirectTo(brand.href)" class="mt-3" max-height="50px"></v-img>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div>
</template>

<script>
import biopdiClient from '@/assets/img/biopdiClient.png';
import labicobacClient from '@/assets/img/labicobacClient.png';

export default {
    data() {
        return {
            brands: [
                {
                    src: biopdiClient,
                    href: 'https://biopdi.com.br'
                },
                {
                    src: labicobacClient,
                    href: 'https://labicobac.vercel.app/'
                },
            ],
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