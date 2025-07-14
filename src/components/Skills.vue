<template>
  <div class="container text-center">
    <div data-aos="fade-right">
    <h1 class="py-4 text-start">Skills</h1>
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-2">
      <div class="col mb-4">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=6kZdxe7t8OL1&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>Microsoft Office</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>HTML</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>Bootstrap</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>Tailwind CSS</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>PHP</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>JavaScript</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>React</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=8gfeOoqrHqJU&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>Figma</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>CSS</figcaption>
        </figure>
        </div>
      </div>
      </div>
      <div class="col">
      <div class="p-3 border-0 bg-custom rounded">
        <div class="zoom"> 
        <figure>
          <img class="rounded" src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000" alt="icon" width="100" height="100">
          <figcaption>Vue</figcaption>
        </figure>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: ['JavaScript', 'Vue.js', 'HTML', 'CSS']
        };
    }
};
</script>

<style scoped>
.skills {
    padding: 1rem;
}
.skills h2 {
    margin-bottom: 0.5rem;
}
.skills ul {
    list-style: none;
    padding: 0;
}
.skills li {
    background: #f0f0f0;
    margin-bottom: 0.25rem;
    padding: 0.5rem;
    border-radius: 4px;
}
</style>