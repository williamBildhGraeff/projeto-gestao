<script>
export default {

}

</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-card class="pa-1"> 
        <v-card-text 
          class="pa-1"
        >
          <v-otp-input
            focus-all
            placeholder="0"
          />
        </v-card-text>
        <v-card-actions 
          class="pa-1"
        >
          <v-spacer />
          <v-btn
            variant="tonal"
            prepend-icon="mdi-send"
            text="Enviar"
            color="primary"
          />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>