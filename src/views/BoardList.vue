<template v-slot:items="props">
  <div>
    
    <div>
      <v-text-field
        label="Search"
        v-model.trim="searchVal"
        ref="searchValue"
        @input="search()"
        
      ></v-text-field>
      <v-btn color="white" @click="search()">검색</v-btn>
      
      <v-btn  @click="reverse()">反转</v-btn>
    </div>
    <div class="px-3 py-2">
      Total : {{length}}
    </div>
    <b-button v-b-tooltip.hover.top="'Tooltip!'" variant="primary" class="woshi" data-name="나는 css content 다">Top</b-button>
   <b-icon-arrow-up v-b-tooltip.hover.top="'Tooltip!'"></b-icon-arrow-up>
   <div class="box">
    <!-- <table>
      <template v-for="(item,index) in users">
      <tr v-if="item.email.includes(searchVal)" :key="index" :style="[{color:'#fff'},styleObj]">
        
        <td>{{item.id}}</td>
        <td>{{ item.email }}</td>
        
      </tr>
        </template>
    </table> -->

    <table class="tbl">
      <template v-for="(item,index) in seachResult">
      <tr :key="index">
        
        <td>{{item.id}}</td>
        <td v-html="item.email"></td>
        
      </tr>
        </template>
    </table>
   </div>
   <p ref="text">{{searchVal}}</p>
    <!-- all users -->
    <div class="person_list_box">
      <b-table 
        hover 
        outlined
        bordered
        stacked="md"
        head-variant="light"
        fixed
        :items="users"
        :fields="fields" 
        :per-page="perPage" 
        :current-page="currentPage"
        @row-clicked="rowClick"
      >
        <!-- <b-tbody>
            <b-tr v-for="(item,index) in users" :key="index" v-if="item.email.includes(searchVal)">
              <b-td>{{item.id}}</b-td>
              <b-td>{{item.email}}</b-td>
              <b-td>
                <template v-slot:cell(avatar)="{item}">
                  <img :src="item.avatar" alt="">
                </template>  
              </b-td>
            </b-tr>
        </b-tbody> -->
      </b-table>

      <b-pagination
        v-model="currentPage"
        
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>

    </div>

    
    
  </div>
</template>

<script>
import {getUsersAPI} from '@/store/api'
import util from 'util'



export default {
  name: 'BoardList',
  data(){
    return {
      styleObj:{'background-color':'red'},
      test:['1','2','3','4'],
        perPage: 5, //노출 행
        currentPage: 2,
      users: [],
      length: null,
      searchVal:"",
      seachResult: [],
      sch:false,
      fields: [
          {
              key: 'id',
              label: 'No.',
              sortable: true
          },
          {
              key: 'email',
              label: '이메일',
              tdClass(value,key,item){
                  // console.log('value',value)
                  // console.log('key',key)
                  // console.log('item',item.id)
                  return item.id > 10 ? 'new' : ''
              }
          },
          {
              key: 'avatar',
              label: '이미지'
          }
      ]
    }
  },

  created(){
    getUsersAPI().then( res => {
      this.users = res.data
      this.length = res.data.length
      this.seachResult = res.data
      this.users.sort(this.sortUsers)
    })

    
    
   
  },
  computed:{
      rows() {
        return this.users.length
      }
  },
  methods:{
    sortUsers(a,b){
      return b.id - a.id
    },
    reverse(){
      this.users.reverse()
    },
    search(){
      console.log('----------------------',this.$refs.searchValue.value)
      this.seachResult = []
      
      if(this.searchVal){
     
        
        this.users.map( el => {
          
          let res = el.email.includes(this.searchVal);
          if(res){
            let jieguo = el.email.split(this.searchVal)
            
            let list = [];
            for( let n = 0; n < jieguo.length; n++){
              list += jieguo[n] + (n >= jieguo.length-1 ? '' : `<span>${this.searchVal}</span>`)
            }
            this.seachResult.push({
              id: el.id,
              email: list
            })
          }
        })
     }
     else{
       this.seachResult = this.users;
     }
    },
    rowClick(item, index, event){
        
        this.$router.push({
            name:'BoardDetail', 
            params: {
                uid: item.id
            }
        })
    },
    
   
     
  },

}
</script>
<style lang="scss">

.woshi::after {content: attr(data-name);}
.box {display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px;}
.box table {border:1px solid gray;}
.tbl span {color:red;}
</style>
