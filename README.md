# Salvation Builders

## TLS
### Renew LetsEncrypt Cert
1. Log into prod instance
2. Stop nginx `sudo systemctl stop nginx`
3. Renew Cert `sudo certbot renew --dry-run` to test 
4. Run `sudo certbot renew`
5. Start nginx `sudo systemctl start nginx`
6. Test website. TLS cert should be valid with new expiration date
7. Remove inbound rule HTTP rule from security group
8. Log out prod instance
