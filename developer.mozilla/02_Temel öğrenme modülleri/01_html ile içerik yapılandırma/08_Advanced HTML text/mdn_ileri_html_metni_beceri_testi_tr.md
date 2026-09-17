# Becerilerinizi Test Edin: İleri HTML Metni

> **Kaynak:** [MDN Web Docs — Test your skills: Advanced HTML text](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text)  
> **Türkçe sürüm:** Kaynak sayfadaki tek kapsamlı beceri testinin sırasını ve ölçtüğü semantik HTML konularını izleyen özgün Türkçe çalışma/test sürümüdür.  
> **Kaynak sayfanın son güncellenme tarihi:** 3 Şubat 2026

Bu beceri testinin amacı, daha az kullanılan HTML öğelerini doğru semantik amaçlarla kullanıp kullanamadığınızı kontrol etmektir.

Bu sayfada tek bir görev vardır. Aynı HTML parçası üzerinde şu konuları birlikte uygulamanız beklenir:

- Blok alıntı,
- Alıntının kaynağını semantik olarak belirtme,
- Kısaltmalar,
- Alt simge,
- Üst simge,
- Makine tarafından okunabilir tarih bilgileri.

Önceki bölümde öğrendiğiniz şu öğeler özellikle önemlidir:

```html
<blockquote>
<abbr>
<sub>
<sup>
<time>
```

ve:

```html
cite=""
datetime=""
title=""
```

attribute'ları.

> **Çalışma önerisi:** Aşağıdaki başlangıç kodunu bir HTML dosyasına veya MDN Playground'a yapıştırın. Çözümü görmeden önce bütün görevleri kendiniz tamamlamaya çalışın.

## Bu makalede

