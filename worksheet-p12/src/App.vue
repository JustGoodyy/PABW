<!-- src/App.vue -->
<script setup>
import { onMounted, watch } from 'vue';
import { profil } from './data.js';
import { state } from './state.js';
import { simpan, muat, aturUlang } from './simpanan.js';

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  const simpanan = muat();
  state.kategoriAktif = simpanan?.kategoriAktif ?? 'semua';
});

watch(state, (nilaiTerbaru) => {
  simpan(nilaiTerbaru);
}, { deep: true });

function aturUlangPilihan() {
  aturUlang();
  state.kategoriAktif = 'semua';
}
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <KepalaProfil :profil="profil" />

  <main id="utama">
    <section id="tentang">
      <h2>Tentang saya</h2>
      <figure class="foto">
        <img src="/media/foto-aing.png" alt="Foto profil Raja Augustav Noer." width="480" height="480" loading="lazy">
        <figcaption>Raja Augustav Noer.</figcaption>
      </figure>
      <p>Saya mahasiswa Program Studi Informatika Universitas Islam Indonesia. Saya tertarik pada berbagai macam bidang IT seperti Web Development, Cyber Security, dan Data Science.</p>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>
      <ul>
        <li>Halaman Kelas Terbuka Kampus — praktikum P03, HTML semantik dan form.</li>
        <li>Announcement Bot Discord — pengambilan data dari website kampus dengan Discord API menggunakan web scraping.</li>
        <li>Aplikasi Manajemen Bengkel — aplikasi sederhana untuk mengelola data bengkel.</li>
      </ul>
    </section>

    <FormKontak />

    <section id="galeri">
      <h2>Galeri Proyek</h2>
      
      <TombolFilter/>

      <p>
        <button type="button" id="atur-ulang" @click="aturUlangPilihan">Atur Ulang</button>
      </p>

      <DaftarProyek/>
    </section>
  </main>

  <footer class="kaki">
    <p>Raja Augustav Noer · 25523008 · <time datetime="2026">2026</time></p>
  </footer>
</template>