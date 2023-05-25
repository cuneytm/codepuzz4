---
sidebar_position: 2
description:  Başlıkları Nasıl Kullanıyoruz!
tags:
  - Başlıklar
  - Markdown
  - Formatlar
---
Markdown'da başlık yapmak gayet kolay. Birden altıya kadar ```#``` karakteri kullanarak başlık(header) oluşturabilirsiniz.

```# H1 başlık```  veya html tag'li hali ```<h1> H1 Başlık </h1>```  
```## H2 başlık```  veya html tag'li hali  ```<h2> H2 Başlık </h2>```    
```### H3 başlık```  veya html tag'li hali  ```<h3> H3 Başlık </h3>```   
```#### H4 başlık```  veya html tag'li hali  ```<h4> H4 Başlık </h4>```   
```##### H5 başlık```  veya html tag'li hali  ```<h5> H5 Başlık </h5>```   
```###### H6 başlık```  veya html tag'li hali  ```<h6> H6 Başlık </h6>```   

Yukarıdakilerin çıktıları şu şekilde dönüşüyor;

# H1 Başlık  

## H2 Başlık  

### H3 Başlık

#### H4 Başlık  

##### H5 Başlık 
 
###### H6 Başlık 


Veya şöyle bir alternatif de bulunmakta;

```
H1 Başlık
=========
```
H1 Başlık
=========
```
H2 Başlık
---------
```
H2 Başlık
---------  

**Başlıklara id verip bu id'nin link olarak kullanılmasını sağlayabilirsiniz**  

```### Başlık {#custom-id}```

```### Başlık {#1}```  >>> ```http://codepuzz/docs/Markdown/Kullanım/Başlıklar#1```

### Başlık {#1}  

:::info Kullanım önerileri
* \# işareti sonrası başlıklarda mutlaka boşluk bırakın. 
* Başlıklardan önce ve sonra birer boş satır bırakmaya özen gösterin.
* Satır sonlarından sonra alt satıra geçmek için iki boşluk bırakabilirsiniz.  
:::
