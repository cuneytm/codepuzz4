---
sidebar_position: 2
description:  Başlıkları Nasıl Kullanıyoruz!
tags:
  - Başlıklar
  - Markdown
  - Formatlar
---  

## Başlık çeşitleri  

Markdown'da başlık yapmak gayet kolay. Birden altıya kadar ```#``` karakteri kullanarak başlık(header) oluşturabilirsiniz.

| Markdown Yazımı| HTML Yazımı|Çıktı|
|---|---|---|
|# H1 başlık|```<h1> H1 Başlık </h1>```|<h1> H1 Başlık </h1>|
|## H2 başlık|```<h2> H2 Başlık </h2>```|<h2> H2 Başlık </h2>| 
|### H3 başlık|```<h3> H3 Başlık </h3>```|<h3> H3 Başlık </h3>|
|#### H4 başlık|```<h4> H4 Başlık </h4>```|<h4> H4 Başlık </h4>|
|##### H5 başlık|```<h5> H5 Başlık </h5>```|<h5> H5 Başlık </h5>|
|###### H6 başlık|```<h6> H6 Başlık </h6>```|<h6> H6 Başlık </h6>|



Alternatif olarak şöyle bir patern de bulunmakta;

```
H1 Başlık
=========
```  

H1 Başlık  
========
  

## Başlıklarlarda "id" kullanımı  

Başlık yazısının arkasından süslü parantez içerisinde hashtag'li şekilde başlığa link atabilirsiniz.  Başlığın hemen yanında belirecek
 
```### Başlık {#custom-id}```

```### Başlık {#1}```  >>> ```http://codepuzz/docs/Markdown/Kullanım/Başlıklar#1```

:::info Kullanım önerileri
* \# işareti sonrası başlıklarda mutlaka boşluk bırakın. 
* Başlıklardan önce ve sonra birer boş satır bırakmaya özen gösterin.
* Satır sonlarından sonra alt satıra geçmek için iki boşluk bırakabilirsiniz.  
:::
