<script setup>
</script>

<template>
  <div class="w-full bg-[#149ddd] p-2 grid md:grid-cols-12 gap-4 items-center justify-center fixed z-[9999999]">
    <h1 class="md:col-span-4 flex justify-center md:justify-start font-bold cursor-pointer text-3xl text-white">
      Samuel González
    </h1>
    <nav id="navbar" class="md:col-span-6 flex items-center gap-4 justify-center">
      <a href="#hero" class="nav-link scrollto"><i class="bx bx-home"></i> <span>Home</span></a>
      <a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a>
      <a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a>
      <a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a>
      <a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a>
    </nav>
    <div class="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
      <a href="https://github.com/alucardsam">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
          </path>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply relative ml-10 text-white no-underline
}
.nav-link::after {
  @apply content-[''] bg-pink-500 h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl absolute duration-300
}

.nav-link:hover::after {
  @apply w-[100%]
}

.active::after {
  @apply w-[100%] duration-75
}
</style>
