<template>
  <footer class="w-full bg-ui-bgContrast">
    <div class="max-w-7xl mx-auto text-center">
      <div class="flex justify-center py-4">
        <a href="mailto:patricia.aguilarm@outlook.es">
          <fa-icon
            class="text-3xl mx-4 text-ui-textContrast hover:text-ui-textTitles"
            :icon="['far', 'envelope']"
          />
        </a>
        <a
          href="https://wa.me/525576608573?text=Estoy%20interesado%20en%20una%20asesoria"
          target="_blank"
        >
          <fa-icon
            class="text-3xl mx-4 text-ui-textContrast hover:text-ui-textTitles"
            :icon="['fab', 'whatsapp']"
          />
        </a>
      </div>
      <p class="font-semibold">Patricia Aguilar Consultoria</p>
      <p>Copyright 2020</p>
      <p>
        Diseño y desarrollo por <a class="font-semibold" href="/">atoomik</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
