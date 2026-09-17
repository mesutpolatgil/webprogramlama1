# Kod Düzenleyiciler

> **Kaynak:** [MDN Web Docs — Code editors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm yapısını, öğrenme akışını ve uygulamalarını koruyan ayrıntılı Türkçe uyarlamadır.  
> **Kaynak sayfanın son güncellenme tarihi:** 17 Haziran 2025

Daha önce bu öğrenme yolunu takip edebilmek için bir kod düzenleyici kurmanız gerektiğinden söz etmiştik. Bu bölümde kod düzenleyicileri daha yakından inceleyecek, ne tür araçların mevcut olduğuna ve geliştirme sırasında size nasıl yardımcı olabileceklerine bakacağız.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemini temel düzeyde kullanabiliyor olmak. |
| **Öğrenme çıktıları:** | • Hangi kod düzenleyicilerin bulunduğunu ve hangi tür düzenleyicinin ihtiyacınıza uygun olacağını anlamak.<br>• Temel bir kod düzenleyicinin sunduğu başlıca özellikleri tanımak.<br>• Kod düzenleyici eklentilerinin ne işe yaradığını ve bir eklentinin nasıl kurulacağını öğrenmek. |

## Bu makalede

- [Hangi kod düzenleyiciler kullanılabilir?](#hangi-kod-düzenleyiciler-kullanılabilir)
- [Temel kod düzenleyici işlevleri](#temel-kod-düzenleyici-işlevleri)
- [Kod düzenleyiciyi eklentilerle geliştirme](#kod-düzenleyiciyi-eklentilerle-geliştirme)

## Hangi kod düzenleyiciler kullanılabilir?

Kod yazmaya başlamadan önce Microsoft Word gibi programlarda metin belgeleriyle çalışmış olabilirsiniz. Bu tür programların kod yazmak için kullanılıp kullanılamayacağını merak etmek doğaldır; fakat pratikte bunlar programlama için uygun araçlar değildir.

Bunun başlıca nedenleri şunlardır:

- Microsoft Word gibi uygulamalar temelde **belge düzenleyicileridir**. Dosyalarında yalnızca düz metin değil, uygulamaya özgü biçimlendirme ve ikili veri de bulunur. Web sitesi kaynak kodu ise çoğunlukla **düz metin** olarak saklanır.
- Word düz metin dosyalarını açabilse de kod yazmak için tasarlanmış özelliklere sahip değildir. Mektup, rapor ve benzeri belgeler hazırlamak için uygundur; kodun temiz biçimde düzenlenmesi, okunması ve yönetilmesi için özel araçlar sunmaz.

Bilgisayarınızda büyük olasılıkla zaten temel bir düz metin düzenleyici vardır:

- Windows: **Notepad**
- macOS: **TextEdit**
- Linux dağıtımları: Dağıtıma göre farklı araçlar; örneğin Ubuntu'da **GNOME Text Editor**

Bu uygulamalar basit kod dosyalarını açıp düzenleyebilir, ancak özellikleri sınırlıdır.

Web geliştirme için daha kapsamlı bir kod düzenleyici kullanmak daha uygundur. Yaygın seçeneklerden bazıları:

- [Visual Studio Code](https://code.visualstudio.com/) — Windows, macOS ve Linux; ücretsiz
- [Sublime Text](https://www.sublimetext.com/) — çoklu platform; ücretli lisans modeli
- [Notepad++](https://notepad-plus-plus.org/) — Windows; ücretsiz

Bu eğitim yolunda **Visual Studio Code (VS Code)** kullanmak uygundur. Henüz bir kod düzenleyici kurmadıysanız devam etmeden önce VS Code veya tercih ettiğiniz başka bir kod düzenleyiciyi kurabilirsiniz.

> **Not:** [NetBeans](https://netbeans.apache.org/) veya [WebStorm](https://www.jetbrains.com/webstorm/) gibi **Tümleşik Geliştirme Ortamları (IDE)**, basit kod düzenleyicilerden daha fazla özellik sunar. Ancak başlangıç aşamasında ihtiyaç duyduğunuzdan daha karmaşık olabilirler.

## Temel kod düzenleyici işlevleri

Bu bölümde kod düzenleyicilerde sık kullanılan temel özellikleri inceleyeceğiz ve bunların kod yazarken nasıl yardımcı olduğunu göreceğiz.

> **Not:** Aşağıdaki özellikler bir kod düzenleyicinin yapabileceklerinin yalnızca küçük bir bölümüdür. VS Code kullanıyorsanız daha ayrıntılı bilgi için [Visual Studio Code belgelerine](https://code.visualstudio.com/docs) bakabilirsiniz. Başka bir düzenleyici kullanıyorsanız onun resmi belgelerini inceleyin.

> **Not:** Yalnızca klavye ile çalışan kullanıcılar için VS Code kapsamlı klavye kısayolları sunar. Ayrıntılar için [varsayılan klavye kısayolları referansına](https://code.visualstudio.com/docs/reference/default-keybindings) bakabilirsiniz.

### Dosyaları açma ve düzenleme

Kod düzenleyici kullanmanın en temel avantajlarından biri, geliştirme sırasında karşılaşacağınız farklı kod dosyalarını tek bir uygulamada açabilmenizdir.

Kod dosyasına çift tıkladığınızda yanlış veya ilgisiz bir uygulamanın açılması, ya da işletim sisteminin dosya türünü tanımaması oldukça rahatsız edici olabilir. Kod düzenleyici kurulduktan sonra dosya türlerinin önemli bir bölümü doğrudan onunla ilişkilendirilebilir.

VS Code kurulumu çoğu durumda bu konuda gerekli ayarları yapar. Belirli bir dosya türü hâlâ yanlış uygulamayla açılıyorsa işletim sisteminizde o uzantı için varsayılan uygulamayı elle değiştirebilirsiniz.

Örneğin Windows 11 kullanıyorsanız şu tür bir arama yapabilirsiniz:

```text
Windows 11 dosya türü varsayılan uygulama değiştirme
```

Dosya ve klasörleri açma konusunu bir sonraki MDN bölümünde daha ayrıntılı ele alacaksınız.

### Sözdizimi vurgulama

VS Code gibi kod düzenleyiciler **sözdizimi vurgulama (syntax highlighting)** özelliği sunar. Programlama dilinin farklı parçaları farklı renklerle gösterilir.

Örneğin aşağıdaki JavaScript kodunu düşünün:

```js
function createGreeting(name) {
  const greeting = `Merhaba, ${name}!`;
  return greeting;
}
```

Şimdilik bu kodun tam olarak ne yaptığını anlamanız gerekmez. Önemli olan, kod düzenleyicinin `function`, değişken adları, metin değerleri ve noktalama karakterleri gibi farklı öğeleri görsel olarak ayırt edebilmesidir.

Bu sayede uzun kod bloklarını okumak ve yapıyı anlamak kolaylaşır.

#### Deneyin

1. Yukarıdaki kod örneğini kopyalayın.
2. VS Code'u açın.
3. **File > New File...** seçeneğiyle yeni bir dosya oluşturun.
4. Yeni dosyada dil seçimi bölümünden **JavaScript** seçin.
5. Kodu dosyaya yapıştırın.
6. JavaScript sözdiziminin farklı renklerle gösterildiğini gözlemleyin.

VS Code başka görsel yardımcılar da sağlar:

- Girinti seviyelerini gösteren ince dikey çizgiler, iç içe kod bloklarının nerede başlayıp bittiğini görmeyi kolaylaştırır.
- Açılan veya kapanan süslü parantezin (`{` veya `}`) üzerine geldiğinizde eşleşen diğer parantez vurgulanır.
- Benzer eşleştirme `(` `)` ve `[` `]` gibi diğer ayraçlarda da çalışır.

Bu özellikler özellikle karmaşık ve iç içe geçmiş kodlarda eksik parantezleri veya yanlış blok yapılarını bulmayı kolaylaştırır.

### Kod tamamlama ve öneriler

Kod düzenleyiciler yazarken sırada ne gelebileceğini tahmin edip öneriler gösterebilir. Ayrıca sürekli tekrar edilen standart kod yapılarını otomatik olarak tamamlayabilirler.

Bunu VS Code'da deneyebilirsiniz:

1. Önceki bölümde oluşturduğunuz JavaScript dosyasına dönün.
2. Dosyanın sonuna birkaç boş satır ekleyin.
3. `function` yazmaya başlayın.
4. Sağ tarafta veya imlecin yakınında önerilerden oluşan bir liste belirmelidir.
5. **Function Statement** benzeri işlev şablonunu seçin.

Düzenleyici aşağıdakine benzer bir yapı oluşturabilir:

```js
function name(params) {

}
```

Şimdi fonksiyonun içindeki boş satıra tıklayın ve `document` yazmaya başlayın. Öneriler arasından `document` nesnesini seçebilirsiniz.

Ardından hemen sonuna bir nokta yazın:

```js
document.
```

Bu noktada VS Code, `document` üzerinde kullanılabilecek özellik ve metotları listelemeye başlayacaktır.

Bu özellik, özellikle bir API'nin veya nesnenin kullanılabilir üyelerini tam olarak hatırlamadığınız zamanlarda oldukça kullanışlıdır.

### Hata ayıklamaya yardımcı olma

Kod düzenleyiciler bütün programlama hatalarını otomatik olarak düzeltemez; ancak yazım hatalarını, eksik karakterleri ve bazı basit mantık sorunlarını fark etmenize yardımcı olabilir.

Aşağıdaki örnekte bilerek birkaç hata bırakalım:

```js
function createGreeting(name) {
  const greeting = `Merhaba, ${Name}!`;
  return greeting;
}

const helloChris = createGreeting("Chris);

console.log(helloChris;
```

Bu kodda üç temel sorun bulunmaktadır.

#### 1. Büyük/küçük harf uyuşmazlığı

Fonksiyon parametresi şöyle tanımlanmıştır:

```js
name
```

Ancak içeride şöyle kullanılmıştır:

```js
Name
```

JavaScript büyük/küçük harfe duyarlı olduğu için `name` ve `Name` iki farklı isim kabul edilir.

Doğru kullanım:

```js
const greeting = `Merhaba, ${name}!`;
```

VS Code bu tür durumlarda kullanılmayan değişkenleri soluk gösterebilir veya şüpheli ifadelerin altında uyarı işaretleri gösterebilir.

> **Not:** VS Code'daki işaretli bölümlerin üzerine fareyle geldiğinizde çoğu zaman hata veya öneriyle ilgili daha fazla bilgi gösterilir.

#### 2. Eksik tırnak işareti

Aşağıdaki satırda metni kapatan çift tırnak eksiktir:

```js
const helloChris = createGreeting("Chris);
```

Doğrusu:

```js
const helloChris = createGreeting("Chris");
```

Düzenleyici bu tür bir sözdizimi hatasını genellikle kırmızı dalgalı alt çizgiyle belirtir.

#### 3. Eksik kapanış parantezi

Son satırdaki fonksiyon çağrısında kapanış parantezi yoktur:

```js
console.log(helloChris;
```

Doğrusu:

```js
console.log(helloChris);
```

Bütün düzeltmeler yapıldığında kod şu hale gelir:

```js
function createGreeting(name) {
  const greeting = `Merhaba, ${name}!`;
  return greeting;
}

const helloChris = createGreeting("Chris");

console.log(helloChris);
```

### Ara ve değiştir

İyi bir kod düzenleyicinin güçlü bir **ara ve değiştir (find and replace)** özelliği bulunur.

Bu özellik şu durumlarda yararlıdır:

- Bir hatanın belirli bir fonksiyondan kaynaklandığını düşünüyorsanız fonksiyonun geçtiği tüm yerleri bulabilirsiniz.
- Bir değişkenin veya fonksiyonun adını değiştirmek istiyorsanız tüm kullanımları hızlıca güncelleyebilirsiniz.

VS Code'da deneyelim:

1. JavaScript dosyanıza dönün.
2. **Edit > Find** seçeneğini açın.
3. Arama alanına şunu yazın:

   ```text
   createGreeting
   ```

4. Dosyadaki tüm eşleşmeler vurgulanacaktır.
5. Yukarı/aşağı oklarıyla eşleşmeler arasında hareket edin.
6. **Edit > Replace** seçeneğine geçin.
7. Değiştirme alanına şunu yazın:

   ```text
   sayHello
   ```

8. Tek tek veya toplu değiştir seçeneğiyle `createGreeting` ifadelerini `sayHello` olarak değiştirin.

Sonuç şu şekilde olabilir:

```js
function sayHello(name) {
  const greeting = `Merhaba, ${name}!`;
  return greeting;
}

const helloChris = sayHello("Chris");

console.log(helloChris);
```

VS Code, temel ara/değiştir işleminin yanında daha gelişmiş arama seçenekleri de sunar.

## Kod düzenleyiciyi eklentilerle geliştirme

Çoğu modern kod düzenleyicide bir **eklenti (extension/plugin)** sistemi bulunur. Eklentiler, programın varsayılan kurulumunda bulunmayan yeni özellikleri eklemenizi sağlar.

Eklentiler örneğin şunları yapabilir:

- Varsayılan olarak desteklenmeyen programlama dilleri için kod tamamlama, linting veya hata ayıklama desteği eklemek.
- Var olan dil desteğine ek özellikler kazandırmak.
- Git gibi sürüm kontrol araçlarını doğrudan düzenleyicinin içine entegre etmek.
- Yerel test sunucularını düzenleyicinin içinden çalıştırmak.
- Yeni arayüz temaları veya sözdizimi renk şemaları eklemek.
- Hazır kod parçacıkları önermek.
- Yapay zekâ araçları kullanarak kod önerileri üretmek.

Yapay zekâ ile oluşturulan kod önerilerinde, diğer AI çıktılarında olduğu gibi doğruluk kontrolü yapmak önemlidir. Önerilen kodu anlamadan doğrudan kullanmak yerine ne yaptığını incelemek gerekir.

### VS Code eklentilerini keşfetme

VS Code'daki eklentiler **Extensions Marketplace** panelinden yönetilir.

Paneli açmak için:

```text
View > Extensions
```

Şimdi kısa bir keşif yapalım.

1. **Extensions** panelini açın.
2. Üstteki **Search...** kutusuna:

   ```text
   JavaScript
   ```

   yazın.

3. Sonuçlarda çıkan birkaç eklentiye tıklayın ve açıklamalarını inceleyin. Şimdilik bunları kurmanız gerekmez.
4. Arama kutusuna:

   ```text
   Prettier
   ```

   yazın.

5. **Prettier - Code formatter** eklentisini açın.
6. **Install** düğmesine basın.
7. Kurulum tamamlandığında eklenti sekmesini kapatabilirsiniz.

[Prettier](https://prettier.io/), kodu tutarlı bir biçime dönüştüren bir kod biçimlendiricisidir. Dosyayı kaydederken kodu otomatik olarak düzenleyebilir.

#### Prettier ayarlarını yapılandırma

Prettier'ın her kaydetmede otomatik çalışması için birkaç VS Code ayarı değiştirebilirsiniz.

Ayarları açın:

**macOS**

```text
Code > Settings... > Settings
```

**Windows**

```text
File > Preferences > Settings
```

Ardından:

1. **Search settings** alanına:

   ```text
   formatter
   ```

   yazın.

2. **Editor: Default Formatter** ayarını bulun.
3. Varsayılan biçimlendirici olarak **Prettier - Code formatter** seçin.
4. **Editor: Format On Save** ayarını bulun.
5. Seçeneği etkinleştirin.
6. Ayarlar sekmesini kapatın.

### Prettier'ı deneyin

1. JavaScript dosyanıza geri dönün.
2. Dosyayı `test.js` adıyla kaydedin.
3. İçeriğini aşağıdaki düzensiz kodla değiştirin:

```js
function sayHello(name){const greeting = `Merhaba, ${name}!`;
return greeting;}
```

4. Dosyayı yeniden kaydedin.

Prettier doğru yapılandırıldıysa kod otomatik olarak aşağıdakine benzer şekilde düzenlenmelidir:

```js
function sayHello(name) {
  const greeting = `Merhaba, ${name}!`;
  return greeting;
}
```

Burada yapılan değişiklikler programın ne yaptığını değiştirmez; kodun okunabilirliğini ve biçim tutarlılığını artırır.

## Özet

Kod düzenleyici, web geliştirme sürecindeki temel çalışma araçlarından biridir. Word gibi belge düzenleyicileri kod yazmak için tasarlanmamıştır; kaynak kodu düz metin olarak güvenilir biçimde düzenlemek için VS Code, Sublime Text veya Notepad++ gibi özel bir kod düzenleyici kullanmak daha uygundur. Başlangıç aşamasında VS Code güçlü özellikleri, ücretsiz olması ve geniş eklenti ekosistemi nedeniyle kullanışlı bir seçenektir.

Modern kod düzenleyiciler yalnızca metin yazmanızı sağlamaz. **Sözdizimi vurgulama**, kodun farklı parçalarını görsel olarak ayırt etmenizi sağlar; **kod tamamlama**, yazmak üzere olduğunuz ifadeleri veya standart kod yapılarını önerir; hata işaretleme özellikleri eksik parantez, yanlış değişken adı veya sözdizimi hatası gibi sorunları daha hızlı fark etmenize yardımcı olur. **Ara ve değiştir** özelliği ise büyük dosyalarda veya projelerde isimleri ve tekrar eden ifadeleri hızlı biçimde yönetmenizi sağlar.

Eklentiler kod düzenleyicinin yeteneklerini daha da genişletir. Dil desteği, hata ayıklama, sürüm kontrolü, yerel sunucu entegrasyonu, tema ve otomatik kod biçimlendirme gibi özellikler eklenti yoluyla eklenebilir. Bu bölümde örnek olarak **Prettier** kullanıldı. Prettier'ın varsayılan biçimlendirici olarak ayarlanması ve **Format On Save** seçeneğinin etkinleştirilmesiyle kodunuz her kaydetmede otomatik olarak daha okunabilir ve tutarlı bir biçime getirilebilir.

Bu aşamada amaç bütün VS Code özelliklerini öğrenmek değildir. Dosya açma ve düzenleme, sözdizimi vurgulama, kod önerileri, temel hata tespiti, arama/değiştirme ve eklenti kurma gibi günlük geliştirme işlerinde sık kullanılan özelliklere alışmanız yeterlidir.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Code editors”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) makalesinin bölüm yapısı ve öğrenme hedefleri temel alınarak hazırlanmış ayrıntılı bir Türkçe uyarlamadır.

İlgili kaynaklar:

- [Visual Studio Code](https://code.visualstudio.com/)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [VS Code Default Keyboard Shortcuts](https://code.visualstudio.com/docs/reference/default-keybindings)
- [Prettier](https://prettier.io/)
- [Sublime Text](https://www.sublimetext.com/)
- [Notepad++](https://notepad-plus-plus.org/)
