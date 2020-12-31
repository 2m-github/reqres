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
    {{$store.state.auth.token}}
  </v-form>
</template>

<script>
import { loginAPI } from '@/store/api'
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
        }
    },
    methods:{
        login(){
            loginAPI({email: this.email, password: this.password})
            .then( res => {
                console.log('page login token ', res.data.token, res.status)
            })
            .catch( err => {
                console.log('page login error ', err)
            })

            

        }
    }
}
</script>