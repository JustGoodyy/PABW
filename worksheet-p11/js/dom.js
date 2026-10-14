const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

export const barisFilter = document.querySelector("#filter");
export const tombolAturUlang = document.querySelector("#atur-ulang");
export const form = document.querySelector("form");
const tombolKirim = form.querySelector("button[type='submit']");
export const semuaInput = form.querySelectorAll("input, textarea");

export function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;

  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function saring(state) {
  return state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" || proyek.kategori === state.kategoriAktif
  );
}

export function render(state) {
  tandaiTombolAktif(state.kategoriAktif);

  wadah.textContent = ""; 

  const tampil = saring(state); 

  if (tampil.length === 0) { 
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  tampil.forEach((item) => wadah.append(buatKartu(item)));
}

export function periksaSeluruhForm() {
  let sah = true;
  semuaInput.forEach((kolom) => {
    if (kolom.value.trim() === "") {
      sah = false;
    }
  });
  tombolKirim.disabled = !sah;
}

export function aturPesanGalat(kolom, isError) {
  const induk = kolom.parentElement;
  let pesan = induk.querySelector(".teks-galat");

  if (isError) {
    kolom.setAttribute("aria-invalid", "true");

    if (!pesan) {
      pesan = document.createElement("span");
      pesan.className = "teks-galat";
      pesan.style.color = "var(--color-danger)";
      pesan.style.fontSize = "var(--text-sm)";
      pesan.style.display = "block";
      pesan.textContent = "Kolom ini tidak boleh kosong atau hanya spasi.";
      induk.append(pesan);
    }
  } else {
    kolom.removeAttribute("aria-invalid");
    if (pesan) pesan.remove();
  }
}