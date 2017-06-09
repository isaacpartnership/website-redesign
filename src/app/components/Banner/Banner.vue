<template lang="pug">
#banner
  p(class="top_Heading") What would you like from us?
  form
    div(class="idLikeTo_Cont")
      p(class="idLikeTo_Text") I'd like to
      div(class="DDown_Cont_LikeTo")
        v-select( :value.sync='selected', :options='likeToOpt', :searchable='false', :on-change='consoleCallback')
  br
  div(class="Spacing")
  br
  p(class="top_Heading") What are you looking for?
    form
      div(class="lookFor_Cont")
        p(class="imA_text") I'm a
        div(class="DDown_Cont_LookFor")
          v-select( :value.sync='selected', :options='whatAreYouOpt', :searchable='false', :on-change='consoleCallback')
        br
        br
        p(class="lookingFor_text") looking for a
        div(class="DDown_Cont_LookFor")
          v-select( :value.sync='selected', :options='lookForOpt', :searchable='false', :on-change='consoleCallback')

//    div(class='NLF-Cont')
      div(class='NLF-InnerCont')
        div(class='NLF-role')
          label(for='role') I'm a
            select(id='role', class='convSel DropD_Len st_size')
              option(value='student') Student
              option(value='designer') Designer
        div(class='NLF-product')
          label(for='product') looking for
            select(id='product', class='convSel DropD_Len')
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
    components: {vSelect},
    methods: {
      consoleCallback (val) {
        JSON.stringify(val)
      }
    },
    data () {
      return {
        selected: null,
        likeToOpt: ['see your work', 'email you', 'call you', 'receive a callback'],
        whatAreYouOpt: ['business owner', 'student', 'designer', 'interested person', 'competitor'],
        lookForOpt: ['website design', 'brand identity', 'marketing plan', 'new advert', 'new job', 'original idea']
      }
    }
  }
</script>

<style lang='scss' src='./style.scss' scoped></style>
