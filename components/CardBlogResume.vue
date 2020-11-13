<template>
  <div
    class="p-4 border border-ui-outline rounded-lg"
    :class="largeCard ? 'mt-0' : 'mt-8'"
  >
    <div
      class="relative w-full h-64 mb-4 rounded-lg overflow-hidden"
      :class="largeCard ? 'mt-0' : '-mt-12'"
    >
      <img
        class="absolute w-full h-full object-cover"
        src="../static/images/hipoteca.jpg"
        alt="Portada de la card de blog"
      />
      <figure
        v-if="largeCard"
        class="absolute top-0 right-0 flex items-center p-2 mr-4 bg-ui-white rounded-b-lg shadow-lg"
      >
        <fa-icon class="mr-2 text-ux-orange" :icon="['fas', 'home']" />
        <p class="text-ux-orange font-semibold">Vivienda</p>
      </figure>
    </div>
    <div>
      <p class="mb-4 text-h4 lg:text-h3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, maxime
        cum! Assumenda molestias harum unde veniam voluptates quo voluptate vel
        labore laboriosam asperiores sapiente velit, quis expedita architecto
        iste qui?
      </p>
    </div>
    <div>
      <div v-if="largeCard">
        <slot></slot>
      </div>
      <div v-else class="flex items-center mt-4">
        <div class="flex items-center">
          <figure
            class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
          >
            <fa-icon class="text-ui-textContrast" :icon="['fas', 'eye']" />
          </figure>
          <p class="text-ui-textContrast font-semibold">25 lecturas</p>
        </div>
        <nuxt-link :to="`${path}`" class="mr-0 ml-auto">
          <button class="btn btn--blue">Léer más</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlogResume',
  props: {
    largeCard: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: '/blog',
    },
  },
}
</script>
