# Noelle — UI/UX Designer

Portfolio template for Noelle, a fictional UI/UX designer: calm, minimal case studies that link to six live demo sites (to-do apps and booking tools), plus articles on lists that forget, WIP limits, and dates.

**Demo live:** https://portfolio-noelle-one.vercel.app

![Tangkapan layar](public/og.jpg)

> Template portfolio dengan persona fiktif. Semua proyek di dalamnya adalah demo live dari koleksi yang sama; tidak ada klien, testimoni, atau logo merek sungguhan. Formulir kontak hanya demo dan mengatakannya.

## Konsep

Persona fiktif Noelle, desainer produk yang tenang dan rapi. Kartu putih bersudut lembut, aksen biru, dan judul yang lapang; mode gelap memakai navy pekat.

## Isi

- **6 studi kasus** (`/work/[slug]`): tantangan, yang dikerjakan, hasil, dan tautan ke situs live-nya.
- **3 artikel** (`/blog/[slug]`) tentang keputusan desain di proyek-proyek tersebut.
- Angka yang tampil (jumlah proyek, layanan, artikel) dihitung dari isi situs; lama berkarya adalah bagian dari persona fiktif. Tidak ada klaim jumlah klien atau tingkat kepuasan.
- Halaman 404 bergaya sendiri, judul halaman berpola `Halaman — Noelle`, dan sitemap memuat setiap studi kasus dan artikel.

| Studi kasus | Demo live |
| --- | --- |
| Hari Ini | https://todo-classic.vercel.app |
| Lajur | https://todo-kanban-one.vercel.app |
| Tuntas | https://todo-manager-ivory-seven.vercel.app |
| Klinik Rumpun Waras | https://reservasi-klinik-rose.vercel.app |
| Homigo | https://properti-homigo.vercel.app |
| Pawon Lirih | https://reservasi-restoran-gilt.vercel.app |

## Halaman

`/` · `/about` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/contact`

## Gambar & kredit

- `public/images/work/*.webp` — tangkapan layar demo live di tabel atas (karya koleksi ini sendiri).
- `public/images/hero.webp` — "Office Work" oleh Jeffrey Betts, [StockSnap](https://stocksnap.io/photo/office-work-O6LGQYEPFT), lisensi CC0.
- `public/images/about.webp` — "Man Work" oleh Burst, [StockSnap](https://stocksnap.io/photo/man-work-DZ7DC58DSV), lisensi CC0.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon), next-themes (mode gelap/terang)
- Font: Geist, Geist Mono, Bricolage Grotesque (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD (WebSite), sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 7 template portfolio personal di [PortalPorto](https://portal-porto-neon.vercel.app). Dibuat oleh [PintuWeb](https://www.pintuweb.com), jasa pembuatan website.
