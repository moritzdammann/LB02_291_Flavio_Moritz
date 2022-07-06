<template>
  <div>
    <h2 class="titel">WARENKORB</h2>
    <table>
      <thead>
      <tr>
        <th>Ticket</th>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <th>Anzahl</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, idx) in cart" :key="idx">
        <td>{{ product.name }}</td>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <td>{{ product.quantity  }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
}
</script>
