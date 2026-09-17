# Web Standartları Modeli

> **Kaynak:** [MDN Web Docs — The web standards model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini ve temel kavramlarını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 30 Ağustos 2026

Bu bölüm, web'in nasıl ortaya çıktığına, web standartlarının neden var olduğuna, bu standartların hangi kuruluşlar tarafından geliştirildiğine ve HTML, CSS, JavaScript gibi temel web teknolojilerinin birlikte nasıl çalıştığına genel bir bakış sunar.

Ayrıca istemci tarafı ile sunucu tarafı arasındaki farkları ve modern web geliştirmede yaygın kabul gören iyi uygulamaları da ele alır.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web tarayıcılarına ve temel web teknolojilerine genel düzeyde aşina olmak. |
| **Öğrenme çıktıları:** | • Web standartlarının ne olduğunu ve hangi temel ilkelere dayandığını anlamak.<br>• W3C, WHATWG, TC39 ve Khronos Group gibi standart kuruluşlarının rollerini tanımak.<br>• Standart oluşturma sürecinin yüksek seviyeli işleyişini kavramak.<br>• HTML, CSS, JavaScript ve diğer temel web teknolojilerinin rollerini ayırt etmek.<br>• İstemci tarafı ve sunucu tarafı kod arasındaki farkı anlamak.<br>• Statik ve dinamik içerik kavramlarını öğrenmek.<br>• Temel web geliştirme iyi uygulamalarını tanımak. |

## Bu makalede

- [Web'in kısa tarihi](#webin-kısa-tarihi)
- [Web standartları](#web-standartları)
- [Web standartlarının temel ilkeleri](#web-standartlarının-temel-ilkeleri)
- [Modern web teknolojilerine genel bakış](#modern-web-teknolojilerine-genel-bakış)
- [Araçlar](#araçlar)
- [Sunucu tarafı diller ve framework'ler](#sunucu-tarafı-diller-ve-frameworkler)
- [Web geliştirme iyi uygulamaları](#web-geliştirme-iyi-uygulamaları)
- [Özet](#özet)

## Web'in kısa tarihi

Modern web bir anda ortaya çıkmadı. İnternet altyapısı ve web teknolojileri onlarca yıllık araştırma ve geliştirme sürecinin sonucudur.

### 1960'lar — ARPANET

1960'ların sonlarında ABD'de **ARPANET** adlı bir iletişim ağı geliştirildi.

ARPANET, modern internetin öncülerinden biri olarak görülür.

Önemli özelliklerinden bazıları:

- **Packet switching (paket anahtarlama)** yaklaşımını kullanması,
- TCP/IP gibi ağ protokollerinin gelişimine zemin hazırlaması.

Bu teknolojiler daha sonra internet altyapısının temel parçaları haline geldi.

### 1980 — ENQUIRE

1980 yılında **Tim Berners-Lee**, CERN'de çalışırken **ENQUIRE** adlı bir yazılım geliştirdi.

Bu programın önemli özelliklerinden biri bilgiler arasında bağlantılar kurulabilmesiydi.

Bu fikir daha sonra web'in temel kavramlarından biri olan:

```text
hyperlink
```

yaklaşımının gelişimine katkıda bulundu.

### 1989 — Web fikrinin şekillenmesi

1989 yılında Tim Berners-Lee, CERN'de bilgi paylaşımını kolaylaştıracak küresel bir hipertext sistemi önerdi.

Bu fikir:

- Belgeler arasında bağlantılar oluşturmayı,
- Belgeleri ağ üzerinden paylaşmayı,
- Ortak bir protokol üzerinden erişmeyi

amaçlıyordu.

### 1990–1991 — İlk web bileşenleri

1990 ve 1991 yıllarında web'in ilk çalışan sürümü için gerekli temel bileşenler oluşturuldu.

Bunlar arasında:

- **HTML**
- **HTTP**
- İlk web tarayıcısı
- İlk web sunucusu
- İlk web sayfaları

yer alıyordu.

### Web ile internet aynı şey değildir

Bu iki kavram sık sık birbirinin yerine kullanılır, ancak aynı değildir.

**İnternet**, dünya çapındaki cihazların veri alışverişi yapmasını sağlayan ağ altyapısıdır.

**Web**, bu internet altyapısı üzerinde çalışan bilgi ve belge sistemidir.

Basit bir karşılaştırma:

```text
İnternet
   ↓
Ağ altyapısı
   ↓
Web, e-posta, mesajlaşma, dosya aktarımı vb.
```

Web yalnızca internet üzerinde çalışan hizmetlerden biridir.

> **Not:** İnternet olmadan web çalışamaz; ancak internet yalnızca web'den ibaret değildir.

### 1994 — W3C

1994 yılında Tim Berners-Lee, **World Wide Web Consortium (W3C)** adlı kuruluşun kurulmasına öncülük etti.

W3C'nin amacı farklı şirketlerden ve kuruluşlardan uzmanları bir araya getirerek web teknolojilerinin ortak standartlara göre geliştirilmesini sağlamaktı.

Bu dönemde:

- HTML geliştirildi,
- HTTP standartlaştırıldı,
- CSS ortaya çıktı,
- JavaScript yaygınlaşmaya başladı.

Özellikle CSS ve JavaScript, web'in yalnızca belge gösteren bir sistem olmaktan çıkıp görsel ve etkileşimli bir platforma dönüşmesinde önemli rol oynadı.

Web'in popülerleşmesiyle birlikte:

- Yeni tarayıcılar geliştirildi,
- Binlerce web sunucusu kuruldu,
- Milyonlarca web sayfası oluşturuldu,
- Yeni standart kuruluşları ortaya çıktı.

> **Not:** Web'in tarihini daha ayrıntılı incelemek isterseniz `"history of the web"` ifadesini bir arama motorunda aratabilirsiniz.

## Web standartları

**Web standartları**, web siteleri ve web uygulamaları oluştururken kullandığımız teknolojilerin nasıl çalışması gerektiğini tanımlayan ortak kurallardır.

Bu standartlar genellikle çok ayrıntılı teknik belgeler halinde yayımlanır.

Bu belgelere:

```text
specification
```

veya kısaca:

```text
spec
```

denir.

Örneğin bir HTML spesifikasyonu:

- Hangi HTML öğelerinin bulunduğunu,
- Bu öğelerin nasıl davranması gerektiğini,
- Tarayıcıların bunları nasıl yorumlaması gerektiğini

ayrıntılı biçimde tanımlar.

### Spesifikasyonlar kimin için yazılır?

Spesifikasyonlar genellikle başlangıç seviyesindeki geliştiricilere eğitim vermek amacıyla yazılmaz.

Bunların ana hedef kitlesi:

- Tarayıcı mühendisleri,
- Standart geliştiricileri,
- Araç geliştiricileri,
- İleri düzey web platformu geliştiricileri

gibi kişilerdir.

Örneğin bir tarayıcı geliştiricisi, yeni bir CSS özelliğini uygularken ilgili spesifikasyona bakar.

MDN gibi eğitim ve referans siteleri ise bu teknik standartları geliştiriciler için daha anlaşılır hale getirir.

## Standart kuruluşları ve süreçleri

Web standartlarını geliştiren kuruluşlara genel olarak **standards bodies (standart kuruluşları)** denir.

Bu kuruluşlar farklı:

- Tarayıcı üreticilerini,
- Teknoloji şirketlerini,
- Bağımsız geliştiricileri,
- Araştırmacıları,
- Topluluk üyelerini

bir araya getirerek teknolojilerin nasıl çalışması gerektiği konusunda ortak kararlar almaya çalışır.

### W3C

[W3C](https://www.w3.org/) web standartlarıyla ilgilenen en bilinen kuruluşlardan biridir.

CSS ve erişilebilirlik gibi pek çok web teknolojisiyle ilgili çalışma grupları bulunur.

### WHATWG

[WHATWG](https://whatwg.org/), özellikle HTML ve ilişkili web teknolojileri üzerinde çalışır.

Önemli standartlarından biri:

[HTML Living Standard](https://html.spec.whatwg.org/)

belgesidir.

Bu standart:

- HTML öğelerini,
- HTML API'lerini,
- Tarayıcı davranışlarını

ayrıntılı şekilde tanımlar.

### TC39 ve ECMA

JavaScript'in temel aldığı standart **ECMAScript** olarak adlandırılır.

Bu standardın geliştirilmesinde:

- [TC39](https://tc39.es/)
- [Ecma International](https://ecma-international.org/)

önemli rol oynar.

JavaScript'e yeni özellikler eklenirken TC39 süreci üzerinden değerlendirme yapılır.

### Khronos Group

[Khronos Group](https://www.khronos.org/) grafik, paralel hesaplama ve benzeri alanlarda açık standartlar geliştirir.

Web tarafında bilinen teknolojilerden biri:

```text
WebGL
```

standardıdır.

WebGL, tarayıcı içinde donanım hızlandırmalı 2D ve 3D grafikler oluşturmayı mümkün kılar.

## Yeni bir web standardı nasıl ortaya çıkar?

Gerçek standart geliştirme süreçleri oldukça ayrıntılıdır. Ancak başlangıç seviyesinde genel mantık şu şekilde düşünülebilir.

### 1. Bir ihtiyaç fark edilir

Geliştiriciler belirli bir işlemi sürekli olarak karmaşık yöntemlerle yapıyorsa yeni bir platform özelliğine ihtiyaç duyulabilir.

Örneğin geliştiricilerin sürekli aynı CSS tekniğini elle uyguladığını düşünelim.

Yeni bir CSS özelliği bu işlemi kolaylaştırabilir.

### 2. Öneri tartışılır

Öneriyi yapan kişi veya ekip:

- Diğer geliştiricilerle konuşur,
- Tarayıcı mühendislerinden geri bildirim alır,
- Kullanım durumlarını toplar,
- Öneriyi açıklayan bir belge hazırlar,
- Çalışan bir demo oluşturabilir.

Bu tür açıklama belgelerine çoğu zaman:

```text
explainer
```

denir.

### 3. Standart kuruluşunda değerlendirilir

Yeterince ilgi varsa özellik ilgili çalışma grubunda resmi olarak tartışılmaya başlanabilir.

Örneğin CSS özellikleri:

[CSS Working Group](https://www.w3.org/groups/wg/css/)

tarafından değerlendirilebilir.

Yeni bir özelliğin kabul edilebilmesi için birçok konu incelenir:

- Güvenlik,
- Gizlilik,
- Erişilebilirlik,
- Diğer teknolojilerle uyumluluk,
- Performans,
- Patent durumu,
- Geriye dönük uyumluluk.

### 4. Deneysel uygulamalar ve testler yapılır

Standart geliştirme süreci devam ederken tarayıcı üreticileri özelliğin deneysel sürümlerini uygulayabilir.

Örneğin özellik:

- Deneysel bir tarayıcı sürümünde bulunabilir,
- Bir ayar/flag arkasında tutulabilir,
- Geliştiricilerin test etmesine açılabilir.

Aynı dönemde:

- Spesifikasyon metni geliştirilir,
- Tarayıcı üreticilerinin görüşleri alınır,
- Test paketleri hazırlanır.

Bu görüşlere kimi standart süreçlerinde:

```text
standards positions
```

denir.

### 5. Tarayıcı desteği yaygınlaşır

Teknoloji yeterince olgunlaştığında ve tarayıcı üreticileri tarafından uygulandığında geliştiriciler bu özelliği gerçek web sitelerinde kullanmaya başlayabilir.

Basitleştirilmiş süreç:

```text
İhtiyaç
  ↓
Öneri
  ↓
Tartışma
  ↓
Spesifikasyon
  ↓
Deneysel tarayıcı uygulaması
  ↓
Testler ve geri bildirim
  ↓
Tarayıcı desteği
  ↓
Geliştiricilerin kullanımı
```

> **Not:** Aynı kişi veya ekip bu aşamaların birden fazlasında görev alabilir.

Daha ayrıntılı süreç belgeleri:

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG Working Mode](https://whatwg.org/working-mode)
- [TC39 Process](https://tc39.es/process-document/)

## Web standartlarının temel ilkeleri

Web platformunun önemli özelliklerinden bazıları şu üç temel fikirle açıklanabilir:

1. **Açık olması**
2. **Erişilebilir ve birlikte çalışabilir olması**
3. **Mevcut web'i bozmaması**

## Açık standartlar

Web teknolojilerinin temel özelliklerinden biri açık biçimde geliştirilmeleridir.

Bu genel olarak:

- Standartların herkes tarafından incelenebilmesi,
- Geliştirme süreçlerinin büyük bölümünün kamuya açık yürütülmesi,
- Teknolojilerin tek bir özel şirket tarafından kontrol edilmemesi,
- Web teknolojilerinin kullanılabilmesi için zorunlu özel lisans ücretleri gerekmemesi

anlamına gelir.

Bu yaklaşım önemlidir çünkü web'in temel teknolojilerinin tek bir şirket tarafından kontrol edildiğini düşünün.

O şirket:

- Teknolojiyi ücretli hale getirebilir,
- Geliştirmeyi durdurabilir,
- Rakip tarayıcıların kullanımını kısıtlayabilir.

Açık standart modeli bu tür tek taraflı kontrol risklerini azaltmayı amaçlar.

Sonuç olarak web:

```text
herkesin erişebildiği
+
herkesin içerik üretebildiği
+
çok sayıda şirketin birlikte uyguladığı
```

bir platform olarak kalabilir.

## Erişilebilir ve birlikte çalışabilir

### Erişilebilirlik

Web'in temel hedeflerinden biri mümkün olduğunca fazla insan tarafından kullanılabilmesidir.

Bu, engelli kullanıcıları da kapsar.

Örneğin:

- Fare kullanamayan kişiler klavye ile gezinebilir.
- Görme engelli kullanıcılar ekran okuyucu kullanabilir.
- Az gören kişiler içeriği büyütebilir.
- Video içeriği altyazı veya metin alternatifiyle sunulabilir.

Erişilebilirlik yalnızca belirli bir kullanıcı grubuna yönelik ek bir özellik değildir; iyi web geliştirme yaklaşımının temel parçalarından biridir.

> **Not:** Erişilebilirlik konusunu MDN öğrenme yolunda ilerleyen bölümlerde daha ayrıntılı inceleyeceksiniz.

### Birlikte çalışabilirlik

**Interoperability (birlikte çalışabilirlik)**, aynı web içeriğinin farklı tarayıcılar ve platformlarda tutarlı şekilde çalışabilmesini ifade eder.

Örneğin aynı HTML, CSS ve JavaScript kodunun:

```text
Firefox
Chrome
Safari
Edge
```

gibi farklı tarayıcılarda benzer sonuç üretmesi beklenir.

Standartların amacı her tarayıcı üreticisinin aynı teknolojiyi bambaşka biçimde yorumlamasını önlemektir.

İdeal olarak:

```text
aynı standart kod
      ↓
farklı tarayıcılar
      ↓
tutarlı sonuç
```

elde edilir.

## Web'i bozma

Web standartları dünyasında sık kullanılan prensiplerden biri:

```text
Don't break the web
```

yani:

```text
Web'i bozma
```

fikridir.

Bunun anlamı yeni web teknolojilerinin mümkün olduğunca **geriye dönük uyumlu** olması gerektiğidir.

Örneğin 15 yıl önce yazılmış geçerli bir HTML sayfasının modern tarayıcıda hâlâ çalışması tercih edilir.

Yeni bir tarayıcı sürümü veya web standardı eski siteleri büyük ölçüde bozarsa kullanıcılar açısından ciddi sorunlar ortaya çıkar.

Bu nedenle web platformu geliştirilirken:

```text
yeni özellikler
+
eski içeriğin çalışmaya devam etmesi
```

arasında denge kurulmaya çalışılır.

## Modern web teknolojilerine genel bakış

Bir front-end geliştiricinin karşılaşacağı çok sayıda teknoloji vardır.

Ancak başlangıçta en önemli üçü:

```text
HTML
CSS
JavaScript
```

teknolojileridir.

## HTML, CSS ve JavaScript

### HTML

**HTML (HyperText Markup Language)**, web sayfasının yapısını ve anlamını tanımlayan işaretleme dilidir.

Örneğin:

```html
<h1>Başlık</h1>
<p>Bir paragraf.</p>
```

HTML, içeriğin:

- Başlık,
- Paragraf,
- Liste,
- Bağlantı,
- Görsel

gibi ne tür bir içerik olduğunu belirtir.

Ev benzetmesi kullanırsak HTML:

```text
temel
duvarlar
yapı
```

gibidir.

### CSS

**CSS (Cascading Style Sheets)**, HTML içeriğinin görünümünü ve düzenini tanımlar.

Örneğin:

```css
h1 {
  color: darkblue;
  text-align: center;
}
```

CSS ile:

- Renkler,
- Yazı tipleri,
- Kenarlıklar,
- Boşluklar,
- Animasyonlar,
- Sayfa düzenleri

oluşturulabilir.

Ev benzetmesinde CSS:

```text
boya
duvar kağıdı
halı
dekorasyon
```

gibi düşünülebilir.

### JavaScript

**JavaScript**, web sayfalarına davranış ve etkileşim ekleyen programlama dilidir.

Örneğin:

```js
button.addEventListener("click", () => {
  console.log("Tıklandı");
});
```

JavaScript ile:

- Düğmelere davranış eklenebilir,
- Sunucudan veri alınabilir,
- İçerik dinamik olarak değiştirilebilir,
- Oyunlar geliştirilebilir,
- 2D/3D grafikler oluşturulabilir.

Ev benzetmesinde JavaScript:

```text
televizyon
fırın
ışık sistemi
elektronik cihazlar
```

gibi işlevsellik sağlayan parçalar olarak düşünülebilir.

### API nedir?

JavaScript öğrenirken **API** kavramıyla sık sık karşılaşırsınız.

**API (Application Programming Interface)**, bir yazılımın başka bir özellik veya sistemle kontrollü biçimde iletişim kurmasını sağlayan arayüzdür.

Tarayıcı Web API'leri sayesinde JavaScript:

- Kameraya,
- Mikrofona,
- Coğrafi konuma,
- Yerel depolamaya,
- Ağ isteklerine,
- Grafik özelliklerine

erişebilir.

Örneğin:

```js
fetch("/api/data");
```

tarayıcının Fetch API'sini kullanır.

## Diğer web teknolojileri

HTML, CSS ve JavaScript dışında başka önemli standart teknolojiler de vardır.

### HTTP

**HTTP**, istemci ve sunucu arasında web üzerinden mesaj alışverişini tanımlar.

Örneğin:

```text
Tarayıcı → GET isteği → Sunucu
Sunucu → HTTP yanıtı → Tarayıcı
```

### SVG

**SVG (Scalable Vector Graphics)**, vektörel grafiklerin web üzerinde tanımlanmasını sağlar.

SVG grafikler çözünürlükten büyük ölçüde bağımsızdır.

Örneğin:

```html
<svg>
  ...
</svg>
```

ile tarayıcı içinde grafik oluşturulabilir.

### MathML

**MathML**, matematiksel ifadeleri anlamsal biçimde web sayfalarında tanımlamak için kullanılan işaretleme dilidir.

Özellikle:

- Matematik,
- Fizik,
- Eğitim,
- Bilimsel yayın

alanlarında yararlıdır.

Bununla birlikte MDN'nin başlangıç öğrenme yolunda ağırlık:

```text
HTML + CSS + JavaScript
```

üzerindedir.

## Araçlar

HTML, CSS ve JavaScript'i öğrendikçe geliştirme sürecini kolaylaştıran farklı araçlarla karşılaşırsınız.

## Tarayıcı geliştirici araçları

Modern tarayıcılar yerleşik **developer tools (geliştirici araçları)** sağlar.

Bunlarla:

- HTML DOM yapısını inceleyebilir,
- CSS kurallarını değiştirebilir,
- JavaScript hatalarını görebilir,
- Network isteklerini inceleyebilir,
- Performans ölçümü yapabilirsiniz.

Örneğin çoğu tarayıcıda geliştirici araçlarını:

```text
F12
```

tuşuyla açabilirsiniz.

## Test araçları

Test araçları yazdığınız kodun beklediğiniz gibi çalışıp çalışmadığını kontrol eder.

Testler:

- Fonksiyonların sonuçlarını,
- Kullanıcı arayüzlerini,
- API davranışlarını,
- Tarayıcı uyumluluğunu

kontrol etmek için kullanılabilir.

## Framework ve kütüphaneler

JavaScript üzerine kurulmuş çok sayıda framework ve kütüphane vardır.

Örnekler:

```text
React
Vue
Angular
Svelte
```

Bu araçlar karmaşık uygulamaların daha hızlı ve düzenli geliştirilmesine yardımcı olabilir.

Ancak bunlar JavaScript'in yerine geçmez; JavaScript üzerine inşa edilirler.

Bu nedenle önce temel web teknolojilerini öğrenmek önemlidir.

## Linter ve formatter'lar

**Linter**, kodun belirli kurallara uyup uymadığını kontrol eden araçtır.

Örneğin:

- Hatalı kullanım,
- Riskli kod,
- Stil problemleri

tespit edilebilir.

**Formatter**, kodun biçimini otomatik düzenler.

Örneğin:

[Prettier](https://prettier.io/)

kodun:

- Girintilerini,
- Satır kırılmalarını,
- Noktalama biçimini

standart hale getirebilir.

Örneğin:

```js
const user={name:"Fatih",age:25}
```

Prettier tarafından:

```js
const user = { name: "Fatih", age: 25 };
```

şeklinde biçimlendirilebilir.

## Sunucu tarafı diller ve framework'ler

HTML, CSS ve JavaScript çoğunlukla **front-end** veya **client-side (istemci tarafı)** teknolojiler olarak tanımlanır.

Bu kodlar kullanıcının tarayıcısında çalışır.

Ancak modern web uygulamalarında çoğu zaman sunucu üzerinde çalışan başka kodlar da vardır.

Bunlara:

```text
back-end
```

veya:

```text
server-side
```

teknolojiler denir.

### Sunucu tarafı kod ne yapar?

Sunucu tarafındaki yazılım:

- Veritabanından veri okuyabilir,
- Kullanıcı girişi yapabilir,
- Yetkilendirme kontrolü gerçekleştirebilir,
- Dosya işleyebilir,
- HTML oluşturabilir,
- JSON API yanıtları hazırlayabilir.

Örneğin:

```text
Tarayıcı
   ↓
/profile isteği
   ↓
Sunucu tarafı uygulama
   ↓
Veritabanı
   ↓
Kullanıcı bilgileri
   ↓
HTML veya JSON yanıtı
```

### Örnek sunucu tarafı teknolojiler

Yaygın örnekler:

- **ASP.NET** — C#
- **Django** — Python
- **Laravel** — PHP
- **Next.js** — JavaScript / TypeScript

Bu framework'ler web standartlarının kendisi değildir.

Örneğin:

```text
HTML
CSS
JavaScript
HTTP
```

web platformu standartlarıdır.

Ancak:

```text
Django
Laravel
ASP.NET
Next.js
```

belirli topluluklar veya kuruluşlar tarafından geliştirilen framework'lerdir.

Bununla birlikte bu projelerin geliştirme süreçleri de açık kaynak ve topluluk odaklı olabilir.

## Statik ve dinamik

İstemci ve sunucu tarafı içerikleri açıklarken sık kullanılan iki kavram:

- **Statik**
- **Dinamik**

### Statik içerik

Sunucuda bulunan bir HTML dosyasını düşünün:

```text
about.html
```

Dosya sunucuda nasıl saklanıyorsa kullanıcı istediğinde aynı biçimde gönderiliyorsa bu içerik **statik** olarak düşünülebilir.

```text
Sunucudaki HTML
      ↓
değişmeden gönderilir
      ↓
Tarayıcı
```

Örneğin:

```html
<h1>Hakkımızda</h1>
```

her kullanıcıya aynı şekilde gönderilir.

### Dinamik içerik

Sunucu tarafı kod kullanıldığında HTML veya başka veriler isteğe göre oluşturulabilir.

Örneğin bir hava durumu sayfası:

```text
Kullanıcının konumu
       ↓
Sunucu
       ↓
Hava durumu verisi
       ↓
Kişiye göre oluşturulan sonuç
```

Sivas'taki kullanıcı:

```text
8°C — Kar yağışlı
```

görebilirken Antalya'daki kullanıcı:

```text
21°C — Güneşli
```

görebilir.

Aynı URL farklı kullanıcılara farklı veri gösterebilir.

### Statik ve dinamik tamamen ayrı değildir

Modern uygulamalarda bu iki yaklaşım sık sık birlikte kullanılır.

Örneğin bir sunucu tarafı template dosyasında:

```html
<h1>Hava Durumu</h1>

<p>Bugün sıcaklık: {{ temperature }}</p>
```

yapısı bulunabilir.

Burada:

```html
<h1>Hava Durumu</h1>
```

statik kalırken:

```text
{{ temperature }}
```

sunucu tarafından dinamik bir değerle değiştirilir.

## Web geliştirme iyi uygulamaları

Web geliştirmenin önemli zorluklarından biri, sitenizi hangi cihazların ve kullanıcıların kullanacağını tam olarak bilememenizdir.

Örneğin:

- Bir kullanıcı küçük ekranlı iPhone kullanabilir.
- Başka biri geniş monitörlü Windows bilgisayarda olabilir.
- Bir kullanıcı ekran okuyucu kullanabilir.
- Başka biri eski bir bilgisayar ve eski tarayıcı kullanabilir.
- Bazı kullanıcıların internet bağlantısı yavaş olabilir.

Bu nedenle web geliştirirken mümkün olduğunca **esnek ve savunmacı** tasarım yapmak önemlidir.

## Progressive enhancement

**Progressive enhancement (aşamalı geliştirme)**, önce mümkün olduğunca fazla kullanıcıya çalışan temel deneyimi sunmak, ardından bunu destekleyen tarayıcılarda gelişmiş özellikler eklemek anlamına gelir.

Örneğin:

```text
Temel HTML içerik
      ↓
CSS ile daha iyi görünüm
      ↓
JavaScript ile gelişmiş etkileşim
```

JavaScript yüklenmese bile sitenin temel içeriğinin erişilebilir kalması buna örnek olabilir.

Başka bir kullanım:

- Hızlı bağlantıda yüksek çözünürlüklü görseller,
- Yavaş bağlantıda daha hafif içerik.

## Tarayıcılar arası uyumluluk

**Cross-browser compatibility**, web sitesinin mümkün olduğunca fazla tarayıcıda düzgün çalışmasını sağlamayı amaçlar.

Bunun için:

- Yaygın desteklenen teknolojileri kullanmak,
- Yeni özellikler için fallback eklemek,
- Farklı tarayıcılarda test yapmak,
- Eski tarayıcılar için kullanılabilir bir temel deneyim bırakmak

gerekebilir.

Örneğin modern bir CSS özelliği desteklenmiyorsa daha basit bir düzen hâlâ kullanılabilir olmalıdır.

## Katmanları ayırma

Web projelerinde genel bir iyi uygulama:

```text
HTML → içerik ve yapı
CSS → görünüm
JavaScript → davranış
```

şeklindeki görevleri mümkün olduğunca ayrı dosyalarda tutmaktır.

Örnek:

```text
project/
├── index.html
├── styles/
│   └── style.css
└── scripts/
    └── main.js
```

Bunun avantajları:

- Kod daha kolay anlaşılır.
- Dosyalar daha kolay yönetilir.
- Takım çalışması kolaylaşır.
- Kod tekrar kullanımı artabilir.

> **Not:** Gerçek projelerde bu ayrım her zaman tamamen keskin olmayabilir. Bu daha çok ulaşılmaya çalışılan bir tasarım prensibidir.

## Responsive web design

**Responsive web design (duyarlı web tasarımı)**, sitenin farklı ekran boyutlarına uyum sağlamasını amaçlar.

Örneğin masaüstünde:

```text
+------------------------------+
| Menü | İçerik | Yan panel    |
+------------------------------+
```

şeklinde üç sütunlu düzen bulunabilir.

Mobil cihazda aynı içerik:

```text
+--------------+
| Menü         |
+--------------+
| İçerik       |
+--------------+
| Yan panel    |
+--------------+
```

şeklinde tek sütun olabilir.

Bu değişim otomatik olarak CSS üzerinden gerçekleştirilebilir.

Tarayıcınızın genişliğini değiştirerek modern sitelerin nasıl tepki verdiğini gözlemleyebilirsiniz.

## Performans

Bir web sitesinin hızlı yüklenmesi kullanıcı deneyimi açısından önemlidir.

Performans çalışmaları şunları içerebilir:

- Görselleri küçültmek,
- Gereksiz JavaScript'i azaltmak,
- Dosyaları sıkıştırmak,
- Önbellekleme kullanmak,
- Ağ isteklerini azaltmak.

Yavaş bir web sitesi kullanıcıların sayfadan ayrılmasına neden olabilir.

Ancak performans yalnızca teknik hız değildir. Arayüzün anlaşılır ve hızlı kullanılabilmesi de önemlidir.

## Uluslararasılaştırma

**Internationalization**, genellikle:

```text
i18n
```

kısaltmasıyla ifade edilir.

Amaç web sitelerini farklı:

- Diller,
- Kültürler,
- Yazı sistemleri,
- Bölgesel biçimler

için kullanılabilir hale getirmektir.

Örneğin Arapça veya İbranice gibi diller:

```text
sağdan sola
```

yazılır.

Bir tasarım yalnızca soldan sağa yazılan diller için hazırlanmışsa bu dillerde sorun yaşayabilir.

Ayrıca:

- Tarih biçimleri,
- Para birimleri,
- Sayı biçimleri,
- Çeviri uzunlukları

da ülkeye göre farklılık gösterebilir.

## Gizlilik ve güvenlik

**Privacy (gizlilik)** ve **security (güvenlik)** birbiriyle ilişkili fakat farklı kavramlardır.

### Gizlilik

Gizlilik, kullanıcıların kişisel bilgilerinin gereksiz yere toplanmamasını ve izlenmemesini amaçlar.

Örneğin:

- Gereksiz kullanıcı verisi toplamamak,
- Kullanıcıyı izleme konusunda şeffaf olmak,
- Veriyi yalnızca gerekli amaçlarla kullanmak.

### Güvenlik

Güvenlik, kullanıcıların ve sistemlerin kötü niyetli saldırılardan korunmasını amaçlar.

Örneğin:

- HTTPS kullanmak,
- Parolaları güvenli biçimde saklamak,
- Kullanıcı girdilerini doğrulamak,
- Yetkilendirme yapmak,
- Yaygın web açıklarını önlemek.

Basit bir ayrım:

```text
Gizlilik
→ Hangi veriyi toplamalıyız?

Güvenlik
→ Topladığımız veriyi nasıl korumalıyız?
```

İyi bir web uygulaması her iki konuyu da dikkate almalıdır.

## Temel kavramların birlikte görünümü

Bu sayfadaki temel fikirleri tek bir modelde toplarsak:

```text
Açık web standartları
       ↓
HTML + CSS + JavaScript + Web API'leri
       ↓
Tarayıcılar
       ↓
Kullanıcının gördüğü ve kullandığı arayüz
```

Sunucu tarafında ise:

```text
Tarayıcı
   ↓ HTTP
Sunucu tarafı uygulama
   ↓
Veritabanı / servisler
   ↓
HTML veya veri
   ↓ HTTP
Tarayıcı
```

Tüm sistemin mümkün olduğunca:

- Açık,
- Erişilebilir,
- Tarayıcılar arası uyumlu,
- Geriye dönük uyumlu,
- Güvenli,
- Performanslı

çalışması hedeflenir.

## Özet

Bu bölümde web'in yalnızca HTML, CSS ve JavaScript'ten ibaret olmadığını; bu teknolojilerin açık standartlar, standart kuruluşları, tarayıcılar ve sunucu tarafı sistemlerinden oluşan daha büyük bir ekosistemin parçaları olduğunu öğrendiniz.

Web'in kökleri ARPANET ve paket anahtarlamalı ağlara kadar uzanır. Tim Berners-Lee'nin 1980'lerde geliştirdiği hipertext fikirleri ve 1989'daki web önerisi, 1990–1991 döneminde HTML, HTTP, ilk web tarayıcısı ve web sunucusunun ortaya çıkmasına yol açtı. Daha sonra W3C ve başka standart kuruluşları web teknolojilerinin ortak kurallara göre geliştirilmesi için çalışmaya başladı.

Web standartları, bir teknolojinin tarayıcılarda nasıl uygulanacağını ayrıntılı biçimde tanımlayan spesifikasyonlardır. W3C, WHATWG, TC39/ECMA ve Khronos Group gibi kuruluşlar farklı teknoloji alanlarında standart geliştirme süreçleri yürütür. Yeni bir özellik genellikle gerçek bir ihtiyaçla başlar; topluluk ve tarayıcı üreticileri tarafından tartışılır, deneysel olarak uygulanır, spesifikasyona eklenir ve kapsamlı testlerden geçtikten sonra yaygınlaşır.

Web platformunun önemli ilkeleri arasında **açıklık**, **erişilebilirlik**, **birlikte çalışabilirlik** ve **mevcut web'i bozmama** yaklaşımı bulunur. Açık standartlar sayesinde temel web teknolojileri tek bir şirketin kontrolünde değildir. Birlikte çalışabilirlik aynı kodun farklı tarayıcılarda benzer davranmasını, erişilebilirlik ise web'in farklı yeteneklere sahip kullanıcılar tarafından kullanılabilmesini amaçlar. Geriye dönük uyumluluk da eski web sitelerinin yeni tarayıcılarda çalışmaya devam etmesini sağlar.

Front-end geliştirmede temel teknolojiler HTML, CSS ve JavaScript'tir. HTML yapı ve anlamı, CSS görünümü, JavaScript davranış ve etkileşimi sağlar. HTTP, SVG, MathML ve Web API'leri gibi başka web standartları da platformun önemli parçalarıdır. Geliştirici araçları, test sistemleri, framework'ler, linter ve formatter'lar ise bu temel standartların üzerinde çalışarak geliştirme sürecini kolaylaştırır.

Sunucu tarafında ASP.NET, Django, Laravel veya Next.js gibi teknolojiler veri işleme, veritabanı erişimi ve dinamik içerik üretme görevlerini üstlenebilir. Statik içerik sunucudan değişmeden gönderilirken dinamik içerik kullanıcının konumu, oturumu, tercihleri veya veritabanındaki bilgilere göre değişebilir.

Son olarak modern web geliştirme yalnızca çalışan kod yazmakla sınırlı değildir. **Progressive enhancement, tarayıcılar arası uyumluluk, katmanların ayrılması, responsive tasarım, performans, uluslararasılaştırma, gizlilik ve güvenlik** gibi iyi uygulamalar, sitelerin mümkün olduğunca fazla kullanıcı ve cihaz için kullanılabilir olmasını sağlar.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“The web standards model”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) sayfasının konu sırası ve öğrenme hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### İlgili standart kuruluşları

- [W3C](https://www.w3.org/)
- [WHATWG](https://whatwg.org/)
- [TC39](https://tc39.es/)
- [Ecma International](https://ecma-international.org/)
- [Khronos Group](https://www.khronos.org/)

### İlgili süreç belgeleri

- [W3C Process Document](https://www.w3.org/policies/process/)
- [WHATWG Working Mode](https://whatwg.org/working-mode)
- [TC39 Process](https://tc39.es/process-document/)

### Temel web teknolojileri

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML)
