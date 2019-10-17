import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
// import VueSweetalert2 from 'vue-sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'

// Vue.use(VueSweetalert2)
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
