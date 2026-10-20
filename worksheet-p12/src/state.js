import { reactive } from 'vue';
import { daftarProyek as dataAwal } from './data.js';

export const state = reactive({
  daftarProyek: dataAwal,
  kategoriAktif: 'semua',
});

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}