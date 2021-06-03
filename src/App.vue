<template>
  <v-app>
    <top-header />
    <navigation />
    
    <v-main>
      <!-- 为应用程序提供正确的插槽 -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <foot />
    </v-footer>
  </v-app>
</template>

<script>


import TopHeader from '@/components/common/Header.vue'
import Foot from '@/components/common/Foot.vue'
import Navigation from './components/common/Navigation'
export default {
  name: 'App',
  components: {
    Navigation,
    TopHeader,
    Foot
  },
  data() {
    return {

    }
  },
  computed:{
    
  },
  mounted(){
    
    
  }
};
</script>
