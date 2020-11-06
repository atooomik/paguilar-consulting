<template>
  <div class="my-4 p-4 shadow-lg bg-ui-bgContrast">
    <div class="w-full">
      <img
        class="w-12 h-12 mx-auto"
        :src="`/images/${icon}`"
        alt="Logo del servicio"
      />
      <p class="my-4 text-center text-base font-semibold">{{ title }}</p>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardServices',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
