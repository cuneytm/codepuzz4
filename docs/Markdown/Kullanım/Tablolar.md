---
sidebar_position: 6
description:  Tablo oluşturmayı ve Formatlarını İnceleyeceğiz
tags:
  - Font
  - Markdown
  - Formatlar
---
Temel Markdown yazım kuralları içerisinde tablolar için bir başlık bulunmamakla beraber birçok editör tarafından desteklenen genişletilmiş Markdown (extended Markdown) kuralları ile tablo oluşturmak mümkündür.  [Detaylı bilgi için!](https://www.markdownguide.org/extended-syntax/)

## Tabloları nasıl oluşturuyoruz  

Aslında gayet basit bir kullanım şekli var. Pipe `|` ve hyphen `-` karakterlerini kullanmak yeterli oluyor.  Basit bir 2x2 tablo oluşturmak için gereken yazım şu şekilde;  

```
|||
|---|---|
|||
```
Çıktısı;  

|||
|---|---|
|||

Burada `-`karakteri için genel kabul en az 3 adet kullanılmasıdır.  Ancak birçok editör tek `-` kullanımını da kabul eder.

## Yerleştirme  

Tablo içerisindeki hücreleri ihtiyacımıza göre dolduruyoruz.  Hücrelerin boyutu içindeki yazı boyutuna göre adaptif şekilde ayarlanıyor.  

```
|Başlık1|Başlık12345|Başl|
|---|---|---|
|Elemnt|Ele|1|
|abc|b|345678910|
```
Çıktısı;  

|Başlık1|Başlık12345|Başl|
|---|---|---|
|Elemnt|Ele|1|
|abc|b|345678910|  

Bu noktadan sonra hücrelerin içerisinde yazının sağa, sola veya merkeze hizalanmasını yapabiliriz.  Bunun için hangi kolonun içeriğini hizalayacaksak `---` bölümüne `:` karakterini koyuyoruz.  

```
|Sağa Hizalama|Sola Hizalama|Ortaya Hizalama|
|---:|:---|:---:|
|`---:`|`:---`|`:---:`|
|Test|Test|Test|
```  


|Sağa Hizalama|Sola Hizalama|Ortaya Hizalama|
|---:|:---|:---:|
|`---:`|`:---`|`:---:`|
|Test|Test|Test|  

Hücreler içerisinde Markdown yazım paternlerini kullanma imkanımız da var.

```
|<u>Başlık1</u>|**Başlık2**|*Başlık3*|
|:---|---:|:---:|
|**Elemnt**|[Ele](url)|1|
|*abc*|_b_|&#128512|
```
Çıktısı;  

|<u>Başlık1</u>|**Başlık2**|*Başlık3*|
|:---|---:|:---:|
|**Elemnt**|[Ele](url)|1|
|*abc*|_b_|&#128512|  

## İleri Düzey Tablo Oluşturma
Markdown ile ister temel ister genişletilmiş yazım kurallarını kullanın bir noktadan sonra tablolarda çok fazla alternatif üretmek mümkün olamıyor.  Dolayısıyla bu noktadan sonra html tag'lerini kullanmak mecburiyetindeyiz.  

Örneğin başlıksız bir tablo üretmek için;
``` 
<table>
<tbody>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
</tbody>
</table>
```  
Çıktısı:  

<table>
<tbody>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
    <td>d</td>
  </tr>
</tbody>
</table>  

:::info  
Hayatı kolaylaştırmak ve hızlı html tabanlı tablo oluşturmak için bir [generator](https://www.tablesgenerator.com/html_tables) kullanabilirsiniz.



