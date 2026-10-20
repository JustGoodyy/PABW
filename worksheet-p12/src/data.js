export const profil = {
  nama: "Raja Augustav Noer",
  peran: "Mahasiswa Informatika yang biasa saja",
  keahlian: ["HTML", "CSS", "JavaScript", "Java", "Claude", "Gemini"],
  jumlahproyek: 3,
};

export const daftarProyek = [
  { id: 1, judul: "PAKAROTO", kategori: "app", tahun: 2026, selesai: true },
  { id: 2, judul: "NGUBER", kategori: "app", tahun: 2026, selesai: true },
  { id: 3, judul: "Buat Game", kategori: "game", tahun: 2027, selesai: false }
];


export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");