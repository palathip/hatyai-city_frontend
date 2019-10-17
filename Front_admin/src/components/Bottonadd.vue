<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px" max-height="200px">
      <template v-slot:activator="{ on }">
      </template>
      <v-card class="yellow lighten-4">
        <v-card-title class="yellow lighten-2">
          <span class="headline">CREDIT FORM</span><div class="flex-grow-1"></div><v-card width="4cm" height="1.5cm">
        <v-img width="4cm" height="1.5cm" src='https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg'></v-img></v-card>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="firstname*" v-model="firstname" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="lastname*" v-model="lastname" outlined></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Card Number* >0000222244446666" v-model="Card_Number" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="Expiry"
            label="Expiry year*"
            outlined
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="Expiry"
          type="month"
          no-title
          scrollable
        >
          <div class="flex-grow-1"></div>
          <v-btn text color="red" @click="menu = false">Cancel</v-btn>
          <v-btn text color="orange" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Security code* >xxxx" v-model="code" outlined></v-text-field>
              </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="orange darken-1" text @click="postDetail">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      Card_Number: '',
      Expiry: '',
      code: '',
      dialog: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    }
  }
}
</script>
