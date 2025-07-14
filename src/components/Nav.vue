<template>
    <nav class="navbar navbar-expand-lg bg-body-transparance text-white">
    <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
     <ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skilss</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Certificate</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="d-flex justify-content-center">
  <button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>
</div>

<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  
  </div>
  
</div>
</nav>
</template>

<style scoped>
.navbar,
.navbar .nav-link,
.navbar .nav-link.active,
.navbar .nav-link.disabled {
    color: #fff !important;
}

/* Make underline purple for active and hovered nav-link */
.nav-underline .nav-link.active,
.nav-underline .nav-link:focus,
.nav-underline .nav-link:hover {
    color: #fff !important;
    border-bottom: 2px solid #8b0ec5 !important;
}
</style>