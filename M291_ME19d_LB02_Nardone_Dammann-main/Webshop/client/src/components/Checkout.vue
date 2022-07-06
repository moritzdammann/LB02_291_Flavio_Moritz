<template>
  <div>
    <h2 class="titel">CHECKOUT</h2>
    Zu bezahlen CHF {{ cartTotal.toFixed(2) }}.
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Checkout</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Checkout processed!');
    }
  }
}
</script>

