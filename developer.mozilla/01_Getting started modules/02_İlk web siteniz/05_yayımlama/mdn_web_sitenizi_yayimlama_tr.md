# Web Sitenizi Yayımlama

> **Kaynak:** [MDN Web Docs — Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini ve uygulama akışını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 12 Eylül 2026

Web sitenizin kodunu yazmayı ve dosyalarını düzenlemeyi tamamladıktan sonra sıradaki adım onu internette erişilebilir hale getirmektir. Bunun için sitenizin dosyalarını bir sunucuda barındırmanız ve kullanıcıların ulaşabileceği bir web adresi sağlamanız gerekir.

Bu bölümde web sitesi yayımlamanın temel yöntemlerini karşılaştıracak, hosting ve alan adı kavramlarını öğrenecek ve başlangıç seviyesinde kolay uygulanabilen bir yöntem olan **GitHub Pages** üzerinden örnek sitenizi internete açacaksınız.

> **Not:** Bu bölümü uygulayabilmek için bilgisayarınızda yerel olarak çalışan örnek bir web sitesinin bulunması gerekir. En azından geçerli bir `index.html` dosyanız olmalıdır. Henüz böyle bir proje hazırlamadıysanız bu modülün önceki bölümlerini tamamlamanız yararlı olur.

|  |  |
| --- | --- |
| **Ön koşullar:** | İşletim sisteminizi, web geliştirmede kullanılan temel yazılımları ve dosya sistemini temel düzeyde kullanabiliyor olmak; ayrıca yerel bilgisayarınızda çalışan basit bir web sitesi projesine sahip olmak. |
| **Öğrenme çıktıları:** | • Web sitesi yayımlarken kullanılan hosting, alan adı ve dosya aktarımı gibi temel kavramları anlamak.<br>• GitHub Pages, Netlify ve web tabanlı kod editörleri gibi alternatif yayımlama seçeneklerini tanımak.<br>• GitHub Pages kullanarak statik bir web sitesini yayımlamak.<br>• Hosting ve alan adı satın almanın genel mantığını öğrenmek.<br>• Bir alan adının nasıl kaydedildiği hakkında temel fikir edinmek. |

## Bu makalede

- [Seçenekler nelerdir?](#seçenekler-nelerdir)
- [GitHub üzerinden yayımlama](#github-üzerinden-yayımlama)
- [İleri okuma](#ileri-okuma)
- [Özet](#özet)

## Seçenekler nelerdir?

Bir web sitesini internete yayımlamanın tek bir yolu yoktur. Kullanacağınız yöntem sitenizin türüne, bütçenize, teknik bilginize ve ne kadar kontrol istediğinize göre değişir.

Başlangıç seviyesinde üç ana yaklaşımı bilmek yeterlidir:

1. **Hosting ve alan adı satın almak**
2. **GitHub Pages, Netlify veya benzeri çevrimiçi bir platform kullanmak**
3. **CodePen, JSFiddle veya benzeri web tabanlı geliştirme ortamlarını kullanmak**

Her yöntemin avantajları ve sınırlamaları vardır.

## Hosting ve alan adı almak

Daha fazla kontrol isteyen profesyonel kullanıcılar ve işletmeler genellikle iki hizmet kullanır:

- **Web hosting**
- **Alan adı (domain name)**

### Web hosting nedir?

Web hosting, web sitenizin dosyalarını internete bağlı bir sunucuda saklamanızı sağlayan hizmettir.

Yerel bilgisayarınızda şu tür dosyalar olabilir:

```text
index.html
styles/
scripts/
images/
```

Bu dosyaları hosting sağlayıcısının web sunucusuna yüklediğinizde kullanıcılar dosyalara internet üzerinden erişebilir.

Basitleştirilmiş olarak:

```text
Bilgisayarınızdaki site dosyaları
            ↓
       Web sunucusu
            ↓
      İnternet kullanıcıları
```

Hosting hizmeti çoğunlukla aylık veya yıllık ücretle kiralanır.

### Alan adı nedir?

Alan adı, kullanıcıların sitenize ulaşmak için tarayıcıya yazdığı insan tarafından okunabilir web adresidir.

Örnekler:

```text
https://www.mozilla.org
```

```text
https://www.bbc.co.uk
```

Alan adı genellikle bir **domain registrar (alan adı kayıt kuruluşu)** üzerinden belirli bir süre için kaydedilir.

Siz alan adının kalıcı sahibi olmazsınız; kayıt süresini düzenli olarak yenilersiniz.

### Hosting ve alan adı nasıl birlikte çalışır?

Hosting ve alan adını aynı firmadan alırsanız çoğu sağlayıcı bağlantıyı otomatik olarak yapılandırır.

Farklı şirketlerden hizmet aldıysanız alan adınızı doğru hosting sunucusuna yönlendirmeniz gerekir.

Bu işlem çoğunlukla alan adı sağlayıcısının kontrol panelinde:

```text
nameserver
```

ayarlarının değiştirilmesiyle yapılır.

Hosting sağlayıcınız genellikle size kullanmanız gereken nameserver adreslerini verir.

Basitleştirilmiş olarak:

```text
example.com
    ↓
DNS / nameserver ayarları
    ↓
Hosting sunucusu
    ↓
Web sitesi dosyaları
```

### Dosyaları hosting sunucusuna nasıl aktarırsınız?

Hosting şirketleri farklı yükleme yöntemleri sunabilir.

#### Sürükle ve bırak

Bazı kontrol panellerinde dosyaları tarayıcıya sürükleyip bırakarak yükleyebilirsiniz.

Bu yöntem başlangıç seviyesinde oldukça kolaydır.

#### FTP

**FTP (File Transfer Protocol)**, yerel bilgisayarınızdaki dosyaları uzak bir sunucuya aktarmak için kullanılan yöntemlerden biridir.

FTP uygulamalarında genellikle şu bilgileri girmeniz gerekir:

```text
Sunucu adresi
Kullanıcı adı
Parola
Port
```

Daha sonra arayüz çoğunlukla iki bölüme ayrılır:

```text
Yerel dosyalar     |     Sunucu dosyaları
```

Dosyaları iki taraf arasında taşıyabilirsiniz.

> **Not:** Modern hosting hizmetleri klasik FTP yerine güvenli sürümleri veya farklı aktarım yöntemleri kullanabilir. Sağlayıcınızın kendi dokümantasyonunu takip edin.

#### GitHub üzerinden otomatik dağıtım

Bazı hosting sağlayıcıları web sitenizin kodunu GitHub deposundan doğrudan alabilir.

Genel iş akışı:

```text
Kod değişikliği
     ↓
GitHub deposu
     ↓
Hosting sağlayıcısı
     ↓
Otomatik build/deploy
     ↓
Canlı web sitesi
```

Bu yaklaşım profesyonel geliştirme süreçlerinde oldukça yaygındır.

#### Komut satırı araçları

Bazı platformlar kendi CLI araçlarını sağlar.

Örneğin genel iş akışı şu şekilde olabilir:

```bash
platform login
platform deploy
```

Gerçek komutlar kullandığınız hizmete göre değişir.

### Hosting ve alan adı bulma ipuçları

MDN belirli bir ticari hosting sağlayıcısını önermemektedir.

Bir hizmet ararken şu ifadeleri araştırabilirsiniz:

```text
web hosting
```

```text
domain registrar
```

```text
domain name registration
```

Bir alan adı kayıt kuruluşunun sitesinde istediğiniz alan adının kullanılabilir olup olmadığını kontrol edebilirsiniz.

Örneğin:

```text
ornekprojem.com
```

başka biri tarafından kaydedilmişse farklı bir ad veya uzantı seçmeniz gerekebilir.

### İnternet servis sağlayıcınız hosting sunabilir

Bazı internet servis sağlayıcıları küçük kişisel web siteleri için sınırlı hosting alanı sağlayabilir.

Bu tür hizmetler profesyonel projeler için yeterli olmayabilir; ancak öğrenme ve deneme amacıyla iş görebilir.

### Ücretsiz site oluşturma hizmetleri

Başlangıç seviyesinde ücretsiz veya sınırlı ücretsiz plan sunan servisler de vardır.

Örnekler:

- [Neocities](https://neocities.org/)
- [Google Sites](https://sites.google.com/)
- [WordPress.com](https://wordpress.com/)

Bu servislerde esneklik daha sınırlı olabilir, ancak temel denemeler için kolay bir başlangıç sağlarlar.

## Çevrimiçi bir araç kullanmak

Bir siteyi yayımlamak için klasik hosting satın almak zorunda değilsiniz.

Bazı platformlar kodunuzu doğrudan internet üzerinde barındırabilir.

### GitHub

[GitHub](https://github.com/) yazılım projelerini Git sürüm kontrol sistemiyle saklamak ve paylaşmak için kullanılan popüler bir platformdur.

GitHub üzerinde:

- Kod depoları oluşturabilirsiniz.
- Projelerin geçmişini tutabilirsiniz.
- Başka geliştiricilerle birlikte çalışabilirsiniz.
- Açık kaynak projeler yayımlayabilirsiniz.

Ayrıca **GitHub Pages** özelliği sayesinde statik web sitelerini ücretsiz olarak internete açabilirsiniz.

GitHub Pages özellikle şu tür projeler için uygundur:

- Kişisel portföyler,
- Dokümantasyon siteleri,
- Öğrenme projeleri,
- HTML/CSS/JavaScript tabanlı statik siteler.

### Netlify

[Netlify](https://www.netlify.com/) statik web sitelerini yayımlamak için kullanılan bir hosting platformudur.

GitHub deposuna bağlanarak her kod değişikliğinde siteyi otomatik olarak yeniden yayımlayabilir.

Ayrıca çeşitli ek özellikler sunabilir:

- Deployment preview,
- Form işleme,
- Sunucusuz fonksiyonlar,
- Otomatik build süreçleri.

Başlangıç seviyesinde ücretsiz planı birçok basit proje için yeterli olabilir.

### Fly.io

[Fly.io](https://fly.io/) yalnızca statik dosyalardan oluşmayan, backend servisi veya veritabanı gerektiren uygulamalar için kullanılabilecek bir platformdur.

Örneğin:

```text
Frontend
   +
Backend API
   +
Database
```

gibi daha karmaşık projelerde klasik GitHub Pages yaklaşımından daha uygun olabilir.

Bu tür platformlar genellikle ücretsiz başlangıç seçenekleri sunabilir; ancak ücretsiz planların kapasite ve özellik sınırları vardır.

## CodePen gibi web tabanlı IDE kullanmak

Bir başka seçenek, doğrudan tarayıcıda çalışan geliştirme ortamlarını kullanmaktır.

Bu uygulamalarda çoğunlukla ayrı alanlarda:

```text
HTML
CSS
JavaScript
```

yazarsınız.

Sonuç aynı sayfada canlı olarak görüntülenir.

Bu tür araçlar özellikle:

- Küçük örnekleri test etmek,
- Bir CSS tekniğini göstermek,
- Hata ayıklamak için kod paylaşmak,
- Bir fikir üzerinde hızlıca deneme yapmak,
- Eğitim sırasında küçük alıştırmalar yapmak

için çok kullanışlıdır.

Ancak tam web sitesi hosting hizmetlerine göre bazı sınırlamaları olabilir.

Örneğin:

- Görsel ve diğer dosyalar için depolama sınırlı olabilir.
- Karmaşık klasör yapıları desteklenmeyebilir.
- Backend uygulamaları çalıştırılamayabilir.

Yaygın örnekler:

- [Scrimba](https://scrimba.com/)
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

> **İpucu:** Bu araçlardan birkaçını deneyerek hangisinin çalışma biçiminize daha uygun olduğunu görebilirsiniz.

## GitHub üzerinden yayımlama

Şimdi örnek sitenizi **GitHub Pages** kullanarak yayımlayalım.

Bu yöntem basit bir HTML/CSS/JavaScript sitesi için oldukça uygundur.

### 1. GitHub hesabı oluşturun

Henüz hesabınız yoksa:

[GitHub](https://github.com/)

üzerinden bir hesap oluşturun.

Hesap oluşturduktan sonra e-posta adresinizi doğrulamanız istenebilir.

### 2. Yeni repository oluşturun

GitHub'da yeni bir repository oluşturma sayfasına gidin.

Repository adı şu biçimde olmalıdır:

```text
kullaniciadi.github.io
```

Buradaki:

```text
kullaniciadi
```

kendi GitHub kullanıcı adınızdır.

Örneğin GitHub kullanıcı adınız:

```text
fatihdev
```

ise repository adı:

```text
fatihdev.github.io
```

olmalıdır.

> **Önemli:** Kullanıcı adının doğru yazılması gerekir. GitHub Pages kullanıcı sitesi için repository adı GitHub hesabınızın kullanıcı adıyla eşleşmelidir.

Repository oluşturma ekranında gerekli bilgileri girdikten sonra:

```text
Create repository
```

düğmesini kullanarak depoyu oluşturun.

### 3. Mevcut dosyaları yükleme sayfasını açın

Repository oluşturulduktan sonra GitHub size birkaç başlangıç seçeneği gösterebilir.

Sayfada:

```text
uploading an existing file
```

benzeri bağlantıyı bulun.

Bu bağlantı sizi dosya yükleme ekranına götürür.

### 4. Site dosyalarınızı GitHub'a yükleyin

Bilgisayarınızın dosya yöneticisini açın.

Örneğin:

**Windows**

```text
File Explorer
```

**macOS**

```text
Finder
```

Ardından örnek web sitenizin klasörünü açın.

Projeniz örneğin şöyle olabilir:

```text
first-website/
├── index.html
├── images/
│   ├── firefox-icon.png
│   └── firefox-second.png
├── styles/
│   └── style.css
└── scripts/
    └── main.js
```

> **Önemli:** Site klasörünüzün içinde mutlaka bir `index.html` dosyasının bulunduğundan emin olun.

Tarayıcı ve dosya yöneticisi pencerelerini yan yana yerleştirmek işlemi kolaylaştırabilir.

### 5. Tüm site dosyalarını seçin

Proje klasöründeki tüm öğeleri seçin.

Windows'ta:

```text
Ctrl + A
```

macOS'ta:

```text
Cmd + A
```

kullanabilirsiniz.

> **Dikkat:** Genellikle dıştaki proje klasörünü değil, projenin **içindeki dosya ve klasörleri** repository köküne yüklemek istersiniz. Böylece `index.html` doğrudan repository'nin kökünde bulunur.

Doğru:

```text
repository/
├── index.html
├── images/
├── styles/
└── scripts/
```

Başlangıç seviyesinde sorun çıkarabilecek yapı:

```text
repository/
└── first-website/
    ├── index.html
    ├── images/
    ├── styles/
    └── scripts/
```

### 6. Dosyaları GitHub sayfasına sürükleyin

Seçili dosyaları tarayıcıdaki GitHub yükleme alanına sürükleyin.

GitHub arayüzünde buna benzer bir alan görebilirsiniz:

```text
Drag files here to add them to your repository
```

Dosyaları bu alana bıraktığınızda yükleme listesinde görünürler.

Yüklenen dosyaların tamamını kontrol edin.

Özellikle şu dosyanın bulunduğundan emin olun:

```text
index.html
```

### 7. Değişiklikleri commit edin

Dosyalar yüklendikten sonra sayfanın alt bölümündeki:

```text
Commit changes
```

düğmesini kullanın.

Git'te **commit**, projenin belirli bir andaki değişikliklerini kaydetmek anlamına gelir.

Basit biçimde:

```text
Dosyaları değiştir
      ↓
Commit oluştur
      ↓
Repository geçmişine kaydet
```

Bu aşamada Git'i ayrıntılı bilmeniz gerekmez. Sürüm kontrolünü ilerleyen MDN modüllerinde daha detaylı öğreneceksiniz.

### 8. Sitenizi açın

Repository adınız:

```text
kullaniciadi.github.io
```

ise sitenizin adresi de genellikle:

```text
https://kullaniciadi.github.io/
```

olur.

Örneğin:

```text
https://fatihdev.github.io/
```

> **Not:** Site ilk kez yayımlanırken GitHub Pages'ın dosyaları işlemesi birkaç dakika sürebilir. Sayfa hemen görünmezse kısa süre bekleyip yeniden deneyin.

### GitHub Pages çalışmıyorsa kontrol listesi

Siteniz açılmıyorsa şu noktaları kontrol edin:

#### Repository adı doğru mu?

```text
kullaniciadi.github.io
```

formatında olmalıdır.

#### `index.html` kök dizinde mi?

Doğru:

```text
repository/
└── index.html
```

Yanlış olabilecek örnek:

```text
repository/
└── site/
    └── index.html
```

#### Dosya yolları doğru mu?

Örneğin HTML içinde:

```html
<img src="images/firefox-icon.png" alt="Firefox logosu" />
```

kullanıyorsanız repository'de:

```text
images/firefox-icon.png
```

dosyasının gerçekten bulunduğunu doğrulayın.

#### Büyük/küçük harf aynı mı?

GitHub Pages Linux tabanlı dosya sistemlerinde çalıştığı için:

```text
Images/logo.png
```

ile:

```text
images/logo.png
```

aynı yol değildir.

#### Yeterince beklediniz mi?

İlk deployment'ın tamamlanması birkaç dakika sürebilir.

GitHub Pages hakkında daha fazla bilgi için:

[GitHub Pages Documentation](https://docs.github.com/pages)

## Hosting ve alan adıyla profesyonel yayımlama akışı

GitHub Pages öğrenme projeleri için son derece kullanışlıdır; fakat ileride kendi alan adınızı ve hosting hizmetinizi kullanmak isteyebilirsiniz.

Tipik süreç şöyledir:

```text
1. Alan adı seç
       ↓
2. Alan adını registrar üzerinden kaydet
       ↓
3. Hosting paketi satın al
       ↓
4. Domain DNS/nameserver ayarlarını hosting'e bağla
       ↓
5. Site dosyalarını sunucuya aktar
       ↓
6. HTTPS yapılandırmasını kontrol et
       ↓
7. Siteyi test et
```

### Özel alan adı örneği

GitHub Pages adresiniz:

```text
https://fatihdev.github.io/
```

yerine ileride:

```text
https://fatih.dev/
```

gibi bir alan adı kullanmak isteyebilirsiniz.

Bunun için alan adını satın alıp DNS ayarlarını hosting veya GitHub Pages gibi kullandığınız platforma yönlendirmeniz gerekir.

> **Not:** DNS ve özel alan adı yapılandırması bu başlangıç eğitiminin kapsamının dışındadır. Ancak web geliştirmede sık karşılaşacağınız önemli bir konudur.

## Hangi yayımlama yöntemi ne zaman kullanılır?

Basit bir karşılaştırma:

| Yöntem | Kullanım amacı | Avantaj | Sınırlama |
| --- | --- | --- | --- |
| GitHub Pages | Statik siteler, portföyler, öğrenme projeleri | Ücretsiz ve GitHub ile entegre | Backend çalıştırmaz |
| Netlify | Statik siteler ve modern frontend projeleri | Otomatik deployment ve ek özellikler | Gelişmiş kullanımda plan sınırları olabilir |
| Fly.io benzeri platformlar | Backend gerektiren uygulamalar | Sunucu tarafı uygulama çalıştırabilir | Başlangıç için daha karmaşık |
| CodePen / JSFiddle | Küçük demolar ve örnekler | Çok hızlı paylaşım | Tam proje barındırma için sınırlı |
| Klasik hosting | Kişisel veya ticari siteler | Yüksek kontrol | Ücret ve yapılandırma gerektirir |

## İleri okuma

Bu konuları daha ayrıntılı incelemek isterseniz:

### Web sunucusu nedir?

[What is a web server?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)

Bir web sunucusunun web sitesi dosyalarını nasıl sakladığını ve tarayıcılara nasıl gönderdiğini açıklar.

### Alan adlarını anlama

[Understanding domain names](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)

Alan adlarının nasıl çalıştığını ve DNS sistemiyle ilişkisini anlamak için yararlıdır.

### Web'de bir şey yapmanın maliyeti

[How much does it cost to do something on the web?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)

Alan adı, hosting ve çeşitli web hizmetlerinin olası maliyetlerini anlamaya yardımcı olur.

### Codecademy — Deploy a Website

[Deploy a Website](https://www.codecademy.com/)

Web sitesi yayımlama sürecinde daha ileri teknikleri inceleyen harici bir kaynaktır.

## Özet

Bu bölümde yerel bilgisayarınızda çalışan bir web sitesini internete açmak için kullanılan temel yayımlama yöntemlerini öğrendiniz. Web sitesinin dosyalarını internet üzerinden erişilebilir hale getirmek için bir **hosting** hizmeti gerekir. Kullanıcıların siteye hatırlanabilir bir adres üzerinden erişebilmesi için ise bir **alan adı** kullanılabilir. Hosting ve alan adı aynı firmadan alınabileceği gibi farklı sağlayıcılardan da alınabilir; ikinci durumda DNS veya nameserver ayarlarının doğru biçimde yapılandırılması gerekir.

Site dosyalarını sunucuya aktarmanın farklı yolları vardır. Bazı hosting şirketleri tarayıcı üzerinden sürükle-bırak yükleme sunarken bazıları FTP, GitHub entegrasyonu veya komut satırı araçları kullanır. Ayrıca GitHub Pages, Netlify ve Fly.io gibi platformlar klasik hosting satın almadan da projelerinizi internete yayımlamanıza olanak tanır. CodePen ve JSFiddle gibi web tabanlı geliştirme ortamları ise küçük demoları hızlıca paylaşmak için uygundur.

Bu bölümün uygulamalı kısmında **GitHub Pages** üzerinden statik bir site yayımlamanın temel adımlarını gördünüz. GitHub hesabı oluşturduktan sonra `kullaniciadi.github.io` adlı bir repository hazırlayıp projenizin `index.html`, CSS, JavaScript ve görsel dosyalarını yüklediniz. Dosyaları commit ettikten sonra site `https://kullaniciadi.github.io/` adresinde erişilebilir hale gelir. İlk deployment'ın görünmesi birkaç dakika sürebilir.

Bu adımla birlikte ilk web sitesi projenizin temel geliştirme döngüsünü tamamlamış oldunuz: **planladınız, HTML ile içeriği oluşturdunuz, CSS ile biçimlendirdiniz, JavaScript ile etkileşim eklediniz ve son olarak internet üzerinde yayımladınız.** İlerleyen aşamalarda Git, özel alan adları, otomatik deployment, backend hosting ve profesyonel geliştirme iş akışlarını öğrenerek bu süreci daha güçlü ve otomatik hale getirebilirsiniz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Publishing your website”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website) sayfasındaki konu sırası ve öğrenme hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### İlgili kaynaklar

- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Netlify](https://www.netlify.com/)
- [Fly.io](https://fly.io/)
- [Neocities](https://neocities.org/)
- [Google Sites](https://sites.google.com/)
- [WordPress.com](https://wordpress.com/)
- [CodePen](https://codepen.io/)
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [Scrimba](https://scrimba.com/)
