# Becerilerinizi Test Edin: HTML Metin Temelleri

> **Kaynak:** [MDN Web Docs — Test your skills: HTML text basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics)  
> **Türkçe sürüm:** Kaynak sayfadaki dört testin sırasını, ölçtüğü becerileri ve “başlangıç kodu → görev → çözüm” akışını koruyan özgün Türkçe çalışma sürümüdür.  
> **Kaynak sayfanın son güncellenme tarihi:** 3 Şubat 2026

Bu beceri testinin amacı, HTML metinlerini **yapı** ve **anlam** kazandıracak şekilde işaretleyip işaretleyemediğinizi kontrol etmektir.

Bu testte önceki eğitimlerde öğrendiğiniz şu konuları birlikte kullanacaksınız:

- Başlıklar ve paragraflar,
- Sırasız ve sıralı listeler,
- Açıklama listeleri,
- Güçlü önem ve vurgu.

> **Not:** MDN'nin beceri testlerinde önerilen çalışma yöntemi, başlangıç kodunu **MDN Playground** içinde açıp görevi kendiniz tamamlamaktır. Takılırsanız önce önceki eğitimlere dönün; çözümü mümkün olduğunca en son kontrol edin.

## Bu makalede

- [Metin temelleri 1](#metin-temelleri-1)
- [Metin temelleri 2](#metin-temelleri-2)
- [Metin temelleri 3](#metin-temelleri-3)
- [Metin temelleri 4](#metin-temelleri-4)
- [Kendinizi değerlendirin](#kendinizi-değerlendirin)
- [Özet](#özet)

---

# Metin temelleri 1

Bu görevde düz biçimde verilmiş metni uygun **semantik başlık ve paragraf öğeleriyle** işaretlemeniz gerekir.

Ölçülen temel beceriler:

```text
<h1>
<h2>
<p>
başlık hiyerarşisi
```

## Başlangıç noktası

Aşağıdaki metnin henüz semantik HTML ile yapılandırılmadığını düşünün:

```html
Temel HTML Hayvanları

Bu sayfadaki ilk paragraf hayvanlarımızı tanıtıyor.

Lama

Lamamız listelere büyük ilgi duyuyor. Bir web sayfasında liste öğeleri gördüğü
anda onları şeker gibi yemek istiyor.

Anakonda

Kurnaz anakonda sayfanın etrafında sessizce süzülür ve bağlantıları kullanarak
avına yaklaşır.
```

Bu başlangıç kodunda tüm içerik düz metindir.

Tarayıcı:

```text
hangisi ana başlık?
hangisi alt başlık?
hangisi paragraf?
```

sorularının cevabını semantik HTML üzerinden alamaz.

## Görev

Metni şu yapıya dönüştürün:

1. `"Temel HTML Hayvanları"` metnini en üst düzey başlık yapın.
2. Giriş açıklamasını paragraf yapın.
3. `"Lama"` ve `"Anakonda"` metinlerini ikinci seviye başlık yapın.
4. Her hayvanın açıklamasını ayrı paragraf yapın.

Beklenen belge yapısı:

```text
H1 — Temel HTML Hayvanları

P — giriş

H2 — Lama
P — lama açıklaması

H2 — Anakonda
P — anakonda açıklaması
```

## Kendiniz çözün

Çözümü görmeden önce aşağıdaki iskeleti tamamlamaya çalışın:

```html
<!-- Buraya semantik HTML ekleyin -->
```

## Çözüm

```html
<h1>Temel HTML Hayvanları</h1>

<p>Bu sayfadaki ilk paragraf hayvanlarımızı tanıtıyor.</p>

<h2>Lama</h2>

<p>
  Lamamız listelere büyük ilgi duyuyor. Bir web sayfasında liste öğeleri
  gördüğü anda onları şeker gibi yemek istiyor.
</p>

<h2>Anakonda</h2>

<p>
  Kurnaz anakonda sayfanın etrafında sessizce süzülür ve bağlantıları
  kullanarak avına yaklaşır.
</p>
```

## Neden bu çözüm doğru?

Ana konu:

```html
<h1>Temel HTML Hayvanları</h1>
```

ile tanımlanır.

İki hayvan ana konunun alt bölümleri olduğu için:

```html
<h2>Lama</h2>
<h2>Anakonda</h2>
```

kullanılır.

Açıklama metinleri ise gerçek birer paragraftır:

```html
<p>...</p>
```

Bu yapı yalnızca görsel stil sağlamaz.

Tarayıcıya ve yardımcı teknolojilere şu belge ağacını verir:

```text
Temel HTML Hayvanları
├── Lama
└── Anakonda
```

## Kontrol listesi

Göreviniz tamamlandıysa şunların hepsi doğru olmalıdır:

```text
[ ] Tam bir adet <h1> var.
[ ] İki adet <h2> var.
[ ] Üç açıklama metni <p> içine alınmış.
[ ] Heading seviyelerinde gereksiz atlama yok.
[ ] Görünüş için <br> kullanarak sahte paragraf oluşturulmamış.
```

---

# Metin temelleri 2

Bu görev listeler hakkındaki bilginizi test eder.

İki ayrı metin grubunuz var:

1. Sırası önemli olmayan sebzeler,
2. Sırası önemli olan yönergeler.

Bunları doğru liste türleriyle işaretlemelisiniz.

Ölçülen temel beceriler:

```text
<ul>
<ol>
<li>
semantik liste seçimi
```

# Başlangıç noktası

```html
<h1>Listelere bakış</h1>

<p>
  Aşağıdaki sevdiğim sebzeleri sırasız listeye dönüştürün.
</p>

Salatalık
Brokoli
Kuşkonmaz
Biber

<p>
  Aşağıdaki yönergeleri sıralı listeye dönüştürün.
</p>

Önce kapıyı çalın
Sorulduğunda gizli sözcüğü söyleyin
En az beş saniye bekleyin
Kapı kolunu çevirip itin
```

## Görev

İlk düz metin grubunu:

```html
<ul>
```

kullanarak sırasız listeye dönüştürün.

Her sebze:

```html
<li>
```

içinde olmalıdır.

İkinci grup ise bir süreçtir.

Adımların sırası değişirse yönerge bozulabileceği için:

```html
<ol>
```

kullanılmalıdır.

## Önce anlamı düşünün

Sebzeler:

```text
Salatalık
Brokoli
Kuşkonmaz
Biber
```

şu sırada da olabilir:

```text
Biber
Salatalık
Kuşkonmaz
Brokoli
```

Anlam bozulmaz.

Bu nedenle:

```text
<ul>
```

uygundur.

Ancak yönerge:

```text
1. Kapıyı çal
2. Gizli sözcüğü söyle
3. Bekle
4. Kapıyı aç
```

sırası değişirse süreç çalışmayabilir.

Bu nedenle:

```text
<ol>
```

uygundur.

## Çözüm

```html
<h1>Listelere bakış</h1>

<p>
  Aşağıdaki sevdiğim sebzeleri sırasız listeye dönüştürün.
</p>

<ul>
  <li>Salatalık</li>
  <li>Brokoli</li>
  <li>Kuşkonmaz</li>
  <li>Biber</li>
</ul>

<p>
  Aşağıdaki yönergeleri sıralı listeye dönüştürün.
</p>

<ol>
  <li>Önce kapıyı çalın.</li>
  <li>Sorulduğunda gizli sözcüğü söyleyin.</li>
  <li>En az beş saniye bekleyin.</li>
  <li>Kapı kolunu çevirip itin.</li>
</ol>
```

## Neden yalnızca numara veya bullet yazmıyoruz?

Şu metin:

```html
<p>1. Önce kapıyı çalın.</p>
<p>2. Gizli sözcüğü söyleyin.</p>
```

görsel olarak numaralı bir listeyi taklit edebilir.

Fakat HTML açısından bunlar iki bağımsız paragraftır.

Buna karşılık:

```html
<ol>
  <li>Önce kapıyı çalın.</li>
  <li>Gizli sözcüğü söyleyin.</li>
</ol>
```

tarayıcıya açıkça:

```text
Bu içerik sıralı bir listedir.
```

bilgisini verir.

Bu fark erişilebilirlik açısından da önemlidir.

## CSS verilmiş olsaydı

Kaynak MDN görevinde listelerin doğru oluşturulup oluşturulmadığını daha kolay görmeniz için `<ul>` ve `<ol>` öğelerine farklı border stilleri uygulanır.

Benzer bir test CSS'i:

```css
p {
  margin: 0.5em 0;
}

ol {
  border: 2px solid rebeccapurple;
}

ul {
  border: 2px solid darkorange;
}

ol,
ul {
  padding: 0.5rem 2rem;
  border-radius: 4px;
}
```

Bu stil yalnızca görsel yardım sağlar.

Doğru HTML seçimi hâlâ semantik anlama göre yapılır.

## Kontrol listesi

```text
[ ] Sebzeler <ul> içinde.
[ ] Her sebze ayrı <li> içinde.
[ ] Yönergeler <ol> içinde.
[ ] Her yönerge ayrı <li> içinde.
[ ] <li> öğeleri listeden bağımsız kullanılmamış.
[ ] Liste türü görünüme değil, sıralamanın anlamına göre seçilmiş.
```

---

# Metin temelleri 3

Bu görevde hayvan adlarıyla açıklamaları arasındaki ilişkiyi bir **description list** ile ifade etmeniz gerekir.

Ölçülen temel beceriler:

```text
<dl>
<dt>
<dd>
terim–açıklama ilişkisi
```

# Başlangıç noktası

```html
<h1>İleri HTML Hayvanları</h1>

Lama
Uzun, yünlü, dört ayaklı ve sivri kulaklıdır. Bazen binilebilir;
huysuz olabilir ve sık sık tükürür.

Anakonda
Çok büyük bir boğa yılanıdır. Avına yaklaşmak için sessizce ilerler.

Su aygırı
Açıklaması neredeyse dipsizdir.
```

Bu içerikte:

```text
Lama
Anakonda
Su aygırı
```

birer **terim/ad** gibi davranır.

Her birinin ardından o hayvanın **açıklaması** gelir.

Bu nedenle sıradan `<ul>` yerine:

```html
<dl>
```

daha anlamlıdır.

# Görev

1. Bütün terim–açıklama grubunu `<dl>` içine alın.
2. Hayvan adlarını `<dt>` ile işaretleyin.
3. Her hayvanın açıklamasını `<dd>` içine alın.

Yapı şöyle görünmelidir:

```text
DL
├── DT — Lama
├── DD — Lama açıklaması
├── DT — Anakonda
├── DD — Anakonda açıklaması
├── DT — Su aygırı
└── DD — Su aygırı açıklaması
```

# Çözüm

```html
<h1>İleri HTML Hayvanları</h1>

<dl>
  <dt>Lama</dt>
  <dd>
    Uzun, yünlü, dört ayaklı ve sivri kulaklıdır. Bazen binilebilir;
    huysuz olabilir ve sık sık tükürür.
  </dd>

  <dt>Anakonda</dt>
  <dd>
    Çok büyük bir boğa yılanıdır. Avına yaklaşmak için sessizce ilerler.
  </dd>

  <dt>Su aygırı</dt>
  <dd>
    Açıklaması neredeyse dipsizdir.
  </dd>
</dl>
```

# Neden `<dl>`?

Aşağıdaki yapı teknik olarak bir liste oluşturur:

```html
<ul>
  <li>Lama — ...</li>
  <li>Anakonda — ...</li>
</ul>
```

Ancak:

```text
isim
→ açıklama
```

ilişkisini HTML'in kendisinde açıkça ifade etmez.

Description list:

```html
<dt>Lama</dt>
<dd>...</dd>
```

ile bu anlamı doğrudan kodlar.

Bu nedenle:

```text
terim + tanım
isim + değer
soru + cevap
özellik + açıklama
```

gibi yapılarda `<dl>` güçlü bir seçenek olabilir.

## Örnek CSS

Kaynak görevde `<dl>` ve `<dt>` öğeleri görsel olarak farklılaştırılır.

Benzer stil:

```css
h1 {
  color: rebeccapurple;
}

dl {
  color: #666;
  margin: 0.5em 0;
}

dt {
  font-weight: bold;
  color: rebeccapurple;
}
```

Bu CSS'te `<dt>` daha belirgin görünür.

Ancak HTML'in anlamı CSS olmasa da korunur.

# Daha ileri düşünün

Description list yalnızca sözlük değildir.

Örneğin:

```html
<dl>
  <dt>İşletim sistemi</dt>
  <dd>Linux</dd>

  <dt>Bellek</dt>
  <dd>16 GB</dd>

  <dt>Depolama</dt>
  <dd>1 TB SSD</dd>
</dl>
```

bir cihazın özelliklerini ifade edebilir.

Ya da:

```html
<dl>
  <dt>Kargo ne kadar sürer?</dt>
  <dd>Genellikle 2–4 iş günü.</dd>
</dl>
```

soru–cevap ilişkisini ifade edebilir.

# Kontrol listesi

```text
[ ] Tek bir <dl> kapsayıcısı var.
[ ] Her hayvan adı <dt> içinde.
[ ] Her açıklama <dd> içinde.
[ ] <dt> ve <dd> ilişkileri doğru sırada.
[ ] İçerik yalnızca görsel olarak değil, semantik olarak eşleştirilmiş.
```

---

# Metin temelleri 4

Bu son görev inline semantik öğeleri test eder.

Size bir paragraf verilir.

Paragraftaki bazı kelimeler:

```text
güçlü önem
```

taşır.

Bazıları ise:

```text
vurgu
```

gerektirir.

Ölçülen beceriler:

```text
<strong>
<em>
semantic inline markup
```

# Başlangıç noktası

```html
<h1>Vurgu ve önem</h1>

<p>
  Benim için iki şey gerçekten değerlidir — müzik ve arkadaşlar.
  Belki bir gün arkadaşlarımı birbirleriyle ve müziğimle daha çok
  ilgilenmeye ikna edebilirim!
</p>
```

## Görev

Paragrafı anlamına göre okuyun.

Aşağıdaki kavramları ayırmanız gerekir:

### Güçlü önem

Örneğin:

```text
iki
müzik
arkadaşlar
```

gibi içeriğin temel noktalarını:

```html
<strong>
```

ile işaretleyebilirsiniz.

### Vurgu

Cümlenin tonunu etkileyen:

```text
belki
ve
```

gibi sözcüklerde:

```html
<em>
```

kullanabilirsiniz.

Buradaki hedef yalnızca metni:

```text
kalın + italik
```

göstermek değildir.

Amaç:

```text
hangi sözcük önemli?
hangi sözcük vurgulu?
```

sorularına semantik HTML ile cevap vermektir.

# Çözüm

```html
<h1>Vurgu ve önem</h1>

<p>
  Benim için <strong>iki</strong> şey gerçekten değerlidir —
  <strong>müzik</strong> ve <strong>arkadaşlar</strong>.
  <em>Belki</em> bir gün arkadaşlarımı birbirleriyle
  <em>ve</em> müziğimle daha çok ilgilenmeye ikna edebilirim!
</p>
```

# `<strong>` neden kullanıldı?

Örneğin:

```html
<strong>müzik</strong>
```

yalnızca:

```text
müzik kelimesi kalın görünsün
```

demek değildir.

Semantik anlam:

```text
Bu sözcük cümlenin önemli parçasıdır.
```

şeklindedir.

# `<em>` neden kullanıldı?

```html
<em>Belki</em>
```

kelimesi cümlenin tonuna vurgu ekler.

Benzer biçimde farklı bir kelimeyi vurgulamak cümleyi farklı hissettirebilir.

Örneğin:

```html
<p>
  Ben <em>onu</em> çağırmadım.
</p>
```

ile:

```html
<p>
  <em>Ben</em> onu çağırmadım.
</p>
```

arasındaki vurgu farkı anlamı etkiler.

# Görsel görünüm ile semantik anlamı karıştırmayın

Tarayıcı varsayılan olarak:

```text
<strong>
→ kalın

<em>
→ italik
```

gösterebilir.

Fakat bu şu anlama gelmez:

```text
kalın yapmak istiyorum → <strong>
italik yapmak istiyorum → <em>
```

Doğru düşünce:

```text
güçlü önem → <strong>
vurgu       → <em>
```

olmalıdır.

Yalnızca görünüm gerekiyorsa CSS kullanılabilir.

Örneğin:

```html
<span class="product-name">Aurora 5000</span>
```

```css
.product-name {
  font-style: italic;
}
```

# Kaynak testteki görsel destek

MDN'nin orijinal görevinde CSS:

- `<strong>` öğelerini başlıkla benzer renkte,
- `<em>` öğelerini farklı renkte

göstererek semantik işaretlemenin sonucu görsel olarak ayırt etmenizi kolaylaştırır.

Benzer bir stil:

```css
h1,
strong {
  color: rebeccapurple;
}

p,
em {
  margin: 0.5em 0;
}

em {
  color: #666;
}
```

Bu CSS test sonucu için yardımcıdır.

Asıl değerlendirme HTML markup'ının doğru olmasıdır.

# Kontrol listesi

```text
[ ] Güçlü önem taşıyan kelimeler <strong> içinde.
[ ] Vurgulu ifadeler <em> içinde.
[ ] Öğeler yalnızca görünüm elde etmek için seçilmemiş.
[ ] HTML nesting doğru.
[ ] Paragraf yapısı korunmuş.
```

---

# Dört görevin birlikte ölçtüğü beceriler

Bu test aslında önceki birkaç HTML dersini tek bir kısa kontrol noktasında bir araya getirir.

| Görev | Ölçülen ana bilgi | Temel öğeler |
| --- | --- | --- |
| **Metin temelleri 1** | Belge başlık/paragraf yapısı | `<h1>`, `<h2>`, `<p>` |
| **Metin temelleri 2** | Liste türünü anlama | `<ul>`, `<ol>`, `<li>` |
| **Metin temelleri 3** | Terim–açıklama ilişkisi | `<dl>`, `<dt>`, `<dd>` |
| **Metin temelleri 4** | Inline semantik anlam | `<strong>`, `<em>` |

Bu öğeleri yalnızca ezberlemek yerine aralarındaki **anlamsal farkı** anlamanız önemlidir.

# Kendinizi değerlendirin

Çözümlere bakmadan görevleri tamamlayabiliyorsanız aşağıdaki temel konularda iyi bir başlangıç seviyesine ulaşmışsınız demektir.

## Belge yapısı

Şunları ayırt edebiliyor musunuz?

```text
ana başlık
alt başlık
paragraf
```

Ve bunları:

```html
<h1>
<h2>
<p>
```

ile doğru biçimde eşleyebiliyor musunuz?

## Liste türleri

Şu soruyu cevaplayabiliyor musunuz?

```text
Öğelerin sırası anlamı değiştiriyor mu?
```

Cevap:

```text
hayır
→ <ul>

evet
→ <ol>
```

olabilir.

Terim–açıklama ilişkisi varsa:

```text
<dl>
```

düşünebiliyor musunuz?

## Semantik inline markup

Şu farkı açıklayabiliyor musunuz?

```text
<strong>
→ güçlü önem

<em>
→ vurgu
```

Eğer cevabınız evetse bu testin ana hedeflerini kavramışsınız demektir.

# Çözümleri kullanmanın doğru yolu

Bir beceri testinin amacı çözümü ezberlemek değildir.

Daha verimli yöntem:

```text
1. Başlangıç kodunu alın.
2. Önce bellekten çözmeye çalışın.
3. Tarayıcıda test edin.
4. Sorun varsa önce ilgili eğitim sayfasına dönün.
5. Tekrar deneyin.
6. En son çözümü açın.
7. Çözümle kendi kodunuz arasındaki farkı açıklayın.
8. Çözümü kapatıp görevi yeniden yazın.
```

Özellikle son adım önemlidir.

Çözümü okuyup:

```text
"Evet, anladım."
```

demekle, çözümü kapatıp sıfırdan yeniden yazabilmek aynı şey değildir.

# Kendi ek testlerinizi oluşturun

Bu dört görevi tamamladıktan sonra kendinize benzer mini sorular hazırlayabilirsiniz.

## Mini test 1 — Başlık yapısı

Düz metin:

```text
Web teknolojileri
HTML
HTML yapıyı tanımlar.
CSS
CSS görünümü kontrol eder.
```

Beklenen fikir:

```html
<h1>...</h1>
<h2>...</h2>
<p>...</p>
```

## Mini test 2 — Listeler

Düz içerik:

```text
Alınacaklar:
kahve
ekmek
süt

Kurulum:
dosyayı indir
arşivi aç
programı çalıştır
```

Sorun:

```text
hangisi <ul>?
hangisi <ol>?
```

## Mini test 3 — Açıklama listesi

```text
HTML
İşaretleme dili.

CSS
Stil dili.

JavaScript
Programlama dili.
```

Bunu:

```html
<dl>
```

ile yapılandırın.

## Mini test 4 — Vurgu ve önem

Cümle:

```text
Bu dosyayı kesinlikle silmeyin; özellikle config.json dosyasını koruyun.
```

Kendinize sorun:

```text
hangi ifade güçlü önem taşıyor?
hangi kelime yalnızca vurgu alıyor?
```

Ardından `<strong>` ve `<em>` kullanın.

# Yaygın hatalar

## Hata 1 — Başlığı sırf büyük görünsün diye seçmek

Yanlış yaklaşım:

```text
h2 daha küçük görünüyor,
bu nedenle ana başlık için h2 kullanayım.
```

Doğru:

```text
HTML heading seviyesi → yapısal anlam
CSS → görünüm
```

# Hata 2 — Listeyi `<br>` ile taklit etmek

```html
Elma<br>
Armut<br>
Muz
```

bir liste değildir.

Doğru:

```html
<ul>
  <li>Elma</li>
  <li>Armut</li>
  <li>Muz</li>
</ul>
```

# Hata 3 — Her liste için `<ul>` kullanmak

Bir süreç:

```text
önce
sonra
en son
```

gibi sıralıysa `<ol>` daha anlamlıdır.

# Hata 4 — `<dl>` içinde `<li>` kullanmak

Description list'in temel öğeleri:

```html
<dl>
<dt>
<dd>
```

şeklindedir.

Örneğin:

```html
<dl>
  <dt>HTML</dt>
  <dd>Bir işaretleme dili.</dd>
</dl>
```

# Hata 5 — `<strong>` ile `<b>` mantığını karıştırmak

Bu testte hedef:

```text
güçlü önem
```

olduğu için:

```html
<strong>
```

kullanılır.

Sadece görsel kalınlık istediğiniz için `<strong>` seçmemelisiniz.

# Hata 6 — `<em>` öğesini dekoratif italik olarak kullanmak

`<em>`:

```text
vurgu
```

anlamına gelir.

Yalnızca görünüm için CSS veya bağlama göre başka semantik öğe kullanılmalıdır.

# Birleştirilmiş örnek

Dört testte öğrendiğiniz öğelerin tamamını aynı küçük belgede kullanabiliriz:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>HTML metin temelleri pratiği</title>
  </head>

  <body>
    <h1>Web geliştirme çalışma planım</h1>

    <p>
      Bu hafta <strong>üç</strong> temel konuya odaklanacağım.
      Özellikle <em>HTML</em> konusunda düzenli pratik yapmak istiyorum.
    </p>

    <h2>Öğrenilecek teknolojiler</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <h2>Çalışma sırası</h2>

    <ol>
      <li>HTML metin konularını bitir.</li>
      <li>Alıştırmaları çöz.</li>
      <li>Küçük bir sayfa oluştur.</li>
    </ol>

    <h2>Terimler</h2>

    <dl>
      <dt>HTML</dt>
      <dd>Web içeriğini yapılandırmak için kullanılan işaretleme dili.</dd>

      <dt>CSS</dt>
      <dd>Web içeriğini biçimlendiren stil dili.</dd>
    </dl>
  </body>
</html>
```

Bu örnekte:

```text
<h1>, <h2>, <p>
<ul>, <ol>, <li>
<dl>, <dt>, <dd>
<strong>, <em>
```

birlikte kullanılmıştır.

# Özet

Bu beceri testi, HTML metin temellerinde öğrendiğiniz dört ana alanı kısa ve uygulamalı görevlerle kontrol eder. İlk görevde düz metni başlık ve paragraf öğeleriyle anlamlı bir belge yapısına dönüştürmeniz gerekir. Buradaki temel amaç, `<h1>`, `<h2>` ve `<p>` öğelerini görsel boyutlarına göre değil, içerikteki hiyerarşik rollerine göre seçebilmektir.

İkinci görev listelere odaklanır. Sırası önemli olmayan öğeler için `<ul>`, sırası anlam taşıyan adımlar için `<ol>` kullanılmalı ve her bir madde `<li>` içinde bulunmalıdır. Böylece liste yapısı yalnızca görsel olarak değil, tarayıcılar ve yardımcı teknolojiler tarafından da semantik olarak anlaşılabilir.

Üçüncü görevde bir grup hayvan adı ile açıklaması `<dl>`, `<dt>` ve `<dd>` öğeleri kullanılarak bir description list'e dönüştürülür. Bu yapı, içerikte terim–açıklama veya ad–değer ilişkisini açıkça ifade eder ve sıradan sırasız listeden farklı bir semantik amaca sahiptir.

Dördüncü görev ise `<strong>` ve `<em>` öğelerinin farkını test eder. `<strong>` güçlü önem taşıyan içerik için, `<em>` ise konuşma dilindeki vurguya benzer semantik vurgu için kullanılmalıdır. Bu öğelerin tarayıcıda kalın veya italik görünmesi ikincil bir sonuçtur; asıl amaç içeriğin anlamını işaretlemektir.

Dört görevin ortak mesajı aynıdır:

```text
HTML'de öğeyi görünüşüne göre değil,
içeriğin anlamına ve yapısal görevine göre seçin.
```

Çözümlere bakmadan bu görevleri tamamlayabiliyorsanız başlık/paragraf, temel liste, açıklama listesi ve vurgu/önem konularında gerekli başlangıç temelini oluşturmuşsunuz demektir. Bir sonraki MDN konusu **Advanced text features** ile HTML metin semantiğini daha ileri düzeye taşır.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Test your skills: HTML text basics”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics) sayfasının dört görevlik test sırası ve ölçtüğü beceriler temel alınarak hazırlanmış özgün Türkçe çalışma sürümüdür.

### Testte ölçülen önceki konular

- [Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
- [Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
- [Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)

### Gezinme

- [Önceki: Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
- [MDN Playground](https://developer.mozilla.org/en-US/play)
