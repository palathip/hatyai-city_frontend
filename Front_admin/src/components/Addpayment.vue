<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
      </template>
      <v-card class="yellow lighten-4">
        <v-card-title class="yellow lighten-2">
          <span class="headline">PAYMENT FORM</span><div class="flex-grow-1"></div><v-card width="4cm" height="1.5cm">
        <v-img width="4cm" height="1.5cm" src='http://www.idealinthai.com/images/logo-CS-711.jpg'></v-img></v-card>
        </v-card-title>
        <br>
        <v-card-text>
  <v-row><v-col cols="12"><v-text-field label="Booking ID*" v-model="booking" outlined></v-text-field></v-col></v-row>
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
      booking: '',
      dialog: false
    }
  },
  methods: {
    open () {
      this.dialog = true
    },
    postDetail () {
      var data = {
        booking: this.booking
      }
      this.axios.post(process.env.VUE_APP_API + '/EVENT', data).then((response) =>
      { console.log(response.data)
        if (response.data.message === 'insertsuccess') 
        {
          this.$swal('เพิ่มข้อมูลสำเร็จ', '', 'success')
          this.$emit('checkStatus', true)
          this.clear()
          this.dialog = false
        } else { this.$swal('ล้มเหลว', 'กรุณาลองใหม่อีกครั้ง', 'error') }
      })
    },
    clear () {
      this.booking = ''
    }
  }
}
</script>
