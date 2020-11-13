<template>
  <section class="max-w-7xl mx-auto">
    <div class="section-container flex flex-col py-8 lg:flex-row">
      <div class="lg:w-1/2">
        <img
          class="rounded-lg"
          src="~/assets/images/smiling-businesswoman.jpg"
          alt="Portada de la entrada del blog"
        />
      </div>
      <div class="lg:flex lg:flex-col lg:justify-end lg:pl-8">
        <h1 class="my-4 text-h2 font-semibold lg:mt-0 lg:mb-8 lg:text-h1">
          Creative blog entry name here
        </h1>
        <div class="flex items-center mb-8">
          <nuxt-link to="/">
            <button class="btn btn--orange flex items-center">
              <figure
                class="flex items-center justify-center w-8 h-8 rounded-lg"
              >
                <fa-icon class="text-ux-orange" :icon="['fas', 'home']" />
              </figure>
              <p class="mx-2 text-ux-orange font-semibold">Vivienda</p>
            </button>
          </nuxt-link>
          <div class="flex items-center mx-4 lg:mb-0">
            <figure
              class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
            >
              <fa-icon
                class="text-ui-textContrast"
                :icon="['fas', 'calendar']"
              />
            </figure>
            <p class="text-ui-textContrast font-semibold">28/11/20</p>
          </div>
        </div>
        <figure class="flex p-4 border border-ui-outline rounded-lg lg:w-1/2">
          <div class="w-20 h-20 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="~/assets/images/selfie.png"
              alt=""
            />
          </div>
          <div>
            <p class="text-h4">Patricia Aguilar Maya</p>
            <div class="flex items-center mt-4">
              <a href="/linkedin">
                <button
                  class="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                >
                  <fa-icon
                    class="text-ui-textContrast hover:text-ux-blue"
                    :icon="['fab', 'linkedin-in']"
                  />
                </button>
              </a>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="section-container max-w-5xl mx-auto">
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, fringilla
        dictumst urna vitae donec ultrices felis, libero quam aliquam facilisis
        consequat eleifend. Ac a platea tellus et senectus aliquam vivamus, ut
        id nulla congue tristique nascetur phasellus, proin curabitur faucibus
        lacus maecenas facilisis. Massa suscipit felis urna vestibulum convallis
        integer viverra, feugiat tellus varius at mus quisque, porttitor
        interdum magna sagittis dictum ultricies. Cum neque fames per quam
        ornare mauris felis lobortis dui, habitasse aptent accumsan scelerisque
        lacus nunc purus condimentum, integer dignissim molestie odio laoreet
        suscipit montes eu.
      </p>
      <p class="mb-4">
        Magnis nunc fames parturient lobortis cras aptent sociosqu, dictumst
        netus cum leo nascetur nostra. Nunc blandit ad nam leo lacus imperdiet
        ante, vivamus et tempus mauris a mattis, rhoncus nec odio vitae rutrum
        montes. Integer vestibulum sed blandit malesuada per ultrices tellus
        maecenas, dignissim curabitur quam ligula laoreet nunc nec cubilia,
        neque mollis feugiat convallis gravida est eleifend.
      </p>
      <p class="mb-4">
        Senectus fringilla facilisis habitant et urna lacinia cum ornare
        inceptos hendrerit, placerat rhoncus eleifend gravida elementum porta
        malesuada etiam. Pellentesque augue auctor sem nec lacus non pharetra
        turpis libero eleifend, hendrerit rhoncus scelerisque ultricies vitae at
        netus aliquam neque, ultrices tellus orci iaculis egestas himenaeos eu
        magnis volutpat. Eget mauris gravida condimentum ornare suscipit fusce
        turpis laoreet cursus feugiat ligula, donec viverra purus penatibus
        taciti etiam eu sollicitudin odio. Lacus vehicula mattis sociosqu
        malesuada orci eros ligula porttitor ante, ullamcorper eget penatibus
        iaculis scelerisque pulvinar sodales egestas eu, sociis placerat arcu
        sagittis cum nisi lobortis torquent.
      </p>
      <p class="mb-4">
        Gravida condimentum hac aliquam malesuada nibh porttitor pretium nunc,
        imperdiet primis viverra inceptos luctus elementum varius pharetra dis,
        dapibus felis ornare leo metus non in. Dictumst iaculis laoreet nam
        lobortis leo metus odio lectus ante vestibulum lacus, egestas quisque
        sagittis viverra cursus dapibus fermentum elementum pharetra
        pellentesque urna, sodales sem porta tellus ridiculus dis nascetur ad
        ornare potenti. Elementum neque non torquent eros sodales imperdiet
        orci, magnis velit aenean taciti eu fringilla fermentum montes,
        tincidunt vitae ornare convallis feugiat facilisis.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
}
</script>
