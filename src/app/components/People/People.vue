<template lang="pug">
.bob2(v-if='person != null')
  img.item_avatar(:src='person.picture.thumbnail', v-bind:class="[person.gender]")
  | {{person.name.first}}
  | {{person.name.last}}
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../store'
import router from '../../router'
Vue.use(Vuex)

export default {
  name: 'People',
  router: router,
  data () {
    return {
      slug: this.$route.params.slug,
      person: null
    }
  },
  mounted () {
    this.$ls.set('last-page', 'profile')
  },
  methods: {
    getPeople (i) {
      if (store.state.persons.length === 0) {
        this.$router.push('/peopleList')
      } else {
        this.person = store.state.persons[i]
      }
    }
  },
  metaInfo () {
    return {
      title: `${this.person.name.first} ${this.person.name.last}`
    }
  },
  created () {
    this.getPeople(this.$route.params.slug)
    Vue.nextTick(function () {
    // // list is rendered
    })
  }
}
</script>
<style lang='scss' scoped>
  @import './style.scss';
</style>
