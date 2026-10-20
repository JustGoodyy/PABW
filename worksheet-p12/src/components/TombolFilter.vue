<script setup>
import { state, pilihKategori } from '../state.js';
</script>

<template>
  <div id="filter">
    <button 
      data-kategori="semua" 
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >Semua</button>
    
    <button 
      data-kategori="app" 
      :class="{ aktif: state.kategoriAktif === 'app' }"
      @click="pilihKategori('app')"
    >App</button>
    
    <button 
      data-kategori="web" 
      :class="{ aktif: state.kategoriAktif === 'web' }"
      @click="pilihKategori('web')"
    >Web</button>
    
    <button 
      data-kategori="game" 
      :class="{ aktif: state.kategoriAktif === 'game' }"
      @click="pilihKategori('game')"
    >Game</button>
  </div>
</template>