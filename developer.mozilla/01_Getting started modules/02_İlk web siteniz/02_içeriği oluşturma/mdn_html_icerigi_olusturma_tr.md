# HTML: İçeriği Oluşturma

> **Kaynak:** [MDN Web Docs — Creating the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)  
> **Türkçe sürüm:** Kaynak sayfanın öğrenme sırasını ve konu başlıklarını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 7 Kasım 2025

HTML (**HyperText Markup Language**), bir web sayfasındaki içeriğin anlamını ve yapısını tanımlayan işaretleme dilidir. Bu bölümde ilk HTML dosyanızı oluşturacak; başlık, paragraf, liste, görsel ve bağlantı gibi temel öğeleri kullanarak ilk sayfanızın içeriğini hazırlayacaksınız.

|  |  |
| --- | --- |
| **Ön koşullar:** | İşletim sisteminizi, temel web geliştirme yazılımlarını ve dosya/klasör yapısını temel düzeyde kullanabiliyor olmak. |
| **Öğrenme çıktıları:** | • HTML'in ne işe yaradığını anlamak.<br>• Açılış/kapanış etiketleri, öğeler, öznitelikler, `head` ve `body` gibi temel HTML kavramlarını tanımak.<br>• Başlık, paragraf, görsel, liste ve bağlantı gibi yaygın HTML öğelerini kullanmak. |

## Bu makalede

