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
      width="300"
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
                variant="outlined"
                label="Last name"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          variant="tonal"
          prepend-icon="mdi-arrow-collapse-left"
          text="Entrar"
          color="primary"
          @click="$router.push('/painel')"
        />
      </v-card-actions>
    </v-card>
  </v-container>
</template>