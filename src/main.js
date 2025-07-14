import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS CSS
// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'
import AOS from 'aos'; // Import AOS library
import $ from 'jquery';
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

const app = createApp(App);

app.mount('#app');

// Initialize AOS after mounting the app
AOS.init({
  // Optional: Configure global options
  // duration: 1000,
  // once: true,
});

