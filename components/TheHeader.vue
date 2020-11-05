<template>
  <section
    class="fixed w-full h-20 flex px-4 py-2 items-center justify-between border-b-2 border-ui-outline bg-ui-white"
  >
    <div class="flex items-center">
      <img
        src="~/assets/images/corredor.svg"
        class="w-10 h-10 mr-4"
        alt="Logo de la marca"
      />
      <p>PA Consulting</p>
    </div>
    <!--Menu mobil-->
    <button class="btn border-ui-outline" @click="openMenu()">
      <fa-icon class="text-lg text-ui-outline" :icon="['fas', 'bars']" />
    </button>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => {
    return {
      showMenu: false,
    }
  },
  methods: {
    openMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
