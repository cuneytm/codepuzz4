---
sidebar_position: 1
description:  Bu bölümde Markdown'a ilişkin genel bilgiler bulunur
tags:
  - Başlangıç
  - GenelBilgiler
  - İlkSayfalar
  - Markdown
  - Formatlar
---  

## Kısa Tarihçe - Standartlaşma?

Markdown web'e daha kolay okunur ve yazılır şekilde yazabilmeyi amaçlayarak John Gruber ve Aaron Swartz tarafından 2004 yılında yaratıldı.  Öncesinde kullanılan diğer formatların syntax (yazım şekilleri) 'lerindeki hantallık ve kullanım zorluğu böyle bir formatın doğmasına ön ayak oldu.  

John Gruber'ın kendi sitesinde bir [manifesto](https://daringfireball.net/projects/markdown/ "Markdown Doğuyor") olarak yayınladığı kurallar ve açıklamalar gerekli teknik ihtiyaçları karşılamayınca Markdown'u bir standart çerçevesine oturtacak [CommonMark](https://commonmark.org) yayınlandı.  

## Nasıl Çalışıyor?  

MD Dökümanı >>> Markdown App >>> HTML >>> Rendelenmiş İnsan Gözüne Uygun Format :smile:  

Adım adım gidecek olursak;

* Markdown formatında döküman yazarsınız.  Bilgisayaranızda bir text dosyası açıp uzantısını **\.md** veya **\.markdown** olarak belirleyip kaydedebilirsiniz.

* Bu döküman hangi editör veya uygulama kullanıyorsanız onun Markdown işleyicisi ("Bazen TR'a çevirirken zorlanabiliyoruz") tarafından HTML formatına döndürülür.  (Bilgisayarınızaa kurabileceğiniz bazı Markdown editörler - Vscode, xcode, sublime text,notepad++ vs.)  

* Birçok içerik yönetim platformu (Şu anda kullanmakta olduğumuz Docusaurus, MkDocs, Ghots vb.) üzerlerine attığınız markdown dökümanlarını html olarak çevirip web servisleri üzerinden yayınlayabilmektedirler.  

:::info  

Online çalışan Markdown editörleri;

CommonMark sitesinde güzel bir .js sayfa var. MD'den HTML'e çevrimi gözlemleyebilemek için.  

Ayrıca Dillinger vs gibi göze hoş gelen birçok uygulamalar da kullanabilirsiniz.  

[CommonMark Playground](https://spec.commonmark.org/dingus/)  

[Dilinger](https://dillinger.io)
:::

## Kullanım Stratejisi

Çok fazla tarihsel bilgi ve standartlara dalmadan şunu kafamızda oturtmamız lazım;   

1. Markdown aslında CommMark ile her ne kadar bir standart'a kavuşmuş olsa da temel yazım kurallarını (basic syntax) öğrenmemiz gerekiyor. Sonraki bölümlerde bunları göreceksiniz.  Bunların ne olduklarını detaylı olarak görmek ve aklınıza takılanlara bakmak için yayınlanmış standart'a göz atabilirsiniz.  
👉️ [**CommonMark Latest version**](https://spec.commonmark.org/current/)

2. Temel yazım kuralları için belirlenen standart bazı organizasyonlar veya platformlar tarafından yeterli görülmeyip bu standart çeşitli eklentilerle genişletiliyor. Bu tip modifiye edilmiş Markdown kuralları da genelde "extended syntax" veya farklı bir takım isimlerle nitelendiriliyor.  GFM gibi [(Github Flavored Markdown)](https://github.github.com/gfm/)

  > *GFM is a strict superset of CommonMark. All the features which are supported in GitHub user content and that are not specified on the original CommonMark Spec are hence known as extensions, and highlighted as such.*  
  
  **Nasıl bir öğrenim stratejisi izlememiz gerekli?**  
  
    * İlk adım olarak Markdown'ın temel yazım kurallarını (basic syntax) mutlaka öğreneceğiz.   

    * Kullandığımız editöre ve portala göre de genişletilmiş ek kurallara bir göz atıp kullanacağız.**   

    Örneğin Github'daki reponuza README yazıyorsanız yukarıda verdiğim linkten dökümanınızda nasıl ek tatlar,aromalar kullanabileceğinize bakacaksınız.  
    
    ```> :bulb: **Tip:** Remember to appreciate the little things in life.```

    Çıktısı  

    > :bulb: **Tip:** Remember to appreciate the little things in life.  

  :::info  

  Codepuzz'da kullandığımız CMS platformu Docusaurus'un Markdown kullanımı için sunduğu olanaklara da şuradan göz atabilirsiniz. [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)


