<template>
  <section id="welcome" class="welcome-section">
    <div class="welcome-content">
      <h1 class="welcome-title" data-aos="fade-up">Welcome to Hope Foundation</h1>
      <h2 class="welcome-subtitle" data-aos="fade-up" data-aos-delay="100">Making a Difference Together</h2>
      <p class="welcome-text" data-aos="fade-up" data-aos-delay="200">Join us in our mission to create positive change in our community</p>
      <a href="#donate" class="button" data-aos="fade-up" data-aos-delay="300">Donate Now</a>
    </div>
    <div class="welcome-shape"></div>
  </section>
</template>

<style scoped>
.welcome-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);
  padding-top: 6rem;
}

.welcome-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.welcome-title {
  font-size: 4rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.welcome-text {
  font-size: 1.75rem;
  color: #4B5563;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.welcome-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to right bottom, transparent 49%, #ffffff 50%);
}
</style>