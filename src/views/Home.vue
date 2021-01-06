<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/home">Home</router-link> 
    <router-link to="/about">About</router-link>
    
    <dl class="person_list" v-for="(user, index) in users" :key="index">
      <dt><img :src="user.avatar" alt="" ></dt>
      <dd><p>{{user.email}}</p></dd>
    </dl>
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
