---
sidebar_position: 1
description:  Linux Dağıtımları ve üzerlerindeki Firewall Servisleri
tags:
  - Linux
  - Devops
  - Security
  - Firewall
  - Servisler
---  
:::note Başlamadan Önce

Yeni nesil veya klasik birçok firewall 🛡️ servisi üzerinde kural yazılırken **_veri trafiğinin başlatıldığı yön_** referans alınır.  
 
"IN" veya "INBOUND" ⬅️ yönü dışarıdan içeriye doğru,  

"OUT" veya "OUTBOUND" ➡️ yönü ise içeriden dışarıya doğru başlantılan bağlantılar(connections) için kullanılır.  

**Örnek1**  
Bir sunucu üzerinde kural yazıyorsanız ve sunucunun kendisinin dışarıdaki bir DNS sunucusuna erişmesine izin vermek istiyorsanız.  Bu kuralı sunucunun firewall'u üzerinde DNS (UDP 53) için "OUT"(OUTBOUND)'a yazmalısınız.  
**Örnek2**  
Sunucunuzda TCP 80.port üzerinde bir web servisi çalışıyordur .  Dışarıdaki kullanıcıların bu servis portuna erişebilmeleri için sunucu firewall'ında "IN"(INOBUND) yönünde kural yazmanız gerekir.  
 
Her ne kadar bağlantılar(connections) gelip giden veri pakerleri anlamında çift yönlü çalışsa da kuralları trafiğin başlama noktası baz alınarak tek yönlü yazılır.  Bu durum gözetimi yapan (stateful) çalışan tüm firewall cihazları ve uygulamaları için bu şekildedir.  Durum gözetimi yapmayan(stateless) çalışan filtreler veya güvenlik duvarı servisleri içinse paketlerin geliş gidişine ayrı ayrı filtreler yazılır. Bu tip filtreler genelde yönlendiriciler(router) ve L3 anahtarlar(switch) üzerinde tanımlanır.

:::

## Dağıtımlar ile Gelen Firewall Servisleri(FW Daemons)

| Linux Distribution | Firewall Servisi | Status |
|:---:|:---:|:---:|
| Ubuntu | UFW | Disabled by default |
| Fedora | firewalld | Enabled by default |
| CentOS | firewalld | Enabled by default |
| Red Hat Enterprise Linux | firewalld | Enabled by default |
| Debian | iptables | Disabled by default |
| openSUSE | firewalld | Enabled by default |
| Arch Linux | nftables | Disabled by default |
| Gentoo | iptables | Disabled by default |
| FreeBSD | pf | Enabled by default|  


:::info Not
Dağıtımların container imajlarında firewall servisleri yüklü değildir. Bunları ayrıca yüklemek ve aktif hale getirmek gereklidir.  
:::  
## Mevcut Kuralları Listeleme  

| Firewall Daemon | Command |
|---|---|
| ufw | `ufw status numbered` |
| firewalld | `firewall-cmd -zone='$zonename' --list-all` |
| iptables | `iptables -L -n -v` |
| nftables | `nft list ruleset` |  

:::info Not   
firewalld için tüm kuralları bir anda görüntülemek için bir bash script yazılabilir.  

````
#!/bin/bash
zones=$(sudo firewall-cmd --get-zones)

for zone in $zones
do
    echo "Zone: $zone"
    sudo firewall-cmd --zone=$zone --list-all
    echo "-------------------------------------"
done
````
:::  

## Kuralların Sıralaması  

Tüm firewall uygulamalarında olduğu gibi yukarıda bahsi geçen firewall daemon'larında da kural sıralaması önemlidir.  
  * Kurallar listede yukarıdan aşağıya doğru kontrol edilir. 
  * En son girilen kural listenin sonuna eklenir.
  * Daemonlarda araya kural eklemek çıkarmak veya silmek için kurallara indeks numarası verilir. Örneğin ufw'de aradaki bir kuralı silmek için örneğin; 
  `
  ufw delete -n 1
  ` komutu kullanılabilir.  Burada "1" numaralı kuralı sil dedik.


## Aktif ve Deaktif Hale Getiren Komutlar  

