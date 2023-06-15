<script setup>
import NavbarComp from '@components/NavbarComp.vue'
import HeroComp from '@components/HeroComp.vue'
import FooterComp from '@components/FooterComp.vue'
import { onMounted } from "vue";
import Isotope from "isotope-layout";
import AOS from "aos";
import PureCounter from "@srexi/purecounterjs"

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

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

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
  <NavbarComp />
  <HeroComp />
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>Sobre mi</h2>
        <p>Ingeniero en Sistemas Computacionales egresado en el 2010 del Instituto Tecnológico de Tapachula del estado de
          Chiapas. Soy un Desarrollador Web Full Stack con más de 12 años de experiencia. Apasionado de la programación y
          las nuevas tecnologías. Me describo como una persona que trata de crecer día a día, por esta razon soy
          autodidacta y trato de alcanzar mis metas y superar mis objetivos. En mi vida personal tengo una gran familia
          compuesta por mi esposa y mis 2 hijos, un niño de 5 años y una niña de 1 año.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="https://picsum.photos/id/201/351/351" class="img-fluid" alt="">
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Desarrollador Web</h3>
          <p class="fst-italic">
            Actualmente trabajo como un Desarrollador Web para la Universidad de Ciencias y Artes de Chiapas (UNICACH).
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Fecha de nacimiento:</strong> <span>19 Sep 1987</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong>
                  <span>https://alucardsam.github.io/</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Celular:</strong> <span>+52 961 113 5699</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Tuxtla Gutiérrez, Chiapas,
                    México</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Edad:</strong> <span>35</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Carrera:</strong> <span>Ingeniero en Sistemas
                    Computacionales</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>samueladriang@gmail.com</span>
                </li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
              </ul>
            </div>
          </div>
          <p>
            Funciones principales:
          <ul>
            <li><i class='bx bx-chevron-right'></i> Diseñar, planeficar y desarrollar sistemas para el procesamiento de la
              información.</li>
            <li><i class='bx bx-chevron-right'></i> Administrar y gestionar la captura y el almacenamiento de la
              información en sistemas de bases de datos relacionales.</li>
            <li><i class='bx bx-chevron-right'></i> Desarrollar mantenimientos y/o actualizaciones en sistemas web.</li>
            <li><i class='bx bx-chevron-right'></i> Mantenimiento de equipos de computo, así como supervisar el
              funcionamiento de una infraestructura.</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="facts" class="facts">
    <div class="container">
      <div class="section-title">
        <h2>Datos</h2>
        <p>Mis estadisticas estan divididas en 3 grupos; proyectos freelance, proyectos como encargado directo y proyectos
          en colaboración</p>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
          <div class="count-box">
            <i class="bx bx-happy-alt"></i>
            <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Proyecto</strong> desarrollado como freelance</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
          <div class="count-box">
            <i class="bx bx-code"></i>
            <span data-purecounter-start="0" data-purecounter-end="11" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Proyectos</strong> desarrollados como encargado directo</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
          <div class="count-box">
            <i class="bx bx-code-alt"></i>
            <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1"
              class="purecounter"></span>
            <p><strong>Proyectos</strong> desarrollados en colaboración</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="skills" class="skills section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Habilidades</h2>
        <p>A continuación estas son algunas de las tecnologías que he implementado en la mayoria de mis proyectos:</p>
      </div>
      <div class="row skills-content">
        <div class="mx-auto grid max-w-6xl grid-cols-4 gap-4 sm:grid-cols-8">
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/html5.png" width="120" height="120" alt="HTML5 LOGO" title="HTML5" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/css3.png" width="120" height="120" alt="CSS3 LOGO" title="CSS3" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/javascript.png" width="120" height="120" alt="JAVASCRIPT LOGO" title="JAVASCRIPT"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/php.png" width="120" height="120" alt="PHP LOGO" title="PHP" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/sql.png" width="120" height="120" alt="SQL LOGO" title="SQL" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/plsql.jpg" width="120" height="120" alt="PL/SQL LOGO" title="PL/SQL" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/codeigniter.png" width="120" height="120" alt="CODEIGNITER LOGO" title="CODEIGNITER"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/laravel.png" width="120" height="120" alt="LARAVEL LOGO" title="LARAVEL"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/nodejs.png" width="120" height="120" alt="NODEJS LOGO" title="NODEJS"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/expressjs.png" width="120" height="120" alt="EXPRESSJS LOGO" title="EXPRESSJS"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/rest.png" width="120" height="120" alt="REST LOGO" title="REST" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/soap.webp" width="120" height="120" alt="SOAP LOGO" title="SOAP" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/ajax.png" width="120" height="120" alt="AJAX LOGO" title="AJAX" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/mvc.jpg" width="120" height="120" alt="MVC LOGO" title="MVC" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/crud.png" width="120" height="120" alt="CRUD LOGO" title="CRUD" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/git.png" width="120" height="120" alt="GIT LOGO" title="GIT" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/github.png" width="120" height="120" alt="GITHUB LOGO" title="GITHUB"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/bitbucket.png" width="120" height="120" alt="BITBUCKET LOGO" title="BITBUCKET"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/trello.png" width="120" height="120" alt="TRELLO LOGO" title="TRELLO"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/jira.png" width="120" height="120" alt="JIRA LOGO" title="JIRA" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/xml.png" width="120" height="120" alt="XML LOGO" title="XML" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/json.png" width="120" height="120" alt="JSON LOGO" title="JSON" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/jwt.svg" width="120" height="120" alt="JWT LOGO" title="JWT" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/jsx.png" width="120" height="120" alt="JSX LOGO" title="JSX" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/jquery.png" width="120" height="120" alt="JQUERY LOGO" title="JQUERY"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/bootstrap.png" width="120" height="120" alt="BOOTSTRAP LOGO" title="BOOTSTRAP"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/docker.png" width="120" height="120" alt="DOCKER LOGO" title="DOCKER"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/vuejs.png" width="120" height="120" alt="VUE LOGO" title="VUE" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/react.png" width="120" height="120" alt="REACT LOGO" title="REACT" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/reactnative.jpg" width="120" height="120" alt="REACT NATIVE LOGO"
              title="REACT NATIVE" loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/microsoft.png" width="120" height="120" alt="MICROSOFT LOGO" title="MICROSOFT"
              loading="lazy"></div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/unix.png" width="120" height="120" alt="UNIX LOGO" title="UNIX" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/ubuntu.png" width="120" height="120" alt="UBUNTU LOGO" title="UBUNTU"
              loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/centos.png" width="120" height="120" alt="CENTOS LOGO" title="CENTOS"
              loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/oracle.png" width="120" height="120" alt="ORACLE LOGO" title="ORACLE"
              loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/mysql.png" width="120" height="120" alt="MYSQL LOGO" title="MYSQL" loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/mariadb.png" width="120" height="120" alt="MARIADB LOGO" title="MARIADB"
              loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/sqlite.jpg" width="120" height="120" alt="SQLITE LOGO" title="SQLITE"
              loading="lazy">
          </div>
          <div class="flex items-center justify-center" data-aos="zoom-out-up"><img class="rounded"
              src="@assets/img/skills/mongodb.png" width="120" height="120" alt="MONGODB LOGO" title="MONGODB"
              loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="resume" class="resume">
    <div class="container">
      <div class="section-title">
        <h2>CV</h2>
        <p>Para obtener mi Curriculum Vitae en formato PDF, favor de hacer clic en el siguiente icono <a
            href="/pdf/CV.pdf" class="text-black" download><i class="bx bxs-file-pdf text-3xl"></i></a></p>
      </div>
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up-right" data-aos-delay="100">
          <h3 class="resume-title">Resumen</h3>
          <div class="resume-item pb-0">
            <h4>Samuel González</h4>
            <p><em>Desarrollador Web Full Stack con más de 12 años de experiencia. </em></p>
            <ul>
              <li><i class='bx bx-chevron-right'></i> Tuxtla Gutiérrez, Chiapas, México</li>
              <li><i class='bx bx-chevron-right'></i> +52 961 113 5699</li>
              <li><i class='bx bx-chevron-right'></i> samueladriang@gmail.com</li>
            </ul>
          </div>
          <h3 class="resume-title">Educación</h3>
          <div class="resume-item">
            <h4>Ingeniero en Sistemas Computacionales</h4>
            <h5>2006 - 2010</h5>
            <p><em>Instituto Tecnológico de Tapachula</em></p>
            <p>Egresado en el año 2010 con título y cédula profesional (Número de cédula 6999208)</p>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up-left" data-aos-delay="100">
          <h3 class="resume-title">Professional Experience</h3>
          <div class="resume-item">
            <h4>Desarrollador Web - UNICACH</h4>
            <h5>Nov 2011 - Actualmente</h5>
            <p><em>Tuxtla Gutiérrez, Chiapas, México</em></p>
            <ul>
              <li><i class='bx bx-chevron-right'></i> Administración de Base de Datos (Oracle, MySQL)</li>
              <li><i class='bx bx-chevron-right'></i> Desarrollo de Sistemas Cliente - Servidor y Web</li>
              <li><i class='bx bx-chevron-right'></i> Orientación al Usuario Interno y Externo</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>Desarrollador Web (Remote) - HIGHTECH</h4>
            <h5>2017 - 2018</h5>
            <p><em>Tuxtla Gutiérrez, Chiapas, México</em></p>
            <ul>
              <li><i class='bx bx-chevron-right'></i> Desarrollo de Sistemas Web</li>
              <li><i class='bx bx-chevron-right'></i> Administración de Base de Datos (MySQL)</li>
              <li><i class='bx bx-chevron-right'></i> Mantenimiento del aplicativo vigente</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container">
      <div class="section-title">
        <h2>Portafolio</h2>
        <p>Dentro de mis 12 años de experiencia he desarrollado como freelance una página web y como
          desarrollador administrativo en la UNICACH he colaborado y desarrollado diferentes sistemas web, a continuación
          una breve descripción de mis proyectos:</p>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" class="filter-active">Todos</li>
            <li data-filter=".filter-freelance">Freelance</li>
            <li data-filter=".filter-colaboracion">Colaboración</li>
            <li data-filter=".filter-responsable">Responsable</li>
          </ul>
        </div>
      </div>
      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-4 col-md-6 portfolio-item filter-freelance">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/freelance01.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://mr-orocash.com.mx/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">Mr. Oro Cash &reg; | Monedas y Metales Finos | Compra y Venta
                </h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  MR. ORO CASH es una empresa con más de 25 años de experiencia en la industria y refinación de los
                  metales preciosos ofreciendo servicios de compra-venta y empeños de oro y plata en monedas, joyería y
                  platería en objetos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-colaboracion">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/colaboracion01.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/financieros/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">FINANCIEROS</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para el control financiero de la Universidad, creación de cheques, pólizas y reportes, así como
                  seguimiento de órdenes de compra, servicio, contra recibos, viáticos, otros documentos por pagar,
                  comprobación de gastos y catálogos de cuentas contables, fondos y cuentas bancarias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-colaboracion">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/colaboracion02.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/presupuesto/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">PRESUPUESTO</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema encargado del control del presupuesto por año de la Universidad, creación de disponibilidades,
                  aprobación del compromiso, reportes y catálogos de claves presupuestales, entre otros.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-colaboracion">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/colaboracion03.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/patrimonio/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">PATRIMONIO</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para el control de todos los bienes patrimoniales de la Universidad, altas y bajas de bienes,
                  transferencias, dictamen para bajas y reportes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-colaboracion">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/colaboracion04.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/alumnos/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">PORTAL DE ALUMNOS</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema del alumno, para consultar sus calificaciones, horarios y boletas, así como realizar su
                  inscripción o reinscripción cuando sea temporada de dicha actividad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable01.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/portal/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">PORTAL DOCENTE</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Portal para el seguimiento de las capturas de calificaciones desde parciales hasta ordinarios y
                  extraordinarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable02.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/tramites/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">TRAMITES EN LÍNEA (CONSTANCIAS)</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Portal para generar constancias en línea, este sistema cuenta con 2 módulos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable03.png" alt="Usuario" class="object-cover" />
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">PAGOS ELECTRÓNICOS (SERVICIO Y BITÁCORAS)</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para generar links de pagos y obtener respuesta vía POST por cobros de los diferentes conceptos en los diversos sistemas de la Universidad (reinscripción, inscripciones, constancias).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable04.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/scuid/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">SICUID</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema del Centro Universitario de Información y Documentación (CUID) para generar préstamos, renovaciones y pagos de multas, así como alta de libros con ficha y formato MARC 21.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable05.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/scuidusuarios/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">SICUID USUARIOS</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para generar auto préstamos y renovaciones en línea de los libros disponibles de las diversas bibliotecas posicionadas en las diferentes sedes de la Universidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable06.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/ssocial/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">SSOCIAL</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para el control del servicio social de los alumnos, este sistema cuenta con 2 módulos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable07.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/ssocial_alumnos/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">SSOCIAL ALUMNOS</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para el control del servicio social del alumno, vinculación de un programa del servicio social vigente y con disponibilidad, generación de documentos como ficha de la solicitud, carta de presentación y carta compromiso, seguimiento de informes bimestrales y comunicación por medio de notificaciones al correo institucional de las observaciones del coordinador.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable08.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/validacion/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">VISOR DE USUARIOS</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para consultar el estatus e información relevante de todos los usuarios de la Universidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable09.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/validacion/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">TÍTULO ELECTRÓNICO</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para generar el envío a la DGP de los últimos títulos registrados, creación del archivo XML sellado con las firmas digitales del rector, secretario general y director.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable10.png" alt="Usuario" class="object-cover" />
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">CREACIÓN DE ARCHIVOS PEM</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema encargado de generar los archivos PEM para generar el sello de las firmas digitales de los títulos electrónicos a partir de los certificados del SAT.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 portfolio-item filter-responsable">
          <div class="portfolio-wrap">
            <div class="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl">
              <img src="@/assets/img/portfolio/responsable11.png" alt="Usuario" class="w-full object-cover" />
              <div class="portfolio-links">
                <a href="https://siia.unicach.mx/encuesta/" target="_blank"><i class="bx bx-link"></i></a>
              </div>
              <div class="bg-gray-900 mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
                <h3 class="text-white text-lg font-semibold">ENCUESTA DE SATISFACCIÓN</h3>
              </div>
              <div class="px-6 py-4 flex flex-col gap-2">
                <p class="text-gray-500">
                  Sistema para generar y configurar las encuestas de satisfacción para alumnos inscritos en el quinto semestre. El alumno debe realizar esta encuesta para tener derecho a inscribirse al siguiente semestre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contacto</h2>
        <p>Favor de contactarme por medio de un correo electrónico o vía whatsapp a los siguientes datos de contacto</p>
      </div>
      <div class="row" data-aos="fade-in">
        <div class="col-lg-12 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="bx bx-current-location"></i>
              <h4>Location:</h4>
              <p>Tuxtla Gutiérrez, Chiapas, México</p>
            </div>
            <div class="email">
              <i class="bx bx-envelope"></i>
              <h4>Email:</h4>
              <p><a class="text-decoration-none text-dark"
                  href="mailto:samueladriang@gmail.com">samueladriang@gmail.com</a></p>
            </div>
            <div class="phone">
              <i class="bx bxl-whatsapp"></i>
              <h4>Call:</h4>
              <p><a class="text-decoration-none text-dark"
                  href="https://api.whatsapp.com/send?phone=529611135699&amp;text=Hola%2C+revise+tu+p%C3%A1gina+web+y+quiero+contactarme+contigo">+52
                  961 113 5699</a></p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61129.858479175615!2d-93.1707694296455!3d16.745993463026686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd85611d06e8f%3A0xdd78bd7b4662216a!2sTuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1686789148318!5m2!1ses-419!2smx"
              frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
          </div>
        </div>
        <!-- <div class="col-lg-12 mt-5 mt-lg-0 d-flex align-items-stretch">
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
        </div> -->
      </div>
    </div>
  </section>
  <FooterComp />
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><span
      class="material-icons-round">arrow_upward</span></a>
</template>

<style scoped>
.material-icons-round {
  color: white;
}

.btn-links {
  @apply relative ml-5 text-white no-underline text-3xl
}
</style>
