// const profil = {
//   nama: "Raja Augustav Noer",
//   peran: "Mahasiswa Informatika yang biasa saja",
//   keahlian: ["HTML", "CSS", "JavaScript", "Java", "Claude", "Gemini"],
//   jumlahproyek: 3,
// };

// export const daftarProyek = [
//   { judul: "PAKAROTO", kategori: "app", tahun: 2026, selesai: true },
//   { judul: "NGUBER", kategori: "app", tahun: 2026, selesai: true },
//   { judul: "Buat Game", kategori: "game", tahun: 2027, selesai: false }
// ];

// const proyekUrut = [...daftarProyek].sort((a, b) => b.tahun - a.tahun);

// const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
// console.log(kalimat);

// function buatPerkenalan({ nama, peran }) {
//   return `${nama} — ${peran}`;
// }

// const formatKeahlian = (daftar) => daftar.join(" · ");

// console.log(buatPerkenalan({ nama: "Wahyu", peran: "Desainer" }));
// console.log(formatKeahlian(["ML", "CS", "Valo"]));

// console.log("Salinan yang sudah diurutkan:");
// console.table(proyekUrut);

// console.log("Data asli: ");
// console.table(daftarProyek);

// console.table(profil.keahlian);

// const selesai = daftarProyek.filter((proyek) => proyek.selesai);
// console.table(selesai);

// const proyekPakaroto = daftarProyek.find((proyek) => proyek.judul === "PAKAROTO");
// console.log(proyekPakaroto);

import { ambilDataUsers } from './api.js';

const wadah = document.querySelector('#daftar');

function gambar(daftar) {
    wadah.textContent = '';
    
    daftar.forEach(function (item) {
        const kartu = document.createElement('article');
        kartu.className = 'kartu-info'; 

        const judul = document.createElement('h3');
        judul.textContent = item.Agenda;

        const infoPenulis = document.createElement('p');
        infoPenulis.textContent = `Oleh: ${item.penulis.nama} (${item.penulis.ruangan})`;

        kartu.appendChild(judul);
        kartu.appendChild(infoPenulis);

        wadah.appendChild(kartu);
    });
}

async function tampilkan() {
    wadah.textContent = 'Memuat data...';
    
    try {
        const daftar = await ambilDataUsers();

        if (daftar.length === 0) {
            wadah.textContent = 'Belum ada notisia.';
            return;
        }

        gambar(daftar);
        
    } catch (galat) {
        wadah.textContent = 'Gagal memuat data: ' + galat.message;
    }
}

tampilkan();