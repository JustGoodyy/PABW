import { pilihKategori, aturUlang } from './state.js';
import {
  barisFilter,
  tombolAturUlang,
  form,
  semuaInput,
  periksaSeluruhForm,
  aturPesanGalat,
} from './dom.js';

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
  });

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  semuaInput.forEach((kolom) => {
    kolom.addEventListener("input", () => {
      if (kolom.value.trim() === "") {
        aturPesanGalat(kolom, true);
      } else {
        aturPesanGalat(kolom, false);
      }
      periksaSeluruhForm();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let formSah = true;
    let kolomFokus = null;

    semuaInput.forEach((kolom) => {
      if (kolom.value.trim() === "") {
        aturPesanGalat(kolom, true);
        formSah = false;
        if (!kolomFokus) kolomFokus = kolom;
      }
    });

    if (!formSah) {
      kolomFokus.focus();
      return;
    }

    form.reset();
    periksaSeluruhForm();
  });
}