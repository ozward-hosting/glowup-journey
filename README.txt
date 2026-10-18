GlowUp Journey v2 — PWA statis untuk iPhone

File:
- index.html: aplikasi utama
- hero-art.png: ilustrasi karakter cowok
- manifest.webmanifest: metadata instalasi web app
- sw.js: cache dasar untuk mode offline setelah file pernah dibuka
- icon.svg dan apple-touch-icon.png: ikon browser/Home Screen

Fitur:
- Profil lokal di perangkat (bukan akun online)
- Dashboard, kutipan harian, checklist, streak
- Grafik berat dan lingkar pinggang
- Workout pemula dengan ilustrasi SVG animatif
- Database 1.000+ kombinasi menu/porsi dari daftar menu dan kalori perkiraan
- Jurnal multi-item untuk sarapan, makan siang, malam, camilan, minuman
- Air minum, target kalori, pengaturan jadwal
- Impor/ekspor backup JSON

Batasan penting:
- Kalori merupakan estimasi dan bisa berbeda berdasarkan resep/merek/porsi nyata.
- Data lokal dapat hilang jika browser/website data dibersihkan; ekspor backup berkala.
- Profil tidak memiliki autentikasi cloud atau sinkronisasi lintas perangkat.
- GitHub Pages statis tidak mengirim alarm terjadwal saat aplikasi ditutup. Web Push perlu backend/layanan push dan izin pengguna tambahan.

Publikasi: upload semua isi folder ini ke root repository GitHub Pages (replace file lama saat diminta), lalu pastikan Settings > Pages menggunakan branch main dan folder /(root). Setelah commit, tunggu deploy selesai lalu reload situs.


LOCAL LOGIN (personal convenience only)
Username: Ovik
Password: as provided by the owner. Do not reuse this password on other services.
This is a client-side lock, not real account security. Anyone with access to public source code may bypass it. Do not store sensitive data in this public repository.
