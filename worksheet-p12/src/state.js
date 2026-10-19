import { daftarProyek } from './data.js';
import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;
const KATEGORI_BAWAAN = "semua";

export const state = {
  daftarProyek: daftarProyek,
  kategoriAktif: KATEGORI_BAWAAN,
};

export function simpan(stateSaatIni) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateSaatIni.kategoriAktif,
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); 
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function muatKeadaanAwal() {
  const simpanan = muat();
  state.kategoriAktif = simpanan?.kategoriAktif ?? KATEGORI_BAWAAN;
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai ?? KATEGORI_BAWAAN;
  simpan(state);
  render(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = KATEGORI_BAWAAN;
  render(state);
}