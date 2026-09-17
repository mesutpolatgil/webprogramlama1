# Dosyalarla Çalışma

> **Kaynak:** [MDN Web Docs — Dealing with files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm yapısını, görsellerini, uygulama akışını ve önemli uyarılarını koruyan ayrıntılı Türkçe uyarlamadır.  
> **Kaynak sayfanın son güncellenme tarihi:** 11 Eylül 2026

Bir web sitesi çok sayıda dosyadan oluşur: metin içerikleri, kod dosyaları, stil dosyaları, görseller ve diğer medya kaynakları bunlardan bazılarıdır. Bir site geliştirirken bu dosyaları bilgisayarınızda düzenli bir yapı içinde toplamanız, birbirleriyle doğru şekilde bağlantı kurduklarından emin olmanız ve sonunda sunucuya yüklenebilecek bir proje haline getirmeniz gerekir.

Bu bölümde, işletim sisteminizin dosya yönetim arayüzünü kullanmayı ve bir web projesi için anlaşılır bir klasör yapısı oluşturmayı öğreneceksiniz.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemini ve web sitesi oluştururken kullanacağınız temel yazılımları temel düzeyde kullanabiliyor olmak. |
| **Öğrenme çıktıları:** | • Dosya ve klasörleri oluşturmak, taşımak ve yeniden adlandırmak.<br>• Dosya adlandırma için iyi uygulamaları öğrenmek.<br>• Standart bir web sitesi klasör yapısını anlamak.<br>• Dosya yollarıyla çalışmak.<br>• Dosya uzantılarının ne işe yaradığını anlamak. |

## Bu makalede

- [Dosya ve klasörleri yönetme](#dosya-ve-klasörleri-yönetme)
- [Bir web sitesinin yapısı nasıl olmalı?](#bir-web-sitesinin-yapısı-nasıl-olmalı)
- [Dosya adları](#dosya-adları)
- [Dosya yolları](#dosya-yolları)

## Dosya ve klasörleri yönetme

Bilgisayarınızdaki dosya ve klasörleri oluşturmanın ve düzenlemenin farklı yolları vardır. Bunları komut satırı veya terminal üzerinden metin komutlarıyla yönetebilirsiniz; bu konu sonraki bölümde ele alınacaktır.

Başlangıç aşamasında ise dosya sistemini görsel bir arayüz üzerinden öğrenmek genellikle daha kolaydır. Modern işletim sistemleri dosya ve klasörleri yönetmek için grafiksel bir dosya yöneticisi sağlar.

macOS'ta bunun için **Finder** kullanılır:

![macOS Finder uygulamasında tipik bir Home klasörü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/finder.png)

Windows'ta ise **File Explorer (Dosya Gezgini)** kullanılır:

![Windows File Explorer uygulamasında tipik bir Home klasörü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/file-explorer.png)

> **Not:** Bu rehber Windows 11 ve macOS 15 temel alınarak hazırlanmıştır. Farklı bir işletim sistemi veya sürüm kullanıyorsanız menüler ve seçenekler farklı görünebilir. Gerektiğinde kendi işletim sisteminiz için güncel kullanım rehberlerini araştırabilirsiniz.

### Temel yapı

Çoğu modern işletim sisteminde kullanıcı hesaplarının kendilerine ait bir **Home (Ana)** klasörü bulunur. Bu klasör genellikle bir ev simgesiyle gösterilir.

Home klasörünün içinde kullanıcının kişisel dosyalarını sakladığı standart klasörler yer alır. Örneğin:

- Documents
- Music
- Pictures
- Downloads
- Desktop

Bilgisayarınızda bunların dışında çok sayıda başka sistem dosyası ve klasörü de bulunur. Şimdilik bunlarla ilgilenmeniz gerekmez.

Oturum açmış bir kullanıcı varsayılan olarak kendi Home klasöründeki dosyalara erişebilir. Web geliştirme projelerinizi Home klasörü içinde, örneğin **Documents** altında tutmanız mantıklı ve güvenlidir.

> **Uyarı:** İşletim sisteminin veya önemli uygulamaların kullandığı sistem klasörlerinde gelişigüzel dosya oluşturmak, silmek veya düzenlemek sorunlara yol açabilir. Ne yaptığınızdan emin olana kadar kendi Home klasörünüz içinde çalışın.

### Klasör oluşturma

Şimdi tüm web projelerinizi saklayacağınız merkezi bir klasör oluşturalım.

1. İşletim sisteminizin dosya yöneticisini açın.
2. Home klasörünüze gidin.
3. **Documents** klasörünü açın.
4. Burada aşağıdaki isimde yeni bir klasör oluşturun:

   ```text
   web-projects
   ```

#### Windows

File Explorer içinde:

1. **New** düğmesine tıklayın.
2. **Folder** seçeneğini seçin.

Alternatif olarak şu kısayolu kullanabilirsiniz:

```text
Ctrl + Shift + N
```

Yeni klasörün adını:

```text
web-projects
```

olarak yazın ve `Enter` tuşuna basın.

#### macOS

Finder'da:

```text
File > New Folder
```

menüsünü kullanabilirsiniz.

Klavye kısayolu:

```text
Cmd + Shift + N
```

Oluşturulan klasörü `web-projects` olarak yeniden adlandırın.

Bir klasör veya dosya adını yanlış yazarsanız sonradan değiştirebilirsiniz.

**Windows:**

- Klasöre sağ tıklayın.
- **Rename** seçeneğini seçin.
- Bazı Windows sürümlerinde önce **Show more options** seçeneğini açmanız gerekebilir.

**macOS:**

- Klasörü seçin.
- Klasör adına tıklayarak düzenleme moduna geçin.

### VS Code'da proje klasörü açma ve dosya oluşturma

Metin dosyalarını doğrudan işletim sisteminin dosya yöneticisinden oluşturmak mümkündür. Bununla birlikte web geliştirme sırasında dosyaları VS Code içinden oluşturmak genellikle daha kolaydır.

VS Code'un kendi **Explorer** paneli vardır. Bu panel, projenizdeki klasörleri ve dosyaları görmenizi ve yönetmenizi sağlar.

Önce işletim sistemi üzerinden `web-projects` klasörünü oluşturmanızın nedeni, VS Code'a başlangıçta hangi klasörü proje alanı olarak kullanacağını göstermeniz gerekmesidir.

Ayrıca işletim sisteminizin dosya yapısını temel düzeyde anlamanız, ileride kullanacağınız daha gelişmiş araçlarda işinizi kolaylaştıracaktır.

Şimdi `web-projects` klasörünü VS Code içinde açalım.

1. VS Code'u açın.
2. Menüden:

   ```text
   File > Open Folder...
   ```

   seçeneğini seçin.

> **Not:** Klavyeyle çalışıyorsanız Windows'ta `Ctrl + K`, ardından `O` tuşlarını kullanabilirsiniz. macOS'ta `Cmd + Shift + P` ile Command Palette'i açıp `Open Folder` araması yaparak **File: Open Folder** komutunu seçebilirsiniz.

3. Açılan dosya seçme penceresinde `web-projects` klasörünü bulun.
4. Klasörü seçin ve **Select Folder** düğmesine basın.
5. VS Code size klasördeki dosyaların yazarlarına güvenip güvenmediğinizi sorabilir.

Şimdilik klasörü yalnızca siz oluşturduğunuz için:

```text
Yes, I trust the authors
```

seçeneğini kullanabilirsiniz.

VS Code'un **EXPLORER** panelinde aşağıdakine benzer bir görünüm görmelisiniz:

![VS Code Explorer panelinde boş web-projects klasörü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/vs-code-explorer.png)

> **Uyarı:** Şimdilik yalnızca kendi Home klasörünüz altında bulunan dosyaları düzenlemeye devam edin. Sistem dosyalarında değişiklik yapmak işletim sisteminizde sorunlara yol açabilir.

#### VS Code'da klavye ile gezinme hakkında kısa bir not

VS Code çok sayıda klavye kısayolu sağlar. Ayrıntılı listeyi [VS Code Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/reference/default-keybindings) sayfasında bulabilirsiniz.

Genel olarak:

- `Tab` ile arayüzdeki farklı öğeler arasında ilerleyebilirsiniz.
- `Shift + Tab` ile önceki odak noktasına dönebilirsiniz.
- Bir odak alanında birden fazla düğme varsa ok tuşlarıyla bunlar arasında hareket edebilirsiniz.

Bir dosyanın içini düzenlerken `Tab` tuşu arayüzde gezinmek yerine dosyaya girinti ekler.

Dosya düzenleyicisinden Explorer paneline geçmek için:

**macOS**

```text
Cmd + Shift + E
```

**Windows**

```text
Ctrl + Shift + E
```

Açık dosya sekmeleri arasında geçiş yapmak için her iki sistemde de:

```text
Ctrl + Tab
```

ve ters yönde:

```text
Ctrl + Shift + Tab
```

kullanabilirsiniz.

#### Dosya oluşturma

Şimdi VS Code Explorer içinde ilk dosyanızı oluşturalım.

1. Explorer panelinin üst kısmındaki **New File...** simgesine tıklayın.
2. Dosya adını:

   ```text
   index.html
   ```

   olarak yazın.
3. `Enter` veya `Return` tuşuna basın.

> **Not:** Welcome sekmesindeki dosya oluşturma düğmelerini kullanmak yerine Explorer panelindeki düğmeleri kullanın. Welcome sekmesini artık kapatabilirsiniz. macOS'ta `Cmd + W`, Windows'ta `Ctrl + W` ile geçerli sekmeyi kapatabilirsiniz.

İşletim sisteminizin dosya yöneticisine geri dönüp `web-projects` klasörünü açtığınızda `index.html` dosyasını orada da görürsünüz.

Bu önemli bir noktadır: VS Code ayrı veya gizli bir dosya sistemi kullanmaz. Explorer panelinde yaptığınız değişiklikler doğrudan bilgisayarınızdaki gerçek dosyalara uygulanır.

### index.html dosyasını kendi alt klasörüne taşıma

Klasörlerin içinde başka klasörler oluşturabilirsiniz. Bunlara **alt klasör (subfolder)** denir.

Dosya ve klasörleri sürükleyip bırakarak başka klasörlerin içine taşımanız da mümkündür.

Şimdi `index.html` dosyasını kendi proje klasörüne taşıyalım.

1. `web-projects` içinde yeni bir klasör oluşturun.
2. Klasörün adını:

   ```text
   test-site
   ```

   olarak belirleyin.
3. `index.html` dosyasını sürükleyip `test-site` klasörünün üzerine bırakın.

Sonuçta yapı şu şekilde olmalıdır:

```text
web-projects/
└── test-site/
    └── index.html
```

> **Not:** Yalnızca klavye kullanıyorsanız:
>
> 1. Ok tuşlarıyla `index.html` dosyasını seçin.
> 2. macOS'ta `Cmd + X`, Windows'ta `Ctrl + X` kullanın.
> 3. Ok tuşlarıyla `test-site` klasörüne ilerleyin.
> 4. macOS'ta `Cmd + V`, Windows'ta `Ctrl + V` kullanarak dosyayı klasöre taşıyın.

Dosya sistemleri ve VS Code Explorer hakkında öğrenilebilecek çok daha fazla özellik vardır. Ancak bu aşamadaki bilgiler başlangıç için yeterlidir. İleride ihtiyaç duyduğunuz dosya yönetimi işlemleri için işletim sisteminizin veya VS Code'un dokümantasyonunu araştırabilirsiniz.

## Bir web sitesinin yapısı nasıl olmalı?

Bir web sitesi üzerinde yerel olarak çalışırken, o siteye ait bütün dosyaları tek bir proje klasörü içinde tutmak iyi bir alışkanlıktır.

Ayrıca farklı web projelerinizi tek bir merkezi klasör altında toplamak, onları daha kolay bulmanızı sağlar.

Bu bölümde oluşturduğumuz yapı şu anda şöyledir:

```text
web-projects/
└── test-site/
    └── index.html
```

Şimdi `test-site` klasörünü tipik bir web sitesi yapısına biraz daha yaklaştıralım.

Çoğu temel web projesinde şunlar bulunur:

1. **`index.html`**  
   Genellikle sitenin ana sayfasını içerir. Kullanıcılar siteye ilk girdiklerinde gördükleri metin ve içerik burada yer alır.

2. **`images` klasörü**  
   Web sitesinde kullanılan görseller burada tutulur.

3. **`styles` klasörü**  
   Sayfanın görünümünü belirleyen CSS dosyaları burada tutulur.

4. **`scripts` klasörü**  
   Sayfaya etkileşim kazandıran JavaScript dosyaları burada tutulur.

`test-site` klasörünüzün içine şimdi şu klasörleri oluşturun:

```text
images
styles
scripts
```

Son yapınız şu şekilde görünmelidir:

```text
web-projects/
└── test-site/
    ├── index.html
    ├── images/
    ├── styles/
    └── scripts/
```

Bu, küçük bir web sitesi için yaygın ve anlaşılır bir başlangıç yapısıdır.

## Dosya adları

Dosya adları genel olarak iki bölümden oluşur:

```text
ad.uzantı
```

Örneğin:

```text
index.html
```

burada:

- `index` dosyanın **adı**,
- `.html` ise dosyanın **uzantısıdır**.

### Dosya adı

Dosya adlarında işletim sisteminin izin verdiği birçok karakter kullanılabilir. Ancak web geliştirmeye başlarken harfler, rakamlar ve basit ayraçlarla çalışmak en güvenli seçenektir.

Bazı dosya adlarının özel anlamları olabilir. Örneğin:

```text
index.html
```

çoğu web sunucusu tarafından bir klasörün varsayılan ana sayfası olarak değerlendirilir.

### Dosya uzantısı

Dosya uzantısı, bilgisayara dosyanın ne tür içerik taşıdığını söyler.

Örneğin:

```text
.html
```

uzantısı, dosyanın HTML kodu içeren düz metin bir belge olduğunu belirtir.

Benzer şekilde:

```text
.css
```

bir CSS dosyasını,

```text
.js
```

bir JavaScript dosyasını,

```text
.png
```

bir PNG görselini gösterebilir.

İşletim sistemi, dosya uzantısını hangi uygulamayla açacağını belirlemek için de kullanabilir.

Dosya uzantısını gelişigüzel silmek veya değiştirmek dosyanın doğru biçimde açılmamasına yol açabilir.

> **Not:** Bir dosya adında birden fazla nokta olabilir. Örneğin:
>
> ```text
> my.cats.html
> ```
>
> Bu durumda son noktadan sonraki bölüm dosya uzantısı kabul edilir; yani uzantı `.html` olur.

Windows bazı bilinen dosya türlerinin uzantılarını varsayılan olarak gizleyebilir. Dosya uzantılarını göremiyorsanız File Explorer ayarlarında **Hide extensions for known file types** seçeneğinin kapalı olduğundan emin olabilirsiniz. Menülerin tam konumu Windows sürümüne göre değişebileceği için gerektiğinde sürümünüze özel yönergeleri araştırın.

### Dosya adlandırma için en iyi uygulamalar

Bu eğitim boyunca dosya ve klasör adlarını şu şekilde yazmak iyi bir alışkanlıktır:

- Tamamen küçük harf kullanın.
- Boşluk kullanmayın.
- Birden fazla kelimeyi tire (`-`) ile ayırın.

Örneğin:

```text
my-file.html
```

iyi bir dosya adıdır.

Şunlardan kaçınmak daha uygundur:

```text
My File.html
```

veya:

```text
MY FILE.HTML
```

Bunun birkaç nedeni vardır.

#### 1. Büyük/küçük harf duyarlılığı

Birçok işletim sistemi ve özellikle web sunucuları büyük/küçük harfe duyarlıdır.

Örneğin gerçek dosya yolu:

```text
test-site/images/MyImage.jpg
```

ise fakat kodunuzda:

```text
test-site/images/myimage.jpg
```

yazarsanız dosya bulunamayabilir.

#### 2. Komut satırında boşluklar sorun çıkarabilir

Dosya adında boşluk varsa komut satırında çoğu zaman adı tırnak içine almanız gerekir.

Örneğin:

```text
"my file.html"
```

Aksi halde komut satırı bunu iki ayrı ifade olarak yorumlayabilir.

#### 3. Bazı programlama dilleri boşluklardan etkilenebilir

Bazı programlama dilleri ve araçlar, özellikle bir dosyayı modül olarak içe aktarırken dosya adındaki boşluklarla sorun yaşayabilir.

#### 4. Dosya adları URL'lere dönüşebilir

Bir dosya adı web adresinin bir bölümüne dönüşebilir.

Örneğin:

```text
my file.html
```

dosyası URL'de buna benzer bir biçimde görünebilir:

```text
https://example.com/my%20file.html
```

Buradaki `%20`, URL içinde boşluk karakterinin kodlanmış halidir.

Bu nedenle:

```text
my-file.html
```

gibi tire kullanılan adlar daha güvenli ve okunabilirdir.

> **İyi uygulama:** Web geliştirmeye başlarken dosya ve klasör adlarında **küçük harf + boşluksuz + kelimeler arasında tire** biçimini kullanın.

Dosya ve URL adlandırma konusunda daha ayrıntılı öneriler için [Google URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure) rehberine bakabilirsiniz.

## Dosya yolları

Bir dosyanın başka bir dosyayı kullanabilmesi için o dosyanın nerede bulunduğunu bilmesi gerekir.

Bu konumu tarif eden ifadeye **dosya yolu (file path)** denir.

Örneğin bir HTML sayfasında görsel göstermek istiyorsanız HTML kodunun görsel dosyasına giden yolu belirtmesi gerekir.

Şimdi bunu küçük bir örnekle uygulayalım.

### Bir görsel ekleme

1. İnternetten kullanmak istediğiniz bir görsel indirin.

   İsterseniz MDN örneğinde kullanılan [Firefox simgesini](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) kullanabilirsiniz.

2. Görseli şu klasöre yerleştirin:

   ```text
   test-site/images/
   ```

3. Görsel dosyasının kısa ve anlaşılır bir adı olduğundan emin olun.

İyi örnekler:

```text
firefox-icon.png
cat.jpg
my-photo.jpg
```

Uzun, rastgele karakterler içeren ve okunması zor dosya adlarından kaçının.

Ayrıca dosya uzantısını değiştirmeyin.

### HTML dosyasına içerik ekleme

`index.html` dosyanızı VS Code içinde açın ve aşağıdaki temel HTML yapısını ekleyin:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="" alt="My test image" />
  </body>
</html>
```

Bu kodun tamamını henüz anlamanız gerekmiyor. HTML'i ilerleyen bölümlerde ayrıntılı olarak öğreneceksiniz.

Şimdilik şu satıra odaklanın:

```html
<img src="" alt="My test image" />
```

Bu satır sayfaya bir görsel eklemek için kullanılır.

`src` özelliğinin içinde görselin bulunduğu dosya yolunu belirtmemiz gerekir.

Şu klasör yapısını düşünün:

```text
test-site/
├── index.html
└── images/
    └── firefox-icon.png
```

`index.html` dosyasından görsele ulaşmak için önce `images` klasörüne girmeniz, ardından görsel dosyasını belirtmeniz gerekir:

```text
images/firefox-icon.png
```

Bunu HTML'e eklediğinizde:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

şeklini alır.

Dosyayı kaydedin ve ardından `index.html` dosyasını bir web tarayıcısında açın.

Bunu farklı yollarla yapabilirsiniz:

- HTML dosyasına sağ tıklayıp **Open With** menüsünden bir tarayıcı seçebilirsiniz.
- Dosya yöneticisi ile tarayıcıyı yan yana açıp HTML dosyasını tarayıcı penceresine sürükleyebilirsiniz.

Her şey doğruysa sayfada görseliniz görünmelidir:

![Firefox logosunu gösteren basit web sayfası](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/website-screenshot.png)

### Dosya yolları için genel kurallar

Dosya yollarıyla çalışırken birkaç temel kural vardır.

#### Aynı klasördeki dosya

Hedef dosya HTML dosyasıyla aynı klasördeyse yalnızca dosya adını yazabilirsiniz:

```text
my-image.jpg
```

Örnek:

```text
test-site/
├── index.html
└── my-image.jpg
```

HTML içinden:

```html
<img src="my-image.jpg" alt="Örnek görsel" />
```

#### Alt klasördeki dosya

Dosya bir alt klasördeyse önce klasörün adını, ardından `/` ve dosyanın adını yazın:

```text
subfolder/my-image.jpg
```

Örneğin:

```text
images/firefox-icon.png
```

#### Üst klasördeki dosya

Bir üst klasöre çıkmak için iki nokta kullanılır:

```text
../
```

Örneğin:

```text
../my-image.jpg
```

şu anlama gelir:

> Bulunduğun klasörden bir seviye yukarı çık ve `my-image.jpg` dosyasını bul.

#### Birden fazla hareketi birleştirme

Dosya yolları gerektiği kadar birleştirilebilir:

```text
../subfolder/another-subfolder/my-image.jpg
```

Bu yol:

1. Önce bir üst klasöre çıkar.
2. `subfolder` klasörüne girer.
3. `another-subfolder` klasörüne girer.
4. `my-image.jpg` dosyasını bulur.

### Windows yolları hakkında

Windows dosya sisteminde yollar genellikle ters eğik çizgi kullanılarak gösterilir:

```text
C:\Windows
```

Ancak HTML içinde dosya yolu yazarken **ileri eğik çizgi (`/`)** kullanmalısınız:

```text
images/firefox-icon.png
```

Windows üzerinde geliştiriyor olsanız bile web kodunda:

```text
images\firefox-icon.png
```

yerine:

```text
images/firefox-icon.png
```

kullanmanız gerekir.

## Özet

Bu bölümde, web geliştirme projelerinin bilgisayarınızda nasıl düzenlenmesi gerektiğini ve dosyalar arasındaki ilişkilerin nasıl kurulduğunu öğrendiniz. İşletim sisteminizdeki **Finder** veya **File Explorer** gibi dosya yöneticilerini kullanarak klasör oluşturabilir, yeniden adlandırabilir ve dosyaları taşıyabilirsiniz. Projelerinizi sistem klasörleri yerine kendi Home klasörünüz altında tutmak hem daha güvenli hem de daha düzenlidir.

Web projelerinizi merkezi bir `web-projects` klasörü altında toplamak, her siteyi de kendi alt klasöründe saklamak iyi bir çalışma düzeni oluşturur. Küçük bir web sitesinde çoğunlukla `index.html` ana sayfası ile `images`, `styles` ve `scripts` klasörleri bulunur. Bu yapı görselleri, CSS dosyalarını ve JavaScript kodlarını birbirinden ayırarak projenin anlaşılmasını kolaylaştırır.

Dosya adlarının da web geliştirmede önemli bir rolü vardır. Dosyaları mümkün olduğunca **küçük harfle**, **boşluk kullanmadan** ve kelimeleri **tire ile ayırarak** adlandırmak; büyük/küçük harf duyarlılığı, komut satırı sorunları ve URL kodlaması gibi birçok problemi önler. Dosya uzantıları ise `.html`, `.css`, `.js` ve `.png` gibi dosya türlerini tanımlar ve gereksiz yere değiştirilmemelidir.

Son olarak, web sayfalarının diğer dosyaları bulabilmesi için **dosya yolları** kullanılır. Aynı klasördeki bir dosya yalnızca adıyla, alt klasördeki dosya `klasor/dosya` biçiminde ve üst klasördeki bir dosya `../dosya` biçiminde referanslanabilir. HTML kodunda platformdan bağımsız olarak dosya yolları için `/` karakteri kullanılır. Bu temel kurallar, ileride HTML, CSS ve JavaScript dosyalarını birbirine bağlarken sürekli karşınıza çıkacaktır.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Dealing with files”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) makalesinin bölüm yapısı, öğrenme hedefleri ve uygulama akışı temel alınarak hazırlanmış ayrıntılı bir Türkçe uyarlamadır.

Kullanılan MDN görselleri:

- [finder.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/finder.png)
- [file-explorer.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/file-explorer.png)
- [vs-code-explorer.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/vs-code-explorer.png)
- [website-screenshot.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files/website-screenshot.png)
- [Firefox örnek görseli](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png)
