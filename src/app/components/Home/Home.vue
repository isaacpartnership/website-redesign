<template lang="pug">
#home
  Banner
  h1 Home
  GridNews
</template>
<script>
import Banner from '../Banner/Banner'
import GridNews from '../Grid/News'
export default {
  name: 'Home',
  components: {
    Banner,
    GridNews
  },
  mounted () {
    this.$ls.set('last-page', 'home')
  }
}
</script>
<style lang='scss' scoped>
  @import './style.scss';
</style>
