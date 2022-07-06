<template>
  <div class="container">
    <div class="user-input">
      <button class="button--navi" @click="goHome()">Go to Home</button>
      <button class="button--navi" @click="goBack()">Go Back</button>
      <button class="button--navi" @click="goForward()">Go Forward</button>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
    goBack() {
      this.$router.go(-1);
    }, goForward() {
      this.$router.go(1);
    }
  }
}
</script>

<style lang="scss">
$color-green: #4fc08d;
$color-grey: #2c3e50;

.container {
  max-width: 600px;
  margin: 80px auto;
}


.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;

  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

// Buttons
button {
  appearance: none;
  padding: 10px;
  margin: 2px;

  font-weight: bold;
  border-radius: 10px;
  border: none;
  background: $color-grey;
  color: white;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--navi {
  display: block;
  margin: 0 auto;
  background: #FAEB1F;
  border-radius: 0px;
  color: black;
}

</style>
