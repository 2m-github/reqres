<template>
  <div class="home">
    
    <swiper-default />
    
    <div>
      <b-btn @click.prevent="link({name:'About'})">믹스인 링크</b-btn>
      <v-text-field
        label="Search"
        v-model="searchVal"
      ></v-text-field>
      <v-btn color="white" @click="search()">검색</v-btn>
      <v-btn  @click="reverse()">反转</v-btn>
    </div>
    <div>
      Total : {{length}}
    </div>
    
    <!-- search result -->
    <div class="person_list_box" v-if="sch">
      <dl class="person_list" v-for="(serachUser, index) in seachResult" :key="index">
        <dt>{{serachUser.id}}</dt>
        <dd><img :src="serachUser.avatar" :alt="serachUser.email" ></dd>
        <dd><p>{{serachUser.email}}</p></dd>
      </dl>
      <b-table hover :items="seachResult" :fields="fields"  sort-desc="true" ></b-table>
    </div>
    <!-- all users -->
    <div class="person_list_box" v-else>
      <!-- <dl class="person_list" v-for="(user, index) in users" :key="index">
        <dt>{{user.id}}</dt>
        <dd><img :src="user.avatar" alt="" ></dd>
        <dd><p>{{user.email}}</p></dd>
      </dl> -->
      <b-table hover :items="users" :fields="fields"  sort-desc="true" ></b-table>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUsersAPI} from '@/store/api'
import util from 'util'
import fs from 'fs'
import mixinTest from '@/mixins'

import SwiperDefault from '@/components/swiperDefault.vue'
import e from 'express'



export default {
  name: 'Home',
  components: {
      SwiperDefault
    },
  mixins:[mixinTest],
  data(){
    return {
      users: {},
      length: null,
      searchVal:null,
      seachResult: {},
      sch:false,

      sortBy : 'id' ,
      sortDesc : true ,
      fields: ['id','email',{'avatar':'Images'}]
    }
  },
  created(){
    getUsersAPI().then( res => {
      this.users = res.data
      this.length = res.data.length
      
      this.users.sort(this.sortUsers)
    })
    
    
   
  },
  methods:{
    sortUsers(a,b){
      return b.id - a.id
    },
    reverse(){
      this.users.reverse()
    },
   search(){
     this.seachResult = {}
     let i = 0;
     this.users.map( el => {
       console.log('el=',el)
       let res = el.email.includes(this.searchVal);
       
       if(res){
         i++;
         this.seachResult[i] = el
       }
     })
     this.sch = i > 0 && true
     this.length = i
   },
   onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
     
  },
  mounted(){

    
    
    
  }
}
</script>
