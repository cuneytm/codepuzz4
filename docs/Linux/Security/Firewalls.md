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

## Dağıtımlar Üzerindeki Güvenlik Duvarı Servisleri(Daemons)

| Linux Distribution | Firewall Servisi | Status |
|:---:|:---:|:---:|
| Ubuntu | UFW | Enabled by default |
| Fedora | firewalld | Enabled by default |
| CentOS | firewalld | Enabled by default |
| Red Hat Enterprise Linux | firewalld | Enabled by default |
| Debian | iptables | Disabled by default |
| openSUSE | firewalld | Enabled by default |
| Arch Linux | nftables | Disabled by default |
| Gentoo | iptables | Disabled by default |

:::info  
Dağıtımların container imajlarında firewall servisleri yüklü değildir. Bunları ayrıca yüklemek ve aktif hale getirmek gereklidir.  
:::  
## Mevcut Kuralları Listeleme  

| Firewall Daemon | Command |
|---|---|
| ufw | `ufw status numbered` |
| firewalld | `firewall-cmd -zone='$zonename' --list-all` |
| iptables | `iptables -L -n -v` |
| nftables | `nft list ruleset` |  

:::info   
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
| Complex Outbound | `sudo ufw allow to 192.168.1.0/24 port 22` | Allow SSH traffic to the 192.168.1.0/24 network from any source on port 22. |   

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


