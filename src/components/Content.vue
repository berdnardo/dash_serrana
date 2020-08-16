<template>
  <v-container>
    <router-view class="location" v-bind:name="this.$store.state.location"></router-view>
    
  </v-container>
</template>

<script>

export default {
  props: {
    name: String
  }

}
</script>

<style>

</style>