import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/components/Home/Home'

import Blog from '@/components/Blog/Blog'

import Post from '@/components/Blog/Post'

import Courses from '@/components/Courses/Courses'

import Course from '@/components/Courses/Course'

import Projects from '@/components/Projects/Projects'

import Project from '@/components/Projects/Project'

import Profile from '@/components/User/Profile'

import SignIn from '@/components/User/SignIn'

import SignUp from '@/components/User/SignUp'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },

    {
      path: '/Blog/:id',
      component: Post
    },

    {
      path: '/Courses',
      name: 'Courses',
      component: Courses
    },

    {
      path: '/Courses/:id',
      component: Course
    },

    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },

    {
      path: '/Projects/:id',
      component: Project
    },

    {
      path: '/:id',
      component: Profile
    },

    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },

    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }

  ]
})
