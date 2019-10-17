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
      <!-- ModalCheck   -->
        <div class="text-center" >
          <v-dialog v-model="Check" width="500">
            <v-card color="white" >
              <v-card-title class="headline grey lighten-2" primary-title>Check Available</v-card-title>

              <v-card-text  class="text-center">
                <v-row justify="center" >
                  <v-col cols="12" md="6" class="ma-4 pa-4">
                <h2>Type: {{type}}</h2></v-col>
                  <v-col cols="12" md="6" class="ma-2 pa-2">
                <h2>Room Empty: {{room_empty}}</h2></v-col></v-row>
              </v-card-text>

              <v-divider></v-divider>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn  color="error" text @click="Check=false, clearSearchForm()">Cancel</v-btn>
                <v-btn v-show="ButtonBookingNow" color="primary" text @click="Booking=true,Check=false">Book Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

<!-- ModalBooking -->
 <div class="text-center">
    <v-dialog
      v-model="Booking"
      width="800"
    >
       <v-row justify="center">
<v-card width="800" color="white" >
    <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
         <v-row justify="center">
          Booking Process
          </v-row>
        </v-card-title>
        
  <v-stepper  v-model="e1">
    <v-stepper-header > 
      <v-stepper-step :complete="e1 > 1" step="1" color="orange">Personal</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2" color="orange" >Booking</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" color="orange">Payment</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" color="orange">
        <v-card
          class="mb-12"
          outlined
          height="200px"
        >
    <v-container ref="formPersonal" >
      <v-row>

        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
            ref="firstname"
            v-model="firstname"
            :rules="[() => !!firstname || 'This field is required']"
            :error-messages="errorMessages"
            label="First Name"
            maxlength="20"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
          ref="lastname"
            v-model="lastname"
            :rules="[() => !!lastname || 'This field is required']"
            label="Last Name"
            maxlength="20"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
          ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required',
            rules.email]"
            label="E-mail"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
          ref="tel"
          type="number"
            v-model="tel"
             :rules="[
              () => !!tel || 'This field is required',rules.counter]"
          label="Tel"
          maxlength="10"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
        </v-card>
<v-row>
  <v-col col="2" md="2">
        <v-btn
        dark
          color="orange"
          @click="submitPersonal() "
        >
          Continue
        </v-btn></v-col>
<v-col col="2" md="2">
        <v-btn @click="Booking=false,clearSearchForm()">Cancel</v-btn></v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          outlined
          max-height="300px"
        >  <template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
            v-model="date1"
            label="Check-In"
            maxlength="20"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
           
            v-model="date2"
            label="Check-Out"
            maxlength="20"
            readonly
          ></v-text-field>
        </v-col>
           <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
            v-model="day"
            label="Day"
            maxlength="2"
            readonly
          ></v-text-field>
        </v-col>
 <v-col cols="12" sm="6">
          <v-text-field
          color="orange"
            v-model="total_price"
            label="Price"
            maxlength="2"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
</template></v-card>
<v-row>
  <v-col col="2" md="2">
        <v-btn
        dark
           color="orange"
          @click="e1 = 3"
        >
          Continue
        </v-btn></v-col>
<v-col col="2" md="2">
        <v-btn @click="e1 = 1">Back</v-btn></v-col></v-row>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          width="800"
          max-height="700px"
          outlined
        >
        <v-container fluid>
 
    <v-radio-group v-model="option"  row>
      <v-radio label="Visa Card/Master Card" value="option1"   v-on:change="show = true,counterservice = false"></v-radio>
      <v-radio label="Counter Service" value="option2" v-on:change="counterservice = true,show = false"></v-radio>
    </v-radio-group>

    <!-- Form Payment (VISA) -->
   <v-card ref="formCredit" v-show="show">

        <v-card-title class="grey">
          <span class="headline"></span><div class="flex-grow-1"></div><v-card width="4cm" height="1.5cm">
        <v-img width="4cm" height="1.5cm" src='https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg'></v-img></v-card>
        </v-card-title>
        <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field ref="firstname_credit" label="firstname*" v-model="firstname_credit" :rules="[() => !!firstname_credit || 'This field is required']"
                              :error-messages="errorMessages" outlined color="orange"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field ref="lastname_credit" label="lastname*" v-model="lastname_credit" :rules="[() => !!lastname_credit || 'This field is required']" outlined color="orange"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field ref="Card_Number" label="Card Number* >0000222244446666" v-model="Card_Number" :rules="[() => !!Card_Number || 'This field is required']" outlined color="orange"></v-text-field>
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
          color="orange"
          ref="Expiry"
            v-model="Expiry"
            :rules="[() => !!Expiry || 'This field is required']"
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
                
                <v-text-field ref="code" label="Security code* >xxxx" v-model="code" :rules="[() => !!code || 'This field is required']" outlined color="orange"></v-text-field>
              </v-col>
            </v-row>
        </v-card-text>
               <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn  text @click="show = false">Close</v-btn>
          <v-btn color="orange" text @click="submitCredit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>

    <v-card v-show="counterservice">
      <v-card-title class="grey">
          <span class="headline"></span><div class="flex-grow-1"></div><v-card width="4cm" height="1.5cm">
        <v-img width="4cm" height="1.5cm" src='http://www.idealinthai.com/images/logo-CS-711.jpg'></v-img></v-card>
        </v-card-title>
        
        <br>
        <v-card-text>
           <v-row>
              <v-col cols="12" sm="6">
  Please pay within 30 minutes
  </v-col></v-row>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn  text @click="counterservice = false">Close</v-btn>
          <v-btn color="orange" text @click="postBooking(),Booking=false">Save</v-btn>
        </v-card-actions>
      </v-card>
        </v-card >
        
