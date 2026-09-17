# İş Akışları ve Süreçler

> **Kaynak:** [MDN Web Docs — Workflows and processes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, öğrenme hedeflerini ve temel kavramlarını izleyen özgün Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 4 Eylül 2026

Yeni başlayan geliştiriciler çoğu zaman tek bir dili, kütüphaneyi veya aracı öğrenmeye odaklanır. Ancak gerçek bir web projesi yalnızca HTML, CSS veya JavaScript dosyalarından ibaret değildir. Bir ürünün gerçekten kullanıcıya ulaşabilmesi için çok sayıda teknoloji, araç, süreç ve iş rolü birlikte çalışır.

Bu bölümün amacı bir anda bütün bu alanlarda uzman olmanızı beklemek değildir. Amaç, profesyonel bir web projesinin **büyük resmini** görmenizi sağlamaktır.

|  |  |
| --- | --- |
| **Ön koşullar:** | Yok. |
| **Öğrenme çıktıları:** | • Web projelerinde kullanılan tipik teknoloji kombinasyonlarını tanımak.<br>• Bir web geliştirme ekibindeki yaygın iş rollerini anlamak.<br>• Teknik projelerin tipik aşamalarını ve hangi rollerin hangi aşamalarda yer aldığını görmek.<br>• Agile, Waterfall, Scrum ve Kanban gibi yaygın iş yönetimi yaklaşımlarını tanımak. |

## Bu makalede

- [Tipik teknoloji kombinasyonları](#tipik-teknoloji-kombinasyonları)
- [İş rolleri](#iş-rolleri)
- [Teknik proje aşamaları](#teknik-proje-aşamaları)
- [İş yönetimi süreçleri](#iş-yönetimi-süreçleri)
- [Proje iş akışlarını pratik etme](#proje-iş-akışlarını-pratik-etme)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Özet](#özet)

## Tipik teknoloji kombinasyonları

Bir web sitesi veya web uygulaması oluştururken genellikle tek bir teknoloji kullanılmaz.

Birlikte kullanılan teknoloji grubuna çoğu zaman:

```text
tech stack
```

yani **teknoloji yığını** denir.

Bir demo proje çok basit olabilir:

```text
HTML
+
CSS
+
JavaScript
```

Ancak üretim ortamındaki gerçek bir web sitesi daha karmaşık olabilir.

Bunun nedeni sitenin:

- Hızlı yüklenmesi,
- Çok sayıda kullanıcıyı kaldırabilmesi,
- Kullanımı kolay olması,
- Güvenli olması,
- Bir ekip tarafından bakımının yapılabilmesi

gibi ek gereksinimlere sahip olmasıdır.

### Yüksek seviyeli bir teknoloji yığını

Bir web uygulamasının teknoloji yığını şu şekilde düşünülebilir:

```text
Front-end
HTML, CSS, JavaScript
        ↓
Back-end
Node.js, .NET, PHP, Python vb.
        ↓
Veritabanı
MySQL, PostgreSQL, MongoDB vb.
        ↓
Web sunucusu / hosting
Apache, Nginx, Netlify vb.
```

Gerçek projelerde bu katmanların her biri çok daha fazla araç içerebilir.

### Popüler stack kısaltmaları

Bazı teknoloji kombinasyonları kısaltmalarla anılır.

Örneğin:

```text
MEAN
```

genellikle:

```text
MongoDB
Express
Angular
Node.js
```

anlamına gelir.

Bir başka örnek:

```text
LAMP
```

genellikle:

```text
Linux
Apache
MySQL
PHP / Python
```

gibi bir kombinasyonu ifade eder.

> **Not:** Bu tür stack isimlerini ezberlemeniz gerekmez. Ama sektör içinde karşınıza çıktıklarında bunların belirli teknoloji kombinasyonlarını ifade ettiğini bilmek yararlıdır.

## Front-end'in kendisi de birçok parçadan oluşabilir

MDN öğrenme materyallerinde ağırlık front-end geliştirmededir.

Ancak profesyonel bir front-end projesi yalnızca üç dosyadan oluşmaz.

Örneğin:

### JavaScript framework'ü

Bir proje kullanıcı arayüzünü bileşenler halinde geliştirmek için:

- React,
- Vue,
- Angular,
- Svelte

gibi bir framework veya kütüphane kullanabilir.

Örnek yaklaşım:

```text
Header
Navbar
ProductCard
CheckoutForm
Footer
```

gibi bileşenler hazırlanabilir.

### Template sistemi

Framework veya uygulama bir template sistemi kullanabilir.

Örneğin:

```text
Mustache
```

benzeri template dilleri HTML yapısını tanımlarken değişken içerik eklemeyi kolaylaştırabilir.

Basitleştirilmiş örnek:

```text
Merhaba {{ username }}
```

Buradaki `username` çalışma zamanında gerçek bir kullanıcı adıyla değiştirilebilir.

### CSS çözümü

Projenin stilleri farklı biçimlerde hazırlanabilir.

Örneğin:

```text
Saf CSS
CSS framework
CSS preprocessor
CSS-in-JS
```

yaklaşımları kullanılabilir.

Yaygın araç örnekleri:

- Tailwind CSS,
- Sass.

### Testler

JavaScript projelerinde yeni kod eklenirken mevcut işlevlerin bozulmadığını kontrol etmek için testler kullanılır.

Örneğin bir test framework'ü:

```text
Jest
```

olabilir.

Testler şu sorulara cevap vermeye çalışabilir:

```text
Bu fonksiyon doğru sonucu veriyor mu?
Bu düğmeye tıklayınca beklenen işlem oluyor mu?
Bu yeni değişiklik eski özelliği bozdu mu?
```

### Build ve paketleme araçları

Büyük projeler üretim ortamına gönderilmeden önce çeşitli işlemlerden geçebilir.

Örneğin:

- Dosyaları küçültme,
- Kullanılmayan kodu kaldırma,
- Modülleri paketleme,
- Asset'leri optimize etme.

Bu amaçla:

```text
Parcel
```

gibi build araçları kullanılabilir.

Modern projelerde buna benzer görevleri yapan başka araçlar da vardır.

## Mimari kalıplar

Web uygulamalarında zaman zaman belirli **architectural pattern (mimari kalıp)** isimleri duyabilirsiniz.

Örneğin:

```text
MVC
```

açılımı:

```text
Model
View
Controller
```

olan yaygın bir mimari yaklaşımdır.

Bir başka kalıp:

```text
publish–subscribe
```

veya:

```text
pub/sub
```

olarak adlandırılır.

Mesajlaşma ve event tabanlı sistemlerde sık görülür.

> **Not:** Bu aşamada bu mimarileri ayrıntılı öğrenmeniz gerekmez. Yeni bir framework veya projeyi incelerken bu terimlerle karşılaşabileceğinizi bilmeniz yeterlidir.

## Teknoloji yığını dışındaki araçlar

Projede kullanılan bazı araçlar doğrudan web uygulamasının çalıştırılan kodunun parçası değildir.

Ancak proje yönetimi ve üretim süreci açısından önemlidir.

### Planlama araçları

Örnek:

- [Miro](https://miro.com/)

Bir proje başında:

- Fikir toplama,
- Akış diyagramı hazırlama,
- Yol haritası oluşturma

gibi işler için kullanılabilir.

### Sürüm kontrol sistemleri

Kod değişikliklerini takip etmek için genellikle:

```text
Git
```

kullanılır.

Kod depoları ise örneğin:

- [GitHub](https://github.com/)
- GitLab

üzerinde tutulabilir.

### Tasarım araçları

Arayüz tasarımı ve grafik üretimi için:

- [Figma](https://www.figma.com/)
- [Canva](https://www.canva.com/)

gibi araçlar kullanılabilir.

### Proje yönetimi araçları

Görevleri takip etmek için:

- [Trello](https://trello.com/)
- [Asana](https://asana.com/)

gibi araçlar kullanılabilir.

## Her şeyi aynı anda öğrenmeniz gerekmez

Bütün bu teknoloji ve araç isimleri ilk bakışta çok fazla görünebilir.

Ancak amaç:

```text
"Bunların hepsini hemen öğrenmeliyim."
```

demek değildir.

Gerçekte bir ekipte farklı kişiler farklı alanlarda uzmanlaşır.

Örneğin:

```text
Front-end geliştirici
→ UI kodu

Back-end geliştirici
→ sunucu kodu

UX tasarımcı
→ kullanıcı deneyimi

QA
→ test
```

Bu nedenle başlangıç aşamasında:

```text
HTML
CSS
JavaScript
```

gibi temel becerileri öğrenmeye odaklanmak doğru yaklaşımdır.

Diğer uzmanlıklar kariyer ilerledikçe doğal olarak karşınıza çıkar.

# İş rolleri

Bir web geliştirme ekibinde çok farklı roller bulunabilir.

Aşağıdaki roller en yaygın örneklerdendir.

## Product manager

**Product manager (ürün yöneticisi)** ürünü genel pazar ve kullanıcı perspektifinden değerlendirir.

Şu sorularla ilgilenebilir:

```text
Ürün rakiplerine göre nasıl durumda?
Kullanıcılar hangi yeni özellikleri istiyor?
Hangi özellik en yüksek öncelikte?
Başarıyı hangi metriklerle ölçüyoruz?
Yeni özellikler hedeflerimize katkıda bulundu mu?
```

Product manager:

- Veri toplar,
- Raporlar oluşturur,
- Kullanıcı ihtiyaçlarını değerlendirir,
- Gelecekte yapılacak işleri önceliklendirir.

## Project manager

**Project manager (proje yöneticisi)** ekibin yapması gereken işlerin organize edilmesinden sorumludur.

Görevleri:

- Proje planı oluşturmak,
- İşleri önceliklendirmek,
- Son tarihleri belirlemek,
- Görevleri kişilere atamak,
- Düzenli toplantılar yapmak,
- Gecikmeleri ve engelleri takip etmek,
- Gerektiğinde planı değiştirmek.

Product manager çoğunlukla:

```text
"Ne yapmalıyız ve neden?"
```

sorusuna odaklanırken project manager:

```text
"Bunu nasıl ve ne zaman tamamlayacağız?"
```

sorusuna daha yakındır.

## User experience (UX) designer

**UX designer**, hedef kullanıcıların ihtiyaçlarını anlamaya ve ürünün kullanım deneyimini tasarlamaya çalışır.

Örnek sorular:

```text
Kullanıcı ana sayfaya geldiğinde ilk olarak nereye yönlendirilmeli?
Hesap oluşturma sürecini nasıl daha kolay yapabiliriz?
Bu kullanıcı akışı kafa karıştırıcı mı?
```

UX çalışmaları:

- Kullanıcı araştırması,
- Kullanılabilirlik testi,
- Wireframe,
- Kullanıcı akışları

gibi faaliyetleri içerebilir.

UX tasarımcıları product manager tarafından oluşturulan kullanıcı ve ürün verilerinden yararlanabilir.

## Graphic designer

**Grafik / görsel tasarımcı**, web sitesinin görsel dilinden sorumludur.

Çalışma alanları:

- Tipografi,
- Renk paleti,
- İkonlar,
- Grafik asset'ler,
- Mockup tasarımı.

UX tasarımcının wireframe'i daha çok:

```text
"Ne nerede olacak?"
```

sorusuna odaklanırken grafik tasarım:

```text
"Nasıl görünecek?"
```

sorusuna odaklanabilir.

## Front-end developer

Front-end geliştirici kullanıcıların doğrudan gördüğü ve etkileşim kurduğu arayüzü oluşturur.

Temel teknolojiler:

```text
HTML
CSS
JavaScript
```

Front-end geliştirici:

- UX akışlarını,
- Tasarım mockup'larını,
- Backend API'lerini

gerçek ve çalışan bir kullanıcı arayüzüne dönüştürür.

## Back-end developer

Back-end geliştirici web sitesinin kullanıcı tarafından doğrudan görünmeyen sunucu tarafındaki bölümleri üzerinde çalışır.

Örnek görevler:

- Veritabanından veri alma,
- Veri kaydetme,
- API oluşturma,
- Kullanıcıdan gelen form verilerini işleme,
- Template üzerinden HTML üretme,
- Sunucu yapılandırması,
- Güvenlik.

## Full-stack developer

**Full-stack developer**, hem front-end hem back-end görevlerinde çalışabilen geliştiricidir.

Örneğin aynı kişi:

```text
React arayüzü
+
Node.js API
+
veritabanı
```

üzerinde çalışabilir.

Bu rolün kapsamı şirkete göre değişebilir.

## Quality assurance (QA) engineer

**QA engineer**, yeni özelliklerin doğru çalıştığını kontrol etmekten sorumludur.

Görevler:

- Yeni özelliği test etmek,
- Hataları raporlamak,
- Bug raporlarını ayrıntılı yazmak,
- Geliştiricilerle iletişim kurmak,
- Hangi hataların yayını engellemesi gerektiğini belirlemeye yardımcı olmak.

Örneğin bir bug raporu:

```text
Başlık:
Sepete ekle düğmesi Safari'de çalışmıyor

Adımlar:
1. Ürün sayfasını aç.
2. Bir ürün seç.
3. "Sepete ekle" düğmesine bas.

Beklenen:
Ürün sepete eklenmeli.

Gerçek:
Hiçbir şey olmuyor.
```

gibi olabilir.

## Content specialist / technical writer

Bu rol web sitesindeki yazılı içeriğin hedef kullanıcıya uygun olmasını sağlamaya odaklanır.

Örnek çalışma alanları:

- Bilgi mimarisi,
- Navigasyon metinleri,
- UI etiketleri,
- Blog yazıları,
- Pazarlama metinleri,
- Ürün dokümantasyonu.

## Daha az yaygın roller

Bazı ekiplerde daha özel roller de bulunabilir.

### User researcher

Büyük ekiplerde kullanıcı araştırması için ayrı bir uzman olabilir.

Görevleri:

- Kullanıcı görüşmeleri,
- Kullanılabilirlik testleri,
- Anketler,
- Davranış araştırmaları.

### SEO specialist

**SEO specialist**, sitenin arama motorlarında daha görünür olmasına yardımcı olur.

Örneğin:

- İçerik yapısını,
- Başlıkları,
- Meta bilgilerini,
- Teknik SEO sorunlarını

inceleyebilir.

Daha fazla bilgi:

[SEO — MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

# Teknik proje aşamaları

Bir web projesinde yeni bir özelliğin geliştirilmesi yüksek seviyede şu şekilde ilerleyebilir.

## 1. Kullanıcı ihtiyacı belirlenir

Product manager kullanıcı verilerini inceler ve yeni bir ihtiyaç belirler.

Örneğin:

```text
"Kullanıcılar ürünleri favorilere kaydetmek istiyor."
```

## 2. Özellik fikrine karar verilir

Ekip bu ihtiyacın:

```text
Favorilere ekle özelliği
```

ile karşılanabileceğine karar verir.

## 3. İş parçaları oluşturulur

Project manager ekiple konuşarak işi küçük görevlere böler.

Örneğin:

```text
Backend endpoint oluştur
Veritabanı tablosu ekle
Favori düğmesi tasarla
Front-end entegrasyonu yap
Test senaryoları yaz
Dokümantasyon hazırla
```

## 4. UX akışı hazırlanır

UX designer özelliğin nasıl kullanılacağını tasarlar.

Örneğin:

```text
Ürün sayfası
    ↓
Favori düğmesi
    ↓
Hesap girişi kontrolü
    ↓
Favoriler listesi
```

Ayrıca wireframe hazırlanabilir.

## 5. Görsel tasarım hazırlanır

Graphic designer:

- Favori ikonunu,
- Buton renklerini,
- Hover durumlarını,
- Mobil görünümü

tasarlar.

## 6. İçerikler yazılır

Content specialist:

```text
"Favorilere ekle"
"Favorilerden kaldır"
"Favorilerinize eklendi"
```

gibi UI metinlerini hazırlar.

Gerekirse kullanıcı dokümantasyonu da yazar.

## 7. Back-end geliştirilir

Back-end developer:

- Favori verisini saklayacak yapıyı,
- API endpoint'lerini,
- Yetkilendirmeyi

hazırlar.

## 8. Front-end geliştirilir

Front-end developer:

- Tasarımı kodlar,
- Butonun etkileşimini oluşturur,
- Backend API'ye bağlanır,
- Kullanıcı durumunu arayüzde gösterir.

## 9. QA test eder

QA engineer özelliği farklı:

- Tarayıcılarda,
- Ekran boyutlarında,
- Kullanıcı durumlarında

test eder.

Bulduğu hataları raporlar.

## 10. Kritik hatalar düzeltilir

Yayını engelleyecek kadar önemli bug'lar düzeltilir.

Örneğin:

```text
Favoriler başka kullanıcının hesabında görünüyor.
```

gibi bir güvenlik sorunu kesinlikle yayını engelleyebilir.

## 11. Özellik yayına alınır

Ekip özelliğin yeterli kaliteye ulaştığı konusunda anlaşınca production ortamına gönderilir.

Basit akış:

```text
İhtiyaç
  ↓
Planlama
  ↓
UX
  ↓
Görsel tasarım
  ↓
İçerik
  ↓
Back-end
  ↓
Front-end
  ↓
QA
  ↓
Bug fix
  ↓
Release
```

> **Not:** Gerçek projelerde bu aşamalar her zaman tamamen sırayla gerçekleşmez. Birçok aşama paralel ilerleyebilir ve süreç sırasında geri dönüşler olabilir.

# İş yönetimi süreçleri

Bir projenin birçok görevi aynı anda yürütüldüğü için bu işleri organize edecek bir çalışma sürecine ihtiyaç vardır.

Project manager:

- İlerlemeyi takip eder,
- Öncelikleri yönetir,
- Görevlerin doğru sırada tamamlanmasını sağlar,
- Engelleri ortaya çıkarır.

İki klasik süreç yaklaşımı:

```text
Waterfall
Agile
```

olarak düşünülebilir.

# Waterfall

**Waterfall (şelale modeli)** projeyi açık ve belirgin aşamalara böler.

Her aşama çoğunlukla bir önceki aşamanın tamamlanmasına bağlıdır.

Örneğin:

```text
Gereksinimler
      ↓
Tasarım
      ↓
Geliştirme
      ↓
Test
      ↓
Yayın
```

Başlangıçta gereksinimlerin büyük ölçüde belli olduğu ve proje sırasında çok fazla değişmeyeceği varsayılır.

## Waterfall avantajları

### Proje başta daha net tanımlanabilir

Ne yapılacağı önceden ayrıntılı biçimde belirlenebilir.

### Scope creep riski daha düşük olabilir

**Scope creep**, proje başladıktan sonra sürekli yeni gereksinimlerin eklenmesidir.

Waterfall süreçte:

```text
"Başlangıçta anlaşılmayan yeni iş eklemeyelim."
```

yaklaşımı daha güçlü olabilir.

### Büyük sürümleri planlamak kolay olabilir

Tek ve büyük bir ürün sürümü:

- Pazarlama,
- Eğitim,
- Dokümantasyon,
- Lansman

açısından daha kolay koordine edilebilir.

## Waterfall dezavantajları

En büyük sorun esneklik eksikliğidir.

Örneğin proje altı ay sürecekse ve ikinci ayda ciddi bir kullanıcı ihtiyacı değişirse:

```text
orijinal plana bağlı kalmak
```

zorunluluğu problem yaratabilir.

Ayrıca bug fix veya iyileştirme için bir sonraki büyük sürümü beklemek gerekebilir.

# Agile

**Agile (çevik)** yaklaşım daha esnek çalışmayı amaçlar.

Projede:

- Birden fazla aşama aynı anda ilerleyebilir,
- Küçük çıktılar daha sık teslim edilebilir,
- Gereksinim değişiklikleri beklenen bir durum kabul edilir.

Örneğin:

```text
Küçük özellik
→ test
→ yayın

Yeni geri bildirim
→ yeni küçük özellik
→ test
→ yayın
```

## Agile avantajları

### Değişime hızlı uyum

Kullanıcı geri bildirimi veya yeni şirket stratejisi ortaya çıktığında öncelikler değiştirilebilir.

### Sık release

Küçük iyileştirmeler daha sık kullanıcıya ulaşabilir.

Böylece:

- Bug fix daha hızlı gelir,
- Yeni özellikler daha sık yayınlanır,
- Ürün sürekli gelişir.

### Continuous improvement

Agile ekiplerde:

```text
sürekli iyileştirme
```

önemli bir düşünce biçimidir.

## Agile dezavantajları

### Scope creep riski

Yeni ihtiyaçların sürekli eklenmesi projenin sınırlarını belirsiz hale getirebilir.

### Deadline kaymaları

Önceliklerin sık değişmesi tarihlerin kaymasına yol açabilir.

### Proje hiçbir zaman "bitmiş" hissettirmeyebilir

Sürekli yeni sprint ve özellikler nedeniyle:

```text
"Proje tamamlandı."
```

hissi daha az olabilir.

### Sürekli teslim baskısı

Sık release kültürü ekip üzerinde sürekli çalışma temposu oluşturabilir.

> **Not:** Web geliştirme ekipleri çoğu zaman Agile yaklaşımları tercih eder çünkü yazılım projelerinde bug'lar, kullanıcı geri bildirimi ve şirket stratejileri nedeniyle gereksinimler sık değişebilir.

# Waterfall ve Agile karşılaştırması

| Özellik | Waterfall | Agile |
| --- | --- | --- |
| Planlama | Başta ayrıntılı | Süreç boyunca güncellenebilir |
| Gereksinim değişikliği | Daha zor | Daha kolay |
| Teslimatlar | Büyük ve seyrek | Küçük ve sık |
| Takım özerkliği | Genellikle daha düşük | Genellikle daha yüksek |
| Scope creep riski | Daha düşük olabilir | Daha yüksek olabilir |
| Esneklik | Daha düşük | Daha yüksek |

Bu tablo bir genellemedir. Gerçek ekipler çoğu zaman farklı yöntemlerin karışımını kullanır.

# Scrum ve Kanban

Agile yaklaşımın farklı uygulama biçimleri vardır.

Yaygın iki yaklaşım:

```text
Scrum
Kanban
```

olarak adlandırılır.

## Scrum

Scrum belirli kuralları bulunan Agile metodolojilerinden biridir.

### Scrum master

Scrum sürecini yöneten kişiye:

```text
Scrum master
```

denir.

Bu rol bazı ekiplerde project manager rolüne yakın olabilir.

### Sprint

İşler kısa çalışma döngülerine bölünür.

Bu döngülere:

```text
sprint
```

denir.

Yaygın sprint uzunluğu:

```text
2 hafta
```

civarındadır.

Ancak ekipler farklı süreler de seçebilir.

### Backlog

Henüz yapılmamış potansiyel işler:

```text
backlog
```

içinde tutulur.

Örnek:

```text
Backlog
├── Login sayfasını güncelle
├── Favoriler API'si
├── Mobil menü bug'ı
└── Arama performansını iyileştir
```

Sprint başlamadan önce hangi işlerin sprint içine alınacağı seçilir.

### Görev durumları

Sprint içindeki görevler farklı durumlarda olabilir.

Örneğin:

```text
Backlog
   ↓
To do
   ↓
In progress
   ↓
In review
   ↓
Done
```

### Daily stand-up

Scrum ekiplerinde genellikle kısa günlük toplantılar yapılır.

Bu toplantılarda herkes:

- Ne yaptığını,
- Bugün ne yapacağını,
- Bir engeli olup olmadığını

paylaşabilir.

Amaç uzun raporlar sunmak değil, engelleri erken fark etmektir.

### Retrospective

Sprint sonunda:

```text
retrospective
```

toplantısı yapılabilir.

Ekip şu soruları değerlendirir:

```text
Neler iyi gitti?
Neler kötü gitti?
Bir sonraki sprintte neyi değiştirebiliriz?
```

Bu, önceki bölümde gördüğünüz ekip çalışması ve geri bildirim kültürüyle doğrudan ilişkilidir.

# Kanban

**Kanban**, Scrum'a göre daha az sabit kurala sahip bir Agile yaklaşımıdır.

Genellikle:

- Sprint kullanmak zorunda değildir,
- İşleri sürekli akış halinde yönetir,
- Sürekli iyileştirmeye odaklanır.

Kanban özellikle başlangıç ve bitişi kesin olmayan sürekli işler için uygundur.

Örneğin:

```text
Müşteri destek ticket'ları
Bug triage
Bakım işleri
İçerik güncellemeleri
```

gibi süreçler.

## Scrum ve Kanban farkı

Basitleştirilmiş karşılaştırma:

| Özellik | Scrum | Kanban |
| --- | --- | --- |
| Sprint | Genellikle var | Gerekli değil |
| Sabit roller | Daha fazla | Daha az |
| İş akışı | Sprint bazlı | Sürekli akış |
| Değişiklik | Sprint sırasında sınırlı olabilir | Sürekli yapılabilir |
| Kullanım | Ürün geliştirme ekipleri | Sürekli operasyon ve geliştirme |

# Kanban panoları

Trello ve Asana gibi araçlar farklı işlerin durumunu görsel sütunlar halinde gösterebilir.

Bu tür görünümler genellikle:

```text
Kanban board
```

olarak adlandırılır.

Örnek:

```text
BACKLOG        TODO          IN PROGRESS      REVIEW        DONE
----------------------------------------------------------------
Login bug      Navbar        Checkout API     Profile UI    Footer
SEO work       Search        Tests
```

Görevler ilerledikçe sütunlar arasında taşınır.

## Sütunlar neyi temsil edebilir?

En yaygın kullanım görev durumlarıdır:

```text
Backlog
To do
In progress
In review
Done
```

Ancak sütunlar farklı iş türlerini de temsil edebilir:

```text
Research
Design
Development
Testing
```

veya projeye uygun başka bir organizasyon yapılabilir.

## Kullanılabilecek araçlar

### Trello

[Trello](https://trello.com/) görsel kart ve pano yapısıyla iş takibi yapmanızı sağlar.

### Asana

[Asana](https://asana.com/) görev, tarih ve proje takibi için kullanılır.

### GitHub Projects

[GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects) GitHub issue ve pull request'leri doğrudan proje panolarına bağlamak için kullanılabilir.

Özellikle yazılım projelerinde kullanışlıdır.

# Küçük bir Kanban örneği

Kendi öğrenme projeniz için şöyle bir pano hazırlayabilirsiniz.

## Backlog

```text
Responsive navbar
Dark mode
Contact form
SEO meta tags
Accessibility test
```

## To do

```text
Responsive navbar
Contact form
```

## In progress

```text
Dark mode
```

## Review / Test

```text
Accessibility test
```

## Done

```text
Ana sayfa HTML
CSS temel stilleri
```

Bu yapı projenin hangi aşamada olduğunu tek bakışta görmenizi sağlar.

# Proje iş akışlarını pratik etme

Bu süreçleri yalnızca teorik olarak okumak yeterli değildir.

Kendi kişisel projelerinizde basit bir Kanban iş akışı kullanarak pratik yapabilirsiniz.

Başlangıç için karmaşık Scrum süreci kurmanız gerekmez.

Basit Kanban yeterlidir.

## 1. Görevler oluşturun

Büyük projeyi küçük görevlere bölün.

Örneğin:

```text
Portföy sitesi yap
```

yerine:

```text
Header HTML
Navigasyon
Hero alanı
Proje kartları
Mobil tasarım
Contact form
Deploy
```

gibi görevler oluşturun.

## 2. Görev büyüklüğünü tahmin edin

Her görevin yaklaşık ne kadar süreceğini düşünün.

Örneğin:

```text
Navigasyon       → 1 saat
Hero alanı       → 2 saat
Proje kartları   → 3 saat
Responsive test  → 2 saat
```

Tahminler her zaman doğru olmak zorunda değildir.

Ama zamanla görev tahmini yapma beceriniz gelişir.

## 3. Görevleri önceliklendirin

Her iş aynı derecede önemli değildir.

Örneğin:

```text
Yüksek:
Sayfanın mobilde çalışması

Orta:
Dark mode

Düşük:
Ek animasyon
```

Önce temel ürünün çalışmasını sağlayan görevleri tamamlamak daha mantıklı olabilir.

## 4. Son tarihler ve sıralama belirleyin

Bazı görevler diğerlerine bağlıdır.

Örneğin:

```text
HTML oluştur
    ↓
CSS yaz
    ↓
Responsive test yap
```

CSS yazmadan önce temel HTML'in hazır olması gerekebilir.

Görev bağımlılıklarını dikkate alın.

## 5. Göreve başlayın

Bir görev üzerinde çalışmaya başladığınızda durumunu:

```text
In progress
```

olarak değiştirin.

Bu küçük alışkanlık gerçek ekip ortamlarında oldukça önemlidir.

## 6. Durumları güncelleyin

Görev ilerledikçe durum:

```text
To do
   ↓
In progress
   ↓
Blocked
   ↓
Review
   ↓
Done
```

olarak değişebilir.

### Blocked

Bir görev başka bir sebeple ilerleyemiyorsa:

```text
Blocked
```

olarak işaretlemek yararlıdır.

Örneğin:

```text
Backend API henüz hazır değil.
```

bu nedenle front-end görevi bloke olabilir.

Gerçek ekiplerde blokajı açıkça belirtmek project manager ve ekip arkadaşlarının yardım etmesini kolaylaştırır.

# Baştan sona bir proje takip edin

Bir proje seçin.

Örneğin:

```text
kişisel portföy
to-do uygulaması
hava durumu uygulaması
blog
```

Sonra:

```text
1. Görevleri oluşturun.
2. Öncelik verin.
3. Pano üzerinde takip edin.
4. Görevleri tamamladıkça durum değiştirin.
5. Proje sonunda geriye dönüp süreci inceleyin.
```

Proje tamamlandığında şu soruları sorun:

```text
Tahminlerim doğru muydu?
En çok hangi görev gecikti?
Hangi görevleri başta unutmuşum?
Hangi işler sürekli bloke oldu?
Bir sonraki projede neyi farklı yapmalıyım?
```

Bu küçük retrospektif ileride profesyonel ekiplerde karşılaşacağınız sürece benzer.

# Açık kaynak projelerde iş akışı deneyimi

Açık kaynak projeler gerçek çalışma süreçlerini görmek için çok değerlidir.

Bir proje GitHub'da:

- Issues,
- Labels,
- Milestones,
- Projects,
- Pull requests

kullanabilir.

Örneğin issue:

```text
#431 - Mobile navigation overlaps header
```

etiketleri:

```text
bug
frontend
good first issue
```

olabilir.

Katkı süreci:

```text
Issue seç
   ↓
Repository fork / branch
   ↓
Kod değişikliği
   ↓
Test
   ↓
Commit
   ↓
Pull request
   ↓
Code review
   ↓
Düzeltmeler
   ↓
Merge
```

şeklinde ilerleyebilir.

Bu deneyim iş hayatındaki gerçek geliştirme akışlarına oldukça benzer.

# Tek kişi çalışırken süreç kullanmak neden yararlıdır?

Bir workflow yalnızca büyük ekipler için değildir.

Tek başınıza çalışırken bile size:

- Ne yapacağınızı hatırlatma,
- Proje kapsamını kontrol etme,
- İlerlemenizi görme,
- Zaman tahmini pratiği yapma,
- Öncelik belirleme

konularında yardımcı olur.

Örneğin gelişigüzel:

```text
Bugün biraz CSS yazayım.
```

yerine:

```text
Bugünkü hedef:
- Mobil navbar tamamla
- 375px ve 768px test et
- Issue #12'yi kapat
```

gibi somut bir çalışma planı daha verimlidir.

# Basit bir kişisel proje workflow'u

Aşağıdaki modeli doğrudan kullanabilirsiniz:

```text
Fikir
  ↓
Gereksinimler
  ↓
Backlog oluştur
  ↓
Görevleri önceliklendir
  ↓
To do
  ↓
In progress
  ↓
Test / review
  ↓
Done
  ↓
Deploy
  ↓
Retrospective
```

Örnek proje klasörü:

```text
portfolio/
├── index.html
├── styles/
├── scripts/
└── README.md
```

README içinde proje yönetim notları da tutabilirsiniz:

```md
## Hedefler

- Responsive tasarım
- Proje kartları
- Contact form

## Şu an

- Header: tamamlandı
- Hero: tamamlandı
- Projects: devam ediyor
- Form: backlog

## Blokaj

Contact form için hangi backend servisini kullanacağıma karar vermedim.
```

# Takım çalışmalarında workflow örneği

Gerçek ekipte daha ayrıntılı akış şöyle olabilir:

```text
Product manager
→ ihtiyaç belirler

Project manager
→ issue/task oluşturur

Designer
→ tasarım hazırlar

Developer
→ branch açar

Developer
→ kodu geliştirir

Developer
→ test eder

Developer
→ pull request açar

Reviewer
→ code review yapar

Developer
→ geri bildirimi uygular

QA
→ özelliği test eder

Ekip
→ release kararı verir

CI/CD
→ production deploy
```

Bu model şirkete göre değişir ancak büyük resmi anlamanıza yardımcı olur.

# Ayrıca bakınız

Kaynak MDN sayfasında önerilen ilgili materyaller:

- [What is a Tech Stack and How Do They Work? — MongoDB](https://www.mongodb.com/resources/basics/technology-stack)
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/website-development-team-structure-roles-processes/)
- [Agile vs. Waterfall — ProductPlan](https://www.productplan.com/learn/agile-vs-waterfall/)
- [What is Scrum? — Scrum.org](https://www.scrum.org/resources/what-scrum-module)

Ek olarak:

- [GitHub Projects](https://docs.github.com/issues/planning-and-tracking-with-projects)
- [Trello](https://trello.com/)
- [Asana](https://asana.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)

# Özet

Bu bölümde profesyonel web geliştirmenin yalnızca kod yazmaktan ibaret olmadığını gördünüz. Gerçek bir web uygulaması, front-end, back-end, veritabanı ve hosting gibi farklı teknoloji katmanlarının yanında test, build, tasarım, sürüm kontrolü ve proje yönetimi araçlarının birlikte çalışmasıyla ortaya çıkar. Bu teknoloji kombinasyonuna genel olarak **tech stack** denir.

Front-end geliştirme bile tek başına birçok alt parçadan oluşabilir. JavaScript framework'leri, template sistemleri, CSS framework veya preprocessor'ları, test araçları ve build sistemleri modern projelerde sık kullanılan araçlardır. Ancak başlangıç aşamasında bütün bunlarda uzman olmanız gerekmez. HTML, CSS ve JavaScript gibi temel teknolojileri güçlü biçimde öğrenmek daha önemlidir; ekip içinde diğer uzmanlık alanları farklı kişiler tarafından üstlenilebilir.

Web geliştirme ekiplerinde product manager, project manager, UX designer, graphic designer, front-end developer, back-end developer, full-stack developer, QA engineer ve content specialist gibi çok sayıda rol bulunabilir. Bu rollerin her biri aynı ürünün farklı yönlerine odaklanır. Büyük ekiplerde user researcher ve SEO specialist gibi daha özel roller de bulunabilir.

Tipik bir özellik geliştirme süreci kullanıcı ihtiyacının belirlenmesiyle başlar. Ardından proje planı, UX akışı, görsel tasarım, içerik, back-end ve front-end geliştirme, QA testi, bug fix ve release aşamaları gelir. Gerçek projelerde bu adımlar her zaman tamamen sırayla ilerlemez; çoğu zaman bazı işler paralel yürür.

Proje işlerini yönetmek için Waterfall ve Agile gibi farklı süreçler kullanılabilir. **Waterfall**, planın baştan daha ayrıntılı tanımlandığı ve aşamaların sırayla tamamlandığı bir yaklaşımken **Agile**, gereksinimlerin değişebileceğini kabul eder ve daha küçük sonuçların sık aralıklarla teslim edilmesine odaklanır. Web geliştirme ekiplerinde gereksinimler ve öncelikler sık değişebildiği için Agile yaklaşımlar oldukça yaygındır.

Agile dünyasında **Scrum**, işleri sprint adı verilen kısa dönemlerde organize eder; backlog, daily stand-up ve retrospective gibi uygulamalar kullanır. **Kanban** ise daha sürekli bir iş akışına dayanır ve görevlerin `Backlog`, `To do`, `In progress`, `Review` ve `Done` gibi sütunlar arasında ilerlediği görsel panoları sık kullanır.

Son olarak bu süreçleri yalnızca okumak yerine kendi projelerinizde uygulamanız önemlidir. Küçük bir kişisel projeyi bile görevlere bölüp önceliklendirmek, tahmin yapmak, Kanban panosunda ilerlemeyi takip etmek ve proje sonunda retrospektif yapmak size gerçek ekip iş akışlarının temelini öğretir. Açık kaynak projelere katkı vermek de issue, branch, pull request, review ve merge gibi profesyonel süreçleri gerçek bir ortamda deneyimlemek için güçlü bir yöntemdir.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Workflows and processes”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes) sayfasının konu sırası ve öğrenme hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### İlgili MDN bölümleri

- [Soft skills](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills)
- [Collaboration and teamwork](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork)
- [Finding a job](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job)
