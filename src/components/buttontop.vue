<template>
   <button id="top-btn" title="Kembali ke Atas">Top</button>
</template>



<style scoped>
#top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: none;
}

#top-btn:hover {
  background-color: #555;
}
</style>


<script setup>
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>