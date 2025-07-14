<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import About from './components/About.vue'
import Nav from './components/Nav.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JS 
import $ from 'jquery'; // Import jQuery
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Certificate from './components/Certificate.vue';
import buttontop from './components/buttontop.vue';
 AOS.init();

</script>   


    <style>
@import url('style.css');
#top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

#top-btn:hover {
  background-color: #555;
}

</style>



<template>
    <Nav />
      <!-- Konten utama -->
      <div class="bg" style="background-image: url('/background.jpg'); background-size: cover; background-position: center; width: 100%; height: 100vh;">
        <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
           <div data-aos="fade-up"
          data-aos-duration="3000">
          <h1 class="cover">Reynato 
            <a style="color: rgb(196, 6, 221);">Muliawan</a></h1>
           
            <div class="container">
  <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
  <center> <span class="text-center "> <br> </span></center>
</div>
        </div>
      </div>
      </div>
    <About />
    <Skills />
    <Project />
    <Certificate/>
    <div>
    <button id="top-btn" title="Kembali ke Atas" @click="scrollToTop" v-show="showButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
    </button>
    <!-- Konten lainnya -->
  </div>
    <Footer  />
    
</template>



<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
