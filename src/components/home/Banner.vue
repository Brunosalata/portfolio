<template>
    <v-parallax
        src="https://img.freepik.com/free-photo/3d-modern-background-with-low-poly-plexus-design_1048-16835.jpg?w=996&t=st=1704311841~exp=1704312441~hmac=7ccc1536e7e8010762cf8093cd85254102b448dddf1774bc8b97bc4d9a14b1a4"
        cover 
        height="100vh"
        class="parallax-container"
        >
        <div class="overlay d-flex flex-column justify-center align-center text-white">
            <h1 class="text-h2 font-weight-thin mb-4">
                <v-carousel cycle hide-delimiters :show-arrows="false" height="65" fade-transition>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" transition="scale-transition">
                        {{ slide }}
                    </v-carousel-item>
                </v-carousel>
            </h1>
            <h4 class="subheading text-h4">
                em Soluções Tecnológicas
            </h4>
            <v-btn class="mt-7" variant="outlined">Avançar</v-btn>
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