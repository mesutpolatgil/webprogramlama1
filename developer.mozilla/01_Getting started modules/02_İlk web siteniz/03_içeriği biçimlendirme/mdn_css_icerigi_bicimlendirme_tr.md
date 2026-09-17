# CSS: İçeriği Biçimlendirme

> **Kaynak:** [MDN Web Docs — CSS: Styling the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)  
> **Türkçe sürüm:** Kaynak sayfanın konu sırasını, öğrenme akışını ve görsel referanslarını koruyan özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 20 Temmuz 2026

CSS (**Cascading Style Sheets**), HTML ile oluşturulan içeriğin görünümünü biçimlendirmek için kullanılan stil dilidir. Bu bölümde bir CSS dosyasını HTML'e bağlayacak, temel CSS sözdizimini öğrenecek ve önceki bölümde oluşturduğunuz sayfaya renk, yazı tipi, boşluk, kenarlık ve hizalama gibi görsel özellikler ekleyeceksiniz.

|  |  |
| --- | --- |
| **Ön koşullar:** | İşletim sisteminizi, temel web geliştirme yazılımlarını ve dosya sistemini kullanabiliyor olmak; ayrıca önceki bölümde hazırlanan temel HTML sayfasına sahip olmak. |
| **Öğrenme çıktıları:** | • CSS'in amacını ve HTML üzerindeki rolünü anlamak.<br>• Seçici, bildirim, özellik ve değer gibi temel CSS sözdizimi parçalarını tanımak.<br>• Yazı tipi ve renk değiştirmek, kutu modeliyle çalışmak ve HTML öğelerini temel düzeyde konumlandırmak. |

## Bu makalede

