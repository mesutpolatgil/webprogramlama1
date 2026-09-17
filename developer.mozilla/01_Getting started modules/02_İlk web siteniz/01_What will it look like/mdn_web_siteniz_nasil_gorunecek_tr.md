# Web Siteniz Nasıl Görünecek?

> **Kaynak:** [MDN Web Docs — What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, uygulama adımlarını, notlarını ve görsellerini koruyan ayrıntılı Türkçe uyarlamadır.  
> **Kaynak sayfanın son güncellenme tarihi:** 7 Kasım 2025

Kod yazmaya başlamadan önce web sitenizin ne sunacağını ve genel olarak nasıl görüneceğini planlamanız gerekir. Bu bölümde basit bir web sitesi için içerik, renk, görsel ve yazı tipi seçimi gibi temel tasarım kararlarını ele alacağız.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web sitesi oluşturmak için kullanacağınız temel yazılımlara ve dosya sistemlerine temel düzeyde aşina olmak. |
| **Öğrenme çıktıları:** | • Basit bir web sitesi planlamak.<br>• Temel bir tasarım süreci kullanmak.<br>• Web sitesi için gerekli görsel ve yazı tipi gibi varlıkları toplamak. |

## Bu makalede

- [Her şeyden önce: planlama](#her-şeyden-önce-planlama)
- [Tasarımınızın taslağını çizme](#tasarımınızın-taslağını-çizme)
- [Tema rengi seçme](#tema-rengi-seçme)
- [Görsel seçme](#görsel-seçme)
- [Yazı tipi seçme](#yazı-tipi-seçme)
- [Özet](#özet)

## Her şeyden önce: planlama

İlk web sitenizi oluşturmaya başlamadan önce birkaç temel karar vermeniz gerekir.

Bir web sitesi teknik olarak çok farklı amaçlar için kullanılabilir, ancak ilk projenizde mümkün olduğunca basit bir hedef belirlemek öğrenme sürecini kolaylaştırır.

Bu eğitim boyunca oluşturacağınız örnek sayfanın şu temel öğelere sahip olması yeterlidir:

- Bir ana başlık,
- Bir görsel,
- Birkaç paragraf metin.

Başlamadan önce aşağıdaki sorulara cevap verin:

1. **Web siteniz hangi konu hakkında olacak?**  
   İlgi duyduğunuz basit bir konu seçebilirsiniz. Örneğin bir hayvan türü, sevdiğiniz bir şehir, oyun, hobi veya teknoloji konusu olabilir.

2. **Bu konu hakkında hangi bilgileri göstereceksiniz?**  
   Bir başlık belirleyin, birkaç kısa paragraf hazırlayın ve sayfada kullanmak istediğiniz bir görseli düşünün.

3. **Sitenin genel görünümü nasıl olmalı?**  
   Örneğin:
   - Arka plan rengi ne olacak?
   - Daha resmi mi yoksa eğlenceli mi görünecek?
   - Kalın ve dikkat çekici mi, yoksa sade ve yumuşak bir tasarım mı kullanacaksınız?
   - Hangi tür yazı tipi bu tasarıma uygun olur?

Bu aşamada ayrıntılı bir profesyonel tasarım sistemi oluşturmanız gerekmez. Ama birkaç temel karar vermeniz, sonraki adımlarda ne yapacağınızı netleştirir.

> **Not:** Büyük ve karmaşık projelerde renkler, yazı tipleri, boşluklar, görsel dil ve yazım biçimi gibi ayrıntıları tanımlayan kapsamlı tasarım kuralları kullanılabilir. Bunlara **design guide**, **design system** veya **brand book** gibi adlar verilir. Gerçek bir örnek görmek isterseniz [Firefox Acorn Design System](https://acorn.firefox.com/) projesini inceleyebilirsiniz.

## Tasarımınızın taslağını çizme

Bir sonraki adım, sitenizin yaklaşık olarak nasıl görüneceğini kağıt üzerinde tasarlamaktır.

Bir kalem ve kağıt alın ve sayfanızın kaba bir taslağını çizin.

İlk web sayfanız çok basit olacağı için ayrıntılı bir çizim yapmanız gerekmez. Ama şu öğelerin sayfada nerede bulunacağını düşünmeniz yararlıdır:

- Başlık,
- Görsel,
- Paragraflar,
- Sayfanın genel genişliği,
- İçeriğin hizalanması.

![Kağıt üzerinde çizilmiş kaba bir web sitesi taslağı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/website-drawing-scan.png)

> **Not:** Profesyonel projelerde bile tasarım ekipleri çoğu zaman önce hızlı kağıt eskizleriyle başlar. Daha sonra bu fikirler grafik tasarım araçları veya doğrudan web teknolojileri kullanılarak daha ayrıntılı dijital taslaklara dönüştürülebilir.

Web geliştirme ekiplerinde farklı uzmanlıklar bulunabilir.

**Grafik tasarımcılar**, sitenin görsel görünümünü ve görsel öğelerini oluşturmakla ilgilenir.

**UX (User Experience / Kullanıcı Deneyimi) tasarımcıları** ise kullanıcının siteyi nasıl algılayacağını ve siteyle nasıl etkileşim kuracağını düşünür.

Bu noktada daha önce planladığınız sayfa başlığını ve paragrafları da hazır tutun. Sonraki bölümde bu içerikleri gerçek web sayfasına ekleyeceksiniz.

## Tema rengi seçme

Şimdi sayfanız için temel bir tema rengi seçelim.

Bu örnekte özellikle arka plan rengi üzerinde duracağız.

1. MDN'nin [Color format converter](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter) aracını açın.
2. Beğendiğiniz bir renk seçin.
3. Rengin yanında aşağıdakine benzer bir kod göreceksiniz:

   ```text
   #660066
   ```

4. Bu değeri bir yere kaydedin; ilerleyen bölümde CSS yazarken kullanacaksınız.

Bu tür renk gösterimine **hexadecimal (hex) renk kodu** denir.

Örneğin:

```text
#660066
```

altı onaltılık karakterden oluşan bir CSS renk değeridir.

![MDN renk biçimi dönüştürücü aracı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/color_format_converter.jpg)

Şimdilik hex renk kodlarının nasıl hesaplandığını bilmeniz gerekmez. Daha sonra CSS öğrenirken renk sistemlerini daha ayrıntılı inceleyeceksiniz.

## Görsel seçme

Şimdi web sitenizde kullanacağınız bir görsel bulmanız gerekiyor.

### 1. Görsel araması açın

Örneğin [Google Images](https://images.google.com/) üzerinden arama yapabilirsiniz.

### 2. Görsel lisansına dikkat edin

İnternette bulduğunuz bir görselin herkese açık olması, onu istediğiniz şekilde kullanabileceğiniz anlamına gelmez.

Web'deki görsellerin büyük bölümü telif hakkıyla korunur. Bu nedenle özellikle gerçek projelerde bir görselin kullanım lisansını kontrol etmeniz gerekir.

Google Images kullanıyorsanız sonuçları lisansa göre filtrelemek için:

1. Arama sonuçlarında **Tools** düğmesini açın.
2. **Usage rights** seçeneğini bulun.
3. Öğrenme projesi için uygun olduğunda **Creative Commons licenses** filtresini seçin.

![Google Images üzerinde Creative Commons lisans filtresi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/updated-google-images-licensing.png)

> **Önemli:** Creative Commons etiketi bile tek başına her kullanımın serbest olduğu anlamına gelmez. Gerçek bir projede görselin özgün kaynağına giderek lisans koşullarını kontrol edin ve gerekiyorsa atıf yapın.

### 3. Uygun bir görsel bulun

Web sitenizin konusuyla uyumlu bir görsel arayın.

Örneğin Firefox hakkında bir sayfa hazırlıyorsanız arama teriminiz şöyle olabilir:

```text
Firefox
```

### 4. Görseli büyütün

Arama sonucunda kullanmak istediğiniz görsele tıklayın ve daha büyük önizlemesini açın.

![Google Images üzerinde büyütülmüş görsel sonucu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/updated-google-images.png)

### 5. Görseli kaydedin

Görseli bilgisayarınıza kaydetmek için:

**Windows/Linux**

- Görsele sağ tıklayın.
- **Save Image As...** benzeri seçeneği kullanın.

**macOS**

- `Ctrl` tuşuna basılı tutarak görsele tıklayın veya sağ tıklayın.
- **Save Image As...** seçeneğini kullanın.

Görseli kolayca bulabileceğiniz bir konuma kaydedin.

Bir sonraki HTML bölümünde bu dosyayı web projenizin `images` klasörüne yerleştireceksiniz.

## Yazı tipi seçme

Bir web sitesinde kullanılan yazı tipi tasarımın önemli bir parçasıdır.

Bazı yazı tipleri hemen hemen bütün bilgisayarlarda bulunur. Bunlara genellikle **web-safe fonts (web için güvenli yazı tipleri)** denir.

Örnekler:

- Arial
- Times New Roman
- Courier New

Bu yazı tiplerinden birini kullanırsanız tarayıcı çoğu durumda font dosyasını kullanıcının kendi bilgisayarından yükleyebilir.

Ancak her cihazda bulunmayan farklı bir font kullanmak istiyorsanız iki temel seçeneğiniz vardır:

1. Font dosyalarını web sitenizin dosyalarıyla birlikte sunmak.
2. Google Fonts gibi üçüncü taraf bir font hizmetinden fontu yüklemek.

Bu başlangıç projesinde [Google Fonts](https://fonts.google.com/) kullanabilirsiniz.

### Google Fonts'tan font seçme

1. [Google Fonts](https://fonts.google.com/) sitesini açın.
2. Listede gezinerek sitenizin tasarımına uygun bir font bulun.
3. Çok fazla seçenek varsa filtreleri kullanarak sonuçları daraltın.
4. Kullanmak istediğiniz fontu açın.
5. **Get font** düğmesine tıklayın.
6. Sonraki ekranda **Get embed code** seçeneğini açın.
7. Size verilen kod parçalarını kopyalayın ve güvenli bir yerde saklayın.

Bu kodları ilerleyen CSS bölümünde kullanacaksınız.

Google Fonts genellikle iki tür kod verir:

- HTML belgesine eklenen bir font yükleme kodu,
- CSS içinde kullanılacak `font-family` değeri.

Şimdilik bunları çalıştırmanız gerekmez; yalnızca daha sonra kullanmak üzere saklamanız yeterlidir.

> **Not:** Görseller gibi yazı tipleri de lisans koşullarına tabi olabilir. Öğrenme amaçlı küçük örneklerde çoğu zaman sorun yaşamazsınız, ancak gerçek ve özellikle ticari projelerde fontun lisansını mutlaka kontrol edin.

## Bu aşamanın sonunda elinizde ne olmalı?

Bu bölümü tamamladığınızda aşağıdakileri hazırlamış olmanız gerekir:

- Web sitenizin konusu,
- Sayfa için bir başlık,
- Birkaç paragraf içerik,
- Basit bir kağıt taslağı,
- Seçtiğiniz tema renginin hex kodu,
- Kullanmak istediğiniz bir görsel,
- Seçtiğiniz bir yazı tipi,
- Gerekliyse Google Fonts embed kodları.

Örneğin çalışma notunuz şöyle görünebilir:

```text
Konu: Firefox
Başlık: Mozilla is cool
Arka plan: #bada55
Görsel: firefox-logo.png
Font: Open Sans

İçerik:
- Mozilla hakkında kısa giriş
- Topluluk hakkında paragraf
- Web'in açık olmasıyla ilgili paragraf
```

Bu hazırlıklar tamamlandığında bir sonraki adımda gerçek HTML belgesini oluşturmaya başlayabilirsiniz.

## Özet

Bu bölümde web sitesi geliştirmeye doğrudan kod yazarak başlamak yerine önce **planlama ve tasarım kararları** vermenin neden yararlı olduğunu gördünüz. İlk projeniz için karmaşık bir tasarım sistemi oluşturmanız gerekmez; sitenin konusunu, hangi bilgileri göstereceğini ve genel görünümünü belirlemeniz yeterlidir.

İlk adım olarak başlık, birkaç paragraf ve kullanılacak görsel gibi içerikleri planladınız. Ardından sitenin kabaca nasıl görüneceğini kağıt üzerinde çizerek başlık, görsel ve metinlerin sayfadaki yerleşimi hakkında fikir oluşturdunuz. Bu tür düşük ayrıntılı eskizler, profesyonel projelerde de tasarım sürecinin başlangıcında sık kullanılan bir yöntemdir.

Daha sonra bir **tema rengi** belirleyip hex kodunu kaydettiniz. Web sitenizde kullanacağınız görseli seçerken telif hakkı ve lisans koşullarını göz önünde bulundurmanız gerektiğini öğrendiniz. Son olarak web-safe fontlar ile harici web fontları arasındaki temel farkı gördünüz ve Google Fonts üzerinden bir font seçip daha sonra kullanılmak üzere embed kodunu hazırladınız.

Bu noktada henüz HTML, CSS veya JavaScript yazmadınız; fakat sitenizin temel tasarım kararları hazır. Bir sonraki bölümde bu planı kullanarak **HTML ile gerçek web sayfası içeriğini oluşturmaya** başlayacaksınız.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“What will your website look like?”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) sayfasının eğitim kapsamı ve bölüm sırası temel alınarak hazırlanmış ayrıntılı bir Türkçe uyarlamadır.

### Kaynak sayfadaki görseller

- [Web sitesi kağıt taslağı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/website-drawing-scan.png)
- [MDN renk biçimi dönüştürücü](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/color_format_converter.jpg)
- [Google Images lisans filtresi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/updated-google-images-licensing.png)
- [Google Images görsel seçimi](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like/updated-google-images.png)

### İlgili kaynaklar

- [Firefox Acorn Design System](https://acorn.firefox.com/)
- [MDN Color format converter](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Google Images](https://images.google.com/)
- [Google Fonts](https://fonts.google.com/)
