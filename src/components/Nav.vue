<template>
  <div  class="ma-12 pa-12">
    <template>      
        <v-navigation-drawer
          floating
          expand-on-hover
          color="#D50000"
        >

          <v-list dense link>
				<v-list-item v-for="link in links" :key="link.text" @click="conteudo(link.location)">
					<v-list-item-action>
						<v-icon color="#FAFAFA">{{ link.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title><span style="color:white;">{{ link.text }}</span></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>  
          
        </v-navigation-drawer>
      
    </template>
  </div>
</template>
<script>

export default {
  data: () => ({
    links: [
      {
        icon:"mdi-attachment", 
        text: "  Região Serrana",
        location: "relatorio"
      },{
        icon:"mdi-chart-bar",
        text: "  Painel",
        location: "serra"
      }
    ]
  }),
  methods: {
    //Adiciona o caminho para o router-view do Content.vue 
    //dos graficos dos locais
    conteudo (local) {
      this.$store.commit(local)
      
    }
  }
  
}
</script>