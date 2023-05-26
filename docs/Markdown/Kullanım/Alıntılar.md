---
sidebar_position: 5
description:  Alıntı nasıl belirtiliyor inceleyeceğiz
tags:
  - Alıntı
  - Markdown
  - Formatlar
---
Alıntı özellikle yazı içerisinde başkasına atıf yapıldığı belirtilen bölümlerdir.  Örneğin Markdown konulu bir makale yazarken başka bir editörün söylediklerini yazınıza alıntılayabilir bunu da markdown'un size sunduğu paterni kullanarak yapabilirsiniz.  

Alıntı oluşturmayı köşeli parantez ile boşluk bırakmadan yapıyoruz.
```
*Albert Einstein ile Charlie Chaplin arasında şöyle bir dialog geçmiştir;*

Einstein 
>*“Sizin sanatınızda en çok takdir ettiğim şey evrensellik! Tek bir kelime bile etmiyorsunuz ama tüm dünya sizi anlıyor!”* 

Chaplin  
>*“Doğru! Ama sizin ihtişamınız daha da yüce Kimse dediğiniz hiçbir şeyi anlamıyor, ama yine de hayranlık duyuyorlar.”*
```  

Çıktısı aşağıdaki şekilde oluyor;

*Albert Einstein ile Charlie Chaplin arasında şöyle bir dialog geçmiştir;*

Einstein
  >*“Sizin sanatınızda en çok takdir ettiğim şey evrensellik! Tek bir kelime bile etmiyorsunuz ama tüm dünya sizi anlıyor!”* 

Chaplin  
  >*“Doğru! Ama sizin ihtişamınız daha da yüce Kimse dediğiniz hiçbir şeyi anlamıyor, ama yine de hayranlık duyuyorlar.”*  
:::info
Yazının görünüşünü biraz daha güzelleştirmek adına *'lar vasıtası ile konuşmaları belirttiğimiz alıntı satırlarını italik yaptık.  
Buradan da Markdown'da kullandığımız formata ilişkin paternlerin alıntı içerisinde de kullanılabileceğini görmüş olduk.   
:::   
 
**Alıntı oluştururken satır boşlukları arasına da köşeli parantez koymak estetik açıdan yazıyı daha güzel kılabilir.**  
```
>Satır arasına da boşluk bırakarak alıntı oluşturalım.
>
>Nasıl göründüğüne bir bakalım.  
```  
Çıktısı:  

>Satır arasına da boşluk bırakarak alıntı oluşturalım.
>
>Nasıl göründüğüne bir bakalım.  


```
>Satır arasına da boşluk bırakıp köşeli parantez <u>kullanmadan</u> alıntı oluşturalım.

>Nasıl göründüğüne bir bakalım.  
```  
Çıktısı:  

>Satır arasına da boşluk bırakıp köşeli parantez <u>**kullanmadan**</u> alıntı oluşturalım. 

>Nasıl göründüğüne bir bakalım.  

Bir diğer örnek alıntı içerisine tekrar alıntılamak;  
```
>klcfldwşcnfljnclfjnclfqlşc  
>
>>i lkfmlckmflskqmclfksmqclfmsqlcmflsqcmlfsqmcl  
>
>cnfsqjcnflşsqncflkjnsqclkjfnqlckjncşnsqcnfqnc
```  
Çıktısı:   

>klcfldwşcnfljnclfjnclfqlşc  
>
>>ikmlkfmlckmflskqmclfksmqclfmsqlcmflsqcmlfsqmcl  
>
>cnfsqjcnflşsqncflkjnsqclkjfnqlckjncşnsqcnfqnc

