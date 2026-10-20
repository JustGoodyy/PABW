<script setup>
import { computed } from 'vue';
import { state } from '../state.js';

const daftarTersaring = computed(() =>
  state.daftarProyek.filter(
    (p) => state.kategoriAktif === 'semua' || p.kategori === state.kategoriAktif
  )
);
</script>

<template>
  <p v-if="daftarTersaring.length === 0" id="pesan-kosong">
    Tidak ada proyek pada kategori itu.
  </p>

  <ul v-else id="daftar">
    <li
      v-for="proyek in daftarTersaring"
      :key="proyek.id"
      class="kartu"
    >
      {{ proyek.judul }}
    </li>
  </ul>
</template>