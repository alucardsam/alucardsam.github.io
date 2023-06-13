<script setup>
</script>

<template>
  <div class="w-full bg-[#149ddd] p-2 grid md:grid-cols-12 gap-4 items-center justify-center fixed z-[9999999]">
    <h1 class="md:col-span-4 flex justify-center md:justify-start font-bold cursor-pointer text-3xl text-white">
      Samuel González
    </h1>
    <nav id="navbar" class="md:col-span-6 flex items-center gap-4 justify-center">
      <a href="#hero" class="nav-link scrollto"><i class="bx bx-home"></i> <span class="d-md-none">Home</span></a>
      <a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a>
      <a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a>
      <a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a>
      <a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a>
    </nav>
    <div class="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
      <a href="https://github.com/alucardsam" class="btn-links"><i class='bx bxl-github bx-flip-horizontal bx-tada'></i></a>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply relative ml-10 text-white no-underline
}
.nav-link::after {
  @apply content-[''] bg-slate-500 h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl absolute duration-300
}

.nav-link:hover::after {
  @apply w-[100%] text-red-300
}

.active::after {
  @apply w-[100%] duration-75
}

.btn-link {
  @apply relative ml-10 text-white no-underline
}
</style>
