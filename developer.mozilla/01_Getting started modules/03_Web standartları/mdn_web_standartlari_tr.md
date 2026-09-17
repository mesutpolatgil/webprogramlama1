# Web Standartları

> **Kaynak:** [MDN Web Docs — Web standards](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm yapısını ve öğrenme akışını koruyan Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 11 Nisan 2025

Bu modül, web'in yüksek seviyede nasıl çalıştığını anlamak için gerekli temel kavramları ele alır. Web tarayıcısı ile sunucu arasındaki iletişim modeli, web'in temel teknolojileri, bu teknolojilerin nasıl standartlaştırıldığı ve tarayıcıların bir web sitesini kullanıcıya nasıl gösterdiği bu modülün ana konularıdır.

## Genel kaynak

Web tasarımının ve web standartlarının tarihsel gelişimine daha geniş bir perspektiften bakmak isterseniz:

- [Resilient Web Design — Jeremy Keith](https://resilientwebdesign.com/)

## Bu makalede

- [Ön koşullar](#ön-koşullar)
- [Eğitimler](#eğitimler)
- [Özet](#özet)

## Ön koşullar

Bu modül büyük ölçüde teoriktir ve belirli bir web teknolojisinde ileri düzey pratik bilgi gerektirmez.

Ancak HTML, CSS ve JavaScript'in genel olarak ne işe yaradığını biliyorsanız konuları anlamanız daha kolay olacaktır.

Henüz temel bir web sitesi oluşturmadıysanız önce şu modülü tamamlamanız önerilir:

- [İlk web siteniz](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

Bu modülü tamamladıktan sonra:

- HTML'in sayfa yapısını oluşturduğunu,
- CSS'in görünümü ve düzeni kontrol ettiğini,
- JavaScript'in davranış ve etkileşim eklediğini,
- Bir web sitesinin nasıl yayımlandığını

temel düzeyde biliyor olmanız beklenir.

## Eğitimler

Bu modül üç ana eğitimden oluşur.

### 1. Web nasıl çalışır?

**Kaynak:** [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)

Bu bölüm, bir web tarayıcısına adres yazıp bir sayfaya gittiğinizde arka planda neler olduğunu yüksek seviyede açıklar.

Genel olarak şu süreci ele alır:

```text
Kullanıcı bir web adresi açar
          ↓
Tarayıcı gerekli sunucuyu bulur
          ↓
Sunucuya istek gönderilir
          ↓
HTML, CSS, JavaScript ve diğer dosyalar gelir
          ↓
Tarayıcı dosyaları işler
          ↓
Web sayfası kullanıcıya gösterilir
```

Bu bölümde özellikle şu kavramlarla karşılaşırsınız:

- İstemci ve sunucu,
- İnternet bağlantısı,
- DNS,
- HTTP,
- Web sitesi dosyalarının istemciye ulaştırılması.

Amaç bütün ağ ayrıntılarını öğrenmek değil, bir web sayfasının tarayıcıya ulaşmasını sağlayan genel mekanizmayı anlamaktır.

### 2. Web standartları modeli

**Kaynak:** [The web standards model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)

Bu bölüm web'in neden ortak standartlara ihtiyaç duyduğunu ve HTML, CSS, JavaScript gibi temel teknolojilerin nasıl birlikte çalıştığını açıklar.

Web'in temel avantajlarından biri, tek bir şirketin kontrolünde olan kapalı bir platform olmamasıdır.

Farklı:

- Tarayıcı üreticileri,
- İşletim sistemleri,
- Cihazlar,
- Geliştiriciler

aynı web içeriğini kullanabildiği için ortak kurallara ihtiyaç vardır.

Web standartları bu ortak kuralları tanımlar.

Bu bölümde genel olarak:

- Web'in tarihsel gelişimi,
- Açık standartların önemi,
- HTML,
- CSS,
- JavaScript,
- Web API'leri,
- Standartların oluşturulma süreci

gibi konular ele alınır.

Basitleştirilmiş olarak:

```text
HTML        → İçerik ve yapı
CSS         → Görünüm ve düzen
JavaScript  → Davranış ve etkileşim
Web API'leri → Tarayıcının ek özellikleri
```

Bu teknolojilerin ortak standartlara dayanması sayesinde aynı web sitesi farklı modern tarayıcılarda benzer biçimde çalışabilir.

### 3. Tarayıcılar web sitelerini nasıl yükler?

**Kaynak:** [How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)

Bir önceki bölüm ağ üzerinden dosyaların tarayıcıya nasıl ulaştığını anlatırken bu bölüm, dosyalar geldikten sonra tarayıcının bunlarla ne yaptığını ele alır.

Tarayıcıya bir web sitesinin:

- HTML dosyası,
- CSS dosyaları,
- JavaScript dosyaları,
- Görseller,
- Yazı tipleri,
- Diğer medya kaynakları

ulaştığında tarayıcı bunları işleyerek kullanıcının gördüğü son sayfayı oluşturur.

Genel süreç şu şekilde düşünülebilir:

```text
HTML alınır
   ↓
Belge yapısı oluşturulur
   ↓
CSS alınır ve işlenir
   ↓
Sayfanın görünümü hesaplanır
   ↓
JavaScript çalıştırılır
   ↓
Sayfanın düzeni hesaplanır
   ↓
Pikseller ekrana çizilir
```

Gerçekte bu süreç daha karmaşıktır ve birçok aşama paralel veya tekrar tekrar gerçekleşebilir.

Bu bölümün amacı tarayıcıların:

- HTML'i ayrıştırma,
- CSS'i uygulama,
- JavaScript'i çalıştırma,
- Sayfa düzenini hesaplama,
- İçeriği ekrana çizme

gibi görevleri nasıl bir araya getirdiğini yüksek seviyede anlamanızı sağlamaktır.

## Modülün genel akışı

Üç eğitim birlikte web'in temel çalışma modelini oluşturur:

```text
1. Web nasıl çalışır?
   Tarayıcı ile sunucu arasındaki iletişimi öğrenirsiniz.
                    ↓
2. Web standartları modeli
   Kullanılan teknolojilerin ve standartların neden var olduğunu öğrenirsiniz.
                    ↓
3. Tarayıcılar web sitelerini nasıl yükler?
   Gelen dosyaların ekrandaki web sayfasına nasıl dönüştüğünü öğrenirsiniz.
```

Başka bir ifadeyle:

```text
Ağ
 ↓
Web standartları ve teknolojileri
 ↓
Tarayıcı
 ↓
Kullanıcının gördüğü sayfa
```

Bu modülü tamamladıktan sonra web geliştirme sırasında kullandığınız HTML, CSS ve JavaScript'in yalnızca ayrı ayrı diller olmadığını; daha büyük bir istemci–sunucu ve tarayıcı sistemi içinde çalışan teknolojiler olduğunu daha iyi anlayabilirsiniz.

## Özet

**Web Standartları** modülü, web geliştirme sırasında kullandığınız teknolojilerin arka plandaki çalışma modelini anlamanızı sağlar. Önceki modüllerde HTML, CSS ve JavaScript kullanarak bir web sitesi oluşturmuş olabilirsiniz; burada ise bu teknolojilerin internet ve tarayıcı altyapısı içinde nasıl bir araya geldiğine odaklanılır.

İlk eğitimde bir web adresi açıldığında tarayıcı ile web sunucusu arasında gerçekleşen temel iletişim süreci incelenir. DNS, HTTP ve istemci–sunucu modeli gibi kavramlar sayesinde web sayfasının dosyalarının bilgisayarınıza nasıl ulaştığı konusunda genel bir anlayış kazanırsınız.

İkinci eğitim web standartlarının neden gerekli olduğunu açıklar. HTML, CSS, JavaScript ve Web API'leri gibi teknolojilerin açık ve ortak standartlara dayanması, web sitelerinin farklı tarayıcılarda ve cihazlarda çalışabilmesini mümkün kılar. Bu standartlar web'in birlikte çalışabilir ve açık bir platform olarak kalmasında önemli rol oynar.

Son eğitimde ise tarayıcıya ulaşan HTML, CSS, JavaScript ve medya dosyalarının nasıl işlenerek ekranda görülen sayfaya dönüştürüldüğü ele alınır. Böylece ağ isteğinden başlayıp kullanıcının gördüğü son web sayfasına kadar olan sürecin genel resmini öğrenmiş olursunuz.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Web standards”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards) modül giriş sayfasının konu sırası ve öğrenme akışı temel alınarak hazırlanmış Türkçe bir çalışma rehberidir.

### Modüldeki eğitimler

1. [How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
2. [The web standards model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)
3. [How browsers load websites](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites)

### Genel kaynak

- [Resilient Web Design — Jeremy Keith](https://resilientwebdesign.com/)
