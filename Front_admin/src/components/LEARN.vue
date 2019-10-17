<template>
<v-container>
    <div>          
 <v-data-table
    :headers="headers"
    :items="data"
    sort-by="id_member"
    class="elevation-1"
  ></v-data-table>
   
    </div>

</v-container>
</template>
<script>


export default {
 
    data(){
        return{
            data:[],
             headers: [
          
          { text: 'Admin_ID', value: 'Admin_ID' },
          { text: 'Name', value: 'Name' },
          { text: 'Tel', value: 'Tel' },
        ],
        }
    },
    created () {
        this.getData()
    },
 methods: {
    getData () {
        this.axios.get('http://127.0.0.7:2700/learn').then((response) => {
         this.data=response.data;
         console.log(response.data)
        })
        } 
        }

  
 }

</script>