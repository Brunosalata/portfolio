<template>
  <v-app-bar color="transparent" style="top: 0px; transform: translateY(0px);">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"></v-img>
    </template>

    <template #prepend>
      <v-avatar class="ml-3" size="large">
        <v-img cover src="@/assets/img/bruno-avatar.jpeg" alt="Bruno Salata"></v-img>
      </v-avatar>
      <span class="ml-5">Bruno Salata Lima</span>
    </template>

    <!-- <v-img class="d-flex justify-center align-center" height="50" src="@/assets/img/fuzay-logo.png"></v-img> -->



    <template #append> <!--elementos à direita na barra superior-->
      <!-- Campo de Perfil -->
      <v-menu>
        <template #activator="{ props }">

          <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>

        </template>

        <v-card min-width="130px">
          <v-list :lines="false" density="compact" nav>
            <router-link v-for="page in pages" :key="page" :to="page.to">

              <v-list-item :value="page">
                <template v-slot:append>
                  <v-avatar color="primary" size="small">
                    <v-icon :icon="page.icon" size="22"></v-icon>
                  </v-avatar>
                </template>

                <v-list-item-title class="text-primary">{{page.text}}</v-list-item-title>
              </v-list-item>

            </router-link>
          </v-list>
        </v-card>
      </v-menu>

    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          text: 'Home',
          icon: 'mdi-home',
          to: "/"
        },
        {
          text: 'Sobre',
          icon: 'mdi-account-multiple',
          to: "/about"
        },
        {
          text: 'Projetos',
          icon: 'mdi-arrow-all',
          to: "/projects"
        },
        {
          text: 'Contato',
          icon: 'mdi-chat-outline',
          to: "/contact"
        },
        // Adicione outros itens aqui com os dados necessários para cada card
      ],
    };
  },
};
</script>

<style scoped>a {
  text-decoration: none;
}</style>