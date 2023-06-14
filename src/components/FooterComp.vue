<script setup>
</script>

<template>
  <footer id="footer">
    <div class="container">
      <div class="flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4">
        <div>
          <h1 class="text-3xl font-bold text-white">Samuel González</h1>
        </div>
        <div>
          <p class="text-white text-center md:text-left">
            &copy; 2023 Todos los derechos reservados.
          </p>
        </div>
        <div class="flex flex-col xl:flex-row items-center gap-2">
          <a href="https://www.linkedin.com/in/sgonzalez87/" class="btn-links" target="_blank"><i
              class="bx bxl-linkedin bx-flip-horizontal bx-tada"></i></a>
          <a href="https://github.com/alucardsam/" class="btn-links" target="_blank"><i
              class="bx bxl-github bx-flip-horizontal bx-tada"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.btn-links {
  @apply relative ml-5 text-white no-underline text-3xl
}
</style>
