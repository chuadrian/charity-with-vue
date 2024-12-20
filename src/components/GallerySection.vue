<script setup>
const images = [
  { src: 'https://media.istockphoto.com/id/1572436997/photo/diversity-and-inclusion-at-workplace-lgbt-leadership.jpg?s=612x612&w=0&k=20&c=Vz3X2zI-QSfqqL3nHSOko9g75gIVmTG9jbe5WNSavRU=', alt: 'Community event' },
  { src: 'https://media.istockphoto.com/id/1939499353/photo/creating-art-for-a-sustainable-future.jpg?s=612x612&w=0&k=20&c=8e3vgoSwb7absLp67LTEoi3HX5_iagmD7Xz5qFsr5I4=', alt: 'Education program' },
  { src: 'https://media.istockphoto.com/id/1690935364/photo/excited-to-start-the-run.jpg?s=612x612&w=0&k=20&c=iHf9tZQ7OjjmZjRz0OHr_sz7dM18_hO6YiEUL7ySH80=', alt: 'Volunteer work' },
  { src: 'https://media.istockphoto.com/id/1633455269/photo/group-of-multigenerational-people-smiling-and-laughing-outdoor-multiracial-friends-of.jpg?s=612x612&w=0&k=20&c=treVuU69gtVRuWFhJRZmCz2SGq-gkfr_0ll-ZCC7G_8=', alt: 'Clean water project' },
  { src: 'https://media.istockphoto.com/id/1199706239/photo/at-park-cleanup-event-two-women-greet-and-shake-hands.jpg?s=612x612&w=0&k=20&c=T49wYE_ME8G_vL_Jtd53ZOKejH2cT4Q6rS-YTk3_Byk=', alt: 'Healthcare initiative' },
  { src: 'https://media.istockphoto.com/id/1557600957/vector/diverse-human-hands-holding-speech-bubbles-people-talking-exchange-ideas-team-cooperation.jpg?s=612x612&w=0&k=20&c=Z4ux7eLRgJyQwjSmX5enBuxix3IEqpoq9UvLq0FQVys=', alt: 'Youth development' }
]
</script>

<template>
  <section id="gallery" class="section">
    <h2 class="section-title" data-aos="fade-up">Picture Gallery</h2>
    <div class="gallery">
      <div v-for="(image, index) in images" 
           :key="index" 
           class="gallery-item"
           :data-aos="'fade-up'"
           :data-aos-delay="index * 100">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery-item {
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
  aspect-ratio: 16/9;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item:hover {
  transform: scale(1.05);
}
</style>