<template>
  <v-form
    ref="form"
    
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      value="eve.holt@reqres.in"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      value="cityslicka"
      required
    ></v-text-field>


    <v-btn
      color="success"
      class="mr-4"
      @click="login()"
    >
      LOGIN
    </v-btn>

    <v-text-field
      v-model="name"
      label="name"
    ></v-text-field>

    <v-text-field
      v-model="job"
      label="job"
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="userUpdate()"
    >
      UPDATE
    </v-btn>

    <v-btn
      color="success"
      class="mr-4"
      @click="deleteUsers()"
    >
      DELETE
    </v-btn>
    {{$store.state.auth.token}}

    <table>
        <thead>
          <tr>
            <th class="text-left">
              id
            </th>
            <th class="text-left">
              email
            </th>
            <th class="text-left">
              img
            </th>
          </tr>
        </thead>
        <tbody id="table_result">
          <tr
            v-for="item in users"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.email }}</td>
            <td>
              <a href="javascript:;" @click="goPage(2,2)"><img :src="item.avatar" alt=""></a>
            </td>
          </tr>
        </tbody>
      
    </table>

    <!-- token api test -->
    <v-text-field
      v-model="email2"
      :rules="emailRules"
      label="E-mail"
      value="eve.holt@reqres.in"
      required
    ></v-text-field>

    <v-text-field
      v-model="password2"
      label="Password"
      type="password"
      value="pistol"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="loginTokenTest()"
    >
      LOGIN
    </v-btn>
    <p>token ==== {{ token }}</p>
    <p>branch merge test aasfasdf</p>
    <p>branch merge test </p>
    <p>B branch</p>
    <span>123</span>
    <ul>
      <li>888888888</li>
    </ul>
  </v-form>
</template>

<script>
import * as api from '@/store/api'
export default {
    name: 'Login',
    data(){
        return {
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',

            name:'',
            job:'',
            users:[],
            email2: '',
            password2: '',
            token:null
        }
    },
    created(){
      let token = localStorage.getItem('token')
      if(token){
         this.getUsers()
         
      }

      
    },
    methods:{
        login(){
            api.loginAPI({email: this.email, password: this.password})
            .then( res => {
                console.log('page login token ', res.data.token, res.status)
                this.getUsers()
            })
            .catch( err => {
                console.log('page login error ', err)
            })
        },
        userUpdate(){
            api.putUsersAPI({email: this.name, password: this.job})
            .then( res => {
              console.log( 'put',res.data)
            })
            .catch( err => {
                console.log('put error ', err)
            })
        },
        getUsers(){
          api.getUsersAPI().then( res => {
            
            this.users = res.data
          }).catch( err => {
            console.log('delay error', err)
          })
        },
        userDelay(){
          api.getDelayUsersAPI().then( res => {
            console.log('delay', res)
            this.users = res.data
          }).catch( err => {
            console.log('delay error', err)
          })
        },
        deleteUsers(){
          api.delUsersAPI().then( res => {
            console.log('delete',res)
          }).catch( err => {
            console.log('delete error ', err)
          })
        },
        loginTokenTest(){
          api.tokenAPI({email: this.email2, password: this.password2}).then(res => {
            console.log("res=========",res.data.token)
              this.token = res.data.token
          }).catch(err => {
            console.log('token login error ', err)
          })
        }
    },
    mounted(){
    
    }
}
</script>