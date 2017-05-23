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
  }
}
</script>
<style lang='scss' src='./style.scss'></style>
