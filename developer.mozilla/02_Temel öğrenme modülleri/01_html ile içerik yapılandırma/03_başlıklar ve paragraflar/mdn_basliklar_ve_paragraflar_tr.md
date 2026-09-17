# Başlıklar ve Paragraflar

> **Kaynak:** [MDN Web Docs — Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, temel örneklerini, alıştırmasını ve görsel konumlarını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 25 Ağustos 2026

HTML'in temel görevlerinden biri metne **yapı** kazandırmaktır. Bir tarayıcının belgedeki hangi metnin başlık, hangisinin paragraf olduğunu anlayabilmesi için içeriğin uygun HTML öğeleriyle işaretlenmesi gerekir.

Bu bölüm, HTML'de başlık ve paragraf öğelerinin nasıl kullanıldığını, başlık seviyelerinin mantıklı bir hiyerarşi oluşturacak şekilde nasıl düzenleneceğini ve semantik HTML'in neden önemli olduğunu açıklar.

|  |  |
| --- | --- |
| **Ön koşullar:** | [Temel HTML Sözdizimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) bölümünde ele alınan temel HTML bilgisi. |
| **Öğrenme çıktıları:** | • Başlıklar ve bu başlıkların altında yer alan içeriklerle iyi bir belge yapısı oluşturmak.<br>• Sunuma yönelik HTML yerine semantik HTML kullanmanın neden önemli olduğunu anlamak.<br>• Başlık seviyelerini mantıklı sırada kullanmak; yalnızca belirli bir yazı boyutu elde etmek için seviye atlamamak.<br>• Başlık kullanımının SEO açısından sağladığı faydaları anlamak.<br>• Ekran okuyucu gibi yardımcı teknolojilerin başlıkları içerikte gezinmek için nasıl kullandığını kavramak. |

## Bu makalede

- [Başlıklar ve paragraflar](#başlıklar-ve-paragraflar)
- [Yapısal hiyerarşi oluşturma](#yapısal-hiyerarşi-oluşturma)
- [Neden yapıya ihtiyacımız var?](#neden-yapıya-ihtiyacımız-var)
- [İçeriğe yapı kazandırma](#içeriğe-yapı-kazandırma)
- [Neden semantiğe ihtiyacımız var?](#neden-semantiğe-ihtiyacımız-var)
- [Özet](#özet)

# Başlıklar ve paragraflar

Hikâye, gazete, ders kitabı veya dergi gibi yapılandırılmış metinlerin çoğu **başlıklar** ve **paragraflardan** oluşur.

Kaynak MDN sayfasındaki gazete örneği:

![Üst düzey başlık, alt başlıklar ve paragrafların kullanıldığı eski bir gazete ön sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs/newspaper_small.jpg)

Yapılandırılmış içerik, okuyucunun metni daha rahat taramasını ve anlamasını sağlar.

HTML'de her paragraf bir `<p>` öğesi içine alınır:

```html
<p>Ben bir paragrafım.</p>
```

Her başlık ise uygun heading öğesiyle işaretlenir:

```html
<h1>Ben hikâyenin başlığıyım.</h1>
```

HTML'de altı başlık seviyesi vardır:

```html
<h1>Birinci seviye başlık</h1>
<h2>İkinci seviye başlık</h2>
<h3>Üçüncü seviye başlık</h3>
<h4>Dördüncü seviye başlık</h4>
<h5>Beşinci seviye başlık</h5>
<h6>Altıncı seviye başlık</h6>
```

Genel anlamları:

```text
<h1>
→ belgenin veya ana içeriğin en üst düzey başlığı

<h2>
→ <h1> altındaki ana bölümler

<h3>
→ <h2> altındaki alt bölümler

<h4>–<h6>
→ daha derin alt seviyeler
```

Burada önemli olan başlıkların görsel boyutu değil, belge içindeki **yapısal seviyeleridir**.

# Yapısal hiyerarşi oluşturma

Bir hikâye veya uzun makale için şu yapıyı düşünün:

```html
<h1>Sıkıcı Bir Gece</h1>

<p>Yazan: Chris Mills</p>

<h2>Bölüm 1: Karanlık gece</h2>

<p>
  Karanlık bir geceydi. Bir yerlerde bir baykuş ötüyordu.
  Yağmur şiddetle yağıyordu...
</p>

<h2>Bölüm 2: Sonsuz sessizlik</h2>

<p>
  Kahramanımız gölgelerin arasındaki figür karşısında
  neredeyse tek kelime edemiyordu...
</p>

<h3>Hayalet konuşuyor</h3>

<p>
  Saatler geçtikten sonra hayalet birden doğruldu ve konuşmaya başladı...
</p>
```

Buradaki hiyerarşi:

```text
<h1> Hikâyenin başlığı
│
├── <h2> Bölüm 1
│
└── <h2> Bölüm 2
     │
     └── <h3> Bölüm 2 içindeki alt bölüm
```

şeklindedir.

HTML hangi heading seviyesinin hangi içeriği temsil edeceğine sizin karar vermenize izin verir. Önemli olan kurduğunuz hiyerarşinin **mantıklı ve tutarlı** olmasıdır.

## Sayfada tercihen tek bir `<h1>` kullanın

Genel olarak bir sayfada tek bir ana `<h1>` kullanmak iyi bir yaklaşımdır.

Örneğin:

```html
<h1>Web Geliştirme Rehberi</h1>
```

ve diğer bölümleri:

```html
<h2>HTML</h2>
<h2>CSS</h2>
<h2>JavaScript</h2>
```

ile düzenlemek mantıklıdır.

Bu model:

```text
tek ana konu
+
ona bağlı alt bölümler
```

oluşturur.

## Başlık seviyelerini doğru sırayla kullanın

Başlık seviyeleri içerik ilişkisini ifade etmelidir.

Mantıklı:

```html
<h1>Hayvanlar</h1>
<h2>Memeliler</h2>
<h3>Kediler</h3>
```

Mantıksız:

```html
<h1>Hayvanlar</h1>
<h3>Memeliler</h3>
<h2>Kediler</h2>
```

İkinci örnekte hiyerarşi tersine dönmektedir.

Benzer biçimde:

```html
<h1>Ana başlık</h1>
<h4>Alt başlık</h4>
```

şeklinde seviyeleri sebepsiz yere atlamak da önerilmez.

Başlık daha küçük görünsün istiyorsanız bunu heading seviyesini değiştirerek değil, **CSS ile** yapmalısınız.

Örneğin:

```css
h2 {
  font-size: 1.25rem;
}
```

## Çok derin başlık hiyerarşilerinden kaçının

HTML altı heading seviyesi sunar ancak her sayfada altı seviyeyi birden kullanmanız gerekmez.

Mümkünse belge yapısını:

```text
<h1>
<h2>
<h3>
```

gibi birkaç seviyede tutmak daha kolay anlaşılır.

Örneğin yapı:

```text
h1
 └─ h2
     └─ h3
         └─ h4
             └─ h5
                 └─ h6
```

şeklinde çok derine gidiyorsa içeriğinizi birkaç ayrı sayfaya bölmek daha anlaşılır olabilir.

# Neden yapıya ihtiyacımız var?

Yalnızca düz metin ve satır sonları kullanmanın neden yeterli olmadığını bir örnek üzerinden düşünelim.

Kaynak MDN örneği:

[text-start.html — GitHub](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html)

Bu dosyada humus tarifi bulunur ancak metin:

- Başlık,
- Paragraf,
- Liste

gibi HTML öğeleriyle yapılandırılmamıştır.

Tarayıcıdaki sonuç:

![HTML öğeleriyle yapılandırılmadığı için tek bir büyük metin bloğu halinde görünen humus tarifi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs/screen_shot_2017-03-29_at_09.20.35.png)

Canlı örnek:

[Humus tarifi örneğini aç](https://mdn.github.io/learning-area/html/introduction-to-html/html-text-formatting/text-start.html)

Tarayıcı Enter/Return ile eklediğiniz normal satır sonlarını belge yapısı olarak yorumlamaz. Bir metnin başlık veya paragraf olduğunu anlayabilmesi için semantik HTML öğeleri gerekir.

Örneğin:

```text
Hızlı humus tarifi

Bu tarif hızlı ve lezzetli bir humus yapar...

Malzemeler

1 kutu nohut
175 g tahin
...
```

yalnızca düz metin halinde yazılmışsa tarayıcı açısından hangi satırın hangi görevi üstlendiği açık değildir.

HTML ile:

```html
<h1>Hızlı humus tarifi</h1>

<p>
  Bu tarif hızlı ve lezzetli bir humus yapar...
</p>

<h2>Malzemeler</h2>
```

şeklinde yapılandırıldığında içerik anlam kazanmaya başlar.

## Kullanıcılar web sayfalarını tarar

İnsanlar çoğu web sayfasını baştan sona kelime kelime okumaz.

Genellikle:

```text
sayfayı aç
   ↓
başlıklara hızlıca göz at
   ↓
ilgili bölümü bul
   ↓
o kısmı oku
```

şeklinde davranırlar.

Başlıklar bu nedenle okuyucu için bir **yol haritası** görevi görür.

Eğer sayfada belirgin bir yapı yoksa kullanıcı aradığı bilgiyi bulmakta zorlanabilir ve sayfadan ayrılabilir.

## Başlıkların SEO açısından önemi vardır

Arama motorları bir sayfayı analiz ederken başlıklardaki kelimeleri içeriğin yapısını anlamak için kullanabilir.

Örneğin bir sayfada:

```html
<h1>Yeni başlayanlar için HTML rehberi</h1>
```

bulunması, sayfanın ana konusunun HTML eğitimi olduğuna ilişkin açık semantik bilgi sağlar.

Başlık kullanmamak veya başlık olması gereken metinleri yalnızca CSS ile büyük göstermek, arama motorlarına sağlanan yapısal bilgiyi azaltır.

> **Not:** SEO yalnızca heading kullanımından ibaret değildir. İçerik kalitesi, bağlantılar, performans, mobil uyumluluk ve birçok başka faktör de önemlidir.

## Ekran okuyucular başlıkları gezinme noktası olarak kullanır

Ciddi görme engeli bulunan kullanıcılar web sayfalarını **screen reader (ekran okuyucu)** gibi yardımcı teknolojilerle kullanabilir.

Ekran okuyucular sayfadaki heading öğelerinden bir belge ana hattı çıkarabilir.

Kullanıcı örneğin:

```text
H1: HTML öğrenme
H2: Başlıklar
H2: Paragraflar
H2: Semantik HTML
```

gibi bir başlık listesi arasında hızla gezinebilir.

Bu, görsel kullanıcıların sayfayı gözleriyle hızlıca taramasına benzer.

Başlıklar yoksa kullanıcının aradığı bölümü bulması için sayfanın çok daha büyük kısmını sırayla dinlemesi gerekebilir.

Bu nedenle heading yapısı:

```text
yalnızca görünüm
```

değil:

```text
erişilebilir navigasyon
```

işlevi de sağlar.

## CSS ve JavaScript'in hedefleyebileceği öğeler gerekir

Yapısal HTML, stil ve davranış eklemek için de gereklidir.

Örneğin:

```html
<h2>Malzemeler</h2>
```

olduğunda CSS:

```css
h2 {
  color: darkgreen;
}
```

ile başlıkları hedefleyebilir.

JavaScript de:

```js
const headings = document.querySelectorAll("h2");
```

ile bu öğeleri seçebilir.

Yani HTML yapısı:

```text
anlam
+
erişilebilirlik
+
SEO
+
CSS hedefleme
+
JavaScript hedefleme
```

için temel oluşturur.

# İçeriğe yapı kazandırma

Şimdi başlıkları ve paragrafları kullanarak küçük bir alıştırma yapalım.

Kaynak MDN sayfasındaki alıştırma MDN Playground içinde çalıştırılabilir.

Başlangıç metni:

```text
Favorite body parts The brain Lovely shape and color. Also does thinkin' stuff.
The feet Knobbly and ugly, but useful for getting about.
```

Amaç bu metni anlamlı HTML yapısına dönüştürmektir.

## Görevler

1. İçeriğin başındaki ana ifadeyi `<h1>` içine alın.
2. İki alt başlığı `<h2>` öğeleriyle işaretleyin.
3. Geri kalan açıklamaları `<p>` öğelerine dönüştürün.
4. Her paragrafı ilgili `<h2>` başlığının altına yerleştirin.

Önce kendiniz deneyin.

Başlangıç:

```html
Favorite body parts The brain Lovely shape and color. Also does thinkin' stuff.
The feet Knobbly and ugly, but useful for getting about.
```

## Çözüm

Doğru yapı şu şekilde olabilir:

```html
<h1>Favorite body parts</h1>

<h2>The brain</h2>

<p>Lovely shape and color. Also does thinkin' stuff.</p>

<h2>The feet</h2>

<p>Knobbly and ugly, but useful for getting about.</p>
```

Bu kodun yapısal ağacı:

```text
H1: Favorite body parts

├─ H2: The brain
│  └─ P: Lovely shape and color...

└─ H2: The feet
   └─ P: Knobbly and ugly...
```

şeklinde düşünülebilir.

## Alıştırmanın asıl amacı

Burada önemli olan metnin nasıl göründüğü değil, içerik parçaları arasındaki ilişkiyi tanımlamaktır.

Şunları belirlemiş oldunuz:

```text
Favorite body parts
→ ana konu

The brain
→ ana konunun alt bölümü

Lovely shape...
→ bu alt bölümün paragrafı

The feet
→ ikinci alt bölüm

Knobbly and ugly...
→ ikinci alt bölümün paragrafı
```

Bu, **document structure** oluşturmanın temelidir.

# Neden semantiğe ihtiyacımız var?

Semantik yalnızca HTML'e özgü bir fikir değildir.

Günlük yaşamda nesnelerin görünüşünden ve önceki deneyimlerimizden ne işe yaradıklarını anlarız.

Örneğin trafik ışığında:

```text
kırmızı
→ dur

yeşil
→ geç
```

anlamlarını bekleriz.

Eğer kırmızı `"geç"` anlamına gelseydi sistem kafa karıştırıcı hale gelirdi.

HTML'de de benzer şekilde bir öğeyi gerçek anlamına uygun kullanmamız gerekir.

# `<h1>` semantik bir öğedir

Örneğin:

```html
<h1>Bu bir üst düzey başlıktır</h1>
```

yalnızca büyük yazı oluşturmaz.

Tarayıcı ve diğer yazılımlar açısından şu anlama gelir:

```text
Bu metin sayfadaki en üst düzey heading'dir.
```

Tarayıcı varsayılan stil olarak büyük ve kalın gösterebilir.

Ancak semantik değeri görsel stilinden daha önemlidir.

Bu anlam:

- Arama motorları,
- Ekran okuyucular,
- Tarayıcı araçları,
- Geliştiriciler

tarafından kullanılabilir.

# Bir şeyi başlığa benzetmek onu başlık yapmaz

Şu örneğe bakın:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Bu bir üst düzey başlık mı?
</span>
```

Görsel olarak bu metni büyük yapabiliriz.

Ancak `<span>` kendi başına başlık anlamı taşımaz.

`<span>` genel amaçlı, satır içi bir kapsayıcıdır ve içerik için ek bir semantik rol tanımlamaz.

Bu nedenle:

```text
ekranda büyük görünmek
```

ile:

```text
gerçekten heading olmak
```

aynı değildir.

## Görsel karşılaştırma

Şu iki yapı görsel olarak birbirine benzetilebilir:

```html
<h1>HTML öğreniyorum</h1>
```

ve:

```html
<span class="fake-heading">HTML öğreniyorum</span>
```

CSS:

```css
.fake-heading {
  display: block;
  font-size: 2em;
  font-weight: bold;
}
```

İkisi kullanıcıya büyük ve kalın görünebilir.

Fakat semantik olarak:

```text
<h1>
→ heading

<span>
→ genel amaçlı öğe
```

olmaya devam eder.

Bu nedenle:

> Bir iş için uygun HTML öğesi varsa, yalnızca görünümü taklit etmek yerine o öğeyi kullanın.

# Semantik HTML'in sağladığı avantajlar

Semantik HTML'in birkaç önemli faydası vardır.

## 1. Erişilebilirlik

Yardımcı teknolojiler içeriğin rolünü anlayabilir.

Örneğin:

```html
<h2>İletişim</h2>
```

ekran okuyucu tarafından gerçek bir heading olarak algılanır.

## 2. SEO

Arama motorları içeriğin yapısını daha doğru çıkarabilir.

## 3. Tarayıcı varsayılan davranışları

Tarayıcılar semantik öğeler için yararlı varsayılan davranışlar sağlar.

## 4. Kod okunabilirliği

Şuna bakmak:

```html
<h2>Ürünler</h2>
```

şundan çok daha açıklayıcıdır:

```html
<div class="heading-two">Ürünler</div>
```

## 5. CSS olmadan da anlaşılır yapı

CSS yüklenmese bile:

```html
<h1>
<h2>
<p>
```

gibi HTML öğeleri belgeye anlaşılabilir bir temel yapı kazandırır.

# Başlık seçerken görünüşe göre karar vermeyin

Yeni başlayanların yaptığı yaygın hatalardan biri:

```text
Bu başlık çok büyük görünüyor,
o halde h3 kullanayım.
```

düşüncesidir.

Bu doğru yaklaşım değildir.

Önce:

```text
Bu içerik hiyerarşide hangi seviyede?
```

sorusunu cevaplayın.

Ardından görünümü CSS ile ayarlayın.

Örneğin semantik olarak `<h2>` doğruysa:

```html
<h2>İletişim</h2>
```

kullanın.

Boyut fazla büyükse:

```css
h2 {
  font-size: 1.2rem;
}
```

ile değiştirin.

HTML:

```text
anlamı
```

CSS:

```text
görünümü
```

kontrol etmelidir.

# Başlık hiyerarşisi için pratik kontrol

Bir sayfanın yalnızca heading'lerini çıkarıp okuduğunuzu düşünün.

Örneğin:

```text
H1 — HTML Öğrenme Rehberi
H2 — HTML nedir?
H2 — Temel öğeler
H3 — Başlıklar
H3 — Paragraflar
H2 — Sonraki adımlar
```

Bu liste tek başına mantıklı görünüyorsa heading yapınız büyük ihtimalle anlaşılırdır.

Şöyle bir liste ise sorunlu olabilir:

```text
H1 — HTML Öğrenme Rehberi
H4 — HTML nedir?
H2 — Temel öğeler
H5 — Başlıklar
H3 — Paragraflar
```

Çünkü seviyeler arasında belirgin ve mantıklı olmayan atlamalar vardır.

# Küçük bir örnek belge

Başlık ve paragraf yapısını gerçek bir mini sayfada görelim:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Kediler hakkında</title>
  </head>

  <body>
    <h1>Kediler hakkında</h1>

    <p>
      Kediler dünyanın birçok bölgesinde insanlarla birlikte yaşayan
      evcil memelilerdir.
    </p>

    <h2>Davranışları</h2>

    <p>
      Kedilerin davranışları yaşlarına, çevrelerine ve karakterlerine
      göre değişebilir.
    </p>

    <h3>Oyun davranışı</h3>

    <p>
      Birçok kedi hareket eden küçük nesnelerle oynamayı sever.
    </p>

    <h2>Beslenme</h2>

    <p>
      Kedilerin beslenme ihtiyaçları yaşam dönemlerine göre değişebilir.
    </p>
  </body>
</html>
```

Belge ana hattı:

```text
Kediler hakkında
├── Davranışları
│   └── Oyun davranışı
└── Beslenme
```

Bu hiyerarşi hem insan okuyucular hem de yazılımlar tarafından kolayca anlaşılabilir.

# Sık yapılan hatalar

## Heading seviyesini yalnızca font boyutuna göre seçmek

Yanlış yaklaşım:

```html
<h4>Ana bölüm</h4>
```

sırf `<h2>` çok büyük göründüğü için.

Doğru yaklaşım:

```html
<h2>Ana bölüm</h2>
```

ve görünümü CSS ile ayarlamak.

## Başlık yerine `<div>` veya `<span>` kullanmak

Zayıf:

```html
<div class="big-title">Ürünler</div>
```

Semantik olarak daha iyi:

```html
<h2>Ürünler</h2>
```

## Sadece `<br>` ile paragraflar oluşturmak

Zayıf:

```html
İlk paragraf.<br><br>
İkinci paragraf.
```

Daha iyi:

```html
<p>İlk paragraf.</p>

<p>İkinci paragraf.</p>
```

## Gereksiz derecede derin heading yapısı kurmak

Eğer tek sayfada çok fazla:

```text
h4
h5
h6
```

gerekiyorsa içeriğin birkaç ayrı sayfaya bölünmesi daha anlaşılır olabilir.

# Özet

Bu bölümde HTML'in temel görevlerinden birinin metne **yapısal ve semantik anlam kazandırmak** olduğunu öğrendiniz. Düz metin içindeki satır sonları bir tarayıcıya hangi bölümün başlık, hangisinin paragraf olduğunu anlatmaz. Bu nedenle paragraflar `<p>`, başlıklar ise `<h1>`–`<h6>` öğeleriyle açık biçimde işaretlenmelidir.

Heading seviyeleri belgenin hiyerarşisini temsil eder. `<h1>` en üst düzey ana başlıktır; `<h2>` onun altındaki bölümleri, `<h3>` ise bu bölümlerin alt bölümlerini temsil edebilir. Başlık seviyelerini yalnızca görsel boyut elde etmek amacıyla seçmek veya seviyeleri sebepsiz yere atlamak yerine hiyerarşiyi mantıklı biçimde kurmalısınız. Görsel boyut ve diğer stil ayrıntıları CSS'in görevidir.

İyi belge yapısı kullanıcıların bir web sayfasını hızlıca taramasını kolaylaştırır. Aynı zamanda arama motorlarının sayfanın önemli kavramlarını anlamasına ve ekran okuyucu kullanan kişilerin heading'ler arasında hızlıca gezinmesine yardımcı olur. Başlıkların bulunmadığı uzun bir içerik, özellikle yardımcı teknoloji kullanan kişiler açısından çok daha zor kullanılabilir.

Semantik HTML'in temel ilkesi bir öğeyi görünüşüne değil, **anlamına ve görevine göre** seçmektir. CSS ile `<span>` öğesini `<h1>` gibi göstermek mümkündür, ancak bu onu gerçek bir heading yapmaz. `<h1>` kullanıldığında hem görsel bir başlık elde edilir hem de arama motorlarına, ekran okuyuculara ve diğer yazılımlara metnin üst düzey başlık olduğu bilgisi aktarılır.

Bu nedenle HTML yazarken önce şu soruyu sormak yararlıdır:

```text
Bu içerik nasıl görünmeli?
```

yerine:

```text
Bu içerik yapısal olarak ne anlama geliyor?
```

Doğru semantik öğeyi seçtikten sonra görünümünü CSS ile değiştirebilirsiniz. Bu yaklaşım erişilebilir, arama motorları tarafından daha iyi anlaşılabilir ve uzun vadede daha kolay bakım yapılabilir web sayfalarının temelini oluşturur.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Headings and paragraphs”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) sayfasının bölüm sırası, öğrenme hedefleri ve alıştırma akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [newspaper_small.jpg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs/newspaper_small.jpg)
- [screen_shot_2017-03-29_at_09.20.35.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs/screen_shot_2017-03-29_at_09.20.35.png)

### İlgili bağlantılar

- [Önceki: Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
- [`<p>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)
- [Heading elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)
