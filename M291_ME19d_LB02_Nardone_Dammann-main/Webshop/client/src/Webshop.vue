<template>
  <div>
    <div id="nav">
      <router-link to="/home">Home</router-link>
    </div>
    <b-container fluid>
      <div style="margin: 5rem"/>
      <Products/>
      <div style="margin-top: 5rem"/>
      <Cart/>
      <div style="margin-top: 5rem"/>
      <Checkout/>
    </b-container>
  </div>

</template>
<script>
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'

// EINFÜGEN
// import header from './components/header.vue'

export default {
  name: 'app',
  components: {
    Products, Cart, Checkout,
    // EINFÜGEN
    // 'app-header':header
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>