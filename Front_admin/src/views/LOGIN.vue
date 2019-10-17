<template>
<div class="backphoto">    <br><br><br><br><br><br><br><br><br><br>
<div class="blocktext" pa-3 ma-2>
<div class="grey lighten-4">
  <v-container>
        <v-card outlined tile>
          <h3 class="grey">LogIn</h3>
        <v-text-field
         label="Enter username"
         prepend-icon="mdi-account"
         v-model="user">
         </v-text-field>
         <v-text-field
         label="Enter password"
         prepend-icon="mdi-lock"
         type="password"
         v-model="password">
         </v-text-field>
        <v-row>
         <v-col class = "text-right" >
         <v-btn color="grey lighten-2" type="submit" @click="signin" ><v-icon>mdi-lock</v-icon>submit</v-btn></v-col></v-row>
         <p1><v-icon>mdi-hotel</v-icon>hotel</p1>
         </v-card>
  </v-container>
</div>
</div></div>
</template>
<style>
h3 {
  color: white;
  padding: 20px
}

p1 {
  font-family: verdana;
  font-size: 10px;
  color: gray
}
.blocktext {
  background-color: rgb(112, 112, 112);
  padding: auto;
  margin: auto;
  width: 100%;
  max-width: 450px;
}
.backphoto{
  background-image: url(https://www.likehotelthailand.com/upload/1182/hotelj1-20.jpg);
  background-position: bottom;
  -webkit-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 120vh;
}
.color
{
  background-color: rgb(238, 136, 136);
  color: rgb(209, 127, 140);
}
.pro
{
  background-color: rgb(253, 253, 253);
  color: rgb(0, 0, 0);
  font-size: 10px;
}

</style>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  // created () {
  //   this.AlertForCreated()
  // },
  // mounted () {
  //   this.AlertForCreated()
  // },
  methods: {
    AlertForCreated () {
      this.$swal('CreatedFunction', '', 'success')
    },
    goPage (link) {
      this.$router.push(link)
    },
    signin () {
      console.log(this.user)
      console.log(this.password)
      this.goPage('/ROOM1')
      // if (this.user === '') this.$swal('กรุณากรอก username')
      // else if (this.password === '') this.$swal('กรุณากรอก password')
      this.$swal('ADMIN hotel')
    }
  }
}
</script>
