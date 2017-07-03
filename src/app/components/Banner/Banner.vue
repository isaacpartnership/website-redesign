<template lang="pug">
#banner
  div(class="OuterCont")
    div(class="banner_Cont" id="banner_Cont")
      p(class="top_Heading") What would you like from us?
      form
        div(class="idLikeTo_Cont")
          p(class="idLikeTo_Text") I'd like to
          div(class="DDown_Cont_LikeTo")
            v-select( :value.sync='selected', :options='likeToOpt', :searchable='false', :on-change='firstChange')
    br
    div(class="Spacing")
    br
    div(id="Look_OuterCont")
      p(class="top_Heading") What are you looking for?
        form
          div(class="lookFor_InnerCont hide")
            p(class="imA_text") I'm a
            div(class="DDown_Cont_LookFor")
              v-select( :value.sync='selected', :options='whatAreYouOpt', :searchable='false', :on-change='secondChange' id='iAmA_LookFor')
            br
            br
          div(class="lookingFor_Cont hide" id="lookingFor_Cont")
            p(class="lookingFor_text") looking for a
            div(class="DDown_Cont_LookFor")
              v-select( :value.sync='selected', :options='lookForOpt', :searchable='false', :on-change='thirdChange')
      div(class="Spacing")
    Button(type="button" id="toggle_Btn" class="not-toggled" disabled) submit

</template>

<script>

  import vSelect from 'vue-select'
  export default {
    components: {vSelect},
    methods: {
      hideFirst () {
        document.getElementById('Banner_Cont')
      },
      firstChange (val) {
        document.getElementById('Look_OuterCont').style.display = 'block'
        document.getElementById('banner_Cont').style.display = 'none'
        console.log('show')
        document.getElementById('toggle_Btn').setAttribute('disabled', true)
      },
      secondChange (val) {
        document.getElementById('Look_OuterCont').style.display = 'none'
        document.getElementById('lookingFor_Cont').style.display = 'block'
        console.log('hide')
        document.getElementById('toggle_Btn').removeAttribute('disabled')
      },
      thirdChange (val) {
        console.log('something')
      }
    },

    data () {
      return {
        selected: null,
        likeToOpt: ['see your work', 'email you', 'call you', 'receive a callback'],
        whatAreYouOpt: ['business owner', 'student', 'designer', 'interested person', 'competitor'],
        lookForOpt: ['website design', 'brand identity', 'marketing plan', 'new advert', 'new job', 'original idea']
      }
    },
    mounted () {
    }
  }
</script>
