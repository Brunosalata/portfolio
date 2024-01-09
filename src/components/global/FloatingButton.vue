<template>
  <div class="side-tab">
    <span model-value style="top: 80%; z-index: 999;" class="text-end" size="88">
      <div class="ma-4">
        <v-btn icon size="large" color="green" elevation="8" variant="tonal" @click="openWhatsApp">
          <v-icon size="large">mdi-whatsapp</v-icon>
        </v-btn>
      </div>
    </span>
  </div>
</template>
  
<script>
export default {
  methods: {
    openWhatsApp() {
      window.open('https://wa.me//5516991278804?text=Tenho%20interesse%20em%20falar%20sobre%20seu%20trabalho', '_blank');
    }
  }
}
</script>

<style scoped>
.side-tab {
  position: fixed;
  top: 90%;
  right: 0;
  transform: translateY(-50%);
  padding: 10px;
  z-index: 999;
}
</style>