# Komut Satırı Hızlandırılmış Kursu

> **Kaynak:** [MDN Web Docs — Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)  
> **Türkçe sürüm:** Kaynak sayfadaki konu sırasını, örnek komutları, görsellerin konumlarını ve uygulama akışını izleyen; anlatımı özgünleştirilmiş ayrıntılı Türkçe çalışma rehberidir.  
> **Kaynak sayfanın son güncellenme tarihi:** 12 Eylül 2026

Web geliştirme sırasında er ya da geç terminalde komut çalıştırmanız gerekir. Terminal; dosyalar arasında gezinmek, geliştirme araçlarını başlatmak, paket kurmak, kod biçimlendirmek, projeleri derlemek ve otomasyon görevlerini yürütmek için kullanılan temel araçlardan biridir.

Bu bölümde terminale nasıl erişileceğini, günlük kullanımda işinize yarayacak temel Unix komutlarını, komut seçeneklerini, pipe (`|`) ile komutları birbirine bağlamayı ve npm üzerinden bir CLI aracı kurup çalıştırmayı öğreneceksiniz.

|  |  |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web geliştirmede kullanılan temel yazılımlara ve dosya sistemlerine temel düzeyde aşina olmak. |
| **Öğrenme çıktıları:** | • Komut satırının ne olduğunu ve neler için kullanılabileceğini anlamak.<br>• Linux/Unix, macOS ve Windows'ta terminale nasıl erişileceğini bilmek.<br>• Önceki komutlara ulaşma ve otomatik tamamlama gibi temel klavye kolaylıklarını kullanmak.<br>• `cd`, `ls`, `mkdir`, `touch`, `grep`, `cat`, `mv`, `cp` gibi temel komutları tanımak.<br>• Komut seçenekleri/flag'leriyle çalışmak. |

## Bu makalede

