<template>
<div>
    <ADMIN/>
    <Footer/>
</div>
</template>

<script>
import ADMIN from '../components/ADMIN'
import Footer from '../components/Footer'

export default {
  components: {
    ADMIN, Footer
  }
}
</script>
<style>
.bg {
  background-color: rgb(247, 223, 223);
}
.bt {
  background-color: rgb(250, 225, 225);
  padding: auto;
  margin: auto;
  width: 100%;
  max-width: 450px;
}
</style>
