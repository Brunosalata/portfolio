<template>
    <v-app-bar color="transparent" style="top: 0px; transform: translateY(0px); z-index: 100;">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)"></v-img>
      </template>

      <template #prepend>
        <v-img class="ml-2">
          <!--
            <v-avatar image="@/assets/app-logo.png"></v-avatar>
          -->
        </v-img>
      </template>

      <v-img class="d-flex justify-center align-center" height="45" src="@/assets/img/fuzay-logo.png"></v-img>



      <template #append> <!--elementos à direita na barra superior-->
        <!-- Campo de Perfil -->
        <v-menu>
          <template #activator="{ props }">

            <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>

          </template>

          <v-card min-width="160px">
            <v-list :lines="false" density="compact" nav>
              <router-link v-for="(item, i) in items" :key="i" :to="item.to">

                <v-list-item :value="item" color="primary">
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                  </template>

                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>

              </router-link>
            </v-list>
          </v-card>
        </v-menu>

      </template>
    </v-app-bar>
</template>

<script setup>

const items = [
  { text: 'Home', icon: 'mdi-home', to: "/" },
  { text: 'About', icon: 'mdi-account-multiple', to: "/about" },
  { text: 'Projects', icon: 'mdi-arrow-all', to: "/projects" },
  { text: 'Contact', icon: 'mdi-chat-outline', to: "/contact" },
];

</script>

<style scoped>
a {
  text-decoration: none;
}
</style>