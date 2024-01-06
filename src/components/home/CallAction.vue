<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="500">
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <div>
                <h1 class="text-h4 font-weight-thin mb-4">
                    Precisa trocar <strong>ideiais</strong> <br>para desenvolver <strong>soluções digitais</strong>?
                </h1>
                <h4 class="subheading ">
                    Entre em contato e vamos falar de oportunidades!
                </h4>
            </div>
            <router-link to="/contact">
                <v-btn class="mt-10" variant="outlined" size="large">
                    Contato
                </v-btn>
            </router-link>
        </div>
    </v-parallax>
</template>