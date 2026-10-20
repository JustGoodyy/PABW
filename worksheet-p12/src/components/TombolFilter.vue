<script setup>
defineProps({
  kategoriAktif: {
    type: String,
    required: true
  }
})

defineEmits(['pilih'])
</script>

<template>
  <div id="filter">
    <button 
      data-kategori="semua" 
      :class="{ aktif: kategoriAktif === 'semua' }"
      @click="$emit('pilih', 'semua')"
    >Semua</button>
    <button 
      data-kategori="app" 
      :class="{ aktif: kategoriAktif === 'app' }"
      @click="$emit('pilih', 'app')"
    >App</button>
    <button 
      data-kategori="web" 
      :class="{ aktif: kategoriAktif === 'web' }"
      @click="$emit('pilih', 'web')"
    >Web</button>
    <button 
      data-kategori="game" 
      :class="{ aktif: kategoriAktif === 'game' }"
      @click="$emit('pilih', 'game')"
    >Game</button>
  </div>
</template>