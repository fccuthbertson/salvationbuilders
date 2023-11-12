# Salvation Builders

## TLS
### Renew LetsEncrypt Cert
1. Log into prod instance
2. Stop nginx `sudo systemctl stop nginx`
3. Add add HTTP inbound rule to security group
4. Renew Cert `sudo certbot renew --dry-run` to test 
5. Run `sudo certbot renew`
6. Start nginx `sudo systemctl start nginx`
7. Test website. TLS cert should be valid with new expiration date
8. Remove inbound rule HTTP rule from security group
9. Log out prod instance
