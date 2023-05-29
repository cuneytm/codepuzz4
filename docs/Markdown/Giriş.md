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

Markdown web'e daha kolay okunur ve yazılır şekilde yazabilmeyi amaçlayarak John Gruber ve Aaron Swartz tarafından 2004 yılında yaratıldı.  Öncesinde kullanılan diğer formatların syntax (yazım şekilleri) 'lerindeki hantallık ve kullanım zorluğu böyle bir formatın doğmasına da ön ayak oldu.  

John Gruber'ın kendi sitesinde bir [manifesto](https://daringfireball.net/projects/markdown/ "Markdown Doğuyor") olarak yayınladığı kurallar ve açıklamalar gerekli teknik ihtiyaçları karşılamayınca Markdown'u bir standart çerçevesine oturtacak [CommonMark](https://commonmark.org) yayınlandı.  

## Nasıl Çalışıyor?  

MD Dökümanı >>> Markdown App >>> HTML >>> Rendelenmiş İnsan Gözüne Uygun Format :smile:  

Adım adım gidecek olursak;

* Markdown formatında döküman yazarsınız. Uzantısı **\.md** veya **\.markdown** olabilir.  

* Bu döküman hangi editör veya uygulama kullanıyorsanız onun Markdown işleyicisi ("Bazen TR'a çevirirken zorlanabiliyoruz") tarafından HTML formatına döndürülür.  

* HTML'e dönüş sonrası artık örneğin tarayıcınızdan yazdığınız dökümana bakabiliyorsunuz.  

:::info  
CommonMark sitesinde güzel bir .js sayfa var. MD'den HTML'e çevrimi gözlemleyebilemek için.  

Ayrıca Dillinger vs gibi göze hoş gelen birçok uygulamalar da kullanabilirsiniz.  

[CommonMark Playground](https://spec.commonmark.org/dingus/)  

[Dilinger](https://dillinger.io)
:::

## Kullanım Stratejisi

Çok fazla tarihsel bilgi ve standartlara dalmadan şunu kafamızda oturtmamız lazım;   

1. Markdown aslında CommMark ile her ne kadar bir standart'a kavuşmuş olsa da temel yazım kurallarını (syntax) öğrenmemiz gerekiyor. Sonraki bölümlerde bunları göreceksiniz.  Aklınıza takılan referans olarak yayınlanmış standart'a göz atabilirsiniz.  
👉️ [**CommonMark Latest version**](https://spec.commonmark.org/current/)

2. Markdown'ın hayatımıza kattıkları müthiş olsa da hala birçok noktada kimi organizasyonlar bunları da yeterli görmeyip kendilerine göre modifikasyonlar yapıyorlar. Buna "extended syntax" denildiği gibi GFM gibi [(Github Flavored Markdown)](https://github.github.com/gfm/) gibi isimlerde takılabiliyor.  

  > *GFM is a strict superset of CommonMark. All the features which are supported in GitHub user content and that are not specified on the original CommonMark Spec are hence known as extensions, and highlighted as such.*  
  
  **Markdown'ın temel syntax'ini(yazım kurallarını) mutlaka öğreneceğiz. Kullandığımız editöre ve portala göre de genişletilmiş ek kurallara bir göz atıp kullanacağız.**   

  Örneğin Github'daki reponuza README yazıyorsanız yukarıda verdiğim linkten dökümanınızda nasıl ek tatlar,aromalar kullanabileceğinize bakacaksınız.  
  
  ```> :bulb: **Tip:** Remember to appreciate the little things in life.```

  Çıktısı  

  > :bulb: **Tip:** Remember to appreciate the little things in life.  

  :::info  

  Codepuzz'da kullandığımız CMS platformu Docusaurus'un Markdown kullanımı için sunduğu olanaklara da şuradan göz atabilirsiniz.


