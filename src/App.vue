<template>
  <v-app>
    
    <navigation />
    
    <v-main>
      <!-- 为应用程序提供正确的插槽 -->
      <v-container fluid>
        
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

import navigation from './components/Navigation.vue'
export default {
  name: 'App',
  components: {
    navigation
  },
  data() {
    return {

    }
  }
};
</script>
