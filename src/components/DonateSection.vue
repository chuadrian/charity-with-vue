<script setup>
const donationOptions = [
  {
    type: 'one-time',
    title: 'One-Time Donation',
    description: 'Make a direct impact with a one-time contribution',
    buttonText: 'Donate Now'
  },
  {
    type: 'monthly',
    title: 'Monthly Giving',
    description: 'Join our monthly giving program to provide sustained support',
    buttonText: 'Become a Monthly Donor'
  }
]
</script>

<template>
  <section id="donate" class="section">
    <h2 class="section-title">Support Our Cause</h2>
    <div class="donation-options">
      <div v-for="(option, index) in donationOptions" 
           :key="index" 
           class="donation-option">
        <h3>{{ option.title }}</h3>
        <p>{{ option.description }}</p>
        <button class="button">{{ option.buttonText }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donation-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.donation-option {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.donation-option:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.donation-option h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.donation-option p {
  margin-bottom: 1.5rem;
}
</style>