<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/home">Home</router-link> 
    <router-link to="/about">About</router-link>
    
    <div v-for="(user, index) in users" :key="index">
      <p>{{user.email}}</p>
      <img :src="user.avatar" alt="" >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUsersAPI} from '@/store/api'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      users: {}
    }
  },
  created(){
    getUsersAPI().then( res => {
      this.users = res.data
    })
    console.log(window.location.hostname)
    // newsAPI().then( res => { 
    //   this.users = res.data
    //   })
    
  },
  methods:{
    
  }
}
</script>