- [HTML nedir?](#html-nedir)
- [İlk HTML belgenizi oluşturma](#ilk-html-belgenizi-oluşturma)
- [Görsel ekleme](#görsel-ekleme)
- [Metni işaretleme](#metni-işaretleme)
- [Bağlantılar oluşturma](#bağlantılar-oluşturma)
- [Sonuç](#sonuç)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## HTML nedir?

HTML, web sayfasındaki içeriği yalnızca yazmak için değil, **ne tür bir içerik olduğunu belirtmek** için kullanılır.

Örneğin şu metni düşünün:

```text
Günlük plan:
Kahvaltı
Çalışma
Dinlenme
```

Bu içerik herhangi bir HTML yapısı kullanılmadan tarayıcıya verilirse, metnin başlık mı, paragraf mı yoksa liste mi olduğu anlaşılmaz.

HTML ile yapıyı açıkça belirtebiliriz:

```html
<p>Günlük plan:</p>

<ul>
  <li>Kahvaltı</li>
  <li>Çalışma</li>
  <li>Dinlenme</li>
</ul>
```

Burada:

- `<p>` bir paragrafı,
- `<ul>` sırasız listeyi,
- `<li>` ise liste öğelerini

tanımlar.

HTML yalnızca metin düzenlemek için kullanılmaz. HTML ile ayrıca:

- Görseller yerleştirilebilir,
- Başka sayfalara bağlantılar oluşturulabilir,
- Video ve ses içerikleri eklenebilir,
- Veri tabloları hazırlanabilir,
- Formlar oluşturulabilir,
- Sayfanın anlamsal yapısı belirtilebilir.

### HTML öğesi nedir?

Tipik bir HTML öğesi şu yapıya sahiptir:

```html
<p>Merhaba dünya!</p>
```

Burada:

```text
<p>              → açılış etiketi
Merhaba dünya!   → içerik
</p>             → kapanış etiketi
```

Bu üç bölüm birlikte bir **HTML öğesi (element)** oluşturur.

Bazı öğeler ek bilgi taşıyan **özniteliklere (attributes)** sahiptir:

```html
<a href="https://example.com">Örnek site</a>
```

Buradaki:

```text
href="https://example.com"
```

bir özniteliktir.

## İlk HTML belgenizi oluşturma

Önceki bölümlerde oluşturduğunuz `web-projects` klasörünün içinde yeni bir proje klasörü oluşturun:

```text
first-website
```

İçinde:

```text
index.html
```

adında bir dosya oluşturun.

Proje yapınız şu şekilde olmalıdır:

```text
web-projects/
└── first-website/
    └── index.html
```

`index.html` dosyasına aşağıdaki temel yapıyı ekleyin:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>İlk web sayfam</title>
  </head>
  <body>
    <img src="" alt="Örnek görsel" />
  </body>
</html>
```

Şimdi bu yapının parçalarına bakalım.

### `<!doctype html>`

```html
<!doctype html>
```

Tarayıcıya belgenin modern HTML standardına göre yorumlanması gerektiğini bildirir.

HTML belgelerinin başında bulunması iyi ve standart bir uygulamadır.

### `<html>`

```html
<html lang="tr">
```

Sayfadaki diğer HTML içeriğini kapsayan kök öğedir.

`lang` özniteliği belgenin ana dilini belirtir:

```html
lang="tr"
```

Türkçe bir sayfa hazırlıyorsanız `tr` kullanabilirsiniz.

Bu bilgi:

- Ekran okuyucularına,
- Arama motorlarına,
- Otomatik çeviri araçlarına

yardımcı olabilir.

### `<head>`

```html
<head>
  ...
</head>
```

Kullanıcıya doğrudan sayfa içeriği olarak gösterilmeyen ancak belgeyle ilgili önemli bilgileri içerir.

Burada örneğin:

- Sayfa başlığı,
- Karakter kodlaması,
- Mobil görünüm ayarları,
- CSS bağlantıları,
- SEO ile ilgili bazı metadata bilgileri

bulunabilir.

### Karakter kodlaması

```html
<meta charset="utf-8" />
```

Belgenin UTF-8 karakter kodlamasını kullanmasını sağlar.

UTF-8 Türkçe karakterler dahil çok geniş bir karakter kümesini destekler:

```text
ç ğ ı İ ö ş ü
```

Bu satırı kullanmak, karakterlerin yanlış görüntülenmesiyle ilgili birçok sorunu önler.

### Viewport ayarı

```html
<meta name="viewport" content="width=device-width" />
```

Sayfanın özellikle mobil cihazlarda ekran genişliğine uygun biçimde görüntülenmesine yardımcı olur.

### `<title>`

```html
<title>İlk web sayfam</title>
```

Tarayıcı sekmesinde görünen sayfa başlığını belirler.

Ayrıca sayfayı yer imlerine eklediğinizde kullanılan isim üzerinde de etkisi vardır.

### `<body>`

```html
<body>
  ...
</body>
```

Kullanıcının web sayfasında gerçekten göreceği içerikler burada bulunur.

Örneğin:

- Başlıklar,
- Paragraflar,
- Görseller,
- Listeler,
- Bağlantılar,
- Videolar,
- Formlar.

> **Not:** HTML öğelerinin çoğunda açılış ve kapanış etiketi vardır. Bazı öğeler ise içerik taşımaz ve kapanış etiketi gerektirmez; `<img>` ve `<meta>` bunlara örnektir.

## Görsel ekleme

Bir web sayfasına görsel eklemek için `<img>` öğesi kullanılır.

Basit biçimi:

```html
<img src="images/site-logo.png" alt="Sitenin logosu" />
```

Burada iki önemli öznitelik vardır:

### `src`

```html
src="images/site-logo.png"
```

Görsel dosyasının yolunu belirtir.

Şu klasör yapısı varsa:

```text
first-website/
├── index.html
└── images/
    └── site-logo.png
```

HTML dosyasından görsele ulaşmak için yol:

```text
images/site-logo.png
```

olur.

### `alt`

```html
alt="Sitenin logosu"
```

Görseli göremeyen kullanıcılar için alternatif metin sağlar.

`alt` metni özellikle şu durumlarda önemlidir:

1. **Ekran okuyucu kullanan kişiler** görselin ne anlattığını öğrenebilir.
2. Görsel yüklenemezse tarayıcı alternatif metni gösterebilir.

Örneğin yalnızca:

```html
alt="Resim"
```

yazmak çoğu durumda yeterince açıklayıcı değildir.

Daha yararlı bir örnek:

```html
alt="Dünya küresinin çevresinde turuncu bir tilki bulunan Firefox logosu"
```

### Görsel yüklenmezse ne olur?

Görsel yolu yanlışsa tarayıcı görseli gösteremez ve `alt` metni görünebilir:

![Yüklenemeyen görsel yerine gösterilen alternatif metin örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content/alt-text-example.png)

### Görselinizi projeye ekleyin

1. `first-website` klasörünün içinde:

   ```text
   images
   ```

   adlı bir klasör oluşturun.

2. Önceki bölümde seçtiğiniz görseli bu klasöre taşıyın.

3. Örneğin görselin adı:

   ```text
   firefox-icon.png
   ```

   ise HTML kodunu şöyle güncelleyin:

```html
<img
  src="images/firefox-icon.png"
  alt="Dünya küresinin çevresindeki Firefox logosu"
/>
```

4. `index.html` dosyasını kaydedin.
5. Dosyayı tarayıcıda açın.

Görsel görünmüyorsa şu noktaları kontrol edin:

- Dosya adı doğru mu?
- Büyük/küçük harfler aynı mı?
- `images/` klasörü doğru yerde mi?
- `src` değerinde tırnak işaretleri eksik mi?
- Dosya uzantısı doğru mu?

> **Not:** Görsel ekranı kaplayacak kadar büyük görünüyorsa şimdilik sorun değildir. Sonraki CSS bölümünde boyutunu düzenleyebilirsiniz.

## Metni işaretleme

HTML'in temel görevlerinden biri metne anlam ve yapı kazandırmaktır.

### Başlıklar

HTML'de altı başlık seviyesi vardır:

```html
<h1>Ana başlık</h1>
<h2>İkinci seviye başlık</h2>
<h3>Üçüncü seviye başlık</h3>
<h4>Dördüncü seviye başlık</h4>
<h5>Beşinci seviye başlık</h5>
<h6>Altıncı seviye başlık</h6>
```

Genellikle sayfanın ana başlığı için:

```html
<h1>
```

kullanılır.

Alt konular için sırasıyla:

```html
<h2>
<h3>
```

gibi daha alt seviyeler seçilir.

Başlık seviyeleri yalnızca metni büyütmek için kullanılmamalıdır. Sayfanın anlamsal hiyerarşisini tanımlamak için doğru sırayla kullanılmaları önemlidir.

İlk sayfanızda görselin hemen üstüne bir ana başlık ekleyin:

```html
<h1>Mozilla harika</h1>
```

Örneğin:

```html
<body>
  <h1>Mozilla harika</h1>

  <img
    src="images/firefox-icon.png"
    alt="Dünya küresinin çevresindeki Firefox logosu"
  />
</body>
```

### HTML yorumları

HTML içinde tarayıcı tarafından görüntülenmeyen notlar bırakabilirsiniz:

```html
<!-- Bu bir HTML yorumudur. -->
```

Yorumlar:

- Kodun ne yaptığını açıklamak,
- Geçici not bırakmak,
- Başka geliştiricilere bilgi vermek

için kullanılabilir.

### Paragraflar

Normal metin paragrafları için `<p>` kullanılır:

```html
<p>Bu tek bir paragraftır.</p>
```

İlk sitenize bir veya birkaç paragraf ekleyin:

```html
<p>
  Mozilla, açık web için çalışan küresel bir topluluktur.
</p>
```

Sayfanızın `body` bölümü artık buna benzer olabilir:

```html
<body>
  <h1>Mozilla harika</h1>

  <img
    src="images/firefox-icon.png"
    alt="Dünya küresinin çevresindeki Firefox logosu"
  />

  <p>
    Mozilla, açık web için çalışan küresel bir topluluktur.
  </p>
</body>
```

### Listeler

HTML iki temel liste türü sunar.

#### Sırasız liste

Öğelerin sırası önemli değilse:

```html
<ul>
  <li>Geliştiriciler</li>
  <li>Tasarımcılar</li>
  <li>Araştırmacılar</li>
</ul>
```

kullanılabilir.

Tarayıcı bunu genellikle madde işaretleriyle gösterir.

#### Sıralı liste

Öğelerin belirli bir sırada olması gerekiyorsa:

```html
<ol>
  <li>Projeyi aç</li>
  <li>Dosyayı düzenle</li>
  <li>Tarayıcıda test et</li>
</ol>
```

kullanılır.

Tarayıcı öğeleri genellikle numaralandırır.

Her iki liste türünde de her madde:

```html
<li>
```

öğesiyle oluşturulur.

#### Sayfanıza bir liste ekleyin

Örneğin:

```html
<p>Topluluğumuz şunlardan oluşur:</p>

<ul>
  <li>teknoloji uzmanları</li>
  <li>düşünürler</li>
  <li>üreticiler</li>
</ul>
```

Dosyayı kaydedin ve tarayıcıda sonucu kontrol edin.

## Bağlantılar oluşturma

Web'in temel özelliklerinden biri sayfaların birbirine **bağlantılar (links)** üzerinden bağlanabilmesidir.

Bağlantı oluşturmak için `<a>` öğesi kullanılır.

Örneğin önce bağlantı olacak metni yazın:

```html
<a>Mozilla Manifestosu</a>
```

Ardından hedef adresi `href` özniteliğiyle belirtin:

```html
<a href="https://www.mozilla.org/about/manifesto/">
  Mozilla Manifestosu
</a>
```

Burada:

```text
href
```

**hypertext reference** ifadesinden gelir.

### Protokolü unutmayın

Harici bir web adresi yazarken URL'nin başında genellikle protokolü de belirtin:

```text
https://
```

Doğru:

```html
<a href="https://example.com">Örnek</a>
```

Eksik veya beklenmedik davranışa yol açabilecek kullanım:

```html
<a href="example.com">Örnek</a>
```

Bağlantıyı ekledikten sonra tarayıcıda tıklayıp doğru sayfaya gittiğinden emin olun.

### Sayfanıza bağlantı ekleme

Örneğin:

```html
<p>
  Web'in açık kalmasını destekleyen ilkeleri
  <a href="https://www.mozilla.org/about/manifesto/">
    Mozilla Manifestosu
  </a>
  üzerinden okuyabilirsiniz.
</p>
```

Bu noktada sayfanızda artık:

- Bir ana başlık,
- Bir görsel,
- Paragraflar,
- Bir liste,
- En az bir bağlantı

bulunmalıdır.

## Sonuç

Bu bölümde temel HTML içeriğinizi tamamladınız.

Sayfanız yaklaşık olarak şöyle görünebilir:

![Firefox logosu, başlık, liste, paragraflar ve bağlantı içeren tamamlanmış örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content/finished-test-page-small.png)

Örnek bir tamamlanmış HTML dosyası şu yapıda olabilir:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>İlk web sayfam</title>
  </head>

  <body>
    <h1>Mozilla harika</h1>

    <img
      src="images/firefox-icon.png"
      alt="Dünya küresinin çevresindeki Firefox logosu"
    />

    <p>Mozilla, farklı alanlardan insanların birlikte çalıştığı bir topluluktur.</p>

    <ul>
      <li>teknoloji uzmanları</li>
      <li>düşünürler</li>
      <li>üreticiler</li>
    </ul>

    <p>
      Topluluk açık ve erişilebilir bir internet için birlikte çalışır.
      Ayrıntılar için
      <a href="https://www.mozilla.org/about/manifesto/">
        Mozilla Manifestosu
      </a>
      sayfasını ziyaret edebilirsiniz.
    </p>
  </body>
</html>
```

> **Not:** Bu bölüm HTML'in yalnızca başlangıç seviyesindeki küçük bir kısmını ele alır. Daha sonra MDN'nin **Structuring content with HTML** modülünde anlamsal HTML, bağlantılar, görseller, tablolar, formlar, video/ses ve çok daha fazlasını ayrıntılı biçimde öğreneceksiniz.

## Ayrıca bakınız

### MDN — Structuring content with HTML

HTML'i daha ayrıntılı öğrenmek için:

[Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)

### Scrimba — Learn HTML and CSS

MDN'nin öğrenme ortaklarından Scrimba, HTML ve CSS üzerine etkileşimli bir eğitim sunar:

[Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p)

> **Not:** Scrimba harici bir eğitim hizmetidir ve MDN dokümantasyonundan ayrı bir kaynaktır.

## Özet

Bu bölümde HTML'in web sayfasının **yapısını ve anlamını tanımlayan işaretleme dili** olduğunu öğrendiniz. HTML'deki içerikler öğelerle çevrelenir; çoğu öğede açılış etiketi, içerik ve kapanış etiketi bulunur. Öznitelikler ise bir öğeye ek bilgi verir. Örneğin `<a>` öğesindeki `href` bağlantının hedefini, `<img>` öğesindeki `src` görsel dosyasının yolunu belirtir.

İlk HTML belgenizi oluştururken `<!doctype html>`, `<html>`, `<head>` ve `<body>` gibi temel yapı taşlarını kullandınız. UTF-8 karakter kodlaması ve viewport ayarı gibi `meta` bilgilerini eklediniz; `<title>` ile tarayıcı sekmesinde görünen başlığı belirlediniz. Kullanıcıya görünen asıl sayfa içeriğinin ise `<body>` içinde yer aldığını gördünüz.

Ardından `<img>` kullanarak bir görsel eklediniz ve `alt` özniteliğinin erişilebilirlik açısından neden önemli olduğunu öğrendiniz. Metin içeriğini `<h1>` gibi başlık öğeleri, `<p>` paragrafları ve `<ul>`, `<ol>`, `<li>` liste öğeleriyle yapılandırdınız. Son olarak `<a href="...">` ile başka sayfalara bağlantılar oluşturdunuz.

Bu noktada ilk sitenizin temel HTML içeriği tamamlandı. Sayfa henüz varsayılan tarayıcı stilleriyle oldukça sade görünebilir. Bir sonraki adımda **CSS kullanarak bu içeriğin görünümünü düzenleyecek**, renk, yazı tipi, boyut, boşluk ve yerleşim gibi görsel özellikleri değiştireceksiniz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Creating the content”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) sayfasındaki eğitim sırası ve konu kapsamı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [Alternatif metin örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content/alt-text-example.png)
- [Tamamlanmış örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content/finished-test-page-small.png)

### İlgili kaynaklar

- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Accessible multimedia](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia)
- [W3C alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Learn HTML and CSS — Scrimba](https://scrimba.com/learn-html-and-css-c0p)
