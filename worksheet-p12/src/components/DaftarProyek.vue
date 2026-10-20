<script setup>
defineProps({
  daftar: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <ul id="daftar">
      <li v-for="proyek in daftar" :key="proyek.id" class="kartu">
        {{ proyek.judul }}
      </li>
    </ul>
    <p id="pesan-kosong" v-if="daftar.length === 0">Tidak ada proyek pada kategori itu.</p>
  </div>
</template>