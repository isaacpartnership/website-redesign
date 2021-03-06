import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Parent = {
  template: `
    <div class="parent">
      <transition name="fade">
        <router-view class="child-view"></router-view>
      </transition>
    </div>`
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: require('../components/Home/Home.vue')
    },
    { path: '/peopleList',
      component: Parent,
      children: [
        {
          path: '',
          component: require('../components/PeopleList/PeopleList.vue')
        },
        {
          path: ':slug?',
          name: 'people',
          component: require('../components/People/People.vue')
        }
      ]
    },
    {
      path: '/about',
      component: () => require.ensure([], () => require('../components/About/About.vue'), 'About'),
      name: 'about'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
