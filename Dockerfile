FROM php:7.4-fpm-alpine

# Comment this to improve stability on "auto deploy" environments
RUN apk update && apk upgrade

# Install basic dependencies
RUN apk -u add bash git

# Install Oracle Instantclient
RUN mkdir /opt/oracle \
    && cd /opt/oracle

ADD ./.docker/instantclient-basic-linux.x64-19.10.0.0.0dbru.zip /opt/oracle/instantclient-basic-linux.x64-19.10.0.0.0dbru.zip
ADD ./.docker/instantclient-sdk-linux.x64-19.10.0.0.0dbru.zip /opt/oracle/instantclient-sdk-linux.x64-19.10.0.0.0dbru.zip

# Install PHP extensions
ADD ./.docker/install-php.sh /usr/sbin/install-php.sh
RUN chmod +x /usr/sbin/install-php.sh
RUN /usr/sbin/install-php.sh

# Copy existing application directory contents
COPY ./.docker/*.ini /usr/local/etc/php/conf.d/
COPY . .

# Change current user to www-data
USER www-data

# Expose ports and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
