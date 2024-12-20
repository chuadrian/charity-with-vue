<template>
  <header class="nav-header">
    <nav class="nav-container">
      <a v-for="section in sections"
         :key="section"
         :href="'#' + section"
         class="nav-link">
        {{ section.charAt(0).toUpperCase() + section.slice(1) }}
      </a>
    </nav>
  </header>
</template>

<script setup>
const sections = ['welcome', 'about', 'success', 'gallery', 'media', 'contact', 'donate']
</script>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
  padding: 1rem;
  font-size: 30px;
  font-weight: 500;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(79, 70, 229, 0.1);
}
</style>