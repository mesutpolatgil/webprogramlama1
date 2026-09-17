# Challenge: Bir Mektubu HTML ile İşaretleme

> **Kaynak:** [MDN Web Docs — Challenge: Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter)  
> **Türkçe sürüm:** Kaynak challenge'ın bölüm sırasını, değerlendirme ölçütlerini ve test ettiği HTML özelliklerini koruyan; mektup metni özgün olarak yeniden yazılmış Türkçe çalışma sürümüdür.  
> **Kaynak sayfanın son güncellenme tarihi:** 2 Ocak 2026

Mektup yazmak günlük hayatta sık karşılaşılan bir metin biçimidir ve şimdiye kadar öğrendiğiniz HTML metin semantiğini tek bir belgede sınamak için iyi bir örnektir.

Bu challenge'da bir üniversitenin araştırma görevlisinin, doktora başvurusu yapan bir öğrenciye gönderdiği mektubu uygun HTML ile yapılandıracaksınız.

Amaç yalnızca sayfanın görsel olarak mektuba benzemesi değildir. Belgenin:

- Doğru HTML iskeletine,
- Anlamlı başlık hiyerarşisine,
- Adres semantiğine,
- Uygun liste türlerine,
- Tarih metadata'sına,
- Kısaltma açıklamalarına,
- Bilimsel alt/üst simgelere,
- Vurgu ve güçlü önem öğelerine,
- Alıntı semantiğine,
- Doğru `<head>` metadata'sına

sahip olması gerekir.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bu noktaya kadar işlenen temel HTML sözdizimi, metadata, başlık/paragraf, listeler, vurgu/önem ve ileri metin özellikleri. |
| **Challenge'ın amacı:** | Bir mektup üzerinde şimdiye kadar öğrenilen HTML metin semantiğini ve `<head>` bilgisini birlikte uygulamak. |

## Bu makalede

