<template>
    <div class="d-flex flex-column justify-center align-center">
        <v-row class="pa-5 pt-15">
            <v-col cols="12" class="d-flex flex-column justify-center align-center">
                <h1 class="mt-10">Contato</h1>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12" class="mt-2 pl-10 pr-10 text-center d-flex flex-column justify-center align-center">
                <div style="max-width: 800px;">
                    <span class="text-h7">
                    Tem uma ideia ou projeto fervilhando na mente? Meus serviços
                    podem ajudar a transformar isso em realidade! Seja para concretizar
                    algo já pensado ou dar vida a ideias em estágio inicial, estou aqui
                    para te ajudar a estruturar e concretizar suas aspirações. Vamos
                    conversar sobre isso?
                </span>
            </div>
            </v-col>
        </v-row>

        <v-card class="pa-10 bg-transparent" style="max-width: 1000px;">
            <v-row>
                <v-col cols="12">
                    <ContactForm />
                </v-col>
            </v-row>
        </v-card>
    </div>
    <FloatingButton />
</template>

<script lang="ts" setup>
import ContactForm from '@/components/contact/ContactForm.vue';
import FloatingButton from '@/components/global/FloatingButton.vue';

</script>