- [CSS nedir?](#css-nedir)
- [CSS'i HTML'e uygulama](#cssi-htmle-uygulama)
- [CSS sözdiziminin temelleri](#css-sözdiziminin-temelleri)
- [Metni geliştirme](#metni-geliştirme)
- [CSS büyük ölçüde kutularla ilgilidir](#css-büyük-ölçüde-kutularla-ilgilidir)
- [Sayfa rengini değiştirme](#sayfa-rengini-değiştirme)
- [Body öğesini biçimlendirme](#body-öğesini-biçimlendirme)
- [Ana başlığı konumlandırma ve biçimlendirme](#ana-başlığı-konumlandırma-ve-biçimlendirme)
- [Görseli ortalama](#görseli-ortalama)
- [Sonuç](#sonuç)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## CSS nedir?

CSS bir programlama dili değildir ve HTML gibi bir işaretleme dili de değildir. CSS bir **stil sayfası dilidir**.

CSS ile önce hangi HTML öğesini biçimlendirmek istediğinizi seçersiniz, ardından o öğenin görünümünü değiştiren özelliklere değerler verirsiniz.

Örneğin şu HTML'i düşünün:

```html
<p>Günlük rutin:</p>

<ul>
  <li>Kahvaltı yap</li>
  <li>Çalış</li>
  <li>Dinlen</li>
</ul>
```

Tarayıcı bu yapıyı kendi varsayılan stilleriyle gösterir.

CSS eklediğinizde görünümü değiştirebilirsiniz:

```css
p {
  font-family: Arial, sans-serif;
  color: darkred;
}

li {
  background-color: palegreen;
  border: 1px solid #333;
  margin-bottom: 6px;
}
```

Bu örnekte:

- Paragrafın yazı tipi ve rengi değişir.
- Liste öğelerine arka plan rengi eklenir.
- Her liste öğesinin etrafında kenarlık görünür.
- Öğelerin altına boşluk eklenir.

CSS yalnızca metin rengi değiştirmek için kullanılmaz. CSS ile ayrıca:

- Arka planlar ve degradeler oluşturabilir,
- Yazı tiplerini ve tipografiyi yönetebilir,
- Öğelerin boyutlarını belirleyebilir,
- Sayfa düzenleri oluşturabilir,
- Animasyonlar ekleyebilir,
- Farklı ekran boyutları için duyarlı tasarımlar hazırlayabilirsiniz.

## CSS'i HTML'e uygulama

Önce CSS dosyanızın HTML sayfasına gerçekten bağlandığından emin olmanız gerekir.

Önceki bölümdeki proje yapınızı şu hale getirin:

```text
first-website/
├── index.html
├── images/
│   └── site-logo.png
└── styles/
    └── style.css
```

### 1. `styles` klasörünü oluşturun

Proje klasörünüzün içinde:

```text
styles
```

adında bir klasör oluşturun.

### 2. CSS dosyasını oluşturun

`styles` klasörünün içine:

```text
style.css
```

adında yeni bir dosya oluşturun.

İlk test için şu basit stili ekleyin:

```css
p {
  color: crimson;
}
```

### 3. CSS dosyasını HTML'e bağlayın

`index.html` dosyanızdaki `<head>` bölümüne şu satırı ekleyin:

```html
<link href="styles/style.css" rel="stylesheet" />
```

Örneğin:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>İlk web sayfam</title>
  <link href="styles/style.css" rel="stylesheet" />
</head>
```

### 4. Tarayıcıda test edin

Dosyaları kaydedin ve sayfayı tarayıcıda yenileyin.

Paragrafların rengi değiştiyse CSS dosyanız başarıyla uygulanıyor demektir.

Kaynak MDN sayfasındaki örnekte ilk CSS bağlantısından sonra sayfa aşağıdakine benzer görünür:

![CSS uygulandıktan sonra paragraf metninin kırmızı göründüğü örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-styled.png)

Sonuç değişmediyse şunları kontrol edin:

- CSS dosyasının adı gerçekten `style.css` mi?
- Dosya `styles` klasöründe mi?
- `<link>` öğesindeki yol doğru mu?
- `rel="stylesheet"` yazılmış mı?
- HTML ve CSS dosyalarını kaydettiniz mi?
- Tarayıcıyı yenilediniz mi?

## CSS sözdiziminin temelleri

Aşağıdaki CSS örneğine bakalım:

```css
p {
  color: navy;
}
```

Buradaki parçalar:

```text
p              → seçici (selector)
color          → özellik (property)
navy           → değer (value)
color: navy;   → bildirim (declaration)
```

Tam yapı ise bir **CSS kuralı (rule/ruleset)** olarak adlandırılır.

### Birden fazla bildirim

Bir CSS kuralında birden fazla özellik bulunabilir:

```css
p {
  color: navy;
  width: 520px;
  border: 1px solid #222;
}
```

Her bildirim:

```text
özellik: değer;
```

şeklinde yazılır.

Önemli iki noktalama işareti vardır:

- `:` özelliği değerinden ayırır.
- `;` bildirimleri birbirinden ayırır.

### Birden fazla seçici

Bir kuralı birden fazla öğeye uygulayabilirsiniz:

```css
h1,
p,
li {
  color: #222;
}
```

Seçiciler virgülle ayrılır.

CSS'te çok sayıda seçici türü vardır:

- Öğe/tür seçicileri: `p`, `h1`, `img`
- Sınıf seçicileri: `.card`
- Kimlik seçicileri: `#main`
- Öznitelik seçicileri
- Sözde sınıflar
- Birleşik seçiciler

Bu başlangıç bölümünde ağırlıklı olarak öğe seçicileri kullanılacaktır.

## Metni geliştirme

Şimdi sayfanın yazı tipini ve metin ayarlarını iyileştirelim.

### Google Fonts bağlantısını ekleme

Önceki planlama bölümünde Google Fonts'tan bir font seçtiyseniz size verilen `<link>` kodlarını `index.html` dosyanızın `<head>` bölümüne ekleyin.

Örneğin farklı bir font seçtiyseniz Google Fonts size buna benzer bir yapı verebilir:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

> **Not:** Kendi seçtiğiniz Google Fonts kodunu kullanın. Yukarıdaki örnek yalnızca yapıyı göstermek içindir.

### Temel yazı tipini ayarlama

`style.css` içinde başlangıçtaki test kuralını kaldırın ve şu tür bir temel ayar ekleyin:

```css
html {
  font-size: 10px;
  font-family: "Nunito", sans-serif;
}
```

Burada:

- `font-size` temel yazı boyutunu belirler.
- `font-family` tercih edilen yazı tipini belirler.

Sayfadaki birçok öğe bu değerleri üst öğelerden **miras alabilir (inheritance)**.

### CSS yorumları

CSS içinde açıklama bırakmak için:

```css
/* Bu bir CSS yorumudur. */
```

kullanılır.

Tarayıcı yorumları stil olarak uygulamaz.

### Başlık ve gövde metni

Başlığı büyütüp ortalamak için:

```css
h1 {
  font-size: 56px;
  text-align: center;
}
```

Paragrafların ve liste öğelerinin daha rahat okunması için:

```css
p,
li {
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.8px;
}
```

Burada:

- `font-size`: metnin boyutunu,
- `line-height`: satırlar arasındaki dikey boşluğu,
- `letter-spacing`: harfler arasındaki mesafeyi,
- `text-align`: metnin yatay hizasını

kontrol eder.

Bu aşamada sayfanız kaynak örnekteki gibi daha düzenli bir tipografiye sahip olur:

![Yazı tipi, yazı boyutu, satır yüksekliği ve başlık hizası değiştirilmiş örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-font-small.png)

> **Deneyin:** Başlık ve gövde metnindeki `font-size`, `line-height` ve `letter-spacing` değerlerini küçük adımlarla değiştirin. Sonuçların okunabilirliği nasıl etkilediğini gözlemleyin.

## CSS büyük ölçüde kutularla ilgilidir

Bir web sayfasındaki HTML öğelerinin büyük bölümü birer **kutu** gibi düşünülebilir.

CSS'teki **box model (kutu modeli)**, bu kutuların alanını anlamak için kullanılan temel modeldir.

![CSS kutu modeli: içerik, padding, border ve margin](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/box-model.png)

Bir öğenin kutusu genel olarak şu katmanlardan oluşur:

### İçerik

Metin, görsel veya öğenin asıl içeriğinin bulunduğu alan.

### `padding`

İçerik ile kenarlık arasındaki iç boşluk.

```css
padding: 20px;
```

### `border`

Padding'in dışındaki kenarlık.

```css
border: 2px solid black;
```

### `margin`

Kenarlığın dışında kalan boşluk. Öğeyi diğer öğelerden uzaklaştırır.

```css
margin: 20px;
```

Bu bölümün devamında ayrıca şu özellikleri de kullanacağız:

- `width`: genişlik,
- `background-color`: arka plan rengi,
- `color`: metin rengi,
- `text-shadow`: metin gölgesi,
- `display`: öğenin sayfa düzenine nasıl katılacağı,
- `max-width`: öğenin ulaşabileceği en büyük genişlik.

Aşağıdaki bölümlerde her yeni CSS kuralını `style.css` dosyasının sonuna ekleyin, dosyayı kaydedin ve tarayıcıyı yenileyin.

## Sayfa rengini değiştirme

Tüm sayfanın arka planını değiştirmek için `html` öğesini biçimlendirebilirsiniz:

```css
html {
  background-color: #1e4f8a;
}
```

Buradaki rengi, önceki tasarım bölümünde seçtiğiniz tema rengiyle değiştirebilirsiniz.

> **İpucu:** CSS dosyanızda daha önce bir `html` kuralı varsa aynı seçici için iki ayrı kural yazmak mümkündür. Ancak başlangıç seviyesinde ilgili bildirimleri tek bir `html` kuralı altında toplamak dosyayı okumayı kolaylaştırabilir.

Örneğin:

```css
html {
  font-size: 10px;
  font-family: "Nunito", sans-serif;
  background-color: #1e4f8a;
}
```

## Body öğesini biçimlendirme

Şimdi sayfanın ana içerik alanını ayrı bir kutu gibi biçimlendirelim:

```css
body {
  width: 640px;
  margin: 0 auto;
  background-color: #f6a623;
  padding: 0 24px 24px 24px;
  border: 4px solid #111;
}
```

Bu bildirimleri ayrı ayrı inceleyelim.

### `width`

```css
width: 640px;
```

`body` öğesine belirli bir genişlik verir.

### `margin: 0 auto`

```css
margin: 0 auto;
```

İki değerli `margin` sözdiziminde:

- İlk değer üst ve alt kenarları,
- İkinci değer sağ ve sol kenarları

kontrol eder.

Sağ ve sol kenarlara `auto` vermek, sabit genişlikteki kutunun kullanılabilir yatay alan içinde ortalanmasını sağlar.

### `background-color`

```css
background-color: #f6a623;
```

Ana içerik kutusunun arka plan rengini belirler.

### `padding`

```css
padding: 0 24px 24px 24px;
```

Dört değer sırayla:

```text
üst → sağ → alt → sol
```

kenarlarındaki iç boşluğu belirler.

### `border`

```css
border: 4px solid #111;
```

Bu **shorthand (kısaltılmış)** bir özelliktir ve aynı anda:

- Kenarlık kalınlığını,
- Kenarlık stilini,
- Kenarlık rengini

ayarlar.

### Kısaltılmış özelliklere kısa bir bakış

Şu ifade:

```css
padding: 0 24px 24px 24px;
```

daha uzun olarak şöyle yazılabilir:

```css
padding-top: 0;
padding-right: 24px;
padding-bottom: 24px;
padding-left: 24px;
```

CSS'te `margin`, `padding`, `border` ve `background` gibi birçok özellik için kısaltılmış kullanım biçimleri vardır.

## Ana başlığı konumlandırma ve biçimlendirme

Tarayıcılar HTML öğelerine kendi varsayılan stillerini uygular. Örneğin `<h1>` öğesinin varsayılan `margin` değerleri olabilir.

Başlığın üstündeki varsayılan boşluğu kaldırmak ve görünümünü iyileştirmek için:

```css
h1 {
  margin: 0;
  padding: 22px 0;
  color: #1e4f8a;
  text-shadow: 3px 3px 2px #111;
}
```

Daha önce yazdığınız `h1` kuralı varsa şu şekilde birleştirebilirsiniz:

```css
h1 {
  font-size: 56px;
  text-align: center;
  margin: 0;
  padding: 22px 0;
  color: #1e4f8a;
  text-shadow: 3px 3px 2px #111;
}
```

### `text-shadow`

```css
text-shadow: 3px 3px 2px #111;
```

dört parçadan oluşur:

1. Yatay gölge uzaklığı,
2. Dikey gölge uzaklığı,
3. Bulanıklık yarıçapı,
4. Gölge rengi.

Değerleri değiştirerek farklı efektler oluşturabilirsiniz:

```css
text-shadow: 1px 1px 0 #555;
```

veya:

```css
text-shadow: 0 4px 8px #777;
```

## Görseli ortalama

Bir görseli ortalamak için şu kuralı kullanabilirsiniz:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

### `display: block`

`<img>` öğesi varsayılan olarak satır içi davranışa sahiptir.

```css
display: block;
```

görselin blok düzeyinde davranmasını sağlar. Böylece yatay `auto` margin yaklaşımı daha öngörülebilir biçimde çalışır.

### `margin: 0 auto`

Görseli kullanılabilir yatay alan içinde ortalar.

### `max-width: 100%`

```css
max-width: 100%;
```

görselin kapsayıcısından daha geniş olmasını engeller.

Örneğin `body` 640 piksel genişliğindeyse çok büyük bir görselin bu alanı taşmasını önlemeye yardımcı olur.

> **Not:** `display`, blok/satır içi öğeler ve duyarlı görseller ilerleyen CSS bölümlerinde daha ayrıntılı biçimde ele alınacaktır. Bu aşamada çalışma mantığını genel olarak anlamanız yeterlidir.

## Sonuç

Bu aşamaya kadar CSS dosyanız genel olarak aşağıdaki türden bir yapıya sahip olabilir:

```css
html {
  font-size: 10px;
  font-family: "Nunito", sans-serif;
  background-color: #1e4f8a;
}

body {
  width: 640px;
  margin: 0 auto;
  background-color: #f6a623;
  padding: 0 24px 24px 24px;
  border: 4px solid #111;
}

h1 {
  font-size: 56px;
  text-align: center;
  margin: 0;
  padding: 22px 0;
  color: #1e4f8a;
  text-shadow: 3px 3px 2px #111;
}

p,
li {
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.8px;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

> **Not:** Yukarıdaki değerler bu Türkçe çalışma rehberi için özgünleştirilmiştir. Kaynak MDN ekran görüntüsündeki tasarımla aynı renk ve ölçüleri kullanmadığı için sizin sonucunuz görsel olarak biraz farklı olabilir.

Kaynak MDN eğitimindeki tamamlanmış örnek sayfa aşağıdaki gibi görünür:

![Mavi dış arka plan, turuncu içerik kutusu, ortalanmış Firefox görseli ve gölgeli başlığa sahip tamamlanmış örnek](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-final.png)

Bu bölüm CSS'in yalnızca başlangıç seviyesindeki küçük bir bölümünü kapsar. İlerleyen modüllerde:

- Seçiciler,
- Cascade ve specificity,
- Box model,
- Değerler ve birimler,
- Arka planlar ve kenarlıklar,
- Flexbox,
- Grid,
- Responsive design

gibi konuları çok daha ayrıntılı öğreneceksiniz.

## Ayrıca bakınız

### MDN — CSS styling basics

CSS'in temel konularını daha ayrıntılı incelemek için:

[CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

### MDN — Box model

Kutu modelini ayrıntılı öğrenmek için:

[Introduction to the CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Introduction)

### MDN — Basic selectors

CSS seçicileri hakkında daha fazla bilgi için:

[Basic selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

### Scrimba — Learn HTML and CSS

MDN'nin öğrenme ortaklarından Scrimba, HTML ve CSS üzerine etkileşimli bir eğitim sunar:

[Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p)

> **Not:** Scrimba, MDN dokümantasyonundan ayrı bir harici eğitim hizmetidir.

## Özet

Bu bölümde CSS'in HTML içeriğinin **nasıl görüneceğini belirleyen stil dili** olduğunu öğrendiniz. İlk olarak ayrı bir `style.css` dosyası oluşturup `<link rel="stylesheet">` öğesiyle HTML belgenize bağladınız. Bu ayrım, HTML'in içerik ve yapıdan; CSS'in ise görünüm ve sunumdan sorumlu olduğu temel web geliştirme yaklaşımını gösterir.

CSS sözdiziminde bir **seçici**, biçimlendirilecek HTML öğelerini seçer; süslü parantezler içindeki **bildirimler** ise özellik–değer çiftlerinden oluşur. `color`, `font-size`, `width`, `border` ve `background-color` gibi özelliklerle öğelerin görünümü değiştirilebilir. Birden fazla seçiciyi aynı kuralda kullanmak ve bir kurala birden fazla bildirim eklemek mümkündür.

Metin biçimlendirme bölümünde web fontlarının HTML'e nasıl eklendiğini, `font-family`, `font-size`, `line-height`, `letter-spacing` ve `text-align` özelliklerinin tipografiyi nasıl etkilediğini gördünüz. Ardından CSS'in temel kavramlarından biri olan **kutu modelini** öğrendiniz: içerik alanını `padding`, `border` ve `margin` katmanları çevreler.

Son aşamada sayfanın arka plan rengini değiştirdiniz, ana içerik alanına sabit bir genişlik ve kenarlık verdiniz, `margin: 0 auto` yaklaşımıyla alanı yatay olarak ortaladınız, başlığa renk ve metin gölgesi eklediniz ve görseli `display: block` ile ortaladınız. `max-width: 100%` kullanımıyla görselin kapsayıcısından taşmasını da engellediniz.

Bu noktada sitenizin **HTML yapısı ve temel CSS görünümü** hazır. Bir sonraki bölümde sayfaya **JavaScript kullanarak etkileşim** ekleyecek ve statik bir sayfanın kullanıcı eylemlerine nasıl tepki verebildiğini görmeye başlayacaksınız.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“CSS: Styling the content”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content) sayfasındaki konu sırası ve eğitim hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [CSS'in ilk uygulanmış hali](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-styled.png)
- [Yazı tipi düzenlemelerinden sonraki görünüm](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-font-small.png)
- [CSS kutu modeli](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/box-model.png)
- [Tamamlanmış örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content/website-screenshot-final.png)

### İlgili kaynaklar

- [CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
- [Basic selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Introduction)
- [Google Fonts](https://fonts.google.com/)
- [Learn HTML and CSS — Scrimba](https://scrimba.com/learn-html-and-css-c0p)