- [İleri metin 1](#ileri-metin-1)
- [Görevleri tek tek inceleyelim](#görevleri-tek-tek-inceleyelim)
- [Çözüm](#çözüm)
- [Çözüm neden doğru?](#çözüm-neden-doğru)
- [Kendinizi değerlendirin](#kendinizi-değerlendirin)
- [Ek pratik](#ek-pratik)
- [Özet](#özet)

---

# İleri metin 1

Bu görevde verilen HTML'e daha fazla semantik anlam eklemeniz gerekir.

Ölçülen ana beceriler:

```text
blockquote + cite
abbr + title
sub
sup
time + datetime
```

Başlangıç içeriğinde:

- Erişilebilirlikle ilgili bir alıntı,
- HTML ve CSS kısaltmaları,
- İki kimyasal formül,
- İki tarih

bulunur.

Bunların her biri şu anda yalnızca düz metindir. Sizin göreviniz, uygun HTML öğeleriyle ne anlama geldiklerini açık hale getirmektir.

# Başlangıç kodu

Aşağıdaki yapı üzerinde çalışın:

```html
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<p>
  HTML, Hypertext Markup Language is by default accessible, if used correctly.
</p>

<p>
  CSS can also be used to make web pages more, or less, accessible.
</p>

<p>Chemical Formulae: H2O (Water), C2H6O (Ethanol).</p>

<p>
  Dates: December 25th 2019 (Christmas Day), November 2nd 2019
  (Día de los Muertos).
</p>
```

Kaynak testte bu HTML'in yanında görsel ayrımı kolaylaştıran basit CSS de kullanılır:

```css
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
  color: purple;
}

p {
  margin: 0.5em 0;
}

abbr,
time {
  color: green;
}
```

Bu CSS testin asıl konusu değildir. Ama `<abbr>` ve `<time>` öğelerinin başarılı biçimde eklendiğini görsel olarak fark etmeyi kolaylaştırır.

---

# Yapmanız gerekenler

Kaynak görev dört ana adımdan oluşur.

## 1. İkinci paragrafı blok alıntıya dönüştürün

Başlangıçtaki şu bölüm:

```html
<p>
  HTML, Hypertext Markup Language is by default accessible, if used correctly.
</p>
```

başka bir kaynaktan alınmış bir alıntı olarak işaretlenmelidir.

Kaynak olarak MDN'nin Accessibility içeriği kullanılmalıdır.

Bu nedenle dış kapsayıcı:

```html
<blockquote>
```

olmalıdır.

Ayrıca alıntının kaynak adresini:

```html
cite=""
```

attribute'u ile belirtin.

Hedef yapı mantığı:

```html
<blockquote cite="...">
  <p>...</p>
</blockquote>
```

## Neden `<blockquote>`?

Çünkü alıntı:

- Paragraf düzeyinde,
- Kendi bloğu halinde,
- Başka bir kaynaktan alınmış

bir içeriktir.

Kısa, aynı cümle içinde kalan bir alıntı olsaydı:

```html
<q>
```

düşünülebilirdi.

Burada doğru araç:

```html
<blockquote>
```

dır.

---

# 2. HTML ve CSS ifadelerini kısaltma olarak işaretleyin

Metinde:

```text
HTML
CSS
```

kısaltmaları bulunuyor.

Bunları:

```html
<abbr>
```

ile işaretleyin.

Açılımlarını ise:

```html
title=""
```

attribute'unda sağlayın.

HTML için:

```text
HyperText Markup Language
```

CSS için:

```text
Cascading Style Sheets
```

kullanılmalıdır.

Hedef yapı:

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

ve:

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

## Buradaki amaç nedir?

Tarayıcı ve diğer yazılımlar:

```text
HTML
```

ifadesinin sıradan dört harf değil, bir kısaltma olduğunu anlayabilir.

Aynı zamanda `title` attribute'u açılım bilgisini sağlar.

> **Erişilebilirlik notu:** Gerçek içeriklerde önemli bir kısaltmanın açılımını yalnızca `title` içinde bırakmak her kullanıcı için ideal değildir. İlk kullanımda açılımı görünür metin olarak vermek genellikle daha erişilebilirdir. Ancak bu beceri testinde özellikle `title` kullanımı ölçülmektedir.

---

# 3. Kimyasal formülleri doğru alt simgeyle işaretleyin

Başlangıç kodunda:

```text
H2O
C2H6O
```

bulunuyor.

Kimyasal formüllerde rakamların aşağıda görünmesi yalnızca görsel tercih değildir; formülün anlamının bir parçasıdır.

Bu nedenle:

```html
<sub>
```

kullanılmalıdır.

Su:

```html
H<sub>2</sub>O
```

Etanol:

```html
C<sub>2</sub>H<sub>6</sub>O
```

Tarayıcıda kabaca:

```text
H₂O
C₂H₆O
```

gibi görünür.

## Neden CSS değil?

Şöyle yapmak mümkündür:

```html
<span class="small-lower">2</span>
```

ve CSS ile rakamı aşağı taşımak.

Ama burada:

```text
rakamın alt simge olması
```

formülün gerçek semantik anlamıdır.

Bu yüzden:

```html
<sub>
```

daha doğrudur.

---

# 4. Tarihlerde üst simge ve `<time>` kullanın

Başlangıçta iki tarih vardır:

```text
December 25th 2019
November 2nd 2019
```

Burada iki ayrı semantik ihtiyaç bulunur.

## Sıra eki için `<sup>`

İngilizce tarihlerde:

```text
25th
2nd
```

ifadelerindeki:

```text
th
nd
```

ekleri üst simge olarak gösterilebilir.

Bu nedenle:

```html
25<sup>th</sup>
```

ve:

```html
2<sup>nd</sup>
```

kullanılır.

## Tüm tarihi `<time>` ile işaretleyin

Tarihin insan tarafından okunabilir metni:

```text
December 25th 2019
```

şeklindedir.

Ancak makine tarafından okunabilir kesin değer:

```text
2019-12-25
```

olmalıdır.

Bu nedenle:

```html
<time datetime="2019-12-25">
  December 25<sup>th</sup> 2019
</time>
```

kullanılır.

İkinci tarih:

```html
<time datetime="2019-11-02">
  November 2<sup>nd</sup> 2019
</time>
```

şeklinde olmalıdır.

## İki katmanlı semantik

Bu yapı aynı anda iki farklı bilgi verir:

```text
<sup>
→ "th" ve "nd" sıra ekidir

<time datetime="...">
→ bütün ifade gerçek bir tarihtir ve kesin makine değeri budur
```

Bu, semantik HTML'in güzel bir örneğidir.

---

# Görevleri tek tek inceleyelim

Kod üzerinde değişiklik yaparken aşağıdaki sırayı izleyebilirsiniz.

## Adım 1 — Alıntı

Önce:

```html
<p>
  HTML, Hypertext Markup Language is by default accessible, if used correctly.
</p>
```

bölümünü:

```html
<blockquote>
  <p>
    HTML, Hypertext Markup Language is by default accessible, if used correctly.
  </p>
</blockquote>
```

haline getirin.

Daha sonra `cite` ekleyin.

## Adım 2 — HTML kısaltması

Alıntı içindeki:

```text
HTML
```

ifadesini:

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

haline getirin.

## Adım 3 — CSS kısaltması

Sonraki paragraftaki:

```text
CSS
```

ifadesini:

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

ile işaretleyin.

## Adım 4 — Kimyasal formüller

Şunu:

```text
H2O
```

şuna dönüştürün:

```html
H<sub>2</sub>O
```

Şunu:

```text
C2H6O
```

şuna dönüştürün:

```html
C<sub>2</sub>H<sub>6</sub>O
```

## Adım 5 — İlk tarih

```text
December 25th 2019
```

ifadesini önce:

```html
December 25<sup>th</sup> 2019
```

yapın.

Sonra tamamını:

```html
<time datetime="2019-12-25">
  December 25<sup>th</sup> 2019
</time>
```

içine alın.

## Adım 6 — İkinci tarih

Aynı mantıkla:

```html
<time datetime="2019-11-02">
  November 2<sup>nd</sup> 2019
</time>
```

oluşturun.

---

# Çözüm

Önce kendiniz denediğinizden emin olun.

Tamamlanmış HTML şu yapıda olmalıdır:

```html
<h1>Advanced text semantics</h1>

<p>Let's start with a quote:</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Learn/Accessibility"
>
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>,
    Hypertext Markup Language is by default accessible, if used correctly.
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>,
  Cascading Style Sheets, can also be used to make web pages more,
  or less, accessible.
</p>

<p>
  Chemical Formulae:
  H<sub>2</sub>O (Water),
  C<sub>2</sub>H<sub>6</sub>O (Ethanol).
</p>

<p>
  Dates:
  <time datetime="2019-12-25">
    December 25<sup>th</sup> 2019
  </time>
  (Christmas Day),
  <time datetime="2019-11-02">
    November 2<sup>nd</sup> 2019
  </time>
  (Día de los Muertos).
</p>
```

> **Not:** Kaynak görevin çözümündeki Accessibility URL'si MDN'nin eski `/Learn/Accessibility` yolunu kullanır. Testi kaynağa sadık biçimde anlamak için burada aynı hedef mantığını gösteriyoruz; güncel MDN erişilebilirlik içerikleri farklı bir URL yapısı kullanabilir.

---

# Çözüm neden doğru?

Şimdi her semantik kararın ne anlama geldiğini inceleyelim.

# `<blockquote cite="...">`

```html
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Learn/Accessibility"
>
```

şunu belirtir:

```text
Bu içerik blok düzeyinde bir alıntıdır.
```

`cite` ise:

```text
Bu alıntının kaynak URI'si budur.
```

bilgisini ekler.

Burada iki ayrı şey vardır:

```text
blockquote
→ içerik türü

cite
→ kaynak metadata'sı
```

# `<abbr title="...">`

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

şunu belirtir:

```text
HTML bir kısaltmadır.
```

`title` ise açılımını sağlar.

Aynı mantık CSS için de geçerlidir:

```html
<abbr title="Cascading Style Sheets">CSS</abbr>
```

# `<sub>`

```html
H<sub>2</sub>O
```

ve:

```html
C<sub>2</sub>H<sub>6</sub>O
```

kimyasal formülün yapısını doğru ifade eder.

Burada rakamların alt simge olması semantik olarak gereklidir.

# `<sup>`

```html
25<sup>th</sup>
```

ve:

```html
2<sup>nd</sup>
```

İngilizce sıra eklerinin üst simge biçiminde gösterilebilmesini sağlar.

# `<time datetime="...">`

```html
<time datetime="2019-12-25">
  December 25<sup>th</sup> 2019
</time>
```

iki farklı kullanıcı grubuna aynı anda yararlı bilgi sağlar.

İnsan:

```text
December 25th 2019
```

okur.

Makine:

```text
2019-12-25
```

değerini alır.

Bu nedenle:

```text
görünen yerelleştirilmiş tarih
+
standart makine tarihi
```

birlikte bulunabilir.

---

# Türkçe eşdeğer örnek

Aynı HTML tekniklerini Türkçe içerikte de kullanabilirsiniz.

```html
<h1>İleri metin semantiği</h1>

<p>Bir alıntıyla başlayalım:</p>

<blockquote cite="https://developer.mozilla.org/">
  <p>
    <abbr title="HyperText Markup Language">HTML</abbr>,
    doğru kullanıldığında erişilebilir web içeriği oluşturmak için
    güçlü bir temel sağlar.
  </p>
</blockquote>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>
  sayfanın görünümünü kontrol eder.
</p>

<p>
  Kimyasal formüller:
  H<sub>2</sub>O (su),
  CO<sub>2</sub> (karbondioksit).
</p>

<p>
  Tarih:
  <time datetime="2026-09-16">16 Eylül 2026</time>.
</p>
```

Türkçede:

```text
16 Eylül 2026
```

ifadesinde İngilizcedeki:

```text
25th
2nd
```

gibi bir sıra eki olmadığı için `<sup>` kullanımı gerekmez.

Bu da semantik öğelerin dile ve içeriğin gerçek anlamına göre seçilmesi gerektiğini gösterir.

---

# Kaynak CSS'in görevi

Testte verilen CSS'in şu bölümü:

```css
abbr,
time {
  color: green;
}
```

özellikle yararlıdır.

Görevi doğru yaptıysanız:

```html
<abbr>
```

ve:

```html
<time>
```

öğeleri yeşil görünür.

Böylece görsel olarak:

```text
"Bu iki semantik öğeyi doğru ekledim mi?"
```

kontrolü yapabilirsiniz.

Ancak şunu unutmayın:

```text
renk
→ test yardımcısı

semantik
→ HTML'in asıl amacı
```

CSS'i kaldırdığınızda HTML'in anlamı kaybolmaz.

---

# Kendinizi değerlendirin

Görevi çözüme bakmadan tamamladıysanız aşağıdaki konuları anlayıp anlamadığınızı kontrol edin.

## Alıntı

Şu soruya cevap verebiliyor musunuz?

```text
Uzun, blok düzeyindeki bir dış kaynak alıntısı için hangi öğe?
```

Cevap:

```html
<blockquote>
```

Kaynağın URL'si semantik metadata olarak:

```html
cite=""
```

ile eklenebilir.

## Kısaltmalar

```text
HTML ve CSS gibi kısaltmalar için?
```

Cevap:

```html
<abbr>
```

Bu test özelinde açılım:

```html
title=""
```

ile sağlanır.

## Alt simge

Kimyasal formül:

```text
H₂O
```

için:

```html
H<sub>2</sub>O
```

kullanmayı biliyor musunuz?

## Üst simge

İngilizce:

```text
25th
```

gibi bir sıra ekini:

```html
25<sup>th</sup>
```

ile yazabiliyor musunuz?

## Makine tarafından okunabilir tarih

Görünen:

```text
December 25th 2019
```

ile makine değeri:

```text
2019-12-25
```

arasındaki ilişkiyi:

```html
<time datetime="2019-12-25">
  ...
</time>
```

ile kurabiliyor musunuz?

Bu soruların hepsine evet diyebiliyorsanız testin ana hedeflerini karşılamışsınız demektir.

---

# Sık yapılan hatalar

# 1. Blok alıntıyı `<q>` ile işaretlemek

Şu kullanım bu görev için uygun değildir:

```html
<q>
  HTML, Hypertext Markup Language is by default accessible...
</q>
```

Çünkü `<q>` daha çok satır içindeki kısa alıntılar içindir.

Bu görevde:

```html
<blockquote>
```

daha uygundur.

# 2. `cite` yerine görünür kaynak sanmak

```html
<blockquote cite="https://example.com">
```

tarayıcıda otomatik olarak:

```text
Kaynak: example.com
```

göstermek zorunda değildir.

`cite` metadata sağlar.

Görünür bir kaynak bağlantısı istiyorsanız ayrıca:

```html
<a>
```

eklemelisiniz.

# 3. HTML açılımını yalnızca düz metin olarak bırakmak

Şu:

```html
HTML, Hypertext Markup Language
```

insan tarafından anlaşılabilir.

Ama bu test sizden özellikle:

```html
<abbr>
```

semantiğini göstermenizi ister.

Doğru yapı:

```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

# 4. Formüllerde normal rakam kullanmak

Zayıf:

```html
H2O
```

Semantik:

```html
H<sub>2</sub>O
```

# 5. Tarihi yalnızca `<sup>` ile düzeltmek

Şu:

```html
December 25<sup>th</sup> 2019
```

görsel/semantik olarak sıra ekini düzeltir.

Ancak test ayrıca bütün tarihin makine tarafından okunabilir olmasını ister.

Bu nedenle:

```html
<time datetime="2019-12-25">
  December 25<sup>th</sup> 2019
</time>
```

gereklidir.

# 6. `datetime` değerini yerel yazım biçiminde vermek

Yanlış:

```html
<time datetime="December 25th 2019">
```

Doğru:

```html
<time datetime="2019-12-25">
```

`datetime` makine tarafından okunabilir standart biçimde olmalıdır.

---

# Ek pratik

Aşağıdaki içeriği semantik HTML ile işaretleyin:

```text
Web notları

CSS is an abbreviation for Cascading Style Sheets.

The guide says:
HTML should describe the meaning of the content.

Chemical examples: CO2 and H2SO4.

Meeting date: March 3rd 2027.
```

## Görevler

1. `"CSS"` ifadesini `<abbr>` ile işaretleyin ve açılımını `title` ile verin.
2. `"HTML should describe..."` bölümünü blok alıntı yapın.
3. Blok alıntıya örnek bir `cite` URL'si ekleyin.
4. `CO2` ve `H2SO4` formüllerindeki rakamları `<sub>` ile işaretleyin.
5. `3rd` ifadesinde `"rd"` bölümünü `<sup>` yapın.
6. Bütün tarihi `<time datetime="2027-03-03">` içine alın.

## Olası çözüm

```html
<h1>Web notları</h1>

<p>
  <abbr title="Cascading Style Sheets">CSS</abbr>
  is an abbreviation for Cascading Style Sheets.
</p>

<p>The guide says:</p>

<blockquote cite="https://example.com/html-guide">
  <p>
    HTML should describe the meaning of the content.
  </p>
</blockquote>

<p>
  Chemical examples:
  CO<sub>2</sub> and
  H<sub>2</sub>SO<sub>4</sub>.
</p>

<p>
  Meeting date:
  <time datetime="2027-03-03">
    March 3<sup>rd</sup> 2027
  </time>.
</p>
```

---

# Bütün testin kavram haritası

```text
Advanced HTML text test
│
├── Alıntı
│   ├── <blockquote>
│   └── cite=""
│
├── Kısaltma
│   ├── <abbr>
│   └── title=""
│
├── Bilimsel gösterim
│   └── <sub>
│
├── Yazıdaki sıra eki
│   └── <sup>
│
└── Tarih
    ├── <time>
    └── datetime=""
```

Bu test kısa olmasına rağmen HTML'deki önemli bir düşünceyi ölçer:

> Aynı sayfadaki farklı metin parçalarının farklı **anlam türleri** vardır ve HTML bu anlamları ayrı semantik öğelerle ifade edebilir.

---

# Özet

Bu beceri testi, önceki **Advanced text features** eğitiminde öğrendiğiniz daha az kullanılan semantik HTML öğelerini tek bir görev üzerinde bir araya getirir. Amaç yalnızca doğru görsel sonucu elde etmek değil, içerikteki alıntı, kısaltma, kimyasal gösterim ve tarih gibi farklı bilgi türlerini makine tarafından anlaşılabilir biçimde işaretleyebilmektir.

Görevin ilk kısmında paragraf düzeyindeki dış kaynak alıntısı `<blockquote>` öğesine dönüştürülür ve `cite` attribute'u ile kaynak adresi ilişkilendirilir. Bu, alıntının yalnızca girintili görünmesini sağlamak yerine onun semantik olarak başka bir kaynaktan gelen blok alıntı olduğunu ifade eder.

Daha sonra `"HTML"` ve `"CSS"` ifadeleri `<abbr>` ile kısaltma olarak işaretlenir ve `title` attribute'u üzerinden açılımları verilir. Böylece bu ifadelerin rastgele harf dizileri değil, belirli kavramların kısaltmaları olduğu HTML seviyesinde belirtilmiş olur.

Kimyasal formüllerdeki rakamlar `<sub>` ile alt simge yapılır. `H₂O` ve `C₂H₆O` örneklerinde bu alt simge yalnızca görsel bir tercih değil, bilimsel gösterimin gerçek anlamının bir parçasıdır. Benzer şekilde İngilizce tarihlerdeki `"th"` ve `"nd"` sıra ekleri `<sup>` ile üst simge olarak işaretlenir.

Son olarak tarihlerin tamamı `<time>` öğesi içine alınır ve `datetime` attribute'u ile ISO benzeri makine tarafından okunabilir tarih değerleri sağlanır. Böylece kullanıcı `"December 25th 2019"` gibi doğal dilde bir tarih görürken yazılım aynı içeriği kesin olarak `2019-12-25` şeklinde yorumlayabilir.

Bu testin temel mesajı, önceki HTML metin testlerinde olduğu gibi yine **semantik seçim** üzerinedir:

```text
Alıntı mı?      → <blockquote>
Kısaltma mı?    → <abbr>
Alt simge mi?   → <sub>
Üst simge mi?   → <sup>
Tarih mi?       → <time>
```

Çözüme bakmadan bu yapıları doğru biçimde kurabiliyorsanız ileri HTML metin semantiği konusunda gerekli temel beceriyi edinmişsiniz demektir. MDN öğrenme yolunda sıradaki içerik, bu becerileri daha büyük bir belge üzerinde kullanacağınız **Marking up a letter** challenge'ıdır.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Test your skills: Advanced HTML text”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text) sayfasındaki tek beceri testinin görev sırası ve ölçtüğü semantik HTML konuları temel alınarak hazırlanmış özgün Türkçe çalışma sürümüdür.

### İlgili MDN içerikleri

- [Önceki: Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Challenge — Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter)
- [`<blockquote>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote)
- [`<abbr>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/abbr)
- [`<sub>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sub)
- [`<sup>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup)
- [`<time>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time)
- [MDN Playground](https://developer.mozilla.org/en-US/play)
