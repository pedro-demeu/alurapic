<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
    props: ['url', 'titulo'],
    name: "ImagemResponsive"
};
</script>

<style scoped>
img.imagem-responsiva {
  width: 100%;
}
</style>