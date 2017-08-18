<template>
  <div></div>
</template>

<script type="text/ecmascript-6">
  import io from 'socket.io'
  export default {
    data() {
      return {
        socket: ''
      }
    },
    created() {
      let that = this
      this.socket = io.connect('localhost:8081')
      this.socket.on('message', (obj) => {
        that.$store.commit('addroomdetailinfos', obj)
        window.scrollTo(0,900000)
      })
    }
  }
</script>