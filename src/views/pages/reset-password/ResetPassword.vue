<script>
import Email from '@/components/reset-password/Email.vue';
import NewPassword from '@/components/reset-password/NewPassword.vue';
import VerificationCode from '@/components/reset-password/VerificationCode.vue';

export default {
    name: 'ResetPassowrd',

    components: {
      Email,
      VerificationCode,
      NewPassword
    },

    data(){
        return {
          step: 'email',
          steppers: [
            {title:  "Email", key: 1},
            {title:  "Código", key: 2},
            {title:  "Nova senha", key: 2}
          ]
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
      <v-col class="pa-1">
        <v-card
          rounded
          class="ma-auto"
          max-width="600px"
        >
          <v-toolbar color="primary">
            <v-toolbar-title>
              Redefinição de senha!
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pa-1">
            <v-stepper
              v-model="step"
              editable
              hide-actions=""
              :items="steppers"
            >
              <template #[`item.1`]="{}">
                <email />
              </template>
              <template #[`item.2`]="{}">
                <verification-code />
              </template>
              <template #[`item.3`]="{}">
                <new-password />
              </template>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 