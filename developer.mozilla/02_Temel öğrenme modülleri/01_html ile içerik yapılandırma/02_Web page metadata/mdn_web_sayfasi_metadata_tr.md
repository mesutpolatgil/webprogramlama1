# `<head>` İçinde Neler Bulunur? Web Sayfası Metadata'sı

> **Kaynak:** [MDN Web Docs — What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, önemli örneklerini, notlarını, alıştırmalarını ve görsellerini izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 11 Eylül 2026

Bir HTML belgesindeki `<head>` bölümü, sayfa tarayıcıda açıldığında doğrudan içerik olarak gösterilmez. Bunun yerine belge hakkında bilgi taşıyan **metadata** burada bulunur.

Örneğin `<head>` içinde:

- Sayfanın `<title>` bilgisi,
- Karakter kodlaması,
- Sayfa açıklaması,
- Yazar bilgisi,
- CSS dosyalarının bağlantıları,
- JavaScript dosyalarının bağlantıları,
- Favicon ve mobil platform ikonları,
- Sosyal medya paylaşım metadata'sı

yer alabilir.

Tarayıcı, `<head>` içinde bulunan bu bilgileri HTML belgesini doğru biçimde işlemek ve sayfayı uygun şekilde sunmak için kullanır.

|  |  |
| --- | --- |
| **Ön koşullar:** | Önceki derste ele alınan temel HTML bilgisi. |
| **Öğrenme çıktıları:** | • HTML `<head>` bölümünün belge için metadata container görevi gördüğünü anlamak.<br>• Belge karakter kodlamasını ve başlığını ayarlamak.<br>• Arama motorları için metadata sağlamak.<br>• Tarayıcı ve mobil platformlarda kullanılacak site ikonlarını bağlamak.<br>• Stylesheet ve JavaScript dosyalarını HTML'e bağlamak.<br>• Belgenin ana dilini açılış `<html>` tag'ındaki `lang` attribute'u ile belirtmenin önemini anlamak. |

## Bu makalede

- [HTML `<head>` nedir?](#html-head-nedir)
- [Başlık ekleme](#başlık-ekleme)
- [Metadata: `<meta>` öğesi](#metadata-meta-öğesi)
- [Sitenize özel ikonlar ekleme](#sitenize-özel-ikonlar-ekleme)
- [HTML'e CSS ve JavaScript uygulama](#htmle-css-ve-javascript-uygulama)
- [Belgenin ana dilini ayarlama](#belgenin-ana-dilini-ayarlama)
- [Özet](#özet)

# HTML `<head>` nedir?

Önceki derste gördüğümüz temel HTML belgesine yeniden bakalım:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Test sayfam</title>
  </head>

  <body>
    <p>Bu benim sayfam.</p>
  </body>
</html>
```

HTML belgesindeki `<head>` bölümü:

```html
<head>
  <meta charset="utf-8" />
  <title>Test sayfam</title>
</head>
```

kısmıdır.

`<body>` içeriği tarayıcıda sayfanın görünen kısmını oluştururken `<head>` içeriği normal sayfa içeriği olarak görünmez.

Basit ayrım:

```text
<head>
→ belge hakkında bilgiler

<body>
→ kullanıcının gördüğü ve etkileşim kurduğu içerik
```

## Metadata nedir?

**Metadata**, kabaca:

```text
veri hakkında veri
```

anlamına gelir.

Bir web sayfasının:

- Başlığı,
- Yazarı,
- Açıklaması,
- Karakter kodlaması,
- İlişkili stil dosyası

gibi bilgiler doğrudan ana içerik değildir; belgenin kendisi hakkında bilgi verir.

Bu nedenle bunlar metadata olarak düşünülebilir.

## Gerçek sitelerde `<head>` daha büyük olabilir

Basit eğitim örneklerinde `<head>` yalnızca birkaç satır olabilir:

```html
<head>
  <meta charset="utf-8" />
  <title>Test sayfam</title>
</head>
```

Ancak gerçek web sitelerinde `<head>` içinde:

- Çok sayıda `<meta>`,
- CSS dosyaları,
- Favicon bağlantıları,
- Sosyal medya metadata'sı,
- JavaScript,
- Performans optimizasyonu için `<link>` öğeleri

bulunabilir.

Tarayıcınızın geliştirici araçlarını kullanarak sevdiğiniz sitelerin `<head>` içeriklerini inceleyebilirsiniz.

Bu derste `<head>` içine eklenebilecek her şeyi öğrenmek yerine, en sık karşılaşacağınız temel öğelere odaklanacağız.

# Başlık ekleme

Önceki derste `<title>` öğesini görmüştük:

```html
<title>Test sayfam</title>
```

Bu öğe HTML belgesinin genel başlığını tanımlar.

Ancak `<title>` ile `<h1>` birbirine karıştırılmamalıdır.

## `<h1>` ile `<title>` arasındaki fark

### `<h1>`

`<h1>`:

- `<body>` içinde bulunur,
- Sayfanın görünen içeriğinde gösterilir,
- Genellikle sayfanın ana içerik başlığını tanımlar.

Örnek:

```html
<h1>Kediler hakkında</h1>
```

### `<title>`

`<title>`:

- `<head>` içinde bulunur,
- Normal sayfa içeriği olarak gösterilmez,
- HTML belgesinin genel başlığını tanımlar.

Örnek:

```html
<title>Kediler hakkında bilgi | Örnek Site</title>
```

Basit karşılaştırma:

```text
<title>
→ tarayıcı sekmesi / bookmark / arama sonucu gibi yerlerde

<h1>
→ sayfanın görünen ana içeriğinde
```

# Örneği inceleme

Kaynak MDN sayfasındaki alıştırma, `<title>` ve `<h1>` arasındaki farkı gözlemlemenizi ister.

Örnek bir belge:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>&lt;title&gt; öğesi</title>
  </head>

  <body>
    <h1>&lt;h1&gt; öğesi</h1>
  </body>
</html>
```

Tarayıcıdaki görünüm:

![Tarayıcı sekmesinde title, sayfa içinde h1 bulunan örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/title-example.png)

Bu örnekte:

```text
<title> içeriği
→ tarayıcı sekmesinde

<h1> içeriği
→ sayfanın içinde
```

görülür.

## Kendiniz deneyin

Kaynak örnek dosyası:

[title-example.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/title-example.html)

Dosyayı:

1. İndirin veya içeriğini yeni bir `.html` dosyasına kopyalayın.
2. Tarayıcıda açın.
3. `<title>` içeriğini değiştirin.
4. `<h1>` içeriğini değiştirin.
5. Sayfayı yenileyip farkı gözlemleyin.

# `<title>` bookmark adında da kullanılır

Bir sayfayı tarayıcıda favorilere/bookmark'lara eklediğinizde tarayıcı genellikle `<title>` içeriğini varsayılan bookmark adı olarak önerir.

Kaynak görsel:

![Firefox'ta bookmark adı title içeriğinden otomatik doldurulmuş örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bookmark-example.png)

Bu nedenle iyi bir `<title>` yalnızca tarayıcı sekmesinde güzel görünmek için değil, farklı bağlamlarda sayfanın tanınabilmesi için de önemlidir.

`<title>` içeriği arama motoru sonuçlarında da kullanılabilir.

# Metadata: `<meta>` öğesi

HTML'de metadata eklemek için kullanılan temel öğelerden biri:

```html
<meta>
```

öğesidir.

`<meta>` bir **void element**'tir.

Yani:

```html
<meta>...</meta>
```

şeklinde içerik taşımaz.

Genellikle attribute'lar üzerinden bilgi verir.

`<meta>` öğesinin çok sayıda farklı kullanımı vardır. Bu aşamada hepsini öğrenmek yerine sık kullanılan birkaç örneği incelemek yeterlidir.

# Belgenin karakter kodlamasını belirtme

Daha önce şu satırı görmüştük:

```html
<meta charset="utf-8" />
```

Bu satır belgenin **character encoding**, yani karakter kodlamasını belirtir.

`UTF-8` modern web için standart tercihtir ve neredeyse bütün insan dillerindeki karakterleri destekler.

Örneğin aynı belgede:

```text
Türkçe: Şişli, çığ, öğüt
Japonca: ご飯が熱い。
İngilizce: Hello world
```

gibi metinleri gösterebilirsiniz.

## Doğru encoding örneği

UTF-8 kullanıldığında Japonca karakterler doğru görüntülenir:

![UTF-8 karakter kodlamasında İngilizce ve Japonca karakterlerin doğru gösterimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/correct-encoding.png)

Örneğin:

```html
<meta charset="utf-8" />

<p>Japanese example: ご飯が熱い。</p>
```

sorunsuz çalışır.

# Yanlış encoding ne yapabilir?

Örneğin belgeyi:

```text
ISO-8859-1
```

gibi Japonca karakterleri kapsamayan eski bir karakter setiyle yorumlatırsanız metin bozulabilir.

Kaynak örnek:

![Yanlış karakter kodlaması nedeniyle Japonca karakterlerin bozulduğu örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bad-encoding.png)

Bu tür bozuk karakterlere bazen:

```text
mojibake
```

denir.

> **Not:** Bazı modern tarayıcılar hatalı encoding'i otomatik olarak tahmin edip düzeltebilir. Bu nedenle her tarayıcıda bozuk sonucu görmeyebilirsiniz. Buna rağmen her HTML belgesinde açıkça `utf-8` belirtmek iyi uygulamadır.

# Karakter kodlamasını deneyin

Kaynak alıştırmada önceki:

```text
title-example.html
```

dosyasını kullanabilirsiniz.

`charset` değerini geçici olarak:

```html
<meta charset="ISO-8859-1" />
```

şeklinde değiştirin.

Ardından `<body>` içine:

```html
<p>Japanese example: ご飯が熱い。</p>
```

ekleyin.

Tarayıcı davranışını gözlemleyin.

Deney bittikten sonra tekrar:

```html
<meta charset="utf-8" />
```

kullanın.

# Author ve description ekleme

Çok sayıda `<meta>` öğesi:

```text
name
+
content
```

attribute'larını kullanır.

Genel yapı:

```html
<meta name="metadata-türü" content="metadata-değeri" />
```

Burada:

```text
name
→ hangi metadata türü olduğunu

content
→ metadata'nın gerçek değerini
```

belirtir.

## Author metadata

Örneğin:

```html
<meta name="author" content="Chris Mills" />
```

sayfanın yazarını tanımlayabilir.

Bu bilgi:

- İçeriği kimin hazırladığını öğrenmek,
- Gerektiğinde yazara ulaşmak,
- Bazı içerik yönetim sistemleri tarafından otomatik işlenmek

için yararlı olabilir.

Kendi sayfanızda örneğin:

```html
<meta name="author" content="Fatih Yılmaz" />
```

gibi bir değer kullanabilirsiniz.

# Description metadata

Sayfanın kısa bir açıklamasını:

```html
<meta
  name="description"
  content="HTML metadata, title, favicon, CSS ve JavaScript bağlantılarını açıklayan eğitim sayfası."
/>
```

şeklinde belirtebilirsiniz.

Description:

- Sayfanın ne hakkında olduğunu açıklar,
- Arama motorlarına sayfa hakkında bilgi sağlar,
- Bazı arama sonuçlarında snippet olarak kullanılabilir.

İyi bir description:

```text
kısa
+
doğru
+
sayfanın gerçek içeriğini özetleyen
```

bir metin olmalıdır.

# SEO ile ilişkisi

Arama motorlarında daha görünür ve anlaşılır içerik hazırlama çalışmalarına:

```text
SEO
```

yani:

```text
Search Engine Optimization
```

denir.

`<title>` ve description metadata, SEO bağlamında önemli olabilir.

Ancak SEO yalnızca birkaç `<meta>` tag'ı eklemekten çok daha geniş bir konudur.

Şunlar da önemlidir:

- Gerçek ve kaliteli içerik,
- Semantic HTML,
- Performans,
- Mobil uyumluluk,
- Erişilebilirlik,
- İyi bağlantı yapısı.

# Description'ın arama motorlarında kullanımını inceleme

Kaynak MDN alıştırması, description metadata'nın gerçek bir web sayfasında nasıl kullanıldığını incelemenizi ister.

Genel adımlar:

1. MDN Web Docs ana sayfasını açın.
2. Sayfanın kaynak kodunu görüntüleyin.
3. `description` meta tag'ını bulun.
4. Arama motorunda `"MDN Web Docs"` araması yapın.
5. Arama sonucundaki başlık ve açıklamayla sayfanın metadata'sını karşılaştırın.

Örnek metadata:

```html
<meta
  name="description"
  content="MDN Web Docs provides information about Open Web technologies..."
/>
```

Arama sonucu örneği:

![MDN Web Docs arama sonucunda title ve description bilgilerinin gösterildiği örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/mdn-search-result.png)

> **Not:** Arama motorları `<meta name="description">` değerini her zaman birebir göstermek zorunda değildir. Kullanıcının sorgusuna daha uygun gördükleri başka bir sayfa metnini snippet olarak seçebilirler.

# `keywords` metadata neden artık önemli değil?

Geçmişte şu yapı yaygındı:

```html
<meta
  name="keywords"
  content="html, css, web, development"
/>
```

Ama arama motorları bunu büyük ölçüde kullanmayı bıraktı.

Sebep, geçmişte site sahiplerinin yüzlerce alakasız keyword ekleyerek arama sonuçlarını manipüle etmeye çalışmasıydı.

Bu nedenle:

```text
<meta name="keywords">
```

modern SEO için güvenilecek bir yöntem değildir.

# Diğer metadata türleri

Web'de yalnızca standart `author` veya `description` metadata'sı bulunmaz.

Bazı platformlar kendi metadata protokollerini kullanabilir.

Bunlardan yaygın biri:

```text
Open Graph
```

protokolüdür.

Open Graph ilk olarak Facebook tarafından geliştirildi ve bir web bağlantısının sosyal medya platformlarında daha zengin şekilde gösterilebilmesini sağlar.

# Open Graph metadata

Örnek:

```html
<meta
  property="og:image"
  content="https://example.com/social-image.png"
/>

<meta
  property="og:description"
  content="Web geliştirme hakkında öğrenme kaynakları."
/>

<meta
  property="og:title"
  content="Örnek Web Sitesi"
/>
```

Burada:

```text
og:image
→ paylaşım görseli

og:description
→ paylaşım açıklaması

og:title
→ paylaşım başlığı
```

gibi bilgiler tanımlanır.

Bir sosyal medya platformu linki gösterirken bunları okuyup zengin bir önizleme oluşturabilir.

Kaynak MDN örneği:

![Open Graph metadata kullanılarak Facebook'ta zengin bağlantı önizlemesi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/facebook-output.png)

Bu yaklaşım:

```text
yalnızca çıplak URL
```

yerine:

```text
görsel
+
başlık
+
açıklama
+
URL
```

içeren daha anlaşılır bir paylaşım kartı üretir.

# Sitenize özel ikonlar ekleme

Web sitenize çeşitli bağlamlarda kullanılabilecek ikonlar ekleyebilirsiniz.

Bunların en bilineni:

```text
favicon
```

dur.

Kelime:

```text
favorites icon
```

ifadesinden gelir.

Favicon genellikle:

- Tarayıcı sekmesinde,
- Bookmark listesinde,
- Tarayıcı geçmişinde,
- Bazı işletim sistemi arayüzlerinde

görülebilir.

Kaynak favicon örneği:

![Tarayıcı sekmelerinde sayfa başlıklarının yanında favicon kullanılan örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/favicon.svg)

# Basit favicon ekleme

İlk olarak favicon dosyanızı web sitesi dosya yapısında uygun bir yere koyun.

Yaygın formatlar:

```text
.ico
.gif
.png
```

Daha sonra `<head>` içinde:

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
```

kullanabilirsiniz.

Burada:

```text
<link>
→ harici kaynak ilişkisi tanımlar

rel="icon"
→ bu kaynağın site ikonu olduğunu belirtir

href="/favicon.ico"
→ ikon dosyasının yolunu belirtir
```

# `/` ile başlayan yol

Örnekte:

```html
href="/favicon.ico"
```

kullanılmıştır.

Başlangıçtaki `/`:

```text
site root
```

yani sitenin kök dizininden başlayan bir yol ifade eder.

Framework'lerde root dosyaları:

```text
public/
static/
```

gibi özel klasörlerden sunulabilir.

Bu aşamada dosya yollarının bütün ayrıntılarını bilmeniz gerekmez.

İlgili MDN kaynağı:

[A quick primer on URLs and paths](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)

# Otomatik favicon keşfi

Modern tarayıcıların çoğu site root'unda:

```text
/favicon.ico
```

bulursa bunu otomatik olarak kullanabilir.

Bu nedenle bazı siteler açıkça `<link rel="icon">` eklemeyebilir.

Yine de explicit `<link>`:

- Dosyayı farklı bir konuma koymak,
- Farklı format kullanmak,
- Birden fazla ikon tanımlamak

için yararlıdır.

# Bookmark panelindeki favicon

Kaynak örnek:

![Firefox bookmark panelinde sayfa adının yanında favicon](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bookmark-favicon.png)

Bu da favicon'un yalnızca sekme görünümü için kullanılmadığını gösterir.

# Apple touch icon ve farklı cihaz ikonları

Bir web sitesi ana ekrana kaydedildiğinde farklı platformlar farklı çözünürlükte ikonlara ihtiyaç duyabilir.

Basit örnek:

```html
<link rel="icon" href="/favicon-48x48.png" />

<link
  rel="apple-touch-icon"
  href="/apple-touch-icon.png"
/>
```

Daha ayrıntılı yapı:

```html
<!-- Yüksek çözünürlüklü iPad Pro: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png"
/>

<!-- 3x çözünürlüklü iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png"
/>

<!-- Retina olmayan iPad / iPad mini: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png"
/>

<!-- 2x iPhone ve diğer cihazlar: -->
<link
  rel="apple-touch-icon"
  href="/apple-touch-icon-120x120.png"
/>

<!-- Temel favicon: -->
<link rel="icon" href="/favicon.ico" />
```

> **Not:** Bu kadar ayrıntılı favicon yapılandırmasını şu anda ezberlemeniz beklenmez. Buradaki amaç, başka sitelerin kaynak kodunda bu tür `<link>` öğeleri gördüğünüzde ne olduklarını anlayabilmenizdir.

# HTML'e CSS ve JavaScript uygulama

Modern web sitelerinin büyük çoğunluğu:

```text
HTML
+
CSS
+
JavaScript
```

kullanır.

Genellikle:

```text
HTML
→ yapı ve içerik

CSS
→ görünüm

JavaScript
→ davranış ve etkileşim
```

olarak düşünebilirsiniz.

Harici CSS ve JavaScript dosyalarını HTML belgesine bağlamak için `<head>` içinde ilgili öğeler kullanılabilir.

# CSS bağlama

Harici CSS dosyası:

```html
<link rel="stylesheet" href="my-css-file.css" />
```

ile bağlanır.

Bu öğe `<head>` içinde bulunmalıdır.

Örneğin:

```html
<head>
  <meta charset="utf-8" />
  <title>Örnek sayfa</title>

  <link rel="stylesheet" href="styles.css" />
</head>
```

Burada:

```text
rel="stylesheet"
→ bağlantılı dosyanın stylesheet olduğunu belirtir

href="styles.css"
→ CSS dosyasının yoludur
```

# JavaScript bağlama

Harici JavaScript dosyası:

```html
<script src="my-js-file.js" defer></script>
```

ile yüklenebilir.

Örneğin:

```html
<head>
  <meta charset="utf-8" />
  <title>Örnek</title>

  <script src="main.js" defer></script>
</head>
```

## `src`

```html
src="main.js"
```

yüklemek istediğimiz JavaScript dosyasının yolunu belirtir.

## `defer`

```html
defer
```

bir Boolean attribute'dur.

Tarayıcıya script'i indirirken HTML parse işlemini engellememesini ve kodu belge parse edildikten sonra çalıştırmasını söyler.

Bu özellikle script'in sayfadaki DOM öğelerine erişmesi gerektiğinde yararlıdır.

Örneğin JavaScript:

```js
const button = document.querySelector("button");
```

çalıştırıyorsa butonun önce HTML parser tarafından oluşturulmuş olması gerekir.

`defer` bu tür başlangıç sorunlarını azaltan güvenilir bir yöntemdir.

> **Not:** JavaScript'i yüklemenin `async`, module script'ler ve başka yöntemleri de vardır. Bu aşamada `defer` kullanılan harici script yaklaşımı iyi bir varsayılan modeldir.

# `<script>` void element değildir

`<script>` şu şekilde yazılmalıdır:

```html
<script src="main.js" defer></script>
```

Şu şekilde değil:

```html
<script src="main.js" defer />
```

Çünkü `<script>` gerçek bir void element değildir.

Harici dosya kullanmak yerine doğrudan element içine JavaScript de yazabilirsiniz:

```html
<script>
  console.log("Merhaba");
</script>
```

# Sıra sizde: Bir sayfaya CSS ve JavaScript uygulayın

Kaynak MDN sayfasındaki uygulama alıştırması üç dosya kullanır:

- `meta-example.html`
- `style.css`
- `script.js`

Kaynaklar:

- [meta-example.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/meta-example.html)
- [style.css — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/style.css)
- [script.js — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/script.js)

## Alıştırma adımları

1. Üç dosyayı aynı klasöre kaydedin.

Örneğin:

```text
metadata-example/
├── meta-example.html
├── style.css
└── script.js
```

2. HTML dosyasını hem tarayıcıda hem kod düzenleyicide açın.

3. `<head>` içine CSS bağlantısını ekleyin:

```html
<link rel="stylesheet" href="style.css" />
```

4. JavaScript bağlantısını ekleyin:

```html
<script src="script.js" defer></script>
```

5. Dosyayı kaydedin.

6. Tarayıcıyı yenileyin.

Doğru bağlandıysa sayfanın görünümü ve davranışı değişecektir.

Kaynak sonuç görseli:

![CSS uygulanınca yeşil arka plan ve JavaScript ile dinamik liste eklenmiş örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/js-and-css.png)

## CSS etkisi

Kaynak örnekte CSS:

- Sayfanın arka planını yeşile çevirir,
- Yazıları büyütür,
- JavaScript tarafından oluşturulan listeyi biçimlendirir.

## JavaScript etkisi

JavaScript sayfaya dinamik bir liste ekler.

Kaynak örnekte:

- Liste dışındaki bir yere tıkladığınızda yeni madde eklemek için dialog açılır.
- Var olan bir liste öğesine tıkladığınızda o maddenin metnini değiştirebilirsiniz.

Bu örnek önemli bir kavramı gösterir:

```text
HTML
→ başlangıç yapısı

CSS
→ görsel stil

JavaScript
→ dinamik davranış
```

Üç dosya ayrı olsa da tarayıcı bunları tek bir web sayfası olarak birleştirir.

> **İpucu:** CSS veya JavaScript çalışmıyorsa dosya isimlerini ve yollarını kontrol edin. `style.css`, `script.js` ve HTML dosyasının gerçekten aynı klasörde olup olmadığını doğrulayın.

Kaynak MDN çözüm örneği:

[css-and-js.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/the-html-head/css-and-js.html)

# Belgenin ana dilini ayarlama

Web sayfasının dilini belirtmek çok önemlidir.

Bu işlem açılış `<html>` öğesine:

```html
lang
```

attribute'u eklenerek yapılır.

Türkçe belge:

```html
<html lang="tr">
  ...
</html>
```

ABD İngilizcesi:

```html
<html lang="en-US">
  ...
</html>
```

# `lang` neden önemlidir?

Belge dilini doğru belirtmenin birkaç faydası vardır.

## Arama motorları

Arama motorları sayfanın hangi dilde olduğunu daha doğru anlayabilir.

Bu, sayfanın uygun dildeki arama sonuçlarında gösterilmesine yardımcı olabilir.

## Ekran okuyucular

Screen reader gibi yardımcı teknolojiler metnin telaffuzunda dil bilgisinden yararlanır.

Örneğin aynı yazılış farklı dillerde farklı telaffuz edilebilir.

Dil belirtilmemişse ekran okuyucu yanlış telaffuz kullanabilir.

Bu nedenle:

```html
<html lang="tr">
```

yalnızca SEO amacıyla değil, erişilebilirlik açısından da önemlidir.

# Sayfa içindeki farklı diller

Bir belgenin tamamı Türkçe olabilir ancak içinde başka dilde bir kelime veya bölüm bulunabilir.

Bu durumda `lang` yalnızca `<html>` üzerinde değil, ilgili alt öğede de kullanılabilir.

Örneğin:

```html
<p>
  Japonca örnek:
  <span lang="ja">ご飯が熱い。</span>
</p>
```

Burada:

```text
belgenin genel dili
→ Türkçe

span içeriği
→ Japonca
```

olarak işaretlenebilir.

Bu sayede yardımcı teknolojiler ilgili bölümü doğru dil kurallarıyla yorumlayabilir.

## Dil kodları

Yaygın örnekler:

```text
tr
→ Türkçe

en
→ İngilizce

en-US
→ ABD İngilizcesi

fr
→ Fransızca

ja
→ Japonca

de
→ Almanca
```

Dil tag'ları standart kurallara göre tanımlanır.

İlgili kaynak:

[Language tags in HTML and XML — W3C](https://www.w3.org/International/articles/language-tags/)

# Tam `<head>` örneği

Bu bölümde öğrendiklerimizin çoğunu bir araya getiren basit bir örnek:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />

    <meta
      name="description"
      content="HTML metadata kullanımını gösteren örnek bir web sayfası."
    />

    <meta name="author" content="Örnek Yazar" />

    <meta property="og:title" content="Metadata örneği" />
    <meta
      property="og:description"
      content="HTML head ve metadata üzerine örnek."
    />
    <meta
      property="og:image"
      content="https://example.com/social-preview.png"
    />

    <title>Metadata örneği</title>

    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="style.css" />

    <script src="script.js" defer></script>
  </head>

  <body>
    <h1>Metadata örneği</h1>
  </body>
</html>
```

Bu örnekte:

```text
charset
description
author
Open Graph
title
favicon
CSS
JavaScript
lang
```

kavramlarının tümü birlikte kullanılmıştır.

# `<head>` içeriğini bir harita olarak düşünelim

```text
<head>
│
├── <meta charset="utf-8">
│     └── karakter kodlaması
│
├── <title>
│     └── belge başlığı
│
├── <meta name="description">
│     └── sayfa açıklaması
│
├── <meta name="author">
│     └── yazar
│
├── <meta property="og:*">
│     └── sosyal medya metadata'sı
│
├── <link rel="icon">
│     └── favicon
│
├── <link rel="stylesheet">
│     └── CSS
│
└── <script defer>
      └── JavaScript
```

Bu yapı `<head>` bölümünün sayfanın görünen içeriğinden ziyade belgenin **nasıl tanımlandığı, işlendiği ve diğer sistemlere sunulduğu** ile ilgili olduğunu gösterir.

# Sık yapılan hatalar

## `<title>` ile `<h1>`'i aynı şey sanmak

Yanlış düşünce:

```text
<title> sayfa içinde görünen büyük başlıktır
```

Doğrusu:

```text
<title>
→ belge metadata'sı

<h1>
→ body içindeki ana içerik başlığı
```

## `charset` eklememek

Her modern HTML belgesinde erken aşamada:

```html
<meta charset="utf-8" />
```

kullanmak iyi alışkanlıktır.

## Description'a keyword listesi yazmak

Kötü:

```html
<meta
  name="description"
  content="html, css, javascript, web, website, webdev, tutorial"
/>
```

Daha iyi:

```html
<meta
  name="description"
  content="Yeni başlayanlar için HTML metadata ve head öğelerini açıklayan eğitim."
/>
```

Description insanlar tarafından okunabilir gerçek bir cümle olmalıdır.

## `<link>` dosya yolunu yanlış yazmak

Örneğin dosyanız:

```text
css/style.css
```

ise:

```html
<link rel="stylesheet" href="style.css" />
```

çalışmayabilir.

Doğru yol:

```html
<link rel="stylesheet" href="css/style.css" />
```

olmalıdır.

## `<script>` kapanış tag'ını unutmak

Yanlış:

```html
<script src="main.js" defer />
```

Doğru:

```html
<script src="main.js" defer></script>
```

## `lang` attribute'unu kullanmamak

Eksik:

```html
<html>
```

Daha iyi:

```html
<html lang="tr">
```

# Özet

Bu bölümde HTML belgesinin `<head>` bölümünün sayfanın normalde görünmeyen ancak tarayıcı, arama motorları, sosyal medya platformları ve yardımcı teknolojiler için son derece önemli bilgiler taşıyan **metadata container'ı** olduğunu öğrendiniz. `<body>` kullanıcıya gösterilen asıl içeriği taşırken `<head>` belgenin nasıl tanımlanacağını ve başka sistemler tarafından nasıl işleneceğini belirleyen bilgileri içerir.

`<title>` belgenin genel başlığını belirler ve tarayıcı sekmesi, bookmark adı ve bazı arama motoru sonuçları gibi yerlerde kullanılabilir. Bu öğe, sayfanın görünür içeriğindeki ana başlığı tanımlayan `<h1>` ile karıştırılmamalıdır.

`<meta>` öğesi çeşitli metadata türlerini tanımlamak için kullanılır. `<meta charset="utf-8">` modern HTML belgelerinde karakter kodlamasını belirtir ve farklı dillerdeki karakterlerin doğru görüntülenmesini sağlar. `author` ve `description` gibi metadata türleri ise belgenin yazarı ve içeriği hakkında ek bilgi sağlayabilir. Description bazı arama sonuçlarında snippet olarak kullanılabilirken eski `keywords` metadata'sı modern arama motorlarında büyük ölçüde önemini kaybetmiştir.

Open Graph gibi metadata protokolleri web bağlantılarının sosyal medya platformlarında görsel, başlık ve açıklama içeren daha zengin kartlar biçiminde gösterilmesini sağlar. Favicon ve Apple touch icon gibi ikonlar ise site kimliğinin tarayıcı sekmeleri, bookmark listeleri ve mobil ana ekran gibi farklı bağlamlarda görünmesine yardımcı olur.

`<head>` ayrıca harici kaynakların bağlandığı önemli bir alandır. CSS dosyaları `<link rel="stylesheet">`, JavaScript dosyaları ise `<script src="..." defer></script>` kullanılarak sayfaya eklenebilir. `defer`, script'in HTML parse işlemi tamamlandıktan sonra çalışmasını sağlayarak JavaScript'in henüz oluşturulmamış DOM öğelerine erişmeye çalışmasından kaynaklanabilecek sorunları azaltır.

Son olarak belgenin ana dili açılış `<html>` tag'ında `lang` attribute'u ile belirtilmelidir. Örneğin Türkçe bir sayfada `<html lang="tr">` kullanmak arama motorlarının ve özellikle ekran okuyucuların içeriği doğru yorumlamasına yardımcı olur. Sayfanın içindeki farklı dildeki alt bölümlerde de ayrı `lang` değerleri kullanılabilir.

Bu temel bilgilerle artık bir HTML belgesinin `<head>` bölümünü yalnızca zorunlu birkaç satır olarak değil; **sayfanın kimliği, karakter kodlaması, arama görünümü, sosyal paylaşımı, görsel kaynakları, CSS/JavaScript bağlantıları ve erişilebilir dil bilgisini yöneten merkezi metadata alanı** olarak değerlendirebilirsiniz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“What's in the head? Web page metadata”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata) sayfasının bölüm sırası, öğrenme hedefleri, alıştırmaları ve görsel akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

## Kaynak sayfadaki görseller

- [title-example.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/title-example.png)
- [bookmark-example.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bookmark-example.png)
- [correct-encoding.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/correct-encoding.png)
- [bad-encoding.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bad-encoding.png)
- [mdn-search-result.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/mdn-search-result.png)
- [facebook-output.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/facebook-output.png)
- [favicon.svg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/favicon.svg)
- [bookmark-favicon.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/bookmark-favicon.png)
- [js-and-css.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata/js-and-css.png)

## İlgili bağlantılar

- [Önceki: Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
- [Sonraki: Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
- [`<head>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head)
- [`<meta>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta)
- [`<link>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link)
- [`<script>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script)
- [Open Graph protocol](https://ogp.me/)
