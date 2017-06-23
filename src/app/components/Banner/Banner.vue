<template lang="pug">
#banner
  div(class="Banner_OuterCont")
    div(class="banner_Cont")
      p(class="top_Heading") What would you like from us?
      form
        div(class="idLikeTo_Cont")
          p(class="idLikeTo_Text") I'd like to
          div(class="DDown_Cont_LikeTo")
            v-select( :value.sync='selected', :options='likeToOpt', :searchable='false', :on-change='consoleCallback')
    br
    div(class="Spacing")
    br
    div(class="Look_OuterCont")
      p(class="top_Heading") What are you looking for?
        form
          div(class="lookFor_InnerCont")
            p(class="imA_text") I'm a
            div(class="DDown_Cont_LookFor")
              v-select( :value.sync='selected', :options='whatAreYouOpt', :searchable='false', :on-change='consoleCallback' id='iAmA_LookFor')
              Button(type="button" id="toggle_Btn" class="not-toggled" disabled) submit
            br
            br
          div(class="lookingFor_Cont")
            p(class="lookingFor_text") looking for a
            div(class="DDown_Cont_LookFor")
              v-select( :value.sync='selected', :options='lookForOpt', :searchable='false', :on-change='consoleCallback')
      div(class="Spacing")

</template>

<script>
  import vSelect from 'vue-select'
  export default {
    components: {vSelect},
    methods: {
      consoleCallback (val) {§
        let tbutton = document.getElementById('toggle_Btn')
        tbutton.removeAttribute('disabled')
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
