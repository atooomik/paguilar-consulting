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
        :src="`/images/${coverImage}`"
        alt="Portada de la card de blog"
      >
      <figure
        v-if="largeCard"
        :class="`absolute top-0 right-0 flex items-center px-3 py-2 mr-4 text-${colorText} bg-${colorBg} rounded-b-lg shadow`"
      >
        <fa-icon class="mr-2" :icon="categoryIcon" />
        <p :class="`font-semibold text-${colorText}`">
          {{ category }}
        </p>
      </figure>
    </div>
    <div>
      <p class="mb-4 text-h4 lg:text-h3">
        {{ title }}
      </p>
      <p>
        {{ resume }}
      </p>
    </div>
    <div>
      <div v-if="largeCard">
        <slot />
      </div>
      <div v-else class="flex items-center mt-4">
        <div class="flex items-center">
          <figure
            class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
          >
            <fa-icon class="text-ui-textContrast" :icon="['fas', 'eye']" />
          </figure>
          <p class="text-ui-textContrast font-semibold">
            25 lecturas
          </p>
        </div>
        <nuxt-link :to="`${path}`" class="mr-0 ml-auto">
          <button class="btn btn--blue">
            Léer más
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBlogResume',
  props: {
    category: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    coverImage: {
      type: String,
      default: 'hipoteca.jpg'
    },
    resume: {
      type: String,
      default: ''
    },
    largeCard: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: '/blog'
    }
  },
  computed: {
    categoryIcon () {
      switch (this.category) {
        case 'Vivienda':
          return ['fas', 'home']
        case 'Hacienda':
          return ['fas', 'university']
        default:
          return 'Vivienda'
      }
    },
    colorText () {
      switch (this.category) {
        case 'Vivienda':
          return 'amber-500'
        case 'Hacienda':
          return 'blue-600'
        default:
          return 'Vivienda'
      }
    },
    colorBg () {
      switch (this.category) {
        case 'Vivienda':
          return 'amber-50'
        case 'Hacienda':
          return 'blue-50'
        default:
          return 'Vivienda'
      }
    }
  }
}
</script>
