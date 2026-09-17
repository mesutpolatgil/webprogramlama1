# Listeler

> **Kaynak:** [MDN Web Docs — Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini, alıştırmalarını ve temel örneklerini izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 21 Ağustos 2025

Listeler günlük yaşamın her yerindedir: alışveriş listeleri, yapılacaklar listeleri, yol tarifleri, tarif adımları, menüler ve daha fazlası.

HTML, farklı türdeki listeleri semantik biçimde ifade etmek için üç temel liste yapısı sunar:

- **Sırasız listeler** — `<ul>`
- **Sıralı listeler** — `<ol>`
- **Açıklama listeleri** — `<dl>`

Bu bölümde bu üç yapı türünün nasıl kullanıldığını, hangi durumda hangisinin seçilmesi gerektiğini ve listelerin iç içe nasıl yerleştirilebileceğini öğreneceksiniz.

|  |  |
| --- | --- |
| **Ön koşullar:** | [Temel HTML Sözdizimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) bölümünde ele alınan temel HTML bilgisi. |
| **Öğrenme çıktıları:** | • Sırasız, sıralı ve açıklama listelerinin HTML yapılarını öğrenmek.<br>• Her liste türünü doğru bağlamda kullanmak.<br>• Listelerin navigasyon menüleri gibi daha geniş kullanım alanlarını anlamak. |

## Bu makalede

- [Sırasız listeler](#sırasız-listeler)
- [Sıralı listeler](#sıralı-listeler)
- [Tarif sayfamızı işaretleme](#tarif-sayfamızı-işaretleme)
- [Listeleri iç içe yerleştirme](#listeleri-iç-içe-yerleştirme)
- [Açıklama listeleri](#açıklama-listeleri)
- [Özet](#özet)

# Sırasız listeler

Sırasız listeler, öğelerin hangi sırada yer aldığının anlam açısından önemli olmadığı durumlarda kullanılır.

Örneğin bir alışveriş listesi:

```text
süt
yumurta
ekmek
humus
```

Bu öğelerin sırası değişse de listenin anlamı bozulmaz.

Örneğin:

```text
ekmek
humus
yumurta
süt
```

hala geçerli bir alışveriş listesidir.

Bu tür içerik için HTML'de:

```html
<ul>
```

kullanılır.

`ul` ifadesi:

```text
unordered list
```

yani **sırasız liste** anlamına gelir.

Listenin her öğesi:

```html
<li>
```

içinde bulunur.

`li` ise:

```text
list item
```

yani **liste öğesi** demektir.

## Temel yapı

```html
<ul>
  <li>süt</li>
  <li>yumurta</li>
  <li>ekmek</li>
  <li>humus</li>
</ul>
```

Yapıyı şöyle düşünebilirsiniz:

```text
<ul>
│
├── <li>süt</li>
├── <li>yumurta</li>
├── <li>ekmek</li>
└── <li>humus</li>
```

Burada:

```text
<ul>
→ tüm listeyi sarar

<li>
→ listenin tek tek öğelerini tanımlar
```

## Tarayıcı görünümü

Tarayıcılar sırasız listeleri varsayılan olarak genellikle madde işaretleriyle gösterir:

```text
• süt
• yumurta
• ekmek
• humus
```

Ancak bu görsel stil CSS ile tamamen değiştirilebilir.

Önemli olan HTML tarafında:

```text
Bu içerik sırasız bir listedir.
```

anlamının verilmesidir.

# Sırasız listeyi işaretleme alıştırması

Kaynak MDN sayfasındaki ilk Playground görevi, düz metin biçimindeki öğeleri sırasız listeye dönüştürmenizi ister.

Başlangıç:

```text
milk
eggs
bread
hummus
```

Görev:

1. Bütün öğeleri `<ul>` içinde toplayın.
2. Her bir öğeyi `<li>` içine alın.

Çözüm:

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

Türkçe bir örnek:

```html
<ul>
  <li>süt</li>
  <li>yumurta</li>
  <li>ekmek</li>
  <li>humus</li>
</ul>
```

## Neden `<p>` kullanmıyoruz?

Şu yapı:

```html
<p>süt</p>
<p>yumurta</p>
<p>ekmek</p>
<p>humus</p>
```

görsel olarak satır satır görünebilir.

Fakat tarayıcıya:

```text
Bu dört öğe birbirine ait tek bir listedir.
```

bilgisini vermez.

Semantik olarak:

```html
<ul>
  <li>...</li>
</ul>
```

daha doğrudur.

# Sıralı listeler

Bazı listelerde öğelerin **hangi sırada** gerçekleştiği önemlidir.

Örneğin yol tarifi:

```text
Yolun sonuna kadar ilerleyin.
Sağa dönün.
İlk iki döner kavşaktan düz geçin.
Üçüncü döner kavşakta sola dönün.
Okul 300 metre ileride sağ tarafta.
```

Bu adımların sırasını değiştirirseniz kişi yanlış yere gidebilir.

Bu tür listeler için:

```html
<ol>
```

kullanılır.

`ol`:

```text
ordered list
```

yani **sıralı liste** anlamına gelir.

Öğeler yine `<li>` içine alınır.

## Temel yapı

```html
<ol>
  <li>Yolun sonuna kadar ilerleyin.</li>
  <li>Sağa dönün.</li>
  <li>İlk iki döner kavşaktan düz geçin.</li>
  <li>Üçüncü döner kavşakta sola dönün.</li>
  <li>Okul 300 metre ileride sağ tarafta.</li>
</ol>
```

Tarayıcı bunu genellikle:

```text
1. Yolun sonuna kadar ilerleyin.
2. Sağa dönün.
3. İlk iki döner kavşaktan düz geçin.
4. Üçüncü döner kavşakta sola dönün.
5. Okul 300 metre ileride sağ tarafta.
```

şeklinde gösterir.

# Sırasız ve sıralı liste arasındaki temel fark

HTML yapısı neredeyse aynıdır.

Sırasız:

```html
<ul>
  <li>...</li>
</ul>
```

Sıralı:

```html
<ol>
  <li>...</li>
</ol>
```

Fark:

```text
<ul>
→ sıra anlam açısından önemli değil

<ol>
→ sıra anlam açısından önemli
```

Bu ayrım tamamen semantiktir.

Bir listeyi yalnızca tarayıcıda:

```text
madde işaretli mi?
numaralı mı?
```

görünsün diye seçmemelisiniz.

Görünüm CSS ile değiştirilebilir.

Önce içeriğin **anlamını** düşünmelisiniz.

# Sıralı listeyi işaretleme alıştırması

Kaynak MDN'nin ikinci alıştırması düz metin biçimindeki yol tarifini `<ol>` listesine dönüştürmenizi ister.

Başlangıç:

```text
Drive to the end of the road
Turn right
Go straight across the first two roundabouts
Turn left at the third roundabout
The school is on your right, 300 meters up the road
```

Görev:

1. Bütün adımları `<ol>` içine alın.
2. Her adımı `<li>` ile işaretleyin.

Örnek çözüm:

```html
<ol>
  <li>Drive to the end of the road</li>
  <li>Turn right</li>
  <li>Go straight across the first two roundabouts</li>
  <li>Turn left at the third roundabout</li>
  <li>The school is on your right, 300 meters up the road</li>
</ol>
```

Bu yapı tarayıcıya:

```text
Bu öğeler bir süreçtir ve sıraları önemlidir.
```

bilgisini verir.

# Hangi durumda `<ul>`, hangi durumda `<ol>`?

Kendinize basit bir soru sorun:

> Öğelerin yerini değiştirirsem anlam veya işlem bozuluyor mu?

Eğer:

```text
hayır
```

ise büyük olasılıkla:

```html
<ul>
```

uygundur.

Eğer:

```text
evet
```

ise:

```html
<ol>
```

daha doğrudur.

## `<ul>` için yaygın örnekler

```text
Alışveriş listesi
Malzeme listesi
Özellik listesi
Takım üyeleri
Navigasyon bağlantıları
Kategori listesi
```

## `<ol>` için yaygın örnekler

```text
Yemek tarifi adımları
Kurulum adımları
Yol tarifi
Sıralama / derece
Bir sürecin aşamaları
```

# Tarif sayfamızı işaretleme

Kaynak MDN sayfasındaki daha kapsamlı alıştırma, öğrendiğiniz:

- Başlık,
- Paragraf,
- Sırasız liste,
- Sıralı liste

kavramlarını tek bir içerikte birleştirir.

Örnek içerik bir **humus tarifi**dir.

Kaynak başlangıç dosyası:

[text-start.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)

Kaynak tam çözüm:

[text-complete.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html)

## Görevler

Kaynak alıştırmada dört ana görev vardır.

### 1. Başlıkları işaretleyin

Ana sayfa başlığını:

```html
<h1>
```

ile işaretleyin.

Üç alt başlığı:

```html
<h2>
```

ile işaretleyin.

Örneğin:

```html
<h1>Quick hummus recipe</h1>

<h2>Ingredients</h2>

<h2>Instructions</h2>

<h2>Storage</h2>
```

### 2. Paragrafları belirleyin

İçerikte paragraf anlamı taşıyan beş metin bloğunu:

```html
<p>
```

ile işaretleyin.

Örneğin:

```html
<p>
  This recipe makes quick, tasty hummus, with no messing.
</p>
```

### 3. Malzeme listesini sırasız liste yapın

Malzemelerin sırası genellikle anlam açısından önemli değildir.

Bu nedenle:

```html
<ul>
```

kullanılır.

Örnek:

```html
<ul>
  <li>1 can (400g) of chick peas</li>
  <li>175g of tahini</li>
  <li>6 sundried tomatoes</li>
  <li>Half a red pepper</li>
  <li>A pinch of cayenne pepper</li>
  <li>1 clove of garlic</li>
  <li>A dash of olive oil</li>
</ul>
```

### 4. Hazırlama adımlarını sıralı liste yapın

Tarif adımlarının sırası önemlidir.

Bu nedenle:

```html
<ol>
```

kullanılır.

Örnek:

```html
<ol>
  <li>Sarımsağın kabuğunu soyun ve iri doğrayın.</li>
  <li>Biberin çekirdeklerini çıkarıp iri doğrayın.</li>
  <li>Tüm malzemeleri mutfak robotuna ekleyin.</li>
  <li>Malzemeleri püre kıvamına gelene kadar işleyin.</li>
</ol>
```

## Alıştırmanın ana fikri

Bu görev sadece tag ezberleme değildir.

Her içerik parçası için:

```text
Bu nedir?
```

sorusunu sormanız gerekir.

Örneğin:

```text
Quick hummus recipe
→ ana başlık

Ingredients
→ bölüm başlığı

1 can of chick peas
→ sırasız liste öğesi

Remove the skin from the garlic...
→ sıralı adım

Storage açıklaması
→ paragraf
```

Semantik HTML'in temel mantığı budur.

# Listeleri iç içe yerleştirme

Bir listenin içinde başka bir liste bulunabilir.

Buna:

```text
nested list
```

yani **iç içe liste** denir.

Kaynak humus tarifi örneğinde hazırlama adımlarının son iki maddesi aslında dördüncü adımın alt seçenekleri olarak düşünülebilir.

Düz liste:

```html
<ol>
  <li>Sarımsağı doğrayın.</li>
  <li>Biberi doğrayın.</li>
  <li>Tüm malzemeleri mutfak robotuna ekleyin.</li>
  <li>Malzemeleri püre haline getirin.</li>
  <li>Daha taneli istiyorsanız kısa süre işleyin.</li>
  <li>Daha pürüzsüz istiyorsanız daha uzun süre işleyin.</li>
</ol>
```

Ancak son iki öğe:

```text
Malzemeleri püre haline getirin.
```

adımının alt seçenekleridir.

Bu ilişkiyi HTML'de nested list ile daha doğru ifade edebiliriz.

# İç içe liste örneği

```html
<ol>
  <li>Sarımsağı soyun ve iri doğrayın.</li>
  <li>Biberin çekirdeklerini çıkarıp iri doğrayın.</li>
  <li>Tüm malzemeleri mutfak robotuna ekleyin.</li>
  <li>
    Malzemeleri püre haline getirin.

    <ul>
      <li>
        Daha taneli bir humus istiyorsanız kısa süre işleyin.
      </li>
      <li>
        Daha pürüzsüz bir humus istiyorsanız daha uzun süre işleyin.
      </li>
    </ul>
  </li>
</ol>
```

Burada önemli nokta:

```html
<ul>
```

alt listesinin doğrudan:

```html
<ol>
```

içine değil, ilgili:

```html
<li>
```

öğesinin içine yerleştirilmesidir.

Yapı:

```text
<ol>
├── <li>1. adım</li>
├── <li>2. adım</li>
├── <li>3. adım</li>
└── <li>4. adım
     │
     └── <ul>
          ├── <li>Seçenek A</li>
          └── <li>Seçenek B</li>
```

Bu yapı:

```text
Seçenek A ve B,
4. adıma bağlıdır.
```

anlamını açıkça ifade eder.

# Yanlış nested list örneği

Şu yapıdan kaçının:

```html
<ol>
  <li>Birinci adım</li>

  <ul>
    <li>Alt seçenek</li>
  </ul>

  <li>İkinci adım</li>
</ol>
```

Çünkü `<ol>` içinde doğrudan beklenen öğeler:

```html
<li>
```

öğeleridir.

Alt listeyi:

```html
<li>
  ...
  <ul>
    ...
  </ul>
</li>
```

şeklinde ilgili liste maddesinin içinde tutmak daha doğru bir yapıdır.

# İç içe listeler nerelerde kullanılır?

Örneğin:

## Menü yapısı

```text
Ürünler
├── Telefonlar
├── Bilgisayarlar
└── Aksesuarlar
```

HTML:

```html
<ul>
  <li>
    Ürünler
    <ul>
      <li>Telefonlar</li>
      <li>Bilgisayarlar</li>
      <li>Aksesuarlar</li>
    </ul>
  </li>
</ul>
```

## İçindekiler

```text
1. HTML
   1.1 Öğeler
   1.2 Attribute'lar
2. CSS
```

gibi hiyerarşik yapılarda da nested list kullanılabilir.

# Navigasyon menülerinde listeler

Kaynak sayfanın öğrenme hedeflerinden biri listelerin daha geniş kullanım alanlarını anlamaktır.

Bunların en önemlilerinden biri **navigasyon menüleridir**.

Örneğin:

```html
<nav>
  <ul>
    <li><a href="/">Ana sayfa</a></li>
    <li><a href="/about/">Hakkımızda</a></li>
    <li><a href="/products/">Ürünler</a></li>
    <li><a href="/contact/">İletişim</a></li>
  </ul>
</nav>
```

Burada:

```text
<nav>
→ navigasyon bölgesi

<ul>
→ bağlantılar grubu

<li>
→ her navigasyon öğesi

<a>
→ gerçek bağlantı
```

olarak çalışır.

CSS ile bu liste:

```text
dikey madde işaretli liste
```

gibi görünmek zorunda değildir.

Örneğin yatay menüye çevrilebilir:

```css
nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}
```

HTML semantiği liste olarak kalırken görünüm tamamen değişebilir.

Bu da şu temel ilkeyi tekrar gösterir:

```text
HTML
→ anlam ve yapı

CSS
→ görünüm
```

# Açıklama listeleri

HTML'deki üçüncü ana liste türü:

```html
<dl>
```

ile oluşturulan **description list (açıklama listesi)** yapısıdır.

Açıklama listeleri bir grup:

```text
terim
+
açıklama
```

ilişkisini işaretlemek için kullanılır.

Örneğin:

```text
HTML
Web içeriğini yapılandırmak için kullanılan işaretleme dili.

CSS
Web içeriğini biçimlendirmek için kullanılan stil dili.
```

Burada normal `<ul>` veya `<ol>` yerine terim ile açıklama arasındaki ilişkiyi ifade eden özel öğeler kullanılır.

# Açıklama listesi öğeleri

Açıklama listesi üç temel HTML öğesi kullanır.

## `<dl>`

Tüm description list'i sarar.

`dl`:

```text
description list
```

anlamına gelir.

## `<dt>`

Terimi tanımlar.

`dt`:

```text
description term
```

olarak düşünülebilir.

## `<dd>`

Terime ait açıklamayı tanımlar.

`dd`:

```text
description details / description
```

işlevi görür.

# Basit açıklama listesi

```html
<dl>
  <dt>HTML</dt>
  <dd>Web içeriğini yapılandıran işaretleme dili.</dd>

  <dt>CSS</dt>
  <dd>Web içeriğini biçimlendiren stil dili.</dd>
</dl>
```

Yapı:

```text
<dl>
├── <dt>HTML</dt>
├── <dd>...</dd>
├── <dt>CSS</dt>
└── <dd>...</dd>
```

Tarayıcılar açıklamaları varsayılan olarak terimlerden biraz girintili gösterebilir.

Ancak görünüm yine CSS ile değiştirilebilir.

# Açıklama listesi örneği

Kaynak sayfa tiyatro terimlerinden oluşan bir örnek kullanır.

Türkçeleştirilmiş benzer yapı:

```html
<dl>
  <dt>soliloquy</dt>
  <dd>
    Bir karakterin iç düşüncelerini kendi kendine yüksek sesle
    söylediği dramatik anlatım biçimi.
  </dd>

  <dt>monologue</dt>
  <dd>
    Bir karakterin düşüncelerini uzun bir konuşma biçiminde
    izleyiciye veya diğer karakterlere aktarması.
  </dd>

  <dt>aside</dt>
  <dd>
    Bir karakterin yalnızca izleyiciye yönelik kısa bir yorum
    paylaşması.
  </dd>
</dl>
```

Bu yapı özellikle:

```text
sözlük
terim tanımı
soru–cevap
isim–değer eşleşmesi
```

gibi ilişkiler için yararlıdır.

# Tek terim için birden fazla açıklama

Bir `<dt>` öğesinin yalnızca tek bir `<dd>` öğesi olması gerekmez.

Aynı terim birden fazla açıklamaya sahip olabilir.

Örneğin:

```html
<dl>
  <dt>aside</dt>

  <dd>
    Tiyatroda karakterin yalnızca seyirciye söylediği kısa söz.
  </dd>

  <dd>
    Yazıda ana akışın dışında kalan ancak konuyla ilişkili ek içerik.
  </dd>
</dl>
```

Burada aynı terimin:

```text
tiyatro anlamı
+
yazı düzenindeki anlamı
```

olmak üzere iki açıklaması vardır.

Yapı:

```text
dt
├── dd
└── dd
```

şeklinde düşünülebilir.

# Bir terimin birden fazla adı olabilir mi?

Açıklama listelerinde bir açıklamayla ilişkili birden fazla terim de kullanılabilir.

Örneğin aynı kavramın iki adı varsa:

```html
<dl>
  <dt>HTML</dt>
  <dt>HyperText Markup Language</dt>

  <dd>
    Web belgelerinin yapısını ve semantiğini tanımlayan işaretleme dili.
  </dd>
</dl>
```

Bu tür yapılar dikkatli kullanılmalıdır ancak description list'in yalnızca bire bir ilişkiyle sınırlı olmadığını gösterir.

# Açıklama listeleri yalnızca sözlük için değildir

`<dl>` adını görünce yalnızca:

```text
kelime → tanım
```

ilişkisini düşünmeyin.

Aşağıdaki durumlarda da yararlı olabilir.

## Soru–cevap

```html
<dl>
  <dt>Kargo kaç günde gelir?</dt>
  <dd>Genellikle 2–4 iş günü.</dd>

  <dt>İade süresi nedir?</dt>
  <dd>Ürünü teslim aldıktan sonra 14 gün.</dd>
</dl>
```

## Metadata bilgileri

```html
<dl>
  <dt>Yazar</dt>
  <dd>Ayşe Yılmaz</dd>

  <dt>Yayın tarihi</dt>
  <dd>21 Ağustos 2025</dd>
</dl>
```

## Ürün özellikleri

```html
<dl>
  <dt>Ekran</dt>
  <dd>15.6 inç</dd>

  <dt>Bellek</dt>
  <dd>16 GB</dd>
</dl>
```

Önemli olan öğeler arasında:

```text
ad/terim
↔
açıklama/değer
```

ilişkisi bulunmasıdır.

# Açıklama listesi alıştırması

Kaynak MDN sayfasındaki son Playground alıştırmasında şu düz metin verilir:

```text
Love
The glue that binds the world together.

Eggs
The glue that binds the cake together.

Coffee
The drink that gets the world running in the morning.
A light brown color.
```

Görev:

1. Bütün yapıyı `<dl>` içine alın.
2. Üç terimi `<dt>` ile işaretleyin.
3. Açıklamaları `<dd>` içine alın.
4. Üçüncü terimin iki açıklaması olduğunu unutmayın.

# Çözüm

```html
<dl>
  <dt>Love</dt>
  <dd>The glue that binds the world together.</dd>

  <dt>Eggs</dt>
  <dd>The glue that binds the cake together.</dd>

  <dt>Coffee</dt>
  <dd>The drink that gets the world running in the morning.</dd>
  <dd>A light brown color.</dd>
</dl>
```

Türkçe benzer örnek:

```html
<dl>
  <dt>Sevgi</dt>
  <dd>İnsanları birbirine bağlayan güçlü bir duygu.</dd>

  <dt>Yumurta</dt>
  <dd>Kek karışımını bir arada tutmaya yardımcı olan bir malzeme.</dd>

  <dt>Kahve</dt>
  <dd>Birçok kişinin güne başlarken tercih ettiği içecek.</dd>
  <dd>Açık ile koyu kahverengi arasında değişen bir renk tonu.</dd>
</dl>
```

Bu örnek özellikle şu yapıyı öğretir:

```text
bir terim
→ bir açıklama

başka bir terim
→ iki açıklama
```

# Üç liste türünü karşılaştıralım

| Liste türü | Ana öğe | Alt öğeler | Kullanım |
| --- | --- | --- | --- |
| Sırasız liste | `<ul>` | `<li>` | Sıranın önemli olmadığı öğeler |
| Sıralı liste | `<ol>` | `<li>` | Sıranın önemli olduğu öğeler |
| Açıklama listesi | `<dl>` | `<dt>`, `<dd>` | Terim–açıklama / ad–değer ilişkileri |

Kısa karar ağacı:

```text
Bir grup öğem var
      ↓
Sıra önemli mi?
      ├─ Hayır → <ul>
      └─ Evet  → <ol>

Terim ile açıklama/değer ilişkisi mi var?
      └─ Evet → <dl>
```

# Liste yapılarında sık yapılan hatalar

## `<li>` öğelerini listeden bağımsız kullanmak

Yanlış:

```html
<li>HTML</li>
<li>CSS</li>
```

Daha doğru:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

`<li>` normalde `<ul>`, `<ol>` veya uygun liste bağlamı içinde kullanılmalıdır.

# Liste öğelerini `<br>` ile ayırmak

Zayıf:

```html
HTML<br>
CSS<br>
JavaScript
```

Bu yalnızca görsel satır kırılması oluşturur.

Daha semantik:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

# Sırf numara istendiği için `<ol>` kullanmak

Örneğin ürün özellikleri:

```text
1. 16 GB RAM
2. 512 GB SSD
3. Wi-Fi 6
```

aslında sıraya bağlı değilse `<ul>` daha doğru olabilir.

Numaralı görünüm gerekiyorsa CSS kullanılabilir.

Semantik karar:

```text
sıra anlamlı mı?
```

sorusuna göre verilmelidir.

# Tarif adımlarında `<ul>` kullanmak

Tarif adımlarında sıra genellikle önemlidir.

Bu nedenle:

```html
<ul>
```

yerine:

```html
<ol>
```

daha anlamlıdır.

# Nested list'i yanlış yere yerleştirmek

Yanlış:

```html
<ul>
  <li>Ürünler</li>

  <ul>
    <li>Telefonlar</li>
  </ul>
</ul>
```

Daha doğru:

```html
<ul>
  <li>
    Ürünler
    <ul>
      <li>Telefonlar</li>
    </ul>
  </li>
</ul>
```

Alt liste ilişkili üst `<li>` öğesinin içine yerleştirilir.

# Description list'i sıradan liste yerine kullanmak

Örneğin:

```text
elma
armut
muz
```

yalnızca üç meyve adıdır.

Bunlar arasında terim–açıklama ilişkisi yoksa:

```html
<dl>
```

yerine:

```html
<ul>
```

daha uygundur.

# Liste semantiği ve erişilebilirlik

Doğru liste markup'ı yardımcı teknolojiler açısından önemlidir.

Bir ekran okuyucu:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

gibi bir yapıyı liste olarak tanıyabilir.

Kullanıcıya örneğin:

```text
Liste, 3 öğe.
```

gibi bilgi verebilir.

Bu:

```html
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
```

yapısında mümkün değildir çünkü HTML açısından bunlar üç bağımsız paragraftır.

Bu nedenle liste semantiği:

```text
öğelerin birbirine ait olduğunu
```

makine tarafından anlaşılır hale getirir.

# CSS ile listelerin görünümünü değiştirme

HTML listeleri varsayılan olarak:

- Bullet,
- Numara,
- Girinti

gibi tarayıcı stilleriyle gelir.

Ancak bunlar değiştirilebilir.

Örneğin:

```css
ul {
  list-style-type: square;
}
```

veya navigasyonda:

```css
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
}
```

Böylece HTML:

```text
liste
```

semantiğini korurken tasarım tamamen farklı olabilir.

Liste stilleri ileride MDN'nin:

[Styling lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_lists)

eğitiminde daha ayrıntılı ele alınır.

# Küçük uygulama: Ders çalışma planı

Aşağıdaki içerik için doğru liste türlerini seçelim.

```text
Bu hafta öğrenilecek konular:
HTML
CSS
JavaScript

Çalışma sırası:
HTML temellerini bitir
CSS temellerini bitir
JavaScript'e başla

Terimler:
HTML — Web sayfasının yapısı
CSS — Web sayfasının görünümü
JavaScript — Web sayfasının davranışı
```

Uygun HTML:

```html
<h2>Bu hafta öğrenilecek konular</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>Çalışma sırası</h2>

<ol>
  <li>HTML temellerini bitir.</li>
  <li>CSS temellerini bitir.</li>
  <li>JavaScript'e başla.</li>
</ol>

<h2>Terimler</h2>

<dl>
  <dt>HTML</dt>
  <dd>Web sayfasının yapısını ve anlamını tanımlar.</dd>

  <dt>CSS</dt>
  <dd>Web sayfasının görünümünü ve layout'unu kontrol eder.</dd>

  <dt>JavaScript</dt>
  <dd>Web sayfasına programlanabilir davranış kazandırır.</dd>
</dl>
```

Aynı sayfada üç liste türünü doğru semantik bağlamda kullanmış olduk.

# Pratik karar kontrol listesi

Liste oluştururken kendinize şu soruları sorun:

```text
[ ] Bu içerik gerçekten bir grup ilgili öğe mi?
[ ] Öğelerin sırası anlam açısından önemli mi?
[ ] Terim–açıklama veya ad–değer ilişkisi var mı?
[ ] Alt öğeler belirli bir üst öğeye mi bağlı?
[ ] Listeyi yalnızca görünüm nedeniyle mi seçiyorum?
```

Sonuç:

```text
sıra önemsiz
→ <ul>

sıra önemli
→ <ol>

terim–açıklama
→ <dl>

alt liste
→ ilgili <li> içinde nested list
```

# Özet

Bu bölümde HTML'in üç temel liste yapısını öğrendiniz: **sırasız listeler (`<ul>`)**, **sıralı listeler (`<ol>`)** ve **açıklama listeleri (`<dl>`)**. Her liste türünün amacı farklıdır ve hangi öğeyi kullanacağınız görsel tercihten çok içeriğin semantik anlamına göre belirlenmelidir.

`<ul>` öğesi, maddelerin hangi sırada yer aldığının önemli olmadığı listeler için kullanılır. Alışveriş listeleri, özellik listeleri ve navigasyon menüleri buna örnektir. Liste içindeki her bir madde `<li>` öğesiyle işaretlenir. Tarayıcı bu listeleri varsayılan olarak madde işaretleriyle gösterebilir, fakat bu görünüm CSS ile değiştirilebilir.

`<ol>` ise maddelerin sırasının anlam taşıdığı durumlar için uygundur. Tarif adımları, kurulum yönergeleri ve yol tarifleri gibi süreçlerde öğelerin yerini değiştirmek sonucu etkileyebileceğinden sıralı liste semantiği kullanılır. `<ul>` ve `<ol>` aynı `<li>` yapısını kullanır; temel fark listenin sırasının anlamlı olup olmamasıdır.

Humus tarifi alıştırması, başlık, paragraf ve liste yapılarını birlikte kullanarak gerçek bir metni semantik HTML'e dönüştürme pratiği sağlar. Bu tür alıştırmalarda önce içeriğin ne olduğunu belirlemek, ardından uygun HTML öğesini seçmek önemlidir.

Listeler başka listelerin içine de yerleştirilebilir. **Nested list** kullanırken alt listeyi ilişkili `<li>` öğesinin içine yerleştirmek gerekir. Bu yapı menüler, içindekiler bölümleri, adımların alt seçenekleri ve hiyerarşik bilgi yapılarında sık kullanılır.

`<dl>` ile oluşturulan açıklama listeleri ise sıradan madde gruplarından farklıdır. Burada `<dt>` bir terimi veya adı, `<dd>` ise ona ait açıklama veya değeri temsil eder. Bir terimin birden fazla açıklaması bulunabilir. Bu yapı sözlükler, soru–cevap bölümleri, metadata gösterimleri ve ürün özellikleri gibi ad–değer ilişkilerinde kullanılabilir.

Doğru liste öğelerini seçmek erişilebilirliği de geliştirir. Ekran okuyucular bir listeyi ve kaç öğesi olduğunu anlayabilir, kullanıcıya bu yapıyı bildirebilir ve içerikte gezinmeyi kolaylaştırabilir. Görünüm ise her zaman CSS ile değiştirilebilir; bir navigasyon menüsü HTML açısından hâlâ `<ul>` olabilirken ekranda yatay bir menü olarak gösterilebilir.

Bu bölümün temel ilkesi şudur:

```text
Listeyi nasıl göründüğüne göre değil,
öğeler arasındaki ilişkiye göre seçin.
```

Bir sonraki adımda bu temel HTML metin bilgilerinizi MDN'nin **HTML text basics** beceri testleriyle kontrol edebilirsiniz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Lists”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists) sayfasının bölüm sırası, öğrenme hedefleri ve alıştırma akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak alıştırmaları

- [text-start.html — başlangıç humus tarifi](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)
- [text-complete.html — tamamlanmış örnek](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html)

### İlgili bağlantılar

- [Önceki: Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Test your skills — HTML text basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics)
- [`<ul>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul)
- [`<ol>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ol)
- [`<li>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li)
- [`<dl>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl)
- [`<dt>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dt)
- [`<dd>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dd)
- [Styling lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_lists)
