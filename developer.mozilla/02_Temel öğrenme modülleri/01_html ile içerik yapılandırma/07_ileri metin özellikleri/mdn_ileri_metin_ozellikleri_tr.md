# İleri Metin Özellikleri

> **Kaynak:** [MDN Web Docs — Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini, Playground görevlerini ve temel örneklerini izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 25 Ağustos 2026

HTML, başlıklar, paragraflar, listeler, vurgu ve önem dışında da metnin anlamını ayrıntılı biçimde tanımlayabilen birçok semantik öğeye sahiptir.

Bu bölümde daha az kullanılan ama gerçek projelerde oldukça yararlı olan metin öğelerini öğreneceksiniz. Konular arasında:

- Uzun ve kısa alıntılar,
- Kaynak gösterme,
- Kısaltmalar ve akronimler,
- İletişim bilgileri,
- Üst ve alt simge,
- Bilgisayar kodu,
- Klavye girdileri ve program çıktıları,
- Makine tarafından okunabilir tarih/saat bilgileri

bulunur.

|  |  |
| --- | --- |
| **Ön koşullar:** | [Temel HTML Sözdizimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax), [Başlıklar ve Paragraflar](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) ve [Listeler](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists) konularında temel bilgi. |
| **Öğrenme çıktıları:** | • Alıntıları semantik biçimde işaretlemek.<br>• Kısaltma ve akronimleri tanımlamak.<br>• İletişim bilgilerini doğru bağlamda işaretlemek.<br>• Üst ve alt simge kullanmak.<br>• Kod, değişken, klavye girdisi ve program çıktısını anlamlı HTML ile göstermek.<br>• Tarih ve saatleri makine tarafından okunabilir biçimde ifade etmek. |

## Bu makalede

- [Alıntılar](#alıntılar)
- [Kısaltmalar](#kısaltmalar)
- [İletişim bilgilerini işaretleme](#iletişim-bilgilerini-işaretleme)
- [Üst simge ve alt simge](#üst-simge-ve-alt-simge)
- [Bilgisayar kodunu temsil etme](#bilgisayar-kodunu-temsil-etme)
- [Tarih ve saatleri işaretleme](#tarih-ve-saatleri-işaretleme)
- [Özet](#özet)

# Alıntılar

HTML, başka bir kaynaktan alınmış metinleri semantik olarak işaretlemek için özel öğeler sunar.

Hangi öğeyi kullanacağınız, alıntının:

```text
blok düzeyinde uzun bir alıntı mı
```

yoksa:

```text
satır içinde kısa bir alıntı mı
```

olduğuna bağlıdır.

Temel öğeler:

```html
<blockquote>
<q>
<cite>
```

Ayrıca:

```html
cite=""
```

attribute'u da alıntının kaynak URL'sini belirtmek için kullanılabilir.

# Blok alıntılar: `<blockquote>`

Bir paragraf, birden fazla paragraf veya başka bir blok düzeyindeki içerik başka bir kaynaktan alıntılanıyorsa:

```html
<blockquote>
```

kullanılır.

Basit örnek:

```html
<p>HTML hakkında bir alıntı:</p>

<blockquote>
  <p>
    HTML, web belgelerinin yapısını ve anlamını tanımlamak için kullanılır.
  </p>
</blockquote>
```

Tarayıcılar `<blockquote>` içeriğini varsayılan olarak çoğu zaman girintili gösterir.

Ancak bu görsel sonuç ikincildir.

Asıl semantik anlam:

```text
Bu blok içerik başka bir kaynaktan alınmış bir alıntıdır.
```

şeklindedir.

# `cite` attribute'u

Alıntının kaynağına ait URL:

```html
cite=""
```

attribute'u ile eklenebilir.

Örneğin:

```html
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote"
>
  <p>
    Bu bölüm başka bir kaynaktan alınmış uzun bir alıntıdır.
  </p>
</blockquote>
```

Buradaki:

```text
cite="..."
```

kaynak adresini makine tarafından okunabilir biçimde belirtir.

> **Önemli:** Tarayıcılar ve ekran okuyucular `cite` attribute'unu genellikle kullanıcıya görünür şekilde sunmaz. Kullanıcının kaynağa gerçekten ulaşmasını istiyorsanız ayrıca sayfa içinde görünür bir bağlantı sağlamalısınız.

# Satır içi alıntılar: `<q>`

Kısa ve paragraf içinde kullanılan alıntılar için:

```html
<q>
```

öğesi kullanılır.

Örnek:

```html
<p>
  Eğitmen,
  <q>Semantik HTML önce anlamı düşünmekle başlar.</q>
  dedi.
</p>
```

Tarayıcılar çoğu zaman `<q>` içeriğinin etrafına otomatik olarak tırnak işaretleri ekler.

Bu nedenle şu yaklaşım genellikle gerekli değildir:

```html
<p>
  Eğitmen, "<q>Semantik HTML...</q>" dedi.
</p>
```

Çünkü `<q>` kendi alıntı işaretlerini sağlayabilir.

# `<blockquote>` ile `<q>` farkı

| Öğe | Kullanım |
| --- | --- |
| `<blockquote>` | Uzun, blok düzeyindeki alıntılar |
| `<q>` | Cümle içinde geçen kısa alıntılar |

Örneğin uzun alıntı:

```html
<blockquote>
  <p>
    Birden fazla cümleden oluşan, kendi paragrafı olarak gösterilen
    uzun bir alıntı burada bulunabilir.
  </p>
</blockquote>
```

Kısa alıntı:

```html
<p>
  Yazar bunu <q>önemli bir dönüm noktası</q> olarak tanımlıyor.
</p>
```

# Kaynak başlığı: `<cite>`

HTML'deki:

```html
<cite>
```

öğesi kaynak eserin **başlığını** ifade etmek için kullanılır.

Örneğin:

```html
<p>
  Ayrıntılar için
  <cite>HTML Living Standard</cite>
  belgesine bakabilirsiniz.
</p>
```

Daha yararlı kullanım:

```html
<p>
  Ayrıntılar için
  <a href="https://html.spec.whatwg.org/">
    <cite>HTML Living Standard</cite>
  </a>
  belgesine bakabilirsiniz.
</p>
```

Burada:

```html
<cite>
```

kaynak eser adını semantik olarak işaretler.

```html
<a>
```

ise kullanıcıya gerçekten kaynağa gitme imkânı sağlar.

# `cite` attribute'u ile `<cite>` aynı şey değildir

Bu iki yapı isim olarak benzese de farklı görevleri vardır.

## `cite` attribute'u

```html
<blockquote cite="https://example.com/source">
```

veya:

```html
<q cite="https://example.com/source">
```

şeklinde kullanılır.

Görevi:

```text
alıntının kaynak URL'sini makine tarafından okunabilir biçimde belirtmek
```

tir.

## `<cite>` elementi

```html
<cite>Kaynak eserin adı</cite>
```

şeklinde kullanılır.

Görevi:

```text
alıntılanan veya referans verilen eserin başlığını belirtmek
```

tir.

Kısaca:

```text
cite=""
→ URL metadata'sı

<cite>
→ kaynak eser başlığı
```

# Görünür kaynak bağlantısı ekleme

Pratikte iyi yapı:

```html
<p>
  <a href="https://example.com/article">
    <cite>Örnek Makale</cite>
  </a>
  şöyle diyor:
</p>

<blockquote cite="https://example.com/article">
  <p>
    Anlamlı HTML, kullanıcı ve yazılım için daha açık bir belge oluşturur.
  </p>
</blockquote>
```

Böylece:

- HTML semantiği korunur,
- Kaynak URL metadata'da bulunur,
- Kullanıcı kaynağa tıklayabilir.

# Kim söyledi? Blockquote alıştırması

Kaynak MDN sayfasındaki ilk Playground alıştırması, alıntı öğelerini birlikte kullanmanızı ister.

## Başlangıç kodu

```html
<p>
  Hello and welcome to my motivation page. As Confucius' quotes site says:
</p>

<p>
  It does not matter how slowly you go as long as you do not stop.
</p>

<p>
  I also love the concept of positive thinking, and The Need To Eliminate
  Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)
</p>
```

## Görevler

1. Ortadaki paragrafı bir blok alıntıya dönüştürün.
2. `<blockquote>` üzerinde bir `cite` attribute'u kullanın.
3. Son paragraftaki `"The Need To Eliminate Negative Self Talk"` ifadesini satır içi alıntıya dönüştürün.
4. `<q>` öğesine de `cite` attribute'u ekleyin.
5. Kaynak eser adlarını `<cite>` içine alın.
6. Kaynak adlarını tıklanabilir bağlantıya dönüştürün.

Kaynak URL'ler:

```text
Confucius alıntısı:
http://www.brainyquote.com/quotes/authors/c/confucius.html
```

```text
The Need To Eliminate Negative Self Talk:
http://example.com/affirmationsforpositivethinking
```

## Çözüm yapısı

```html
<p>
  Hello and welcome to my motivation page. As
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html">
    <cite>Confucius' quotes site</cite>
  </a>
  says:
</p>

<blockquote
  cite="http://www.brainyquote.com/quotes/authors/c/confucius.html"
>
  <p>
    It does not matter how slowly you go as long as you do not stop.
  </p>
</blockquote>

<p>
  I also love the concept of positive thinking, and
  <q cite="http://example.com/affirmationsforpositivethinking">
    The Need To Eliminate Negative Self Talk
  </q>
  (as mentioned in
  <a href="http://example.com/affirmationsforpositivethinking">
    <cite>Affirmations for Positive Thinking</cite>
  </a>.)
</p>
```

Bu alıştırmada aynı anda:

```text
<blockquote>
<q>
<cite>
<a>
cite=""
```

kullanılmış olur.

# Alıntılarda sık yapılan hatalar

## Uzun alıntıyı yalnızca tırnak içine almak

Zayıf:

```html
<p>
  "Bu uzun bir paragraf alıntısıdır ve dış kaynaktan gelmektedir."
</p>
```

Semantik olarak daha iyi:

```html
<blockquote>
  <p>
    Bu uzun bir paragraf alıntısıdır ve dış kaynaktan gelmektedir.
  </p>
</blockquote>
```

## `<cite>` içine kişinin adını koymak

`<cite>` genellikle kaynak **eser başlığı** içindir.

Örneğin:

```html
<cite>Web Accessibility Guide</cite>
```

gibi.

Yazar adını otomatik olarak `<cite>` içine almak doğru varsayım değildir.

## Yalnızca `cite` attribute'una güvenmek

```html
<blockquote cite="https://example.com/article">
```

kullanıcıya görünür bağlantı sağlamaz.

Kullanıcının kaynağa erişmesini istiyorsanız ayrıca `<a>` ekleyin.

---

# Kısaltmalar

Web'de sıklıkla kısaltmalar ve akronimlerle karşılaşırız.

Örnekler:

```text
HTML
CSS
NASA
HTTP
API
LGTM
```

HTML'de bunları işaretlemek için:

```html
<abbr>
```

kullanılır.

# Basit `<abbr>` kullanımı

Örneğin:

```html
<p>
  <abbr>HTML</abbr>, HyperText Markup Language, web belgelerinin
  yapısını tanımlar.
</p>
```

Burada:

```html
<abbr>HTML</abbr>
```

ifadesi `"HTML"` metninin bir kısaltma olduğunu belirtir.

Açılımı ise düz metin olarak herkes için görünür şekilde verilmiştir.

# Kısaltmayı ilk kullanımda açıklama

Bir kısaltma okuyucu için önemliyse iyi bir yaklaşım:

```text
ilk kullanımda tam açılımı görünür metin olarak yaz
```

şeklindedir.

Örnek:

```html
<p>
  <abbr>CSS</abbr> (Cascading Style Sheets), web sayfalarının
  görünümünü tanımlamak için kullanılır.
</p>
```

Bu yöntem yalnızca mouse kullananlara değil, bütün kullanıcılara açıklamayı sunar.

# `title` ile açıklama

Bazı kısa ifadeleri her seferinde metin içinde açmak gereksiz olabilir.

Bu durumda:

```html
title=""
```

kullanılabilir.

Örneğin:

```html
<p>
  Tasarım incelemesi için
  <abbr title="Looks good to me">LGTM</abbr>
  yorumu bırakıldı.
</p>
```

Burada:

```text
LGTM
→ görünen kısaltma

Looks good to me
→ title içindeki açıklama
```

şeklindedir.

> **Erişilebilirlik notu:** `title` attribute'u bütün kullanıcılar için aynı derecede erişilebilir değildir; dokunmatik cihazlarda veya bazı yardımcı teknolojilerde içeriğe ulaşmak zor olabilir. Kullanıcının açılımı gerçekten bilmesi gerekiyorsa onu görünür metin olarak yazmak daha güvenlidir.

# Kısaltma örneği

Kaynak sayfadaki örneğin mantığı:

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our
  web documents.
</p>

<p>
  I think
  <abbr title="Reverend">Rev.</abbr>
  Green did it in the kitchen with the chainsaw.
</p>
```

İlk örnekte açılım doğrudan metinde bulunur.

İkinci örnekte kısa ünvanın açıklaması `title` attribute'undadır.

# `<acronym>` kullanmayın

HTML'in eski sürümlerinde:

```html
<acronym>
```

öğesi bulunuyordu.

Modern HTML standardında kaldırılmıştır.

Kısaltmalar ve akronimler için:

```html
<abbr>
```

kullanılmalıdır.

Yanlış / eski:

```html
<acronym>NASA</acronym>
```

Modern:

```html
<abbr>NASA</abbr>
```

# Kısaltma işaretleme alıştırması

Kaynak MDN'nin ikinci Playground alıştırması:

```html
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

## Görev

Kısaltmaları uygun HTML ile işaretleyin.

İlk kullanımda `"NASA"` açılımını görünür metin olarak sağlayabilirsiniz.

`"LGTM"` için ise açılımı `title` attribute'unda vermek mantıklı olabilir.

## Çözüm

```html
<p>
  <abbr>NASA</abbr>
  (the National Aeronautics and Space Administration) sure does some
  exciting work.
</p>

<p>
  The new user interface design
  <abbr title="Looks good to me">LGTM</abbr>!
</p>
```

## Neden iki farklı yöntem?

`NASA`:

```text
genel ve anlamlı bir kurum adı
→ açılımı herkesin metinde görebilmesi yararlı
```

`LGTM`:

```text
kısa çevrimiçi iletişim ifadesi
→ açılımın title içinde bulunması kabul edilebilir
```

Gerçek uygulamalarda yaygın kısaltmaların açıklamalarını otomatik olarak ekleyen sistemler bulunabilir.

# Türkçe örnek

```html
<p>
  <abbr>TBMM</abbr>
  (Türkiye Büyük Millet Meclisi) Ankara'dadır.
</p>

<p>
  API incelemesinde
  <abbr title="Looks good to me">LGTM</abbr>
  notu bırakıldı.
</p>
```

---

# İletişim bilgilerini işaretleme

HTML'de iletişim bilgilerini semantik olarak işaretlemek için:

```html
<address>
```

öğesi bulunur.

Basit örnek:

```html
<address>
  Ayşe Yılmaz, Ankara, Türkiye
</address>
```

Ancak `<address>` adı sizi yanıltmasın.

Bu öğe:

```text
herhangi bir fiziksel adresi
```

işaretlemek için değildir.

Asıl amacı ilgili belge veya makalenin **iletişim bilgilerini** ifade etmektir.

# Daha karmaşık `<address>` içeriği

`<address>` içine başka HTML öğeleri yerleştirilebilir.

Örneğin:

```html
<address>
  <p>
    Ayşe Yılmaz<br>
    Ankara<br>
    Türkiye
  </p>

  <ul>
    <li>Telefon: +90 555 000 00 00</li>
    <li>E-posta: ayse@example.com</li>
  </ul>
</address>
```

Burada:

```text
fiziksel konum
telefon
e-posta
```

aynı iletişim bloğu içinde yer alır.

# Yazar profiline bağlantı

Doğrudan bütün bilgileri yazmak yerine:

```html
<address>
  Sayfayı yazan:
  <a href="/authors/ayse-yilmaz/">Ayşe Yılmaz</a>
</address>
```

kullanabilirsiniz.

Eğer bağlantı hedefi yazarın iletişim/profil bilgilerini içeriyorsa bu da mantıklı bir kullanım olabilir.

# `<address>` ne zaman kullanılmalı?

`<address>` en yakın:

```html
<article>
```

veya:

```html
<body>
```

ile ilişkili iletişim bilgisini ifade eder.

## Tüm site için

Örneğin site footer'ında:

```html
<footer>
  <address>
    İletişim:
    <a href="mailto:info@example.com">info@example.com</a>
  </address>
</footer>
```

Bu tüm sitenin iletişim bilgisi olabilir.

## Makale yazarı için

```html
<article>
  <h2>Semantik HTML</h2>

  <p>...</p>

  <address>
    Yazar:
    <a href="/authors/ayse/">Ayşe Yılmaz</a>
  </address>
</article>
```

Buradaki `<address>` en yakın `<article>` ile ilişkilidir.

# `<address>` ne için kullanılmamalı?

Örneğin şehir rehberinde:

```text
Restoran A — şu adres
Restoran B — şu adres
Restoran C — şu adres
```

gibi sıradan adres listesi bulunuyorsa her birini yalnızca fiziksel adres oldukları için `<address>` ile işaretlemek doğru değildir.

Çünkü bunlar belgenin veya makale yazarının iletişim bilgileri değildir.

Böyle bir durumda:

```html
<p>
```

veya uygun veri/list yapısı kullanılabilir.

# E-posta ve telefon bağlantıları

İletişim bilgisini daha kullanışlı yapmak için:

```html
<a href="mailto:info@example.com">
```

ve:

```html
<a href="tel:+905550000000">
```

kullanılabilir.

Örnek:

```html
<address>
  <p>
    E-posta:
    <a href="mailto:info@example.com">info@example.com</a>
  </p>

  <p>
    Telefon:
    <a href="tel:+905550000000">+90 555 000 00 00</a>
  </p>
</address>
```

---

# Üst simge ve alt simge

Bazı metinlerde karakterlerin normal metin taban çizgisinden:

```text
yukarıda
```

veya:

```text
aşağıda
```

görünmesi yalnızca estetik değil, **anlamın bir parçasıdır**.

Örneğin:

- Matematik,
- Kimya,
- Tarihlerde sıra ekleri

gibi alanlarda.

HTML bunun için:

```html
<sup>
<sub>
```

öğelerini sunar.

# Üst simge: `<sup>`

`sup`:

```text
superscript
```

anlamına gelir.

Örneğin İngilizce bir tarih:

```html
<p>
  My birthday is on the 25<sup>th</sup> of May 2001.
</p>
```

Matematik:

```html
<p>
  x<sup>2</sup> = 9
</p>
```

Tarayıcıda kabaca:

```text
x²
```

gibi görünür.

# Alt simge: `<sub>`

`sub`:

```text
subscript
```

anlamına gelir.

Kimyasal formül:

```html
<p>
  Su molekülü H<sub>2</sub>O olarak yazılır.
</p>
```

Kafein örneği:

```html
<p>
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
</p>
```

Bu durumda küçük rakamların aşağıda görünmesi formülün gerçek anlamının bir parçasıdır.

# Matematik örneği

```html
<p>
  Eğer x<sup>2</sup> = 9 ise x değeri 3 veya -3 olabilir.
</p>
```

`2` yalnızca küçük ve yukarıda görünmesi için `<sup>` içine alınmaz.

Gerçek anlam:

```text
x'in karesi
```

dir.

# Sırf küçük metin için kullanmayın

Yanlış kullanım mantığı:

```text
Bu yazı küçük görünsün
→ <sub>
```

veya:

```text
Bu metni yukarı taşıyayım
→ <sup>
```

olmamalıdır.

Yalnızca görsel konum değişikliği istiyorsanız CSS kullanın.

HTML'de `<sup>` ve `<sub>` semantik anlam taşımalıdır.

---

# Bilgisayar kodunu temsil etme

Teknik dokümantasyonda sık sık:

- Kod,
- Değişken adı,
- Klavye girdisi,
- Terminal çıktısı

göstermek gerekir.

HTML bunlar için özel semantik öğeler sunar.

Temel öğeler:

```html
<code>
<pre>
<var>
<kbd>
<samp>
```

# `<code>`

Genel bilgisayar kod parçalarını işaretlemek için:

```html
<code>
```

kullanılır.

Satır içi örnek:

```html
<p>
  Konsola mesaj yazmak için
  <code>console.log()</code>
  kullanabilirsiniz.
</p>
```

HTML tag'ını kod olarak göstermek:

```html
<p>
  Paragraf için
  <code>&lt;p&gt;</code>
  öğesi kullanılır.
</p>
```

Burada:

```text
&lt;
&gt;
```

character reference kullanımı gerekir çünkü gerçek `<p>` tag'ının parse edilmesini istemiyoruz.

# `<pre>`

Normal HTML metninde birden fazla:

- Boşluk,
- Tab,
- Satır sonu

çoğunlukla tek whitespace gibi işlenir.

Kod bloklarında bu istenmez.

Kodun girintisini ve satır sonlarını korumak için:

```html
<pre>
```

kullanılır.

Örnek:

```html
<pre>satır 1
    girintili satır 2
satır 3</pre>
```

Tarayıcı `<pre>` içindeki whitespace'i korur.

# Kod bloğu için `<pre><code>`

Uzun kod parçalarında genellikle iki öğe birlikte kullanılır:

```html
<pre><code>...</code></pre>
```

Örneğin:

```html
<pre><code>const message = "Merhaba";

console.log(message);</code></pre>
```

Burada:

```text
<pre>
→ whitespace ve satır sonlarını korur

<code>
→ içeriğin bilgisayar kodu olduğunu belirtir
```

# Gerçekçi JavaScript örneği

```html
<pre><code>const para = document.querySelector("p");

para.addEventListener("click", () => {
  alert("Paragrafa tıkladınız.");
});</code></pre>
```

Bu yapı teknik makaleler ve dokümantasyon için çok yaygındır.

# `<var>`

Programlama veya matematikte bir değişken adı için:

```html
<var>
```

kullanılır.

Örnek:

```html
<p>
  Yukarıdaki JavaScript örneğinde
  <var>para</var>
  bir paragraf öğesine referans verir.
</p>
```

Matematiksel değişken:

```html
<p>
  <var>x</var> + <var>y</var> = 10
</p>
```

# `<kbd>`

Kullanıcının bilgisayara girdiği:

- Klavye tuşları,
- Komut,
- Başka kullanıcı input'u

için:

```html
<kbd>
```

kullanılır.

Klavye kısayolu:

```html
<p>
  Tüm metni seçmek için
  <kbd>Ctrl</kbd> + <kbd>A</kbd>
  kullanın.
</p>
```

Mac için:

```html
<p>
  Tüm metni seçmek için
  <kbd>Cmd</kbd> + <kbd>A</kbd>
  kullanın.
</p>
```

# Terminal komutu

```html
<pre>$ <kbd>ping example.com</kbd></pre>
```

Burada:

```text
ping example.com
```

kullanıcının girdiği komuttur.

Bu nedenle `<kbd>` uygun semantiktir.

# `<samp>`

Bir bilgisayar programının veya komutun **çıktısını** temsil etmek için:

```html
<samp>
```

kullanılır.

Örneğin:

```html
<pre>
$ <kbd>echo Merhaba</kbd>
<samp>Merhaba</samp>
</pre>
```

Burada:

```text
echo Merhaba
→ kullanıcı input'u

Merhaba
→ bilgisayar çıktısı
```

şeklinde farklı semantik roller vardır.

# Terminal örneği

```html
<pre>$ <kbd>ping example.com</kbd>
<samp>PING example.com: 56 data bytes
64 bytes from example.com: time=42 ms</samp></pre>
```

Bu örnekte:

```text
<pre>
→ satır düzeni

<kbd>
→ kullanıcının yazdığı komut

<samp>
→ program çıktısı
```

birlikte kullanılır.

# Bilgisayar metni öğelerini karşılaştıralım

| Öğe | Anlam |
| --- | --- |
| `<code>` | Genel kod parçası |
| `<pre>` | Whitespace korunmuş blok |
| `<var>` | Değişken adı |
| `<kbd>` | Kullanıcı girdisi / klavye |
| `<samp>` | Program çıktısı |

## Örnek

```html
<p>
  <code>console.log(<var>message</var>)</code>
  kodunu çalıştırmak için
  <kbd>Enter</kbd>
  tuşuna basın.
</p>

<p>
  Programın çıktısı:
  <samp>Merhaba</samp>
</p>
```

Bu yapı farklı teknik bilgi türlerini makine tarafından anlaşılabilir hale getirir.

# `<pre>` içinde HTML karakterleri

Kod bloğunda gerçek HTML tag'larını göstermek istiyorsanız:

```html
<pre><code><p>Merhaba</p></code></pre>
```

yazamazsınız çünkü tarayıcı `<p>` öğesini gerçek HTML olarak yorumlar.

Doğru:

```html
<pre><code>&lt;p&gt;Merhaba&lt;/p&gt;</code></pre>
```

Tarayıcıdaki görünen metin:

```html
<p>Merhaba</p>
```

olur.

Bu nedenle teknik dokümantasyon yazarken:

```text
< → &lt;
> → &gt;
& → &amp;
```

gibi character reference'ları hatırlamak önemlidir.

---

# Tarih ve saatleri işaretleme

İnsanlar tarihleri farklı biçimlerde yazar.

Örneğin aynı tarih:

```text
20 January 2016
20th January 2016
Jan 20 2016
20/01/16
01/20/16
20e Janvier 2016
2016年1月20日
```

şeklinde yazılabilir.

İnsan bağlamdan anlayabilir.

Fakat bilgisayar için:

```text
20/01/16
```

gibi bir ifade belirsiz olabilir.

Örneğin:

```text
20 Ocak 2016 mı?
```

veya bazı biçimlerde:

```text
ay/gün/yıl mı?
```

sorusu ortaya çıkabilir.

HTML bunun için:

```html
<time>
```

öğesini sağlar.

# Basit `<time>` kullanımı

```html
<time datetime="2016-01-20">
  20 January 2016
</time>
```

Burada:

```text
20 January 2016
→ kullanıcıya görünen metin

2016-01-20
→ makine tarafından okunabilir değer
```

Bu iki biçim birbirinden farklı olabilir.

Örneğin Türkçe:

```html
<time datetime="2026-09-16">
  16 Eylül 2026
</time>
```

Gayet geçerlidir.

# `datetime` neden yararlıdır?

Bir bilgisayar sayfadaki tarihleri otomatik işlemek isteyebilir.

Örneğin:

- Takvime ekleme,
- Etkinlik sıralama,
- Arama,
- Tarihleri dönüştürme,
- Veri çıkarma.

Görsel metin:

```text
16 Eylül Çarşamba
```

insana anlaşılır gelebilir ama makine için kesin yıl bilgisi içermeyebilir.

Buna karşılık:

```html
datetime="2026-09-16"
```

açıktır.

# Yalnızca yıl ve ay

```html
<time datetime="2016-01">
  Ocak 2016
</time>
```

# Yalnızca ay ve gün

```html
<time datetime="01-20">
  20 Ocak
</time>
```

# Saat

```html
<time datetime="19:30">
  19.30
</time>
```

# Saniye ve milisaniye

```html
<time datetime="19:30:01.856">
  19:30:01.856
</time>
```

# Tarih ve saat birlikte

```html
<time datetime="2026-09-16T19:30">
  16 Eylül 2026, 19.30
</time>
```

Buradaki:

```text
T
```

tarih ve saat parçalarını birbirinden ayırır.

# Saat dilimi farkı

Saat dilimi offset'i de belirtilebilir:

```html
<time datetime="2026-09-16T19:30+03:00">
  16 Eylül 2026 saat 19.30
</time>
```

Buradaki:

```text
+03:00
```

UTC'ye göre zaman farkını ifade eder.

# Hafta numarası

Belirli bir yılın belirli haftasını:

```html
<time datetime="2016-W04">
  2016'nın dördüncü haftası
</time>
```

şeklinde ifade etmek mümkündür.

# Görünen metin ile `datetime` aynı olmak zorunda değildir

Örneğin:

```html
<time datetime="2026-12-31">
  yılın son günü
</time>
```

kullanıcıya doğal dilde:

```text
yılın son günü
```

gösterirken bilgisayara kesin tarih değeri verebilir.

Ancak görünen metnin kullanıcıyı yanıltmaması gerekir.

# `<time>` kullanım örnekleri

## Blog yazısı

```html
<article>
  <h2>HTML Semantiği</h2>

  <p>
    Yayın tarihi:
    <time datetime="2026-09-16">16 Eylül 2026</time>
  </p>
</article>
```

## Etkinlik

```html
<p>
  Etkinlik
  <time datetime="2026-10-04T14:30+03:00">
    4 Ekim saat 14.30'da
  </time>
  başlayacak.
</p>
```

## Saat

```html
<p>
  Toplantı:
  <time datetime="09:00">09.00</time>
</p>
```

# `<time>` ile sıradan metin farkı

Sıradan:

```html
<p>Toplantı 16 Eylül 2026 tarihinde.</p>
```

İnsan için yeterlidir.

Semantik:

```html
<p>
  Toplantı
  <time datetime="2026-09-16">16 Eylül 2026</time>
  tarihinde.
</p>
```

İkinci sürüm ayrıca:

```text
Bu metin bir tarihtir
ve kesin makine değeri 2026-09-16'dır.
```

bilgisini sağlar.

---

# Tüm öğeleri tek örnekte birleştirelim

```html
<article>
  <h1>Web geliştirme notlarım</h1>

  <p>
    Yazı tarihi:
    <time datetime="2026-09-16">16 Eylül 2026</time>
  </p>

  <p>
    <abbr>HTML</abbr>
    (HyperText Markup Language) web belgelerinin yapısını tanımlar.
  </p>

  <p>
    MDN'nin
    <a href="https://developer.mozilla.org/">
      <cite>MDN Web Docs</cite>
    </a>
    kaynağında semantik HTML hakkında çok sayıda eğitim bulunur.
  </p>

  <blockquote cite="https://example.com/article">
    <p>
      Semantik işaretleme, içeriğin rolünü yalnızca görünüşten bağımsız
      biçimde ifade etmeyi amaçlar.
    </p>
  </blockquote>

  <p>
    Su formülü H<sub>2</sub>O'dur; matematikte x<sup>2</sup>
    ifadesi x'in karesini gösterir.
  </p>

  <p>
    JavaScript'te değişken:
    <code>const <var>message</var> = "Merhaba";</code>
  </p>

  <p>
    Terminalde komutu çalıştırmak için:
  </p>

  <pre>$ <kbd>echo Merhaba</kbd>
<samp>Merhaba</samp></pre>

  <address>
    Yazar:
    <a href="mailto:yazar@example.com">yazar@example.com</a>
  </address>
</article>
```

Bu örnekte:

```text
<time>
<abbr>
<cite>
<blockquote>
<sub>
<sup>
<code>
<var>
<kbd>
<samp>
<address>
```

öğelerinin tümü anlamlarına uygun bağlamlarda kullanılmıştır.

# Semantik seçim tablosu

| İhtiyaç | Öğe |
| --- | --- |
| Uzun blok alıntı | `<blockquote>` |
| Satır içi kısa alıntı | `<q>` |
| Kaynak eser başlığı | `<cite>` |
| Kısaltma/akronim | `<abbr>` |
| Belge veya makale iletişim bilgisi | `<address>` |
| Üst simge | `<sup>` |
| Alt simge | `<sub>` |
| Kod | `<code>` |
| Whitespace korunmuş içerik | `<pre>` |
| Değişken adı | `<var>` |
| Kullanıcı/klavye girdisi | `<kbd>` |
| Program çıktısı | `<samp>` |
| Tarih/saat | `<time>` |

# Sık yapılan hatalar

## `<blockquote>` öğesini yalnızca girinti vermek için kullanmak

Yanlış mantık:

```text
metni sağa kaydırmak istiyorum
→ <blockquote>
```

Doğrusu:

```text
başka bir kaynaktan uzun alıntı
→ <blockquote>
```

Sadece girinti gerekiyorsa CSS kullanın.

## `<q>` içine bütün paragrafı koymak

Uzun blok düzeyindeki alıntılarda:

```html
<blockquote>
```

daha uygundur.

`<q>` kısa satır içi alıntılar içindir.

## `cite` attribute'unun kullanıcıya görüneceğini sanmak

```html
<blockquote cite="...">
```

kaynağı otomatik olarak ekranda göstermez.

Görünür kaynak için `<a>` ve gerekiyorsa `<cite>` kullanın.

## `<acronym>` kullanmak

Kullanmayın:

```html
<acronym>HTML</acronym>
```

Kullanın:

```html
<abbr>HTML</abbr>
```

## Her fiziksel adres için `<address>` kullanmak

`<address>`, ilgili belge/makalenin iletişim bilgisidir.

Rastgele posta adresi listesi için genel amaçlı etiket değildir.

## Metni küçük göstermek için `<sub>` kullanmak

Yanlış:

```html
<sub>küçük dipnot</sub>
```

sırf boyut küçük olsun diye.

Görünüm için CSS kullanın.

## Kod bloğunu yalnızca `<code>` içine almak

Uzun, çok satırlı kod:

```html
<code>
const x = 1;
const y = 2;
</code>
```

şeklinde yazılırsa whitespace beklediğiniz gibi korunmayabilir.

Daha iyi:

```html
<pre><code>const x = 1;
const y = 2;</code></pre>
```

## Program çıktısı için `<code>` kullanmak

Program çıktısında daha semantik öğe:

```html
<samp>
```

dir.

## Klavye tuşu için `<span>` kullanmak

Semantik olarak:

```html
<kbd>Ctrl</kbd>
```

daha anlamlıdır.

## Tarihi yalnızca görsel metin olarak bırakmak

Kullanıcıya:

```text
16 Eylül 2026
```

göstermek yeterli olabilir ama veri işlemenin önemli olduğu durumda:

```html
<time datetime="2026-09-16">
  16 Eylül 2026
</time>
```

daha güçlü semantik sağlar.

# Pratik mini alıştırma

Aşağıdaki gereksinimleri tek bir HTML parçasında karşılayın:

1. `"API"` ifadesini kısaltma olarak işaretleyin ve ilk kullanımda `"Application Programming Interface"` açılımını görünür metin olarak verin.
2. Bir kişinin kısa sözünü `<q>` ile gösterin.
3. Kaynak kitap adını `<cite>` ile işaretleyin.
4. `CO₂` formülünde `2` rakamını alt simge yapın.
5. `x³` ifadesinde `3` rakamını üst simge yapın.
6. `npm install` terminal komutunu `<kbd>` ile işaretleyin.
7. Komut çıktısını `<samp>` ile işaretleyin.
8. `16 Eylül 2026` tarihini makine tarafından okunabilir `<time>` ile gösterin.
9. Sayfa yazarının e-posta adresini `<address>` içinde verin.

## Olası çözüm

```html
<article>
  <p>
    <abbr>API</abbr> (Application Programming Interface), yazılımların
    birbirleriyle iletişim kurmasını sağlar.
  </p>

  <p>
    Eğitmen,
    <q cite="https://example.com/book">
      Semantik HTML kodun anlamını açıklar.
    </q>
    dedi.
  </p>

  <p>
    Kaynak:
    <a href="https://example.com/book">
      <cite>Modern Web Development</cite>
    </a>
  </p>

  <p>Karbon dioksit: CO<sub>2</sub></p>

  <p>Matematik: x<sup>3</sup></p>

  <pre>$ <kbd>npm install</kbd>
<samp>added 42 packages</samp></pre>

  <p>
    Tarih:
    <time datetime="2026-09-16">16 Eylül 2026</time>
  </p>

  <address>
    <a href="mailto:yazar@example.com">yazar@example.com</a>
  </address>
</article>
```

# Özet

Bu bölümde HTML'in daha az bilinen ancak metne güçlü semantik anlamlar kazandıran öğelerini öğrendiniz. Bu öğelerin ortak amacı, içeriğin yalnızca nasıl göründüğünü değil, **ne tür bir bilgi olduğunu** tarayıcılara, arama sistemlerine ve yardımcı teknolojilere açık biçimde anlatmaktır.

Alıntılar için uzun bloklarda `<blockquote>`, kısa satır içi ifadelerde `<q>` kullanılır. Bu öğelerin `cite` attribute'u kaynak URL'sini makine tarafından okunabilir biçimde taşıyabilir; ancak kullanıcıya görünür bir kaynak sağlamak istiyorsanız ayrıca bağlantı eklemelisiniz. `<cite>` ise kaynak eserin veya çalışmanın başlığını işaretlemek için kullanılır.

Kısaltmalar ve akronimler `<abbr>` ile işaretlenir. Önemli kısaltmaların açılımını ilk kullanımda görünür metin olarak vermek kullanıcılar açısından daha erişilebilir bir yaklaşımdır. `<acronym>` modern HTML'de kullanılmamalıdır; onun yerine `<abbr>` tercih edilir.

`<address>` öğesi herhangi bir fiziksel adresi değil, en yakın `<article>` veya `<body>` ile ilişkili iletişim bilgisini temsil eder. Bu nedenle site footer'ındaki genel iletişim bilgileri veya makale yazarının iletişim bilgileri için uygundur.

Matematik, kimya ve benzeri içeriklerde üst simge için `<sup>`, alt simge için `<sub>` kullanılır. Bu öğeler yalnızca metni küçültmek veya konumunu değiştirmek için değil, içeriğin gerçek anlamının gerektirdiği durumlarda kullanılmalıdır.

Teknik içerikte `<code>` genel kod parçalarını, `<pre>` whitespace'i korunması gereken blokları, `<var>` değişkenleri, `<kbd>` kullanıcı veya klavye girdilerini, `<samp>` ise bilgisayar çıktısını ifade eder. Özellikle kod bloklarında `<pre><code>...</code></pre>` kombinasyonu yaygın ve semantik bir yapıdır.

Son olarak `<time>` öğesi insanlara gösterilen tarih/saat ifadesiyle makine tarafından okunabilir değer arasında köprü kurar. `datetime` attribute'u sayesinde `"16 Eylül 2026"` gibi yerelleştirilmiş bir metin kesin olarak `"2026-09-16"` biçiminde tanımlanabilir. Bu özellik takvim, etkinlik, arama ve otomatik veri işleme gibi senaryolarda yararlıdır.

Bu sayfada gördüğünüz öğeler HTML'in bütün metin semantiği seçeneklerini kapsamaz; ancak gerçek web sayfalarında karşılaşacağınız önemli ileri metin yapılarının büyük bölümünü oluşturur. Sonraki MDN beceri testinde bu bilgileri kullanarak **Advanced HTML text** görevlerini çözebilirsiniz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Advanced text features”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features) sayfasının bölüm sırası, öğrenme hedefleri ve Playground görevleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### İlgili MDN referansları

- [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote)
- [`<q>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q)
- [`<cite>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/cite)
- [`<abbr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr)
- [`<address>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/address)
- [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup)
- [`<sub>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub)
- [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/code)
- [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/pre)
- [`<var>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/var)
- [`<kbd>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/kbd)
- [`<samp>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/samp)
- [`<time>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)

### Gezinme

- [Önceki: Test your skills — HTML text basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Test your skills — Advanced HTML text](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text)
