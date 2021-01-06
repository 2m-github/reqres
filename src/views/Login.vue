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

    <v-simple-table>
      <template v-slot:default>
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
        <tbody>
          <tr
            v-for="item in users"
            :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.email }}</td>
            <td><img :src="item.avatar" alt=""></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
            users:[]
        }
    },
    created(){
      let token = localStorage.getItem('token')
      if(token){
        this.userDelay()
      }
    },
    methods:{
        login(){
            api.loginAPI({email: this.email, password: this.password})
            .then( res => {
                console.log('page login token ', res.data.token, res.status)
                this.userDelay()
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
        }
    }
}
</script>