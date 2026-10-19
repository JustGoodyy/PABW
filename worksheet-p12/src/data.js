export const profil = {
  nama: "Raja Augustav Noer",
  peran: "Mahasiswa Informatika yang biasa saja",
  keahlian: ["HTML", "CSS", "JavaScript", "Java", "Claude", "Gemini"],
  jumlahproyek: 3,
};

export const daftarProyek = [
  { judul: "PAKAROTO", kategori: "app", tahun: 2026, selesai: true },
  { judul: "NGUBER", kategori: "app", tahun: 2026, selesai: true },
  { judul: "Buat Game", kategori: "game", tahun: 2027, selesai: false }
];


export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");