| Firewall Daemon | Enable Command | Disable Command | Check Status Command |
|---|---|---|---|
| UFW | `sudo ufw enable` | `sudo ufw disable` | `sudo ufw status` |
| firewalld | `sudo systemctl start firewalld` | `sudo systemctl stop firewalld` | `sudo firewall-cmd --state` |
| iptables | `sudo /etc/init.d/iptables start` | `sudo /etc/init.d/iptables stop` | `sudo iptables -L -n` |
| nftables | `sudo systemctl start nftables` | `sudo systemctl stop nftables` | `sudo nftables -L -n` |  


##  Kural Yönetim Komutları  

| Firewall Daemon | Add Rule Command | Delete Rule Command | Edit Rule Command |
|---|---|---|---|
| UFW | `sudo ufw allow <port>` | `sudo ufw deny <port>` | `sudo ufw delete <rule_number>` |
| firewalld | `sudo firewall-cmd --zone=public --add-port=<port>/tcp` | `sudo firewall-cmd --zone=public --remove-port=<port>/tcp` | `sudo firewall-cmd --zone=public --edit-port=<port>/tcp` |
| iptables | `sudo iptables -A INPUT -p tcp -m tcp --dport <port> -j ACCEPT` | `sudo iptables -D INPUT -p tcp -m tcp --dport <port> -j ACCEPT` | `sudo iptables -I INPUT -p tcp -m tcp --dport <port> -j ACCEPT` |
| nftables | `sudo nftables -A INPUT -p tcp -m tcp --dport <port> -j ACCEPT` | `sudo nftables -D INPUT -p tcp -m tcp --dport <port> -j ACCEPT` | `sudo nftables -I INPUT -p tcp -m tcp --dport <port> -j ACCEPT` |    

## Ufw Kural Örnekleri  

| Rule Type | Example | Description |
|---|---|---|
| Inbound | `sudo ufw allow 80` | Allow HTTP traffic on port 80. |
| Outbound | `sudo ufw allow 22` | Allow SSH traffic on port 22. |
| Basic Inbound | `sudo ufw allow from 192.168.1.0/24 to any` | Allow traffic from the 192.168.1.0/24 network to any destination. |
| Basic Outbound | `sudo ufw allow to 192.168.1.0/24` | Allow traffic to the 192.168.1.0/24 network from any source. |
| Complex Inbound | `sudo ufw allow from 192.168.1.0/24 to any port 80` | Allow HTTP traffic from the 192.168.1.0/24 network to any destination on port 80. |
| Complex Outbound | `sudo ufw allow to 192.168.1.0/24 port 22 proto tcp` | Allow SSH traffic to the 192.168.1.0/24 network from any source on port 22. |  

:::info Not  
Ufw'de kural yazımı sırasında default kural yönü **"in"**(inbound)'tur. Bu nedenle ``ufw allow 80`` yazdığımızda bu dışarıdan içeriye doğru bir kural olarak nitelendirilir.  
Ufw içerisinde yön belirtmek gerekirse "in","out" anahtar kelimelerini kurallara yazabiliriz. ```ufw allow out to 192.168.1.1```gibi. Bu 192.168.1.1 ip adresine doğru olan trafiğe izin ver demektir.  
:::

:::info Not  
Ufw konfigürasyonunu(kuralları ile beraber) `sudo ufw reset` komutu ile tamamen silebilirsiniz.  
:::  

:::info Not  
Ufw'nin servis klasörü ``/etc/ufw/``dir. Ufw'nin mevcut kuralları user.rule adlı bir dosyada text olarak tutulur. reset komutunu yürüttüğünüz zaman silinen kurallar da yine bu klasöre timestamp atılarak yedeklenir. Sildiğiniz kurallara geri dönmek için ``sudo cp "eski rule dosyası" user.rule`` komutunu yürütebilirsiniz. Bu şekilde aktif kural dosyasını eskisi ile değiştirmiş oluyorsunuz.  
:::  

### Ufw Logging  

