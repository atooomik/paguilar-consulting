<template>
  <section class="max-w-7xl mx-auto">    
    <div class="section-container flex flex-col py-8 lg:flex-row">
      <div class="lg:w-1/2">
        <nuxt-link
          class="w-full flex mb-8 border-t border-b border-ux-orange lg:hidden"
          to="/"
        >
          <div class="flex items-center py-2 mx-auto lg:py-4">
            <figure class="flex items-center justify-center w-8 h-8 rounded-lg">
              <fa-icon class="text-ux-orange" :icon="['fas', 'home']" />
            </figure>
            <p class="mx-2 text-ux-orange font-semibold">Vivienda</p>
          </div>
        </nuxt-link>
        <img
          class="rounded-lg"
          src="~/assets/images/smiling.jpg"
          alt="Portada de la entrada del blog"
        />
      </div>
      <div class="lg:flex lg:flex-col lg:justify-start lg:pl-8">
        <nuxt-link
          class="hidden w-full flex border-t border-b border-ux-orange lg:flex lg:mb-8"
          to="/"
        >
          <div class="flex items-center py-2 mx-auto lg:py-4">
            <figure class="flex items-center justify-center w-8 h-8 rounded-lg">
              <fa-icon class="text-ux-orange" :icon="['fas', 'home']" />
            </figure>
            <p class="mx-2 text-ux-orange font-semibold">Vivienda</p>
          </div>
        </nuxt-link>
        <h1 class="my-4 text-h2 font-semibold lg:mt-0 lg:mb-8 lg:text-h1">
          {{article.title}}
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
            <p class="text-ui-textContrast font-semibold">28/11/20</p>
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
            <p class="text-ui-textContrast font-semibold">28/11/20</p>
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
          />
        </div>
        <div>
          <p class="text-h4">Patricia Aguilar Maya</p>
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
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article}
  },
}
</script>
