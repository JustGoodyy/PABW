<!DOCTYPE html>
<!--
  KERANGKA PROFIL — PABW 2026/2027 — Pertemuan 4
  ==================================================================
  Berkas ini SUDAH LENGKAP dan sudah lolos W3C Nu Html Checker serta
  Lighthouse Accessibility. JANGAN mengubah struktur, landmark, label,
  atau alt untuk memperbaiki tampilan — tampilan diubah dari berkas CSS.

  Tugas Anda di Pertemuan 4:
    1. Ganti isi yang ditandai  [ISI]  dengan milik Anda sendiri.
    2. Buat lima berkas CSS di folder css/ lalu buka komentar
       lima baris <link> di bawah  (lihat Lembar D).
    3. WAJIB — tambahkan MINIMAL TIGA bagian baru di dalam <main>,
       masing-masing memakai elemen semantik yang belum terpakai dan
       berbeda satu sama lain  (lihat Lembar B.3). Setiap bagian wajib
       diberi gaya memakai token yang sama, lalu dievaluasi W3C dan WCAG.
-->
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <!-- ISI 1 — judul tab dan hasil pencarian. Ganti dengan nama Anda. -->
    <title>Raja Augustav Noer — PABW 2026/2027</title>
    <meta name="description" content="Halaman profil mahasiswa PABW: tentang saya, karya, dan kontak.">
    
    <!-- LEMBAR D — buat lima berkas di folder css/, lalu buka komentar ini.
        URUTAN PEMUATAN MENENTUKAN CASCADE: tokens, base, layout, komponen, tema.
        Lapisan paling bawah menang tanpa perlu !important. -->
        
    <link rel="stylesheet" href="css/tema.css">
    <link rel="stylesheet" href="css/tokens.css"> 
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/komponen.css">
  </head>
  <body>
    <a class="lewati" href="#utama">Lewati ke konten utama</a>

    <header class="kepala">
      <!-- ISI 2 — nama Anda, atau nama panggilan yang Anda pakai. -->
      <h1>Raja Augustav Noer</h1>
      <!-- ISI 3 — satu kalimat tentang diri Anda. -->
      <p class="tagline">Mahasiswa Informatika UII yang mencoba-coba web.</p>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#karya">Karya</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>
    </header>

    <main id="utama">

      <section id="tentang">
        <h2>Tentang saya</h2>

        <figure class="foto">
          <!-- ISI 4 — pakai foto Anda sendiri dengan nama berkas yang sama,
              atau biarkan berkas contoh apa adanya. -->
          <img src="media/foto-aing.png"
              alt="Foto profil Raja Augustav Noer."
              width="480" height="480" loading="lazy">
          <figcaption>Raja Augustav Noer.</figcaption>
        </figure>

        <!-- ISI 5 — dua sampai tiga kalimat: asal, minat, dan hal yang
            sedang Anda pelajari. -->
        <p>Saya mahasiswa Program Studi Informatika Universitas Islam Indonesia.
          Saya tertarik pada berbagai macam bidang IT seperti Web Development, Cyber Security, dan Data Science.
          Saya berharap dapat mengembangkan keterampilan dan pengetahuan dalam bidang-bidang tersebut.</p>

        <table>
          <!-- ISI 6 — judul tabel dan isi minimal tiga baris. -->
          <caption>Kegiatan yang saya ikuti semester ini</caption>
          <thead>
            <tr>
              <th scope="col">Kegiatan</th>
              <th scope="col">Peran</th>
              <th scope="col">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Praktikum PABW</th>
              <td>Peserta</td>
              <td><time datetime="2026-09">September 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Kelas Terbuka Kampus</th>
              <td>Peserta</td>
              <td><time datetime="2026-10">Oktober 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Organisasi kemahasiswaan</th>
              <td>Anggota</td>
              <td><time datetime="2026">2026</time></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="karya">
        <h2>Karya saya</h2>
        <!-- ISI 7 — tiga karya, proyek, atau hal yang pernah Anda buat.
            Boleh tugas kuliah, karya pribadi, atau hobi. -->
        <ul>
          <li>1. Halaman Kelas Terbuka Kampus — praktikum P03, HTML semantik dan form.</li>
          <li>2. Announcement Bot Discord — pengambilan data dari website kampus dengan Discord API menggunakan web scraping.</li>
          <li>3. Aplikasi Manajemen Bengkel — aplikasi sederhana untuk mengelola data bengkel.</li>
        </ul>
      </section>

      <section id="kontak">
        <h2>Hubungi saya</h2>
        <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

        <form action="#" method="post">
          <fieldset>
            <legend>Data pengirim</legend>
            
            <p>
              <label for="nama">Nama lengkap</label>
              <input id="nama" name="nama" type="text"
              autocomplete="name" required>
            </p>

            <p>
              <label for="email">Email</label>
              <input id="email" name="email" type="email"
              autocomplete="email" required>
            </p>
            
            <p>
              <label for="nim">NIM</label>
              <!-- ISI 8 — ganti angka di dalam pattern dengan NIM Anda sendiri. -->
              <input id="nim" name="nim" type="text" inputmode="numeric"
                    pattern="[0-9]{8}" aria-describedby="nim-bantuan" required>
              <span id="nim-bantuan">Delapan digit angka, contoh 25523008.</span>
            </p>

            <p>
              <label for="pesan">Pesan</label>
              <textarea id="pesan" name="pesan" rows="4" required></textarea>
            </p>
            
            <button type="submit">Kirim</button>
          </fieldset>
        </form>
      </section>
      
      <!-- STRUKTUR TAMBAHAN (Lembar B.3) — minimal tiga bagian baru di sini,
      sebelum tag penutup </main>. Wajib: satu <h2> per bagian, atribut id
        yang belum terpakai, elemen semantik yang berbeda satu sama lain, dan
        gaya memakai token yang sama. Tiga section di atas JANGAN diubah. -->

        <section id="galeri">
        <h2>Galeri Proyek</h2>
        <ul class="daftar-galeri">
          <li>
            <figure>
              <img src="media/bot-mudi.png" alt="Tangkapan layar bot Discord saat merespons perintah." style="width: 500px; height: 150px; " loading="lazy">
              <figcaption>Antarmuka pesan dari Discord Announcement Bot.</figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="media/pakaroto.png" alt="Tampilan dasbor aplikasi manajemen data bengkel." style="width: 500px; height: 150px;" loading="lazy">
              <figcaption>Dasbor manajemen transaksi aplikasi bengkel.</figcaption>
            </figure>
          </li>
        </ul>
      </section>

        <section id="faq">
          <h2>Pertanyaan Umum</h2>
          <details>
            <summary>Apa fokus teknologi yang sedang Anda tekuni saat ini?</summary>
            <p>Saat ini saya sedang mendalami pengembangan antarmuka web modern, dan keamanan sistem cyber.</p>
          </details>
          <details>
            <summary>Apakah terbuka untuk kolaborasi proyek?</summary>
            <p>Ya, saya sangat terbuka untuk berdiskusi maupun berkolaborasi pada proyek web atau bot otomatisasi.</p>
          </details>
        </section>
        
        <section id="prinsip">
          <h2>Prinsip dan Quote</h2>
          <blockquote>
          <p>"Just do it! Dont Think!"</p>
          <footer>— <cite>Wise Man</cite></footer>
        </blockquote>
      </section>
      
      
    </main>

    <footer class="kaki">
      <!-- ISI 9 — nama, NIM, tahun. -->
      <p>Raja Augustav Noer · 25523008 · <time datetime="2026">2026</time></p>
    </footer>
  </body>
