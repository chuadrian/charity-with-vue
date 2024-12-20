<script setup>
const mediaItems = [
  {
    type: 'video',
    title: 'Our Impact Story',
    url: 'https://youtube.com/embed/your-video-id'
  },
  {
    type: 'news',
    title: 'Community Impact Award 2024',
    description: 'Hope Foundation receives recognition for community service excellence'
  }
]
</script>

<template>
  <section id="media" class="section">
    <h2 class="section-title">Media</h2>
    <div class="media-grid">
      <div v-for="(item, index) in mediaItems" 
           :key="index" 
           class="media-item">
        <template v-if="item.type === 'video'">
          <iframe 
            :src="item.url" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="video-frame">
          </iframe>
        </template>
        <template v-else>
          <div class="news-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.media-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.video-frame {
  width: 100%;
  aspect-ratio: 16/9;
}

.news-item {
  padding: 1.5rem;
}

.news-item h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}
</style>