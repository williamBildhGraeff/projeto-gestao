<script>
export default {
 data() {
    return {
        data: {}
    }
 }
}
</script>
<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col
            cols="12"
            class="pa-1"
          >
            <v-text-field
              v-model="data.old_password"
              hide-details="auto"
              variant="outlined"
              label="Old Password"
            />
          </v-col>
          <v-col
            cols="12"
            class="pa-1"
          >
            <v-text-field
              v-model="data.new_passowrd"
              hide-details="auto"
              variant="outlined"
              label="New Password"
            />
          </v-col>
          <v-col
            cols="12"
            class="pa-1"
          >
            <v-text-field
              v-model="data.confirm_password"
              hide-details="auto"
              variant="outlined"
              label="Confirm Password"
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
        @click="$router.push('/painel')"
      />
    </v-card-actions>
  </v-card>
</template>