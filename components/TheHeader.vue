<template>
  <section class="fixed w-full px-4 bg-ui-white z-10">
    <div class="max-w-7xl mx-auto">
      <div
        class="w-full h-20 flex items-center justify-between border-b border-ui-outline lg:order-2"
      >
        <button
          class="p-2 text-ui-textContrast rounded-lg hover:text-ui-textTitles lg:hidden"
          @click="openMenu()"
        >
          <fa-icon class="text-h4" :icon="['fas', 'bars']" />
        </button>

        <nuxt-link class="flex items-center" to="/">
          <img
            src="~/assets/images/logo-dummy.svg"
            class="w-10 h-10"
            alt="Logo de la marca"
          >
        </nuxt-link>
        <nav class="hidden lg:block">
          <ul class="flex">
            <li>
              <a
                v-smooth-scroll
                href="#servicios"
                class="mx-4 text-h4 text-ui-textContrast hover:text-ui-textBody"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                v-smooth-scroll
                href="#trayectoria"
                class="mx-4 text-h4 text-ui-textContrast hover:text-ui-textBody"
              >
                Trayectoria
              </a>
            </li>
            <li>
              <a
                v-smooth-scroll
                href="#contacto"
                class="mx-4 text-h4 text-ui-textContrast hover:text-ui-textBody"
              >
                Contacto
              </a>
            </li>
            <li>
              <nuxt-link
                to="/blog"
                class="mx-4 text-h4 text-ui-textContrast hover:text-ui-textBody"
              >
                Blog
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <!--Menu mobil-->
      <transition name="slide-fade">
        <div v-if="showMenu" class="py-2 bg-ui-white">
          <nav>
            <ul>
              <li @click="redirect">
                <a v-smooth-scroll href="#servicios">
                  <p class="my-2 text-h4 hover:text-ux-blue">Servicios</p>
                </a>
              </li>
              <li @click="redirect">
                <a v-smooth-scroll href="#trayectoria">
                  <p class="my-2 text-h4 hover:text-ux-blue">Trayectoria</p>
                </a>
              </li>
              <li @click="redirect">
                <a v-smooth-scroll href="#contacto">
                  <p class="my-2 text-h4 hover:text-ux-blue">Contacto</p>
                </a>
              </li>
              <li class="border-t border-ui-outline" @click="redirect">
                <a href="/blog" class="my-2 text-h4 hover:text-ux-blue">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => {
    return {
      showMenu: false,
      sizeScreen: 'idle'
    }
  },

  methods: {
    openMenu () {
      this.showMenu = !this.showMenu
    },
    redirect () {
      setTimeout(() => {
        this.showMenu = false
      }, 25)
    }
  }
}
</script>
