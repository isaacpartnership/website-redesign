<template lang="pug">
  include ./PeopleList.tpl.pug
</template>
<script>
import store from '../../store'
import UserService from '../../services/UserService'

export default {
  name: 'PeopleList',
  metaInfo: {
    title: 'Our Team'
  },
  data () {
    return {
      environment: process.env.NODE_ENV,
      API_endPoint: process.env.API_endPoint,
      gender: 'all',
      persons: store.state.persons,
      pending: false
    }
  },
  methods: {
    getPeople () {
      return new Promise((resolve, reject) => {
        if (store.state.persons.length === 0) {
          UserService.get().then(response => {
            response.json().then(data => {
              let parsed = []
              let i = 0
              for (let p of data.results) {
                let clone = Object.assign({}, p)
                clone.id = i++
                parsed.push(clone)
              }
              store.state.persons = this.persons = parsed
              this.pending = false
              resolve(parsed.length)
            })
            .catch(function (error) {
              reject(error)
            })
          })
        } else {
          this.pending = false
          this.persons = store.state.persons
          resolve(this.persons.length)
        }
      })
    },
    reload () {
      this.pending = true
      this.getPeople(10)
    }
  },
  computed: {
    filteredPeople () {
      return this.gender === 'all' ? this.persons : this.persons.filter(person => person.gender === this.gender)
    }
  },
  mounted () {
    this.$ls.set('last-page', 'team')
    this.reload()
  }
}
</script>
<style lang='scss' scoped>
  @import './style.scss';
</style>
