<template lang='pug'>
#about
  h1 About
</template>
<script>
export default {
  name: 'About',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'About Us'
  },
  mounted () {
    this.$ls.set('last-page', 'about')
  }
}
</script>
