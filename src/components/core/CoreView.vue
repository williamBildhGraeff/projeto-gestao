<script>
export default {
 name: 'CoreView'
}
</script>

<template>
  <v-main>
    <router-view v-slot="{Component}">
      <component :is="Component" />
    </router-view>
  </v-main>
</template>