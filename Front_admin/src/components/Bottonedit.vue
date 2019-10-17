<template>
  <v-row justify="center">
    <v-dialog v-model="Edit" persistent max-width="500px">
      <template v-slot:activator="{ on }">
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit EVENT</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field label="TITLE" v-model="TITLE" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="DATA" v-model="data"></v-text-field>
              </v-col>
              <v-col cols="6">
               <v-file-input multiple label="File input"></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="postDetail">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data () {
    return {
      TITLE: '',
      DATA: '',
      Edit: false
    }
  },
  methods: {
    open (e) {
      console.log('open')
      this.TITLE = e.TITLE
      this.DATA = e.DATA
      this.Edit = true
    },
    putDetail () {
      var data = {
        TITLE: this.TITLE,
        DATA: this.DATA
      }
      this.axios.put(process.env.VUE_APP_API + '/EVENT' + this.id, data).then((response) =>
      { console.log(response.data)
        if (response.data.message === 'updatesuccess') {
          this.$swal('แก้ไขข้อมูลสำเร็จ', '', 'success')
          this.$emit('checkStatus', true)
          this.clear()
          this.Edit = false
        } else { this.$swal('ล้มเหลว', 'กรุณาลองใหม่อีกครั้ง', 'error') }
      })
    },
    clear () {
      this.TITLE = ''
      this.data = ''
    }
  }
}
</script>
