---
sidebar_position: 7
description:  Dökümanın genel yazı düzenine ilişkin konuları inceleyeceğiz
tags:
  - GenelDüzen
  - Markdown
  - Formatlar
---
Bu başlık altında yazı düzenine ilişkin çeşitli kısa bilgiler vereceğiz.

## **Alt satıra geçiş** 

  MD yazım kuralları içerisinde alt satıra geçiş için **2 boşluk bırakıp ve enter** tuşuna basmadığınız sürece bir alt satıra geçmiş olmazsınız.  

  Düz yazı yazıyorum.
  Enter tuşuna bastım editörün ekranında alt satıra geçtim.Ama gördüğünüz üzere web sayfasında yine aynı satırdayım.🙃  
  Şimdi ise üstteki cümlenin sonunda emojiden sonra iki boşluk bırakıp enter'a tuşuna bastım.Artık alt satırdayım.😅

  :::tip 
  HTML tag olarak ```<br>``` kullanmak ta diğer bir opsiyondur.

  ```<p>Şimdi bir alt satıra geçelim.<br>Bakalım devam ediyormu</p>```   
  :::

## **Tab kullanımı**  

  Malesef MD içerisinde tab için özel bir durum yok.  İlla tab ile boşluk kullanmanız gerekirse bunu HTML destekli bir MD editörünüzde tag'lerle veya shortcode'lar ile yapabilirsiniz.  
  
  _Shortcode örneği;_

  ```

  &nbsp;bir tab koyduk  

  &nbsp;&nbsp;iki tab koyduk  

  &nbsp;&nbsp;&nbsp;üç tab koyduk  

  ```

  _HTML Tag örneği;_  

  ````
  <tab>bir tab koyduk
  `````  
## **Satır Hizalama**  

  Cümleyi kelimeyi bir satır içerisinde hizalamak için yine HTML tag'leri kullanmak zorundayız.  Temel MD yazım kuralları içerisinde bunun için de bir patern yok.  
  ```
  <p style="text-align:center">Merkeze Al</p>
  <p style="text-align:left">Sola Al</p>
  <p style="text-align:right">Sağa Al</p>  
  ```  



