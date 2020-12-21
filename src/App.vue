<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
      menu
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>
    <!-- 根据应用程序组件调整内容大小 -->
    <v-main>
      <!-- 为应用程序提供正确的插槽 -->
      <v-container fluid>
        <!-- 如果使用vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
