<template>
  <section id="about" class="about-section">
    <h2 class="section-title" data-aos="fade-up">About Us</h2>
    <div class="about-content">
      <div class="about-card" data-aos="fade-up" data-aos-delay="100">
        <div class="card-icon">🎯</div>
        <h3>Our Mission</h3>
        <p>We are dedicated to improving lives through sustainable community development, education, and support programs.</p>
      </div>
      <div class="about-card" data-aos="fade-up" data-aos-delay="200">
        <div class="card-icon">🌟</div>
        <h3>Our Vision</h3>
        <p>Creating a world where every individual has access to education, resources, and opportunities for growth.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(135deg, #ffffff 0%, #F9FAFB 100%);
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.about-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.about-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.about-card p {
  color: #4B5563;
  line-height: 1.7;
}
</style>