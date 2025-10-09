<script>
import menu from '@/utils/menu';
export default {
  data() {
    return {
     
      drawer: false,
      group: null,
      menu
    }
  },

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
<template>
  <v-app-bar
    color="primary"
    density="compact"
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    />

    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

    <template v-if="$vuetify.display.mdAndUp">
    <!-- <v-btn
        icon="mdi-magnify"
        variant="text"
      />

      <v-btn
        icon="mdi-filter"
        variant="text"
      />
    </template>

    <v-btn
      icon="mdi-dots-vertical"
      variant="text"
    /> -->
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list
      v-for="value in menu"
      :key="value"
      class="pa-0"
      color="primary"
    >
      <v-list-item
        v-if="!value?.items"
        :prepend-icon="value.icon"
        :title="value.title"
        :to="value.path"
      />

      <v-list-group
        v-else
        :title="value.title"
      >
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="value.title"
            :prepend-icon="value.icon"
          />
        </template>
        <v-list-item
          v-for="item in value.items"
          :key="item"
          :title="item.title"
          :value="item.title"
          :prepend-icon="item.icon"
          color="primary"
          :to="item.path"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>