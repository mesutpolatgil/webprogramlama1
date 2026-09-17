# JavaScript: Etkileşim Ekleme

> **Kaynak:** [MDN Web Docs — JavaScript: Adding interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini, uygulama akışını ve görsel referanslarını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 17 Ekim 2025

JavaScript, web sitelerine etkileşim kazandıran programlama dilidir. Form doğrulama, düğme davranışları, oyun mantığı, dinamik stiller, animasyon güncellemeleri ve kullanıcı etkileşimleri gibi pek çok işi JavaScript ile gerçekleştirebilirsiniz.

Bu bölümde ilk web sitenize birkaç küçük JavaScript özelliği ekleyeceksiniz. Amaç JavaScript'in tamamını öğrenmek değil; değişkenler, koşullar, fonksiyonlar ve olaylar gibi temel kavramların gerçek bir web sayfasında nasıl kullanıldığını görmektir.

|  |  |
| --- | --- |
| **Ön koşullar:** | İşletim sisteminizi, temel web geliştirme yazılımlarını ve dosya sistemini kullanabiliyor olmak; önceki bölümlerde oluşturulan HTML ve CSS sayfasına sahip olmak. |
| **Öğrenme çıktıları:** | • JavaScript'in amacını ve web sayfasındaki rolünü anlamak.<br>• Değişkenler, işleçler, koşullar, fonksiyonlar ve olaylar hakkında temel fikir edinmek.<br>• DOM ve Web Storage API gibi tarayıcı özelliklerini JavaScript ile kullanmaya başlamak. |

## Bu makalede

- [JavaScript nedir?](#javascript-nedir)
- ["Hello world!" uygulaması](#hello-world-uygulaması)
- [Görsel değiştirici ekleme](#görsel-değiştirici-ekleme)
- [Kişiselleştirilmiş karşılama mesajı ekleme](#kişiselleştirilmiş-karşılama-mesajı-ekleme)
- [Kullanıcı adı `null` olursa ne olur?](#kullanıcı-adı-null-olursa-ne-olur)
- [Sonuç](#sonuç)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## JavaScript nedir?

JavaScript tam özellikli bir programlama dilidir. Diğer programlama dillerinde de görebileceğiniz birçok temel yapıya sahiptir:

- Değişkenler,
- Operatörler,
- Koşullu ifadeler,
- Döngüler,
- Fonksiyonlar,
- Nesneler,
- Olaylar.

Web sayfalarında JavaScript çoğu zaman şu genel akışla çalışır:

1. Sayfadaki bir öğeye veya bir değere ulaşır.
2. Bu değer üzerinde bir işlem yapar.
3. Ortaya çıkan sonucu sayfada başka bir işlem için kullanır.

Örneğin aşağıdaki basit HTML listesini düşünün:

```html
<p>Günlük görevler:</p>

<ul>
  <li>Kahvaltı yap</li>
  <li>Çalış</li>
  <li>Dinlen</li>
</ul>
```

Şimdi tamamlanan görevleri farklı göstermek için bir CSS sınıfı tanımlayalım:

```css
.tamamlandi {
  color: seagreen;
  text-decoration: line-through 2px #222;
}
```

JavaScript ile listedeki her öğeyi seçip, tıklandığında bu sınıfı açıp kapatabiliriz:

```js
const gorevler = document.querySelectorAll("li");

function durumuDegistir(olay) {
  olay.target.classList.toggle("tamamlandi");
}

gorevler.forEach((gorev) => {
  gorev.addEventListener("click", durumuDegistir);
});
```

Burada birkaç önemli şey gerçekleşiyor:

- `document.querySelectorAll("li")` sayfadaki tüm `<li>` öğelerini seçer.
- Seçilen öğeler `gorevler` değişkenine kaydedilir.
- `durumuDegistir()` isimli bir fonksiyon tanımlanır.
- `classList.toggle()` CSS sınıfını ekleyip kaldırır.
- `addEventListener("click", ...)` tıklama olayını dinler.
- `forEach()` her liste öğesine aynı davranışı uygular.

Liste öğesine tıkladığınızda üstü çizili görünüm açılır veya kapanır.

> **Not:** Bu kodun her ayrıntısını şu anda anlamanız beklenmiyor. JavaScript, HTML ve CSS'e kıyasla başlangıçta daha fazla yeni kavram içerir. İlerleyen modüllerde bunları tek tek ele alacaksınız.

## "Hello world!" uygulaması

Programlama öğrenirken en yaygın ilk örneklerden biri ekrana veya sayfaya `"Hello world!"` yazdırmaktır.

Bu bölümde mevcut web sayfanızın başlığını JavaScript ile değiştireceğiz.

> **Uyarı:** Önceki bölümlerde örnek siteyi oluşturmadıysanız MDN'nin kaynak sayfasındaki başlangıç kodunu indirip kullanabilirsiniz.

### 1. `scripts` klasörünü oluşturun

`first-website` klasörünün içine yeni bir klasör ekleyin:

```text
scripts
```

Proje yapınız artık buna benzer olmalıdır:

```text
first-website/
├── images/
├── scripts/
├── styles/
└── index.html
```

### 2. JavaScript dosyasını oluşturun

`scripts` klasörünün içine:

```text
main.js
```

adında yeni bir dosya oluşturun.

### 3. JavaScript dosyasını HTML'e bağlayın

`index.html` dosyanızda kapanış `</head>` etiketinden hemen önce şu satırı ekleyin:

```html
<script async src="scripts/main.js"></script>
```

Örneğin:

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>İlk web sayfam</title>
  <link href="styles/style.css" rel="stylesheet" />
  <script async src="scripts/main.js"></script>
</head>
```

Bu bağlantı, CSS için kullandığınız `<link>` öğesine benzer bir görevi yerine getirir: JavaScript dosyasını web sayfasına dahil eder.

### 4. Başlığı JavaScript ile değiştirin

`main.js` dosyasına şu kodu ekleyin:

```js
const baslik = document.querySelector("h1");

baslik.textContent = "Merhaba dünya!";
```

Burada:

```js
document.querySelector("h1")
```

sayfadaki ilk `<h1>` öğesini bulur.

Sonuç `baslik` adlı bir değişkende saklanır:

```js
const baslik = document.querySelector("h1");
```

Ardından:

```js
baslik.textContent = "Merhaba dünya!";
```

ile `<h1>` öğesinin metni değiştirilir.

Dosyaları kaydedip `index.html` sayfasını tarayıcıda yenilediğinizde başlık değişmelidir.

Kaynak MDN örneğinde sonuç şu şekilde görünür:

![Hello world başlığı ve Firefox logosu bulunan örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity/hello-world.png)

### JavaScript yorumları

JavaScript'te tek satırlık yorumlar:

```js
// Bu bir JavaScript yorumudur.
```

şeklinde yazılır.

Örneğin:

```js
// Ana başlığı bul
const baslik = document.querySelector("h1");

// Başlığın metnini değiştir
baslik.textContent = "Merhaba dünya!";
```

Yorumlar tarayıcı tarafından kod olarak çalıştırılmaz. Kodun neden yazıldığını açıklamak için kullanılabilir.

> **Uyarı:** Sonraki alıştırmaya geçmeden önce bu `"Merhaba dünya!"` kodunu `main.js` dosyasından kaldırın. Bir sonraki özellik kendi başlık davranışını kullanacaktır.

## Görsel değiştirici ekleme

Şimdi JavaScript ve **DOM API** kullanarak kullanıcı görsele tıkladığında iki görsel arasında geçiş yapılmasını sağlayacağız.

### 1. İkinci görseli seçin

Mevcut görsele mümkün olduğunca yakın boyutlarda ikinci bir görsel bulun.

Örneğin:

```text
images/
├── firefox-icon.png
└── firefox-second.png
```

### 2. Görsel öğesini JavaScript ile seçin

`main.js` içine:

```js
const logo = document.querySelector("img");
```

ekleyin.

Bu satır sayfadaki ilk `<img>` öğesine erişir ve onu `logo` değişkeninde saklar.

### 3. Tıklama olayını dinleyin

Şu kodu ekleyin:

```js
logo.addEventListener("click", () => {
  const mevcutKaynak = logo.getAttribute("src");

  if (mevcutKaynak === "images/firefox-icon.png") {
    logo.setAttribute("src", "images/firefox-second.png");
  } else {
    logo.setAttribute("src", "images/firefox-icon.png");
  }
});
```

> **Not:** Kendi görsellerinizin dosya adları farklıysa kod içindeki yolları değiştirin.

### Kod nasıl çalışıyor?

Önce:

```js
const mevcutKaynak = logo.getAttribute("src");
```

ile `<img>` öğesinin mevcut `src` değeri okunur.

Daha sonra bir koşul kullanılır:

```js
if (mevcutKaynak === "images/firefox-icon.png") {
  ...
} else {
  ...
}
```

Koşul doğruysa:

```js
logo.setAttribute("src", "images/firefox-second.png");
```

ile ikinci görsel yüklenir.

Aksi durumda:

```js
logo.setAttribute("src", "images/firefox-icon.png");
```

çalışır ve ilk görsele dönülür.

Böylece her tıklamada iki görsel arasında geçiş yapılır.

### Bu örnekteki önemli kavramlar

#### API

**API (Application Programming Interface)**, bir programlama ortamının özelliklerine kod üzerinden erişmenizi sağlayan arayüzdür.

Tarayıcıların sunduğu Web API'leri JavaScript ile:

- HTML öğelerini değiştirme,
- Veri saklama,
- Ağ isteği yapma,
- Ses/video kontrol etme

gibi işlemleri mümkün kılar.

Bu örnekte kullanılan DOM özellikleri Web API'lerinin bir parçasıdır.

#### Olaylar

Tarayıcı içinde gerçekleşen işlemlere **event (olay)** denir.

Örneğin:

- `click`
- Klavye tuşuna basılması,
- Fare hareketi,
- Form gönderimi,
- Sayfanın yüklenmesi

birer olay olabilir.

Bu örnekte:

```js
logo.addEventListener("click", ...)
```

kullanıcının görsele tıklamasını dinler.

#### Fonksiyonlar

Fonksiyonlar, bir görevi gerçekleştiren yeniden kullanılabilir kod bloklarıdır.

Örneğimizde:

```js
() => {
  ...
}
```

bir **arrow function (ok fonksiyonu)** tanımıdır.

Kullanıcı her tıkladığında bu fonksiyon tekrar çalışır.

#### Koşullar

Koşullar, farklı durumlarda farklı kodların çalışmasını sağlar.

En bilinen yapılardan biri:

```js
if (...) {
  ...
} else {
  ...
}
```

biçimidir.

Burada JavaScript mevcut görselin hangisi olduğuna bakıp hangi görselin yüklenmesi gerektiğine karar verir.

## Kişiselleştirilmiş karşılama mesajı ekleme

Şimdi kullanıcı siteye geldiğinde adını soran ve bu adı tarayıcıda saklayan küçük bir özellik ekleyelim.

Amaç:

- Kullanıcının adını istemek,
- Adı `localStorage` içinde saklamak,
- Başlıkta kişiselleştirilmiş mesaj göstermek,
- Kullanıcının daha sonra adını değiştirebilmesini sağlamak.

### 1. HTML'e düğme ekleyin

`index.html` dosyasında kapanış `</body>` etiketinden hemen önce:

```html
<button>Kullanıcıyı değiştir</button>
```

ekleyin.

Örneğin:

```html
  <button>Kullanıcıyı değiştir</button>
</body>
```

### 2. Düğme ve başlığa erişin

`main.js` dosyanızın sonuna:

```js
const kullaniciDugmesi = document.querySelector("button");
const anaBaslik = document.querySelector("h1");
```

ekleyin.

### 3. Kullanıcı adını ayarlayan fonksiyon

Şimdi:

```js
function kullaniciAdiAyarla() {
  const ad = prompt("Lütfen adınızı girin.");

  localStorage.setItem("kullaniciAdi", ad);
  anaBaslik.textContent = `Hoş geldin, ${ad}!`;
}
```

fonksiyonunu ekleyin.

Bu fonksiyonun içinde üç temel işlem vardır.

#### `prompt()`

```js
const ad = prompt("Lütfen adınızı girin.");
```

kullanıcıya bir iletişim kutusu gösterir.

Kullanıcının girdiği değer `ad` değişkenine atanır.

#### `localStorage.setItem()`

```js
localStorage.setItem("kullaniciAdi", ad);
```

veriyi tarayıcının yerel depolama alanında saklar.

Bu verinin anahtarı:

```text
kullaniciAdi
```

değeriyse kullanıcının girdiği addır.

#### Template literal

```js
`Hoş geldin, ${ad}!`
```

backtick karakterleriyle oluşturulan bir **template literal** örneğidir.

`${ad}` kısmında değişkenin değeri metnin içine yerleştirilir.

### 4. Sayfa açıldığında kullanıcı adını kontrol edin

Fonksiyonun altına şu koşulu ekleyin:

```js
if (!localStorage.getItem("kullaniciAdi")) {
  kullaniciAdiAyarla();
} else {
  const kayitliAd = localStorage.getItem("kullaniciAdi");
  anaBaslik.textContent = `Hoş geldin, ${kayitliAd}!`;
}
```

Burada:

```js
localStorage.getItem("kullaniciAdi")
```

daha önce kaydedilmiş bir ad olup olmadığını kontrol eder.

Başındaki:

```text
!
```

karakteri JavaScript'teki **logical NOT (mantıksal değil)** operatörüdür.

Yani:

```js
if (!localStorage.getItem("kullaniciAdi"))
```

ifadesi kabaca:

> Eğer `kullaniciAdi` kaydı yoksa...

anlamına gelir.

Kayıt yoksa:

```js
kullaniciAdiAyarla();
```

çalışır.

Kayıt varsa:

```js
const kayitliAd = localStorage.getItem("kullaniciAdi");
```

ile değer alınır ve başlığa yazılır.

### 5. Düğmeye olay ekleyin

Kullanıcının adını sonradan değiştirebilmesi için:

```js
kullaniciDugmesi.addEventListener("click", () => {
  kullaniciAdiAyarla();
});
```

kodunu ekleyin.

Artık:

1. Sayfa ilk açıldığında ad istenir.
2. Girilen ad başlıkta görünür.
3. Sayfa yenilense bile ad korunur.
4. **Kullanıcıyı değiştir** düğmesine basıldığında yeni ad girilebilir.

### Operatör nedir?

JavaScript'te bir veya daha fazla değer üzerinde işlem yapan sembollere **operator (operatör)** denir.

Örnekler:

```text
+   toplama / birleştirme
-   çıkarma
*   çarpma
/   bölme
!   mantıksal değili
=== eşitlik karşılaştırması
```

Bu bölümde özellikle:

```js
!
```

ve:

```js
===
```

operatörlerini kullandınız.

## Kullanıcı adı `null` olursa ne olur?

Yukarıdaki kodu çalıştırıp `prompt()` penceresinde **İptal / Cancel** düğmesine basarsanız JavaScript:

```js
null
```

değerini döndürebilir.

Bu durumda başlığınız istemeden şuna benzer hale gelebilir:

```text
Hoş geldin, null!
```

Aynı şekilde kullanıcı hiçbir şey yazmadan **OK** düğmesine basarsa boş bir string (`""`) dönebilir.

Bunu engellemek için fonksiyonumuzu kontrol ekleyerek geliştirebiliriz:

```js
function kullaniciAdiAyarla() {
  const ad = prompt("Lütfen adınızı girin.");

  if (!ad) {
    kullaniciAdiAyarla();
  } else {
    localStorage.setItem("kullaniciAdi", ad);
    anaBaslik.textContent = `Hoş geldin, ${ad}!`;
  }
}
```

Buradaki:

```js
if (!ad)
```

ifadesi `ad` değerinin boş veya kullanılabilir olmayan bir değer olup olmadığını kontrol eder.

Ad yoksa fonksiyon tekrar çalışır:

```js
kullaniciAdiAyarla();
```

Geçerli bir değer varsa:

```js
localStorage.setItem("kullaniciAdi", ad);
anaBaslik.textContent = `Hoş geldin, ${ad}!`;
```

çalışır.

> **Not:** Bu başlangıç örneği öğretim amacıyla basit tutulmuştur. Gerçek uygulamalarda kullanıcı girdisi için daha iyi doğrulama, erişilebilir iletişim kutuları ve uygun form öğeleri tercih edilir.

## Tam `main.js` örneği

Bu bölümdeki iki özelliği bir araya getirdiğinizde `main.js` dosyanız aşağıdakine benzer olabilir:

```js
const logo = document.querySelector("img");

logo.addEventListener("click", () => {
  const mevcutKaynak = logo.getAttribute("src");

  if (mevcutKaynak === "images/firefox-icon.png") {
    logo.setAttribute("src", "images/firefox-second.png");
  } else {
    logo.setAttribute("src", "images/firefox-icon.png");
  }
});

const kullaniciDugmesi = document.querySelector("button");
const anaBaslik = document.querySelector("h1");

function kullaniciAdiAyarla() {
  const ad = prompt("Lütfen adınızı girin.");

  if (!ad) {
    kullaniciAdiAyarla();
  } else {
    localStorage.setItem("kullaniciAdi", ad);
    anaBaslik.textContent = `Hoş geldin, ${ad}!`;
  }
}

if (!localStorage.getItem("kullaniciAdi")) {
  kullaniciAdiAyarla();
} else {
  const kayitliAd = localStorage.getItem("kullaniciAdi");
  anaBaslik.textContent = `Hoş geldin, ${kayitliAd}!`;
}

kullaniciDugmesi.addEventListener("click", () => {
  kullaniciAdiAyarla();
});
```

Kendi dosya adlarınız farklıysa görsel yollarını değiştirmeyi unutmayın.

## Sonuç

Bu adımları tamamladığınızda sitenizde artık:

- CSS ile biçimlendirilmiş HTML içeriği,
- Tıklanınca değişen bir görsel,
- Kullanıcının adını isteyen bir iletişim kutusu,
- İsmi tarayıcıda saklayan `localStorage`,
- Kişiselleştirilmiş bir başlık,
- Kullanıcı adını değiştiren bir düğme

bulunmalıdır.

Kaynak MDN eğitimindeki tamamlanmış sayfa buna benzer görünür:

![Kişiselleştirilmiş başlık, büyük Firefox logosu, içerik ve kullanıcı değiştirme düğmesi bulunan tamamlanmış örnek sayfa](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity/website-screen-scripted.png)

MDN'nin çalışan örneğini incelemek için:

[MDN canlı örneği](https://mdn.github.io/beginner-html-site-scripted/)

Tamamlanmış örnek kod için:

[MDN örnek deposu](https://github.com/mdn/beginner-html-site-scripted)

Bu bölüm JavaScript'in yalnızca küçük bir bölümünü göstermektedir. Sonraki öğrenme yolunda **Dynamic scripting with JavaScript** modülüyle değişkenler, diziler, fonksiyonlar, olaylar, DOM, ağ istekleri, JSON ve hata ayıklama gibi konuları çok daha ayrıntılı öğreneceksiniz.

## Ayrıca bakınız

### MDN — Dynamic scripting with JavaScript

JavaScript'i sistematik biçimde öğrenmek için:

[Dynamic scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)

### Scrimba — Learn JavaScript

MDN'nin öğrenme ortaklarından Scrimba'nın etkileşimli JavaScript eğitimi:

[Scrimba — Learn JavaScript](https://scrimba.com/learn-javascript-c0v)

Bu tür eğitimlerde kodu doğrudan tarayıcı içinde çalıştırarak alıştırmalar yapabilirsiniz.

### Learn JavaScript

Bir başka interaktif kaynak:

[Learn JavaScript](https://learnjavascript.online/)

> **Not:** Scrimba ve Learn JavaScript, MDN dokümantasyonundan ayrı harici eğitim hizmetleridir.

## Özet

Bu bölümde JavaScript'in web sayfasına **davranış ve etkileşim** ekleyen programlama dili olduğunu gördünüz. HTML sayfanın yapısını, CSS görünümünü oluştururken JavaScript kullanıcı eylemlerine tepki vermek, öğeleri değiştirmek ve veri saklamak gibi dinamik görevleri yerine getirir.

İlk uygulamada `document.querySelector()` kullanarak bir HTML öğesine ulaştınız ve `textContent` özelliğini değiştirerek başlık metnini JavaScript üzerinden güncellediniz. Böylece JavaScript'in DOM üzerinden mevcut HTML içeriğine erişip değiştirebildiğini gördünüz.

Ardından bir görsele `click` olayı bağlayarak iki görsel arasında geçiş yaptınız. Bu örnek üzerinden **olaylar, fonksiyonlar, koşullu ifadeler, DOM API, `getAttribute()` ve `setAttribute()`** gibi temel kavramlarla tanıştınız. Kullanıcının yaptığı bir işlemin JavaScript kodunu tetikleyebileceğini ve kodun sayfanın görünümünü anında değiştirebildiğini deneyimlediniz.

Kişiselleştirilmiş karşılama örneğinde `prompt()` ile kullanıcıdan veri aldınız ve **Web Storage API** içindeki `localStorage` kullanarak bu veriyi tarayıcıda sakladınız. `if...else` koşulu ile kayıtlı kullanıcı adı olup olmadığını kontrol ettiniz ve düğme tıklamasına yeni bir olay dinleyicisi eklediniz. Son olarak `null` veya boş değerlerin beklenmeyen sonuçlar oluşturabileceğini görerek temel girdi kontrolü eklediniz.

Bu aşamada HTML, CSS ve JavaScript birlikte çalışan küçük fakat etkileşimli bir web siteniz var. Sonraki adımda projeyi yalnızca kendi bilgisayarınızda çalışan bir dosya olmaktan çıkarıp **internette yayımlayarak başka kullanıcıların erişebileceği hale getireceksiniz**.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“JavaScript: Adding interactivity”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) sayfasındaki konu sırası, eğitim hedefleri ve uygulama akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [Hello world örnek sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity/hello-world.png)
- [Tamamlanmış etkileşimli site](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity/website-screen-scripted.png)

### İlgili kaynaklar

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
- [Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [Functions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions)
- [Conditionals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Dynamic scripting with JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting)
