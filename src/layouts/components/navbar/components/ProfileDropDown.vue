<template>
  <div class="the-navbar__user-meta flex items-center" v-if="authenticated">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ user.name }}</p>
      <small>Online</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img src="../../../../assets/images/user.png" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" style="opacity: .6" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="goToProfile"
            >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/userData',
      role: 'auth/userRole'
    }),
  },
  methods: {
    ...mapActions({
      signOut: 'auth/signOut'
    }),
    logout() {
      this.$vs.loading()

      this.signOut().then(() => {
        this.$vs.loading.close()
        this.$router.push('/login')
      })
    },
    goToProfile() {
      switch (this.role) {
        case 'admin':
          this.$router.push({ name: 'admin-profile' })
          break;

        case 'dosen':
          this.$router.push({ name: 'dosen-profile' })
          break;

        case 'user':
          this.$router.push({ name: 'user-profile' })
          break;

        default:
          break;
      }
    }
  }
}
</script>
