<template>
  <div class="p-4 mt-8 border border-ui-outline rounded-lg">
    <div
      class="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-lg"
      :class="largeCard ? 'mt-0' : '-mt-12'"
    >
      <img
        class="absolute w-full h-full object-cover"
        src="../static/images/hipoteca.jpg"
        alt="Portada de la card de blog"
      />
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
      <div v-else class="flex mt-4">
        <figure
          class="px-4 py-2 mr-auto ml-0 border border-ui-outline rounded-lg"
        >
          5 minutos
        </figure>
        <button class="btn btn--blue mr-0 ml-auto">Léer más</button>
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
  },
}
</script>
