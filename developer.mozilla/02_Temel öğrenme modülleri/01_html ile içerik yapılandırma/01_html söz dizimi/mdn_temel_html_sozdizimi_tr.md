# Temel HTML Sözdizimi

> **Kaynak:** [MDN Web Docs — Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, temel örneklerini, etkileşimli alıştırmalarını ve görsel yerleşimini izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 27 Ağustos 2026

Bu bölüm HTML'in en temel kavramlarına giriş yapar. HTML'de kullanılan terimleri, öğelerin nasıl yazıldığını, attribute'ların nasıl çalıştığını ve eksiksiz bir HTML belgesinin hangi ana parçalardan oluştuğunu öğreneceksiniz.

Sayfa boyunca yalnızca teoriyi okumak yerine küçük HTML alıştırmaları yapmanız hedeflenir. Bu nedenle örnekleri mümkün olduğunca kendiniz yazmanız yararlı olur.

|  |  |
| --- | --- |
| **Ön koşullar:** | Temel yazılımların kurulmuş olması ve dosyalarla çalışma konusunda temel bilgi. |
| **Öğrenme çıktıları:** | • Bir HTML öğesinin anatomisini anlamak: element, opening tag, content, closing tag ve attributes.<br>• `<body>` öğesinin sayfanın kullanıcıya gösterilen içeriğini taşıdığını anlamak.<br>• Void element kavramını ve normal öğelerden farkını bilmek.<br>• HTML belgelerinin başındaki doctype'ın neden bulunduğunu ve günümüzde büyük ölçüde tarihsel bir gereklilik olduğunu anlamak.<br>• HTML öğelerinin doğru biçimde iç içe yerleştirilmesi gerektiğini kavramak. |

## Bu makalede

- [HTML nedir?](#html-nedir)
- [Bir HTML öğesinin anatomisi](#bir-html-öğesinin-anatomisi)
- [Attributes](#attributes)
- [Bir HTML belgesinin anatomisi](#bir-html-belgesinin-anatomisi)
- [HTML'de whitespace](#htmlde-whitespace)
- [Character references: HTML'de özel karakter kullanımı](#character-references-htmlde-özel-karakter-kullanımı)
- [HTML comments](#html-comments)
- [Özet](#özet)

# HTML nedir?

HTML'in açılımı:

```text
HyperText Markup Language
```

şeklindedir.

HTML bir **markup language**, yani işaretleme dilidir. Tarayıcıya bir sayfadaki içeriğin nasıl yapılandırıldığını anlatır.

Bir web sayfasındaki düz metni ele alalım:

```text
Kedim çok huysuz.
```

Bu metin kendi başına yalnızca karakterlerden oluşur.

HTML ile bunun bir paragraf olduğunu belirtebiliriz:

```html
<p>Kedim çok huysuz.</p>
```

Aynı içeriği ana başlık olarak tanımlamak istersek:

```html
<h1>Kedim çok huysuz.</h1>
```

kullanabiliriz.

Buradaki önemli fikir şudur:

```text
HTML
→ içeriğin ne olduğunu ve nasıl yapılandığını belirtir
```

HTML öğeleri içerik parçalarını:

- Paragraf,
- Başlık,
- Bağlantı,
- Görsel,
- Liste,
- Form kontrolü

gibi anlamlı yapılara dönüştürür.

## HTML belgeleri

HTML kodu genellikle `.html` uzantılı metin dosyalarında tutulur.

Örneğin:

```text
index.html
about.html
contact.html
```

Bir HTML belgesi:

```text
web sayfasının içeriğini
+
web sayfasının yapısını
```

tanımlar.

En sık karşılaşacağınız dosya adı:

```text
index.html
```

olacaktır.

Bir web sitesinin ana sayfası çoğu zaman `index.html` dosyasında bulunur.

Alt klasörlerin de kendi `index.html` dosyaları olabilir:

```text
site/
├── index.html
├── products/
│   └── index.html
└── about/
    └── index.html
```

Bu nedenle bir sitede birden fazla `index.html` dosyası görmek normaldir.

> **Not:** HTML tag adları büyük/küçük harfe duyarlı değildir. Örneğin `<title>`, `<TITLE>` veya `<Title>` tarayıcı tarafından anlaşılabilir. Buna rağmen **tüm tag adlarını küçük harfle yazmak** okunabilirlik ve tutarlılık açısından iyi uygulamadır.

# Bir HTML öğesinin anatomisi

Basit bir paragraf öğesini inceleyelim:

```html
<p>Kedim çok huysuz.</p>
```

Kaynak MDN sayfasındaki öğe anatomisi görseli:

![HTML element anatomisi: opening tag, content, closing tag ve element](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-small.png)

Bir HTML öğesi çoğunlukla üç ana parçadan oluşur.

## Opening tag

Örneğin:

```html
<p>
```

Bu, öğenin başladığı yeri gösterir.

Genel yapı:

```text
<element-adı>
```

şeklindedir.

## Content

Örneğin:

```text
Kedim çok huysuz.
```

öğenin içeriğidir.

## Closing tag

Örneğin:

```html
</p>
```

öğenin bittiği yeri gösterir.

Opening tag ile farkı, element adından önce `/` karakteri bulunmasıdır:

```text
<p>   → açılış
</p>  → kapanış
```

Tam yapı:

```text
opening tag
    ↓
<p>Kedim çok huysuz.</p>
   ↑                 ↑
 content         closing tag
```

> **Önemli:** Kapanış tag'ını unutmak yeni başlayanların çok sık yaptığı hatalardan biridir. Tarayıcı bazen bu hatayı tahmin ederek düzeltmeye çalışabilir ancak sonuç beklediğiniz gibi olmayabilir.

## İlk HTML öğenizi oluşturun

Kaynak sayfadaki ilk etkileşimli alıştırmanın amacı, düz bir metni HTML öğesine dönüştürmektir.

Başlangıç:

```text
Bu benim metnim.
```

Görev:

Metni `<em>` öğesiyle sarın.

```html
<em>Bu benim metnim.</em>
```

`<em>` öğesi içeriğin vurgulandığını ifade eder. Tarayıcılar bunu varsayılan olarak çoğu zaman italik biçimde gösterir.

### Kendiniz deneyin

Şunları da deneyebilirsiniz:

```html
<strong>Önemli metin</strong>
```

```html
<p>Bir paragraf</p>
```

```html
<h2>İkinci seviye başlık</h2>
```

Amaç tag sözdizimine alışmaktır.

# Öğeleri iç içe yerleştirme

HTML öğeleri başka HTML öğelerinin içinde bulunabilir.

Buna:

```text
nesting
```

denir.

Örneğin:

```html
<p>Kedim <strong>çok</strong> huysuz.</p>
```

Burada:

```text
<p>
```

dış öğedir.

```text
<strong>
```

ise `<p>` öğesinin içinde yer alan child öğedir.

Yapı:

```text
<p>
 ├─ metin
 ├─ <strong>
 │    └─ metin
 └─ metin
```

## Doğru nesting

Öğeler doğru sırada kapanmalıdır.

Doğru:

```html
<p>Kedim <strong>çok</strong> huysuz.</p>
```

Açılma sırası:

```text
<p>
  <strong>
```

Kapanma sırası bunun tersidir:

```text
</strong>
</p>
```

Yani:

```text
Aç:
A
  B

Kapat:
  B
A
```

## Yanlış nesting

Yanlış örnek:

```html
<p>Kedim <strong>çok huysuz.</p></strong>
```

Burada öğeler birbirinin üzerine biner.

Şematik:

```text
<p>
    <strong>
</p>
    </strong>
```

Bu geçerli nesting değildir.

Tarayıcı böyle bir durumda ne demek istediğinizi tahmin etmeye çalışır. Bu da beklenmeyen DOM yapıları oluşturabilir.

> **Kural:** Son açılan HTML öğesini ilk önce kapatın.

# Void elements

Bütün HTML öğelerinde:

```text
opening tag
content
closing tag
```

yapısı bulunmaz.

İçerik barındıramayan bazı öğelere:

```text
void element
```

denir.

Örneğin:

```html
<br>
```

bir satır sonu ekler.

Kullanım:

```html
<p>
  Bu tek bir paragraf ancak burada <br>
  yeni satıra geçiyoruz.
</p>
```

`<br>` öğesi:

```html
<br></br>
```

şeklinde yazılmaz.

Çünkü içine başka HTML içeriği alamaz.

## Kapanış slash'ı gerekli mi?

Bazı HTML örneklerinde:

```html
<br />
```

veya:

```html
<img />
```

görebilirsiniz.

Modern HTML'de void element sonunda:

```text
/
```

kullanmak zorunlu değildir.

Yani:

```html
<br>
```

ve:

```html
<br />
```

HTML açısından aynı amaçla kullanılabilir.

MDN örneklerinde zaman zaman slash'lı yazım görebilirsiniz.

# Attributes

HTML öğeleri **attributes (öznitelikler)** taşıyabilir.

Örnek:

```html
<p class="editor-note">Kedim çok huysuz.</p>
```

Kaynak MDN sayfasındaki attribute anatomisi görseli:

![HTML öğesinde class attribute gösterimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-attribute-small.png)

Burada:

```text
class="editor-note"
```

bir attribute'dur.

Attribute'lar öğe hakkında ek bilgi sağlar.

Bu bilgi çoğu zaman kullanıcının doğrudan gördüğü içerik değildir.

Örneğin `class`:

- CSS tarafından öğeyi seçmek,
- JavaScript tarafından öğeyi bulmak

için kullanılabilir.

## Attribute sözdizimi

Tipik bir attribute:

```html
attribute="value"
```

şeklindedir.

Örnek:

```html
<a href="https://developer.mozilla.org/">MDN</a>
```

Burada:

```text
href
→ attribute adı

https://developer.mozilla.org/
→ attribute değeri
```

Bir attribute yazarken genel olarak:

1. Element adı ile attribute arasında boşluk bulunur.
2. Attribute adı yazılır.
3. `=` kullanılır.
4. Değer tırnak içine alınır.

Örneğin:

```html
<img src="cat.jpg" alt="Bir kedi" width="300">
```

Birden fazla attribute boşlukla ayrılır:

```text
src="..."
alt="..."
width="..."
```

# Bir öğeye attribute ekleme

Kaynak sayfadaki ikinci etkileşimli alıştırma `<img>` öğesi üzerindedir.

Başlangıç:

```html
<img>
```

Görsel göstermek için birkaç önemli attribute kullanılır.

## `src`

Görselin adresini belirtir.

```html
<img src="https://example.com/image.png">
```

`src` bu kullanımda zorunludur çünkü tarayıcının hangi resmi yükleyeceğini bilmesi gerekir.

## `alt`

Görsel için metinsel alternatif sağlar.

```html
<img
  src="firefox.png"
  alt="Firefox Nightly simgesi"
>
```

`alt`, özellikle görseli göremeyen kullanıcılar için önemlidir.

Anlam taşıyan görsellerde uygun bir alternatif açıklama yazmak iyi uygulamadır.

## `width`

Görsel genişliğini piksel olarak belirtebilir:

```html
<img
  src="firefox.png"
  alt="Firefox Nightly simgesi"
  width="300"
>
```

## `height`

Benzer biçimde:

```html
height="300"
```

ile yükseklik belirtilebilir.

## Alıştırma

Kaynak alıştırmanın akışı:

1. `<img>` öğesine bir `src` attribute'u ekleyin.
2. Bir görsel URL'sini değer olarak verin.
3. Görsele uygun bir `alt` açıklaması yazın.
4. Görsel çok büyükse `width="300"` benzeri bir değer ekleyin.

Örnek çözüm:

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
  alt="Firefox Nightly simgesi"
  width="300"
>
```

Bu örnekte üç farklı attribute aynı void element üzerinde birlikte kullanılmıştır.

# Boolean attributes

Bazı HTML attribute'larının temel mantığı:

```text
varsa → true
yoksa → false
```

şeklindedir.

Bunlara:

```text
Boolean attributes
```

denir.

Örneğin form kontrollerindeki:

```text
disabled
```

attribute'u.

## Değer yazarak kullanım

```html
<label for="first-input">Bu alan devre dışı</label>
<input
  id="first-input"
  type="text"
  disabled="disabled"
>
```

## Kısaltılmış kullanım

Aynı şey daha basit biçimde:

```html
<label for="second-input">Bu alan da devre dışı</label>
<input
  id="second-input"
  type="text"
  disabled
>
```

olarak yazılabilir.

Attribute mevcut olduğu için:

```text
disabled = true
```

kabul edilir.

Attribute yoksa:

```html
<input
  id="third-input"
  type="text"
>
```

alan aktiftir.

## Önemli nokta

Boolean attribute'larda asıl önemli şey attribute'un **var olup olmamasıdır**.

Basitleştirilmiş:

```text
<input disabled>
→ devre dışı

<input>
→ aktif
```

> **Not:** Örneklerdeki `<label>` öğeleri form alanlarına açıklayıcı etiket sağlamak için kullanılır. Form erişilebilirliği açısından label kullanımı önemli bir iyi uygulamadır.

# Attribute değerlerinde tırnakları atlamak

HTML bazı attribute değerlerinde tırnak olmadan çalışabilir.

Örneğin:

```html
<a href=https://www.mozilla.org/>Favori sitem</a>
```

tarayıcı tarafından anlaşılabilir.

Ancak MDN'nin tavsiyesi:

> Attribute değerlerini her zaman tırnak içine alın.

Bunun nedeni tırnaksız değerlerin kolayca hata üretmesidir.

Örneğin:

```html
<a
  href=https://www.mozilla.org/
  title=Mozilla ana sayfası
>
  Favori sitem
</a>
```

Burada tarayıcı:

```text
title = "Mozilla"
```

olarak yorumlayabilir ve devamındaki kelimeleri ayrı attribute'lar gibi algılayabilir.

Doğru:

```html
<a
  href="https://www.mozilla.org/"
  title="Mozilla ana sayfası"
>
  Favori sitem
</a>
```

Bu nedenle:

```text
attribute="value"
```

biçimini alışkanlık haline getirmek daha güvenlidir.

# Tek tırnak mı çift tırnak mı?

HTML attribute değerlerinde hem:

```text
'
```

hem de:

```text
"
```

kullanılabilir.

İkisi de geçerlidir:

```html
<a href='https://www.example.com'>Bağlantı</a>
```

```html
<a href="https://www.example.com">Bağlantı</a>
```

Bu çoğunlukla kod stili tercihidir.

Önemli olan tutarlı olmaktır.

## Tırnak türlerini karıştırmayın

Yanlış:

```html
<a href="https://www.example.com'>Bağlantı</a>
```

Açılışta çift tırnak:

```text
"
```

kullanıldı ancak kapanışta:

```text
'
```

kullanıldı.

Bu sözdizimini bozar.

## Attribute değerinin içinde tırnak

Dışta çift tırnak kullanıyorsanız içeride tek tırnak bulunabilir:

```html
<a
  href="https://www.example.com"
  title="Bugün değil mi?"
>
  Örnek
</a>
```

Aynı tırnak karakterini iç içe kullanmanız gerekiyorsa character reference kullanabilirsiniz.

Örneğin:

```html
<a
  href="https://www.example.com"
  title="Bu &quot;ilginç&quot; bir örnek"
>
  Örnek
</a>
```

Burada:

```text
&quot;
```

çift tırnağı metin olarak temsil eder.

# Bir HTML belgesinin anatomisi

Tek bir HTML öğesini yazmak yeterli değildir.

Gerçek bir web sayfası bir HTML belgesi içinde oluşturulur.

Basit bir tam belge:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>Test sayfam</title>
  </head>

  <body>
    <p>Bu benim sayfam.</p>
  </body>
</html>
```

Şimdi parçaları inceleyelim.

# 1. `<!doctype html>`

Belgenin ilk satırı:

```html
<!doctype html>
```

olmalıdır.

Doctype tarihsel olarak HTML belgesinin hangi kurallar setini kullandığını belirtmek için ortaya çıkmıştır.

Eski doctypelar oldukça uzun olabiliyordu.

Örneğin geçmişte XHTML için buna benzer ifadeler bulunurdu:

```html
<!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

Modern HTML'de bu karmaşıklığa gerek yoktur.

Yalnızca:

```html
<!doctype html>
```

kullanılır.

Günümüzde bunu büyük ölçüde:

```text
tarayıcının sayfayı standart modda işlemesini sağlayan
tarihsel ama gerekli belge başlangıcı
```

olarak düşünebilirsiniz.

# 2. `<html>`

```html
<html lang="tr">
```

sayfadaki bütün HTML içeriğini sarar.

Buna:

```text
root element
```

denir.

Kapanışı:

```html
</html>
```

belgenin sonunda bulunur.

`lang` attribute'u belgenin dilini belirtir.

Türkçe için:

```html
<html lang="tr">
```

uygun bir başlangıçtır.

# 3. `<head>`

```html
<head>
  ...
</head>
```

kullanıcıya doğrudan sayfa içeriği olarak gösterilmeyen belge bilgilerini taşır.

Örneğin:

- Sayfa başlığı,
- Metadata,
- CSS bağlantıları,
- Karakter kodlaması,
- Arama motorları için açıklamalar

burada bulunabilir.

Bu konu bir sonraki MDN eğitiminde daha ayrıntılı ele alınır.

# 4. `<meta charset="utf-8">`

```html
<meta charset="utf-8">
```

belgenin karakter kodlamasını belirtir.

`UTF-8`:

- Türkçe karakterleri,
- Latin alfabesini,
- Arapça,
- Japonca,
- Emoji,
- Çok sayıda başka yazı sistemini

destekleyen kapsamlı bir karakter kodlamasıdır.

Bu nedenle modern HTML belgelerinde standart bir seçimdir.

Örneğin UTF-8 sayesinde:

```text
ç ğ ı İ ö ş ü
```

karakterleri doğru biçimde gösterilebilir.

# 5. `<title>`

```html
<title>Test sayfam</title>
```

sayfanın başlığını belirler.

Bu başlık genellikle:

- Tarayıcı sekmesinde,
- Bookmark/favori kaydında

görünür.

`<title>`:

```text
sayfanın içerikte görülen ana başlığı
```

değildir.

Sayfa içindeki ana başlık genellikle:

```html
<h1>...</h1>
```

ile yazılır.

# 6. `<body>`

```html
<body>
  ...
</body>
```

kullanıcının sayfada gördüğü veya etkileşim kurduğu asıl içerikleri barındırır.

Örneğin:

- Metin,
- Başlık,
- Görsel,
- Video,
- Ses,
- Form,
- Oyun,
- Diğer kullanıcı arayüzleri

`<body>` içinde bulunur.

Basitleştirilmiş:

```text
<head>
→ sayfa hakkındaki bilgiler

<body>
→ kullanıcıya sunulan içerik
```

# Bir HTML belgesine özellikler ekleme

Kaynak MDN sayfasındaki üçüncü büyük alıştırma, basit HTML belgesini biraz daha gerçekçi hale getirmenizi ister.

Başlangıç şablonu:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>Test sayfam</title>
  </head>

  <body>
    <p>Bu benim sayfam.</p>
  </body>
</html>
```

## Yerel bilgisayarınızda çalışma

1. Yukarıdaki şablonu yeni bir dosyaya yapıştırın.
2. Dosyayı:

```text
index.html
```

adıyla kaydedin.
3. Tarayıcıda açın.
4. Aşağıdaki değişiklikleri yapın.
5. Dosyayı kaydedip tarayıcıyı yenileyin.

Alternatif olarak MDN Playground gibi çevrimiçi editör kullanabilirsiniz.

## Alıştırma adımları

### 1. Ana başlık ekleyin

`<body>` açılışından hemen sonra:

```html
<h1>Müzik</h1>
```

gibi bir ana başlık ekleyin.

### 2. Paragrafı kendi konunuza göre değiştirin

Örneğin:

```html
<p>Davul çalmayı gerçekten seviyorum.</p>
```

### 3. Önemli bir kısmı `<strong>` ile işaretleyin

```html
<p>
  <strong>Davul çalmayı</strong> gerçekten seviyorum.
</p>
```

### 4. İki bağlantı ekleyin

```html
<a href="https://example.com/">Örnek bağlantı</a>
```

### 5. Bir görsel ekleyin

Örneğin:

```html
<img
  src="https://example.com/image.jpg"
  alt="Görsel açıklaması"
  width="300"
>
```

## Örnek tamamlanmış `<body>`

Kendi içeriğinizle şöyle bir yapı elde edebilirsiniz:

```html
<body>
  <h1>Sevdiğim müzikler</h1>

  <p>
    Özellikle <strong>davul performanslarını</strong> dinlemeyi seviyorum.
    En sevdiğim gruplardan biri
    <a href="https://example.com/band">örnek bir grup</a>.
    Albümleri hakkında daha fazla bilgiyi
    <a href="https://example.com/album">bu sayfada</a>
    okuyabilirsiniz.
  </p>

  <img
    src="https://example.com/album-cover.jpg"
    alt="Albüm kapağı"
    width="300"
  >
</body>
```

Bu alıştırmayla aynı belge içinde:

```text
heading
paragraph
strong
links
image
attributes
```

kavramlarını birlikte kullanmış olursunuz.

# HTML'de whitespace

HTML kodunda çok sayıda:

- Boşluk,
- Tab,
- Satır sonu

kullanabilirsiniz.

Çoğu normal HTML öğesinde tarayıcı ardışık whitespace karakterlerini tek boşluk gibi işler.

Örneğin:

```html
<p id="noWhitespace">Köpekler çok komik.</p>
```

ile:

```html
<p id="whitespace">
  Köpekler
      çok
          komik.
</p>
```

çoğu durumda aynı görsel metni oluşturur:

```text
Köpekler çok komik.
```

Tarayıcı çoğu elementte:

```text
birden fazla whitespace
→ tek boşluk
```

şeklinde normalizasyon yapar.

## İstisnalar

Bazı öğeler whitespace'i korumak için tasarlanmıştır.

Örneğin:

```html
<pre>
```

preformatted text için kullanılır ve boşlukları/satır sonlarını farklı biçimde korur.

Bu konu ileride daha ayrıntılı ele alınabilir.

## Kod okunabilirliği

Tarayıcı için çoğu boşluk önemsiz olsa da insanlar için önemlidir.

Bu nedenle iyi girintileme kullanmak kodu çok daha okunabilir yapar.

Örneğin:

```html
<section>
  <div>
    <p>Bir içerik paragrafı.</p>
  </div>
</section>
```

buradaki girintiler parent–child ilişkisini görsel olarak açık hale getirir.

MDN genel olarak her nesting seviyesinde iki boşluk girintilemeyi tercih eder.

Sizin ekibiniz farklı bir stil kullanabilir; önemli olan tutarlılıktır.

# Character references: HTML'de özel karakter kullanımı

HTML sözdiziminde bazı karakterlerin özel anlamı vardır.

Özellikle:

```text
<
>
"
'
&
```

HTML parser tarafından sözdiziminin parçası olarak yorumlanabilir.

Bunları içerikte literal olarak göstermek istediğinizde **character reference** kullanabilirsiniz.

| Gösterilmek istenen karakter | Character reference |
| --- | --- |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&apos;` |
| `&` | `&amp;` |

Her character reference:

```text
&
```

ile başlar ve:

```text
;
```

ile biter.

Örneğin:

```text
&lt;
```

"less than" yani `<` karakterini temsil eder.

```text
&gt;
```

`>` karakterini,

```text
&amp;
```

ise `&` karakterini temsil eder.

## Neden gerekir?

Şu örneğe bakın:

```html
<p>HTML'de paragrafı <p> elementi ile tanımlarız.</p>
```

Burada tarayıcı ikinci:

```html
<p>
```

ifadesini düz metin olarak değil, gerçek HTML tag'ı olarak yorumlar.

Bunun yerine:

```html
<p>
  HTML'de paragrafı &lt;p&gt; elementi ile tanımlarız.
</p>
```

yazılır.

Tarayıcıda sonuç:

```text
HTML'de paragrafı <p> elementi ile tanımlarız.
```

olur.

> **Not:** Modern HTML belgelerinde `charset="utf-8"` kullandığınız sürece çoğu normal sembolü character reference'a çevirmek zorunda değilsiniz. Bu mekanizma özellikle HTML sözdiziminde özel anlam taşıyan karakterleri literal olarak yazmanız gerektiğinde önemlidir.

# HTML comments

Kod içine geliştirici notları eklemek için HTML comments kullanılabilir.

Sözdizimi:

```html
<!-- yorum buraya -->
```

Örneğin:

```html
<p>Bu paragraf ekranda görünür.</p>

<!-- <p>Bu paragraf yorum içinde olduğu için görünmez.</p> -->
```

Tarayıcı yorum içeriğini kullanıcıya render etmez.

## Yorumlar ne için kullanılır?

Örneğin:

```html
<!-- Ana navigasyon -->
<nav>
  ...
</nav>
```

veya:

```html
<!-- Bu bölüm yeni API hazır olduğunda tekrar etkinleştirilecek -->
```

gibi geliştirici açıklamaları ekleyebilirsiniz.

Yorumlar özellikle:

- Uzun süre sonra projeye döndüğünüzde,
- Başka bir geliştirici kodu devraldığında,
- Geçici olarak bir bölümü devre dışı bırakırken

yararlı olabilir.

## Yorumları aşırı kullanmayın

İyi kod mümkün olduğunca kendi kendini açıklamalıdır.

Şu tür bir yorum genellikle gereksizdir:

```html
<!-- Bu bir paragraf -->
<p>Merhaba</p>
```

Buna karşılık neden bir şey yapıldığını açıklayan yorum daha değerlidir:

```html
<!-- Eski tarayıcı uyumluluğu nedeniyle bu sıra korunuyor -->
```

# Kavramları tek örnekte birleştirelim

Aşağıdaki belge bu bölümdeki temel kavramların çoğunu birlikte gösterir:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>HTML çalışma sayfam</title>
  </head>

  <body>
    <h1>HTML öğreniyorum</h1>

    <p>
      Bugün <strong>temel HTML sözdizimini</strong> çalışıyorum.
      Kaynak olarak
      <a href="https://developer.mozilla.org/">MDN Web Docs</a>
      kullanıyorum.
    </p>

    <img
      src="https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png"
      alt="Firefox Nightly simgesi"
      width="200"
    >

    <p>
      HTML'de bir paragraf elementi
      <code>&lt;p&gt;</code>
      ile başlar.
    </p>

    <!-- Buraya daha sonra yeni içerik ekle -->
  </body>
</html>
```

Bu belgede:

```text
doctype
html root element
head
charset
title
body
heading
paragraph
nested strong
link + href
void img
src / alt / width attributes
character references
comment
```

bulunur.

# Sık yapılan başlangıç hataları

Bu bölümden sonra özellikle aşağıdaki hatalara dikkat edin.

## Kapanış tag'ını unutmak

Hatalı:

```html
<p>Bir paragraf
```

Tercih edilen:

```html
<p>Bir paragraf</p>
```

## Nesting sırasını bozmak

Hatalı:

```html
<p><strong>Metin</p></strong>
```

Doğru:

```html
<p><strong>Metin</strong></p>
```

## Attribute değerlerinde tırnak kullanmamak

Riskli:

```html
<a title=Ana sayfa bağlantısı>
```

Doğru:

```html
<a title="Ana sayfa bağlantısı">
```

## `alt` attribute'unu anlamsız bırakmak

Zayıf:

```html
<img src="chart.png" alt="resim">
```

Daha yararlı:

```html
<img
  src="chart.png"
  alt="Ocak ile Haziran arasında satışların düzenli arttığını gösteren grafik"
>
```

## HTML tag'larını metin içinde kaçışsız yazmak

Sorunlu:

```html
<p><p> etiketi paragraf oluşturur.</p>
```

Doğru:

```html
<p>&lt;p&gt; etiketi paragraf oluşturur.</p>
```

# Özet

Bu bölümde HTML'in bir programlama dili değil, web içeriğinin yapısını ve anlamını tanımlayan bir **işaretleme dili** olduğunu öğrendiniz. HTML belgeleri `.html` uzantılı metin dosyalarında tutulur ve bir sayfanın içeriğini öğeler aracılığıyla yapılandırır.

Tipik bir HTML öğesi **opening tag**, **content** ve **closing tag** parçalarından oluşur. Öğeler başka öğelerin içine yerleştirilebilir ancak nesting sırası doğru olmalıdır: en son açılan öğe ilk kapatılmalıdır. `<br>` ve `<img>` gibi **void elements** ise içerik barındırmaz ve closing tag gerektirmez.

HTML öğeleri ayrıca **attributes** taşıyabilir. Attribute'lar bir öğe hakkında ek bilgi sağlar; örneğin `<img>` öğesinde `src`, `alt` ve `width` gibi attribute'lar kullanılabilir. Attribute değerlerini her zaman tırnak içinde yazmak güvenli ve okunabilir bir alışkanlıktır. `disabled` gibi Boolean attribute'larda ise attribute'un varlığı `true`, yokluğu `false` anlamına gelir.

Tam bir HTML belgesi genellikle `<!doctype html>`, kök `<html>` öğesi, `<head>` ve `<body>` bölümlerinden oluşur. `<head>` belge hakkındaki metadata'yı taşırken `<body>` kullanıcıya gösterilen asıl içeriği içerir. `UTF-8` karakter kodlaması modern belgeler için standart bir seçimdir ve `<title>` tarayıcı sekmesinde görülen belge başlığını tanımlar.

HTML parser çoğu öğede art arda gelen whitespace karakterlerini tek boşluğa indirger; buna rağmen kodun insan tarafından okunabilmesi için düzenli girintileme kullanmak önemlidir. `<`, `>`, `&` ve tırnak gibi HTML sözdiziminde özel anlam taşıyan karakterleri düz metin olarak göstermek için `&lt;`, `&gt;`, `&amp;` ve `&quot;` gibi **character references** kullanabilirsiniz.

Son olarak HTML comments sayesinde `<!-- ... -->` sözdizimiyle kullanıcıya gösterilmeyen geliştirici notları ekleyebilirsiniz. Bu temel kavramları kavradığınızda artık küçük HTML belgelerini doğru şekilde oluşturabilecek, öğeleri ve attribute'ları kullanabilecek ve bir sonraki konu olan **web sayfası metadata'sı** için gerekli temele sahip olacaksınız.

> **Not:** HTML öğrenirken CSS temellerine de paralel olarak başlamanız yararlı olabilir. HTML içeriğin anlamını ve yapısını, CSS ise görünümünü kontrol eder; modern web sayfalarının büyük çoğunluğunda birlikte kullanılırlar.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Basic HTML syntax”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) sayfasının bölüm sırası, öğrenme hedefleri ve alıştırma akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [HTML element anatomisi — grumpy-cat-small.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-small.png)
- [HTML attribute anatomisi — grumpy-cat-attribute-small.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-attribute-small.png)

### İlgili bağlantılar

- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [Void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)
- [Next: What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
