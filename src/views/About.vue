<template>
  <div class="mt-15">
    <div class="pt-10">
      <div class="mt-4">
        <div class="d-flex flex-column justify-center align-center">
          <h1 class="mb-5">Sobre o Autor</h1>
        </div>
      </div>
      <Description class="mb-10" />
    </div>
    <div class="pa-5">
      <v-divider></v-divider>
      <div class="mt-4">
        <Numbers />
      </div>
      <div class="ma-5 mt-15">
        <v-row>
        <v-col cols="2" class="mr-5">
          <h2 class="mt-0">Skills</h2>
        </v-col>
        <v-col cols="9">
          <SkillsValue class="mb-10" />
        </v-col>
      </v-row>
    </div>
    </div>
    <CallAction />
  </div>
</template>
  
<script lang="ts" setup>
import CallAction from '@/components/home/CallAction.vue';
import SkillsValue from '@/components/about/SkillsValue.vue';
import Description from '@/components/about/Description.vue';
import Numbers from '@/components/about/Numbers.vue';
</script>