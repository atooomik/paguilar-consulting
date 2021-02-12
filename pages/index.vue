<template>
  <div>
    <the-hero />
    <!--Section about me-->
    <div class="max-w-7xl mx-auto">
      <div class="section-container">
        <h2 class="pb-8 text-center text-h3 lg:text-h2 lg:pb-0">
          Acerca de mi
        </h2>
        <div class="flex flex-col md:flex-row md:items-center">
          <div class="order-1 w-full md:order-2 md:w-1/2">
            <p class="mb-2">
              Soy una mujer a quien siempre le han gustado los retos, desde que
              tengo 5 años siempre he buscado el como si, y eso es lo que me ha
              identificado a lo largo de la vida.
            </p>
            <p>
              Desde muy joven tuve la inquietud de tener mi propio espacio, ese
              lugar que he decorado a mi gusto, donde comparto con los que amo,
              donde sueño, cocino y construyo día a día mis realidades, eso es
              para mi una casa, un hogar.
            </p>
          </div>
          <figure
            class="order-2 md:order-1 w-2/3 h-full mx-auto mt-8 overflow-hidden rounded-lg md:w-1/2 md:mt-0"
          >
            <li class="py-10 px-6 text-center rounded-lg xl:px-10 xl:text-left">
              <div class="space-y-6 xl:space-y-10">
                <img
                  class="mx-auto h-40 w-40 rounded-full object-cover object-top xl:w-64 xl:h-64"
                  src="~/assets/images/selfie.jpg"
                  alt="Foto de perfil"
                />
                <div class="space-y-2">
                  <div
                    class="font-medium text-lg leading-6 space-y-1 text-center"
                  >
                    <h3 class="">Patricia Aguilar</h3>
                    <p class="font-semibold">Asesora inmobiliaria</p>
                    <a href="#" class="text-gray-400 hover:text-gray-300">
                      <span class="sr-only">LinkedIn</span>
                      <fa-icon
                        class="text-ui-textContrast text-xl hover:text-ux-blue"
                        :icon="['fab', 'linkedin']"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </figure>
        </div>
      </div>
      <!--Section services-->
      <div id="servicios" class="section-container">
        <h2 class="pb-4 text-center text-h3 lg:text-h2">Servicios</h2>
        <p class="pb-8 text-center">¿Qué puedo hacer por ti?</p>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <a href="#contacto" v-smooth-scroll class="flex">
              <button class="btn btn--blue my-4 mx-auto lg:mr-auto lg:ml-0">
                Contáctame
              </button>
            </a>
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
        <card-blog-resume
          v-for="(item, i) in article"
          :key="i"
          :title="item.title"
          :resume="item.description"
          :category="item.category"
          :coverImage="`/images/${item.cover}`"
          :path="`/blog/${item.slug}`"
        />
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
  async asyncData({ $content }) {
    const article = await $content('articles').fetch()
    return { article, servicios }
  },
  data: () => ({
    servicios: [],
  }),
  components: {
    VueCarousel,
    VueSlide,
  },
  transition: 'slide-transition',
}
</script>
