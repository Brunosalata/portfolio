<template>
    <form @submit.prevent="submitForm" action="https://formsubmit.co/brunoslima@gmail.com" method="POST">
        <v-card class="pa-5" variant="outlined" elevation="8">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="fields.name.value" :error-messages="fields.name.errorMessage" label="Nome"
                        name="name"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="fields.phone.value" :counter="9" :error-messages="fields.phone.errorMessage"
                        label="(xx) Telefone" name="phone"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="fields.email.value" :error-messages="fields.email.errorMessage" label="E-mail"
                        name="email"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-select v-model="fields.select.value" :items="items" :error-messages="fields.select.errorMessage"
                        label="Assunto" name="subject"></v-select>
                </v-col>

                <v-col cols="12">
                    <v-textarea v-model="fields.message.value" :counter="10" :error-messages="fields.message.errorMessage"
                        label="Mensagem" name="message">
                    </v-textarea>
                </v-col>

                <v-col cols="12" class="d-flex">
                    <v-btn color="primary" variant="outlined" class="me-4" type="submit">
                        submit
                    </v-btn>
                    <v-btn @click="handleReset">
                        clear
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
        </v-card>
    </form>

    <v-fade-transition hide-on-leave>
        <v-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="450" title="Mensagem Enviada">
            <template v-slot:append>
                <v-btn icon="$close" variant="text" @click="dialog = !dialog"></v-btn>
            </template>

            <v-divider></v-divider>

            <div class="py-10 text-center">
                <v-icon class="mb-6" color="success" icon="mdi-check-circle-outline" size="100"></v-icon>

                <div class="text-h5 font-weight-bold">Obrigado pelo contato!</div>
                <div class="text-h7"><br />Responderemos o mais breve possível.</div>
            </div>

            <v-divider></v-divider>

            <div class="pa-4 text-end">
                <v-btn class="text-none" color="medium-emphasis" min-width="92" variant="outlined"
                    @click="dialog = !dialog">
                    Fechar
                </v-btn>
            </div>
        </v-card>
    </v-fade-transition>
</template>
  
<script setup>
import { ref } from 'vue'

const fields = ref({
    name: {
        value: '',
        errorMessage: ''
    },
    phone: {
        value: '',
        errorMessage: ''
    },
    email: {
        value: '',
        errorMessage: ''
    },
    select: {
        value: '',
        errorMessage: ''
    },
    checkbox: {
        value: '',
        errorMessage: ''
    },
    message: {
        value: '',
        errorMessage: ''
    },
})

const items = ref([
    'Desenvolvimento de Sistemas',
    'Desenvolvimento Web',
    'Marketing Digital',
    'Outros',
])

function submitForm() {
    if (fields.value.name.value.length < 1) {
        fields.value.name.errorMessage = 'Esse campo não pode estar vazio.'
    } else {
        fields.value.name.errorMessage = ''
    }

    if (fields.value.phone.value.length <= 9 || !/[0-9-]+/.test(fields.value.phone.value)) {
        fields.value.phone.errorMessage = 'Padrão aceito: xx988887777'
    } else {
        fields.value.phone.errorMessage = ''
    }

    if (!/^[a-z.-_]+@[a-z.-]+\.[a-z]+$/i.test(fields.value.email.value)) {
        fields.value.email.errorMessage = 'E-mail inválido.'
    } else {
        fields.value.email.errorMessage = ''
    }

    if (!fields.value.select.value) {
        fields.value.select.errorMessage = 'Selecione uma opção.'
    } else {
        fields.value.select.errorMessage = ''
    }

    if (fields.value.message.value.length < 10) {
        fields.value.message.errorMessage = 'A mensagem deve conter ao menos 10 caracteres.'
    } else {
        fields.value.message.errorMessage = ''
    }

    // Verifica se há erros
    const hasErrors = Object.values(fields.value).some(field => !!field.errorMessage)
    if (!hasErrors) {
        document.querySelector('form').submit()
        handleSend()
    }
}

function handleSend() {
    dialog.value = true
}

function handleReset() {
    fields.value = {
        name: {
            value: '',
            errorMessage: ''
        },
        phone: {
            value: '',
            errorMessage: ''
        },
        email: {
            value: '',
            errorMessage: ''
        },
        select: {
            value: '',
            errorMessage: ''
        },
    }
}

const dialog = ref(false)
</script>

<style scoped>
.v-fade-transition {
    position: 'fixed';
    top: '50%';
    left: '50%';
    transform: 'translate(-50%, -50%)';
}
</style>