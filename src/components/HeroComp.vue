<script setup>
import { onMounted } from "vue";
import Typed from 'typed.js';
onMounted(() => {
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
})
</script>

<template>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-down">
      <h1>Samuel González</h1>
      <p>I'm <span class="typed" data-typed-items="Web Developer, Full Stack, Developer, Freelancer, Gamer"></span></p>
    </div>
  </section>
</template>

<style scoped></style>
