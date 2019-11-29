<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
</style>
<script>
import storage from './model/storage'
export default {
  created() {
    let aaa=storage.get('tolink')
    if(aaa){
      this.$store.state.token=aaa
    }
  },
  watch: {
    "$store.state.token": {
      handler: function() {
        storage.set("tolink", this.$store.state.token);
      },
      deep:true
    }
  }
}
</script>
