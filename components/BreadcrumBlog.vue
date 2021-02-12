<template>
  <nav class="bg-white border-b border-gray-200 flex" aria-label="Breadcrumb">
    <ol class="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-baseline text-gray-400 hover:text-gray-500">
            <fa-icon class="mr-2" :icon="['fas', 'home']" />
            <span class="sr-only">Inicio</span>
            Inicio
          </nuxt-link>
        </div>
      </li>
      <li class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <nuxt-link
            to="/blog"
            class="ml-4
           font-medium text-gray-500 hover:text-gray-700"
          >
            <fa-icon class="mr-2" :icon="['fas', 'newspaper']" />
            Blog
          </nuxt-link>
        </div>
      </li>
      <li class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <nuxt-link to="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
            <fa-icon class="mr-2" :icon="categoryIcon" />
            {{ category }}
          </nuxt-link>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumBlog',
  props: {
    category: {
      type: String,
      default: ''
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
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
