<template>
  <div>
    <v-card>
    <v-toolbar >
      <v-toolbar-title class="title">ADMIN</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <!-- <v-btn @click="goroom" color="">ROOM-USER</v-btn> -->
        <v-btn @click="gotest" color="">ROOM-ADMIN</v-btn>
        <v-btn @click="goevent" color="">ROOM-TYPE</v-btn>
        <v-btn @click="goroomcheck" color="">ROOM-CHECKDATE</v-btn>
        <!-- <v-btn @click="gocredit" color="">FORM PAYMENT</v-btn> -->
        <!-- <v-btn @click="gologin" type="submit"  color="">LOG OUT</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
       <v-content>
        <router-view/>
    </v-content>
    </v-card>
  </div>
</template>
<script>
export default {
  methods: {
    goPage (link) {
      this.$router.push(link)
    },
    goroom () {
      this.goPage('/ROOM')
    },
    goevent () {
      this.goPage('/ROOM_TYPE')
    },
    gohomeadmin () {
      this.goPage('/HOMEADMIN')
    },
    gologin () {
      this.goPage('/LOGIN')
    },
    gotest () {
      this.goPage('/ROOM1')
    },
    goroomcheck () {
      this.goPage('/ROOMCHECK')
    },
    gocredit () {
      this.goPage('/CREDITFORM')
    }
  }
}
</script>
