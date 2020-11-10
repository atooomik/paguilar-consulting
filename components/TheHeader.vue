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
          <p class="text-ui-textContrast font-semibold">PA Consulting</p>
          <img
            src="~/assets/images/corredor.svg"
            class="w-10 h-10 ml-4"
            alt="Logo de la marca"
          />
        </nuxt-link>
        <nav class="hidden lg:block">
          <ul class="flex">
            <li>
              <nuxt-link to="#servicios">
                <p
                  class="mx-4 text-h4 text-ui-textContrast font-semibold hover:text-ui-textBody"
                >
                  Servicios
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#trayectoria">
                <p
                  class="mx-4 text-h4 text-ui-textContrast font-semibold hover:text-ui-textBody"
                >
                  Trayectoria
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#contacto">
                <p
                  class="mx-4 text-h4 text-ui-textContrast font-semibold hover:text-ui-textBody"
                >
                  Contacto
                </p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">
                <p
                  class="mx-4 text-h4 text-ui-textContrast font-semibold hover:text-ui-textBody"
                >
                  Blog
                </p>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <!--Menu mobil-->
      <transition name="slide-fade">
        <div v-if="showMenu" class="bg-ui-white">
          <nav>
            <ul>
              <li>
                <nuxt-link to="#servicios">
                  <p class="my-2 text-h4 font-semibold hover:text-ux-blue">
                    Servicios
                  </p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#trayectoria">
                  <p class="my-2 text-h4 font-semibold hover:text-ux-blue">
                    Trayectoria
                  </p>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="#contacto">
                  <p class="my-2 text-h4 font-semibold hover:text-ux-blue">
                    Contacto
                  </p>
                </nuxt-link>
              </li>
              <li class="border-t border-ui-outline">
                <nuxt-link to="#servicios">
                  <p class="my-2 text-h4 font-semibold hover:text-ux-blue">
                    Blog
                  </p>
                </nuxt-link>
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
      sizeScreen: 'idle',
    }
  },

  methods: {
    openMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
