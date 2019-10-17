<template>
  <div class="green lighten-3">
      <v-container class="green lighten-4">
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">.........</th>
        </tr>
      </thead>
    <v-btn class="text-center yellow lighten-3" @click="openModal">ADD CREDIT</v-btn>
    <v-btn class="text-center yellow lighten-3" @click="openModal2">ADD PAYMENT</v-btn>
       </template> 
       </v-simple-table>
       <ModalAddPerson ref="popup" @checkStatus="getData"></ModalAddPerson>
        <ModalAddpayment ref="popuppayment" @checkStatus="getData"></ModalAddpayment>
 </v-container>
  </div>
</template>
<script>
import ModalAddPerson from '../components/Bottonadd'
import ModalAddpayment from '../components/Addpayment'
export default {
  components: { ModalAddPerson,ModalAddpayment },
  data () {
    return {
      hotel: []
    }
  },
  // dialog: () => ({
  //   dialog: false
  // }),
  created () {
    this.getData()
  },
  methods: {
    openModal () {
      this.$refs.popup.open()
    },
    openModal2 (x) {
      this.$refs.popuppayment.open(x)
    }
  }
}
</script>