- [Terminale hoş geldiniz](#terminale-hoş-geldiniz)
- [Temel yerleşik terminal komutları](#temel-yerleşik-terminal-komutları)
- [Terminal — tehlikeli olabilir mi?](#terminal--tehlikeli-olabilir-mi)
- [Komutları pipe ile birbirine bağlama](#komutları-pipe-ile-birbirine-bağlama)
- [Biraz daha karmaşık bir örnek](#biraz-daha-karmaşık-bir-örnek)
- [Yeni araçlarla terminali güçlendirme](#yeni-araçlarla-terminali-güçlendirme)
- [Deneyebileceğiniz diğer araçlar](#deneyebileceğiniz-diğer-araçlar)
- [Özet](#özet)

## Terminale hoş geldiniz

**Terminal**, metin tabanlı programları komut yazarak çalıştırmanızı sağlayan bir arayüzdür. Web geliştirme araçlarının önemli bir bölümü **CLI (Command-Line Interface / Komut Satırı Arayüzü)** üzerinden kullanılabilir.

Bazı CLI araçları işletim sisteminizle birlikte gelir. Bazıları ise npm, Homebrew, apt veya benzeri paket yöneticileri ve paket kayıt sistemleri üzerinden ayrıca kurulabilir.

Terminal ilk açıldığında çoğu kullanıcı için oldukça sade görünür: metinler, bir komut istemi ve yanıp sönen bir imleç. Grafiksel uygulamalarda bulunan düğmeler ve menüler olmadığı için başlangıçta yabancı gelebilir. Buna rağmen birkaç temel komut öğrendiğinizde özellikle tekrarlanan işlemleri çok hızlı yapabilmeniz önemli bir avantaj sağlar.

### Terminal nereden geldi?

Modern terminal uygulamaları, bilgisayar kullanımının erken dönemlerindeki fiziksel terminallerin günümüzdeki yazılımsal devamıdır.

Bugün terminal;

- masaüstü işletim sistemlerinde,
- uzak sunucularda,
- bulut ortamlarında,
- Raspberry Pi gibi küçük bilgisayarlarda,
- mobil ve gömülü sistemlerde

karşınıza çıkabilir.

Terminalin en güçlü yönlerinden biri **otomasyon**dur. Örneğin yüzlerce dosyayı tek tek yeniden adlandırmak yerine doğru hazırlanmış bir komut veya betikle bu işlem birkaç saniyede tamamlanabilir.

### Terminal nasıl görünür?

Windows'ta birden fazla komut satırı ortamı bulunur. Bunların arasında klasik **Command Prompt (`cmd`)**, **PowerShell**, **Windows Terminal** ve Linux tabanlı araçlar sağlayabilen **WSL** yer alır.

![Windows üzerinde Command Prompt ve PowerShell örnekleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/win-terminals.png)

macOS'ta yerleşik **Terminal** uygulaması bulunur.

![macOS Terminal uygulaması](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/mac-terminal.png)

Terminalin görünümü kullanılan işletim sistemi, shell, tema ve yapılandırmaya göre değişebilir. Komutların başında görünen metinlere genel olarak **prompt (komut istemi)** denir.

### Terminale nasıl erişilir?

#### Linux/Unix

Linux dağıtımlarının büyük çoğunluğunda bir terminal uygulaması hazır olarak gelir. Uygulamalar menüsünde genellikle **Terminal**, **Console**, **Konsole** veya benzer adlarla bulunur.

Dağıtıma göre varsayılan shell Bash, Zsh veya başka bir seçenek olabilir.

#### macOS

macOS, Unix temelli bir altyapıya sahiptir ve geliştirme için gereken pek çok Unix aracını kullanabilir.

Yerleşik terminal uygulamasının yolu:

```text
Applications/Utilities/Terminal
```

Spotlight üzerinden `Terminal` yazarak da hızlı biçimde açabilirsiniz.

#### Windows

Windows'ta birkaç farklı seçenek vardır.

**Command Prompt (`cmd`)**  
Windows'un geleneksel komut istemidir. Birçok temel işlem yapılabilir; ancak Unix eğitimlerinde geçen komutlarla birebir uyumlu değildir.

**PowerShell**  
Windows yönetimi ve otomasyonu için güçlü bir shell ve betik ortamıdır.

**Git Bash**  
Git for Windows kurulumu ile birlikte gelebilen ve Bash'e benzeyen bir ortamdır.

**Windows Subsystem for Linux (WSL)**  
Windows içinde gerçek bir Linux dağıtımı çalıştırmaya imkân verir. Böylece Linux eğitimlerinde kullanılan Bash ve Unix araçlarını Windows üzerinde kullanabilirsiniz.

MDN'nin bu eğitim akışı, Windows kullanıcılarının Unix tabanlı geliştirme araçlarıyla daha uyumlu bir deneyim elde edebilmesi için WSL'i öne çıkarır.

[Windows Subsystem for Linux belgeleri](https://learn.microsoft.com/windows/wsl/)

![Windows Subsystem for Linux dokümantasyonu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/wsl.png)

> **Not:** Bu rehberdeki komutların büyük bölümü Unix/Bash davranışını temel alır. Yalnızca klasik Windows `cmd` kullanıyorsanız bazı komutların karşılığı farklıdır.

#### Yan not: Komut satırı ile terminal arasındaki fark nedir?

Günlük konuşmada **terminal** ve **komut satırı** ifadeleri çoğu zaman aynı anlamda kullanılır. Teknik açıdan ise aralarında fark vardır:

- **Terminal:** Shell'i çalıştıran ve onunla etkileşim kurmanızı sağlayan uygulamadır.
- **Shell:** Yazdığınız komutları yorumlayan çalışma ortamıdır. Bash, Zsh ve PowerShell shell örnekleridir.
- **Command line / komut satırı:** Komutu yazdığınız metin satırıdır.

Başlangıç seviyesinde bu terimleri her zaman kesin sınırlarla ayırmanız gerekmez; ancak ileride dokümantasyon okurken farkı bilmeniz yararlı olacaktır.

### Terminali kullanmak zorunda mısınız?

Modern kod düzenleyiciler birçok işlemi arayüz veya eklenti üzerinden yapmanıza izin verir. Örneğin VS Code içinde:

- Git işlemleri,
- paket komutları,
- yerel geliştirme sunucuları,
- görev çalıştırma,
- kod biçimlendirme

gibi işlemler için grafiksel arayüzler bulunabilir.

Bununla birlikte her araç için bir eklenti bulunmaz. Ayrıca hata ayıklarken veya dokümantasyondaki örnekleri uygularken doğrudan terminal kullanmanız sık sık gerekir. Bu nedenle en azından temel seviyede terminal kullanımına alışmak web geliştirme için oldukça değerlidir.

## Temel yerleşik terminal komutları

Terminal üzerinden yapılabilecek günlük işlemlerden bazıları şunlardır:

| Amaç | Komut |
| --- | --- |
| Dizinler arasında gezinme | `cd` |
| Dizin içeriğini listeleme | `ls` |
| Yeni dizin oluşturma | `mkdir` |
| Boş dosya oluşturma / zaman bilgisini güncelleme | `touch` |
| Dosya veya dizin kopyalama | `cp` |
| Dosya veya dizin taşıma / yeniden adlandırma | `mv` |
| Dosya veya dizin silme | `rm` |
| URL'den veri alma | `curl` |
| Metin içinde arama | `grep` |
| Dosya içeriği görüntüleme | `cat`, `less` |
| Metin akışlarını dönüştürme | `awk`, `tr`, `sed` |

> **Not:** Bu bölüm terminalin yalnızca temel bir tanıtımıdır. Her komutun çok sayıda ek seçeneği ve gelişmiş kullanım biçimi vardır.

Devam etmeden önce terminalinizi açın.

### Komut satırında gezinme

Terminal açıldığında çoğu sistem sizi kullanıcı hesabınızın **Home dizininde** başlatır.

Grafiksel dosya yöneticilerinde kullandığımız **klasör** kelimesinin komut satırındaki karşılığı çoğunlukla **directory (dizin)** şeklinde geçer. Günlük kullanımda bu iki ifade büyük ölçüde aynı kavramı anlatır.

#### `cd` — dizin değiştirme

`cd`, **change directory** ifadesinin kısaltmasıdır.

Örneğin Home dizininizden Desktop dizinine geçmek için:

```bash
cd Desktop
```

Windows terminallerinde veya farklı işletim sistemi yapılandırmalarında klasör adları farklı olabilir.

![Windows terminallerinde `cd Desktop` kullanım örneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/win-terminals-cd.png)

Bir üst dizine dönmek için:

```bash
cd ..
```

Buradaki `..`, geçerli dizinin üst dizinini ifade eder.

#### Tab ile otomatik tamamlama

Terminalde çok kullanışlı bir alışkanlık:

```text
Tab
```

tuşunu kullanmaktır.

Örneğin bulunduğunuz dizinde `Desktop` varsa:

```text
cd D
```

yazdıktan sonra `Tab` tuşuna basmanız shell'in adı otomatik tamamlamasını sağlayabilir.

Bu özellikle uzun klasör ve dosya adlarında hem zaman kazandırır hem de yazım hatalarını azaltır.

#### Önceki komutlara dönme

Çoğu shell'de:

```text
↑
```

tuşuna basarak daha önce çalıştırdığınız komutlara geri dönebilirsiniz.

Tekrar tekrar yazmak yerine eski komutu çağırıp düzenleyerek yeniden çalıştırabilirsiniz.

#### İç içe dizinlere tek komutla geçmek

Şöyle bir yapı düşünün:

```text
Desktop/
└── project/
    └── src/
```

Home dizininden adım adım ilerleyebilirsiniz:

```bash
cd Desktop
cd project
cd src
```

Ancak tek komutla da aynı yere ulaşabilirsiniz:

```bash
cd Desktop/project/src
```

Unix tabanlı sistemlerde `/` yol ayırıcı olarak kullanılır.

Bir yolun başında `/` varsa genellikle **mutlak yol** ifade eder:

```text
/Users/kullanici/Desktop
```

Başında `/` yoksa yol genellikle bulunduğunuz dizine göre **göreli (relative)** olarak yorumlanır.

> **Windows notu:** Klasik Windows yolları genellikle ters eğik çizgi (`\`) kullanır:
>
> ```text
> Desktop\project\src
> ```
>
> Bash/WSL gibi Unix tabanlı ortamlarda ise `/` kullanılır.

### Dizin içeriğini listeleme

Unix sistemlerinde bulunduğunuz dizindeki öğeleri görüntülemek için:

```bash
ls
```

komutunu kullanabilirsiniz.

Klasik Windows `cmd` ortamındaki yaklaşık karşılığı:

```text
dir
```

`ls` temel biçimi yalnızca dosya ve dizin adlarını gösterir. Daha ayrıntılı bilgi almak için seçenekler kullanabilirsiniz.

### Komut seçeneklerine giriş

Komutların davranışını değiştiren eklere genellikle **option**, **flag** veya **switch** denir.

Unix komutlarında kısa seçenekler çoğunlukla `-` karakteriyle başlar:

```bash
ls -l
```

Buradaki:

```text
-l
```

uzun liste biçimini etkinleştirir.

Sonuçta her öğe ayrı satırda görünür ve izinler, sahiplik, boyut ve zaman bilgileri gibi ek ayrıntılar gösterilebilir.

![macOS terminallerinde `ls -l` çıktısı](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/mac-terminals-ls.png)

#### `man` ile yardım almak

Unix tabanlı sistemlerde birçok komut için kullanım kılavuzu bulunur.

Örneğin:

```bash
man ls
```

`ls` komutunun **manual page (man sayfası)** içeriğini açar.

Çoğu sistemde görüntüleyiciden çıkmak için:

```text
q
```

tuşuna basabilirsiniz.

Birden fazla kısa seçenek çoğu zaman birleştirilebilir:

```bash
ls -lah
```

veya:

```bash
ls -ltrh
```

Bu seçeneklerin anlamını `man ls` üzerinden inceleyebilirsiniz.

> **İpucu:** Yeni bir komut öğrendiğinizde yalnızca örnekleri kopyalamak yerine `--help`, `-h` veya `man` ile yardım sayfasına bakmayı alışkanlık haline getirin.

### Oluşturma, kopyalama, taşıma ve silme

Aşağıdaki komutları yalnızca test amacıyla oluşturduğunuz güvenli bir dizinde deneyin.

#### `mkdir` — dizin oluşturma

```bash
mkdir my-awesome-website
```

`my-awesome-website` adında yeni bir dizin oluşturur.

#### `rmdir` — boş dizin silme

```bash
rmdir my-awesome-website
```

Dizin boşsa onu kaldırır.

Dolu bir dizini Unix sistemlerinde `rm -r` ile silebilirsiniz; ancak bu çok daha risklidir:

```bash
rm -r my-awesome-website
```

> **Uyarı:** `rm -r` dizinin içeriğini geri dönüşüm kutusuna göndermeden kalıcı olarak silebilir. Hedef yolu çalıştırmadan önce mutlaka kontrol edin.

#### `touch` — boş dosya oluşturma

```bash
touch mdn-example.md
```

Bulunduğunuz dizinde `mdn-example.md` adında boş bir dosya oluşturur.

#### `mv` — taşıma veya yeniden adlandırma

```bash
mv mdn-example.md mdn-example.txt
```

Aynı dizinde çalıştırıldığında dosyanın adını değiştirmiş olursunuz.

Başka bir yol verirseniz dosyayı farklı dizine taşıyabilirsiniz:

```bash
mv mdn-example.txt backup/
```

#### `cp` — kopyalama

```bash
cp mdn-example.txt mdn-example.txt.bak
```

Dosyanın bir kopyasını oluşturur.

Bir dizini ve içeriğini kopyalamak için genellikle:

```bash
cp -r kaynak-dizin hedef-dizin
```

kullanılır.

#### `rm` — dosya silme

```bash
rm mdn-example.txt
```

dosyayı siler.

> **Uyarı:** Terminal üzerinden `rm` ile yapılan silme işlemleri masaüstü geri dönüşüm kutusuna gitmeyebilir. Silmeden önce dosya adını ve bulunduğunuz dizini kontrol edin.

#### Joker karakterler

Shell'ler çoğunlukla `*` karakterini joker karakter olarak yorumlar.

Örneğin:

```bash
rm mdn-*
```

adı `mdn-` ile başlayan çok sayıda dosyayla eşleşebilir.

Benzer biçimde:

```bash
rm mdn-*.bak
```

adı `mdn-` ile başlayıp `.bak` ile biten öğelerle eşleşebilir.

> **Çok önemli:** Joker karakterlerle birlikte silme komutları kullanmak güçlü ama tehlikelidir. Önce hedefleri görmek için aynı kalıbı `ls` ile kontrol etmek iyi bir alışkanlıktır:
>
> ```bash
> ls mdn-*.bak
> ```
>
> Sonuç doğruysa silme komutuna geçebilirsiniz.

## Terminal — tehlikeli olabilir mi?

Terminal büyük güç sağlar; aynı nedenle dikkatsiz kullanıldığında dosyalarınıza zarar vermek de kolaydır.

Örneğin binlerce dosya arasında belirli bir kalıpla toplu silme yapıyorsanız küçük bir yazım hatası beklediğinizden çok daha fazla dosyanın silinmesine neden olabilir.

Güvenli çalışma için şu alışkanlıkları benimseyin:

1. Karmaşık komutu önce bir metin düzenleyicide hazırlayın.
2. Hangi dizinde olduğunuzu kontrol edin.
3. Mümkünse hedef dosyaların yedeğini alın.
4. Komutun silme yapmayan bir sürümünü önce deneyin.
5. Joker karakterlerle eşleşen dosyaları önceden listeleyin.
6. İnternetten kopyaladığınız ve anlamadığınız komutları doğrudan çalıştırmayın.
7. Özellikle `sudo`, `rm -r`, `rm -rf` ve disk/izin işlemleri içeren komutlarda ekstra dikkatli olun.

Kendi bilgisayarınızda denemek istemiyorsanız güvenli çevrimiçi terminal ortamlarını kullanabilirsiniz:

- [Scrimba — Command Line Basics](https://scrimba.com/)
- [sandbox.bio Command-line playground](https://sandbox.bio/)
- [tldr.sh](https://tldr.sh/) — komutların kısa ve örnek odaklı açıklamalarını sunar.

## Komutları pipe ile birbirine bağlama

Unix komut satırının en güçlü özelliklerinden biri, küçük araçları bir araya getirerek daha gelişmiş işlemler oluşturabilmenizdir.

Bunun için:

```text
|
```

işareti kullanılır. Buna **pipe** denir.

Önce dizin içeriğini listeleyelim:

```bash
ls
```

Şimdi `wc` komutuna bakalım. `wc`, metin içindeki satır, kelime veya karakter gibi öğeleri sayabilir.

Bir dosyanın satır sayısını görmek için:

```bash
wc -l myfile.txt
```

kullanılabilir.

`ls` çıktısını doğrudan `wc` komutuna gönderebiliriz:

```bash
ls | wc -l
```

Mantık şöyledir:

```text
ls çıktısı
    ↓
    |
    ↓
wc -l girdisi
    ↓
satır sayısı
```

Unix programları genellikle çıktıyı **standard output (`STDOUT`)** kanalına yazar. Birçok program da **standard input (`STDIN`)** üzerinden veri okuyabilir.

Pipe, bir komutun çıktısını sonraki komutun girdisine bağlar:

```text
komut1 | komut2 | komut3
```

Bu yaklaşım küçük ve tek amaçlı araçları birleştirerek karmaşık işlemler kurmanızı sağlar.

## Biraz daha karmaşık bir örnek

Şimdi `curl`, `grep` ve `awk` komutlarını bir arada kullanalım.

> **Not:** Aşağıdaki URL ve yönlendirme davranışı zaman içinde değişebilir. Amaç burada belirli çıktıyı ezberlemek değil, komutların nasıl zincirlendiğini anlamaktır.

### 1. `curl` ile URL istemek

`curl`, HTTP dahil çeşitli protokoller üzerinden veri istemek için kullanılan yaygın bir komut satırı aracıdır.

Örneğin:

```bash
curl https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Bir URL'nin içeriğini terminale yazdırmayı deneyebilir.

Sayfa başka bir adrese yönlendiriliyorsa yönlendirmeleri takip etmek için `-L` seçeneği kullanılabilir:

```bash
curl -L https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

### 2. Başlıkları inceleyip `grep` ile filtrelemek

Yalnızca HTTP başlıklarını görmek için `-I` seçeneği kullanılabilir:

```bash
curl -L -I https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Çıktıda yalnızca `location` içeren satırları görmek için pipe ile `grep` bağlanabilir:

```bash
curl -L -I https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch | grep -i location
```

Burada:

- `curl` HTTP isteğini yapar.
- `-L` yönlendirmeleri takip eder.
- `-I` yalnızca başlıkları ister.
- `|` çıktıyı sonraki araca gönderir.
- `grep -i location` içinde `location` geçen satırları seçer.

### 3. `awk` ile çıktıyı dönüştürmek

Bir sonraki adımda `awk` kullanarak filtrelenmiş metni farklı biçime dönüştürebiliriz.

Örnek:

```bash
curl -L -I https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch \
  | grep -i location \
  | awk '{ print "https://developer.mozilla.org" $2 }'
```

`awk` burada her satırdaki ikinci alanı (`$2`) alır ve önüne alan adını eklemeye çalışır.

Bu örneğin önemli tarafı çıktıdan çok şu fikirdir:

```text
veriyi al → filtrele → dönüştür
```

Terminal araçlarının birlikte kullanılması özellikle günlük geliştirme, sunucu yönetimi ve otomasyonda çok güçlüdür.

## Yeni araçlarla terminali güçlendirme

İşletim sisteminizde hazır gelen komutların yanında üçüncü taraf CLI araçları da kurabilirsiniz.

Ön uç geliştirmede önemli paket ekosistemlerinden biri [npm](https://www.npmjs.com/)'dir.

npm genellikle [Node.js](https://nodejs.org/) ile birlikte kurulur. Node.js kurulunca çoğu ortamda şu araçlara da erişirsiniz:

```text
node
npm
npx
```

Node.js'i işletim sisteminize uygun yöntemle kurun ve ardından terminalde sürümleri kontrol edin:

```bash
node --version
npm --version
```

Bir sürüm numarası görüyorsanız komutlar terminal tarafından bulunabiliyor demektir.

![Windows Node.js kurulumunda npm seçeneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/npm-install-option.png)

Bu bölümde örnek CLI aracı olarak [Prettier](https://prettier.io/) kullanacağız.

> **Not:** Prettier, HTML, CSS, JavaScript, JSON ve başka birçok dosya türünün biçimini otomatik olarak düzenleyebilen bir kod biçimlendiricisidir.

### CLI araçlarını nereye kurmalıyız?

npm paketleri genel olarak iki farklı biçimde kurulabilir:

- **Global:** Sistemin genelinde erişilebilir.
- **Yerel:** Belirli bir proje klasörüne bağımlılık olarak kurulur.

#### Global kurulumun avantajları

- Terminalin farklı konumlarından kolayca çalıştırılabilir.
- Aracı tek kez kurmanız yeterlidir.
- Aynı global sürüm tüm projelerde kullanılabilir.

#### Global kurulumun olası sorunları

- Projenin ihtiyaç duyduğu sürümle bilgisayarınızdaki global sürüm uyuşmayabilir.
- Takım arkadaşlarınız sizin global araçlarınıza otomatik olarak sahip olmaz.
- Projeyi başka bir bilgisayarda aynı biçimde yeniden kurmak zorlaşabilir.
- Farklı projeler farklı sürümler gerektirebilir.

Bu nedenlerle proje araçlarını çoğu zaman **yerel proje bağımlılığı** olarak kurmak daha tekrarlanabilir bir geliştirme ortamı sağlar.

### Prettier'ı kurma

Önce bir çalışma klasörü oluşturun:

```bash
mkdir prettier-test
cd prettier-test
```

npm proje dosyası oluşturmak için:

```bash
npm init -y
```

Ardından Prettier'ı geliştirme bağımlılığı olarak yükleyin:

```bash
npm install --save-dev prettier
```

Kurulumdan sonra proje klasörünüzde şu öğeleri görebilirsiniz:

```text
prettier-test/
├── node_modules/
├── package.json
└── package-lock.json
```

Yerel olarak kurulan Prettier'ı `npx` aracılığıyla çalıştırabilirsiniz:

```bash
npx prettier --help
```

veya:

```bash
npx prettier
```

Yardım metni aracın kabul ettiği seçenekleri ve kullanım biçimlerini gösterir.

> **İyi uygulama:** Yeni bir CLI aracını kullanmaya başlamadan önce en azından `--help` çıktısını hızlıca gözden geçirin.

> **Not:** `npx` bazı durumlarda sisteminizde yerel olarak bulunmayan bir paketi geçici olarak indirip çalıştırabilir. Projede sürüm tutarlılığı istiyorsanız aracın proje bağımlılığı olarak açıkça kurulu olması daha güvenlidir.

### Prettier ile deneme

Şimdi küçük bir JavaScript dosyası üzerinde Prettier'ı deneyelim.

`prettier-test` klasörünün içinde:

```text
index.js
```

dosyasını oluşturun.

İçine kasıtlı olarak düzensiz biçimlendirilmiş şu kodu yazın:

```js
const myObj={a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

#### Biçim kontrolü

Önce yalnızca biçim sorunlarını kontrol edin:

```bash
npx prettier --check index.js
```

Prettier dosyanın kendi biçim kurallarına uyup uymadığını kontrol eder ancak bu komutla dosyayı değiştirmez.

#### Dosyayı otomatik biçimlendirme

Sorunları doğrudan dosyaya uygulamak için:

```bash
npx prettier --write index.js
```

kullanın.

Dosya daha düzenli bir biçime dönüşecektir:

```js
const myObj = { a: 1, b: { c: 2 } };

function printMe(obj) {
  console.log(obj.b.c);
}

printMe(myObj);
```

Prettier'ın asıl gücü bu işlemin otomatikleştirilebilmesidir. Örneğin araç:

- kod düzenleyicide dosya kaydedildiğinde,
- Git commit öncesinde,
- CI (Continuous Integration) sürecinde

otomatik olarak çalıştırılabilir.

Böylece ekipteki herkesin kod biçimi daha tutarlı tutulabilir.

## Deneyebileceğiniz diğer araçlar

Terminale alışmaya başladıktan sonra şu araçları da inceleyebilirsiniz:

### `bat`

[`bat`](https://github.com/sharkdp/bat), `cat` benzeri dosya görüntüleme aracıdır; genellikle sözdizimi vurgulama ve daha okunabilir çıktı gibi ek özellikler sunar.

```bash
bat index.js
```

### `prettyping`

[`prettyping`](https://denilson.sa.nom.br/prettyping/), klasik `ping` komutunun daha görsel çıktılar sunan bir alternatifidir.

### `htop`

[`htop`](https://htop.dev/), çalışan işlemleri ve sistem kaynak kullanımını terminalde interaktif biçimde görüntülemeyi sağlar.

### `tldr`

[`tldr`](https://tldr.sh/), uzun manual sayfaları yerine yaygın komut kullanım örneklerini kısa biçimde gösterir.

Örneğin kuruluysa:

```bash
tldr tar
```

gibi bir komutla `tar` için sık kullanılan örnekleri görebilirsiniz.

> **Not:** Bu araçların kurulum yöntemi işletim sistemine göre değişebilir. npm, Homebrew, apt, winget veya başka bir paket yöneticisi kullanılabilir. Kurulumdan önce aracın resmi belgelerini kontrol edin.

## Özet

Bu bölümde komut satırının web geliştirme açısından neden önemli olduğunu ve temel çalışma mantığını öğrendiniz. Terminal, grafiksel uygulamalar yerine metin komutları kullanarak dosya sistemine ve geliştirme araçlarına erişmenizi sağlar. Linux ve macOS doğal olarak güçlü Unix tabanlı terminal ortamları sunarken Windows'ta Command Prompt, PowerShell, Git Bash ve WSL gibi farklı seçenekler bulunur. Günlük web geliştirme eğitimlerinde Unix komutları çok yaygın olduğu için Bash veya WSL gibi Unix uyumlu bir ortam kullanmak işleri kolaylaştırabilir.

Temel dosya işlemleri için `cd`, `ls`, `mkdir`, `touch`, `mv`, `cp` ve `rm` gibi komutları tanıdınız. `Tab` ile otomatik tamamlama ve yukarı ok ile komut geçmişine erişme gibi küçük klavye alışkanlıkları terminal kullanımını önemli ölçüde hızlandırır. Komutların davranışını değiştirmek için `-l`, `-r`, `--help` gibi seçenekler kullanılabilir; Unix sistemlerinde `man` komutu daha ayrıntılı kullanım bilgisine ulaşmak için yararlıdır.

Terminalde dikkatli olmak önemlidir. Özellikle `rm`, özyinelemeli silme ve joker karakter içeren komutlar çok sayıda dosyada geri alınamayacak değişiklikler yapabilir. Karmaşık bir komutu önce güvenli bir test klasöründe denemek, hedef dosyaları listelemek ve yedek almak iyi bir çalışma alışkanlığıdır.

Ayrıca `|` pipe operatörü sayesinde bir komutun çıktısını başka bir komuta aktarabileceğinizi gördünüz. `ls | wc -l` gibi basit örneklerden `curl | grep | awk` gibi zincirlere kadar bu yöntem, küçük CLI araçlarını birleştirerek güçlü veri işleme ve otomasyon görevleri oluşturmanıza imkân verir.

Son olarak Node.js ile gelen npm/npx ekosistemi üzerinden üçüncü taraf CLI araçlarının kurulabileceğini ve Prettier gibi bir aracın proje içinde yerel bağımlılık olarak kullanılabileceğini gördünüz. Terminali tamamen ezberlemek gerekmiyor; önemli olan temel komutlara alışmak, yardım belgelerini nasıl bulacağınızı bilmek ve yeni araçlarla karşılaştığınızda çalışma mantığını anlayabilecek bir temel oluşturmaktır.

---

## Kaynak ve atıf

Bu çalışma, MDN Web Docs üzerindeki [“Command line crash course”](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) sayfasındaki eğitim kapsamı ve bölüm sırası temel alınarak hazırlanmış özgün Türkçe çalışma rehberidir.

### Kaynak sayfadaki görseller

- [Windows terminalleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/win-terminals.png)
- [macOS Terminal](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/mac-terminal.png)
- [WSL dokümantasyonu](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/wsl.png)
- [`cd Desktop` Windows terminal örnekleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/win-terminals-cd.png)
- [`ls -l` macOS terminal örnekleri](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/mac-terminals-ls.png)
- [Node.js/npm kurulum seçeneği](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line/npm-install-option.png)

### İlgili kaynaklar

- [Windows Subsystem for Linux](https://learn.microsoft.com/windows/wsl/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Prettier](https://prettier.io/)
- [tldr](https://tldr.sh/)
- [htop](https://htop.dev/)
