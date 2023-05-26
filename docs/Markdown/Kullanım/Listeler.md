---
sidebar_position: 3
description:  Sıralı ve Sırasız Liste Kullanımını İnceleyeceğiz
tags:
  - Font
  - Markdown
  - Formatlar
---
Markdown'da listeleri sıralı(ordered) ve unordered(sırasız) olarak yaratma imkanımız var.  
## Sıralı (ordered) liste yaratma  

 ```
 1. Birinci madde
 2. İkinci madde 
 3. Üçüncü madde
 ```  

 bu şekilde devam edebilir.  Burada başta yazdığınız rakamların ne olduğunun bir önemi yok. Üçüncü maddeye ikinci madde ile değiştirseniz dahi editör bunu yazım sırasına göre bunu yorumlayacaktır. Tek önemli şey kullandığınız rakamlardan sonra ```.```ve bir boşluk gelmesidir.

 1. Birinci madde  
 2. İkinci madde  
 3. Üçüncü madde

Şimdide iki ve üçüncü maddelerin yerini değiştirerek yazalım. 

```
1. Birinci madde
3. Üçüncü madde
2. İkinci madde  
```
Çıktımız şu şekilde olacaktır;

1. Birinci madde
3. Üçüncü madde
2. İkinci madde   

:::info  

Cümle başında rakam ve ardından nokta kullanmanız gereken durumlar olursa
```100. yılımız gibi``` kaçış karakterimizi ```\``` noktadan önce kullanabilirsiniz.  
```100\.yılımız gibi```  
:::

Sıralı listelerde maddelerde alt madde kullanımı da mümkün.  Koşul alt maddelere geçerken bir tab veya dört adet boşluk bırakılmasıdır.

```
1. Birinci madde  
    1. Birinci maddenin alt birinci maddesi  
    2. Birinci maddenin alt ikinci maddesi
    10. Birinci maddenin alt üçüncü maddesi  
2. İkinci madde  
    1. İkinci maddenin alt birinci maddesi   
    2. İkinci maddenin alt ikinci maddesi  
    4. İkinci maddenin alt üçüncü maddesi  
```  
Çıktımız,

1. Birinci madde  
    1. Birinci maddenin alt birinci maddesi  
    3. Birinci maddenin alt ikinci maddesi  
    4. Birinci maddenin alt üçüncü maddesi  
2. İkinci madde  
    1. İkinci maddenin alt birinci maddesi   
    2. İkinci maddenin alt ikinci maddesi  
    4. İkinci maddenin alt üçüncü maddesi  

Dikkatinizi çekmiştir. Alt maddelerin ilk numarası 1 ile başladığı andan itibaren diğer rakamların ne olduğunun bir önemi yok.  Ancak alt maddeler 1'den farklı bir numara ile başladığında bu kural bozulmakta.  
```
1. Birinci madde  
    101. Birinci maddenin alt birinci maddesi  
    3. Birinci maddenin alt ikinci maddesi  
    11. Birinci maddenin alt üçüncü maddesi  
2. İkinci madde  
    5. ikinci maddenin alt birinci maddesi  
    9. ikinci maddenin alt ikinci maddesi
```  
Çıktımız ise;  

1. Birinci madde  
    101. Birinci maddenin alt birinci maddesi  
    3. Birinci maddenin alt ikinci maddesi  
    11. Birinci maddenin alt üçüncü maddesi  
2. İkinci madde  
    5. ikinci maddenin alt birinci maddesi  
    9. ikinci maddenin alt ikinci maddesi  

:::info  

Markdown'da bir <u>**alt satıra geçmek için iki boşluk bırakmak**</u> gereklidir.  Bunu yapmadığınız takdirde siz enter tuşu ile alta geçseniz dahi aynı satırdan yazı devam eder.
:::

:::info  

Sıralı listelerin html tag'li yazılış şekli aşağıdaki gibidir. Daha önce link verdiğimiz için bu konuyu detaylandırmıyoruz.

```
<ol>
  <li>Birinci madde</li>
  <li>İkinci madde</li>
  <li>Üçüncü madde</li>
</ol>
```
Alt maddeli örnek ise;  

```
<ol>
  <li>Birinci madde</li>
  <li>İkinci madde
    <ol>
      <li>ikinci maddenin alt birinci maddesi</li>
      <li>ikinci maddenin alt ikinci maddesi</li>
    </ol>
  </li>
  <li>Üçüncü madde</li>
</ol>
```
:::

## Sıralı Olmayan (unordered) listeler  

Sıralı olmayan listeler yaratmak için  + , * ve - karakterlerini kullanabilirsiniz.  Burada tek dikkat edilmesi gereken husus seçilen karakterin tüm maddeler için aynı olması gerektiğidir. * ile başlıyorsanız tüm maddeleri * ile başlatın.

````
* Birinci madde
* ikinci madde
* Üçüncü madde
````
veya  
````
+ Birinci madde
+ ikinci madde
+ Üçüncü madde
````

Çıktılar;

* Birinci madde
* İkinci madde
* Üçüncü madde

+ Birinci madde
+ İkinci madde
+ Üçüncü madde

**Alt maddeli sırasız liste kullanımı;**

````
* Birinci madde
    * Birinci maddenin alt birinci maddesi
    * Birinci maddenin alt ikinci maddesi
* İkinci madde
````
Çıktılar;  

* Birinci madde
    * Birinci maddenin alt birinci maddesi
    * Birinci maddenin alt ikinci maddesi
* İkinci madde

**Maddelerin arasına tab veya dört boşluk koyarak satır ekleyebilirsiniz.**

````
- Birinci madde#bu noktadan sonra iki boşluk bırakıp enter yaptık

    Birinci madde hakkında bir satır#iki boşluk bırakıp enter

- İkinci madde#iki boşluk 
````
Çıktı şu şekilde oldu;  
- Birinci madde  

    Birinci madde hakkında bir satır  

- İkinci madde  

**Liste yaparken diğer Markdown paternlerini de kullanabilirsiniz. Örneğin madde içinde bold yapalım bir kelimeyi;

````
* Birinci **madde**  
* İkinci madde  

    > Yorum yazalım  
    
* Üçüncü madde
````
Çıktı şu şekilde oluyor;  

* Birinci **madde**  
* İkinci madde  

    > Yorum yazalım  

* Üçüncü madde  

:::info  
Sırasız listeler için html tag kullanımı ise şu şekilde;
````
<ul>
  <li>Birinci madde</li>
  <li>İkinci madde</li>
  <li>Üçüncü madde
    <ul>
      <li>Alt Madde</li>
    </ul>
  </li>
</ul>
````