- [Başlangıç noktası](#başlangıç-noktası)
- [Proje özeti](#proje-özeti)
- [Blok ve yapısal semantik](#blok-ve-yapısal-semantik)
- [Satır içi semantik](#satır-içi-semantik)
- [Belgenin `<head>` bölümü](#belgenin-head-bölümü)
- [İpuçları](#ipuçları)
- [Örnek çözüm](#örnek-çözüm)
- [Kontrol listesi](#kontrol-listesi)
- [Özet](#özet)

# Başlangıç noktası

Kaynak MDN challenge'ında size işaretlenmemiş düz bir mektup metni verilir ve bunu MDN Playground içinde düzenlemeniz istenir.

Burada aynı becerileri sınayan özgün Türkçe bir başlangıç metni kullanacağız.

Aşağıdaki metni yeni bir HTML dosyasına veya çevrimiçi editöre kopyalayın:

```text
Dr. Selin Aras
İleri Bilimler Fakültesi
Örnek Bilim Üniversitesi
Bilimkent, Ankara 06000
Türkiye
Tel: +90 312 555 12 34
E-posta: yanit_yok@example.com

18 Eylül 2026

Sayın Deniz Kaya
Akademi Caddesi No: 42
Kadıköy, İstanbul 34710
Türkiye

Konu: Deniz Kaya doktora programı başvurusu

Sayın Deniz,

Üniversitemizin İleri Bilimler Fakültesindeki PhD (Doctor of Philosophy)
programına yaptığınız başvuru için teşekkür ederiz. Sorularınızı aşağıdaki
bölümlerde tek tek yanıtlayacağım.

Başlangıç tarihleri

Programa yıl içinde farklı zamanlarda başlayabilirsiniz; ancak dönem
başlangıçları bizim için daha uygundur. Önerilen tarihler:

Güz dönemi: 5 Ekim 2026
Bahar dönemi: 8 Şubat 2027
Yaz dönemi: 7 Haziran 2027

Hangi tarihi tercih ettiğinizi bize bildirmenizi rica ederiz.

Araştırma konuları

Fakültemiz bilim ve teknoloji kapsamına giren yaratıcı çalışmalara açıktır.
Başvurunuzdaki fikirler arasında öncelik sırasına göre en çok ilgimizi çekenler:

H2O molekülünden hidrojen üretimi ve C6H12O6 tabanlı biyoyakıt süreçleri.
Elektronik devrelerin 35°C üzerindeki performansını ve işlem sayısı
2 × 103 değerinden 2 × 104 değerine yükseldiğinde oluşan değişimi ölçmek.
HTML, HyperText Markup Language, ve CSS, Cascading Style Sheets,
kullanarak bilimsel müzik notasyonu arayüzleri geliştirmek.

Her araştırma önerisi için tahmini süreyi, gerekli ekip ve kaynakları
açıklamanızı rica ederiz.

Geleneksel dans araştırmaları

Evet, doktora sonrası çalışmam sırasında gerçekten geleneksel dans biçimlerini
inceledim. En ilginç bulduklarımdan bazıları şunlardır:

Anadolu çember dansı
Yaklaşık 200 BCE dönemine kadar uzandığı ileri sürülen, katılımcıların daire
oluşturduğu geleneksel bir topluluk dansı.

Kuzey rüzgârı adımı
Soğuk iklimlerde insanların ısınmak amacıyla küçük ve hızlı adımlarla birlikte
hareket ettiği tarihsel bir dans biçimi.

Robotik kutup dansı
1960'larda gözlemcilerin bağımsız bir dans türü sandığı, daha sonra aşırı soğuk
nedeniyle ortaya çıkan sert hareketler olduğu anlaşılan bir örnek.

Saygılarımla,

Dr. Selin Aras

Örnek Bilim Üniversitesi sloganı: Merak etmeyi asla bırakma. --
Bilim Yolculukları, Ahmet Yılmaz, Esq.
```

Şu anda bu içerik:

```text
yalnızca düz metin
```

durumundadır.

Sizin göreviniz bunu tam, geçerli ve semantik bir HTML belgesine dönüştürmektir.

---

# Proje özeti

Senaryo:

```text
Gönderen:
Üniversitede çalışan bir araştırma görevlisi

Alıcı:
Doktora programına başvuran aday öğrenci

Belge:
Başvuruya cevap niteliğinde resmi mektup

Yayın yeri:
Üniversite intraneti
```

Challenge boyunca yalnızca metni etiketlemeyeceksiniz.

Aynı zamanda:

```text
HTML belge iskeleti
+
<head> metadata'sı
+
metin semantiği
+
liste semantiği
+
tarih ve bilimsel gösterim
+
az miktarda CSS
```

kullanacaksınız.

---

# Blok ve yapısal semantik

İlk görev, belgenin büyük ölçekli yapısını doğru kurmaktır.

# 1. Tam HTML belge iskeleti ekleyin

Belgeniz şunları içermelidir:

```html
<!doctype html>
<html>
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

Yani düz metni yalnızca birkaç `<p>` öğesine çevirmek yeterli değildir.

Challenge'ın sonunda tam bir HTML belgesi oluşmalıdır.

# 2. Başlık ve paragrafları yapılandırın

Mektubun büyük kısmı:

```text
heading
+
paragraph
```

yapısında olacaktır.

Kaynak challenge'daki yapıya paralel olarak:

- Bir adet üst seviye başlık,
- Üç adet ikinci seviye başlık

kullanın.

Bu özgün sürümde üst seviye başlık:

```text
Konu: Deniz Kaya doktora programı başvurusu
```

olmalıdır.

Yani:

```html
<h1>Konu: Deniz Kaya doktora programı başvurusu</h1>
```

Üç `<h2>`:

```text
Başlangıç tarihleri
Araştırma konuları
Geleneksel dans araştırmaları
```

olmalıdır.

Örneğin:

```html
<h2>Başlangıç tarihleri</h2>
```

Diğer normal metin bloklarını uygun yerlerde:

```html
<p>
```

ile işaretleyin.

# 3. İki adresi `<address>` içine alın

Mektupta iki adres vardır:

1. Gönderen kişinin adresi,
2. Alıcı kişinin adresi.

Bunların her birini ayrı:

```html
<address>
```

öğesi içine alın.

Örneğin:

```html
<address>
  Dr. Selin Aras<br>
  İleri Bilimler Fakültesi<br>
  Örnek Bilim Üniversitesi<br>
  Bilimkent, Ankara 06000<br>
  Türkiye
</address>
```

## Her adres satırı ayrı paragraf olmamalı

Kaynak challenge özellikle adresin her satırının:

```text
yeni satırda
```

olmasını fakat:

```text
ayrı paragraf
```

olmamasını ister.

Bu nedenle:

```html
<br>
```

kullanımı burada uygundur.

Örneğin:

```html
<address>
  Dr. Selin Aras<br>
  İleri Bilimler Fakültesi<br>
  Örnek Bilim Üniversitesi
</address>
```

Bu, `<br>` kullanımının gerçekten anlamlı olduğu durumlardan biridir.

# 4. Dönem başlangıç tarihlerini uygun listeye alın

Şu bölüm:

```text
Güz dönemi: 5 Ekim 2026
Bahar dönemi: 8 Şubat 2027
Yaz dönemi: 7 Haziran 2027
```

bir grup tarihtir ancak burada maddelerin sırası doğrudan bir işlem sırası değildir.

Kaynak çözüm yaklaşımına paralel olarak:

```html
<ul>
```

kullanabilirsiniz.

Örnek:

```html
<ul>
  <li>Güz dönemi: ...</li>
  <li>Bahar dönemi: ...</li>
  <li>Yaz dönemi: ...</li>
</ul>
```

# 5. Araştırma konularını sıralı listeye alın

Metin:

```text
öncelik sırasına göre
```

diyor.

Dolayısıyla araştırma konuları:

```html
<ol>
```

ile işaretlenmelidir.

Çünkü:

```text
1.
2.
3.
```

sırasının anlamı vardır.

Örneğin:

```html
<ol>
  <li>Birinci öncelikli araştırma...</li>
  <li>İkinci öncelikli araştırma...</li>
  <li>Üçüncü öncelikli araştırma...</li>
</ol>
```

# 6. Dansları description list yapın

Dans bölümünde:

```text
dans adı
→ açıklama
```

ilişkisi vardır.

Bu nedenle:

```html
<dl>
<dt>
<dd>
```

kullanmak uygundur.

Örneğin:

```html
<dl>
  <dt>Anadolu çember dansı</dt>
  <dd>...</dd>

  <dt>Kuzey rüzgârı adımı</dt>
  <dd>...</dd>

  <dt>Robotik kutup dansı</dt>
  <dd>...</dd>
</dl>
```

Bu challenge böylece üç ana liste türünü aynı belgede sınar:

```text
<ul>
<ol>
<dl>
```

---

# Satır içi semantik

Blok yapısını tamamladıktan sonra metin içindeki özel anlamları işaretlemelisiniz.

# 1. Gönderen ve alıcı adlarını güçlü önemle işaretleyin

Gönderen:

```text
Dr. Selin Aras
```

Alıcı:

```text
Sayın Deniz Kaya
```

isimleri güçlü önem taşımalıdır.

Bunun için:

```html
<strong>
```

kullanın.

Örneğin:

```html
<strong>Dr. Selin Aras</strong>
```

ve:

```html
<strong>Sayın Deniz Kaya</strong>
```

# 2. `Tel` ve `E-posta` ifadelerini de `<strong>` ile işaretleyin

Örneğin:

```html
<strong>Tel</strong>: +90 312 555 12 34
```

```html
<strong>E-posta</strong>: yanit_yok@example.com
```

Burada önemli etiketler görsel olarak da kolay fark edilir.

# 3. Dört tarihi `<time>` ile işaretleyin

Mektupta dört önemli tarih vardır:

1. Mektubun tarihi,
2. Güz dönemi başlangıcı,
3. Bahar dönemi başlangıcı,
4. Yaz dönemi başlangıcı.

Bunların her biri:

```html
<time datetime="...">
```

içinde bulunmalıdır.

Örneğin mektup tarihi:

```html
<time datetime="2026-09-18">
  18 Eylül 2026
</time>
```

Dönem tarihleri:

```html
<time datetime="2026-10-05">5 Ekim 2026</time>
```

```html
<time datetime="2027-02-08">8 Şubat 2027</time>
```

```html
<time datetime="2027-06-07">7 Haziran 2027</time>
```

# 4. İlk adres ve mektup tarihine `sender-column` class'ı ekleyin

Kaynak challenge'da klasik mektup düzenini taklit etmek için ilk adres ve ilk tarih sağa hizalanır.

İlk adres:

```html
<address class="sender-column">
```

olmalıdır.

Mektup tarihini saran paragraf:

```html
<p class="sender-column">
  <time datetime="2026-09-18">18 Eylül 2026</time>
</p>
```

şeklinde olabilir.

Sonradan eklenen CSS:

```css
.sender-column {
  text-align: right;
}
```

bu iki bölümü sağa hizalar.

# 5. Beş kısaltmayı işaretleyin

Kaynak challenge beş acronym/abbreviation üzerinde çalışmanızı ister.

Bu özgün sürümde aynı kapsamı koruyoruz:

```text
PhD
HTML
CSS
BCE
Esq.
```

Bunları:

```html
<abbr>
```

ile işaretleyin.

## `PhD`

```html
<abbr title="Doctor of Philosophy">PhD</abbr>
```

## `HTML`

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

## `CSS`

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

## `BCE`

```html
<abbr title="Before Common Era">BCE</abbr>
```

## `Esq.`

```html
<abbr title="Esquire">Esq.</abbr>
```

> **Not:** Challenge'ın amacı `<abbr>` kullanımını sınamak olduğu için açılımlar `title` ile sağlanıyor. Gerçek kullanıcı içeriğinde önemli açılımları görünür metin olarak sunmak daha erişilebilir olabilir.

# 6. Alt ve üst simgeleri doğru işaretleyin

Bilimsel içerikte şu ifadeler bulunur:

```text
H2O
C6H12O6
3 × 103
3 × 104
```

## Su formülü

```html
H<sub>2</sub>O
```

## Glikoz formülü

```html
C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
```

## Üstel değerler

`10³`:

```html
10<sup>3</sup>
```

`10⁴`:

```html
10<sup>4</sup>
```

Tam ifade:

```html
3 × 10<sup>3</sup>
```

ve:

```html
3 × 10<sup>4</sup>
```

şeklinde olmalıdır.

Bu challenge'ın kaynak değerlendirmesinde alt/üst simge kullanımlarının tümü doğru semantik elementlerle işaretlenmelidir.

# 7. En az iki ek vurgu/önem öğesi kullanın

Kaynak challenge sizden metindeki en az iki başka uygun kelime veya ifadeyi:

```html
<strong>
```

veya:

```html
<em>
```

ile işaretlemenizi ister.

Bu sürümde örneğin:

```text
gerçekten
```

kelimesini:

```html
<em>gerçekten</em>
```

yapabilirsiniz.

Dans tanımındaki:

```text
çok etkili
```

gibi bir ifadeyi de:

```html
<em>çok</em> etkili
```

şeklinde vurgulayabilirsiniz.

Amaç:

```text
italik görünüm elde etmek
```

değil:

```text
gerçek semantik vurgu
```

kullanmaktır.

# 8. Üniversite sloganını alıntı olarak işaretleyin

Mektubun sonunda:

```text
Örnek Bilim Üniversitesi sloganı: Merak etmeyi asla bırakma.
```

ifadesi bulunur.

Kısa alıntı olduğu için:

```html
<q>
```

kullanın.

Örneğin:

```html
<q>Merak etmeyi asla bırakma.</q>
```

# 9. Kaynağın adını `<cite>` ile işaretleyin

Motto kaynağı:

```text
Bilim Yolculukları, Ahmet Yılmaz, Esq.
```

olarak verilmiştir.

Eser adını:

```html
<cite>
```

ile işaretleyin.

Örneğin:

```html
<cite>
  Bilim Yolculukları, Ahmet Yılmaz,
  <abbr title="Esquire">Esq.</abbr>
</cite>
```

Burada:

```text
<q>
→ alıntı

<cite>
→ kaynak eser adı

<abbr>
→ Esq. kısaltması
```

aynı cümlede birlikte kullanılır.

---

# Belgenin `<head>` bölümü

Challenge yalnızca `<body>` içeriğini değil, belge metadata'sını da sınar.

# 1. Karakter seti UTF-8 olmalı

`<head>` içine:

```html
<meta charset="utf-8">
```

ekleyin.

Bu özellikle:

```text
ç
ğ
ı
İ
ö
ş
ü
```

gibi Türkçe karakterlerin doğru işlenmesi açısından önemlidir.

# 2. Yazar metadata'sı ekleyin

Mektubun yazarı:

```text
Dr. Selin Aras
```

olduğuna göre:

```html
<meta name="author" content="Dr. Selin Aras">
```

ekleyin.

# 3. Belgenin dilini belirtin

Kaynak challenge kendi mektubu için:

```html
lang="en-US"
```

ister.

Biz Türkçe challenge hazırladığımız için belgenin ana dili:

```html
<html lang="tr">
```

olmalıdır.

Bu:

- Ekran okuyucuların telaffuzu,
- Arama motorlarının dil algısı,
- Tarayıcıların dil özellikleri

açısından yararlıdır.

# 4. Belge başlığı ekleyin

Kaynak challenge'daki belge başlığının işlevsel karşılığı olarak:

```html
<title>
  Örnek Bilim Üniversitesi doktora başvurusu yazışması
</title>
```

kullanın.

Bu:

```text
tarayıcı sekmesi
bookmark
belge metadata'sı
```

için kullanılır.

Sayfanın görünen `<h1>` başlığı değildir.

# 5. Verilen CSS'i `<style>` içine koyun

Bu challenge'da CSS bilmeniz gerekmez.

Ama sağlanan CSS'i uygun HTML öğesine yerleştirmeniz gerekir.

Türkçe sürüm için aynı işlevi koruyan stil:

```css
body {
  font: 1.2em / 1.5 system-ui;
}

.sender-column {
  text-align: right;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.3em;
}
```

Bu CSS:

```html
<style>
  ...
</style>
```

içinde ve:

```html
<head>
```

bölümünde bulunmalıdır.

Örnek:

```html
<head>
  <meta charset="utf-8">
  <meta name="author" content="Dr. Selin Aras">

  <title>
    Örnek Bilim Üniversitesi doktora başvurusu yazışması
  </title>

  <style>
    body {
      font: 1.2em / 1.5 system-ui;
    }

    .sender-column {
      text-align: right;
    }

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.3em;
    }
  </style>
</head>
```

Bu görevde ölçülen nokta:

```text
CSS yazabilmek
```

değil:

```text
CSS'in <head> içinde uygun <style> öğesine yerleştirildiğini bilmek
```

tir.

---

# İpuçları

Kaynak MDN challenge iki önemli ipucu verir.

# 1. HTML validator kullanın

Belgenizi tamamladıktan sonra:

[W3C Markup Validation Service](https://validator.w3.org/)

ile doğrulayabilirsiniz.

Validator:

```text
HTML kaynak kodu
       ↓
standart kurallara göre kontrol
       ↓
error / warning
```

şeklinde çalışır.

Örneğin:

- Yanlış nesting,
- Eksik closing tag,
- Geçersiz attribute,
- Hatalı belge yapısı

gibi sorunları bulabilir.

Challenge açısından geçerli HTML üretmek ek bir kalite göstergesidir.

# 2. CSS bilmeniz gerekmiyor

Bu challenge HTML konusundadır.

Dolayısıyla:

```text
CSS kurallarının her satırını anlamak
```

zorunda değilsiniz.

Yapmanız gereken:

```text
verilen CSS
→ <style>
→ <head>
```

yerleşimini doğru yapmaktır.

---

# Örnek çözüm

Aşağıdaki çözüm, kaynak MDN challenge'ındaki değerlendirme ölçütlerini karşılayan fakat mektup metni özgünleştirilmiş Türkçe bir çözümdür.

Önce kendiniz tamamlamaya çalışın.

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <meta name="author" content="Dr. Selin Aras">

    <title>
      Örnek Bilim Üniversitesi doktora başvurusu yazışması
    </title>

    <style>
      body {
        font: 1.2em / 1.5 system-ui;
      }

      .sender-column {
        text-align: right;
      }

      h1 {
        font-size: 1.5em;
      }

      h2 {
        font-size: 1.3em;
      }
    </style>
  </head>

  <body>
    <address class="sender-column">
      <strong>Dr. Selin Aras</strong><br>
      İleri Bilimler Fakültesi<br>
      Örnek Bilim Üniversitesi<br>
      Bilimkent, Ankara 06000<br>
      Türkiye<br>
      <strong>Tel</strong>: +90 312 555 12 34<br>
      <strong>E-posta</strong>: yanit_yok@example.com
    </address>

    <p class="sender-column">
      <time datetime="2026-09-18">18 Eylül 2026</time>
    </p>

    <address>
      <strong>Sayın Deniz Kaya</strong><br>
      Akademi Caddesi No: 42<br>
      Kadıköy, İstanbul 34710<br>
      Türkiye
    </address>

    <h1>Konu: Deniz Kaya doktora programı başvurusu</h1>

    <p>Sayın Deniz,</p>

    <p>
      Üniversitemizin İleri Bilimler Fakültesindeki
      <abbr title="Doctor of Philosophy">PhD</abbr>
      programına yaptığınız başvuru için teşekkür ederiz.
      Sorularınızı aşağıdaki bölümlerde tek tek yanıtlayacağım.
    </p>

    <h2>Başlangıç tarihleri</h2>

    <p>
      Programa yıl içinde farklı zamanlarda başlayabilirsiniz;
      ancak dönem başlangıçları bizim için daha uygundur.
      Önerilen tarihler:
    </p>

    <ul>
      <li>
        Güz dönemi:
        <time datetime="2026-10-05">5 Ekim 2026</time>
      </li>
      <li>
        Bahar dönemi:
        <time datetime="2027-02-08">8 Şubat 2027</time>
      </li>
      <li>
        Yaz dönemi:
        <time datetime="2027-06-07">7 Haziran 2027</time>
      </li>
    </ul>

    <p>
      Hangi tarihi tercih ettiğinizi bize bildirmenizi rica ederiz.
    </p>

    <h2>Araştırma konuları</h2>

    <p>
      Fakültemiz bilim ve teknoloji kapsamına giren yaratıcı çalışmalara
      açıktır. Başvurunuzdaki fikirler arasında öncelik sırasına göre en
      çok ilgimizi çekenler:
    </p>

    <ol>
      <li>
        H<sub>2</sub>O molekülünden hidrojen üretimi ve
        C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> tabanlı
        biyoyakıt süreçleri.
      </li>

      <li>
        Elektronik devrelerin 35°C üzerindeki performansını ve işlem sayısı
        2 × 10<sup>3</sup> değerinden 2 × 10<sup>4</sup> değerine
        yükseldiğinde oluşan değişimi ölçmek.
      </li>

      <li>
        <abbr title="HyperText Markup Language">HTML</abbr> ve
        <abbr title="Cascading Style Sheets">CSS</abbr>
        kullanarak bilimsel müzik notasyonu arayüzleri geliştirmek.
      </li>
    </ol>

    <p>
      Her araştırma önerisi için tahmini süreyi, gerekli ekip ve kaynakları
      açıklamanızı rica ederiz.
    </p>

    <h2>Geleneksel dans araştırmaları</h2>

    <p>
      Evet, doktora sonrası çalışmam sırasında
      <em>gerçekten</em>
      geleneksel dans biçimlerini inceledim.
      En ilginç bulduklarımdan bazıları şunlardır:
    </p>

    <dl>
      <dt>Anadolu çember dansı</dt>
      <dd>
        Yaklaşık 200
        <abbr title="Before Common Era">BCE</abbr>
        dönemine kadar uzandığı ileri sürülen,
        <em>çok</em> etkili bir topluluk dansı.
      </dd>

      <dt>Kuzey rüzgârı adımı</dt>
      <dd>
        Soğuk iklimlerde insanların ısınmak amacıyla küçük ve hızlı
        adımlarla birlikte hareket ettiği tarihsel bir dans biçimi.
      </dd>

      <dt>Robotik kutup dansı</dt>
      <dd>
        1960'larda gözlemcilerin bağımsız bir dans türü sandığı,
        daha sonra aşırı soğuk nedeniyle ortaya çıkan sert hareketler
        olduğu anlaşılan bir örnek.
      </dd>
    </dl>

    <p>Saygılarımla,</p>

    <p>Dr. Selin Aras</p>

    <p>
      Örnek Bilim Üniversitesi sloganı:
      <q>Merak etmeyi asla bırakma.</q>
      —
      <cite>
        Bilim Yolculukları, Ahmet Yılmaz,
        <abbr title="Esquire">Esq.</abbr>
      </cite>
    </p>
  </body>
</html>
```

---

# Çözümün yapısal haritası

Belgenin genel yapısı:

```text
html
│
├── head
│   ├── meta charset
│   ├── meta author
│   ├── title
│   └── style
│
└── body
    │
    ├── address.sender-column
    ├── p.sender-column
    │   └── time
    │
    ├── address
    ├── h1
    ├── p
    ├── p
    │   └── abbr
    │
    ├── h2
    ├── p
    ├── ul
    │   └── time
    │
    ├── p
    │
    ├── h2
    ├── p
    ├── ol
    │   ├── sub
    │   ├── sup
    │   └── abbr
    │
    ├── p
    │
    ├── h2
    ├── p
    │   └── em
    │
    ├── dl
    │   ├── dt
    │   └── dd
    │       ├── abbr
    │       └── em
    │
    ├── p
    ├── p
    │
    └── p
        ├── q
        └── cite
            └── abbr
```

Bu challenge'ın güçlü yanı, önceki derslerde ayrı ayrı gördüğünüz pek çok HTML özelliğini **tek gerçekçi belgede** birleştirmesidir.

---

# Kontrol listesi

Çözümünüzü kaynak challenge'ın değerlendirme ölçütlerine göre kontrol edin.

## Belge iskeleti

```text
[ ] <!doctype html> var.
[ ] <html> var.
[ ] <head> var.
[ ] <body> var.
[ ] Belge dili lang attribute'u ile tanımlanmış.
```

## `<head>`

```text
[ ] charset utf-8.
[ ] author meta tag'ı var.
[ ] <title> var.
[ ] Verilen CSS <style> içinde.
```

## Başlıklar

```text
[ ] Tek bir <h1> var.
[ ] Üç adet <h2> var.
[ ] Heading seviyeleri mantıklı.
```

## Adresler

```text
[ ] İki <address> var.
[ ] Adres satırları <br> ile ayrılmış.
[ ] Her adres satırı ayrı <p> yapılmamış.
[ ] İlk address üzerinde sender-column class'ı var.
```

## Listeler

```text
[ ] Dönem tarihleri <ul> içinde.
[ ] Araştırma konuları <ol> içinde.
[ ] Danslar <dl>/<dt>/<dd> ile yapılandırılmış.
```

## Tarihler

```text
[ ] Mektup tarihi <time> içinde.
[ ] Üç dönem tarihi <time> içinde.
[ ] Toplam dört tarih makine tarafından okunabilir datetime değerine sahip.
[ ] İlk tarihi saran öğede sender-column class'ı var.
```

## Kısaltmalar

```text
[ ] PhD → <abbr>
[ ] HTML → <abbr>
[ ] CSS → <abbr>
[ ] BCE → <abbr>
[ ] Esq. → <abbr>
[ ] Açılımlar uygun şekilde verilmiş.
```

## Bilimsel gösterim

```text
[ ] H₂O için <sub> kullanılmış.
[ ] Diğer kimyasal formüldeki alt simgeler doğru.
[ ] 10³ için <sup> kullanılmış.
[ ] 10⁴ için <sup> kullanılmış.
```

## Vurgu

```text
[ ] Adlar ve Tel/E-posta güçlü önemle işaretlenmiş.
[ ] En az iki başka uygun vurgu/önem kullanımı var.
```

## Alıntı

```text
[ ] Üniversite sloganı <q> içinde.
[ ] Kaynak eser <cite> içinde.
```

## Kalite

```text
[ ] HTML nesting doğru.
[ ] Belge validator'dan geçirilmiş.
[ ] Görünüm için gereksiz semantik HTML kullanılmamış.
```

---

# Bu challenge'dan ne öğrenmelisiniz?

Bu çalışma tek tek HTML tag'larını ezberleyip ezberlemediğinizi kontrol etmekten daha fazlasını amaçlar.

Gerçek test:

```text
Bir içerik parçasını gördüğümde,
onun anlamsal rolünü belirleyebiliyor muyum?
```

sorusudur.

Örneğin:

```text
Adres
→ <address>

Tarih
→ <time>

Öncelik sırası
→ <ol>

Terim + açıklama
→ <dl>

Kısaltma
→ <abbr>

Kimyasal alt simge
→ <sub>

Üs
→ <sup>

Kısa alıntı
→ <q>

Kaynak eser
→ <cite>
```

Bu düşünme biçimi modern HTML'in temelidir.

---

# Özet

**Bir Mektubu HTML ile İşaretleme** challenge'ı, HTML metin modülünün ilk büyük bütünleştirici çalışmalarından biridir. Önceki sayfalarda ayrı ayrı öğrendiğiniz belge iskeleti, metadata, başlıklar, paragraflar, listeler, vurgu, kısaltmalar, tarihler, adresler, bilimsel gösterimler ve alıntılar burada tek bir gerçekçi belge üzerinde birleştirilir.

İlk aşamada eksiksiz bir HTML belgesi oluşturmanız gerekir. `<!doctype html>`, `<html>`, `<head>` ve `<body>` yapısı kurulmalı; belge dili belirtilmeli, UTF-8 karakter kodlaması ve yazar metadata'sı eklenmeli, belge başlığı yazılmalı ve verilen CSS `<style>` öğesi içinde `<head>` bölümüne yerleştirilmelidir.

Mektubun görünen içeriğinde bir ana `<h1>` ve üç `<h2>` ile mantıklı heading hiyerarşisi oluşturulur. Gönderen ve alıcı iletişim bilgileri `<address>` öğeleriyle işaretlenir; adres satırlarının birbirinden ayrılması için `<br>` kullanılır. Gönderen adresi ve tarihine `sender-column` sınıfı verilerek sağa hizalanmaları sağlanır.

Challenge üç farklı liste türünü aynı belgede kullanmanızı gerektirir. Dönem başlangıçları sırasız liste, öncelik sırasındaki araştırma konuları sıralı liste ve ad–açıklama ilişkisine sahip danslar description list olarak yapılandırılır. Böylece `<ul>`, `<ol>` ve `<dl>` arasındaki semantik fark gerçek içerik üzerinde uygulanır.

Dört tarih `<time>` ve `datetime` kullanılarak makine tarafından okunabilir hale getirilir. `PhD`, `HTML`, `CSS`, `BCE` ve `Esq.` ifadeleri `<abbr>` ile işaretlenir. Kimyasal formüllerde `<sub>`, üstel bilimsel değerlerde `<sup>` kullanılır. İsimler ve iletişim etiketleri `<strong>` ile, anlamlı ek vurgu noktaları ise `<em>` ile belirtilir.

Mektubun sonunda kısa slogan `<q>` ile, kaynağı olan eser ise `<cite>` ile işaretlenir. Bu örnek, aynı cümlenin içinde bile farklı metin parçalarının farklı semantik rollere sahip olabileceğini gösterir.

Challenge'ın en önemli dersi şudur:

```text
İyi HTML,
metnin nasıl görünmesi gerektiğini değil,
metnin ne anlama geldiğini açıklar.
```

Belgenizi tamamladıktan sonra W3C validator ile kontrol etmeniz özellikle yararlıdır. Böylece yalnızca görsel olarak çalışan değil, yapısal olarak da geçerli bir HTML belgesi üretmiş olursunuz. Bu challenge'ı rahatça tamamlayabiliyorsanız HTML metin semantiği konusunda sağlam bir temel oluşturmuşsunuzdur ve sıradaki **Structuring documents** konusuna geçmeye hazırsınız.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Challenge: Marking up a letter”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) sayfasının bölüm sırası ve değerlendirme ölçütleri temel alınarak hazırlanmıştır. Uzun mektup metni ve tamamlanmış çözüm, kaynak içeriği birebir çoğaltmamak amacıyla aynı HTML becerilerini test edecek şekilde özgün olarak yeniden yazılmıştır.

### İlgili bağlantılar

- [Önceki: Test your skills — Advanced HTML text](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
- [W3C HTML validator](https://validator.w3.org/)
- [`<address>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address)
- [`<time>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)
- [`<abbr>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr)
- [`<sub>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub)
- [`<sup>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup)
- [`<q>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q)
- [`<cite>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite)
