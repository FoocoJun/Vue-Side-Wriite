import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'

// 중첩 라우팅 children -> create 페이지 내 생성도우미 공유를 위해 사용
// 동적 라우팅 :username -> 작품별, 유저별 페이지 생성을 위해 사용

const routes = [
  {
    path: '/',
    name: 'MainPageView',
    component: MainPageView
  },
  {
    path: '/user/:username',
    name: 'MyPageView',
    component: () =>
      import(/* webpackChunkName: "user" */ '../views/MyPageView.vue')
  },
  {
    path: '/create',
    name: 'CreatePageView',
    component: () =>
      import(/* webpackChunkName: "create" */ '../views/CreatePageView.vue'),
    children: [
      {
        path: 'work',
        name: 'CreateWorkView',
        component: () =>
          import(/* webpackChunkName: "create" */ '../views/CreateWorkView.vue')
      },
      {
        path: 'character',
        name: 'CreateCharView',
        component: () =>
          import(/* webpackChunkName: "create" */ '../views/CreateCharView.vue')
      }
    ]
  },
  {
    path: '/:workId/detail',
    name: 'WorkDetailView',
    component: () =>
      import(/* webpackChunkName: "WorkDetail" */ '../views/WorkDetailView.vue')
  },
  {
    path: '/:workId/write',
    name: 'WorkWriteStoryView',
    component: () =>
      import(
        /* webpackChunkName: "WorkWriteStory" */ '../views/WorkWriteStoryView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
