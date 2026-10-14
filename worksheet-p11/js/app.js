const proyekUrut = [...daftarProyek].sort((a, b) => b.tahun - a.tahun);

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);

console.log(buatPerkenalan({ nama: "Wahyu", peran: "Desainer" }));
console.log(formatKeahlian(["ML", "CS", "Valo"]));

console.log("Salinan yang sudah diurutkan:");
console.table(proyekUrut);

console.log("Data asli: ");
console.table(daftarProyek);

console.table(profil.keahlian);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const proyekPakaroto = daftarProyek.find((proyek) => proyek.judul === "PAKAROTO");
console.log(proyekPakaroto);