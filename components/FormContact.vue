<template>
  <div class="p-4 mx-auto border border-ui-outline rounded-lg lg:max-w-md bg-white">
    <form action="">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <fa-icon
              class="text-lg text-gray-400 hover:text-ui-textTitles"
              :icon="['fas', 'envelope']"
            />
          </div>
          <input id="email" type="text" name="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">
        </div>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Teléfono</label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <fa-icon
              class="text-lg text-gray-400 hover:text-ui-textTitles"
              :icon="['fas', 'mobile-alt']"
            />
          </div>
          <input id="email" type="text" name="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com">
        </div>
      </div>
      <div class="mb-4">
        <label for="location" class="block text-sm font-medium text-gray-700">Servicio</label>
        <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option>Asesoria comercial y juridica</option>
          <option>
            Credito hipotecario
          </option>
          <option>Escrituración</option>
        </select>
      </div>
      <div class="flex items-center mb-4">
        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
          He leído y acepto el <nuxt-link class="text-ux-blue" to="/acuerdo-de-confidencialidad">Acuerdo de confidencialidad</nuxt-link>
        </label>
      </div>
      <div class="flex">
        <button class="btn btn--blue mx-auto">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormContact'
}
</script>
