# Praktikum P04 — Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Design token halaman profil

- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1D4ED8 (Deep Royal Blue), dipilih karena keinginan pribadi dan warna ini memberikan kesan elegan dan clean.

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | var(--blue-700) (#1D4ED8) | tombol, tautan, penanda, dan aksen judul |
| --color-primary-hover | var(--blue-800) (#1E40AF) | keadaan hover tombol dan tautan |
| --color-fg | var(--slate-900) (#0F172A) | warna teks utama |
| --color-bg | var(--slate-100) (#F4F7FB) | latar belakang halaman utama |
| --color-surface | var(--white) (#FFFFFF) | latar belakang kartu section dan panel |
| --color-border | var(--slate-300) (#CBD5E1) | garis pemisah, tabel, dan tepi kotak kartu |
| --color-danger | var(--red-700) (#B91C1C) | peringatan dan isian form tidak valid |
| --color-focus | var(--sky-600) (#0284C7) | garis fokus navigasi papan ketik |
| --radius-sm | var(--rad-6) (0.375rem) | sudut tombol, input, dan tag galeri |
| --radius-md | var(--rad-12) (0.75rem) | sudut kartu section dan fieldset form |
| --space-md | var(--space-16) (1rem) | jarak standar antar-elemen dan padding dasar |
| --text-base | var(--size-16) (1rem) | ukuran huruf teks isi default |

Kriteria selesai saya: mengubah --color-primary di tokens.css langsung memperbarui warna tombol, tautan, penanda, serta aksen secara konsisten di seluruh halaman tanpa merusak apapun.

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.
