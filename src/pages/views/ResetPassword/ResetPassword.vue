<script>
import Email from '@/components/ResetPassword/Email.vue';
import NewPassword from '@/components/ResetPassword/NewPassword.vue';
import VerificationCode from '@/components/ResetPassword/VerificationCode.vue';

export default {
    name: 'RecuperarSenha',

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
  >
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
      <v-card-text>
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
  </v-container>
</template> 