Her firewall uygulaması ve servisinde olduğu gibi loglama da önemli bir başlıktır.  Gelen bağlantılar veya bir bağlantıya ait paketler neden engelleniyor, hangi kural tarafından engelleniyor, problem gerçekten firewall mu bunun anlayabilmek için "troubleshooting" yapmamız gerekir.  Bunun için de eğer firewall'a kadar olan adımları geçtiysek firewall'da yapmamız gereken adımlarda biri loglama seviyesini arttırmak ve gelen bağlantıların ve bu bağlantılara ait paketlere firewall nasıl davranıyor görmek gerekir.  

1. Ufw'de loglama seviyeleri şu şekildedir;

  * Low (Düşük): Bu seviyede, yalnızca gelen ve dışarı yönlendirilen paketlerin başlık bilgileri kaydedilir. Bu en az ayrıntılı loglama seviyesidir.
  * Medium (Orta): Bu seviyede, "Düşük" seviyesine ek olarak, başlık bilgilerinin yanı sıra ICMP (Ping) ve diğer IP protokollerinin bazı bilgileri de kaydedilir.
  * High (Yüksek): Bu seviyede, "Orta" seviyesine ek olarak, tam TCP/IP başlık bilgileri ve UDP/TCP paket içeriği gibi daha fazla ayrıntı kaydedilir. Bu seviye daha kapsamlı bir loglama sağlar.
  * Full (Tam): Bu seviyede, tüm paket bilgileri kaydedilir. Bu, en ayrıntılı loglama seviyesidir ve genellikle sistem performansını olumsuz etkileyebilir.

2. Loglama seviyeleri için şu komut kullanılır.
    ```
    sudo ufw logging LEVEL
    ```
