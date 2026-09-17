# Uygulama: Bozuk Web Sitesini Kurtar

**Süre:** 60–75 dakika  
**Seviye:** Başlangıç  
**Çalışma biçimi:** Bireysel veya 2 kişilik gruplar

## Amaç

Öğrencinin hazır ve hatalı bir web projesini sıfırdan yeniden yazmak yerine **incelemesi, problemi belirlemesi, hata hakkında bir hipotez oluşturması ve düzeltmesi** beklenir.

Çalışma sonunda öğrenci:

- Dosya ve klasör yapısını inceleyebilmeli,
- Hatalı dosya yollarını tespit edebilmeli,
- HTML'nin CSS ve JavaScript dosyalarıyla bağlantısını kontrol edebilmeli,
- Basit CSS sözdizimi hatalarını bulabilmeli,
- JavaScript seçici ve olay hatalarını düzeltebilmeli,
- Bir problemi rastgele değişikliklerle değil, sistematik biçimde hata ayıklayabilmelidir.

Dosya yolları bir dosyanın başka bir kaynağın nerede bulunduğunu belirtmesini sağlar; dosya/klasör adlarında küçük harf ve boşluksuz adlandırma kullanılması da materyallerde özellikle öneriliyor.

## Senaryo

Bir geliştirici aşağıdaki küçük web sitesini hazırlamış ancak projeyi tamamlayamadan size göndermiştir.

Geliştiricinin notu şöyledir:

> “Sayfa açılıyor ama tasarım uygulanmıyor. Logo görünmüyor. Butona bastığımda hiçbir şey olmuyor. Listedeki maddelere tıklayınca da beklediğim davranışı göremiyorum. Kodda birkaç hata bırakmış olabilirim.”

**Göreviniz:**

**Projeyi yeniden yazmadan mevcut hataları bulup düzeltmek.**

Projeyi tarayıcıda açın. Önce gördüğünüz problemleri belirleyin. Her problem için önce tahminde bulunun, ardından ilgili HTML, CSS, JavaScript veya dosya yapısını inceleyin. Bir hatayı düzelttikten sonra sayfayı tekrar test edin.

Kodun tamamını silip yeniden yazmayın. Yalnızca gerekli değişiklikleri yapın.

| **Belirti** | **Tahminim** | **Bulduğum hata** | **Yaptığım düzeltme** |
|---|---|---|---|
| CSS uygulanmıyor | | | |
| Logo görünmüyor | | | |
| Paragraf biçimlenmiyor | | | |
| Başlık rengi değişmiyor | | | |
| Buton çalışmıyor | | | |
| Liste davranışı | | | |

## Aşamalı ipucu sistemi

Öğrenciler takıldığında çözümü doğrudan vermek yerine üç aşamalı ipucu kullanılabilir.

**1. seviye:** “Problemin hangi dosyayla ilgili olduğunu düşünüyorsun?”

**2. seviye:** “Dosyanın gerçekten o konumda olup olmadığını klasör yapısından kontrol et.”

**3. seviye:** “HTML'deki `href`, `src`, `class` veya `id` değerini gerçek dosya/öğe adıyla karakter karakter karşılaştır.”

Bu yaklaşım özellikle dosya yolu problemlerinde işe yarar. Materyalde web sunucularının büyük/küçük harf konusunda duyarlı olabileceği ve örneğin `MyImage.jpg` ile `myimage.jpg` ifadelerinin farklı olabileceği belirtiliyor.

## Terminal bonus görevi

Dersi biraz daha kapsamlı yapmak isterseniz öğrencilerden VS Code'un terminalini açarak proje yapısını kontrol etmelerini isteyebilirsiniz.

Örneğin:

```bash
cd debug-site
ls
```

Ardından:

```bash
ls styles
ls scripts
ls images
```

Şu soruyu sorun:

> HTML'de kullanılan klasör adı ile terminalde gördüğünüz gerçek klasör adı aynı mı?

Öğrenciler böylece yalnızca kodu değil **dosya sistemini de hata ayıklamanın bir parçası** olarak görürler. Materyalde `cd`, `ls`, `mkdir`, `touch`, `mv`, `cp` gibi temel terminal komutları ele alınıyor.
