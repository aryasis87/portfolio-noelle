# Noelle — Design System (Creative Editorial Portfolio)

> Concept: **editorial creative studio** — portofolio seorang creative/designer dengan rasa majalah kelas atas: hangat, elegan, banyak ruang, tipografi serif besar. Platform: responsive web (desktop-first). Bahasa: ID/EN campur boleh.

## Brand voice
Tenang, percaya diri, artful. "Mendesain pengalaman yang berkesan." Personal tapi profesional.

## Color tokens
| Token | Hex | Pakai |
|---|---|---|
| `bg` | `#fbf8f3` | latar (ivory hangat) |
| `surface` | `#ffffff` | kartu |
| `ink` | `#211d1a` | teks utama |
| `muted` | `#6f655c` | teks sekunder |
| `primary` | `#b4532a` | aksen clay/terracotta (link, tombol, garis) |
| `accent` | `#5b6b54` | sage (aksen sekunder) |
| `border` | `#e7ded2` | garis |
Mode gelap opsional: bg `#1a1714`, surface `#241f1b`, ink `#f4ede2`.

## Typography
- Display: **Fraunces** atau **Playfair Display** (600–700) — judul besar, nama, headline section.
- Body/UI: **Inter** (400–600). Skala besar & berirama (hero 56–80px, h2 32–40).

## Shape & elevation
Radius 14–20px; bayangan lembut & hangat; banyak whitespace; garis tipis sebagai pemisah editorial.

## Sections & functional complexity (tingkatkan dari versi lama)
1. **Hero** editorial: nama besar + role + 1 kalimat; tombol "Lihat Karya" + "Unduh CV".
2. **Marquee** klien/skill berjalan.
3. **About** + **animated stats counters** (proyek, klien, tahun).
4. **Services** kartu interaktif (hover reveal).
5. **Portfolio**: grid **dengan filter kategori** (Branding/Web/Foto) + **case-study modal/detail** (gambar, peran, hasil, link).
6. **Experience** timeline.
7. **Video showreel** (modal play).
8. **Testimonial** carousel/slider.
9. **Contact** form (validasi) + sosial.
Tambahan UX: smooth-scroll nav aktif, scroll-progress, reveal-on-scroll, sticky header transparan→solid, fokus & a11y, reduced-motion.

## Motion
Editorial & halus: fade/clip reveals, parallax ringan pada gambar, counter count-up, modal scale-in. 250–500ms.

## Layout
Container max ~1200px, grid asimetris editorial; mobile menumpuk rapi dengan menu drawer.
