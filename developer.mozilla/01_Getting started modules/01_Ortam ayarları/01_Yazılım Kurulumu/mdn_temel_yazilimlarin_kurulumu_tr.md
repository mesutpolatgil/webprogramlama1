# Temel yazılımların kurulumu

> **Kaynak:** [MDN Web Docs — Installing basic software](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)  
> **Çeviri:** İngilizce MDN içeriğinin Türkçe çevirisidir.  
> **Son kaynak güncellemesi:** 8 Temmuz 2026

Bu makalede, basit web geliştirme çalışmaları yapmak için hangi yazılımlara ihtiyacınız olduğunu ve şu anda neleri kurmanız gerektiğini ele alıyoruz. Bunlara bir kod düzenleyici ve birkaç modern web tarayıcısı da dahildir.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemini (OS) temel düzeyde kullanabiliyor olmak. |
| **Öğrenme çıktıları:** | • Başlamak için hangi yazılımlara ihtiyacınız olduğunu anlamak.<br>• Bir kod düzenleyici, birkaç modern tarayıcı ve yerel bir test sunucusu kurmak.<br>• Yaygın olarak kullanılan diğer uygulama türleri için seçenekleri keşfetmek. |

## Bu makalede

- [Kod düzenleyiciler](#kod-düzenleyiciler)
- [Modern web tarayıcıları](#modern-web-tarayıcıları)
- [Yerel web sunucuları](#yerel-web-sunucuları)
- [Grafik düzenleyiciler](#grafik-düzenleyiciler)
- [Sürüm kontrol araçları](#sürüm-kontrol-araçları)
- [Site yayımlama uygulamaları](#site-yayımlama-uygulamaları)

## Kod düzenleyiciler

İyi bir kod düzenleyici, herhangi bir geliştiricinin bilgisayarında bulunması gereken en önemli araçlardan biridir. Kodunuzu yazdığınız yer olmasının yanı sıra, kod düzenleyiciler çok sayıda başka işlev de sunar. Bu serinin ilerleyen bölümlerinde kod düzenleyicilere ayrılmış ayrı bir makale bulunmaktadır.

Şimdilik [Visual Studio Code](https://code.visualstudio.com/) kurmanızı öneririz. Farklı platformlarda kullanılabilir, güçlü bir özellik ve destek ekosistemine sahiptir ve bizim de çoğunlukla kullandığımız düzenleyicidir. Bu makalenin geri kalanını takip edebilmek için şimdi kurmanız iyi olur.

## Modern web tarayıcıları

Modern web tarayıcılarının bilgisayarınızda bulunması web geliştirme için çok önemlidir. Böylece web sitelerinizi veya uygulamalarınızı, ziyaretçilerinizin kullanabileceği tarayıcılarda test edebilirsiniz. Ayrıca en yeni web teknolojilerini ve güvenlik düzeltmelerini desteklemeleri için tarayıcılarınızı güncel tutmanız gerekir.

En sık karşılaşacağınız tarayıcılar şunlardır:

- **Masaüstü tarayıcıları:**
  - [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) tabanlı: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Brave](https://brave.com/), [Microsoft Edge](https://www.microsoft.com/edge), [Vivaldi](https://vivaldi.com/).
  - [Gecko](https://en.wikipedia.org/wiki/Gecko_(software)) tabanlı: [Mozilla Firefox](https://www.firefox.com/).
  - [WebKit](https://en.wikipedia.org/wiki/WebKit) tabanlı: [Apple Safari](https://www.apple.com/safari/).
- **Mobil/alternatif cihaz tarayıcıları:**
  - Chromium tabanlı (Android): [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/), [Brave](https://brave.com/), [Microsoft Edge](https://www.microsoft.com/edge), [Samsung Internet](https://www.samsung.com/us/apps/samsung-internet/), [Vivaldi](https://vivaldi.com/).
  - Gecko tabanlı (Android): [Mozilla Firefox](https://www.firefox.com/).
  - WebKit tabanlı (iOS): [Apple Safari](https://www.apple.com/safari/).

> **Not:** Yukarıda listelenen Android tarayıcılarının çoğunun iOS sürümleri de vardır. Ancak Apple'ın App Store kuralları nedeniyle bu tarayıcılar geçmişte altyapıda Apple'ın WebKit motorunu kullanmak zorundaydı. Düzenleyici değişikliklerin ardından, bu metnin yazıldığı dönemde tarayıcı üreticileri kendi işleme motorlarını kullanan iOS sürümleri geliştirmeye başlamıştır.

Modern tarayıcıların çoğu güncellemeleri otomatik olarak yükler ve değişiklikleri yeniden başlatıldıklarında uygular. Güncellemeleri genellikle tarayıcının **Hakkında (About)** sayfasından kontrol edebilirsiniz. Bu seçenek tarayıcıya ve işletim sistemine göre biraz farklı yerlerde bulunur. Örneğin:

- **Firefox:** macOS'ta `Firefox > Firefox Hakkında`; Windows'ta `menü simgesi > Yardım > Firefox Hakkında`.
- **Chrome:** macOS'ta `Chrome > Google Chrome Hakkında`; Windows'ta `menü simgesi > Yardım > Google Chrome Hakkında`.

### Hangi tarayıcıları kurmalısınız?

Şimdilik kodunuzu test etmek için birkaç masaüstü ve mobil/alternatif cihaz tarayıcısı kurmalısınız. En az iki farklı işleme motoruna dayanan tarayıcılar seçin (örneğin Chromium ve Gecko). Böylece aynı işleme motorunu kullanan birden fazla tarayıcıda test yapmakla yetinmezsiniz. Bu önemlidir; çünkü kodunuz yalnızca belirli bir işleme motorunu etkileyen hatalar içerebilir.

WebKit tabanlı tarayıcılar Windows, Linux ve Android işletim sistemlerinde kullanılamaz. Kodunuzu üç büyük işleme motorunun tamamında test etmek istiyorsanız ve bilgisayarınız Windows kullanıyorsa macOS veya iOS tabanlı bir test cihazına erişmeniz ya da sanal makine veya test platformu gibi yazılımsal bir çözüm kullanmanız gerekir.

Bu aşamada kapsamlı testler konusunda endişelenmenize gerek yoktur. Kodunuzu farklı işleme motorlarında test etmeniz gerektiğini bilmeniz ve bu konuda biraz pratik yapmanız şimdilik yeterlidir.

Test stratejilerini ilerleyen aşamalarda MDN'nin **Testing** modülünde daha ayrıntılı inceleyeceksiniz.

## Yerel web sunucuları

Normalde bir web sitesini yüklemek için tarayıcıya bir web adresi yazdığınızda, tarayıcınızın siteyi görüntülemek için bir araya getirdiği dosyalar dünyanın başka bir yerindeki bir sunucu bilgisayarda barındırılan uzak web sunucusundan alınır. Bunun nasıl çalıştığını serinin bir sonraki makalesinde daha ayrıntılı öğreneceksiniz.

Bir web sitesini yerel olarak, yani kendi bilgisayarınızda geliştirirken ana HTML `index` dosyasını çoğu zaman doğrudan tarayıcıda açıp test edebilirsiniz. Ancak bazı örneklerin düzgün çalışması için bilgisayarınıza kurulmuş yerel bir web sunucusu üzerinden çalıştırılması gerekir.

### Yerel bir web sunucusu kurmak

Yerel bir sunucu kullanmanın en kolay yollarından biri bir kod düzenleyici uzantısından yararlanmaktır. Böylece sunucu doğrudan kod düzenleyicinizin içinde kullanılabilir. Visual Studio Code'da şu adımları izleyin:

1. `View > Extensions` menü seçeneğini kullanarak **Extensions** panelini açın.
2. Panelin üst kısmındaki **Search...** kutusuna `live preview` yazın. İlk sonuç Microsoft tarafından geliştirilen [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) uzantısı olmalıdır.
3. Uzantıyla ilgili bilgilerin ve kullanım açıklamalarının bulunduğu sayfayı açmak için sonuca tıklayın.
4. Uzantıyı kurmak için **Install** düğmesine basın.
5. Artık düzenleyicide bir HTML dosyası üzerinde çalışırken **Show Preview** düğmesine tıklayarak canlı örneği ayrı bir sekmede açabilmelisiniz.

Yukarıdaki seçenek basittir ancak çok esnek değildir. İleride, örnekleri bilgisayarınızda bulunan herhangi bir tarayıcıda açabilecek daha esnek bir yerel sunucu çözümü kullanmak isteyebilirsiniz. Diğer seçenekler ve yerel sunucuların neden gerekli olduğu hakkında daha fazla bilgi için MDN'deki [Yerel test sunucusu nasıl kurulur?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) içeriğine bakabilirsiniz.

## Grafik düzenleyiciler

Web geliştiricilerinin, oluşturdukları web sitelerinde kullanmak üzere görsel dosyalarını düzenlemeleri sıkça gerekir. Bu bazen grafik varlıklarının tasarlanması veya oluşturulması anlamına gelir. Ancak grafikler çoğu zaman bir grafik tasarımcı tarafından da sağlanabilir. Bu kişi ekip arkadaşınız veya üçüncü taraf biri olabilir. Böyle durumlarda web geliştiricisinin aldığı dosyaları kırpması veya yeniden boyutlandırması gerekebilir.

MDN'deki öğrenme makalelerinin hiçbiri kendi grafiklerinizi sıfırdan oluşturmanızı gerektirmez; ancak bazıları sağlanan dosyalar üzerinde düzenleme yapmanızı isteyebilir.

Öğrenme sürecinizin ilerleyen aşamalarında gerçekten ihtiyaç duyana kadar bir grafik düzenleyici kurmamanızı öneririz. Size gerçekten değer katacağını düşünmüyorsanız pahalı bir ticari ürüne para harcamayın.

Şimdilik büyük olasılıkla yeterli olacak çok sayıda ücretsiz yazılım ve çevrimiçi hizmet vardır. Örneğin:

- macOS, [Preview](https://support.apple.com/guide/preview/welcome/mac) adlı bir araçla birlikte gelir. Temel olarak görselleri ve PDF'leri görüntülemek için kullanılsa da yeniden boyutlandırma, döndürme, kırpma, açıklama ekleme ve farklı dosya türleri arasında dönüştürme gibi kullanışlı görsel düzenleme özellikleri de sunar.
- Windows'un yerleşik [Photos](https://support.microsoft.com/windows/photos) uygulaması da benzer birçok özellik içerir.
- [TinyPNG](https://tinypng.com/) sitesi PNG, JPEG ve başka görsel türlerini sıkıştırmanıza olanak tanıyan ücretsiz bir hizmet sunar. Bir web sitesinde kullanılacak görselleri hazırlarken bu işlemle sıkça karşılaşırsınız.

Ticari seçenekler arasında [Adobe Photoshop](https://www.adobe.com/products/photoshop.html), özellikle fotoğraf düzenleme alanında uzun süredir sektör standardı olarak kabul edilir. [Sketch](https://www.sketch.com/) gibi programlar ise simge ve kullanıcı arayüzü çalışmalarına daha uygundur. [Figma](https://www.figma.com/), [Affinity](https://www.affinity.studio/) ve [Canva](https://www.canva.com/) gibi yaygın seçenekler de bulunmaktadır.

Yukarıdaki uygulamaların çoğunda deneme sürümleri veya ücretsiz kullanım seçenekleri vardır ve bunları incelemeye değer. Ayrıca [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) ve [Paint.NET](https://www.getpaint.net/) gibi iyi bilinen ücretsiz uygulamalar da vardır.

## Sürüm kontrol araçları

Sürüm kontrol araçları; geliştiricilerin sunuculardaki dosyaları yönetmesine, bir ekip olarak proje üzerinde birlikte çalışmasına, kod ve diğer varlıkları paylaşmasına ve düzenleme çakışmalarını önlemesine yardımcı olur. Günümüzde [Git](https://git-scm.com/), [GitHub](https://github.com/) ve [GitLab](https://about.gitlab.com/) gibi barındırma hizmetleriyle birlikte en yaygın kullanılan sürüm kontrol sistemidir.

Sürüm kontrol araçları web geliştirme ekipleri için vazgeçilmez olsa da şu anda bunlarla ilgilenmeniz şart değildir. MDN'nin Core modülleri serisinin sonlarına doğru **Sürüm kontrolü (Version control)** konusuna ayrılmış özel bir modül bulunmaktadır.

## Site yayımlama uygulamaları

Bir web sitesi veya uygulama geliştirmeyi bitirdikten sonra — ister kendi bilgisayarınızda ister bir geliştirme sunucusunda çalışmış olun — kullanıcıların ilgili web adresini yazarak sitenizi internet üzerinden görüntüleyebilmesi için onu uzak bir web sunucusuna aktarmak istersiniz.

Bunu yapmanın farklı yolları vardır. Bir barındırma hizmeti satın alıp bir SFTP uygulaması kullanabilir, [GitHub Pages](https://pages.github.com/) veya [Netlify](https://www.netlify.com/) gibi bir hizmetten yararlanabilir ya da başkalarıyla paylaşmak üzere [CodePen](https://codepen.io/) veya [JSFiddle](https://jsfiddle.net/) üzerinde hızlı bir demo hazırlayabilirsiniz.

Bu kadar çok seçenek ilk bakışta bunaltıcı görünebilir, ancak endişelenmeyin. Şu anda web sitelerini yayımlama hakkında bilgi sahibi olmanız gerekmiyor. Kursun ilerleyen bölümlerinde bu konuya birçok kez geri döneceğiz. Kısa süre içinde MDN'nin **İlk web siteniz (Your first website)** modülünde bununla ilgili uygulamalı deneyim kazanacaksınız.

---

## Kaynak ve lisans

Bu dosya, Mozilla Contributors tarafından hazırlanan [“Installing basic software”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software) başlıklı MDN Web Docs makalesinin Türkçe çevirisidir.

MDN dokümantasyon içeriği, aksi belirtilmedikçe **Creative Commons Attribution-ShareAlike (CC BY-SA) 2.5 veya sonraki sürümleri** kapsamında yayımlanır. Bu çeviri, özgün içeriğin Türkçeye çevrilmiş ve Markdown biçimine uyarlanmış bir türevidir.

- MDN lisans ve atıf bilgileri: https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license
- CC BY-SA 2.5: https://creativecommons.org/licenses/by-sa/2.5/
