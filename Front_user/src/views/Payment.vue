
<template>
  <div>
    <v-toolbar outlined dark>
      <v-toolbar-title>Hatyai City</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text @click="goPage('/home')">Home</v-btn>
        <v-btn text @click="goPage('/payment')">Booking</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card>
      <v-img
        src="https://i.pinimg.com/originals/a7/32/40/a732403ed28a28889a056a72b42adb37.jpg"
        max-height="725"
      >
        <div>
          <v-row justify="center">
            <v-col cols="5" md="5" class="ma-6 pa-6">
              <v-card dark width="700" height="300">
                <v-card-title class="white" style="color:black">Payment (Counter Service)
                   <span class="headline"></span><div class="flex-grow-1"></div>
        <v-img max-width="2.5cm" max-height="2.5cm" src='../../static/img/711.png'></v-img>
                </v-card-title>
                <v-container>
                 
                  <v-text-field
                    @click="check"
                    label="Enter Booking ID*"
                    v-model="booking"
                    outlined
                    shaped
                    dark
                  ></v-text-field>
                  <v-simple-table>
                   <v-btn color="white" style="color:black" @click="postPayment">Confirm</v-btn>
                  </v-simple-table>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="5" md="5" class="ma-6 pa-6">
              <v-card dark width="700" height="300">
                <v-card-title class="black">Check Booking Status</v-card-title>
                <v-container>
                 
                  <v-text-field
                    @click="check"
                    label="Enter Booking ID*"
                    v-model="booking"
                    outlined
                    shaped
                    dark
                  ></v-text-field>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr class="black">
                          <th class="text-center">BOOKING ID</th>
                          <th class="text-center">ROOM</th>
                          <th class="text-center">DAYS</th>
                          <th class="text-center">CHECK-IN</th>
                          <th class="text-center">CHECK-OUT</th>
                          <th class="text-center">STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="white" style="color:black" v-show="show" v-for="item in name" :key="item.name">
                          <td
                            v-if="item.bookingid==booking"
                            class=" text-center"
                          >{{ item.bookingid }}</td>
                          <td
                            v-if="item.bookingid==booking"
                            class="text-center"
                          >{{ item.roomid }}</td>
                          <td
                            v-if="item.bookingid==booking"
                            class="text-center"
                          >{{ item.duration }}</td>
                          <td
                            v-if="item.bookingid==booking"
                            class="text-center"
                          >{{ item.start }}</td>
                          <td
                            v-if="item.bookingid==booking"
                            class="text-center"
                          >{{ item.end }}</td>
                          <td
                            v-if="item.payment==0 && item.bookingid==booking"
                            class="red text-center"
                          >PAYMENT</td>
                          <td
                            v-else-if="item.payment==1 && item.bookingid==booking"
                            class="green text-center"
                          >RESERVE</td>
                          <td
                            v-if="item.payment==2 && item.bookingid==booking"
                            class="yellow text-center"
                          >TIME OUT</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-img>
    </v-card>
     <v-footer padless dark>
    <v-col
      class="text-center"
      cols="12"
      
    >
    Hatyai City
    </v-col>
  </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      booking: "",
      name: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("http://192.168.74.159:3000/show_booking")
        .then(response => {
          console.log(response.data);
          this.name = response.data;
        });
    },
    postPayment() {
       let BookingID = new FormData();
      BookingID.append("booking_id", this.booking);
      this.axios
        .post("http://192.168.74.159:3000/payment",BookingID)
        .then(response => {
          console.log(response.data);
        if(response.data == "Payment Success"){
this.$swal(response.data,'','success')
        }
        else if(response.data == "Time Out"){
this.$swal(response.data,'','error')
        }
        this.getData();
         
          
        });
    },
    check() {
      this.show = true;
    },
    goPage(link) {
      this.$router.push(link);
    }
  }
};
</script>
<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>