</html>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-base);
  font-size: var(--text-base);
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

.lewati {
  position: absolute;
  top: -999px;
  left: 1rem;
  background: var(--color-primary);
  color: #ffffff;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  z-index: 1000;
  text-decoration: none;
  font-weight: 600;
}

.lewati:focus {
  top: 1rem;
  outline: 3px solid var(--color-focus);
}

:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  transition: color 0.2s ease;
}

a:hover {
  color: var(--color-primary-hover);
}

h1 {
  font-size: var(--text-3xl);
  line-height: 1.2;
}

h2 {
  font-size: var(--text-2xl);
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: var(--space-xs);
}
/* Formulir & Fieldset */
form fieldset {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

legend {
  font-weight: 700;
  padding: 0 var(--space-xs);
  color: var(--color-primary);
}

form p {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

label {
  font-weight: 600;
  font-size: var(--text-sm);
}

input,
textarea {
  font-family: inherit;
  font-size: var(--text-base);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-bg);
  color: var(--color-fg);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Keadaan Fokus */
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.25);
}

/* Keadaan Input Tidak Sah (Invalid) */
input:user-invalid,
textarea:user-invalid {
  border-color: var(--color-danger);
}

#nim-bantuan {
  font-size: var(--text-sm);
  opacity: 0.75;
}

/* Tombol Submit */
button[type="submit"] {
  align-self: flex-start;
  background-color: var(--color-primary);
  color: var(--theme);
  font-size: var(--text-base);
  font-weight: 600;
  padding: var(--space-sm) var(--space-xl);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

button[type="submit"]:hover {
  background-color: var(--color-primary-hover);
}

button[type="submit"]:active {
  transform: translateY(1px);
}

/* Komponen Details & Summary (FAQ) */
details {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-sm) var(--space-md);
  margin-bottom: var(--space-sm);
  background-color: var(--color-bg);
}

summary {
  font-weight: 600;
  cursor: pointer;
  color: var(--color-primary);
  user-select: none;
}

details[open] summary {
  margin-bottom: var(--space-xs);
}

details p {
  padding-top: var(--space-xs);
  border-top: 1px dashed var(--color-border);
}

/* Komponen Blockquote & Cite */
blockquote {
  border-left: 4px solid var(--color-primary);
  background-color: var(--color-bg);
  padding: var(--space-md) var(--space-lg);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-style: italic;
}

