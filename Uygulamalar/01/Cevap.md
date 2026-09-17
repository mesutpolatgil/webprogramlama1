# Hata 1 — CSS klasör yolu

Hatalı:

```html
<link href="style/style.css" rel="styleshet" />
```

Gerçek klasör:

```text
styles/
```

Doğrusu:

```html
<link href="styles/style.css" rel="stylesheet" />
```

Burada aslında **iki hata** vardır:

- `style` → `styles`
- `styleshet` → `stylesheet`

CSS çalışmadığında materyalde önerilen kontroller arasında dosya adı, dosyanın `styles` klasöründe bulunması, `<link>` yolunun doğruluğu ve `rel="stylesheet"` kullanılması bulunuyor.

# Hata 2 — JavaScript klasör yolu

Hatalı:

```html
<script src="script/main.js"></script>
```

Gerçek klasör:

```text
scripts/
```

Doğrusu:

```html
<script src="scripts/main.js"></script>
```

Kaynak materyalde `main.js` dosyası `scripts` klasöründe tutuluyor ve HTML'den `scripts/main.js` yolu ile bağlanıyor.

# Hata 3 — Görsel yolu

Hatalı:

```html
<img src="Images/logo.png" alt="Web geliştirme logosu" />
```

Gerçek klasör:

```text
images/
```

Doğrusu:

```html
<img src="images/logo.png" alt="Web geliştirme logosu" />
```

Bu hata özellikle önemlidir çünkü Windows ortamında öğrencinin bilgisayarında bazen fark edilmese bile yayımlama ortamında problem yaratabilir. GitHub Pages örneğinde `Images/logo.png` ile `images/logo.png` yollarının aynı olmadığı açıkça gösteriliyor.

# Hata 4 — CSS background-color

Hatalı:

```css
background-color #f5f5f5;
```

Doğrusu:

```css
background-color: #f5f5f5;
```

# Hata 5 — CSS color

Hatalı:

```css
color navy;
```

Doğrusu:

```css
color: navy;
```

Bu iki hata öğrencinin `özellik: değer;` CSS sözdizimini tanıyıp tanımadığını ölçer.

# Hata 6 — CSS seçicisi

HTML:

```html
<p class="aciklama">
```

CSS:

```css
#aciklama {
```

`#` bir `id`, `.` ise bir sınıf seçicisidir. Materyalde `.card` sınıf, `#main` ise kimlik seçicisi örneği olarak veriliyor.

Doğrusu:

```css
.aciklama {
  border: 2px solid #333;
  padding: 10px;
}
```

# Hata 7 — Yanlış JavaScript seçicisi

Hatalı:

```javascript
const baslik = document.querySelector("h2");
```

Butonun değiştirmesi istenen öğe:

```html
<h1 id="baslik">
```

En açık düzeltme:

```javascript
const baslik = document.querySelector("#baslik");
```

veya:

```javascript
const baslik = document.querySelector("h1");
```

Materyalde `document.querySelector("h1")` kullanılarak ilk `<h1>` öğesinin seçilip `textContent` ile değiştirildiği örnek bulunuyor.

# Hata 8 — addEventListener

Hatalı:

```javascript
buton.addEventListener("click", basligiDegistir());
```

Doğrusu:

```javascript
buton.addEventListener("click", basligiDegistir);
```

Fonksiyonu hemen çalıştırmak yerine tıklama gerçekleştiğinde çalıştırılacak fonksiyon verilmelidir.

# Düzeltilmiş main.js

Sonuçta:

```javascript
const baslik = document.querySelector("#baslik");
const buton = document.querySelector("#degistir");
const gorevler = document.querySelectorAll("#gorevler li");

function basligiDegistir() {
  baslik.textContent = "Tüm hataları çözdüm!";
}

buton.addEventListener("click", basligiDegistir);

function durumuDegistir(olay) {
  olay.target.classList.toggle("tamamlandi");
}

gorevler.forEach((gorev) => {
  gorev.addEventListener("click", durumuDegistir);
});
```

Çalışan durumda öğrencinin şu sonuçları görmesi gerekir:

- Sayfaya CSS uygulanır.
- Arka plan rengi görünür.
- Başlık ortalanır ve renklendirilir.
- Logo görünür.
- Açıklama paragrafının kenarlığı görünür.
- **Başlığı değiştir** düğmesine basınca başlık `Tüm hataları çözdüm!` olur.
- Liste maddesine tıklayınca madde üstü çizili hale gelir; tekrar tıklanınca eski durumuna döner.

# Son 10 dakikalık değerlendirme

Kod bittikten sonra öğrencilere yalnızca “çalıştı mı?” demek yerine şu üç soruyu yazılı olarak cevaplatabilirsiniz:

1. **En zor bulduğun hata hangisiydi ve seni hangi belirti doğru yere yönlendirdi?**
2. **Dosya yolu hatası ile kod sözdizimi hatasının farkı nedir?**
3. **Bir web sitesi çalışmadığında HTML, CSS ve JavaScript dosyalarını hangi sırayla kontrol ederdin? Neden?**

Özellikle üçüncü soru hata ayıklama zihniyetini ölçer. Yüklediğin materyal de hata mesajlarını araştırmayı, önce problemi kendin çözmeye çalışmayı ve önemli bilgileri güvenilir dokümantasyonla doğrulamayı öneriyor.

# Puanlama önerisi

**100 puan** üzerinden: 8 hatanın doğru tespiti ve düzeltilmesi **64 puan** (8×8), hata takip tablosunun doldurulması **15 puan**, son üç değerlendirme sorusu **15 puan**, dosya düzenini koruma ve temiz çalışma **6 puan**.
