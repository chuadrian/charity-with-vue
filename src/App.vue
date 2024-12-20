<script setup>
import Navigation from './components/Navigation.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import AboutSection from './components/AboutSection.vue'
import SuccessSection from './components/SuccessSection.vue'
import GallerySection from './components/GallerySection.vue'
import MediaSection from './components/MediaSection.vue'
import ContactSection from './components/ContactSection.vue'
import DonateSection from './components/DonateSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <main>
    <WelcomeSection />
    <AboutSection />
    <SuccessSection />
    <GallerySection />
    <MediaSection />
    <ContactSection />
    <DonateSection />
  </main>
  <Footer />
</template>

<style>
@import './style.css';
</style>