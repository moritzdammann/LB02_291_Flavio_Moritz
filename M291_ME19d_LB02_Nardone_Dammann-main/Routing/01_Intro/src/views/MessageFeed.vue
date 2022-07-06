<!--
    demo-02: Implementing and Adding a Message Feed Page Using Vue Router
    We are going to create a new page that displays a list of messages to
    the user. Users will be able to visit this page whenever they enter the
    localhost:8080/messages path in the browser.
 -->
<template>
  <div>
    <h1>Message Feed</h1>
    <div v-for="(m, i) in messages" :key="i" >
      <router-link :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m }}
      </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Was darf ich ans Openair mitnehmen?',
        'Ist mein Ticket von 2020 noch gültig?'
      ]
    }
  }
}
</script>
