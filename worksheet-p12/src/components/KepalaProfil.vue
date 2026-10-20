<script setup>
defineProps({
  profil: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header class="kepala">
    <h1>{{ profil.nama }}</h1>
    <p class="tagline">{{ profil.peran }}</p>

    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#karya">Karya</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><a href="#galeri">Galeri</a></li>
      </ul>
    </nav>
  </header>
</template>