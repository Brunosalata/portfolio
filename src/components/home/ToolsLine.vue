<template>
    <v-row class="fill-height d-flex justify-center align-center">
        <v-col v-for="n in 5" :key="n" cols="2">

            <v-carousel v-model="models[n - 1]" cycle hide-delimiters :show-arrows="false" v-slot="{ selectedClass }"
                :interval="2000" height="150">
                <v-carousel-item v-for="(tool, i) in tools" :class="['ma-0 pa-0', selectedClass]" :key="i">
                    <v-img :src="i === models[n - 1] % tools.length ? tool.initialImage : tool.src"
                        @click="redirectTo(tool.href)" style="height: 75%;" class="mt-3" content></v-img>
                </v-carousel-item>
            </v-carousel>

        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            tools: [
                {
                    initialImage: 'https://www.cdnlogo.com/logos/v/92/vue-js.svg',
                    src: 'https://www.cdnlogo.com/logos/v/92/vue-js.svg',
                    href: 'https://google.com.br'
                },
                {
                    initialImage: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg',
                    src: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg',
                    href: 'https://vuetifyjs.com/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/j/2/java.svg',
                    src: 'https://www.cdnlogo.com/logos/j/2/java.svg',
                    href: 'https://www.java.com/pt-BR/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/s/41/sqlite.svg',
                    src: 'https://www.cdnlogo.com/logos/s/41/sqlite.svg',
                    href: 'https://google4.com.br'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/v/23/vitejs.svg',
                    src: 'https://www.cdnlogo.com/logos/v/23/vitejs.svg',
                    href: 'https://vitejs.dev/'
                },
                {
                    initialImage: 'https://www.cdnlogo.com/logos/s/91/spring.svg',
                    src: 'https://www.cdnlogo.com/logos/s/91/spring.svg',
                    href: 'https://google6.com.br'
                },
            ],
            models: [0, 1, 2, 3, 4] // Um modelo diferente para cada coluna
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
}

.v-carousel-item {
    margin: 0;
    border-radius: 50%;
}

.v-carousel-item .hover {
    scale: 1.02;
}
</style>