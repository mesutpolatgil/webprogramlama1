# HTML ile İçerik Yapılandırma

> **Kaynak:** [MDN Web Docs — Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, eğitim/challenge listesini ve öğrenme akışını koruyan özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 28 Ağustos 2025

HTML (**HyperText Markup Language**), bir web sitesinin içeriğini ve yapısını tanımlayan temel web teknolojisidir. Doğru yazılmış HTML yalnızca içeriğin ekranda nasıl sıralanacağını belirtmez; aynı zamanda içeriğin **anlamını (semantics)** makine tarafından anlaşılabilir şekilde tanımlar.

Bu semantik yapı özellikle:

- Erişilebilirlik,
- Arama motoru optimizasyonu (SEO),
- Tarayıcıların yerleşik özelliklerinden yararlanma,
- Kodun anlaşılabilirliği ve bakım kolaylığı

açısından önemlidir.

Bu modül önce HTML dilinin temel yapısını öğretir; ardından belge yapısı, metin semantiği, bağlantılar, listeler, görseller, video/ses, tablolar, formlar ve HTML hata ayıklama gibi temel alanlara geçer.

## Bu makalede

- [Ön koşullar](#ön-koşullar)
- [Eğitimler ve challenge'lar](#eğitimler-ve-challengelar)
- [Becerilerinizi test edin](#becerilerinizi-test-edin)
- [Ek eğitimler](#ek-eğitimler)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

# Ön koşullar

Bu modüle başlamadan önce daha önce HTML bilmeniz gerekmez.

Ancak en azından:

- Bilgisayar kullanmaya,
- Web tarayıcısında internette gezinmeye,
- Temel dosya ve klasör yönetimine

aşina olmanız beklenir.

Ayrıca temel geliştirme ortamınızın hazır olması yararlıdır.

İlgili başlangıç bölümleri:

- [Temel yazılımları kurma](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)
- [Dosyalarla çalışma](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)

Bu konular MDN'nin [Getting started](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started) öğrenme yolunun parçalarıdır.

> **Not:** Dosya oluşturamadığınız bir tablet, kısıtlı bilgisayar veya başka bir cihaz kullanıyorsanız örnekleri [CodePen](https://codepen.io/) ya da [JSFiddle](https://jsfiddle.net/) gibi çevrimiçi editörlerde çalıştırabilirsiniz.

# Eğitimler ve challenge'lar

Bu modül, konuları kademeli biçimde öğreten eğitimlerden ve belirli aralıklarda bilgilerinizi uygulamanızı isteyen **challenge** çalışmalarından oluşur.

Genel akış:

```text
Temel HTML sözdizimi
        ↓
<head> ve metadata
        ↓
Metin yapısı ve semantiği
        ↓
Listeler
        ↓
İleri metin özellikleri
        ↓
Challenge
        ↓
Belge yapısı
        ↓
Bağlantılar
        ↓
Challenge
        ↓
Görseller
        ↓
Video ve ses
        ↓
Challenge
        ↓
Tablolar
        ↓
Tablo erişilebilirliği
        ↓
Challenge
        ↓
Formlar ve düğmeler
        ↓
HTML hata ayıklama
```

## 1. Temel HTML sözdizimi

**Kaynak:**  
[Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)

Bu bölüm HTML'e giriş noktasıdır.

Ele alınan temel kavramlar:

- HTML öğeleri,
- Açılış ve kapanış etiketleri,
- İçerik,
- Öznitelikler (`attributes`),
- Boş/void öğeler,
- HTML belgesinin temel yapısı,
- `<!doctype html>`,
- Doğru iç içe yerleştirme,
- HTML yorumları,
- Özel karakterler ve character reference kullanımı.

Basit bir HTML öğesi:

```html
<p>Bu bir paragraftır.</p>
```

Parçaları:

```text
<p>                  → açılış etiketi
Bu bir paragraftır.  → içerik
</p>                 → kapanış etiketi
```

Bir öznitelik örneği:

```html
<a href="https://example.com">Örnek site</a>
```

Buradaki:

```text
href="https://example.com"
```

bağlantının hedefini belirleyen bir özniteliktir.

Bu eğitim, sonraki bütün HTML konularının temelidir.

---

## 2. `<head>` içinde ne bulunur? Web sayfası metadata'sı

**Kaynak:**  
[What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)

HTML belgesindeki `<head>` bölümü doğrudan ana sayfa içeriği olarak gösterilmez.

Buna rağmen tarayıcı ve diğer sistemler için çok önemli bilgiler taşır.

Örneğin:

```html
<head>
  <meta charset="utf-8" />
  <title>Sayfa başlığı</title>
</head>
```

Bu bölümde:

- `<title>`,
- Karakter kodlaması,
- Metadata,
- Yazar bilgileri,
- SEO açısından yararlı bilgiler,
- CSS dosyalarına bağlantılar,
- Favicon,
- Belge dili ve metadata kullanımı

gibi konular ele alınır.

Örnek:

```html
<meta
  name="description"
  content="HTML öğrenmeye yönelik örnek bir sayfa."
/>
```

Bu tür metadata sayfanın kendisi hakkında bilgi verir.

---

## 3. Başlıklar ve paragraflar

**Kaynak:**  
[Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)

HTML'in temel görevlerinden biri metne mantıklı bir yapı kazandırmaktır.

Paragraflar:

```html
<p>Bu bir paragraftır.</p>
```

Başlıklar:

```html
<h1>Ana başlık</h1>
<h2>Alt başlık</h2>
<h3>Daha alt seviye başlık</h3>
```

şeklinde tanımlanır.

Bu eğitimde özellikle:

- Belge başlık hiyerarşisi,
- Doğru heading seviyeleri,
- Semantik HTML,
- Başlıkların erişilebilirlikteki rolü,
- SEO açısından başlıkların önemi

ele alınır.

Başlık seviyeleri yalnızca görsel boyut seçmek için kullanılmamalıdır.

Örneğin:

```html
<h1>Hayvanlar</h1>

<h2>Memeliler</h2>

<h3>Kediler</h3>
```

mantıklı bir yapıdır.

Sırf daha küçük görünmesini istediğiniz için:

```html
<h1>Hayvanlar</h1>
<h4>Memeliler</h4>
```

şeklinde seviye atlamak uygun değildir. Görsel boyut CSS ile ayarlanmalıdır.

---

## 4. Vurgu ve önem

**Kaynak:**  
[Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

Metindeki bazı kelimelerin diğerlerinden farklı anlam taşıması gerekebilir.

HTML bu farkı yalnızca görsel olarak değil, semantik olarak tanımlayabilir.

### `<em>`

Vurgu için:

```html
<p>Bu işlemi <em>mutlaka</em> kaydedin.</p>
```

### `<strong>`

Önem belirtmek için:

```html
<p><strong>Dikkat:</strong> Dosyayı silmeyin.</p>
```

Bu öğeler çoğu tarayıcıda sırasıyla:

- İtalik,
- Kalın

görünebilir; ancak asıl amaçları görünüm değil, metne anlam eklemektir.

Bu eğitimde semantiğin neden:

```text
sadece italik / kalın görünüm
```

ile aynı şey olmadığı açıklanır.

---

## 5. Listeler

**Kaynak:**  
[Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)

Web'de listeler çok yaygındır.

HTML üç temel liste türü sunar.

### Sırasız liste

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Sıranın önemli olmadığı içerikler için kullanılır.

### Sıralı liste

```html
<ol>
  <li>Dosyayı oluştur.</li>
  <li>Kodu yaz.</li>
  <li>Tarayıcıda test et.</li>
</ol>
```

Sıralamanın anlam taşıdığı içerikler için kullanılır.

### Açıklama listesi

Terim–açıklama ilişkileri için:

```html
<dl>
  <dt>HTML</dt>
  <dd>Web içeriğini yapılandıran işaretleme dili.</dd>

  <dt>CSS</dt>
  <dd>Web içeriğini biçimlendiren stil dili.</dd>
</dl>
```

Bu eğitim ayrıca listelerin iç içe kullanımını ve semantik açıdan doğru liste seçimini ele alır.

---

## 6. İleri metin özellikleri

**Kaynak:**  
[Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)

HTML, başlık, paragraf ve listelerin ötesinde metnin anlamını tanımlayan birçok öğeye sahiptir.

Bu eğitimde bunların daha az bilinen ancak yararlı olanları ele alınır.

Örneğin:

### Alıntılar

Blok alıntı:

```html
<blockquote>
  <p>Uzun bir alıntı metni.</p>
</blockquote>
```

Satır içi alıntı:

```html
<p>Yazar, <q>web açık bir platformdur</q> dedi.</p>
```

### Kod

```html
<code>console.log("Merhaba");</code>
```

### Üst simge ve alt simge

```html
<p>H<sub>2</sub>O</p>
<p>x<sup>2</sup></p>
```

### İletişim bilgileri

```html
<address>
  example@example.com
</address>
```

Bu bölüm ayrıca kısaltmalar, zaman/tarih ve farklı metin türlerini anlamsal biçimde işaretlemeye yönelik başka HTML öğelerini de tanıtır.

---

# Challenge: Bir mektubu işaretleme

**Kaynak:**  
[Challenge: Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter)

Bu challenge önceki metin semantiği konularını birlikte kullanmanızı ister.

Amaç, düz metin biçiminde verilen bir mektubu doğru HTML yapısına dönüştürmektir.

Kullanmanız gereken bilgiler arasında:

- `<head>` öğesi,
- Metadata,
- Başlıklar,
- Paragraflar,
- Vurgu,
- Listeler,
- Bağlantılar,
- İleri metin semantiği

bulunur.

Challenge'ın temel mantığı:

```text
Düz metni incele
      ↓
İçeriğin anlamını belirle
      ↓
Uygun HTML öğelerini seç
      ↓
Geçerli ve semantik HTML oluştur
```

Bu çalışma HTML'de:

```text
"Nasıl görünüyor?"
```

sorusundan önce:

```text
"Bu içerik ne anlama geliyor?"
```

sorusunu düşünme alışkanlığı kazandırır.

---

## 7. Belgeleri yapılandırma

**Kaynak:**  
[Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)

Şimdi tek tek metin öğelerinden tüm sayfanın yapısına geçilir.

Modern HTML'de farklı sayfa bölgelerini tanımlamak için semantik yapısal öğeler bulunur.

Yaygın örnekler:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Örnek:

```html
<body>
  <header>
    <h1>Teknoloji Günlüğü</h1>
  </header>

  <nav>
    <!-- Ana navigasyon -->
  </nav>

  <main>
    <article>
      <h2>Yeni yazı</h2>
      <p>...</p>
    </article>
  </main>

  <footer>
    <p>© 2025</p>
  </footer>
</body>
```

Bu bölüm:

- Tipik sayfa bölgelerini,
- Semantik structural element kullanımını,
- `<div>` ile semantik elementler arasındaki farkı,
- Temel site yapısını planlamayı

ele alır.

Doğru semantik yapı erişilebilirlik açısından da önemlidir.

---

## 8. Bağlantılar oluşturma

**Kaynak:**  
[Creating links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)

Bağlantılar web'in temelini oluşturur.

Bir bağlantı:

```html
<a href="https://developer.mozilla.org/">MDN</a>
```

şeklinde oluşturulur.

Bu eğitim:

- `<a>` öğesi,
- `href`,
- Mutlak URL,
- Göreli URL,
- Belge parçalarına bağlantı,
- E-posta bağlantıları,
- İndirme bağlantıları,
- Anlamlı link metni yazma,
- Link best practice'leri

gibi konuları ele alır.

### Anlamlı bağlantı metni

Zayıf:

```html
<a href="/guide">Buraya tıklayın</a>
```

Daha iyi:

```html
<a href="/guide">HTML rehberini okuyun</a>
```

İkinci örnek bağlantının nereye gittiğini bağlamdan bağımsız biçimde daha açık ifade eder.

---

# Challenge: Bir içerik sayfasını yapılandırma

**Kaynak:**  
[Challenge: Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content)

Bu challenge, verilen bir içeriği CSS ile layout uygulanmaya hazır olacak şekilde semantik HTML ile yapılandırmanızı ister.

Burada:

- Başlık,
- Header,
- Navigation,
- Main,
- Article,
- Aside,
- Footer

gibi yapıların doğru kullanımını düşünmeniz gerekir.

Amaç yalnızca doğru öğeyi yazmak değil, sayfanın ileride nasıl bir görsel düzene dönüşeceğini tahmin ederek semantik bir temel oluşturmaktır.

---

## 9. HTML görselleri

**Kaynak:**  
[HTML images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)

Web ilk dönemlerinde büyük ölçüde metinden oluşuyordu.

Görsellerin web sayfalarına eklenebilmesi, web'i çok daha zengin bir ortama dönüştürdü.

Temel görsel:

```html
<img
  src="images/cat.jpg"
  alt="Pencerede oturan siyah bir kedi"
/>
```

Bu eğitimde:

- `<img>`,
- `src`,
- `alt`,
- Genişlik/yükseklik,
- Görsel başlıkları,
- `<figure>`,
- `<figcaption>`,
- CSS background image ile HTML görselinin farkı

ele alınır.

### `<figure>` örneği

```html
<figure>
  <img src="chart.png" alt="2025 satış grafiği" />
  <figcaption>2025 yılı aylık satışları.</figcaption>
</figure>
```

Özellikle `alt` metni erişilebilirlik açısından kritik bir konudur.

---

## 10. HTML video ve ses

**Kaynak:**  
[HTML video and audio](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)

Görsellerden sonra medya içeriğine geçilir.

HTML'de video:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
</video>
```

ses:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
```

öğeleriyle eklenebilir.

Bu eğitim:

- `<video>`,
- `<audio>`,
- `<source>`,
- `controls`,
- Farklı medya formatları,
- Fallback içeriği,
- Video altyazıları

gibi konuları ele alır.

Video altyazıları erişilebilirlik açısından özellikle önemlidir.

---

# Challenge: Creepy-crawly splash page

**Kaynak:**  
[Challenge: Creepy-crawly splash page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Splash_page)

Bu challenge, görseller ve video/ses konularındaki bilginizi test eder.

Verilen bir splash page'e:

- Responsive veya uygun görseller,
- Medya,
- Semantik HTML,
- Erişilebilir alternatifler

eklemeniz beklenir.

Amaç önceki iki eğitimde öğrendiğiniz medya ekleme tekniklerini gerçek bir sayfa üzerinde uygulamaktır.

---

## 11. HTML tablo temelleri

**Kaynak:**  
[HTML table basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)

HTML tabloları **tablo biçimindeki veriler** için kullanılmalıdır.

Örneğin:

| Ürün | Fiyat |
| --- | ---: |
| Klavye | 1200 TL |
| Fare | 650 TL |

HTML karşılığı:

```html
<table>
  <tr>
    <th>Ürün</th>
    <th>Fiyat</th>
  </tr>
  <tr>
    <td>Klavye</td>
    <td>1200 TL</td>
  </tr>
</table>
```

Bu bölüm:

- `<table>`,
- `<tr>`,
- `<td>`,
- `<th>`,
- Satır/sütun birleştirme,
- `rowspan`,
- `colspan`,
- Sütun gruplama

gibi temel tablo tekniklerini öğretir.

> **Önemli:** HTML tabloları genel sayfa layout'u oluşturmak için değil, gerçekten satır ve sütun ilişkisine sahip verileri sunmak için kullanılmalıdır.

---

## 12. HTML tablo erişilebilirliği

**Kaynak:**  
[HTML table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)

Karmaşık tablolar, yardımcı teknoloji kullanan kişiler için zor olabilir.

Bu eğitim tabloların daha anlaşılır hale getirilmesini ele alır.

Başlıklar arasında:

- `<caption>`,
- `<thead>`,
- `<tbody>`,
- `<tfoot>`,
- `scope`,
- Satır ve sütun başlıklarının açık biçimde tanımlanması

bulunur.

Örnek:

```html
<table>
  <caption>Aylık satışlar</caption>
  <thead>
    <tr>
      <th scope="col">Ay</th>
      <th scope="col">Satış</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Ocak</th>
      <td>120</td>
    </tr>
  </tbody>
</table>
```

Bu yapı ekran okuyucuların tablodaki ilişkileri daha iyi anlamasına yardımcı olur.

---

# Challenge: Gezegen veri tablosu

**Kaynak:**  
[Challenge: Structuring a planet data table](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Planet_data_table)

Bu challenge'da Güneş Sistemi gezegenlerine ait veriler verilir.

Göreviniz verileri:

- Doğru tablo yapısı,
- Başlık hücreleri,
- Satır/sütun ilişkileri,
- Erişilebilirlik özellikleri

kullanarak yapılandırmaktır.

Bu çalışma tablo konusunu yalnızca basit satır/hücre seviyesinde değil, gerçek ve daha karmaşık veri üzerinden test eder.

---

## 13. HTML'de formlar ve düğmeler

**Kaynak:**  
[Forms and buttons in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)

Formlar kullanıcılardan veri almak veya bir arayüzü kontrol etmek için web'in en önemli araçlarındandır.

Basit örnek:

```html
<form>
  <label for="name">Ad:</label>
  <input id="name" name="name" type="text" />

  <button type="submit">Gönder</button>
</form>
```

Bu başlangıç eğitimi:

- `<form>`,
- `<label>`,
- `<input>`,
- `<button>`,
- Temel form yapısı,
- Form kontrolleri,
- Erişilebilir etiketleme

konularına giriş yapar.

Daha ileri form konuları MDN'nin ayrı **Web forms** öğrenme materyallerinde ele alınır.

---

## 14. HTML hata ayıklama

**Kaynak:**  
[Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)

HTML diğer programlama dillerindeki gibi her hatada tamamen çalışmayı durdurmaz.

Tarayıcı çoğu zaman hatalı HTML'i düzeltmeye çalışır.

Bu durum bazen hatayı fark etmeyi zorlaştırabilir.

Örneğin:

```html
<p>Bir paragraf
<p>İkinci paragraf
```

tarayıcı tarafından bir şekilde işlenebilir, ancak kaynak kodun yapısı beklediğiniz gibi olmayabilir.

Bu eğitim:

- Tarayıcı DevTools DOM inspector,
- Yaygın HTML hataları,
- Yanlış nesting,
- Eksik kapanış etiketleri,
- HTML validator kullanımı

gibi konuları ele alır.

### HTML doğrulayıcı

HTML validator kullanmak:

```text
Kaynak HTML
    ↓
Standarda göre kontrol
    ↓
Hata / uyarı listesi
```

şeklinde çalışır.

Özellikle öğrenme aşamasında validator kullanmak yanlış HTML alışkanlıklarını erken fark etmenizi sağlar.

# Becerilerinizi test edin

MDN, eğitim makalelerinin arasında **Test your skills** sayfaları yerleştirir.

Amaç, bir sonraki konuya geçmeden önce en önemli bilgileri gerçekten hatırlayıp uygulayabildiğinizi kontrol etmektir.

Tüm HTML beceri testlerini toplu olarak şu sayfada bulabilirsiniz:

[Test your skills: Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)

Modül içinde testler genel olarak şu konuları kapsar:

```text
HTML text basics
Advanced HTML text
Links
Images
Audio and video
Forms and buttons
```

ve ilgili diğer temel HTML becerileri.

## Testleri nasıl kullanmalısınız?

İyi bir çalışma yöntemi:

```text
Eğitimi oku
    ↓
Örneği kendin yaz
    ↓
Dokümantasyonu kapat
    ↓
Test your skills yap
    ↓
Takıldığın yeri tekrar oku
```

Yalnızca cevaba bakıp geçmek yerine neden doğru olduğunu anlamaya çalışın.

# Ek eğitimler

Kaynak MDN sayfası aşağıdaki iki eğitimi ana öğrenme yolunun dışında tutar.

Bunlar zorunlu değildir; Core HTML makalelerini tamamladıktan sonra **stretch goal** olarak ele alınabilir.

## Vektör grafikleri HTML'e dahil etme

**Kaynak:**  
[Including vector graphics in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)

Vektör grafikler birçok durumda kullanışlıdır.

Avantajları:

- Küçük dosya boyutu,
- Büyük boyutlara ölçeklendiğinde piksel bozulmasının olmaması,
- CSS ve JavaScript ile etkileşime uygun olabilmesi.

Web'de en önemli vektör formatlarından biri:

```text
SVG
```

dir.

Bu eğitim SVG'nin HTML'e farklı şekillerde nasıl dahil edilebileceğini açıklar.

Örneğin:

```html
<img src="logo.svg" alt="Şirket logosu" />
```

veya inline SVG kullanılabilir.

---

## `<object>`'ten `<iframe>`'e — genel embedding teknolojileri

**Kaynak:**  
[From object to iframe — general embedding technologies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)

Görsel, video ve ses dışındaki içerikleri de bir sayfaya gömmek mümkündür.

Bu eğitim:

```html
<iframe>
<embed>
<object>
```

gibi öğeleri inceler.

### `<iframe>`

Başka bir web sayfasını kendi sayfanızın içine gömmek için kullanılabilir.

Örneğin:

```html
<iframe
  src="https://example.com/"
  title="Örnek sayfa"
></iframe>
```

### `<embed>` ve `<object>`

PDF gibi dış kaynakları gömmek için kullanılabilecek daha genel mekanizmalardır.

Bu tür embedding işlemlerinde:

- Güvenlik,
- Erişilebilirlik,
- Performans

konularına dikkat etmek gerekir.

# Ayrıca bakınız

Kaynak MDN sayfası HTML öğrenimini desteklemek için birkaç harici kaynak da önerir.

## Learn HTML and CSS — Scrimba

[Learn HTML and CSS](https://scrimba.com/)

Scrimba, MDN'nin öğrenme partnerlerinden biridir.

Etkileşimli dersler ve challenge'lar üzerinden HTML ve CSS öğretir.

> **Not:** Scrimba harici bir eğitim hizmetidir ve MDN dokümantasyonundan ayrı bir platformdur.

## Learn HTML — Codecademy

[Learn HTML](https://www.codecademy.com/learn/learn-html)

HTML temellerine giriş yapan alternatif bir eğitim kaynağıdır.

## The basics of semantic HTML — Scrimba

[Scrimba](https://scrimba.com/) üzerinde semantik HTML'e odaklanan etkileşimli bir ders bulunur.

Özellikle şu sorunun önemini vurgular:

```text
Bu öğe nasıl görünüyor?
```

yerine:

```text
Bu içerik ne anlama geliyor?
```

# Modülün genel öğrenme haritası

Bu modülün tamamını bir beceri ağacı olarak düşünürsek:

```text
HTML temeli
│
├── Sözdizimi
│   ├── Element
│   ├── Attribute
│   ├── Nesting
│   └── Document structure
│
├── Metin semantiği
│   ├── Heading
│   ├── Paragraph
│   ├── Emphasis
│   ├── Lists
│   └── Advanced text
│
├── Belge yapısı
│   ├── Header
│   ├── Nav
│   ├── Main
│   ├── Article
│   └── Footer
│
├── Bağlantılar
│
├── Medya
│   ├── Images
│   ├── Video
│   └── Audio
│
├── Veri
│   └── Tables
│
├── Kullanıcı etkileşimi
│   └── Forms / buttons
│
└── Kalite
    ├── Accessibility
    ├── Semantic HTML
    └── Debugging / validation
```

Bu modül tamamlandığında CSS'e geçmeden önce sağlam ve anlamsal HTML yapıları oluşturabilecek bir temeliniz olur.

# Özet

**HTML ile İçerik Yapılandırma** modülü, web geliştirme öğrenme yolunun en önemli temel taşlarından biridir. HTML'in görevi bir sayfanın görsel tasarımını yapmak değil, içeriğin yapısını ve anlamını tanımlamaktır. Doğru semantik HTML; erişilebilirlik, SEO, tarayıcı özellikleri ve kodun uzun vadeli bakım kalitesi açısından önemli avantajlar sağlar.

Modül ilk olarak HTML'in temel sözdizimini öğretir. Element, tag, attribute, document structure, doctype ve nesting gibi kavramları öğrendikten sonra `<head>` içindeki metadata, sayfa başlığı ve diğer belge bilgilerine geçilir. Ardından başlıklar, paragraflar, vurgu ve listeler gibi temel metin semantiği ele alınır. Daha gelişmiş HTML metin öğeleri sayesinde alıntılar, kod parçaları, üst/alt simgeler ve iletişim bilgileri gibi içeriklere doğru anlam verilebilir.

Sonraki aşamada tüm sayfanın semantik yapısı ele alınır. `<header>`, `<nav>`, `<main>`, `<article>` ve `<footer>` gibi öğeler, sayfayı yalnızca görsel kutulara değil, anlamlı bölgelere ayırmanızı sağlar. Bağlantılar konusuyla birlikte web'in temel özelliği olan sayfalar arası gezinme öğrenilir ve anlamlı bağlantı metni yazma gibi önemli erişilebilirlik ilkelerine giriş yapılır.

Görsel, video ve ses eğitimleri HTML'in medya içeriğiyle nasıl çalıştığını gösterir. Özellikle görsellerde `alt` metni ve videolarda altyazı gibi erişilebilirlik özelliklerinin önemi vurgulanır. Daha sonra tabloların doğru veri sunumu için nasıl kullanıldığı ve karmaşık tabloların `<caption>`, uygun başlık hücreleri ve `scope` gibi özelliklerle nasıl daha erişilebilir hale getirildiği öğrenilir.

Formlar ve düğmeler bölümü, kullanıcının web sayfasıyla veri gönderme veya arayüzü kontrol etme yoluyla etkileşim kurmasına giriş yapar. Son olarak HTML hata ayıklama bölümü DevTools, DOM inspector ve validator gibi araçlarla hatalı markup'ı bulup düzeltme yöntemlerini öğretir.

MDN'nin challenge ve **Test your skills** çalışmaları, yalnızca makaleleri okumak yerine öğrendiklerinizi gerçek HTML üzerinde uygulamanızı sağlar. Modülü tamamladıktan sonra yapısal olarak doğru, anlamsal ve erişilebilir HTML yazabilecek; böylece sonraki CSS ve JavaScript modüllerinin üzerine kurulacağı sağlam bir belge temeline sahip olacaksınız.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Structuring content with HTML”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) modül giriş sayfasının bölüm sırası ve öğrenme yolu temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Ana eğitimler ve challenge'lar

1. [Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
2. [What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
3. [Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
4. [Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
5. [Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)
6. [Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
7. [Challenge: Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter)
8. [Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
9. [Creating links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)
10. [Challenge: Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content)
11. [HTML images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
12. [HTML video and audio](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
13. [Challenge: Creepy-crawly splash page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Splash_page)
14. [HTML table basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
15. [HTML table accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
16. [Challenge: Structuring a planet data table](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Planet_data_table)
17. [Forms and buttons in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
18. [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)

### Becerilerinizi test edin

- [Test your skills: Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills)

### Ek eğitimler

- [Including vector graphics in HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
- [From object to iframe — general embedding technologies](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
