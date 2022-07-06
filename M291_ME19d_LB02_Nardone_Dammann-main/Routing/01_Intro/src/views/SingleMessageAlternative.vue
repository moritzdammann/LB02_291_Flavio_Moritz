<template>
  <div>
    <h1>Single Message</h1>
       {{content}}
  </div>
</template>

<script>
export default {
  name: "SingleMessage",
  props: {
    content: {
      default: '',
      type: String
    }
  }
}
</script>