<v-row>
  <v-col col="2" md="2">
        <v-btn
         
         @click="e1 = 2"
        >
          Back
        </v-btn>
</v-col>
<v-col col="2" md="2">
        <v-btn @click="Booking= false,clearSearchForm()">Cancel </v-btn></v-col></v-row>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-card>
   </v-row>
    </v-dialog>
  </div>

<!-- Search Room -->
        <v-container ref="form" class="pa-4 text-center" >
          <v-row class="fill-height" align="center" justify="center">
            <template>
              <v-col cols="12" md="12" class="ma-12 pa-12">
                <v-hover v-slot:default="{ hover }">
                  <template>
                    <v-card
                      max-height="400"
                      max-width="700"
                      :elevation="hover ? 12 : 2"
                      :class="{ 'on-hover': hover }"
                      color="rgba(54, 53, 53, 0.544)"
                    >
                      <v-container>
                        <v-row>
                          <v-col cols="6" sm="6">
                            <v-menu
                              ref="datecheckin"
                              v-model="checkin"
                              :close-on-content-click="false"
                              :return-value.sync="date1"
                              transition="scale-transition"
                              offset-y
                              
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                               
                                <v-text-field
                                ref="date1"
                                  v-model="date1"
                                  
                                  :rules="[() => !!date1 || 'This field is required']"
                                  label="Check-In"
                                  prepend-icon="mdi-calendar"
                                  
                                  outlined
                                  shaped
                                  readonly
                                  
                                  v-on="on"
                                  dark
                                  required
                                ></v-text-field>
                               
                              </template>
                              <v-date-picker v-model="date1" no-title scrollable
                              :min="date">
                                <div class="flex-grow-1"></div>
                                <v-btn text color="primary" @click="datecheckin = false">Cancel</v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.datecheckin.save(date1),dateCheck()"
                                  
                                >OK</v-btn>
                              </v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-col cols="6" sm="6">
                            <v-menu
                              ref="datecheckout"
                              v-model="checkout"
                              :close-on-content-click="false"
                              :return-value.sync="date2"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                ref="date2"
                                  v-model="date2"
                                  :rules="[() => !!date2 || 'This field is required']"
                                  label="Check-Out"
                                  prepend-icon="mdi-calendar"
                                  outlined
                                  shaped
                                  readonly
                                  v-on="on"
                                  dark
                                ></v-text-field>
                              </template>
                              <v-date-picker v-model="date2" no-title scrollable
                              :min="date_checkout">
                                <div class="flex-grow-1"></div>
                                <v-btn text color="primary" @click="datecheckout = false">Cancel</v-btn>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="$refs.datecheckout.save(date2)"
                                >OK</v-btn>
                              </v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-col cols="6" sm="6">
                            
                            <v-select
                            ref="people"
                              v-model="people"
                              :rules="[() => !!people || 'This field is required']"
                              :error-messages="errorMessages"
                              :items="guestNumber"
                              dark
                              label="People"
                              outlined
                              shaped
                              prepend-icon="mdi-human"
                              required
                            ></v-select>
                          
                          </v-col>

                          <v-col cols="6" sm="6">
                            <v-select
                            ref="type"
                              v-model="type"
                              :rules="[() => !!type || 'This field is required']"
                              :error-messages="errorMessages"
                              :items="items"
                              dark
                              label="Type"
                              outlined
                              shaped
                              prepend-icon="mdi-hotel"
                              required
                            ></v-select>
                          </v-col>

                          <v-col cols="12" sm="12">
                            <button
                              @click="postSearch()"
                              color="grey"
                              dark
                              class="button"
                            >
                              <span>Check</span>
                            </button>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-container>
     
      </v-img>
    </v-card>
   
 <v-footer  dark >
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
      Check: false,
      Booking:false,
      show: false,
      counterservice: false,
      ButtonBookingNow: false,
      e1: '',
      option:'',
      date:'',
      rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length == 10 || '10 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      data: [],
      result: [],
      data_booking:[],
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      items: ["A", "B", "C"],
      guestNumber: ["1", "2", "3", "4"],
      checkin: "",
      checkout: "",
      type: "",
      people: "",
      price: '',
      date_checkout:'',
      transparent: "rgba(255, 255, 255, 0)",
      date1: '',
      date2: '',
      
      datecheckin: false,
      datecheckout: false,
      Card_Number:'',
      Expiry:'',
      code:'',
      firstname_credit:'',
      lastname_credit:'',
      firstname:'',
      lastname:'',
      email:'',
      tel:'',
      roomID:[],
      guest:[],
      day:[],
      bookingID:'',
      total_price:'',
      room_empty:'',
      errorMessages: '',
      formHasErrors: false,
      menu:''
    };
  },
  created() {
    this.date = new Date().toISOString().substr(0, 10)
    
    // this.dateCheck()
    // this.getResult();
   
    
  },
  computed: {
      form () {
        return {
          date1: this.date1,
          date2: this.date2,
          people: this.people,
          type: this.type,
          
         
        }
      },
       formPersonal () {
        return {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          tel: this.tel,
          
         
        }
      },
      formCredit () {
        return {
          firstname_credit: this.firstname_credit,
          lastname_credit: this.lastname_credit,
          Card_Number: this.Card_Number,
          Expiry: this.Expiry,
          code: this.code
          
          
         
        }
      },
    },
   
  methods: {
    dateCheck(){
      console.log(this.date1)
      var formatdate = new Date(this.date1)
      this.date_checkout = formatdate;  
      this.date_checkout.setDate(this.date_checkout.getDate() +1);
       this.date_checkout = this.date_checkout.toISOString().substr(0, 10)
    },
    
    check(){
        if(this.people && this.type && this.date1 && this.date2){
          this.Check = true
        }
    },
checkPersonal(){
        if(this.firstname && this.lastname && this.email && this.tel){
          this.e1 = 2
        }
    },
    checkCredit(){
        if(this.firstname_credit && this.lastname_credit && this.Card_Number && this.code){
          this.postBooking(),
          this.Booking = false
         
        }
    },
    clearSearchForm() {
      this.date1 = '',
      this.date2 = '',
      this.people = '',
      this.type = ''

    },
    
    submitPersonal() {
        this.formHasErrors = false

        Object.keys(this.formPersonal).forEach(f => {
          if (!this.formPersonal[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
          

        })
        this.checkPersonal()
    },
    submitCredit() {
        this.formHasErrors = false

        Object.keys(this.formCredit).forEach(f => {
          if (!this.formCredit[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
          

        })
        this.checkCredit()
    },
    postSearch() {

      this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      this.roomPrice(),
      this.check(),
      console.log("dsfdgg");
      let formData = new FormData();
      formData.append("check_in", this.date1);
      formData.append("check_out", this.date2);
      formData.append("guests_number", this.people);
      formData.append("type", this.type);

      this.axios
        .post("http://192.168.74.135:5000/search_room", formData)
        .then(response => {
          const myObjStr = JSON.stringify(response.data.Output);
          const search = JSON.parse(myObjStr)
          this.roomID.push(search['room-id'])
          this.guest.push(search['guests_number'])
          this.day.push(search['days_number'])
          this.room_empty = search['room_empty']
          this.data.push(response.data.Output);
          console.log(search['room-id']);
          this.totalPrice()
         
           if(this.room_empty != '0'){
        
        this.ButtonBookingNow = true
      }
      else if(this.room_empty == '0'){
        this.$swal('Full','Type: '+this.type +' / '+'Room Empty: '+this.room_empty,'error')
        this.Check = false
        this.clearSearchForm() 
      }
      
        });
       
    },
  
    postBooking() {
      console.log("postBooking");
      let formDataBooking = new FormData();
      formDataBooking.append("room_id", this.roomID);
      formDataBooking.append("firstname", this.firstname);
      formDataBooking.append("lastname", this.lastname);
      formDataBooking.append("email", this.email);
      formDataBooking.append("phone", this.tel);
      formDataBooking.append("date_checkin", this.date1);
      formDataBooking.append("date_checkout", this.date2);
      formDataBooking.append("guests_number", this.guest);
      formDataBooking.append("days_number", this.day);
      formDataBooking.append("booking_price", this.total_price);
      formDataBooking.append("select_payment", this.option);

      this.axios
        .post("http://192.168.74.135:5000/booking", formDataBooking)
        .then(response => {
          this.bookingID = response.data.booking_id
          console.log(response.data.booking_id);
          if (this.option == 'option1'){
            this.$swal('Payment Success','Your Booking ID: ' + this.bookingID,'success')
            this.Booking = false;
          }
          else if(this.option == 'option2'){
            this.$swal('Please pay within 30 minutes','Your Booking ID: ' + this.bookingID,'warning')
            this.Booking = false;
          }
        });
    },
    roomPrice(){
      if (this.type == 'A') {
        this.price = '1000'
      }
      else if (this.type == 'B') {
        this.price = '500'
      }
      else{
        this.price = '300'
      }
    },
    totalPrice(){
     this.total_price = this.price * this.day
    },
   
    goPage(link) {
      this.$router.push(link);
    },
    confirm() {
        this.$swal('Payment Success','','success')
        this.Booking = false;
    },
   confirmCounterservice(){
     this.$swal('Please pay within 30 minutes','','success')
        this.Booking = false;
   }
  }
};
</script>
<style scoped>

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: rgba(253, 253, 253, 0.34);
  border: none;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>