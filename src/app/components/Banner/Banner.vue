<template lang="pug">
#banner
  form
    v-select(class='convSel', :value.sync='selected', :options='options', :searchable='false')
    label(for='role') I'm a
      select(id='role', class='convSel')
        option(value='student') Student
        option(value='designer') Designer
    label(for='product') looking for
      select(id='product', class='convSel')
        option(value='website') a website
        option(value='brand') a brand identity
        option(value='marketing') a marketing plan
        option(value='advert') a new advert
        option(value='job') a new job
        option(value='original') an original idea
</template>
<script>
import vSelect from 'vue-select'
export default {
  name: 'Banner',
  components: {
    vSelect
  },
  data () {
    return {
      selected: null,
      options: ['foo', 'bar', 'baz']
    }
  }
}
</script>
<style lang='scss' src='./style.scss'></style>
