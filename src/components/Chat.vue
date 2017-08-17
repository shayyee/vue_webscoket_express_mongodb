<template>
  <div></div>
</template>

<script type="text/ecmascript-6">
  import io from 'socket.io'
  export default {
    created() {
      let that = this
      this.socket = io.connect('localhost:8081')

    }
  }
</script>