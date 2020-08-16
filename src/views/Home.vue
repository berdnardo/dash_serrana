
<template>
<div id="home">
 <Header id="Header"></Header>
 <Nav id="Nav"></Nav>
 <Content id="Content"></Content>
 <Footer id="Footer"></Footer>
 </div>
</template>

<script>
import Header from '../components/Header.vue'
import Nav from '../components/Nav.vue'
import Content from '../components/Content.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components:{
        Header,
        Nav,
        Content,
        Footer
    }
}
</script>

<style>

#Header{
    grid-area: header;
    
}
#Nav{
    grid-area: nav;
    overflow-y: auto;
}
#Content{
    grid-area: content;
    overflow-y: auto;
    
}
#Footer{
    grid-area: footer;
    
}
#home{
    display: grid;    
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 89vh auto;
    grid-template-areas: 'header header'
                         'nav content'
                         'footer footer';
    
    
}
</style>