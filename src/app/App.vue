<script>
  import Home from './components/Home/Home'
  import PeopleList from './components/PeopleList/PeopleList'
  import About from './components/About/About'

  export default {
    name: 'app',
    metaInfo: {
      // if no sub-components specify a metaInfo.title, this title will be used
      title: 'Marketing, Branding, Websites',
      // all titles will be injected into this template
      titleTemplate: '%s | Isaac Partnership'
    },
    components: {
      Home,
      PeopleList,
      About
    }
  }
</script>

<template lang="pug">
  #app
    header#header.header
      router-link(to='/home')#logo
        img(src='/assets/img/logo.svg')
      nav.menu
        ul(id="topNav")
          li.home
            router-link(to='/home') Home
          li.strategy
            router-link(to='/strategy') Strategy
          li.jobs
            router-link(to='/jobs') Jobs
          li.peopleList
            router-link(to='/peopleList') People
          li.about
            router-link(to='/about') About
    transition(name='fade', mode='out-in')
      router-view.router-view
</template>

<style lang='scss' src='./style.scss'></style>
