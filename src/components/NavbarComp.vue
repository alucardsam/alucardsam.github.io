<script setup>
</script>

<template>
  <div class="w-full bg-[#149ddd] p-2 grid md:grid-cols-12 items-center justify-center fixed z-[9999999]">
    <h1 class="md:col-span-4 flex justify-center md:justify-start font-bold cursor-pointer text-3xl text-white">
      Samuel González
    </h1>
    <nav id="navbar" class="md:col-span-6 flex items-center justify-center px-4">
      <a href="#hero" class="nav-link scrollto xl:py-1 xl:px-2"><i class="bx bx-home"></i> <span>Inicio</span></a>
      <a href="#about" class="nav-link scrollto xl:py-1 xl:px-2"><i class="bx bx-user"></i> <span>Sobre mi</span></a>
      <a href="#resume" class="nav-link scrollto xl:py-1 xl:px-2"><i class="bx bx-file-blank"></i> <span>CV</span></a>
      <a href="#portfolio" class="nav-link scrollto xl:py-1 xl:px-2"><i class="bx bx-book-content"></i> <span>Portafolio</span></a>
      <a href="#contact" class="nav-link scrollto xl:py-1 xl:px-2"><i class="bx bx-envelope"></i> <span>Contacto</span></a>
    </nav>
    <div class="md:col-span-2 flex items-center justify-center md:justify-end">
      <a href="https://www.linkedin.com/in/sgonzalez87/" class="btn-links" target="_blank"><i class="bx bxl-linkedin bx-flip-horizontal bx-tada w-6 h-6 fill-current"></i></a>
      <a href="https://github.com/alucardsam/" class="btn-links" target="_blank"><i class="bx bxl-github bx-flip-horizontal bx-tada w-6 h-6 fill-current"></i></a>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply relative ml-5 text-white no-underline
}

.nav-link::after {
  @apply content-[''] bg-white h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl absolute duration-300
}

.nav-link:hover {
  @apply text-white
}

.active::after {
  @apply w-[100%] duration-75 text-white
}

.btn-links {
  @apply relative ml-5 text-white no-underline text-3xl
}
</style>
