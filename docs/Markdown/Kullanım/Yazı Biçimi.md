---
sidebar_position: 1
description:  Font ve Yazı Karakterlerini İnceleyeceğiz
tags:
  - Font
  - Markdown
  - Formatlar
---


Markdown'da yazı şekil şemal ve görünümünü değiştirmek için çeşitli paternler kullanılır.  
Bu paternler "her editörün tanıdıkları" veya "editörü yazan firmanın/kişinin keyfiyetine kalmış tanınabilecek paternler" olarak ayrılıyor.   Örneğin Github veya şu an bakmakta olduğunun sayfanın altyapısında da bazı paternler tanınırken bazılar tanınmıyor. 

* **<u>İlk olarak her editörün tanıdıkları;</u>**

  #### Kelime, cümle veya kelime gruplarını "Bold" yapmak için;

  ``**Codepuzz**`` veya ``__Codepuzz__``  >>> **Codepuzz**  

  #### Kelime, cümle veya kelime gruplarını "Italik" yapmak için;

  ``_Codepuzz_`` veya ``*Codepuzz*`` >>> _Codepuzz_

  #### Her ikisini birden kullanmak istiyorsak;

  \*\*\_Codepuzz\_\*\* >>> **_Codepuzz_**

  :::info Renk, font tipi, büyüklüğünü vb. değiştirmek istiyorsak!?
  :::

    Bu durumda [html tag'lerini](https://www.w3schools.com/tags/) kullanmamız gerekiyor. Örnek:  

    `<font size="3" color="yellow">Happy Markdown Day!</font>` >>>  <font size="4" color="red">Happy Markdown Day!</font>  
    
    veya altını çizmek için;  
    
    `<u>Happy Markdown Day!</u>` >>> <u>Happy Markdown Day!</u> 

    gibi...

    > *Whatsapp gibi bazı uygulamalarda \_ve \* karakterleri kelime ve cümleleri yine italik ve bold yapmak için kullanılır. Bir nevi universal bir hal almıştır kullanımları. Whatsapp uygulamanızı bir deneyin :smile:  Daha fazla bilgi için [link burada!](https://faq.whatsapp.com/539178204879377)*  
    

* #### <u>Birçok Markdown editörü tarafından desteklenen ancak standart olmayan bazı paternler de vardır.</u>

  1. **FootNote (Dipnot)**

    Dipnot cümlesi.Sayfanın en altında belirir.Sonuna şu paterni atıyoruz.\[^1\]

    \[^1\]: Burada da cümleyi refere ediyoruz.

    Sonuç şu şekilde oluyor;

    ![Footnote SS](markdown_footnote.png)

  2. **Emoji Kullanımı**

    Gülme efekti yapalım cümle sonuna. `:grinning:` >>> :grinning:

    Buradaki kullandığımız emoji formatı [shortcodes](https://emojibase.dev/shortcodes?) olarak geçiyor. Linkten tablosuna göz atabilirsiniz.

    Dediğimiz gibi her editör tanımak zorunda değil örneğin Vscode preview'da görebilmek için extension gerekiyor.

  3. **Strikethrough (üstünü çizme)**

    ``~~Çiz üstümü.~~`` >>> ~~Çiz üstümü.~~

  4. **Sayfamızın desteklemediği diğer formatlar**

    H~2~O >>> Subscript  
    X^3^ >>> Superscript  
    ==Önemli cümlemiz== >>> Highlight etme  



:::tip ipucu

Markdown için kaçış karakteri backslash'tir `\` . Örneğin iki asteriks işaretini yazmak isterseniz başlarına ``\*\*`` koymalısınız. Koymadığınız durumda bold et olarak algılanır editör tarafından. 

:::

:::tip ipucu

Html tag'lerinin görmezden gelinmesini sağlamak veya editörün yazılanı markdown olarak algılamaması için istediklerinizi backtick \`\` arasına yazabilirsiniz. ``<b>backtick arası :)</b>``

:::
