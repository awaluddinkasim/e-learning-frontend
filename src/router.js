

import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
    // =============================================================================
    // USER LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            beforeEnter: (to, from, next) => {
              if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "user") {
                return next()
              }
              return router.push('/login')
            },
            children: [
                {
                    path: '/',
                    redirect: '/user/dashboard'
                },
                {
                    path: '/user/dashboard',
                    name: 'dashboard-user',
                    component: () => import('./views/pages/user/Dashboard.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas',
                    name: 'kelas-user',
                    component: () => import('./views/pages/user/Kelas.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode',
                    name: 'kelas-user',
                    component: () => import('./views/pages/user/KelasDetail.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode/materi',
                    name: 'materi-user',
                    component: () => import('./views/pages/user/Materi.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode/tugas',
                    name: 'tugas-user',
                    component: () => import('./views/pages/user/Tugas.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode/tugas/:id',
                    name: 'upload-tugas-user',
                    component: () => import('./views/pages/user/TugasUpload.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode/kuis',
                    name: 'kuis-user',
                    component: () => import('./views/pages/user/Kuis.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/kelas/:kode/kuis/:id',
                    name: 'kuis-jawaban-user',
                    component: () => import('./views/pages/user/KuisJawaban.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/conference',
                    name: 'conference-user',
                    component: () => import('./views/pages/user/conference/Kelas.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/user/me',
                    name: 'user-profile',
                    component: () => import('./views/pages/user/Profile.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
            ],
        },
        {
          path: '',
          component: () => import('./layouts/main/Main.vue'),
          beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "dosen") {
              return next()
            }
            return router.push('/login')
          },
          children: [
            {
                path: '/dosen',
                redirect: '/dosen/dashboard'
            },
            {
                path: '/dosen/dashboard',
                name: 'dashboard-dosen',
                component: () => import('./views/pages/dosen/Dashboard.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas',
                name: 'kelas-dosen',
                component: () => import('./views/pages/dosen/Kelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas/:kode',
                name: 'detail-kelas-dosen',
                component: () => import('./views/pages/dosen/KelasDetail.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas/:kode/tugas',
                name: 'daftar-tugas-dosen',
                component: () => import('./views/pages/dosen/TugasKelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas/:kode/materi',
                name: 'daftar-materi-dosen',
                component: () => import('./views/pages/dosen/Materi.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kelas/:kode/kuis',
                name: 'daftar-kuis-dosen',
                component: () => import('./views/pages/dosen/Kuis.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kuis',
                name: 'kuis-masuk-dosen',
                component: () => import('./views/pages/dosen/kuis/Kelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kuis/:kode',
                name: 'data-kuis-masuk-dosen',
                component: () => import('./views/pages/dosen/kuis/Kuis.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/kuis/:kode/:id',
                name: 'list-kuis-masuk-dosen',
                component: () => import('./views/pages/dosen/kuis/ListKuis.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/tugas-masuk',
                name: 'tugas-masuk-dosen',
                component: () => import('./views/pages/dosen/tugasMasuk/Kelas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/tugas-masuk/:kode',
                name: 'data-tugas-masuk-dosen',
                component: () => import('./views/pages/dosen/tugasMasuk/Tugas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/tugas-masuk/:kode/:id',
                name: 'list-tugas-masuk-dosen',
                component: () => import('./views/pages/dosen/tugasMasuk/ListTugas.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/dosen/me',
                name: 'dosen-profile',
                component: () => import('./views/pages/dosen/Profile.vue'),
                meta: {
                    rule: 'editor',
                }
            },
          ],
        },

        {
          path: '',
          component: () => import('./layouts/main/Main.vue'),
          beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated'] && store.getters['auth/userRole'] == "admin") {
              return next()
            }
            return router.push('/admin/login')
          },
          children: [
            {
                path: '/admin',
                redirect: '/admin/dashboard',
            },
            {
                path: '/admin/dashboard',
                name: 'dashboard-admin',
                component: () => import('./views/pages/admin/Dashboard.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/admin/dosen',
                name: 'admin-daftar-dosen',
                component: () => import('./views/pages/admin/dosen/user-list/UserList.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/admin/dosen/:id',
                name: 'admin-dosen-edit',
                component: () => import('./views/pages/admin/dosen/user-edit/UserEdit.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/admin/mahasiswa',
                name: 'admin-daftar-mahasiswa',
                component: () => import('./views/pages/admin/mahasiswa/user-list/UserList.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/admin/mahasiswa/:id',
                name: 'admin-mahasiswa-edit',
                component: () => import('./views/pages/admin/mahasiswa/user-edit/UserEdit.vue'),
                meta: {
                    rule: 'editor',
                }
            },
            {
                path: '/admin/me',
                name: 'admin-profile',
                component: () => import('./views/pages/admin/Profile.vue'),
                meta: {
                    rule: 'editor',
                }
            },
          ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            beforeEnter: (from, to, next) => {
                if (store.getters['auth/authenticated']) {
                    switch (store.getters['auth/userRole']) {
                        case 'user':
                            return router.push('/user')

                        case 'dosen':
                            return router.push('/dosen')

                        case 'admin':
                            return router.push('/admin')

                        default:
                            break;
                    }
                }
                return next()
            },
            children: [
                {
                    path: '/login',
                    name: 'page-login',
                    component: () => import('@/views/pages/auth/Auth.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/admin/login',
                    name: 'admin-login',
                    component: () => import('@/views/pages/admin/auth/Auth.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                {
                    path: '/dosen/kelas/:kode/conference',
                    name: 'video-conference-dosen',
                    component: () => import('./views/pages/dosen/VidConference.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/user/conference/:kode',
                    name: 'video-conference-user',
                    component: () => import('./views/pages/user/conference/VidConference.vue'),
                    meta: {
                        rule: 'editor',
                    }
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: '/pages/error-500',
                    name: 'page-error-500',
                    component: () => import('@/views/pages/Error500.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})


export default router
