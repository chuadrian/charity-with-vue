import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  })
})

createApp(App).mount('#app')