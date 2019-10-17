<template>
  <div >
      <v-container  >
<v-text-field @click="check" label="Enter Booking ID*" v-model="booking" outlined color="grey"></v-text-field>
<v-simple-table ><template v-slot:default><thead>
        <tr class="grey lighten-1">
          <th class="text-center">BOOKING ID</th>
          <th class="text-center">ROOM</th>
          <th class="text-center">DAYS</th>
          <th class="text-center">CHECK-IN</th>
          <th class="text-center">CHECK-OUT</th>
          <th class="text-center">STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="show" v-for="item in name" :key="item.name">
          <td v-if="item.bookingid==booking" class="grey lighten-4 text-center">{{ item.bookingid }}</td>
          <td v-if="item.bookingid==booking" class="grey lighten-4 text-center">{{ item.roomid }}</td>
          <td v-if="item.bookingid==booking" class="grey lighten-4 text-center">{{ item.duration }}</td>
          <td v-if="item.bookingid==booking" class="grey lighten-4 text-center">{{ item.start }}</td>
          <td v-if="item.bookingid==booking" class="grey lighten-4 text-center">{{ item.end }}</td>
          <td v-if="item.payment==0 && item.bookingid==booking" class="red text-center">PAYMENT</td>
          <td v-else-if="item.payment==1 && item.bookingid==booking" class="green text-center">RESERVE</td>
          <td v-else-if="item.payment==2 && item.bookingid==booking" class="orange text-center">TIME OUT</td>
        </tr>
      </tbody>
  </template></v-simple-table>
  </v-container></div>
</template>

<script>
export default {
data () {
    return {
      show: false,
      booking: '',
      name: []
    }},
created () {
    this.getData()
  },
methods: {
    getData () {
      this.axios.get(process.env.VUE_APP_API + '/show_booking').then((response) => {
        console.log(response.data)
        this.name = response.data
      })
    },
    check () {
      this.show = true
    }
  }

}
</script>
