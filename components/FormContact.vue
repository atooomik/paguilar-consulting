<template>
  <div class="p-4 mx-auto border border-ui-outline rounded-lg lg:max-w-md">
    <form action="">
      <label class="block mb-6">
        <span class="text-gray-700">Nombre</span>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ux-blue"
          id="inline-full-name"
          type="text"
          required
        />
      </label>

      <label class="block mb-6">
        <span class="text-gray-700">Celular</span>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ux-blue"
          id="inline-full-name"
          type="text"
          required
        />
      </label>

      <label class="block mb-6">
        <span class="text-gray-700">Correo electrónico</span>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-ux-blue"
          id="inline-full-name"
          type="text"
          required
        />
      </label>

      <label class="block mb-6">
        <span class="text-gray-700">Servicio de tu interes:</span>
        <select
          class="form-select bg-gray-200 mt-1 block w-full focus:border-ux-blue"
          required
        >
          <option>Asesoria hipotecaria</option>
          <option>Trámite de escrituras</option>
          <option>Regularización de escrituras</option>
          <option>Otros</option>
        </select>
      </label>

      <label class="flex items-center mb-6">
        <input type="checkbox" class="form-checkbox" />
        <span class="ml-2"
          >He leido y acepto el
          <span class="underline">aviso de privacidad.</span></span
        >
      </label>
      <div class="flex">
        <button class="btn btn--blue mx-auto">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormContact',
}
</script>
