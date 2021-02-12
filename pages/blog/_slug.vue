<template>
  <section class="max-w-7xl mx-auto">
    <breadcrum-blog :category="article.category" />
    <div class="section-container flex flex-col py-8 lg:flex-row">
      <div class="lg:w-1/2">
        <div class="w-full h-68 rounded-lg overflow-hidden">
          <img
            class="w-full h-full object-cover object-center"
            :src="`/images/${article.cover}`"
            alt="Portada de la entrada del blog"
          >
        </div>
      </div>
      <div class="lg:flex lg:flex-col lg:justify-start lg:pl-8">
        <h1 class="my-4 text-h2 font-semibold lg:mt-0 lg:mb-8 lg:text-h1">
          {{ article.title }}
        </h1>
        <div class="flex items-center mb-8 md:mb-0">
          <div class="flex items-center mx-4 lg:mb-0">
            <figure
              class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
            >
              <fa-icon
                class="text-ui-textContrast"
                :icon="['fas', 'calendar']"
              />
            </figure>
            <p class="text-ui-textContrast font-semibold">
              28/11/20
            </p>
          </div>
          <div class="flex items-center mx-4 lg:mb-0">
            <figure
              class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
            >
              <fa-icon
                class="text-ui-textContrast"
                :icon="['fas', 'calendar']"
              />
            </figure>
            <p class="text-ui-textContrast font-semibold">
              28/11/20
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-container max-w-5xl mx-auto">
      <nuxt-content :document="article" />
      <figure
        class="flex p-4 mx-auto border border-ui-outline rounded-lg lg:w-1/2"
      >
        <div class="w-20 h-20 rounded-full overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="~/assets/images/selfie.jpg"
            alt=""
          >
        </div>
        <div>
          <p class="text-h4">
            Patricia Aguilar Maya
          </p>
          <div class="flex items-center mt-4">
            <a href="/linkedin">
              <button
                class="flex items-center justify-center w-8 h-8 mr-2 rounded-lg"
              >
                <fa-icon
                  class="text-ui-textContrast text-xl hover:text-ux-blue"
                  :icon="['fab', 'linkedin']"
                />
              </button>
            </a>
          </div>
        </div>
      </figure>
    </div>
  </section>
</template>

<script>

export default {
  transition: 'slide-transition',
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  data () {
    return {
      article: []
    }
  },
  computed: {

  }
}
</script>
