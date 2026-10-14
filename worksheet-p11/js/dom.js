import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li"); 
  li.className = "kartu"; 
  li.textContent = proyek.judul; 
  
  return li;
}

function render(daftar) {
  wadah.textContent = ""; 

  if (daftar.length === 0) {
    kosong.hidden = false;
    return; 
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

render(daftarProyek);

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;            

  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
});

const form = document.querySelector("form");
const tombolKirim = form.querySelector("button[type='submit']");
const semuaInput = form.querySelectorAll("input, textarea");

function periksaSeluruhForm() {
  let sah = true;
  semuaInput.forEach((kolom) => {
    if (kolom.value.trim() === "") {
      sah = false;
    }
  });
  tombolKirim.disabled = !sah; 
}

function aturPesanGalat(kolom, isError) {
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
    // Hapus pesan galat dari halaman jika isinya sudah benar
    if (pesan) pesan.remove(); 
  }
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

