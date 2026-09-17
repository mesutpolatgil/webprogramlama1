# Web'de Gezinme

> **Kaynak:** [MDN Web Docs — Browsing the web](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm yapısını, örneklerini, görsellerini ve alıştırma akışını koruyan ayrıntılı Türkçe uyarlamadır.  
> **Kaynak sayfanın son güncellenme tarihi:** 15 Mayıs 2026

Bu noktaya geldiğinizde bilgisayarınızda veya kullanabildiğiniz diğer cihazlarda birden fazla modern web tarayıcısının kurulu olması beklenir. Bu bölümde tarayıcıların temel çalışma biçimini, web'de sık karşılaşılan bazı kavramların birbirinden nasıl ayrıldığını ve internette nasıl daha verimli bilgi aranacağını inceleyeceğiz.

> **Not:** Cihazınızla birlikte gelen varsayılan tarayıcının dışında başka bir tarayıcı kurmadıysanız birkaç alternatif modern tarayıcı daha kurmanız yararlı olacaktır.

Web geliştirme alanında çok sayıda teknik terim vardır. Bunların tamamını başlangıçta öğrenmeniz gerekmez. Ancak aşağıdaki kavramlar sürekli karşınıza çıkacağı için aralarındaki farkları erkenden öğrenmek işinizi kolaylaştırır.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemini temel düzeyde kullanabiliyor olmak. |
| **Öğrenme çıktıları:** | • Web tarayıcısı, web sitesi ve arama motoru arasındaki farkı anlamak.<br>• Bir web tarayıcısının temel düzeyde nasıl çalıştığını kavramak.<br>• İnternette etkili biçimde bilgi aramak. |

## Bu makalede

- [Web sayfası, web sitesi, web sunucusu ve arama motoru arasındaki fark](#web-sayfası-web-sitesi-web-sunucusu-ve-arama-motoru-arasındaki-fark)
- [Web nasıl çalışır: temel bilgiler](#web-nasıl-çalışır-temel-bilgiler)
- [Bilgi arama](#bilgi-arama)

## Web sayfası, web sitesi, web sunucusu ve arama motoru arasındaki fark

Başlangıç seviyesindeki geliştiriciler **web sayfası**, **web sitesi**, **web sunucusu** ve **arama motoru** kavramlarını zaman zaman birbirinin yerine kullanabilir. Oysa bunlar farklı şeyleri ifade eder.

**Web sayfası (web page)**  
Bir web tarayıcısında görüntülenebilen belgedir. Web sayfaları temelde HTML kullanılarak oluşturulur.

**Web sitesi (website)**  
Aynı kaynak altında bir araya getirilmiş, çoğunlukla bağlantılarla birbirine bağlanan web sayfalarının bütünüdür.

**Web sunucusu (web server)**  
Bir web sitesine ait dosyaları internette barındıran ve tarayıcılardan gelen isteklere bu dosyaları göndererek yanıt veren bilgisayar veya sistemdir.

**Web hizmeti (web service)**  
İnternet üzerinden gelen bir isteği işleyip veri veya belirli bir işlev sunan yazılımdır. Örneğin görsel boyutlandırma, hava durumu bilgisi sağlama veya kullanıcı girişi işleme gibi görevler bir web hizmeti tarafından yapılabilir.

**Arama motoru (search engine)**  
Web üzerindeki sayfaları ve içerikleri bulmanıza yardımcı olan çevrimiçi hizmettir. Google, Bing ve DuckDuckGo bunun bilinen örnekleridir.

### Kütüphane benzetmesi

Bu kavramları bir halk kütüphanesi üzerinden düşünmek yararlı olabilir.

Bir kütüphaneye gittiğinizde genellikle:

1. Arama sisteminden istediğiniz kitabı bulursunuz.
2. Kitabın katalog numarasını öğrenirsiniz.
3. İlgili bölüme giderek bu numarayı kullanıp kitabı bulursunuz.

Bunu web ile karşılaştırırsak:

- **Kütüphane**, bir **web sunucusuna** benzetilebilir.
- Kütüphanedeki bilim, tarih veya matematik gibi **bölümler**, farklı **web sitelerini** temsil edebilir.
- Raflardaki **kitaplar**, tek tek **web sayfaları** gibidir.
- Kitapların nerede bulunduğunu gösteren **arama dizini**, bir **arama motoruna** benzer.

Şimdi bu kavramları biraz daha ayrıntılı inceleyelim.

### Web sayfası

Bir web sayfası, tarayıcının görüntüleyebildiği HTML tabanlı bir belgedir. Sayfanın içinde veya sayfayla birlikte farklı türlerde kaynaklar kullanılabilir:

- Görünümü belirleyen **stil bilgileri**,
- Etkileşim sağlayan **betikler (scripts)**,
- **Görseller, sesler ve videolar** gibi medya dosyaları.

> **Not:** Tarayıcılar PDF, görsel veya video gibi başka dosya türlerini de görüntüleyebilir. Ancak **web sayfası** ifadesi özellikle HTML belgeleri için kullanılır.

Her web sayfasının kendine özgü bir konumu vardır. Bu konum web adresi veya **URL** olarak adlandırılır. Bir sayfaya ulaşmanın en doğrudan yolu adresini tarayıcının adres çubuğuna yazmaktır.

![Tarayıcı adres çubuğunda bir web sayfası adresi örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/web-page.jpg)

> **Deneyin:** Sevdiğiniz web sitelerinden birini tarayıcıda açın. Siteye ulaşırken adresi doğrudan adres çubuğuna mı yazdınız, yoksa önce bir arama motorunda arama yapıp sonucu mu açtınız?

### Web sitesi

Bir web sitesi; aynı alan adı altında bulunan, birbiriyle ilişkili web sayfaları ve bunlara ait kaynaklardan oluşur. Kullanıcılar genellikle bağlantılara ve menülere tıklayarak sitenin farklı sayfaları arasında dolaşır.

Bir siteyi ilk açtığınızda çoğu zaman sitenin **ana sayfası (homepage)** görüntülenir.

![Tarayıcı adres çubuğunda web sitesi alan adı örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/web-site.jpg)

> **Deneyin:** Bir web sitesinin menülerindeki veya sayfa içindeki birkaç bağlantıya tıklayın. Sayfalar arasında ilerledikçe tarayıcının adres çubuğundaki URL'nin nasıl değiştiğini gözlemleyin.

> **Not:** Bazı siteler **tek sayfalı uygulama (single-page application / SPA)** şeklinde çalışır. Bu tür uygulamalarda yeni içerik aynı HTML sayfası üzerinde dinamik biçimde gösterilebilir. Bu nedenle ekranda farklı içeriklere geçseniz bile web adresi hiç değişmeyebilir veya yalnızca kısmen değişebilir.

### Web sunucusu

Web sunucusu, bir veya daha fazla web sitesine ait dosyaları barındıran sistemdir. Bir kullanıcı tarayıcısından belirli bir sayfayı istediğinde sunucu ilgili dosyaları tarayıcıya gönderir.

**Web sitesi** ile **web sunucusu** aynı şey değildir.

Örneğin “web sitem yanıt vermiyor” denildiğinde sorun sitenin barındırıldığı sunucunun yanıt vermemesi olabilir. Ayrıca tek bir sunucu aynı anda birden fazla site veya uygulama barındırabileceği için sunucudaki bir problem birden fazla hizmeti etkileyebilir.

### Arama motoru

Arama motoru, kullanıcıların internetteki web sayfalarını ve görsel, video veya haber gibi içerikleri bulmasını sağlayan özel bir web hizmetidir.

Bir arama motorunun kendi web sitesi olabilir; fakat **arama motoru** ile **web sitesi** aynı kavram değildir.

Başlangıç seviyesinde sık karşılaşılan bir başka karışıklık da **tarayıcı** ile **arama motoru** arasındadır:

- **Tarayıcı**, web sayfalarını indirip ekranda gösteren yazılımdır.
- **Arama motoru**, başka web sitelerindeki sayfaları bulmanıza yardımcı olan çevrimiçi hizmettir.

Bu iki kavramın karıştırılmasının bir nedeni, tarayıcıların açılış sayfalarında çoğunlukla bir arama kutusu göstermesi ve adres çubuğundan doğrudan arama yapılmasına izin vermesidir.

![Firefox içinde varsayılan arama sayfası örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/search-engine.jpg)

> **Deneyin:** Bir konu hakkında iki farklı şekilde arama yapın:
>
> 1. Önce bir arama motorunun web sitesini açıp arama kutusunu kullanın.
> 2. Aynı arama terimini doğrudan tarayıcının adres çubuğuna yazın.
>
> İki yöntemin de sizi benzer arama sonuçlarına götürdüğünü gözlemleyin.

## Web nasıl çalışır: temel bilgiler

Bir web adresini yazıp `Enter` tuşuna bastığınız an ile sayfanın ekranda görünmesi arasında arka planda birçok işlem gerçekleşir.

Basitleştirilmiş olarak süreç şöyledir:

1. **Tarayıcı bir kaynak ister.**  
   Bu kaynak HTML sayfası, veri, görsel, video veya başka bir dosya olabilir. Tarayıcı bu isteği ilgili web sunucusuna gönderir. İstek ve yanıt alışverişinde genellikle **HTTP (Hypertext Transfer Protocol)** kullanılır.

2. **Sunucu yanıt verir.**  
   İstek başarılıysa sunucu istenen kaynağı içeren bir HTTP yanıtı gönderir.

3. **Yeni kaynaklar için ek istekler yapılabilir.**  
   Örneğin sitenin ana HTML dosyası indirildiğinde tarayıcı dosyayı inceler. HTML içinde CSS dosyaları, JavaScript betikleri veya görseller bulunuyorsa bunların her biri için yeni istekler gönderilebilir.

4. **Tarayıcı sonuçları işler ve ekrana çizer.**  
   Gerekli kaynaklar geldikten sonra tarayıcı bunları ayrıştırır, bir araya getirir ve kullanıcıya görünen web sayfasını oluşturur.

Bu açıklama bilinçli olarak sadeleştirilmiştir. Web geliştirmeyi ilerlettikçe DNS, HTTP, HTML ayrıştırma, CSS oluşturma, JavaScript yürütme ve tarayıcının render süreci gibi ayrıntıları ayrıca öğreneceksiniz.

## Bilgi arama

Bir web geliştiricisi olarak çalışma sürenizin önemli bir kısmı bilgi aramakla geçecektir. Bir sözdizimini unutabilir, belirli bir API'nin nasıl kullanıldığını hatırlamayabilir veya kodunuzdaki bir hatayı çözmek isteyebilirsiniz.

Bu nedenle doğru kaynağı bulma ve etkili arama yapma becerisi, kod yazma becerisi kadar önemlidir.

Belirli bir teknolojiyle ilgili genel bilgi arıyorsanız önce o teknoloji için güvenilir bir dokümantasyon kaynağına bakabilirsiniz. Web platformu özellikleri için MDN buna iyi bir örnektir.

Örneğin aşağıdaki türden terimleri doğrudan MDN'de arayabilirsiniz:

- `box model`
- `fetch()`
- `video element`

Aradığınız cevabı bulamazsanız daha genel bir arama motoruna geçebilirsiniz.

Belirli bir programlama probleminin çözümünü arıyorsanız geliştirici toplulukları da yararlı olabilir. Örneğin programlama hataları ve çözüm yaklaşımları için [Stack Overflow](https://stackoverflow.com/) üzerinde çok sayıda tartışma bulunur.

> **Deneyin:** Öğrenmek istediğiniz birkaç konuyu farklı arama ifadeleriyle arayın. Önce çok genel, ardından daha ayrıntılı ifadeler kullanın ve sonuçların nasıl değiştiğini inceleyin.

### Yapay zekâ kullanımı

Yapay zekâ tabanlı araçlar, geleneksel aramaya ek olarak bilgi bulmak ve programlama konusunda yardım almak için kullanılabilir. ChatGPT, Google Gemini ve Microsoft Copilot buna örnek olarak verilebilir.

Kodlama öğrenirken yapay zekâdan şu tür görevlerde yararlanabilirsiniz:

- Bir kavram hakkında hızlı açıklama istemek,
- Bir kod parçasındaki olası hataları inceletmek,
- Çalışan bir kod için daha okunabilir veya daha sağlam bir yaklaşım istemek,
- Bir problemi nasıl hata ayıklayabileceğiniz konusunda yöntem önermesini istemek,
- Bir konuyla ilgili araştırmaya nereden başlayabileceğinizi öğrenmek.

> **Deneyin:** Aynı teknik soruyu iki farklı yapay zekâ aracına sorun. Yanıtların benzerliklerini ve farklılıklarını karşılaştırın ve mümkünse önemli noktaları resmi dokümantasyonla doğrulayın.

### Dikkat edilmesi gerekenler

Yapay zekâ araçlarının güçlü olması, programlamayı öğrenmenin gereksiz olduğu anlamına gelmez. Üretilen kodu kullanabilmek için problemin ne olduğunu, kodun ne yaptığını ve kodun uygulamanın hangi bölümünde kullanılacağını anlayabilmeniz gerekir.

AI yanıtlarında özellikle şu riskleri göz önünde bulundurun:

- Bir cevap çok kendinden emin görünse bile **yanlış olabilir**.
- Hata çok küçük veya fark edilmesi zor olabilir.
- Model, güncelliğini kaybetmiş örneklere dayanabilir.
- Farklı kaynaklardan alınan doğru bilgiler yanlış bir biçimde bir araya getirilebilir.
- Yeni API'ler veya yeni önerilen yöntemler hakkında eksik bilgi sunabilir.

Bu nedenle önemli teknik bilgileri mümkün olduğunca MDN, standart belgeleri, resmi kütüphane dokümantasyonları veya güvenilir geliştirici kaynaklarından kontrol edin.

Öğrenme sürecinde bir probleme rastladığınızda cevabı hemen aramak yerine önce kendiniz çözmeye çalışmanız da yararlıdır. Bu yaklaşım problem çözme becerinizi geliştirir.

### Arama ipuçları

Daha yararlı sonuçlara ulaşmak için şu yöntemleri kullanabilirsiniz:

- Arama ifadenize kullandığınız **programlama dilini** ekleyin.  
  Örneğin yalnızca `fibonacci sequence` yerine `fibonacci sequence JavaScript` araması yapmak sonuçları daraltır.

- Faydalı bulduğunuz sayfaları **yer imlerine ekleyin** veya not alın. Aynı probleme daha sonra yeniden rastlayabilirsiniz.

- Belirli bir hata mesajı alıyorsanız mesajın ayırt edici kısmını doğrudan arama motorunda veya yapay zekâ aracında aratın.

- Mümkün olduğunda **MDN**, resmi belgeler ve güvenilir geliştirici topluluklarını tercih edin.

- Arama motorlarının gelişmiş operatörlerinden yararlanın. Örneğin:

  ```text
  "ant fish cheese"
  ```

  Tam ifadeyi aramaya yardımcı olur.

  ```text
  ant cheese -fish
  ```

  `fish` kelimesini sonuçlardan çıkarmaya yardımcı olabilir.

  ```text
  ant OR cheese
  ```

  Alternatif terimler arasında arama yapmak için kullanılabilir.

  ```text
  intitle:cheese
  ```

  Sayfa başlığında belirli bir kelimenin bulunduğu sonuçları bulmak için kullanılabilir.

> **Not:** Arama operatörlerinin desteklenme biçimi arama motoruna göre değişebilir. Kullandığınız arama motorunun gelişmiş arama dokümantasyonuna bakmanız faydalı olacaktır.

## Özet

Bu bölümde web üzerinde gezinirken sürekli karşılaşacağınız temel kavramları birbirinden ayırdık. **Web sayfası**, tarayıcıda açılan tek bir HTML belgesidir; **web sitesi**, bağlantılı sayfaların ve kaynakların oluşturduğu bütündür; **web sunucusu**, bu dosyaları barındırıp tarayıcıların isteklerine yanıt veren sistemdir. **Arama motoru** ise internet üzerindeki içerikleri bulmaya yarayan bir web hizmetidir ve web tarayıcısıyla aynı şey değildir.

Bir web sayfası açılırken tarayıcı ve sunucu arasında HTTP üzerinden bir dizi istek ve yanıt gerçekleşir. İlk HTML belgesi geldikten sonra tarayıcı CSS, JavaScript, görsel ve benzeri ek kaynakları isteyebilir. Kaynakların işlenmesinin ardından sayfa ekranda oluşturulur.

Web geliştirme sırasında bilgi aramak günlük çalışmanın doğal bir parçasıdır. Bu nedenle doğru arama terimleri kullanmak, hata mesajlarını araştırmak, güvenilir dokümantasyonları tercih etmek ve yararlı kaynakları kaydetmek önemlidir. Yapay zekâ araçları araştırma ve hata ayıklama süreçlerini hızlandırabilir; ancak verdikleri cevapların doğruluğu garanti değildir. En iyi yaklaşım, AI'ı yardımcı bir araç olarak kullanmak, temel kavramları kendiniz öğrenmek ve kritik bilgileri güvenilir kaynaklardan doğrulamaktır.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Browsing the web”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web) makalesinin bölüm yapısı ve eğitim hedefleri temel alınarak hazırlanmış Türkçe bir uyarlamadır.

Görseller MDN kaynak sayfasındaki özgün görsellerdir:

- [web-page.jpg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/web-page.jpg)
- [web-site.jpg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/web-site.jpg)
- [search-engine.jpg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web/search-engine.jpg)
