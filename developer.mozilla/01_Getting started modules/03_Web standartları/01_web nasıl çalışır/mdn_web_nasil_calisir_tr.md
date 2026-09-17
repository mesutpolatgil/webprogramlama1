# Web Nasıl Çalışır?

> **Kaynak:** [MDN Web Docs — How the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)  
> **Türkçe sürüm:** Kaynak sayfanın bölüm sırasını, temel örneklerini, görsellerini ve öğrenme akışını izleyen ayrıntılı Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 20 Temmuz 2026

Bir web tarayıcısına adres yazıp bir sayfayı açtığınızda, arka planda çok sayıda işlem gerçekleşir. Tarayıcınız önce doğru sunucuyu bulur, ardından o sunucudan gerekli dosyaları ister; gelen HTML, CSS, JavaScript ve diğer kaynaklar daha sonra tarayıcı tarafından kullanılır.

Bu bölüm, bu süreci yüksek seviyede açıklar. Amaç henüz ağ mühendisliği öğrenmek değil; bir web sayfasının sunucudan bilgisayarınıza nasıl ulaştığını ve bu süreçte DNS, TCP/IP, HTTP ve paketler gibi kavramların hangi role sahip olduğunu anlamaktır.

> **Not:** Bu sayfa, tarayıcının aldığı HTML/CSS/JavaScript kodunu ekranda görülen piksellere nasıl dönüştürdüğünü ayrıntılı olarak anlatmaz. Bu konu modülün sonraki bölümü olan [Tarayıcılar web sitelerini nasıl yükler?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) sayfasında ele alınır.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web tarayıcılarına ve temel web teknolojilerine aşina olmak. |
| **Öğrenme çıktıları:** | • İstemci ve sunucuların web'deki rollerini anlamak.<br>• DNS'in yüksek seviyede nasıl çalıştığını kavramak.<br>• TCP/IP, HTTP ve paketlerin ne işe yaradığını öğrenmek.<br>• Temel HTTP istek/yanıt sözdizimini tanımak.<br>• Yaygın HTTP durum kodlarının anlamını bilmek.<br>• Bir URL'nin protokol, alan adı, alt alan adı ve yol gibi temel bileşenlerini ayırt etmek. |

## Bu makalede

