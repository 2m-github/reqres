<template>
  <v-container>

    <v-btn
          dark
          @click.stop="setDrawer(true)"
        >
          Toggle {{ drawer }} 
        </v-btn>
  
  <v-navigation-drawer
      v-model="$store.state.drawer"
      absolute
      temporary
    >
    <v-list-item>
      <v-list-item-avatar @click="setDrawer(true)">
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Navigation',
    data () {
      return {
        count: 0,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
    computed:{
      ...mapState(['drawer'])
    },
    methods:{
      ...mapActions(['setDrawer'])
    }
  }
</script>
