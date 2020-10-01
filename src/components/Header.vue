<template>
  <v-card
    
  >
    <v-app-bar
      color="#1A237E"
      
      
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title ><span style="color:yellow;">Painel Covid</span></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="400">
      <v-list dense link>
				<v-list-item v-for="link in links" :key="link.text" @click="conteudo(link.location)">
					<v-list-item-action>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ link.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    name: 'Header',
    data: () => ({
      drawer: false,
      links: [
        {
        icon:"mdi-home",
        text: "Home",
        location: "relatorio"
      }
      ]
    }),
    methods: {
    //adiciona o caminho para o router-view do Content.vue
    conteudo (local) {
      this.$store.commit(local)
      
    }
  }
  }
</script>

