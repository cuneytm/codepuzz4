---
sidebar_position: 3
description:  Döküman İçerisinde Link Vermeyi İnceleyeceğiz
tags:
  - Font
  - Markdown
  - Formatlar
---  

**Yazının refere ettiği bir link yaratma;**

Döküman içerisinde link vermek için kullandığımız format şudur;

```[Link Etiketi](url)```  

Örnek;  

```[Buraya Tıklayabilirsiniz!](www.codepuzz.com)``` >>> [Buraya Tıklayabilirsiniz!](www.codepuzz.com)

**Resim Linki Verme** 

Yukarıdaki kullandığımız link formatının başına sadece ! ekliyoruz.  

```![Internet Ikonu](https://icons8.com/icon/53372/internet)``` >>> ![Internet Ikonu](./icons8-internet-50.png)  

Burada her zaman internet üzerinde geçerli bir url'e atıfta yaparak link vermek zorunda değilsiniz. Sunucunuz üzerindeki bir klasörde bulunan resim, doküman vb. bir dosyaya da atıf yapabilirsiniz. Örnek;

```![Internet Ikonu](./icons8-internet-50.png)```  

:::tip İpucu
Karşımıza çok çıktığı için yerel klasördeki dosyalar için şu kullanımı aklımızda tutalım.  ```./<dosya_adı>``` Bulunduğunuz klasörü ```../<dosya_adı>``` bir üst klasörü ifade eder.  Bunu şu şekilde de abartabiliriz. ```../../<dosya_adı>```  bir üst klasörün üst klasörü şeklinde.  

Vscode kullanıyorsanız burada size bir kolaylık sağlanacağını da şu şekilde görebilirsiniz.  

![vscode_directory](./vscode_directory.png)  

:::