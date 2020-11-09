<template>
  <div>
    <the-hero />
    <!--Section about me-->
    <div class="max-w-7xl mx-auto">
      <div class="section-container">
        <h2 class="pb-8 text-center text-h3 lg:text-h2">Acerca de mi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut
          perspiciatis ipsam impedit distinctio, maiores illo magnam libero,
          ducimus, provident ea quas hic animi voluptatem quo velit at fugiat
          recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facere excepturi rem ratione quibusdam! Labore unde voluptas magnam,
          expedita cumque quibusdam odio possimus ipsam neque tenetur nostrum
          fugit nihil. Dolorum, dolores.
        </p>
        <figure class="w-32 h-32 mx-auto mt-8 overflow-hidden rounded-full">
          <img
            class="w-full h-full object-cover"
            src="~/assets/images/selfie.png"
            alt="Foto frontal"
          />
        </figure>
      </div>
      <!--Section services-->
      <div id="servicios" class="section-container">
        <h2 class="pb-4 text-center text-h3 lg:text-h2">Servicios</h2>
        <p class="pb-8 text-center">¿Qué puedo hacer por ti?</p>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <card-services
            v-for="(service, i) in servicios"
            :key="i"
            :icon="service.img"
            :title="service.name"
            :description="service.desc"
          />
        </div>
      </div>
    </div>
    <!--Sección why me?-->
    <div id="trayectoria" class="bg-ui-bgContrast">
      <div class="section-container max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col w-full order-1 lg:w-1/2 lg:order-2">
            <h2 class="pb-8 text-h3 text-center lg:text-left lg:text-h2">
              ¿Por que elegirme como tu asesora inmobiliaria?
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              recusandae repellendus quod numquam dolore eveniet modi natus
              facilis ullam sit impedit similique illum pariatur atque unde
              nostrum, cumque ipsum voluptas.
            </p>
            <button class="btn btn--blue my-4 mx-auto lg:mr-auto lg:ml-0">
              Contáctame
            </button>
          </div>
          <div
            class="grid grid-cols-2 grid-rows-2 gap-8 order-2 lg:w-1/2 lg:px-12 lg:order-1"
          >
            <div class="p-4 my-4 border border-ui-outline rounded-lg lg:my-8">
              <span class="text-h2 text-ui-textBody">16</span> <br />
              <p>Años de experiencia en el mercado.</p>
            </div>
            <div class="p-4 my-4 border border-ui-outline rounded-lg lg:my-8">
              <span class="text-h2 text-ui-textBody">+300</span> <br />
              <p>Escrituras celebradas.</p>
            </div>
            <div class="p-4 my-4 border border-ui-outline rounded-lg lg:my-8">
              <span class="text-h2 text-ui-textBody">Tercio</span> <br />
              <p>Escrituras celebradas.</p>
            </div>
            <div class="p-4 my-4 border border-ui-outline rounded-lg lg:my-8">
              <span class="text-h2 text-ui-textBody">Cuarto</span> <br />
              <p>Escrituras celebradas.</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <vue-carousel
            :per-page-custom="[[0, 1]]"
            :navigationEnabled="true"
            :loop="true"
            :autoplay="true"
            :autoplayTimeout="3000"
          >
            <vue-slide>
              <card-testimonials />
            </vue-slide>
            <vue-slide>
              <card-testimonials />
            </vue-slide>
            <vue-slide>
              <card-testimonials />
            </vue-slide>
            <vue-slide>
              <card-testimonials />
            </vue-slide>
          </vue-carousel>
        </div>
      </div>
    </div>
    <!--Last entries-->
    <div class="section-container max-w-7xl mx-auto">
      <h2 class="pb-8 text-h3 text-center lg:text-h2">Ultimas entradas</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <card-blog-resume :largeCard="false" />
        <card-blog-resume :largeCard="false" />
        <card-blog-resume :largeCard="false" />
      </div>
    </div>
    <!--Contact form-->
    <div id="contacto" class="section-container max-w-7xl mx-auto">
      <h2 class="pb-8 text-h3 text-center lg:text-h2">
        Permiteme aportar mi experiencia a tú proyecto
      </h2>
      <div>
        <form-contact />
      </div>
    </div>
  </div>
</template>

<script>
import { servicios } from '~/assets/data/services.json'
import VueCarousel from 'vue-carousel/src/Carousel.vue'
import VueSlide from 'vue-carousel/src/Slide.vue'

export default {
  asyncData() {
    return {
      servicios,
    }
  },
  data: () => ({
    servicios: [],
  }),
  components: {
    VueCarousel,
    VueSlide,
  },
}
</script>
