<script setup>
import NavbarComp from '@components/NavbarComp.vue'
import HeroComp from '@components/HeroComp.vue'
import FooterComp from '@components/FooterComp.vue'
import { onMounted } from "vue";
import PureCounter from "@srexi/purecounterjs"
import AOS from "aos";

onMounted(() => {
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /* aqui */
  /**
 * Skills animation
 */
  /* let skilsContent = select('.skills-content');
 if (skilsContent) {
   new Waypoint({
     element: skilsContent,
     offset: '80%',
     handler: function(direction) {
       let progress = select('.progress .progress-bar', true);
       progress.forEach((el) => {
         el.style.width = el.getAttribute('aria-valuenow') + '%'
       });
     }
   })
 } */
  /* aqui */

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();
})
</script>

<template>
  <!-- <i class="material-icons-round mobile-nav-toggle d-xl-none d-flex align-items-center justify-content-center">menu</i> -->
  <!-- <i class="bi bi-list mobile-nav-toggle d-xl-none d-flex align-items-center justify-content-center"></i> -->
  <NavbarComp />
  <HeroComp />

  <section id="about" class="about">
    <div class="container">

      <div class="section-title">
        <h2>About</h2>
        <p>Web Developer Full Stack with over 12 years of experience. Passionate about programming and new technologies.
          I’d describe myself as a person who tries to grow day by day and exceed each proposed goal. In my personal life
          I’ve a great family made up of my wife and my two beautiful childs, a five year old boy and a one year old girl.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <!-- <img src="@/assets/img/profile-img.jpg" class="img-fluid" alt=""> -->
          <img src="https://picsum.photos/id/201/351/351" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Web Developer.</h3>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente nostrum provident inventore harum
            impedit, dignissimos ullam distinctio voluptatum fugit eum, quaerat maxime laborum et ab autem aperiam
            officiis commodi.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>19 Sep 1987</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong>
                  <span>https://alucardsam.github.io/</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+52 961 113 5699</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tuxtla Gutiérrez, Chiapas,
                    México</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>35</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Computer Systems Engineer</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>samueladriang@gmail.com</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error quasi unde maxime mollitia earum,
            temporibus provident aliquam ex, quo eaque iste eum veniam vitae ut? Eius incidunt dolor totam.
          </p>
        </div>
      </div>

    </div>
  </section>
  <section id="facts" class="facts">
    <div class="container">

      <div class="section-title">
        <h2>Facts</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas, modi, quibusdam odio dolores a ipsum
          reiciendis tenetur et velit tempore, libero mollitia aliquid eveniet ab vitae impedit voluptates quo?</p>
      </div>

      <div class="row no-gutters">

        <!-- <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div class="count-box">
            <i class="bi bi-emoji-smile"></i>
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Happy Clients</strong> consequuntur quae</p>
          </div>
        </div> -->

        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <div class="count-box">
            <i class="bi bi-journal-richtext"></i>
            <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Projects</strong> adipisci atque cum quia aut</p>
          </div>
        </div>

        <!-- <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <div class="count-box">
            <i class="bi bi-headset"></i>
            <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
          </div>
        </div> -->

        <!-- <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
          <div class="count-box">
            <i class="bi bi-people"></i>
            <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
          </div>
        </div> -->

      </div>

    </div>
  </section>
  <section id="skills" class="skills section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Skills</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row skills-content">

        <div class="col-lg-6" data-aos="fade-up">

          <div class="progress">
            <span class="skill">HTML <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">75%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div class="progress">
            <span class="skill">PHP <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">NodeJS - Express <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">NodeJS - Vue3 <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
  <section id="resume" class="resume">
    <div class="container">

      <div class="section-title">
        <h2>Resume</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur ratione sint tempore saepe sit!
          Officiis similique mollitia sint excepturi, possimus fugit quis architecto ut eos harum hic amet quasi.</p>
      </div>

      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <h3 class="resume-title">Sumary</h3>
          <div class="resume-item pb-0">
            <h4>Samuel González</h4>
            <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi, eaque sunt fugiat vel nobis
                quaerat aliquid necessitatibus illum! Nemo maiores nostrum excepturi doloribus reiciendis laudantium
                vitae, numquam tempore animi.</em></p>
            <ul>
              <li>Tuxtla Gutiérrez, Chiapas, México</li>
              <li>+52 961 113 5699</li>
              <li>samueladriang@gmail.com</li>
            </ul>
          </div>

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Bachelor of Computer Systems Engineer</h4>
            <h5>2006 -2010</h5>
            <p><em>Instituto Tecnológico de Tapachula</em></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa rem deleniti dolor sequi! Vitae
              doloremque molestiae quas pariatur ratione officia, inventore, eligendi perferendis quasi est fuga
              laudantium facilis repellendus?</p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Web Developer - UNICACH</h4>
            <h5>Nov 2011 - Present</h5>
            <p><em>Tuxtla Gutiérrez, Chiapas, México</em></p>
            <ul>
              <li>Developing Web and Server-Client Systems</li>
              <li>Attention to Internal and External Users</li>
              <li>DBA (Oracle, MySQL)</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Web Developer (Remote) - HIGHTECH</h4>
            <h5>2017 - 2018</h5>
            <p><em>Tuxtla Gutiérrez, Chiapas, México</em></p>
            <ul>
              <li>Systems maintenance</li>
              <li>Developing Web Systems</li>
              <li>DBA (MySQL)</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Portfolio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, autem dolore! Blanditiis, itaque ratione dolor,
          repellat incidunt labore in officia magnam quod, maiores ipsam illum quas sequi rem praesentium quam.</p>
      </div>

      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-web">Web</li>
            <li data-filter=".filter-app">App</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="@/assets/img/portfolio/app01.png" class="img-fluid" alt="">
            <div class="portfolio-links">
              <a href="assets/img/portfolio/app01.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src="@/assets/img/portfolio/web01.png" class="img-fluid" alt="">
            <div class="portfolio-links">
              <a href="@assets/img/portfolio/web01.png" data-gallery="portfolioGallery" class="portfolio-lightbox"
                title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>lorem</p>
      </div>

      <!-- <div class="row" data-aos="fade-in">

        <div class="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="#" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" class="form-control" id="name" required>
              </div>
              <div class="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" class="form-control" name="email" id="email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Subject</label>
              <input type="text" class="form-control" name="subject" id="subject" required>
            </div>
            <div class="form-group">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="10" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><a class="btn btn-primary">Send Message</a></div>
          </form>
        </div>

      </div> -->

    </div>
  </section>
  <FooterComp />
  <!-- <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> -->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><span class="material-icons-round">arrow_upward</span></a>
</template>

<style scoped>
.material-icons-round {
  color: white;
}
</style>
