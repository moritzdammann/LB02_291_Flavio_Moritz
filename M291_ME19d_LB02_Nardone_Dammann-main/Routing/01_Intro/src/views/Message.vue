<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Message</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Hi'
      ]
    }
  }
}
</script>
