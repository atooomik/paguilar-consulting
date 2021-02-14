<template>
  <div class="w-full py-8 border-b border-ui-outline bg-ui-bgContrast lg:py-20">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row">
      <div class="px-4 pb-8 flex flex-col justify-center">
        <h1 class="text-center text-h2 font-semibold lg:text-left lg:text-h1">
          Consultora especializada en el ramo inmobiliario
        </h1>
        <p class="text-center text-h3 lg:text-left lg:text-h2">
          Nostrodum exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequeant.
        </p>
        <a v-smooth-scroll href="#servicios" class="flex">
          <button class="btn btn--blue my-4 mx-auto lg:mr-auto lg:ml-0">
            Servicios
          </button>
        </a>
      </div>
      <div class="w-full h-72 px-4 overflow-hidden">
        <picture>
          <source type="image/webp" srcset="~/assets/images/smiling.webp">
          <source type="image/jpeg" srcset="~/assets/images/smiling.jpg">
          <img class="w-full h-full object-cover rounded-lg" src="~/assets/images/smiling.jpg" alt="Mujer dando asesoria a un cliente">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>
