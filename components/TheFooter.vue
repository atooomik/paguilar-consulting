<template>
  <footer class="w-full bg-ui-bgContrast">
    <div class="flex flex-col max-w-5xl py-4 mx-auto text-center">
      <div class="order-2 flex flex-col justify-center mb-4 lg:order-1">
        <img
          src="~/assets/images/logo-dummy.svg"
          class="w-24 h-24 mx-auto my-4"
          alt="Logo de la marca"
        >
        <p class="font-semibold">
          Patricia Aguilar <br>
          Consultoria Inmobiliaria
        </p>
        <p>México – © 2020</p>
      </div>
      <div
        class="order-1 flex flex-col justify-around items-center lg:py-4 lg:order-2 lg:flex-row lg:border-t lg:border-ui-outline"
      >
        <div class="flex my-2 lg:w-1/3 lg:my-0">
          <a href="mailto:patricia.aguilarm@outlook.es">
            <fa-icon
              class="text-2xl mx-4 text-ui-textContrast hover:text-ui-textTitles"
              :icon="['fas', 'envelope']"
            />
          </a>
          <a
            href="https://wa.me/525576608573?text=Estoy%20interesado%20en%20una%20asesoria"
            target="_blank"
          >
            <fa-icon
              class="text-2xl mx-4 text-ui-textContrast hover:text-ui-textTitles"
              :icon="['fab', 'whatsapp']"
            />
          </a>
        </div>
        <div class="my-2 lg:w-1/3 lg:my-0">
          <a href="/aviso-de-privacidad"><p>Aviso de privacidad</p></a>
        </div>
        <div class="my-2 lg:w-1/3 lg:my-0">
          <p>
            Diseño y desarrollo por:
            <a
              class="font-semibold text-ux-blue"
              target="_blank"
              href="https://atoomikdev.com/"
            >atoomik</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
