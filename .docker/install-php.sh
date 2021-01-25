#!/bin/bash

apk add bzip2 file re2c freetds freetype icu libintl libldap libjpeg libmcrypt libpng libpq libwebp libzip nodejs npm

TMP="autoconf \
    bzip2-dev \
    freetds-dev \
    freetype-dev \
    g++ \
    gcc \
    gettext-dev \
    icu-dev \
    jpeg-dev \
    libmcrypt-dev \
    libpng-dev \
    libwebp-dev \
    libxml2-dev \
    libzip-dev \
    make \
    openldap-dev \
    postgresql-dev"

apk add $TMP

unzip /opt/oracle/instantclient-basic-linux.x64-19.10.0.0.0dbru.zip -d /opt/oracle \
    && unzip /opt/oracle/instantclient-sdk-linux.x64-19.10.0.0.0dbru.zip -d /opt/oracle \
    && ln -sf /opt/oracle/instantclient_19_10/libclntsh.so.19.1 /opt/oracle/instantclient_19_10/libclntsh.so \
    && ln -sf /opt/oracle/instantclient_19_10/libclntshcore.so.19.1 /opt/oracle/instantclient_19_10/libclntshcore.so \
    && ln -sf /opt/oracle/instantclient_19_10/libocci.so.19.1 /opt/oracle/instantclient_19_10/libocci.so \
    && rm -rf /opt/oracle/*.zip

# Configure extensions
docker-php-ext-configure gd --with-jpeg-dir=usr/ --with-freetype-dir=usr/ --with-webp-dir=usr/
docker-php-ext-configure ldap --with-libdir=lib/
docker-php-ext-configure pdo_dblib --with-libdir=lib/
docker-php-ext-configure pdo_oci --with-pdo-oci=instantclient,/opt/oracle/instantclient_19_10,19.1

docker-php-ext-install \
    bz2 \
    exif \
    gd \
    gettext \
    intl \
    ldap \
    pdo_dblib \
    pdo_pgsql \
    xmlrpc \
    zip \
    mysqli \
    pdo_mysql \
    pdo_oci

echo 'instantclient,/opt/oracle/instantclient_19_10/' | pecl install oci8

# Install Xdebug
pecl install xdebug \
    && docker-php-ext-enable oci8 \
    && docker-php-ext-enable xdebug \
    && echo "remote_host=docker.for.mac.localhost" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "remote_port=9001" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "remote_enable=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "idekey=IDE_DEBUG" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "error_reporting=E_ALL" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_startup_errors=On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "display_errors=On" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

# Install composer
cd /tmp && php -r "readfile('https://getcomposer.org/installer');" | php && \
	mv composer.phar /usr/bin/composer && \
	chmod +x /usr/bin/composer

apk del $TMP

# Install PHPUnit
curl -sSL -o /usr/bin/phpunit https://phar.phpunit.de/phpunit.phar && chmod +x /usr/bin/phpunit

# Set timezone
#RUN echo Asia/Karachi > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata
