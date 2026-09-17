# İlk Web Siteniz

> **Kaynak:** [MDN Web Docs — Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, eğitim bağlantılarını ve ana öğrenme akışını koruyan ayrıntılı Türkçe uyarlamadır.  
> **Kaynak sayfanın son güncellenme tarihi:** 23 Haziran 2025

Bu modülde web geliştirmenin pratik tarafına giriş yapacaksınız. Basit bir web sayfası hazırlamak için gerekli dosyaları ve görselleri toplayacak, HTML, CSS ve JavaScript kullanarak sayfanızı oluşturacak ve ardından sitenizi internette yayımlayacaksınız.

Profesyonel bir web sitesi geliştirmek oldukça kapsamlı bir iştir. Ancak web geliştirmeye yeni başlıyorsanız küçük ve anlaşılır bir projeyle başlamak en iyi yaklaşımdır. İlk hedefiniz büyük ve karmaşık bir uygulama oluşturmak değil; basit bir siteyi baştan sona tamamlayarak temel iş akışını öğrenmek olmalıdır.

## Bu makalede

- [Ön koşullar](#ön-koşullar)
- [Eğitimler](#eğitimler)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## Ön koşullar

Bu modüle başlamak için HTML, CSS veya JavaScript hakkında önceden bilgi sahibi olmanız gerekmez.

Bununla birlikte aşağıdaki temel becerilere sahip olmanız beklenir:

- İşletim sisteminizi temel düzeyde kullanabilmek.
- Dosya ve klasörler arasında gezinebilmek.
- Web tarayıcısı kullanabilmek.
- Bir kod düzenleyici kurmuş olmak.
- Birden fazla modern web tarayıcısına erişebilmek.

Bu konularda henüz rahat değilseniz önce MDN'nin [Ortam kurulumu (Environment setup)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup) modülünü tamamlamanız yararlı olacaktır.

## Eğitimler

Bu modül beş ana adımdan oluşur. Adımlar birbirini tamamladığı için sırayla ilerlemek en anlaşılır yaklaşımdır.

### 1. Web siteniz nasıl görünecek?

**Kaynak:** [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)

Kod yazmaya başlamadan önce sitenizin içeriğini ve tasarımını planlamanız gerekir.

Bu bölümde aşağıdaki sorular üzerinde düşünürsünüz:

- Web sitenizde hangi bilgileri göstereceksiniz?
- Hangi görselleri kullanacaksınız?
- Renk paleti nasıl olacak?
- Hangi yazı tipleri kullanılacak?
- Sayfanın genel görünümü ve düzeni nasıl olmalı?

İyi bir web sitesi genellikle doğrudan kod yazmaya başlamak yerine önce içerik ve tasarım hakkında basit bir plan hazırlanarak oluşturulur.

### 2. İçeriği oluşturma

**Kaynak:** [Creating the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)

**HTML (HyperText Markup Language)**, web sayfasının yapısını ve içeriğini tanımlamak için kullanılır.

HTML ile örneğin:

- Başlıklar,
- Paragraflar,
- Madde işaretli listeler,
- Bağlantılar,
- Görseller,
- Veri tabloları

gibi içerikleri yapılandırabilirsiniz.

Bu bölümde ilk web sitenizin temel içeriğini oluşturacak ve HTML'in web sayfasındaki rolünü uygulamalı olarak görmeye başlayacaksınız.

### 3. İçeriği biçimlendirme

**Kaynak:** [Styling the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)

**CSS (Cascading Style Sheets)**, HTML ile oluşturulan içeriğin nasıl görüneceğini belirler.

CSS kullanarak örneğin:

- Metin rengini değiştirebilir,
- Yazı tiplerini ayarlayabilir,
- Arka plan renkleri veya görselleri ekleyebilir,
- Öğeler arasındaki boşlukları değiştirebilir,
- İçeriği sayfanın belirli bölgelerine yerleştirebilirsiniz.

Bu bölüm, oluşturduğunuz HTML sayfasını daha düzenli ve görsel olarak çekici hale getirmek için CSS'in temel kullanımını gösterir.

### 4. Etkileşim ekleme

**Kaynak:** [Adding interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)

**JavaScript**, web sayfalarına davranış ve etkileşim ekleyen programlama dilidir.

JavaScript sayesinde örneğin:

- Kullanıcının bir düğmeye tıklamasına tepki verebilir,
- Form verilerini işleyebilir,
- Sayfadaki içeriği dinamik olarak değiştirebilir,
- Animasyonlar oluşturabilir,
- Etkileşimli oyunlar veya kullanıcı arayüzleri geliştirebilirsiniz.

Bu bölümde JavaScript'in temel rolünü görecek ve ilk sitenize küçük bir etkileşim ekleyeceksiniz.

### 5. Web sitenizi yayımlama

**Kaynak:** [Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

HTML, CSS, JavaScript ve diğer proje dosyalarınızı bilgisayarınızda hazırlamanız sitenin yalnızca yerel olarak çalışması için yeterlidir.

Başka insanların web sitenize ulaşabilmesi için dosyaları internette erişilebilen bir sunucu veya barındırma hizmetine yüklemeniz gerekir.

Bu bölümde hazırladığınız örnek sitenin internette yayımlanması ele alınır. Böylece ziyaretçiler sitenize bir web adresi üzerinden erişebilir.

## Modülün genel akışı

Bu beş bölüm birlikte temel bir web geliştirme iş akışını gösterir:

```text
Fikir ve planlama
       ↓
HTML ile içerik
       ↓
CSS ile görünüm
       ↓
JavaScript ile etkileşim
       ↓
İnternette yayımlama
```

Bu akış, çok daha büyük ve profesyonel web projelerinde de aynı temel mantığı korur. Gerçek projelerde yalnızca her aşamanın kapsamı ve kullanılan araçların sayısı artar.

## Ayrıca bakınız

### The Frontend Developer Career Path

MDN, ek öğrenme kaynağı olarak Scrimba'nın **Frontend Developer Career Path** programına bağlantı verir:

[Scrimba — The Frontend Developer Career Path](https://scrimba.com/the-frontend-developer-career-path-c0j)

Bu eğitim programı etkileşimli dersler, uygulamalar ve çeşitli ön uç geliştirme konularını içerir.

> **Not:** Bu kaynak MDN'nin öğrenme ortağı tarafından sunulan harici bir eğitimdir. MDN'nin kendi dokümantasyonundan ayrı bir hizmettir.

## Özet

**İlk Web Siteniz** modülü, web geliştirme sürecini başlangıçtan yayımlamaya kadar tek bir küçük proje üzerinden öğretir. Bu aşamada HTML, CSS veya JavaScript konusunda önceden uzman olmanız beklenmez; ancak dosya sistemi, tarayıcı ve kod düzenleyici gibi temel geliştirme araçlarını kullanabilecek durumda olmanız gerekir.

Modülün ilk adımında web sitenizin amacını, içeriğini ve görsel tasarımını planlarsınız. Ardından HTML kullanarak sayfanın yapısını ve içeriğini oluşturursunuz. CSS ile renk, yazı tipi, arka plan ve yerleşim gibi görsel özellikleri düzenler, JavaScript ile sayfaya kullanıcı etkileşimleri eklersiniz. Son adımda ise yerel bilgisayarınızda çalışan projeyi internet üzerinden erişilebilir hale getirirsiniz.

Bu beş aşama — **planlama, HTML, CSS, JavaScript ve yayımlama** — web geliştirmenin temel çalışma döngüsünü oluşturur. Daha ileri seviyede projeler çok daha karmaşık hale gelse de bu temel süreç değişmez. Bu nedenle modülü sırayla tamamlamak, sonraki MDN konularına geçmeden önce sağlam bir başlangıç sağlar.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Your first website”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website) modül giriş sayfasının bölüm yapısı ve öğrenme akışı temel alınarak hazırlanmış Türkçe bir çalışma rehberidir.

### Modüldeki eğitimler

1. [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like)
2. [Creating the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
3. [Styling the content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
4. [Adding interactivity](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
5. [Publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)