blockquote footer {
  margin-top: var(--space-sm);
  font-style: normal;
  font-weight: 600;
  color: var(--color-primary);
}
/* Container Utama */
.kepala,
#utama,
.kaki {
  width: 100%;
  max-width: 52rem; 
  margin-inline: auto;
  padding: var(--space-xl) var(--space-md);
}

/* Header & Navigasi */
.kepala {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.kepala h1 {
  margin: 0;
}

.kepala nav ul {
  display: flex;
  list-style: none;
  gap: var(--space-md);
  margin: 0;
  padding: 0;
}

.tagline {
  font-size: var(--text-sm);
  color: var(--color-fg);
  opacity: 0.8;
  margin-top: var(--space-xs);
  flex-basis: 100%; /* Turun tepat di bawah h1 jika di layar sempit */
  order: 3;        /* Posisikan tagline di bawah */
}

.kepala nav {
  order: 2;
  margin-left: auto; /* Dorong menu ke pojok kanan */
}

.kepala nav a {
  text-decoration: none;
  font-weight: 600;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
}

.kepala nav a:hover {
  background-color: var(--color-surface);
}

/* Konten Utama (Main) & Bagian Kartu (Section) */
#utama {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

section {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  box-shadow: var(--shadow-sm);
}

/* Figure & Foto Profil */
.foto {
  margin: var(--space-md) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.foto img {
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--color-border);
  box-shadow: var(--shadow-md);
  max-width: 180px;
  height: 180px;
}

figcaption {
  font-size: var(--text-sm);
  opacity: 0.8;
  font-style: italic;
}

/* Tabel Kegiatan */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--space-lg);
}

caption {
  font-weight: 700;
  text-align: left;
  margin-bottom: var(--space-sm);
  color: var(--color-primary);
}

th, td {
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  text-align: left;
}

thead {
  background-color: var(--color-bg);
}

/* List Karya */
#karya ul {
  padding-left: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* Galeri Proyek */
.daftar-galeri {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: var(--space-md);
}

.daftar-galeri li {
  flex: 1 1 calc(50% - var(--space-md));
  min-width: 240px;
}

.daftar-galeri figure {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  padding: var(--space-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.daftar-galeri img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-sm);
}

/* Footer */
.kaki {
  text-align: center;
  border-top: 1px solid var(--color-border);
  font-size: var(--text-sm);
  opacity: 0.85;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: var(--slate-950);
    --color-fg: var(--slate-50);
    --color-surface: var(--slate-800);
    --color-border: var(--slate-700);
    --color-primary: var(--blue-500);
    --color-primary-hover: var(--blue-600);
    --color-danger: var(--red-600);
    --color-focus: var(--sky-400);
    --theme: var(--slate-950);

    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.6);
  }
}
:root {
  --blue-50: #EFF6FF;
  --blue-100: #DBEAFE;
  --blue-500: #3B82F6;
  --blue-600: #2563EB;
  --blue-700: #1C4CCE;
  --blue-800: #1E40AF;

  --sky-400: #38BDF8;
  --sky-600: #0284C7;

  --red-600: #DC2626;
  --red-700: #B91C1C;

  --slate-50: #F8FAFC;
  --slate-100: #F4F7FB;
  --slate-300: #64748B;
  --slate-400: #94A3B8;
  --slate-700: #334155;
  --slate-800: #1E293B;
  --slate-900: #0F172A;
  --slate-950: #0B1120;

  --theme: #FFFFFF;

  --font-system: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --size-14: 0.875rem;
  --size-16: 1rem;
  --size-18: 1.125rem;
  --size-22: 1.375rem;
  --size-28: 1.75rem;
  --size-36: 2.25rem;

  --space-4: 0.25rem;
  --space-8: 0.5rem;
  --space-16: 1rem;
  --space-24: 1.5rem;
  --space-36: 2.25rem;
  --space-56: 3.5rem;

  --rad-4: 0.25rem;
  --rad-6: 0.375rem;
  --rad-12: 0.75rem;
  --rad-16: 1rem;
  --radius-full: 999px;


  /* LAPIS 2 */

  --color-bg: var(--slate-100);
  --color-fg: var(--slate-900);
  --color-surface: var(--theme);
  --color-border: var(--slate-300);
  --color-primary: var(--blue-700);
  --color-primary-hover: var(--blue-800);
  --color-danger: var(--red-700);
  --color-focus: var(--sky-600);

  --font-base: var(--font-system);
  --text-sm: var(--size-14);
  --text-base: var(--size-16);
  --text-lg: var(--size-18);
  --text-xl: var(--size-22);
  --text-2xl: var(--size-28);
  --text-3xl: var(--size-36);

  --space-xs: var(--space-4);
  --space-sm: var(--space-8);
  --space-md: var(--space-16);
  --space-lg: var(--space-24);
  --space-xl: var(--space-36);
  --space-2xl: var(--space-56);

  --radius-sm: var(--rad-6);
  --radius-md: var(--rad-12);
  --radius-lg: var(--rad-16);
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.08);
}
