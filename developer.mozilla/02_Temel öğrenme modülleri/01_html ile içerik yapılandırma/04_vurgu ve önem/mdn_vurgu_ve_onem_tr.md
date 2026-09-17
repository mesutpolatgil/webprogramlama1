# Vurgu ve Önem

> **Kaynak:** [MDN Web Docs — Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini, alıştırmasını ve temel örneklerini izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 8 Haziran 2025

Önceki bölümde HTML'de **semantiğin** neden önemli olduğunu, özellikle başlıklar ve paragraflar üzerinden gördünüz. Bu bölüm aynı yaklaşımı metin içindeki belirli kelime veya ifadelerin **vurgulanması** ve **önemli olduğunun belirtilmesi** konularına taşır.

Yazılı metinde bazı kelimeler italik veya kalın görünebilir. Ancak HTML'de asıl soru:

```text
Bu metin nasıl görünsün?
```

değil:

```text
Bu metin ne anlam taşıyor?
```

olmalıdır.

Bu nedenle `<em>` ve `<strong>` gibi öğeleri yalnızca görünüş elde etmek için değil, metne gerçek bir semantik anlam kazandırmak için kullanırız.

|  |  |
| --- | --- |
| **Ön koşullar:** | [Temel HTML Sözdizimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) bölümünde ele alınan temel HTML bilgisi. |
| **Öğrenme çıktıları:** | • Vurgu ve güçlü önem kavramlarını ve bunları ifade eden `<em>` ile `<strong>` öğelerini anlamak.<br>• `<big>` ve `<font>` gibi artık kullanılmaması gereken eski sunumsal öğeleri tanımak.<br>• `<i>` ve `<b>` gibi geçmişte yalnızca görsel amaçla kullanılan ancak modern HTML'de farklı semantik roller kazanmış öğeleri doğru bağlamda kullanabilmek. |

## Bu makalede

- [Vurgu ve önem nedir?](#vurgu-ve-önem-nedir)
- [Vurgu ve önemle pratik yapalım](#vurgu-ve-önemle-pratik-yapalım)
- [İtalik, kalın, altı çizili…](#italik-kalın-altı-çizili)
- [Özet](#özet)

# Vurgu ve önem nedir?

İnsanlar konuşurken bazı kelimelere diğerlerinden daha fazla vurgu yapar.

Örneğin şu iki cümle aynı kelimelerden oluşabilir ancak tonlama anlamı değiştirebilir:

```text
Geç kalmadığına sevindim.
```

ve:

```text
Geç kalmadığına gerçekten sevindim.
```

Belirli kelimeleri özellikle vurgulayarak:

- Söylenen şeyi güçlendirebilir,
- İroni veya farklı bir ton oluşturabilir,
- Okuyucunun belirli bir noktaya dikkat etmesini sağlayabiliriz.

Yazılı dilde bunun için çoğu zaman:

- İtalik,
- Kalın

görsel biçimleri kullanılır.

HTML ise bu anlamları doğrudan ifade edebilen semantik öğeler sağlar.

# Vurgu: `<em>`

Konuşma dilinde belirli bir kelimeyi özellikle vurguladığımızda cümlenin anlamında ince bir değişiklik oluşabilir.

HTML'de bu tür **emphasis (vurgu)** için:

```html
<em>
```

öğesi kullanılır.

Örneğin:

```html
<p>
  Geç kalmadığına <em>gerçekten</em> sevindim.
</p>
```

Burada:

```text
gerçekten
```

kelimesi yalnızca görsel olarak farklılaştırılmamıştır; semantik olarak vurgulanmıştır.

Tarayıcılar `<em>` içeriğini varsayılan olarak genellikle **italik** gösterir.

Ancak şu düşünce yanlış olur:

```text
İtalik istiyorum
→ her zaman <em> kullanayım
```

Çünkü `<em>` öğesinin anlamı:

```text
bu metinde özel vurgu var
```

şeklindedir.

Sadece görsel italik gerekiyorsa:

- CSS,
- Belirli bağlamlarda `<i>`

daha uygun olabilir.

## Cümlenin anlamını değiştiren vurgu

Örneğin:

```html
<p>
  Ben <em>senin</em> kitabını almadım.
</p>
```

ile:

```html
<p>
  Ben senin <em>kitabını</em> almadım.
</p>
```

aynı kelimeleri kullanır ancak vurgu farklı yerde olduğu için farklı bir anlam çağrıştırabilir.

İlkinde:

```text
senin
```

kelimesine özel vurgu vardır.

İkincisinde:

```text
kitabını
```

vurgulanır.

HTML semantiği bu farkı belge yapısında ifade eder.

# `<em>` ve erişilebilirlik

Semantik vurgu yalnızca görsel kullanıcılar için değildir.

Ekran okuyucular ve diğer yardımcı teknolojiler `<em>` öğesini tanıyabilir.

Bazı ekran okuyucu yapılandırmalarında bu vurgu:

- Farklı ton,
- Farklı ses yüksekliği,
- Farklı konuşma ritmi

ile aktarılabilir.

Bu nedenle:

```html
<em>
```

yalnızca:

```text
italik görünüm
```

anlamına gelmez.

Daha doğru zihinsel model:

```text
<em>
→ bu kelime veya ifade vurgulanmalıdır
```

şeklindedir.

# Görünüm için `<em>` kullanmayın

Şu kullanım semantik olarak sorunlu olabilir:

```html
<em>Ürün adı</em>
```

eğer ürün adında gerçekten vurgu yoksa ve yalnızca italik görünmesini istiyorsanız.

Böyle bir durumda:

```html
<span class="product-name">Ürün adı</span>
```

ve CSS:

```css
.product-name {
  font-style: italic;
}
```

kullanılabilir.

Veya metnin bağlamına göre `<i>` daha uygun olabilir.

Bu konuyu ilerleyen bölümde göreceğiz.

# Güçlü önem: `<strong>`

Bir şey yalnızca vurgulu değil, **özellikle önemli** ise HTML'de:

```html
<strong>
```

öğesi kullanılabilir.

Örneğin:

```html
<p>
  Bu sıvı <strong>son derece zehirlidir</strong>.
</p>
```

Buradaki mesaj:

```text
son derece zehirlidir
```

bölümünün okuyucu için önemli olduğudur.

Bir başka örnek:

```html
<p>
  Sana güveniyorum.
  <strong>Geç kalma.</strong>
</p>
```

Tarayıcılar `<strong>` öğesini genellikle varsayılan olarak **kalın** gösterir.

Ancak yine:

```text
kalın görünmesini istiyorum
→ <strong>
```

şeklinde düşünmemelisiniz.

Daha doğru yaklaşım:

```text
Bu içerik güçlü bir önem taşıyor mu?
→ evetse <strong>
```

olmalıdır.

# `<strong>` ve erişilebilirlik

`<strong>` semantik bir öğedir.

Yardımcı teknolojiler bu içeriğin:

```text
normal metinden daha önemli
```

olduğunu anlayabilir.

Bu nedenle:

```html
<strong>Uyarı</strong>
```

ile:

```html
<span class="bold">Uyarı</span>
```

görsel olarak birbirine benzetilebilir, fakat semantik açıdan aynı değildir.

CSS:

```css
.bold {
  font-weight: bold;
}
```

yalnızca görünümü değiştirir.

`<strong>` ise içeriğe anlam kazandırır.

# `<em>` ile `<strong>` arasındaki fark

Bu iki öğe sık karıştırılır.

Basitleştirilmiş karşılaştırma:

| Öğe | Anlam | Varsayılan görünüm |
| --- | --- | --- |
| `<em>` | Vurgu | Genellikle italik |
| `<strong>` | Güçlü önem | Genellikle kalın |

Örneğin:

```html
<p>
  Bu işlem <em>yalnızca</em> yöneticiler tarafından yapılmalıdır.
</p>
```

Burada `"yalnızca"` kelimesine vurgu yapılıyor.

Buna karşılık:

```html
<p>
  <strong>Dosyayı silmeden önce yedek alın.</strong>
</p>
```

ifadesi güçlü bir uyarı veya önem taşıyor.

# `<em>` ve `<strong>` iç içe kullanılabilir

Bir ifade hem önemli hem de kendi içinde özel bir vurgu taşıyabilir.

Örneğin:

```html
<p>
  Bu madde <strong>çok zehirlidir</strong>.
  İçerseniz
  <strong><em>ciddi biçimde zarar görebilirsiniz</em></strong>.
</p>
```

Burada dışarıdaki:

```html
<strong>
```

güçlü önem sağlar.

İçerideki:

```html
<em>
```

ise aynı metnin belirli biçimde vurgulanması gerektiğini ifade eder.

Başka kombinasyonlar da mümkündür:

```html
<em>
  Bu özellikle
  <strong>çok önemlidir</strong>.
</em>
```

Ancak amaç görsel olarak mümkün olduğunca çok biçim uygulamak değil, anlamı doğru ifade etmektir.

# Vurgu ve önemle pratik yapalım

Kaynak MDN sayfasında etkileşimli bir Playground alıştırması bulunur.

Amaç `<em>` ve `<strong>` öğelerini gerçek metin üzerinde uygulamaktır.

Başlangıç kodu şu yapıya sahiptir:

```html
<h1>Emphasis and importance</h1>

<p>
  My new coffee machine is called The Percolator 2000.
  It produces the most sublime and wonderful brew.
</p>

<p>
  In the dead of winter, it will be cold.
  You should wrap up warm to avoid falling ill.
</p>
```

## Görev 1 — Ana başlık

Ana başlıkta:

```text
Emphasis
```

kelimesine vurgu ekleyin.

Yani:

```html
<em>
```

kullanın.

`importance` kelimesinin güçlü önem taşımasını sağlayın:

```html
<strong>
```

kullanın.

Sonuç:

```html
<h1>
  <em>Emphasis</em> and <strong>importance</strong>
</h1>
```

# Görev 2 — İlk paragraf

Kahve makinesinin adı:

```text
The Percolator 2000
```

güçlü önem taşımalıdır.

Bu nedenle:

```html
<strong>The Percolator 2000</strong>
```

kullanılır.

Kahveyi tanımlayan:

```text
sublime
wonderful
```

sıfatlarına ise vurgu verilmelidir.

```html
<em>sublime</em>
```

ve:

```html
<em>wonderful</em>
```

kullanabilirsiniz.

# Görev 3 — İkinci paragraf

Hava durumu açıklaması:

```text
cold
```

ve yapılması gereken eylem:

```text
wrap up warm to avoid falling ill
```

güçlü önem taşımalıdır.

Ayrıca:

```text
falling ill
```

ifadesi hem önemli hem vurgulu olmalıdır.

Bunun için öğeleri iç içe kullanabilirsiniz.

# Örnek çözüm

Tamamlanmış yapı:

```html
<h1>
  <em>Emphasis</em> and <strong>importance</strong>
</h1>

<p>
  My new coffee machine is called
  <strong>The Percolator 2000</strong>.
  It produces the most
  <em>sublime</em>
  and
  <em>wonderful</em>
  brew.
</p>

<p>
  In the dead of winter, it will be
  <strong>cold</strong>.
  You should
  <strong>
    wrap up warm to avoid
    <em>falling ill</em>
  </strong>.
</p>
```

Bu örnekte aynı anda:

```text
<em>
<strong>
nesting
```

kavramlarını uygulamış olursunuz.

# Alıştırmada hata yaparsanız

MDN Playground'da:

```text
Reset
```

seçeneğiyle başlangıç durumuna dönebilirsiniz.

Çözümü hemen açmak yerine önce birkaç kez kendiniz denemeniz daha yararlı olur.

İyi çalışma döngüsü:

```text
Görevi oku
   ↓
Kendin çöz
   ↓
Tarayıcıda sonucu incele
   ↓
Çözümle karşılaştır
   ↓
Farkın nedenini anlamaya çalış
```

# İtalik, kalın, altı çizili…

Buraya kadar gördüğümüz:

```html
<em>
<strong>
```

öğelerinin semantik anlamları oldukça açıktır.

Ancak:

```html
<i>
<b>
<u>
```

öğelerinin tarihi daha karmaşıktır.

# Eski web'de sunumsal HTML

Web'in ilk dönemlerinde CSS ya hiç yoktu ya da tarayıcı desteği sınırlıydı.

Bu nedenle HTML içinde doğrudan görünümü değiştiren öğeler kullanılıyordu.

Örneğin geçmişte:

```html
<font>
```

ile:

- Yazı tipi,
- Renk,
- Boyut

belirlenebilirdi.

Benzer şekilde:

```html
<big>
```

metni büyütmek için kullanılırdı.

Bu tür öğeler:

```text
presentational markup
```

yani yalnızca **sunuma/görünüme yönelik işaretleme** olarak düşünülebilir.

Modern web geliştirmede görünümün görevi CSS'e aittir.

Bu nedenle:

```html
<font>
<big>
```

gibi eski presentational element'ler **deprecated** durumdadır ve yeni kodda kullanılmamalıdır.

# Deprecated ne demektir?

Bir web özelliği:

```text
deprecated
```

olarak işaretlendiğinde genellikle:

- Yeni projelerde kullanılmaması,
- Yerine modern alternatifin tercih edilmesi

önerilir.

Örneğin:

```html
<font color="red">Önemli</font>
```

yerine:

```html
<span class="important-text">Önemli</span>
```

ve CSS:

```css
.important-text {
  color: red;
}
```

kullanılmalıdır.

Ancak metin gerçek anlamda önemliyse:

```html
<strong>Önemli</strong>
```

semantik olarak daha iyi olabilir.

Yani önce:

```text
anlam
```

sonra:

```text
görünüm
```

düşünülmelidir.

# `<i>`, `<b>` ve `<u>` neden hâlâ var?

Bu üç element tamamen kaldırılmamıştır.

HTML5 ile birlikte bunlara daha belirli semantik roller verilmiştir.

Ancak kullanırken şu temel kuralı akılda tutmak yararlıdır:

> `<b>`, `<i>` veya `<u>` kullanmadan önce daha uygun bir semantik öğe olup olmadığını kontrol edin.

Örneğin önce şu seçenekleri düşünün:

```html
<strong>
<em>
<mark>
<span>
```

ve diğer bağlama özel HTML öğeleri.

Daha uygun bir öğe yoksa `<i>`, `<b>` veya `<u>` kullanılabilir.

# Erişilebilirliği unutmayın

`italik`, `kalın` veya `altı çizili` ifadeleri temelde görsel kavramlardır.

Ancak bütün kullanıcılar:

- Sayfayı görsel olarak okumaz,
- Latin alfabesi kullanmaz,
- Aynı tipografik geleneklere sahip değildir.

Bu nedenle:

```text
"bunu italik yap"
```

yerine:

```text
"bu metnin anlamı nedir?"
```

sorusuyla başlamak daha erişilebilir bir HTML yaklaşımıdır.

# `<i>` öğesi

Modern HTML'de `<i>` yalnızca `"italik metin"` anlamına gelmez.

Genellikle normal metinden farklı bir ses/ton veya tür taşıyan içerikler için kullanılabilir.

Örnek bağlamlar:

- Yabancı dilde kelimeler,
- Bilimsel/taksonomik adlar,
- Teknik terimler,
- Bir karakterin düşüncesi,
- Geleneksel olarak italik yazılan özel ifadeler.

# Bilimsel ad örneği

Örneğin bir türün bilimsel adı:

```html
<p>
  Yakut boğazlı sinek kuşu
  (<i>Archilochus colubris</i>)
  Kuzey Amerika'nın doğusunda yaygın bir sinek kuşudur.
</p>
```

Bilimsel adın burada `<i>` içinde olması:

```text
özel bir terim türü
```

olduğunu ifade eder.

Sadece estetik bir italik seçimi değildir.

# Yabancı kelimeler

Başka bir dilde kullanılan kelimeler için `<i>` kullanılabilir.

Örneğin:

```html
<p>
  Menüde
  <i lang="id">nasi goreng</i>
  ve
  <i lang="fr">soupe à l'oignon</i>
  gibi yemekler vardı.
</p>
```

Burada `lang` attribute'ları da önemlidir.

```html
lang="id"
```

Endonezce,

```html
lang="fr"
```

Fransızca olduğunu belirtir.

Yardımcı teknolojiler bu bilgiyi telaffuz için kullanabilir.

## Dil bilgisi ile semantiği birlikte kullanmak

Örneğin:

```html
<i lang="fr">bonjour</i>
```

şunları aynı anda ifade eder:

```text
<i>
→ normal metinden farklı türde ifade

lang="fr"
→ içerik Fransızca
```

Bu, yalnızca:

```html
<span style="font-style: italic">
```

kullanmaktan daha anlamlıdır.

# `<b>` öğesi

`<b>` öğesi geleneksel olarak kalın yazılan ancak `<strong>` düzeyinde önem ifade etmeyen metinler için kullanılabilir.

Örnek bağlamlar:

- Anahtar kelimeler,
- Ürün isimleri,
- Dikkat çekilmek istenen sözcükler,
- Bir metnin başlangıcındaki belirli ifadeler.

Ancak `<b>`:

```text
strong importance
```

anlamına gelmez.

Bir şey gerçekten önemliyse:

```html
<strong>
```

daha doğru seçimdir.

# `<b>` için örnek

Bir tanım içinde vurgulanmak istenen terim:

```html
<dl>
  <dt>Semantik HTML</dt>
  <dd>
    HTML öğelerini
    <b>semantik</b>
    anlamlarına göre kullanma yaklaşımıdır.
  </dd>
</dl>
```

Burada `semantik` kelimesi okuyucunun dikkatine sunulan bir anahtar sözcüktür.

Fakat mesaj:

```text
Bu çok önemli bir uyarıdır.
```

değildir.

Bu nedenle `<b>` bağlama göre uygun olabilir.

# `<strong>` ve `<b>` karşılaştırması

```html
<p>
  <strong>Elektrik bağlantısını kesmeden cihazı açmayın.</strong>
</p>
```

Burada güvenlik açısından güçlü önem var.

Buna karşılık:

```html
<p>
  Bu bölümde <b>HTML</b>, <b>CSS</b> ve <b>JavaScript</b>
  terimlerini kullanacağız.
</p>
```

burada kelimeler anahtar terim olarak öne çıkarılıyor olabilir.

Kaba ayrım:

```text
<strong>
→ önemli

<b>
→ dikkat çekici / özel türde anahtar ifade,
   fakat güçlü önem değil
```

# `<u>` öğesi

`<u>` öğesi modern HTML'de normal metinden farklı biçimde işaretlenmesi geleneksel olarak alt çizgiyle ifade edilen bazı içerikler için kullanılabilir.

Örnek kullanım:

- Bilinen yazım hatası,
- Bazı özel adlandırma gelenekleri.

Kaynak örneğe benzer bir kullanım:

```html
<p>
  Bir gün doğru
  <u class="spelling-error">yazmya</u>
  öğreneceğim.
</p>
```

Burada bilerek hatalı yazılmış kelime özel bir biçimde işaretlenmiştir.

CSS ile tarayıcıdaki varsayılan alt çizgi daha uygun bir görünüme dönüştürülebilir.

Örneğin:

```css
.spelling-error {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}
```

Bu, kelimenin normal bir hyperlink gibi görünme riskini azaltır.

# Alt çizgiyi dikkatli kullanın

Web kullanıcıları altı çizili metni çoğunlukla:

```text
bağlantı
```

olarak algılar.

Çünkü yıllardır yaygın web tasarım geleneği:

```text
altı çizili metin
→ link
```

şeklindedir.

Bu nedenle normal metni yalnızca dekoratif amaçla altı çizili yapmak kullanıcıyı yanıltabilir.

Özellikle:

```css
text-decoration: underline;
```

veya:

```html
<u>
```

kullanmadan önce bunun hyperlink ile karışıp karışmayacağını düşünün.

İyi varsayılan:

> Alt çizgiyi çoğunlukla bağlantılar için bırakın.

`<u>` semantik açıdan gerçekten gerekliyse, CSS ile hyperlink görünümünden ayırmak yararlı olabilir.

# `<i>`, `<b>`, `<u>` için karar süreci

Bir metni işaretlerken şu sırayı kullanabilirsiniz:

```text
Bu metin vurgu mu taşıyor?
        ↓ evet
       <em>

Bu metin güçlü önem mi taşıyor?
        ↓ evet
     <strong>

Bu metin highlight edilmiş bir referans mı?
        ↓
      <mark> düşünülebilir

Yalnızca CSS ile görünüm mü değiştirmek istiyorum?
        ↓
<span> + CSS

Yabancı kelime / bilimsel ad / özel ton mu?
        ↓
       <i>

Anahtar kelime gibi dikkat çekici ancak güçlü önem taşımayan ifade mi?
        ↓
       <b>

Geleneksel olarak alt çizgiyle belirtilen özel bir annotation mı?
        ↓
       <u>
```

Bu karar ağacı mutlak bir standart değildir; bağlama göre değerlendirme yapmanız gerekir.

# `<mark>` neden bazen daha iyi olabilir?

Kaynak sayfa, `<i>`, `<b>` ve `<u>` kullanmadan önce `<mark>` gibi başka öğeleri düşünmeyi önerir.

`<mark>`:

```text
mevcut bağlam açısından özellikle ilgili veya işaretlenmiş içerik
```

için kullanılır.

Örneğin arama sonucunda eşleşen kelime:

```html
<p>
  Sonuç: HTML'de
  <mark>semantik</mark>
  öğeler önemlidir.
</p>
```

Burada:

```text
semantik
```

kelimesi güçlü önem taşıdığı için değil, mevcut arama veya bağlam açısından vurgulandığı için işaretlenmiştir.

Bu nedenle:

```html
<strong>
```

ve:

```html
<mark>
```

aynı şey değildir.

# `<span>` ne zaman kullanılır?

`<span>` kendi başına özel bir semantik anlam taşımaz.

Bu nedenle yalnızca CSS veya JavaScript hedefi gerektiğinde kullanışlıdır.

Örnek:

```html
<p>
  Sipariş durumu:
  <span class="status">hazırlanıyor</span>
</p>
```

CSS:

```css
.status {
  color: darkorange;
}
```

Eğer `"hazırlanıyor"` kelimesinde vurgu, güçlü önem veya başka özel bir semantik anlam yoksa `<span>` uygun olabilir.

# Tüm öğeleri karşılaştıralım

| Öğe | Temel amaç | Varsayılan görünüm genellikle |
| --- | --- | --- |
| `<em>` | Vurgu | İtalik |
| `<strong>` | Güçlü önem | Kalın |
| `<i>` | Farklı ton/tür; ör. yabancı kelime, bilimsel ad | İtalik |
| `<b>` | Dikkat çekici anahtar ifade; güçlü önem değil | Kalın |
| `<u>` | Özel metinsel annotation; ör. yazım hatası | Altı çizili |
| `<mark>` | Mevcut bağlam açısından ilgili/highlight edilmiş içerik | İşaretli arka plan |
| `<span>` | Semantik olmayan genel inline kapsayıcı | Özel varsayılan yok |

Buradaki en önemli nokta:

```text
aynı görünen iki öğe
≠
aynı semantik anlam
```

olabilir.

Örneğin:

```html
<em>metin</em>
```

ile:

```html
<i>metin</i>
```

çoğu tarayıcıda ikisi de italik görünebilir.

Fakat HTML açısından anlamları farklıdır.

# Kaynak örneklerin bir arada kullanımı

Kaynak MDN bölümündeki kullanımları Türkçe açıklamayla bir araya getiren örnek:

```html
<!-- Bilimsel ad -->
<p>
  Yakut boğazlı sinek kuşu
  (<i>Archilochus colubris</i>)
  Kuzey Amerika'nın doğusunda yaygındır.
</p>

<!-- Yabancı dilde kelimeler -->
<p>
  Menüde
  <i lang="id">nasi goreng</i>
  ve
  <i lang="fr">soupe à l'oignon</i>
  vardı.
</p>

<!-- Bilinen yazım hatası -->
<p>
  Bir gün
  <u class="spelling-error">yazmya</u>
  yerine "yazmaya" yazmayı öğreneceğim.
</p>

<!-- Tanım içinde anahtar terim -->
<dl>
  <dt>Semantik HTML</dt>
  <dd>
    Öğeleri görünümlerine göre değil,
    <b>semantik</b>
    anlamlarına göre kullanmaktır.
  </dd>
</dl>
```

Bu örneklerin ortak noktası:

```text
<i>, <b>, <u>
```

öğelerinin sırf:

```text
italik
kalın
altı çizili
```

görünüm elde etmek için kullanılmamasıdır.

# Eski presentational markup ile modern yaklaşım

Eski düşünce:

```text
HTML
→ içerik + görünüm
```

Modern yaklaşım:

```text
HTML
→ yapı + anlam

CSS
→ görünüm

JavaScript
→ davranış
```

Örneğin eski:

```html
<font color="red" size="5">
  Uyarı
</font>
```

yerine görsel stil için:

```html
<span class="warning-label">Uyarı</span>
```

```css
.warning-label {
  color: red;
  font-size: 1.5rem;
}
```

kullanılabilir.

Eğer içerik gerçekten önemliyse daha semantik yaklaşım:

```html
<strong class="warning-label">Uyarı</strong>
```

olabilir.

Bu örnek HTML ve CSS'in görev ayrımını gösterir.

# Sık yapılan hatalar

## 1. İtalik olan her şey için `<em>` kullanmak

Yanlış düşünce:

```text
italik = <em>
```

Doğrusu:

```text
vurgu = <em>
```

Yalnızca görsel italik gerekiyorsa başka seçenekleri değerlendirin.

# 2. Kalın olan her şey için `<strong>` kullanmak

Yanlış düşünce:

```text
kalın = <strong>
```

Doğrusu:

```text
güçlü önem = <strong>
```

Anahtar kelime veya ürün adı gibi başka bağlamlarda `<b>` veya CSS daha uygun olabilir.

# 3. `<b>` ile `<strong>` öğelerini tamamen aynı görmek

İkisi çoğu tarayıcıda kalın görünse de semantik açıdan farklıdır.

```text
<strong>
→ güçlü önem

<b>
→ dikkat çekme / geleneksel kalın kullanım,
   güçlü önem değil
```

# 4. `<i>` ile `<em>` öğelerini aynı görmek

Benzer şekilde:

```text
<em>
→ vurgu

<i>
→ farklı türde veya tonda metin
```

olarak düşünün.

# 5. Normal metnin altını dekoratif olarak çizmek

Kullanıcılar altı çizili metni link sanabilir.

Bu nedenle alt çizgiyi dikkatli kullanın.

# 6. `<font>` kullanmak

Yeni HTML'de:

```html
<font>
```

kullanmayın.

Görünüm için CSS kullanın.

# 7. `<big>` kullanmak

Benzer şekilde:

```html
<big>
```

deprecated'tır.

Metni büyütmek için CSS:

```css
.example {
  font-size: 1.25rem;
}
```

kullanın.

# Küçük bir uygulama

Aşağıdaki metni semantik olarak işaretlemeyi düşünün:

```text
Uyarı: Bu dosyayı asla silmeyin.
README kelimesi teknik bir dosya adıdır.
Fransızca bonjour kelimesi merhaba demektir.
```

Bir çözüm:

```html
<p>
  <strong>Uyarı:</strong>
  Bu dosyayı <em>asla</em> silmeyin.
</p>

<p>
  <b>README</b>
  kelimesi teknik bir dosya adıdır.
</p>

<p>
  Fransızca
  <i lang="fr">bonjour</i>
  kelimesi "merhaba" demektir.
</p>
```

Burada:

```text
Uyarı
→ güçlü önem

asla
→ cümlenin anlamını güçlendiren vurgu

README
→ teknik/anahtar ifade olarak dikkat çekme

bonjour
→ yabancı dilde ifade
```

şeklinde farklı semantik ihtiyaçlar vardır.

# Semantik düşünme alışkanlığı

Bir HTML öğesi seçmeden önce şu soruları sırayla sorun:

```text
1. Bu metnin görevi nedir?
2. Metin gerçekten önemli mi?
3. Yalnızca vurgu mu var?
4. Başka bir özel semantik rolü var mı?
5. Yoksa sadece görünüm mü değiştirmek istiyorum?
```

Ardından doğru aracı seçin:

```text
anlam
→ HTML

görünüm
→ CSS
```

Bu alışkanlık ileride:

- Formlar,
- Navigasyon,
- Tablolar,
- Sayfa bölümleri,
- Erişilebilirlik

gibi daha büyük HTML konularında da çok işinize yarar.

# Özet

Bu bölümde HTML'de metni yalnızca görsel olarak biçimlendirmenin değil, **metnin taşıdığı anlamı doğru semantik öğelerle ifade etmenin** önemli olduğunu gördünüz. Konuşma dilindeki tonlama gibi, yazılı içerikte de bazı kelimeler özel vurgu veya önem taşıyabilir ve HTML bu farkları makine tarafından anlaşılabilir biçimde işaretlememizi sağlar.

`<em>` öğesi metinde **vurgu** bulunduğunu belirtir. Tarayıcılar bunu çoğunlukla italik gösterse de kullanım amacı italik görünüm elde etmek değildir. Vurgu cümlenin anlamını veya tonunu değiştirebilir ve yardımcı teknolojiler bu semantik bilgiden yararlanabilir. `<strong>` ise içeriğin **güçlü önem** taşıdığını ifade eder ve çoğu tarayıcıda varsayılan olarak kalın görünür.

`<em>` ve `<strong>` gerektiğinde iç içe kullanılabilir. Böylece önemli bir ifadenin belirli bir bölümü ayrıca vurgulanabilir. MDN Playground alıştırması bu iki öğeyi başlık ve paragraflar üzerinde birlikte kullanarak semantic markup pratiği yapmanızı sağlar.

Web'in eski dönemlerinde `<font>` ve `<big>` gibi öğeler doğrudan görünümü kontrol etmek için kullanılıyordu. Modern HTML'de bu tür presentational markup'ın büyük kısmı deprecated durumdadır. Görsel sunum CSS'in görevidir; HTML mümkün olduğunca yapıyı ve anlamı tanımlamalıdır.

`<i>`, `<b>` ve `<u>` ise tamamen kaldırılmamış, HTML5 ile daha belirli semantik rollere uyarlanmıştır. `<i>` yabancı kelimeler, bilimsel adlar veya farklı tondaki ifadeler; `<b>` güçlü önem taşımadan dikkat çekmesi gereken anahtar sözcükler; `<u>` ise örneğin bilinen bir yazım hatası gibi özel annotation'lar için kullanılabilir. Ancak bu öğelerden önce `<em>`, `<strong>`, `<mark>` veya CSS ile birlikte `<span>` gibi daha uygun bir seçeneğin bulunup bulunmadığı düşünülmelidir.

Özellikle `<u>` kullanırken altı çizili metnin web'de bağlantıyla güçlü biçimde ilişkilendirildiğini unutmayın. Kullanıcıyı yanıltmamak için gerçekten gerekli olmadıkça normal metni altı çizili hale getirmemek iyi bir uygulamadır.

Bu bölümün temel ilkesi şudur:

```text
HTML öğesini görünüşüne göre değil,
anlamına göre seçin.
```

Bunu alışkanlık haline getirdiğinizde daha erişilebilir, anlaşılır ve uzun vadede daha kolay bakım yapılabilir HTML yazarsınız. Bir sonraki bölümde bu semantik yaklaşım, **sırasız, sıralı ve açıklama listeleri** oluşturmak için kullanılan HTML öğeleriyle devam eder.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Emphasis and importance”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) sayfasının bölüm sırası, öğrenme hedefleri ve alıştırma akışı temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### İlgili bağlantılar

- [Önceki: Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
- [Structuring content with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content)
- [Sonraki: Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)
- [`<em>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/em)
- [`<strong>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/strong)
- [`<i>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/i)
- [`<b>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/b)
- [`<u>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/u)
- [`<mark>` reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/mark)
