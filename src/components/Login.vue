<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

         <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="Mínimo 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      Entrar
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Limpiar Campos
    </v-btn>
    <v-alert v-if="!userfind" type="warning">
      no esta registrado en el sistema
    </v-alert>
  </v-form>
</template>
<script>
  import axios from 'axios';
  import {mapActions} from 'vuex';

  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'debes ingresar correo',
        v => /.+@.+\..+/.test(v) || 'correo debe ser válido',
      ],
      userfind: true,
      show1: false,
      password: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 7 || 'Min 8 caracteres',
        },

      
    }),

    methods: {
      ...mapActions(['userLogin']),
      validate () {
       return this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      submit (){
        if(this.validate() === false) return
        axios.get('http://localhost:8080/api/login.json')
        .then(resp=>{
            console.log(resp.data)
            let user = resp.data;
            if (user.email == this.email && user.password == this.password){
              this.userLogin(user);
              
              this.$router.push('/')
              this.userfind= true;

            }
            else {
              this.userfind = false;
            }
        })
        .catch(error=>{
            console.log(error)
        })
      }
    },
  }
</script>