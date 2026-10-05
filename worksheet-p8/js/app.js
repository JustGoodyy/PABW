const profil = {
  nama: "Raja Augustav Noer",
  peran: "Mahasiswa Informatika yang biasa saja",
  keahlian: ["HTML", "CSS", "JavaScript", "Java", "Claude", "Gemini"],
  jumlahproyek: 3,
};

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan({ nama: "Wahyu", peran: "Desainer" }));
console.log(formatKeahlian(["ML", "CS", "Valo"]));