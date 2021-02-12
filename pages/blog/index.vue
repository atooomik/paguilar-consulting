<template>
  <section class="max-w-7xl mx-auto">
    <div class="section-container flex flex-col py-8 lg:flex-row">
      <div class="w-full flex flex-col justify-center text-left lg:w-1/2">
        <h1 class="mb-4 text-h2 font-semibold lg:mb-8 lg:text-h1">
          Creative blog name here
        </h1>
        <p class="mb-4 text-h4">
          Durante todos estos años he tenido la oportunidad de resolver
          diferentes situaciones para todo tipo de clientes, en este blog voy a
          compartir contigo estas experiencias y como logramos resolverlas.
        </p>
        <p class="mb-4 text-h4">
          Aquí puedes encontrar
          <span class="font-semibold text-ux-blue">mi última entrada:</span>
        </p>
        <!----
        <p class="mb-4">
          Suscribete para ser el primer en enterarte cuando se publique una
          nueva entrada:
        </p>
        <label class="block">
          <span class="text-gray-700">Correo electrónico:</span>
          <input
            type="text"
            class="form-input mt-1 block w-full"
            placeholder="john@example.com"
          />
          <button class="btn btn--blue my-4 mr-0 ml-auto">Suscribete</button>
        </label>
        -->
      </div>
      <div class="lg:w-1/2">
        <card-blog-resume
          :title="lastEntry.title"
          :resume="lastEntry.description"
          :category="lastEntry.category"
          :cover-image="lastEntry.cover"
          :date="lastEntry.date"
          :large-card="true"
        >
          <div>
            <div class="flex flex-wrap my-4">
              <div class="flex items-center mr-4 mb-4 lg:mb-0">
                <figure
                  class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                >
                  <fa-icon
                    class="text-ui-textContrast"
                    :icon="['fas', 'calendar']"
                  />
                </figure>
                <p class="text-ui-textContrast font-semibold">
                  {{ lastEntry.date }}
                </p>
              </div>
              <div class="flex items-center mr-4 mb-4 lg:mb-0">
                <figure
                  class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                >
                  <fa-icon
                    class="text-ui-textContrast"
                    :icon="['fas', 'clock']"
                  />
                </figure>
                <p class="text-ui-textContrast font-semibold">
                  Tiempo de lectura: 5 mins
                </p>
              </div>
            </div>
            <div class="flex">
              <nuxt-link :to="`/blog/${lastEntry.slug}`" class="mr-0 ml-auto">
                <button class="btn btn--blue flex items-center">
                  Leer entrada completa
                  <fa-icon
                    class="ml-2 md:block"
                    :icon="['fas', 'chevron-right']"
                  />
                </button>
              </nuxt-link>
            </div>
          </div>
        </card-blog-resume>
      </div>
    </div>
    <div class="section-container max-w-7xl mx-auto">
      <h2 class="pb-8 text-h3 text-center lg:text-h2">
        Todas las entradas
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <card-blog-resume
          v-for="(item, i) in article"
          :key="i"
          :title="item.title"
          :resume="item.description"
          :category="item.category"
          :cover-image="item.cover"
          :path="`/blog/${item.slug}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'slide-transition',
  async asyncData ({ $content }) {
    const article = await $content('articles').fetch()
    return { article }
  },
  head () {
    return {
      titleChunk: 'Blog'
    }
  },
  computed: {
    lastEntry () {
      return this.article[0]
    }
  }
}
</script>
