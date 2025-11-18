<script>
export default {
    data(){
        return {
           data: {
            firstName: null,
            lastName: null
           } 
        }
    }
}
</script>

<template>
  <v-container
    fluid
    class="fill-height"
  >
    <v-card
      rounded
      class="mx-auto"
    >
      <v-toolbar color="primary">
        <v-toolbar-title>
          Login
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col
              cols="12"
              class="pa-1"
            >
              <v-text-field
                v-model="data.firstName"
                hide-details="auto"
                variant="outlined"
                label="First name"
              />
            </v-col>
            <v-col
              cols="12"
              class="pa-1"
            >
              <v-text-field
                v-model="data.lastName"
                hide-details="auto"
                variant="outlined"
                label="Last name"
              />
            </v-col>
            <v-col
              cols="12"
              class="pa-1  d-flex justify-center"
            >
              <v-btn
                text="Esqueci minha senha!"
                variant="tonal"
                color="primary"
                class="w-100 "
                density="compact"
                @click="$router.push('/reset-password')"
              />
            </v-col>
            <v-col
              cols="12"
              class="pa-1 d-flex justify-center"
            >
              <v-btn
                text="Novo usuário"
                variant="tonal"
                color="red"
                class="w-100 "
                density="compact"
                @click="$router.push('/create-user')"
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
          text="Login"
          color="primary"
          @click="$router.push('/doacoes')"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>