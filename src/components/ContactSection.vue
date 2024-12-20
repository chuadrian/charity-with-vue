<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title" data-aos="fade-up">Contact Us</h2>
    <div class="contact-container">
      <div class="contact-info" data-aos="fade-right">
        <div class="info-card">
          <div class="info-icon">📍</div>
          <h3>Our Location</h3>
          <p>123 Hope Street, Charity Lane<br/>New York, NY 10001</p>
        </div>
        <div class="info-card">
          <div class="info-icon">📞</div>
          <h3>Phone Number</h3>
          <p>+1 (555) 123-4567<br/>Mon - Fri, 9am - 6pm</p>
        </div>
        <div class="info-card">
          <div class="info-icon">✉️</div>
          <h3>Email Address</h3>
          <p>info@hopefoundation.org<br/>support@hopefoundation.org</p>
        </div>
      </div>
      <form class="contact-form" action="https://formspree.io/f/mrbgkpqn" method="POST" data-aos="fade-left">
        <div class="form-header">
          <h3>Send us a Message</h3>
          <p>We'd love to hear from you!</p>
        </div>
        <div class="form-group">
          <input type="text" id="name" name="name" required class="form-input" placeholder="Your Name">
          <label for="name" class="form-label">Your Name</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" name="email" required class="form-input" placeholder="Your Email">
          <label for="email" class="form-label">Your Email</label>
        </div>
        <div class="form-group">
          <select id="subject" name="subject" required class="form-input">
            <option value="">Select Subject</option>
            <option value="donation">Donation Inquiry</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="partnership">Partnership Proposal</option>
            <option value="other">Other</option>
          </select>
          <label for="subject" class="form-label">Subject</label>
        </div>
        <div class="form-group">
          <textarea id="message" name="message" required class="form-input" placeholder="Your Message" rows="5"></textarea>
          <label for="message" class="form-label">Your Message</label>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);
  position: relative;
  overflow: hidden;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.15);
}

.info-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info-card h3 {
  color: var(--primary-color);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #4B5563;
  line-height: 1.6;
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #4B5563;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #F9FAFB;
  color: var(--text-color);
}

.form-input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
  outline: none;
}

.form-label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
  color: #6B7280;
}

.form-input:focus ~ .form-label,
.form-input:not(:placeholder-shown) ~ .form-label {
  transform: translateY(-2.5rem);
  font-size: 0.875rem;
  color: var(--primary-color);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: var(--gradient);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>