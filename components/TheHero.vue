<template>
  <div
    class="w-full flex flex-col py-8 border-b-2 border-ui-outline lg:flex-row bg-ui-bgContrast lg:py-20"
  >
    <div class="px-4 pb-8 flex flex-col justify-center">
      <h1 class="text-center text-h2 font-semibold lg:text-left lg:text-h1">
        Consultora especializada en el ramo inmobiliario
      </h1>
      <p class="text-center text-h3 lg:text-left lg:text-h2">
        Nostrodum exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequeant.
      </p>
      <button class="btn btn--blue my-4 mx-auto lg:mr-auto lg:ml-0">
        Servicios
      </button>
    </div>
    <div class="w-full h-72 px-4 overflow-hidden">
      <img
        class="w-full h-full object-cover rounded-lg"
        src="~/assets/images/smiling-businesswoman.jpg"
        alt="Mujer asesorando a una pareja"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>
