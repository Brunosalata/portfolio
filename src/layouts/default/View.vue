<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
      cover
      src="https://static.vecteezy.com/system/resources/previews/016/102/699/non_2x/digital-technology-banner-blue-green-background-concept-cyber-polygonal-technology-abstract-tech-innovation-future-data-internet-network-ai-big-data-lines-dots-connection-illustration-free-vector.jpg"
      gradient="to top right, rgba(86, 97, 37, 0.8), rgba(35, 49, 19, 0.8), rgba(3, 8, 2, 0.8)"
      height="64">
        <v-list>
          <v-list-item 
            prepend-avatar="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="John Leider"
            subtitle="Gerente de Operações"
          >
          </v-list-item>
        </v-list>

      </v-img>
      

      <v-divider></v-divider>

      <v-list
        :lines="false"
        density="compact"
        nav
      >
        <router-link 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to">

          <v-list-item  
            :value="item"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>

        </router-link>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
    image="https://static.vecteezy.com/system/resources/previews/016/102/699/non_2x/digital-technology-banner-blue-green-background-concept-cyber-polygonal-technology-abstract-tech-innovation-future-data-internet-network-ai-big-data-lines-dots-connection-illustration-free-vector.jpg" 
    >
      <template v-slot:image>
        <v-img 
        gradient="to top right, rgba(86, 97, 37, 0.8), rgba(35, 49, 19, 0.8), rgba(3, 8, 2, 0.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Data Monitor</v-app-bar-title>

      <template #prepend></template> <!--elementos à esquerda na barra superior-->

      <template #append> <!--elementos à direita na barra superior-->

        <!-- Campo de Notificações -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon class="mr-2" v-bind="props" >
              <v-badge content="3" color="green">
                <v-icon icon="mdi-bell-outline"></v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-card 
            class="mx-auto"
            max-width="300px"
          >
            <v-list :lines="false" density="compact" nav>
              <v-card>
                <v-card-title class="text-body-2 ma-1 pa-0">View read (3)</v-card-title>
                
                <v-divider></v-divider>

                <v-list-item prepend-icon="mdi-truck-alert-outline" class="text-justify border">
                  <p class="text-caption text-grey-lighten-1">Caminhão 3 parado</p>
                  <div class="text-caption">Excedido o tempo de 30 minutos sem movimento.</div>
                </v-list-item>
                  
                <v-list-item prepend-icon="mdi-weather-partly-rainy" class="text-justify border">
                  <p class="text-caption text-grey-lighten-1">Previsão de mal tempo</p>
                  <div class="text-caption">Previsão de tempestade para amanhã. Estimativa de 84.6 mm às 15:32 da tarde.</div>
                </v-list-item>
                  
                <v-list-item prepend-icon="mdi-altimeter" class="text-justify border">
                  <p class="text-caption text-grey-lighten-1">Queda abrupta na altitude</p>
                  <div class="text-caption">O caminhão 2 sinalizou uma queda rápida na altitude.</div>
                </v-list-item>

              </v-card>
            </v-list>

          </v-card>
        </v-menu>
        
        <!-- Campo de Perfil -->
        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img cover src="https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></v-img>
            </v-avatar>  
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Perfil</v-list-item-title>
              </v-list-item>

              <v-list-item prepend-icon="mdi-cog-outline">
                <v-list-item-title>Preferências</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null);

  const items = [
    { text: 'Home', icon: 'mdi-home', to: "/" },
    { text: 'About', icon: 'mdi-account-multiple', to: "/about" },
    { text: 'Dashboard', icon: 'mdi-monitor-dashboard', to: "/dashboard" },
    { text: 'Client', icon: 'mdi-account-outline', to: "/client" },
    { text: 'Report', icon: 'mdi-chart-box-outline', to: "/report" },
  ];
</script>

<style scoped>
  a{
    text-decoration: none;
  }
</style>