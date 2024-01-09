<template>
    <v-card class="mx-auto mt-20 bg-transparent">
        <v-container fluid style="max-width: 1200px;">
            <v-row dense class="d-flex justify-center">
                <v-col v-for="card in cards" :key="card.title" :cols="12" sm="5" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card id="feature" variant="tonal" :elevation="isHovering ? 12 : 2"
                            :class="{ 'on-hover': isHovering }" v-bind="props">
                            <div class="d-flex justify-center align-center" style="height: 30%;">
                                <v-avatar :image="card.src" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" cover
                                    size="60">
                                </v-avatar>
                            </div>
                            <div class="mx-3 d-flex justify-center align-center" style="height: 40%;">
                                <v-row no-gutters>
                                    <v-col cols="12">
                                        <h4 style="white-space: pre-wrap" class="text-white" >
                                    {{ card.title }}</h4>
                                    </v-col>
                                    <v-col cols="12">
                                        <h7 style="white-space: pre-wrap" class="text-white">
                                    {{ card.subtitle }}</h7>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import SkillDesktop from '@/assets/img/skill-desktop.png';
import SkillWeb from '@/assets/img/skill-web.png';
import SkillUX from '@/assets/img/skill-ux.png';
import SkillFast from '@/assets/img/skill-fast-response.png';
import SkillBranding from '@/assets/img/skill-branding.png';
import SkillAdapt from '@/assets/img/skill-adapt.png';

export default {
    data: () => ({
        cards: [
            {
                title: 'Sistemas Desktop',
                subtitle: 'Totalmente Personalizados',
                src: SkillDesktop,
            },
            {
                title: 'Web Design',
                subtitle: 'Páginas Responsivas e Intuitivas',
                src: SkillWeb,
            },
            {
                title: 'Experiência do Usuário',
                subtitle: 'Foco na satisfação do usuário final',
                src: SkillUX,
            },
            {
                title: 'Agilidade nas Respostas',
                subtitle: 'Suporte Continuado',
                src: SkillFast,
            },
            {
                title: 'Branding',
                subtitle: 'Contribuição para ideias e ações',
                src: SkillBranding,
            },
            {
                title: 'Flexibilidade',
                subtitle: 'Adaptabilidade de projetos e ideias',
                src: SkillAdapt,
            },
        ],
        transparent: 'rgba(255, 255, 255, 0)',
    }),
}
</script>

<style scoped>
#feature {
    min-height: 200px;
    min-width: 150px;

    /* Exibição como flexbox com direção de coluna */
    display: flex;
    flex-direction: column;
    /* Altura e largura preenchendo o espaço disponível */
    height: 100%;
    width: 100%;
    /* Alinhamento vertical e horizontal no centro */
    justify-content: center;
    align-items: center;
    /* Cor do texto branca */
    color: white;

    text-align: center;
}

.v-card .on-hover {
    transform: scale(1.01);
}
</style>
