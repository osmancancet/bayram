# Ramazan Bayramı Viral Tebrik Sitesi - Geliştirme Kuralları

## 🚀 Proje Vizyonu
Kullanıcıların kendi isimleriyle yüksek kaliteli, animasyonlu ve "wow" efektli bayram tebrikleri oluşturup WhatsApp üzerinden toplu şekilde paylaşabileceği, mobil öncelikli bir Next.js uygulaması.

## 🛠️ Teknoloji Yığını
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Scroll-linked, exit/entry animations)
- **Effects:** Canvas-confetti, Lucide React (Icons)
- **State:** React Hooks (useState, useEffect)
- **Deployment:** Vercel (Hız ve Edge Network için)

## 🎨 Tasarım ve UX Kuralları (Wow Effect)
1. **Giriş Animasyonu:** Site açıldığında "Ramazan Bayramınız Mübarek Olsun" yazısı altın sarısı harflerle parlayarak (glitter effect) ekrana gelmeli.
2. **Renk Paleti:** Gece mavisi (#020617), zümrüt yeşili (#064e3b) ve altın sarısı (#f59e0b) degrade geçişleri kullanılmalı.
3. **Dinamik Arka Plan:** Arka planda yavaşça hareket eden yıldızlar veya İslami geometrik desenler (opacity 0.1) olmalı.
4. **Kişiselleştirme:** İsim girildiğinde `framer-motion` ile devasa bir "Hayırlı Bayramlar [İSİM]" başlığı havai fişek efektleri eşliğinde belirmeli.

## 🔗 Paylaşım ve Toplu Mesaj Mantığı
- **Dinamik URL:** Tebrikler `/tebrik/[isim]` path'inde olmalı.
- **WhatsApp API:** Paylaşım için hem `https://api.whatsapp.com/send` (masaüstü/web) hem de `whatsapp://send` (mobil derin link) desteği sunulmalı.
- **Toplu Mesaj Desteği:** Kullanıcıya "Rehberine Gönder", "Aile Grubu", "İş Grubu" gibi hazır kategorize edilmiş butonlar sunulmalı.
- **Dinamik OG Image:** `next/og` kütüphanesi kullanılarak, link paylaşıldığında WhatsApp önizlemesinde kullanıcının isminin yazdığı bir kart görünmeli.

## 📁 Dosya Yapısı ve Kod Kalitesi
- **Clean Code:** Tüm componentler `components/` klasöründe atomik yapıda tutulmalı.
- **Performans:** Resimler `next/image` ile optimize edilmeli. Lottie veya SVG animasyonları tercih edilmeli.
- **SEO:** `generateMetadata` fonksiyonu ile her isme özel title ve description üretilmeli.

## 🛠️ Özel Fonksiyonel Gereksinimler
1. **Music Toggle:** Sağ üst köşeye minimal bir ses aç/kapat butonu. (Ney veya kanun taksimi, kullanıcı etkileşimi sonrası).
2. **Confetti:** İsimli tebrik sayfası yüklendiğinde bir kez altın renkli konfeti patlatılmalı.
3. **Copy Link:** "Linki Kopyala" butonu tıklandığında modern bir 'toast' bildirimi gösterilmeli.

## 🚨 Önemli Uyarı
Site tamamen responsive (mobil odaklı) olmalı. Butonlar baş parmak erişimine uygun büyüklükte (min 44px height) ve dokunmatik geri bildirime (scale-95 on tap) sahip olmalı.