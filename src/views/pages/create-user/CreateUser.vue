<script>
import user from '@/api/user';

export default {
    data(){
        return {
            user: {},
            confirm_password: ''
        }
    },

    methods: {
        createUser(){
            try {
                user.createUser(this.user)
                console.log('show')
            } catch(e){
                console.error(e)
            }
        }
    }
}
</script>

<template>
  <v-container
    fluid
    class="h-100"
  >
    <v-btn
      text="Voltar"
      prepend-icon="mdi-arrow-left"
      @click="$router.push('/login')"
    />
    <v-row class="fill-height d-flex justify-center align-center">
      <v-col
        class="pa-1 "
      >
        <v-card 
          rounded
          class="mx-auto"
          max-width="600px"
        >
          <v-toolbar color="primary">
            <v-toolbar-title>
              Criar usuário
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="user.name"
                    label="Name"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="user.email"
                    label="Email"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="user.phone"
                    label="Phone"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="user.login"
                    label="Login"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="user.password"
                    label="Password"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                  class="pa-1"
                >
                  <v-text-field
                    v-model="confirm_password"
                    label="Confirm Password"
                    variant="outlined"
                    hide-details="auto"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              variant="flat"
              prepend-icon="mdi-arrow-collapse-left"
              text="Send"
              color="primary"
              @click="createUser"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>