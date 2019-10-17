<template>
  <div>
      <v-container >
<v-simple-table><template v-slot:default><thead>
        <tr class="black
        ">
          <th class="white--text text-center">BOOKING ID</th>
          <th class="white--text text-center">ROOM</th>
          <th class="white--text text-center">DAYS</th>
          <th class="white--text text-center">CHECK-IN</th>
          <th class="white--text text-center">CHECK-OUT</th>
          <th class="white--text text-center">STATUS</th>
          <th class="white--text text-center">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in name" :key="item.name">
          <td v-if="item.roomid[0]=='A'" class="text-center grey lighten-5">{{ item.bookingid }}</td>
          <td v-else-if="item.roomid[0]=='B'" class="text-center grey lighten-3">{{ item.bookingid }}</td>
          <td v-else-if="item.roomid[0]=='C'" class="text-center grey lighten-1">{{ item.bookingid }}</td>
          <td v-else></td>
          <td v-if="item.roomid[0]=='A'" class="text-center grey lighten-5">{{ item.roomid }}</td>
          <td v-else-if="item.roomid[0]=='B'" class="text-center grey lighten-3">{{ item.roomid }}</td>
          <td v-else-if="item.roomid[0]=='C'" class="text-center grey lighten-1">{{ item.roomid }}</td>
          <td v-else></td>
          <td v-if="item.roomid[0]=='A'" class="text-center grey lighten-5">{{ item.duration}}</td>
          <td v-else-if="item.roomid[0]=='B'" class="text-center grey lighten-3">{{ item.duration}}</td>
          <td v-else-if="item.roomid[0]=='C'" class="text-center grey lighten-1">{{ item.duration}}</td>
          <td v-else></td>
          <td v-if="item.roomid[0]=='A'" class="text-center grey lighten-5">{{ item.start }}</td>
          <td v-else-if="item.roomid[0]=='B'" class="text-center grey lighten-3">{{ item.start }}</td>
          <td v-else-if="item.roomid[0]=='C'" class="text-center grey lighten-1">{{ item.start }}</td>
          <td v-else></td>
          <td v-if="item.roomid[0]=='A'" class="text-center grey lighten-5">{{ item.end }}</td>
          <td v-else-if="item.roomid[0]=='B'" class="text-center grey lighten-3">{{ item.end }}</td>
          <td v-else-if="item.roomid[0]=='C'" class="text-center grey lighten-1">{{ item.end }}</td>
          <td v-else></td>
          <td v-if="item.payment===0" class="red text-center">PAYMENT</td>
          <td v-else-if="item.payment===1" class="green text-center">RESERVE</td>
          <td v-else class="orange text-center">TIME OUT</td>
          <td class="text-center"><v-icon color="red" @click="deleteDetail(item.bookingid)">mdi-delete</v-icon></td>
        </tr>
      </tbody></template></v-simple-table>
  </v-container></div>
</template>

<script>
export default {
data () {
    return {
      name: [],
      check: {}
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
      deleteDetail (x) {
      this.axios.delete(process.env.VUE_APP_API + '/delete_booking/' + x).then((response) => { 
        console.log(response.data)
        this.getData()
        })
      // this.$router.push('/ROOM1')
      
      // this.$emit('checkStatus', true)
    } 
    }
  }
</script>
<style>
.block1 {
  background-color: rgb(88, 88, 88);
  font: white;
}
</style>
