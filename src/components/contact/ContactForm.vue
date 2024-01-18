<template>
    <form @submit.prevent="submitForm" action="https://api.staticforms.xyz/submit" method="POST">
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
        <input type="hidden" name="accessKey" value="4450dead-a42f-4427-bf72-6319b5393ac2">
        <input type="hidden" name="redirectTo" value="https://www.brunosalata.com.br">
        <input type="text" name="honeypot" style="display: none;">
    </form>

    <div v-if="dialog" class="fade-transition-wrapper">
        <v-fade-transition hide-on-leave>
            <v-card append-icon="$close" class="dialog" elevation="16" title="Mensagem Enviada">
                <template v-slot:append>
                    <v-btn icon="$close" variant="text" @click="dialog = !dialog"></v-btn>
                </template>

                <v-divider></v-divider>

                <div class="pa-5 text-center">
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
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

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
        handleReset()
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
        checkbox: {
            value: '',
            errorMessage: ''
        },
        message: {
            value: '',
            errorMessage: ''
        },
    }
}

const dialog = ref(false)
</script>

<style scoped>
.fade-transition-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Cor do fundo para visualização */
}

.dialog {
    min-width: auto;
}
</style>