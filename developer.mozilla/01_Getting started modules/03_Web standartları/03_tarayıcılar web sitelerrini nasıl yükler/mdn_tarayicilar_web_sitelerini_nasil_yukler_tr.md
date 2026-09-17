# Tarayıcılar Web Sitelerini Nasıl Yükler?

> **Kaynak:** [MDN Web Docs — How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini, temel örneklerini ve görsel akışını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 2 Ekim 2025

Önceki bölümde bir web sayfasını oluşturan HTML, CSS, JavaScript ve medya dosyalarının internet üzerinden tarayıcıya nasıl ulaştığını gördük. Bu bölümde bir sonraki aşamaya odaklanacağız: Tarayıcı bu dosyaları aldıktan sonra onları nasıl bir araya getirip kullanıcıya görünen ve etkileşim kurulabilen web sayfasına dönüştürür?

Bu işleme genel olarak **rendering (işleme / ekrana çizme)** denir.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web tarayıcılarına ve temel web teknolojilerine genel düzeyde aşina olmak. |
| **Öğrenme çıktıları:** | • HTTP yanıtlarında tarayıcıya hangi tür dosyaların dönebileceğini anlamak.<br>• Tarayıcının HTML, CSS ve JavaScript dosyalarını bir araya getirerek web sayfasını nasıl oluşturduğunu yüksek seviyede kavramak.<br>• DOM, render tree, layout ve paint kavramlarını tanımak.<br>• Accessibility tree'nin rolünü anlamak.<br>• Tarayıcının neden hem zorlayıcı hem de güçlü bir programlama ortamı olduğunu açıklayabilmek. |

## Bu makalede

- [HTTP yanıtlarında hangi dosyalar döner?](#http-yanıtlarında-hangi-dosyalar-döner)
- [Web sayfası render etme](#web-sayfası-render-etme)
- [HTML'in işlenmesi](#htmlin-işlenmesi)
- [CSS'in ayrıştırılması ve sayfanın render edilmesi](#cssin-ayrıştırılması-ve-sayfanın-render-edilmesi)
- [JavaScript'in işlenmesi](#javascriptin-işlenmesi)
- [Başka hangi render adımları vardır?](#başka-hangi-render-adımları-vardır)
- [Tarayıcı: zorlayıcı ve aynı zamanda harika bir programlama ortamı](#tarayıcı-zorlayıcı-ve-aynı-zamanda-harika-bir-programlama-ortamı)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## HTTP yanıtlarında hangi dosyalar döner?

Bir web sayfası istendiğinde tarayıcı genellikle tek bir dosya almaz. İlk HTML dosyası geldikten sonra başka kaynaklar da istenir.

Yaygın dosya türleri şunlardır:

### HTML dosyaları

HTML web sayfasının:

- İçeriğini,
- Yapısını,
- Anlamsal bölümlerini

tanımlar.

Örneğin:

```html
<h1>Web teknolojileri</h1>
<p>Bu sayfa HTML, CSS ve JavaScript kullanır.</p>
```

### CSS dosyaları

CSS sayfanın:

- Renklerini,
- Yazı tiplerini,
- Boyutlarını,
- Boşluklarını,
- Düzenini

tanımlar.

Örneğin:

```css
h1 {
  color: darkblue;
}
```

### JavaScript dosyaları

JavaScript sayfanın etkileşimli davranışlarını tanımlar.

Örneğin:

```js
button.addEventListener("click", () => {
  console.log("Düğmeye tıklandı");
});
```

### Medya dosyaları

Tarayıcılar birçok medya türünü doğrudan gösterebilir veya oynatabilir.

Örnekler:

- Görseller,
- Videolar,
- Ses dosyaları,
- SVG dosyaları,
- PDF belgeleri.

### Tarayıcının doğrudan işleyemediği dosyalar

Bazı dosya türlerini tarayıcı yerel olarak işleyemez.

Örneğin:

- Word belgeleri,
- Pages belgeleri,
- PowerPoint sunumları,
- OpenDocument/OpenOffice dosyaları.

Bu tür dosyalar çoğu zaman indirilmeye veya cihazdaki uygun bir uygulamaya açılmaya yönlendirilir.

## Web sayfası render etme

Kullanıcı:

- Bir bağlantıya tıkladığında,
- Adres çubuğuna bir URL yazdığında,
- Başka bir sayfaya yönlendirildiğinde

tarayıcı web sunucusuna HTTP istekleri gönderir.

Tek bir sayfa için birden fazla istek yapılabilir:

```text
index.html
style.css
main.js
logo.png
font.woff2
...
```

Bu dosyalar HTTP yanıtlarıyla tarayıcıya geldikten sonra işlenir ve bir araya getirilir.

Bu genel sürece:

```text
rendering
```

denir.

Basitleştirilmiş akış:

```text
HTTP yanıtları
      ↓
HTML ayrıştırma
      ↓
DOM
      ↓
CSS ayrıştırma
      ↓
Stillerin uygulanması
      ↓
Layout
      ↓
Paint
      ↓
Ekrandaki web sayfası
```

JavaScript ise bu süreç sırasında DOM ve stiller üzerinde değişiklik yapabilir.

> **Not:** Gerçek tarayıcı motorlarında süreç bundan daha karmaşıktır. Birçok işlem paralel gerçekleşebilir; tarayıcıya göre ayrıntılar değişebilir. Buradaki model kavramsal bir başlangıçtır.

## HTML'in işlenmesi

Tarayıcının ilk önemli görevlerinden biri gelen HTML belgesini **parse etmek**, yani sözdizimini okuyup anlaşılır bir iç yapı haline getirmektir.

Tarayıcı HTML'i:

```text
DOM tree
```

adı verilen ağaç yapısına dönüştürür.

**DOM** açılımı:

```text
Document Object Model
```

şeklindedir.

DOM, HTML belgesinin bilgisayar belleğindeki yapısal temsilidir.

### Basit HTML örneği

Örneğin:

```html
<p>
  Kullandığımız teknolojiler:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

HTML olarak düz metin biçiminde yazılmıştır.

Tarayıcı bunu bellekte buna benzer bir DOM ağacına dönüştürür:

```text
P
├─ "Kullandığımız teknolojiler:"
├─ SPAN
│  └─ "HTML"
├─ SPAN
│  └─ "CSS"
└─ SPAN
   └─ "JavaScript"
```

Bu yapıdaki öğelere **node (düğüm)** denir.

### Parent, child ve sibling ilişkileri

DOM ağaç biçiminde olduğu için öğeler arasında ilişkiler vardır.

Yukarıdaki örnekte:

```text
P
```

düğümü bir **parent (ebeveyn)** düğümdür.

Onun çocukları:

```text
metin düğümü
SPAN
SPAN
SPAN
```

öğeleridir.

Üç `SPAN` düğümü birbirine göre:

```text
siblings
```

yani kardeş düğümlerdir.

Her `SPAN` düğümünün içinde de kendi metin düğümü bulunur.

Bu ilişkiler JavaScript açısından çok önemlidir çünkü JavaScript DOM üzerinde:

- Öğeleri bulabilir,
- Yeni düğümler ekleyebilir,
- Düğümleri silebilir,
- Metni değiştirebilir,
- Öznitelikleri güncelleyebilir.

### HTML yeni HTTP istekleri başlatabilir

Tarayıcı HTML'i ayrıştırırken bazı öğeler başka kaynaklara referans verdiği için yeni HTTP istekleri oluşturur.

#### `<link>`

Örneğin:

```html
<link rel="stylesheet" href="styles/main.css" />
```

tarayıcıya yeni bir CSS dosyası indirmesi gerektiğini söyler.

#### `<script>`

```html
<script src="scripts/main.js"></script>
```

JavaScript dosyasının alınmasını sağlar.

#### `<img>`

```html
<img src="images/logo.png" alt="Site logosu" />
```

görsel kaynağı için HTTP isteği oluşturur.

Benzer biçimde:

```html
<video>
<audio>
```

öğeleri de harici medya dosyaları isteyebilir.

Bu nedenle ilk HTML dosyası çoğu zaman yalnızca başlangıç noktasıdır.

Basitleştirilmiş:

```text
index.html
   ↓
HTML ayrıştırılır
   ├─ main.css iste
   ├─ main.js iste
   ├─ logo.png iste
   └─ font.woff2 iste
```

## CSS'in ayrıştırılması ve sayfanın render edilmesi

HTML işlenirken CSS kaynakları da alınır ve tarayıcı tarafından parse edilir.

Tarayıcının temel görevi:

> Hangi CSS kuralları hangi DOM düğümlerine uygulanmalı?

sorusunu çözmektir.

Örneğin DOM içinde üç `span` öğesi olduğunu düşünelim:

```html
<p>
  Kullandığımız teknolojiler:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Ve CSS:

```css
span {
  border: 1px solid #222;
  background-color: lightgreen;
}
```

şeklinde olsun.

Tarayıcı `span` seçicisinin DOM'daki üç `SPAN` düğümünü hedeflediğini belirler ve ilgili stilleri bu düğümlere uygular.

### 1. CSS'in parse edilmesi

Tarayıcı:

- Harici CSS dosyalarını,
- `<style>` içindeki CSS'i,
- Gerektiğinde öğelerin inline stillerini

okur.

CSS seçicilerini DOM düğümleriyle eşleştirir.

Örneğin:

```css
span {
  background-color: lightgreen;
}
```

kuralı:

```text
SPAN
SPAN
SPAN
```

düğümlerine uygulanır.

### 2. Render tree

DOM'daki içerik ve hesaplanan CSS stilleri kullanılarak görsel olarak çizilecek yapı belirlenir.

Bu kavramsal yapı:

```text
render tree
```

olarak adlandırılır.

DOM ve render tree aynı şey değildir.

DOM:

```text
Belgenin yapısal temsili
```

iken render tree:

```text
Ekrana çizilecek öğelerin görsel temsili
```

olarak düşünülebilir.

Örneğin CSS ile:

```css
.element {
  display: none;
}
```

yapılan bir öğe DOM'da bulunabilir; ancak görünür olmadığı için render tree içindeki davranışı farklı olabilir.

### 3. Layout

Tarayıcı daha sonra öğelerin ekranda tam olarak nerede ve ne büyüklükte bulunacağını hesaplar.

Bu aşamaya genellikle:

```text
layout
```

denir.

Hesaplanan bilgiler örneğin:

```text
genişlik
yükseklik
x konumu
y konumu
margin
padding
```

gibi değerleri içerir.

Örneğin:

```css
.card {
  width: 300px;
  padding: 20px;
  margin: 10px;
}
```

tarayıcının öğenin toplam boyutunu ve diğer öğelere göre konumunu hesaplamasını gerektirir.

### 4. Painting

Layout hesaplandıktan sonra tarayıcı görsel sonucu ekrana çizer.

Bu aşama:

```text
paint
```

veya:

```text
painting
```

olarak adlandırılır.

Tarayıcı burada:

- Metinleri,
- Arka plan renklerini,
- Kenarlıkları,
- Gölgeleri,
- Görselleri

ekrandaki piksele dönüştürür.

### Rendering süreci diyagramı

Kaynak MDN sayfasındaki rendering diyagramı:

![Tarayıcı rendering süreci: HTML'den DOM'a, CSS ile render tree'ye, layout ve paint aşamalarına geçiş](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites/rendering.svg)

Süreci kavramsal olarak şöyle düşünebilirsiniz:

```text
HTML
 ↓ parse
DOM
 ↓
CSS kuralları eşleştirilir
 ↓
Render tree
 ↓
Layout
 ↓
Paint
 ↓
Ekran
```

### Örneğin görünümü

CSS kuralımız:

```css
span {
  border: 1px solid #222;
  background-color: lightgreen;
}
```

olduğunda tarayıcı üç `span` öğesine de bu stilin uygulanması gerektiğini belirler.

Kavramsal sonuç:

```text
Kullandığımız teknolojiler:
[HTML] [CSS] [JavaScript]
```

Buradaki üç kutunun:

- Arka planı açık yeşil,
- Kenarlığı koyu

olarak çizilir.

## JavaScript'in işlenmesi

JavaScript de HTML içinde doğrudan bulunabilir veya harici `.js` dosyalarından yüklenebilir.

Tarayıcı JavaScript'i:

- Parse eder,
- Yorumlar/derler,
- Çalıştırır.

JavaScript'in önemli özelliklerinden biri, sayfa render işlemini etkileyebilmesidir.

Örneğin JavaScript:

- DOM'a yeni öğeler ekleyebilir,
- Var olan öğeleri silebilir,
- Metinleri değiştirebilir,
- CSS sınıfları ekleyebilir,
- Element boyutlarını değiştirebilir.

Bu nedenle JavaScript'in çalışması ile rendering birbirinden tamamen bağımsız değildir.

### Örnek

HTML:

```html
<p>
  Kullandığımız teknolojiler:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Şimdi JavaScript ile her `span` içindeki metni tersine çevirelim:

```js
const etiketler = document.querySelectorAll("span");

etiketler.forEach((etiket) => {
  const tersMetin = etiket.textContent.split("").reverse().join("");
  etiket.textContent = tersMetin;
});
```

Bu kod:

```text
HTML
```

metnini:

```text
LMTH
```

haline,

```text
CSS
```

metnini:

```text
SSC
```

haline,

```text
JavaScript
```

metnini de:

```text
tpircSavaJ
```

haline getirir.

### Kodun genel mantığı

İlk olarak:

```js
document.querySelectorAll("span")
```

DOM'daki tüm `span` öğelerini bulur.

Sonra:

```js
forEach()
```

her öğe üzerinde sırayla çalışır.

Şu ifade:

```js
etiket.textContent
```

öğenin metnine erişir.

Daha sonra:

```js
.split("")
.reverse()
.join("")
```

işlemleri karakter sırasını tersine çevirir.

Son olarak:

```js
etiket.textContent = tersMetin;
```

DOM'daki içeriği değiştirir.

DOM değiştiği için tarayıcının ekrandaki sonucu da güncellemesi gerekir.

Bu tür değişiklikler gerekirse:

```text
style calculation
layout
paint
```

gibi render aşamalarının yeniden çalışmasına neden olabilir.

> **Not:** JavaScript'in tam olarak ne zaman ve nasıl çalıştığı `<script>` öğesindeki `async`, `defer`, modül kullanımı ve başka faktörlere göre değişebilir. Bu detaylar ilerleyen JavaScript konularında ele alınır.

## Başka hangi render adımları vardır?

Sayfanın render edilmesi yalnızca DOM, CSS ve piksel çiziminden ibaret değildir.

Tarayıcı kullanıcıların farklı biçimlerde sayfayla etkileşim kurabilmesi için başka iç yapılar da oluşturur.

Bunlardan önemli biri:

```text
accessibility tree
```

yani **erişilebilirlik ağacı**dır.

### Accessibility tree nedir?

Accessibility tree, büyük ölçüde DOM'dan türetilen ve yardımcı teknolojilerin kullanabileceği bir yapıdır.

Örneğin:

```text
screen reader
```

kullanan bir kişi sayfayı görsel olarak okumaz.

Ekran okuyucu:

- Başlıkları,
- Bağlantıları,
- Düğmeleri,
- Form alanlarını,
- Görsellerin alternatif metinlerini

erişilebilirlik ağacı üzerinden anlayabilir.

Örneğin:

```html
<button>Gönder</button>
```

öğesi yalnızca ekranda yazı bulunan bir kutu değildir.

Erişilebilirlik açısından:

```text
Role: button
Name: Gönder
```

gibi bilgilerle temsil edilebilir.

Bu nedenle iyi HTML kullanımı yalnızca görsel yapı açısından değil, erişilebilirlik açısından da önemlidir.

Erişilebilirlik konusunu ileride MDN'nin [Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility) modülünde çok daha ayrıntılı inceleyebilirsiniz.

## Tarayıcı: zorlayıcı ve aynı zamanda harika bir programlama ortamı

Web geliştiriciler bazen tarayıcıyı zorlayıcı bir programlama ortamı olarak görür.

Bunun nedeni uygulamanızın hangi koşullarda çalışacağını tam olarak kontrol edememenizdir.

Bir masaüstü uygulaması geliştirirken belirli bir işletim sistemi veya donanım hedefleyebilirsiniz.

Web'de ise kullanıcıların ortamları çok farklı olabilir.

Örneğin kullanıcı:

- Windows, macOS, Linux, Android veya iOS kullanabilir.
- Chrome, Firefox, Safari veya Edge kullanabilir.
- Çok güçlü veya çok zayıf bir CPU'ya sahip olabilir.
- Hızlı fiber veya çok yavaş mobil bağlantı kullanabilir.
- Büyük monitör veya küçük telefon ekranı kullanabilir.
- Klavye, dokunmatik ekran veya yardımcı teknoloji kullanabilir.
- Farklı dil ve bölge ayarlarına sahip olabilir.
- Batarya tasarrufu modunda olabilir.

Bu nedenle:

```text
Benim bilgisayarımda çalışıyor.
```

bir web uygulamasının gerçekten güvenilir olduğu anlamına gelmez.

### Neden zorlayıcıdır?

Web geliştirici olarak kontrol edemediğiniz değişkenlerden bazıları:

```text
İşletim sistemi
Tarayıcı sürümü
Ekran boyutu
CPU
GPU
RAM
Batarya
Ağ bağlantısı
Dil
Konum
Giriş yöntemi
Erişilebilirlik ihtiyaçları
```

Bu yüzden web geliştirmede:

- Savunmacı kod yazmak,
- Yaygın desteklenen özellikleri tercih etmek,
- Fallback'ler hazırlamak,
- Farklı cihazlarda test etmek

önemlidir.

Bu yaklaşım önceki bölümde gördüğünüz web iyi uygulamalarıyla doğrudan ilişkilidir.

## Peki neden web harika bir programlama ortamıdır?

Tarayıcı ortamının belirsizliği dezavantaj olsa da web'in çok güçlü avantajları vardır.

### Evrensel erişim için tasarlanmıştır

Web'in temel yapısı:

- Bağlantı kurulabilir,
- Adreslenebilir,
- Paylaşılabilir,
- Farklı cihazlardan erişilebilir

olacak şekilde tasarlanmıştır.

Bir kullanıcı çoğu web içeriğine yalnızca bir URL üzerinden ulaşabilir.

### Uygulama dağıtımı çok kolaydır

Masaüstü uygulamalarında kullanıcıdan:

```text
indir
kur
izin ver
güncelle
```

gibi işlemler yapmasını istemeniz gerekebilir.

Web uygulamasında çoğu zaman:

```text
https://example.com
```

adresini göndermeniz yeterlidir.

Kullanıcı bağlantıyı açar ve uygulamayı kullanmaya başlayabilir.

### Güncelleme dağıtmak kolaydır

Bir web uygulamasının yeni sürümünü sunucuya yüklediğinizde kullanıcı çoğu zaman:

```text
sayfayı yenile
```

işleminden sonra yeni sürümü görür.

Her kullanıcıya ayrı ayrı yeni bir kurulum paketi göndermek gerekmez.

### Web topluluğu büyüktür

Web geliştirme çok büyük bir geliştirici topluluğuna sahiptir.

Yardım bulabileceğiniz kaynaklardan bazıları:

- MDN Web Docs,
- Stack Overflow,
- GitHub,
- Web standart kuruluşlarının belgeleri,
- Bloglar,
- Forumlar,
- Konferanslar,
- Açık kaynak projeleri.

Bu büyük ekosistem yeni teknolojileri öğrenmeyi ve karşılaşılan sorunlara çözüm bulmayı kolaylaştırır.

## Render sürecini tek akışta görelim

Bir web sayfası için süreci baştan sona sadeleştirirsek:

```text
1. Tarayıcı HTML'i alır
             ↓
2. HTML parse edilir
             ↓
3. DOM tree oluşturulur
             ↓
4. HTML içindeki harici kaynaklar istenir
             ↓
5. CSS parse edilir
             ↓
6. CSS kuralları DOM öğeleriyle eşleştirilir
             ↓
7. Render tree oluşturulur
             ↓
8. Layout hesaplanır
             ↓
9. JavaScript çalışır ve DOM/stilleri değiştirebilir
             ↓
10. Gerekli layout hesapları güncellenir
             ↓
11. Paint işlemiyle içerik ekrana çizilir
             ↓
12. Accessibility tree yardımcı teknolojiler için hazırlanır
```

Gerçekte tarayıcı bu adımların bazılarını:

- Paralel,
- Parça parça,
- Birden fazla kez

çalıştırabilir.

Örneğin JavaScript DOM'u değiştirdiğinde tarayıcı yeniden layout veya paint yapmak zorunda kalabilir.

## Küçük bir uçtan uca örnek

HTML:

```html
<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <title>Render örneği</title>
    <link rel="stylesheet" href="style.css" />
    <script defer src="main.js"></script>
  </head>

  <body>
    <p>
      Teknolojiler:
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </p>
  </body>
</html>
```

CSS:

```css
span {
  border: 1px solid #222;
  background-color: lightgreen;
  padding: 4px;
}
```

JavaScript:

```js
const etiketler = document.querySelectorAll("span");

etiketler.forEach((etiket) => {
  etiket.addEventListener("click", () => {
    etiket.hidden = true;
  });
});
```

Tarayıcı açısından yüksek seviyeli süreç:

```text
index.html alınır
       ↓
DOM oluşturulur
       ↓
style.css istenir ve parse edilir
       ↓
main.js istenir
       ↓
span öğelerine CSS uygulanır
       ↓
layout hesaplanır
       ↓
sayfa çizilir
       ↓
kullanıcı span'a tıklar
       ↓
JavaScript DOM durumunu değiştirir
       ↓
render işlemi güncellenir
```

Bu örnek HTML, CSS ve JavaScript'in birbirinden ayrı teknolojiler olmasına rağmen tarayıcı içinde tek bir kullanıcı deneyimi oluşturmak üzere birlikte çalıştığını gösterir.

## Ayrıca bakınız

### Tarayıcı hatalarını raporlama

Bir özellik belirli bir tarayıcıda beklediğiniz gibi çalışmıyorsa bunun nedeni kendi kodunuz veya gerçek bir tarayıcı hatası olabilir.

MDN'nin şu rehberi bu ayrımı araştırmaya ve gerektiğinde hata raporu oluşturmaya yardımcı olur:

[When and how to file bugs with browsers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Report_browsers_bugs)

### Accessibility

Tarayıcının accessibility tree oluşturması ve erişilebilir web geliştirme hakkında daha fazla bilgi için:

[Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)

### DOM

DOM hakkında daha ayrıntılı bilgi için:

[Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Özet

Bu bölümde bir web tarayıcısının HTTP yanıtlarıyla aldığı dosyaları nasıl bir araya getirip kullanıcıya görünen web sayfasına dönüştürdüğünü öğrendiniz. Bir sayfa yalnızca HTML'den oluşmaz; tarayıcı HTML, CSS, JavaScript, görseller, ses/video dosyaları, fontlar ve başka birçok kaynağı ayrı HTTP istekleriyle alabilir. Bazı dosya türleri tarayıcı tarafından doğrudan görüntülenirken desteklenmeyen belge türleri cihazdaki başka uygulamalara devredilebilir.

Tarayıcı önce HTML'i parse ederek **DOM tree** oluşturur. DOM, belgedeki öğeleri, öznitelikleri ve metinleri parent–child ilişkileri içeren bir ağaç biçiminde bellekte temsil eder. HTML içinde `<link>`, `<script>`, `<img>`, `<video>` ve `<audio>` gibi dış kaynaklara referans veren öğeler bulunduğunda tarayıcı bu kaynaklar için ek HTTP istekleri başlatır.

CSS dosyaları geldikten sonra tarayıcı CSS kurallarını parse eder ve hangi kuralların hangi DOM düğümlerine uygulanacağını belirler. Ardından görsel olarak çizilecek öğeleri temsil eden **render tree** oluşturulur, öğelerin boyut ve konumları **layout** aşamasında hesaplanır ve sonuç **paint** aşamasında ekrana çizilir. Bu süreç web sayfasının kullanıcı tarafından görülen görsel halini üretir.

JavaScript bu sürece dinamik olarak müdahale edebilir. JavaScript DOM düğümlerini ekleyebilir, silebilir veya değiştirebilir; CSS sınıflarını güncelleyebilir ve içerikleri yeniden düzenleyebilir. Bu tür değişiklikler tarayıcının layout veya paint işlemlerini tekrar yapmasına yol açabilir. Tarayıcı ayrıca ekran okuyucular gibi yardımcı teknolojilerin kullanabilmesi için DOM'dan bir **accessibility tree** üretir.

Son olarak tarayıcı ortamının web geliştirici için hem zorlayıcı hem de çok güçlü olduğunu gördünüz. Kullanıcıların işletim sistemi, tarayıcı, ekran boyutu, ağ hızı, donanımı ve erişilebilirlik ihtiyaçları önceden kesin olarak bilinemez. Bu nedenle web geliştiricileri savunmacı ve standartlara uygun kod yazmalıdır. Buna karşılık web; URL ile anında dağıtım, merkezi güncelleme, geniş erişilebilirlik ve büyük bir geliştirici topluluğu gibi başka platformlarda elde edilmesi daha zor olan önemli avantajlar sunar.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“How browsers load websites”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) sayfasının konu sırası ve öğrenme hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görsel

- [Rendering process overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites/rendering.svg)

### İlgili kaynaklar

- [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)
- [When and how to file bugs with browsers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Report_browsers_bugs)
- [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
