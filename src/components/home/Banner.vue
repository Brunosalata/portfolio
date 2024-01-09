<template>
    <v-parallax src="@/assets/img/banner-bg.jpg" lazy-src="@/assets/img/banner-bg.jpg" cover height="100dvh" class="parallax-container">
        <div class="px-5 overlay d-flex flex-column justify-center align-center text-white">
            <h1 class="text-h2 font-weight-thin mb-4">
                <v-carousel cycle hide-delimiters :show-arrows="false" height="65" fade-transition interval="2000">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" transition="scale-transition">
                        {{ slide }}
                    </v-carousel-item>
                </v-carousel>
            </h1>
            <h4 class="subheading text-h4">
                em Soluções Tecnológicas
            </h4>
            <router-link to="/projects">
                <v-btn color="primary" class="mt-7" variant="outlined">Projetos</v-btn>
            </router-link>
        </div>
    </v-parallax>
</template>

<script>

export default {
    data() {
        return {
            slides: [
                'Versatilidade',
                'Desempenho',
                'Estratégia',
                'Visão',
            ],
        }
    },
}
</script>

<style scoped>
.parallax-container {
    position: relative;
}

.overlay {
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
}
</style>