# Temel Öğrenme Modülleri

> **Kaynak:** [MDN Web Docs — Core learning modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, modül listesini ve öğrenme akışını koruyan Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 29 Ekim 2025

MDN'nin **Core learning modules** bölümü, her web geliştiricinin sağlam bir temele sahip olması gereken konuları bir araya getirir.

Bu modüller tamamlandığında temel düzeyde:

- Modern en iyi uygulamaları izleyen,
- Erişilebilir,
- Kullanılabilir,
- Responsive,
- JavaScript ile etkileşimli

bir web uygulaması oluşturabilecek bilgiye sahip olmanız hedeflenir.

Ayrıca yalnızca sayfa oluşturmayı değil, kodunuzu uygun araçlarla:

- Yönetme,
- Paylaşma,
- Sürümleme,
- Yayımlama

konularında da temel bir çalışma alışkanlığı edinmeniz beklenir.

## Bu makalede

- [Ön koşullar](#ön-koşullar)
- [Modüller](#modüller)
- [Önerilen öğrenme sırası](#önerilen-öğrenme-sırası)
- [Partner video kursu](#partner-video-kursu)
- [Özet](#özet)

# Ön koşullar

Bu modüllere başlamak için zorunlu bir programlama bilgisi yoktur.

Bununla birlikte aşağıdaki konularda temel rahatlığa sahip olmanız öğrenme sürecini kolaylaştırır:

- Bilgisayar kullanımı,
- Dosya ve klasör yönetimi,
- Bir web tarayıcısı kullanma,
- Kod düzenleyici kullanma,
- Web'in genel olarak nasıl çalıştığını bilme.

Bu konular MDN'nin:

[Getting started modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started)

bölümünde ele alınır.

Özellikle daha önce hiç kod yazmadıysanız önce:

[Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

modülünü tamamlamanız yararlı olur.

Bu başlangıç modülünde:

```text
HTML
   ↓
CSS
   ↓
JavaScript
   ↓
Yayımlama
```

şeklinde web geliştirme sürecinin temel parçalarıyla tanışırsınız.

# Modüller

Core bölümü dokuz ana modülden oluşur.

# 1. HTML ile İçerik Yapılandırma

**Kaynak:**  
[Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)

Yüksek kaliteli, kullanılabilir ve erişilebilir bir web sitesi oluşturabilmek için içeriğinizi doğru **HTML semantiği** ile yapılandırmanız gerekir.

HTML yalnızca sayfaya metin koymak için kullanılmaz.

Doğru HTML:

- İçeriğin yapısını,
- İçeriğin anlamını,
- Öğeler arasındaki ilişkileri

tarayıcı ve yardımcı teknolojiler için açık hale getirir.

Bu modülde önce HTML dilinin temel yapısı ele alınır.

Daha sonra şu konulara geçilir:

- Temel HTML sözdizimi,
- Belge yapısı,
- `<head>` ve metadata,
- Başlıklar ve paragraflar,
- Metin semantiği,
- Listeler,
- Linkler,
- Görseller,
- Video ve ses,
- Tablolar,
- Formlar ve düğmeler,
- HTML hata ayıklama.

## Neden önemlidir?

Örneğin yalnızca görsel olarak büyük bir yazı oluşturmak:

```html
<div class="big-text">Haberler</div>
```

ile anlamsal başlık kullanmak:

```html
<h1>Haberler</h1>
```

aynı şey değildir.

İkinci örnek:

- Tarayıcı,
- Arama motoru,
- Ekran okuyucu

tarafından gerçek bir ana başlık olarak anlaşılır.

Bu nedenle HTML'in temel hedeflerinden biri:

```text
görünüm değil
↓
anlam + yapı
```

sağlamaktır.

# 2. CSS Biçimlendirme Temelleri

**Kaynak:**  
[CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)

CSS (**Cascading Style Sheets**) web sayfasındaki içeriğin görünümünü kontrol eder.

Örneğin CSS ile:

- Renk,
- Yazı boyutu,
- Arka plan,
- Kenarlık,
- Boşluk,
- Sütunlar,
- Animasyonlar

oluşturabilirsiniz.

Basit örnek:

```css
h1 {
  color: darkblue;
  font-size: 2rem;
}
```

Bu modül CSS'in temel sözdizimini ve çalışma modelini öğretir.

Ele alınan başlıklar arasında:

- CSS sözdizimi,
- Seçiciler,
- Cascade,
- Specificity,
- Inheritance,
- Box model,
- Değerler ve birimler,
- Background,
- Border,
- Overflow,
- Form styling

gibi konular bulunur.

## CSS'in temel mantığı

Genel yapı:

```css
selector {
  property: value;
}
```

Örneğin:

```css
p {
  color: crimson;
}
```

Burada:

```text
p
→ selector

color
→ property

crimson
→ value
```

olarak düşünülebilir.

# 3. CSS Metin Biçimlendirme

**Kaynak:**  
[CSS text styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling)

CSS temellerini öğrendikten sonra web'deki en yaygın görevlerden biri olan **metin biçimlendirmeye** geçilir.

Bu modül:

- Font seçimi,
- Yazı boyutu,
- Kalınlık,
- İtalik,
- Satır yüksekliği,
- Harf aralığı,
- Metin gölgesi,
- Özel web fontları,
- Liste biçimlendirme,
- Link biçimlendirme

gibi konuları kapsar.

Örneğin:

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1 {
  font-weight: 700;
  letter-spacing: 0.03em;
}
```

## Tipografi neden önemlidir?

Web sayfasının okunabilirliği büyük ölçüde tipografiye bağlıdır.

Yanlış seçimler:

```text
çok küçük font
+
çok kısa satır aralığı
+
yetersiz kontrast
```

okuma deneyimini ciddi biçimde bozabilir.

Bu nedenle metin biçimlendirme yalnızca estetik değil, aynı zamanda:

```text
okunabilirlik
+
kullanılabilirlik
+
erişilebilirlik
```

konusudur.

# 4. CSS Layout

**Kaynak:**  
[CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)

Önceki CSS modüllerinde tek tek kutuların nasıl biçimlendirileceğini öğrendikten sonra sıradaki soru şudur:

> Bu kutuları sayfada birbirlerine göre nasıl yerleştireceğiz?

CSS layout modülü:

- Normal document flow,
- Floats,
- Positioning,
- Flexbox,
- Grid,
- Responsive design,
- Media queries

gibi sayfa düzeni tekniklerini ele alır.

Örneğin Flexbox:

```css
.container {
  display: flex;
  gap: 1rem;
}
```

Grid:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

gibi kullanılabilir.

## Responsive design

Modern web sayfalarının:

```text
telefon
tablet
laptop
masaüstü
```

gibi farklı ekran boyutlarında kullanılabilir olması gerekir.

Bu nedenle layout modülünün önemli parçalarından biri **responsive web design** yaklaşımıdır.

Basit media query:

```css
@media (max-width: 600px) {
  .container {
    display: block;
  }
}
```

Bu tür kurallar ekran genişliğine göre tasarımın değişmesini sağlar.

# 5. JavaScript ile Dinamik Script Yazımı

**Kaynak:**  
[Dynamic scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)

JavaScript oldukça geniş bir programlama dilidir.

Çok sayıda:

- Özellik,
- Programlama yaklaşımı,
- API,
- Araç

JavaScript ekosistemi üzerinde kuruludur.

Bu Core modülünün amacı her şeyi öğretmek değil, sağlam bir temel oluşturmaktır.

Konular arasında:

- Değişkenler,
- Sayılar,
- String'ler,
- Diziler,
- Koşullar,
- Döngüler,
- Fonksiyonlar,
- Event'ler,
- Nesneler,
- DOM,
- Network request,
- JSON,
- Debugging

gibi temel başlıklar bulunur.

Örneğin:

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Tıklandı");
});
```

Bu kod:

1. Sayfadaki düğmeyi bulur.
2. `click` olayını dinler.
3. Tıklanınca fonksiyon çalıştırır.

## Amaç

Bu modülden sonra JavaScript'in:

```text
veri
+
mantık
+
DOM
+
kullanıcı etkileşimi
```

üzerinde nasıl çalıştığını anlayacak sağlam bir temele sahip olmanız hedeflenir.

# 6. JavaScript Framework ve Kütüphaneleri

**Kaynak:**  
[JavaScript frameworks and libraries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries)

Modern front-end geliştirmede framework ve kütüphaneler çok yaygındır.

Örnekler:

- React,
- Vue,
- Angular,
- Svelte.

Bu araçlar geliştiricilere:

- Bileşen tabanlı arayüz geliştirme,
- Uygulama durumunu yönetme,
- Büyük projeleri yapılandırma,
- Tekrar kullanılabilir kod oluşturma

konularında yardımcı olabilir.

Örneğin bir arayüz şu bileşenlerden oluşabilir:

```text
App
├── Header
├── Navigation
├── ProductList
│   ├── ProductCard
│   ├── ProductCard
│   └── ProductCard
└── Footer
```

## Neden Core bölümünde?

Birçok modern şirket framework kullanımını standart geliştirme sürecinin bir parçası haline getirmiştir.

Bu nedenle birçok front-end iş ilanında:

```text
React
Vue
Angular
```

gibi deneyimler istenir.

Ancak framework öğrenmeden önce:

```text
HTML
CSS
JavaScript
```

temellerinin güçlü olması çok önemlidir.

Framework:

```text
JavaScript'in yerine geçmez
```

aksine:

```text
JavaScript üzerinde çalışır.
```

# 7. Web'de Erişilebilirlik

**Kaynak:**  
[Accessibility](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)

Web üzerinde:

- Kamu hizmetleri,
- Eğitim,
- E-ticaret,
- Haber,
- Eğlence

gibi çok önemli hizmetlere erişilir.

Bu nedenle web içeriğinin mümkün olduğunca fazla insan tarafından kullanılabilir olması gerekir.

Erişilebilirlik şu tür kullanıcı ihtiyaçlarını kapsar:

- Görme engeli,
- Az görme,
- İşitme engeli,
- Motor engeller,
- Bilişsel farklılıklar,
- Klavye kullanımı,
- Yardımcı teknoloji kullanımı.

Örneğin iyi bir görsel:

```html
<img
  src="chart.png"
  alt="2023 ile 2025 arasında satışların yüzde 30 arttığını gösteren grafik"
/>
```

uygun bir alternatif metin sağlayabilir.

## Erişilebilirliğin temel araçları

İyi erişilebilirlik çoğu zaman:

```text
semantic HTML
+
doğru klavye davranışı
+
yeterli renk kontrastı
+
uygun metin alternatifleri
```

ile başlar.

Bu modül web sitelerinizi mümkün olduğunca erişilebilir hale getirmek için öğrenmeniz gereken temel uygulamaları ele alır.

# 8. Geliştiriciler İçin Tasarım

**Kaynak:**  
[Design for developers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Design_for_developers)

Her geliştiricinin profesyonel tasarımcı olması gerekmez.

Ancak web geliştiren herkesin temel düzeyde:

- User experience,
- Görsel hiyerarşi,
- Tasarım brief'i,
- Kullanıcı ihtiyaçları,
- Layout,
- Renk,
- Tipografi

konularını anlaması yararlıdır.

Bir geliştirici olarak tasarım dosyası aldığınızda yalnızca:

```text
"Bunu piksellerine kadar kopyalayayım."
```

yaklaşımı yeterli değildir.

Şunları da düşünmeniz gerekir:

```text
Bu tasarım neden böyle?
Kullanıcı ne yapmaya çalışıyor?
Hangi öğe en önemli?
Mobilde nasıl davranmalı?
Erişilebilir mi?
```

## Kullanıcı zihniyeti

İyi geliştiriciler zaman zaman kendi teknik bakış açılarından çıkıp kullanıcının perspektifine geçebilir.

Örneğin:

```text
Geliştirici:
Bu menü teknik olarak çalışıyor.

Kullanıcı:
Ama hangi öğeye basacağımı anlayamıyorum.
```

Bu farkı görmek ürün kalitesini ciddi biçimde artırabilir.

Bu bilgi kişisel portföy sitenizi daha iyi tasarlamanıza da yardımcı olur.

# 9. Sürüm Kontrolü

**Kaynak:**  
[Version control](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Version_control)

Sürüm kontrol sistemleri modern yazılım geliştirme iş akışının temel araçlarındandır.

Bu modül özellikle:

```text
Git
+
GitHub
```

üzerinden sürüm kontrolünü öğretir.

## Sürüm kontrolü neden gerekir?

Bir projede değişiklikleri manuel olarak şu şekilde sakladığınızı düşünün:

```text
site-final/
site-final-2/
site-final-really-final/
site-final-really-final-fixed/
```

Bu yöntem kısa sürede karmaşık hale gelir.

Git sayesinde:

```text
değişiklik
↓
commit
↓
proje geçmişi
```

oluşturabilirsiniz.

Örneğin:

```bash
git add .
git commit -m "Add responsive navigation"
```

## Sürüm kontrolünün yararları

Git:

- Değişiklik geçmişini takip eder,
- Eski sürümlere dönmeyi sağlar,
- Deneysel branch'ler açmayı kolaylaştırır,
- Ekip çalışmasını destekler,
- Kod inceleme süreçlerinin temelini oluşturur.

GitHub ise Git repository'lerini çevrimiçi olarak barındırır.

Örneğin takım iş akışı:

```text
Issue
  ↓
Branch
  ↓
Kod değişikliği
  ↓
Commit
  ↓
Push
  ↓
Pull request
  ↓
Review
  ↓
Merge
```

şeklinde olabilir.

# Önerilen öğrenme sırası

Kaynak sayfadaki modül sırası öğrenme için iyi bir başlangıç yolu sağlar:

```text
1. HTML ile içerik yapılandırma
        ↓
2. CSS biçimlendirme temelleri
        ↓
3. CSS metin biçimlendirme
        ↓
4. CSS layout
        ↓
5. JavaScript
        ↓
6. JavaScript framework/kütüphaneleri
        ↓
7. Erişilebilirlik
        ↓
8. Geliştiriciler için tasarım
        ↓
9. Sürüm kontrolü
```

Bu sıralamanın temel mantığı:

```text
İçerik
↓
Görünüm
↓
Layout
↓
Davranış
↓
Uygulama mimarisi
↓
Kalite ve kullanıcı deneyimi
↓
Profesyonel çalışma araçları
```

şeklinde düşünülebilir.

## İlk dört modül

İlk bölüm büyük ölçüde:

```text
HTML + CSS
```

üzerine odaklanır.

Bu aşamada statik fakat:

- İyi yapılandırılmış,
- Güzel biçimlendirilmiş,
- Responsive

web sayfaları oluşturabilirsiniz.

## JavaScript aşaması

Daha sonra JavaScript ile:

- Kullanıcı etkileşimi,
- Dinamik içerik,
- API kullanımı

eklenir.

## Framework aşaması

JavaScript temeli üzerine modern uygulama geliştirme araçları eklenir.

## Kalite ve profesyonel çalışma

Son modüller:

```text
Accessibility
Design
Version control
```

ile yalnızca çalışan değil, daha kaliteli ve profesyonel projeler üretmeye odaklanır.

# Modüller arasındaki ilişki

Tüm Core modüllerini tek bir proje üzerinde düşünürsek:

```text
HTML
→ Sayfanın anlamını ve yapısını oluşturur.

CSS basics
→ Görünümü belirler.

CSS text styling
→ Tipografiyi geliştirir.

CSS layout
→ Öğelerin sayfadaki yerleşimini oluşturur.

JavaScript
→ Etkileşim ekler.

Frameworks
→ Karmaşık uygulamaları düzenler.

Accessibility
→ Daha fazla kullanıcının uygulamaya erişmesini sağlar.

Design
→ Kullanıcı deneyimini geliştirir.

Version control
→ Kodun profesyonel biçimde yönetilmesini sağlar.
```

Böylece Core öğrenme yolu teknik dilleri ayrı ayrı öğretmekten daha geniş bir hedefe sahiptir:

> Kullanılabilir ve modern bir web uygulaması geliştirebilecek temel geliştirici becerileri oluşturmak.

# Partner video kursu

Kaynak MDN sayfası, makalelere ek olarak etkileşimli video eğitim isteyen öğrenciler için Scrimba'nın:

[Frontend Developer Career Path](https://scrimba.com/)

eğitimini önerir.

Scrimba, MDN'nin öğrenme partnerlerinden biridir ve Core modüllerindeki konuların yanında ek içerikler de sunar.

> **Not:** Scrimba harici bir eğitim hizmetidir ve MDN dokümantasyonundan ayrı bir platformdur.

# Core sonrasında ne gelir?

Core modüllerini tamamladıktan sonra MDN'nin:

[Extension modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions)

bölümüne geçebilirsiniz.

Extension modülleri:

```text
Core bilgiler
      ↓
daha ileri ve özel konular
```

üzerine kuruludur.

Örneğin daha derin JavaScript, performans veya farklı uzmanlık alanlarıyla karşılaşabilirsiniz.

# Özet

MDN'nin **Core learning modules** bölümü, yeni bir front-end geliştiricinin sektöre hazırlanırken sahip olması gereken temel teknik ve profesyonel bilgi alanlarını bir öğrenme yolu içinde bir araya getirir. Amaç yalnızca birkaç web teknolojisinin sözdizimini öğretmek değil; modern, erişilebilir ve yönetilebilir bir web uygulaması geliştirebilecek temel yetkinliği oluşturmaktır.

Öğrenme yolu **HTML** ile başlar. Semantic HTML sayesinde içeriğin yalnızca görünümü değil, anlamı ve yapısı tanımlanır. Ardından CSS modülleriyle sayfanın biçimi, tipografisi ve farklı cihazlara uyum sağlayan layout sistemleri öğrenilir. Böylece responsive ve iyi yapılandırılmış statik sayfalar oluşturabilecek seviyeye gelirsiniz.

Sonraki aşamada **JavaScript**, sayfalara dinamik davranış ve kullanıcı etkileşimi kazandırır. JavaScript'in temel dil özelliklerini, DOM'u ve web API'lerini öğrendikten sonra modern uygulamalarda sık kullanılan JavaScript framework ve kütüphanelerinin çalışma modeline giriş yapılır.

Core öğrenme yolu yalnızca kodlama dilleriyle sınırlı değildir. **Accessibility** modülü farklı yeteneklere sahip kullanıcıların web içeriğine erişebilmesini sağlayan teknikleri, **Design for developers** modülü ise geliştiricilerin kullanıcı deneyimi ve temel tasarım kararlarını anlayabilmesini ele alır.

Son olarak **Version control** modülü Git ve GitHub üzerinden profesyonel kod yönetimi, değişiklik geçmişi, branch ve ekip çalışması kavramlarını öğretir. Böylece Core modüller tamamlandığında elinizde yalnızca HTML/CSS/JavaScript bilgisi değil; **yapılandırma, tasarım, erişilebilirlik, responsive geliştirme, modern JavaScript uygulamaları ve profesyonel sürüm kontrolü** konularında birlikte çalışan bir temel bulunur.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Core learning modules”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core) giriş sayfasının bölüm sırası ve modül yapısı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Core modülleri

1. [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
2. [CSS styling basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics)
3. [CSS text styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling)
4. [CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
5. [Dynamic scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
6. [JavaScript frameworks and libraries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries)
7. [Accessibility on the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility)
8. [Design for developers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Design_for_developers)
9. [Version control](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Version_control)

### İlgili kaynaklar

- [Getting started modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started)
- [Extension modules](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions)
- [MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/)