- [İstemciler ve sunucular](#istemciler-ve-sunucular)
- [Araç kutusunun diğer parçaları](#araç-kutusunun-diğer-parçaları)
- [Peki tam olarak ne oluyor?](#peki-tam-olarak-ne-oluyor)
- [DNS açıklaması](#dns-açıklaması)
- [Paketler açıklaması](#paketler-açıklaması)
- [HTTP temelleri](#http-temelleri)
- [Bir URL'nin bileşenleri](#bir-urlnin-bileşenleri)
- [Ayrıca bakınız](#ayrıca-bakınız)
- [Kaynak / credit](#kaynak--credit)
- [Özet](#özet)

## İstemciler ve sunucular

İnternete bağlı bilgisayarlar ve yazılımlar web'de farklı roller üstlenebilir. Başlangıç seviyesinde en önemli iki kavram:

- **İstemci (client)**
- **Sunucu (server)**

Basitleştirilmiş ilişki şu şekildedir:

![İstemciden sunucuya istek, sunucudan istemciye yanıt akışını gösteren şema](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works/simple-client-server.png)

### İstemci nedir?

İstemci, kullanıcının web'e eriştiği taraftır.

Örnekler:

- Wi‑Fi'a bağlı dizüstü bilgisayar,
- Mobil şebekeye bağlı telefon,
- Tablet,
- Bu cihazlarda çalışan Firefox, Chrome, Safari veya Edge gibi web tarayıcıları.

Web bağlamında tarayıcı, çoğu zaman **istemci yazılımı** olarak görev yapar.

### Sunucu nedir?

Sunucu, web sayfalarını, siteleri veya web uygulamalarını oluşturan dosyaları saklayan ve gelen isteklere yanıt veren bilgisayar veya sistemdir.

Bir istemci bir web sayfası istediğinde:

```text
İstemci
   ↓ istek
Sunucu
   ↓ yanıt
İstemci
```

şeklinde basitleştirilebilecek bir iletişim gerçekleşir.

Sunucunun gönderdiği HTML, CSS, JavaScript, görseller ve diğer dosyalar istemciye ulaşır. Ardından tarayıcı bu kaynakları işleyip web sayfasını kullanıcıya gösterir.

## Araç kutusunun diğer parçaları

Yalnızca istemci ve sunucudan söz etmek gerçek internet iletişimini açıklamak için yeterli değildir.

Bunu bir **yol** benzetmesiyle düşünebiliriz:

- Bir uçta **eviniz** var → istemci.
- Diğer uçta gitmek istediğiniz **mağaza** var → sunucu.
- İkisinin arasında veri alışverişini mümkün kılan yollar, adres sistemleri, ulaşım mekanizmaları ve iletişim kuralları bulunur.

![Yoldan karşıya geçen bir kişinin bulunduğu siyah-beyaz sokak fotoğrafı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works/road.jpg)

Bir web sayfasına ulaşmak için aşağıdaki bileşenler birlikte çalışır.

### İnternet bağlantınız

İnternet bağlantısı verilerin internete gönderilip alınmasını sağlar.

Bunu evinizle mağaza arasındaki **yol** gibi düşünebilirsiniz.

Bağlantınız:

- Ethernet,
- Wi‑Fi,
- Mobil veri,
- Fiber,
- Kablo,
- Başka bir ağ altyapısı

üzerinden sağlanabilir.

### TCP/IP

**TCP/IP**, internette verilerin nasıl taşınacağını belirleyen iletişim protokolleri ailesidir.

Açılımları:

```text
TCP → Transmission Control Protocol
IP  → Internet Protocol
```

Yol benzetmesinde TCP/IP, yol üzerinde hareket etmenizi sağlayan otomobil, bisiklet veya başka bir ulaşım mekanizmasına benzetilebilir.

Yüksek seviyede:

- **IP**, verinin hangi adreslere yönlendirileceğiyle ilgilenir.
- **TCP**, verilerin güvenilir biçimde aktarılması ve doğru sırada yeniden birleştirilmesi gibi görevlerde rol oynar.

> **Not:** Gerçek ağ iletişimi bu kısa açıklamadan daha karmaşıktır. Buradaki amaç yalnızca kavramların genel rollerini anlamaktır.

### DNS

**DNS (Domain Name System / Alan Adı Sistemi)**, web siteleri için bir çeşit adres defteri gibi çalışır.

Tarayıcıya:

```text
developer.mozilla.org
```

yazdığınızda bilgisayarın doğrudan bu metni kullanarak sunucuya bağlanması yeterli değildir. Önce bu alan adının karşılık geldiği IP adresinin bulunması gerekir.

DNS:

```text
developer.mozilla.org
        ↓
     IP adresi
```

eşlemesini yapmaya yardımcı olur.

Bunu mağazaya gitmeden önce mağazanın gerçek adresini bir adres defterinden bulmaya benzetebilirsiniz.

DNS'i ilerleyen bölümde daha ayrıntılı inceleyeceğiz.

### HTTP

**HTTP (Hypertext Transfer Protocol)**, istemci ve sunucunun web üzerinde birbirine hangi tür mesajları göndereceğini tanımlayan uygulama katmanı protokolüdür.

Yol benzetmesinde HTTP, mağazada sipariş verirken kullandığınız **ortak dil** gibidir.

Örneğin tarayıcı sunucuya kabaca:

> Bana bu kaynağı gönder.

anlamına gelen bir HTTP isteği yollar.

Sunucu da:

> İstek başarılı, kaynak burada.

veya:

> Böyle bir kaynak bulamadım.

gibi anlamlara gelen bir HTTP yanıtı gönderir.

### Dosyalar

Bir web sitesi birçok farklı dosyadan oluşur.

Bunları iki geniş grupta düşünebilirsiniz.

#### Kod dosyaları

Örneğin:

```text
HTML
CSS
JavaScript
```

Tarayıcı bu dosyaları yorumlayarak sayfanın yapısını, görünümünü ve davranışını oluşturur.

#### Varlıklar (assets)

Kod dışındaki kaynaklara genel olarak **asset** denebilir.

Örneğin:

- Görseller,
- Ses dosyaları,
- Videolar,
- PDF'ler,
- İndirilebilir belgeler,
- Yazı tipleri.

> **Not:** Tarayıcının bu dosyaları nasıl işleyerek ekranda gerçek bir web sayfasına dönüştürdüğü, [Tarayıcılar web sitelerini nasıl yükler?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) bölümünde incelenir.

## Peki tam olarak ne oluyor?

Tarayıcının adres çubuğuna bir web adresi yazdığınızı düşünün.

Örneğin:

```text
developer.mozilla.org
```

Basitleştirilmiş süreç şöyledir:

### 1. Tarayıcı DNS üzerinden sunucunun adresini bulur

Tarayıcı önce alan adının hangi sunucuya karşılık geldiğini öğrenmek zorundadır.

```text
developer.mozilla.org
        ↓ DNS
IP adresi
```

### 2. Tarayıcı HTTP isteği gönderir

Doğru sunucu belirlendikten sonra tarayıcı, istediği kaynağı belirtmek için bir HTTP isteği gönderir.

Bu mesaj ağ üzerinden TCP/IP kullanılarak taşınır.

### 3. Sunucu isteği işler

Sunucu isteği kabul ederse başarılı bir HTTP yanıtı gönderir.

Başarılı bir yanıtın en bilinen durum kodu:

```text
200 OK
```

şeklindedir.

Ardından gerekli web sitesi dosyaları istemciye gönderilmeye başlanır.

### 4. Veri küçük paketler halinde aktarılır

Dosyalar internet üzerinden tek parça halinde hareket etmek zorunda değildir.

Veri:

```text
paket 1
paket 2
paket 3
...
```

gibi küçük parçalara ayrılabilir.

### 5. Tarayıcı gelen verileri bir araya getirir

Paketler istemciye ulaştığında doğru sırada yeniden birleştirilir.

Daha sonra tarayıcı sayfa kaynaklarını kullanmaya başlayabilir:

```text
HTML
CSS
JavaScript
görseller
...
```

Sonuçta kullanıcı web sayfasını görür.

Özet akış:

```text
URL girilir
    ↓
DNS sorgusu
    ↓
Sunucunun IP adresi bulunur
    ↓
HTTP isteği
    ↓
Sunucu yanıtı
    ↓
Veriler paketler halinde taşınır
    ↓
Tarayıcı verileri birleştirir
    ↓
Sayfa gösterilir
```

## DNS açıklaması

İnsanların hatırladığı web adresleri:

```text
mozilla.org
developer.mozilla.org
example.com
```

gibi metinlerdir.

Ancak ağ üzerinde makineler IP adresleriyle iletişim kurar.

Örnek bir IPv4 adresi:

```text
192.0.2.172
```

Bu tür sayıları hatırlamak alan adlarına göre daha zordur.

DNS bu problemi çözer.

### Alan adı → IP adresi

DNS'in temel görevi:

```text
alan adı
   ↓
IP adresi
```

eşlemesini yapmaktır.

Örneğin kavramsal olarak:

```text
example.com
    ↓
192.0.2.x
```

gibi düşünülebilir.

> **Önemli:** Büyük web siteleri genellikle tek bir sunucudan çalışmaz. Dünyanın farklı bölgelerinde çok sayıda sunucu kullanılabilir. Bu nedenle aynı alan adının döndürdüğü IP adresi bulunduğunuz konuma, ağ yapılandırmasına veya zamana göre değişebilir.

### DNS sorgusu deneyin

Bir web sitesinin DNS kayıtlarını görmek için çevrimiçi DNS sorgu araçları kullanılabilir.

Örneğin:

[NSLookup.io](https://www.nslookup.io/)

sitesine gidip:

```text
developer.mozilla.org
```

alan adını aratabilirsiniz.

Sonuçlarda:

- IP adresleri,
- DNS kayıtları,
- IPv4/IPv6 bilgileri

gibi veriler görebilirsiniz.

## Paketler açıklaması

İnternette büyük miktardaki veri çoğu zaman küçük parçalar halinde taşınır.

Bu küçük parçalara **packet (paket)** denir.

Basitleştirilmiş bir paket iki ana bölümden oluşur:

```text
+------------------+
| Header / Başlık  |
+------------------+
| Payload / Veri   |
+------------------+
```

### Paket başlığı

Header bölümünde paket hakkında yönetim bilgileri bulunabilir.

Örneğin:

- Kaynak IP adresi,
- Hedef IP adresi,
- Paket numarası,
- Aktarımda kaç paket olduğu,
- Kullanılan protokollerle ilgili bilgiler.

Bu bilgiler, verilerin doğru noktaya ulaşmasına ve yeniden birleştirilmesine yardımcı olur.

### Payload

**Payload**, paketin gerçekten taşımak istediği veri bölümüdür.

Örneğin bir:

- HTML dosyasının,
- Görselin,
- JavaScript dosyasının

bir kısmı payload içinde bulunabilir.

### Neden paketler kullanılır?

Veriyi küçük parçalara ayırmanın çeşitli avantajları vardır.

#### Hasarlı veya kayıp veri daha kolay yeniden gönderilebilir

Bir aktarımın tamamı yerine yalnızca eksik paketlerin yeniden istenmesi daha verimlidir.

Örneğin:

```text
100 paket gönderildi
       ↓
yalnızca 1 paket kayboldu
       ↓
yalnızca eksik paket yeniden gönderilir
```

#### Paketler farklı rotalar izleyebilir

İnternette tüm paketlerin aynı fiziksel veya mantıksal yolu izlemesi gerekmez.

Örneğin:

```text
Paket 1 → rota A
Paket 2 → rota B
Paket 3 → rota C
```

Paketler hedefe farklı sırada ulaşabilir.

Header bilgileri sayesinde istemci bunları tekrar doğru sıraya koyabilir.

Bu yaklaşım ağın daha esnek ve verimli çalışmasına yardımcı olur.

## HTTP temelleri

HTTP istemci ve sunucunun web üzerinde mesaj alışverişi yapmasını tanımlar.

HTTP'de farklı amaçlar için kullanılan **method (metot)** adı verilen fiiller bulunur.

En yaygınlarından biri:

```text
GET
```

metodudur.

`GET`, bir kaynağı sunucudan istemek için kullanılır.

### Basit HTTP isteği

MDN ana sayfası için basitleştirilmiş bir HTTP isteği şöyle görünebilir:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
```

Burada:

```text
GET
```

kullanılan HTTP metodudur.

```text
/en-US/
```

istenen kaynağın yoludur.

```text
HTTP/2
```

kullanılan HTTP protokol sürümünü belirtir.

```text
Host: developer.mozilla.org
```

ise hangi alan adındaki kaynağın istendiğini belirten bir HTTP header'ıdır.

### Basit HTTP yanıtı

Sunucunun yanıtı kavramsal olarak şuna benzeyebilir:

```http
HTTP/2 200
date: Tue, 11 Feb 2025 11:13:30 GMT
content-type: text/html
content-length: 45227

<!doctype html>
<html>
  ...
</html>
```

Gerçek HTTP yanıtları bundan daha fazla header içerebilir.

Bu örneğin üç önemli kısmı vardır.

### HTTP sürümü ve durum kodu

```http
HTTP/2 200
```

Burada:

- `HTTP/2`: protokol sürümü,
- `200`: durum kodudur.

`200`, isteğin başarılı olduğunu belirtir.

### HTTP header'ları

Örneğin:

```http
date: ...
content-type: text/html
content-length: ...
```

gibi satırlar **HTTP headers** olarak adlandırılır.

Header'lar istek veya yanıt hakkında ek bilgi taşır.

Örneğin:

```http
content-type: text/html
```

yanıt gövdesindeki içeriğin HTML olduğunu bildirir.

### HTTP body

Header'lardan sonra gelen asıl veri **response body** içinde bulunur.

Bu örnekte body bir HTML belgesidir:

```html
<!doctype html>
<html>
  ...
</html>
```

Başka bir istekte body:

- JSON,
- Görsel verisi,
- CSS,
- JavaScript,
- PDF

olabilir.

> **Not:** HTTP çok daha kapsamlı bir konudur. Daha ayrıntılı öğrenmek için [MDN HTTP referansına](https://developer.mozilla.org/en-US/docs/Web/HTTP) ve [HTTP'ye genel bakış](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) sayfasına bakabilirsiniz.

### Diğer durum kodları

HTTP yanıtlarındaki durum kodları, isteğin sonucunu hızlı biçimde anlamanızı sağlar.

Başlangıç seviyesinde aşağıdaki kodları bilmek yararlıdır.

#### `200` — Başarılı

```text
200 OK
```

İstenen kaynak başarıyla döndürülmüştür.

#### `301` — Kalıcı yönlendirme

```text
301 Moved Permanently
```

Kaynak kalıcı olarak başka bir adrese taşınmıştır.

Sunucu yeni konumu yanıt içinde belirtir.

Örneğin eski URL:

```text
https://example.com/eski-sayfa
```

şuraya yönlendirilebilir:

```text
https://example.com/yeni-sayfa
```

#### `400` — Hatalı istek

```text
400 Bad Request
```

Sunucu isteği geçerli biçimde işleyemiyordur.

Bunun nedeni örneğin hatalı veya beklenmeyen istek verisi olabilir.

#### `403` — Erişim yasak

```text
403 Forbidden
```

Sunucu isteği anlamıştır ancak istemcinin ilgili kaynağa erişmesine izin vermiyordur.

#### `404` — Bulunamadı

```text
404 Not Found
```

Sunucu istenen kaynağı bulamamıştır.

Bunun yaygın nedenleri:

- URL'nin yanlış yazılması,
- Sayfanın silinmesi,
- Dosyanın taşınıp yönlendirme eklenmemesi.

Bu, web geliştirirken çok sık göreceğiniz hata kodlarından biridir.

#### `503` — Hizmet kullanılamıyor

```text
503 Service Unavailable
```

Sunucu isteği şu anda işleyemiyordur.

Örneğin:

- Sunucu bakımda olabilir,
- Geçici olarak aşırı yüklenmiş olabilir,
- İlgili servis çalışmıyor olabilir.

Bu durum çoğu zaman geçici kabul edilir.

> **Not:** `500 Internal Server Error` da web geliştirmede çok sık karşılaşılan bir sunucu hata kodudur. Genel olarak sunucu tarafında beklenmeyen bir hata oluştuğunu gösterir.

### HTTP durum kodu aileleri

Durum kodlarını ilk rakamlarına göre gruplandırabilirsiniz:

```text
1xx → Bilgilendirme
2xx → Başarı
3xx → Yönlendirme
4xx → İstemci kaynaklı hata durumları
5xx → Sunucu kaynaklı hata durumları
```

Bu sınıflandırmayı bilmek, daha önce görmediğiniz bir durum kodu hakkında bile hızlıca fikir edinmenizi sağlar.

## Bir URL'nin bileşenleri

Tarayıcı adres çubuğuna yazdığınız web adresleri, genellikle bir **URL (Uniform Resource Locator)** yapısının parçasıdır.

Örneğin:

```text
https://developer.mozilla.org/en-US/
```

URL'yi parçalarına ayıralım:

```text
https://developer.mozilla.org/en-US/
└─┬─┘   └──────────┬──────────┘└─┬─┘
protokol        alan adı          yol
```

### Protokol

```text
https
```

hangi protokolün kullanılacağını belirtir.

Günümüzde web sitelerinin büyük çoğunluğu:

```text
HTTPS
```

kullanır.

**HTTPS**, HTTP iletişiminin şifrelenmiş/güvenli sürümüdür.

Bu sayede ağ üzerinden taşınan verilerin üçüncü kişiler tarafından okunması veya değiştirilmesi çok daha zor hale gelir.

Tarayıcıya yalnızca:

```text
developer.mozilla.org
```

yazsanız bile modern tarayıcılar ve sunucular çoğu zaman HTTPS kullanacak şekilde sizi yönlendirir.

### Alan adı

```text
developer.mozilla.org
```

URL'nin alan adıdır.

Bunu şu şekilde parçalayabiliriz:

```text
developer.mozilla.org
└───┬───┘ └───┬──┘
 alt alan     ana alan
```

Burada:

```text
mozilla.org
```

temel alan adıdır.

```text
developer
```

ise bir **subdomain (alt alan adı)**dır.

Aynı kuruluş farklı alt alan adlarını farklı içerikler için kullanabilir.

Örneğin Mozilla'nın:

```text
support.mozilla.org
```

gibi başka alt alan adları da vardır.

### Yol

```text
/en-US/
```

sunucudaki belirli bir kaynağa giden yolu ifade eder.

MDN örneğinde `en-US`, ABD İngilizcesi içeriği için kullanılan yol bölümüdür.

Başka bir dil tercihinde URL farklı olabilir.

Örneğin:

```text
https://developer.mozilla.org/fr/
```

Fransızca içerik yoluna işaret edebilir.

> **Not:** URL'lerde burada gösterilenden çok daha fazla bileşen bulunabilir; örneğin port, query string ve fragment. Daha ayrıntılı bilgi için [URL nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) sayfasını inceleyebilirsiniz.

### Biraz daha ayrıntılı URL örneği

Şu URL'yi ele alalım:

```text
https://shop.example.com/products/phone?color=black#reviews
```

Parçalar:

```text
https
```

→ protokol

```text
shop
```

→ alt alan adı

```text
example.com
```

→ ana alan adı

```text
/products/phone
```

→ path / yol

```text
?color=black
```

→ query string

```text
#reviews
```

→ fragment

Bu sayfada öğrenme hedefi özellikle protokol, alan adı, alt alan adı ve path kavramlarını tanımaktır.

## Tüm süreci bir araya getirelim

Bir kullanıcı şu URL'yi açtığında:

```text
https://developer.mozilla.org/en-US/
```

arka planda yüksek seviyede şu olaylar gerçekleşir:

```text
1. URL ayrıştırılır
        ↓
2. Alan adı DNS'e sorulur
        ↓
3. Sunucunun IP adresi bulunur
        ↓
4. Sunucu ile ağ bağlantısı kurulur
        ↓
5. HTTP/HTTPS isteği gönderilir
        ↓
6. Sunucu isteği işler
        ↓
7. HTTP durum kodu + header'lar + body gönderilir
        ↓
8. Veri paketler halinde taşınır
        ↓
9. İstemci paketleri yeniden birleştirir
        ↓
10. Tarayıcı gelen kaynakları işler
        ↓
11. Web sayfası görüntülenir
```

Bu zincirde:

```text
DNS
```

doğru sunucuyu bulmaya,

```text
IP
```

veriyi doğru hedefe yönlendirmeye,

```text
TCP
```

güvenilir veri aktarımına,

```text
HTTP/HTTPS
```

istemci–sunucu mesajlaşmasına,

```text
paketler
```

ise verilerin ağ üzerinde taşınmasına yardımcı olur.

## Ayrıca bakınız

Web'in ağ tarafını daha ayrıntılı öğrenmek için:

- [How the Internet works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
- [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [What is a domain name?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [IP address](https://developer.mozilla.org/en-US/docs/Glossary/IP_Address)
- [DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)

## Kaynak / credit

Kaynak MDN sayfasındaki yol fotoğrafı:

**“Street composing” — Kevin Digga**

MDN kaynak sayfasındaki kredi bilgisi temel alınmıştır.

Kullanılan MDN görselleri:

- [simple-client-server.png](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works/simple-client-server.png)
- [road.jpg](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works/road.jpg)

## Özet

Bu bölümde bir web sayfasının tarayıcı adres çubuğuna URL yazıldığı andan bilgisayarınızda görüntülenmesine kadar geçen sürecin yüksek seviyeli modelini öğrendiniz. Web'de kullanıcı tarafındaki cihaz ve tarayıcı **istemci**, web sitesi dosyalarını saklayan ve isteklere yanıt veren sistem ise **sunucu** olarak adlandırılır. İstemci sunucuya istek gönderir; sunucu da gerekli kaynakları yanıt olarak geri yollar.

Bu iletişim yalnızca istemci ve sunucudan ibaret değildir. **DNS**, insanların hatırlayabildiği `example.com` gibi alan adlarını makinelerin kullandığı IP adresleriyle eşleştirir. **TCP/IP**, verinin ağ üzerinde doğru hedefe ve güvenilir biçimde taşınmasına yardımcı olur. **HTTP/HTTPS** ise tarayıcı ile web sunucusunun hangi tür mesajlarla haberleşeceğini belirleyen protokoldür.

Veriler ağ üzerinde **paket** adı verilen küçük parçalara ayrılabilir. Her paket, yönlendirme ve sıralama bilgilerini içeren bir header ile gerçek veriyi taşıyan payload bölümüne sahiptir. Paketlerin ayrı ayrı taşınması, kaybolan parçaların yeniden gönderilebilmesini ve ağın farklı rotalarının verimli biçimde kullanılabilmesini sağlar.

HTTP tarafında istemci `GET` gibi metotlarla kaynak ister. Sunucu yanıtında bir **durum kodu**, çeşitli **HTTP header'ları** ve çoğu zaman bir **response body** gönderir. `200` başarıyı, `301` kalıcı yönlendirmeyi, `400` hatalı isteği, `403` erişim reddini, `404` bulunamayan kaynağı ve `503` geçici olarak kullanılamayan hizmeti ifade eden yaygın kodlardandır.

Son olarak bir URL'nin yalnızca bir alan adından ibaret olmadığını gördünüz. Örneğin `https://developer.mozilla.org/en-US/` adresinde `https` protokolü, `developer.mozilla.org` alan adını — içinde `developer` alt alan adını — ve `/en-US/` ise kaynak yolunu gösterir. Bu kavramları birlikte anlamak, ileride ağ hatalarını, HTTP isteklerini, API çağrılarını, deployment sorunlarını ve tarayıcı geliştirici araçlarındaki Network panelini çok daha rahat yorumlamanızı sağlar.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“How the web works”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) sayfasının konu sırası ve öğrenme hedefleri temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.