3. Loglama aşağıdaki belirtilen klasördeki dosyaya yapılır. 
    ```
    /var/log/ufw.log
    ```  

    **Örnek**  
    Sunucumuz üzerinde loglama seviyesini Medium'a çıkaralım.  
    ```sudo ufw logging MEDIUM```  
    Mevcut kurallarımızı kontrol edelim.  
    ```
    dvudev@dvudev:~$ sudo ufw status numbered
    Status: active

        To                         Action      From
        --                         ------      ----
    [ 1] 555                        ALLOW IN    Anywhere                  
    [ 2] 555                        ALLOW OUT   Anywhere                   (out)
    [ 3] 22 (v6)                    ALLOW IN    Anywhere (v6)             
    [ 4] 80 (v6)                    ALLOW IN    Anywhere (v6)             
    ````
    Başka bir bilgisayardan sunucumuza doğru TCP 8888 portuna istek gönderip loglarımıza bakalım.  

    ```
    dvudev@dvudev:~$ cat /var/log/ufw.log | grep 8888
    Jun  8 10:53:20 dvudev kernel: [10717.058533] [UFW AUDIT] IN=enp0s3 OUT= MAC=08:00:27:59:13:0c:14:7d:da:d4:b7:65:08:00 SRC=172.20.10.2 DST=172.20.10.5 LEN=64 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=58998 DPT=8888 WINDOW=65535 RES=0x00 SYN URGP=0  
    Jun  8 10:53:20 dvudev kernel: [10717.058557] [UFW BLOCK] IN=enp0s3 OUT= MAC=08:00:27:59:13:0c:14:7d:da:d4:b7:65:08:00 SRC=172.20.10.2 DST=172.20.10.5 LEN=64 TOS=0x00 PREC=0x00 TTL=64 ID=0 DF PROTO=TCP SPT=58998 DPT=8888 WINDOW=65535 RES=0x00 SYN URGP=0
    ```  
    Yukarıda görüldüğü üzere sunucumuza gelen hedef portu 8888 olan TCP Syn paketi bloklanmış durumda.  

    Bir de izinli bağlantıyı görmek için trafik başlatalım diğer bilgisayardan TCP 22 portuna doğru ve loglarımıza bakalım.  

    ```
    dvudev@dvudev:~$ cat /var/log/ufw.log | grep 22
    Jun  8 11:05:39 dvudev kernel: [11453.253622] [UFW ALLOW] IN= OUT=enp0s3 SRC=172.20.10.5 DST=185.125.190.56 LEN=76 TOS=0x10 PREC=0x00 TTL=64 ID=31321 DF PROTO=UDP SPT=34652 DPT=123 LEN=56
    ```  
    Yukarıdaki logta görüldüğü üzere bu sefer bir blok logu almadık.  

    :::note Not  
    Log dosyasının içini silmek için şu komutu kullanabilirsiniz.  
    ```sudo truncate -s 0 /var/log/ufw.log```
    :::  





## IPtables Kural Örnekleri 

| Rule Type | Example | Description |
|---|---|---|
| Inbound | `sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT` | Allow HTTP traffic on port 80. |
| Outbound | `sudo iptables -A OUTPUT -p tcp -m tcp --dport 22 -j ACCEPT` | Allow SSH traffic on port 22. |
| Basic Inbound | `sudo iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT` | Allow traffic from the 192.168.1.0/24 network to any destination. |
| Basic Outbound | `sudo iptables -A OUTPUT -d 192.168.1.0/24 -j ACCEPT` | Allow traffic to the 192.168.1.0/24 network from any source. |
| Complex Inbound | `sudo iptables -A INPUT -s 192.168.1.0/24 -p tcp -m tcp --dport 80 -j ACCEPT` | Allow HTTP traffic from the 192.168.1.0/24 network to any destination on port 80. |
| Complex Outbound | `sudo iptables -A OUTPUT -d 192.168.1.0/24 -p tcp -m tcp --dport 22 -j ACCEPT` | Allow SSH traffic to the 192.168.1.0/24 network from any source on port 22. |  

## Firewalld Kural Örnekleri  

| Rule Type | Example | Description |
|---|---|---|
| Inbound | `firewall-cmd --zone=public --add-port=80/tcp` | Allow HTTP traffic on port 80. |
| Outbound | `firewall-cmd --zone=public --add-port=22/tcp` | Allow SSH traffic on port 22. |
| Basic Inbound | `firewall-cmd --zone=public --add-source=192.168.1.0/24` | Allow traffic from the 192.168.1.0/24 network to any destination. |
| Basic Outbound | `firewall-cmd --zone=public --add-destination=192.168.1.0/24` | Allow traffic to the 192.168.1.0/24 network from any source. |
| Complex Inbound | `firewall-cmd --zone=public --add-port=80/tcp --source=192.168.1.0/24` | Allow HTTP traffic from the 192.168.1.0/24 network to any destination on port 80. |
| Complex Outbound | `firewall-cmd --zone=public --add-port=22/tcp --destination=192.168.1.0/24` | Allow SSH traffic to the 192.168.1.0/24 network from any source on port 22. |

## Nftables Kural Örnekleri  

| Rule Type | Example | Description |
|---|---|---|
| Inbound | `nft add rule inet filter input tcp dport 80 accept` | Allow HTTP traffic on port 80. |
| Outbound | `nft add rule inet filter output tcp dport 22 accept` | Allow SSH traffic on port 22. |
| Basic Inbound | `nft add rule inet filter input src 192.168.1.0/24 accept` | Allow traffic from the 192.168.1.0/24 network to any destination. |
| Basic Outbound | `nft add rule inet filter output dst 192.168.1.0/24 accept` | Allow traffic to the 192.168.1.0/24 network from any source. |
| Complex Inbound | `nft add rule inet filter input src 192.168.1.0/24 tcp dport 80 accept` | Allow HTTP traffic from the 192.168.1.0/24 network to any destination on port 80. |
| Complex Outbound | `nft add rule inet filter output dst 192.168.1.0/24 tcp dport 22 accept` | Allow SSH traffic to the 192.168.1.0/24 network from any source on port 22. |  

## Log Klasörleri  

| Firewall Service | Log Directory |
|---|---|
| UFW | `/var/log/ufw.log` |
| firewalld | `/var/log/firewalld.log` |
| iptables | `/var/log/iptables.log` |
| nftables | `/var/log/nftables.log` |  

## Dökümantasyon Linkleri

| Firewall Daemon | Documentation Link |
|---|---|
| UFW | <https://help.ubuntu.com/community/UFW> |
| firewalld | <https://docs.fedoraproject.org/en-US/Fedora/latest/html/Deployment_Guide/firewalld.html> |
| iptables | <https://linux.die.net/man/8/iptables> |
| nftables | <https://nftables.org/> |


