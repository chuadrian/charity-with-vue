<template>
  <section id="success" class="success-section">
    <h2 class="section-title" data-aos="fade-up">Success Stories</h2>
    <div class="stories-grid">
      <div v-for="(story, index) in stories" 
           :key="index" 
           class="success-story"
           :data-aos="'fade-up'"
           :data-aos-delay="index * 100">
        <div class="story-content">
          <h3>{{ story.title }}</h3>
          <p>{{ story.description }}</p>
          <div class="impact">{{ story.impact }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stories = [
  {
    title: 'Community Education Initiative',
    description: "Through our education program, we've helped over 1000 children access quality education.",
    impact: '1000+ students supported'
  },
  {
    title: 'Clean Water Project',
    description: 'Provided clean water access to 15 communities, impacting over 5000 lives.',
    impact: '5000+ lives improved'
  }
]
</script>

<style scoped>
.success-section {
  background: linear-gradient(135deg, #F9FAFB 0%, #EEF2FF 100%);
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.success-story {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.success-story:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.15);
}

.story-content {
  padding: 2.5rem;
}

.story-content h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.story-content p {
  color: #4B5563;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.impact {
  font-weight: 600;
  color: var(--accent-color);
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  background: rgba(244, 114, 182, 0.1);
  border-radius: 50px;
  display: inline-block;
}
</style>