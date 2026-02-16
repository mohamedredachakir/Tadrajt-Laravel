# الإعداد متعدد الحاويات (Multi-Container Setup)

## 🏗️ 1. App Service (PHP)
أول حاجة، خاصنا كونتينر فين كاين الكود ديالنا.
غنديرو `docker/php/Dockerfile` بحال هكا:

```dockerfile
# استعمل صورة PHP-FPM
FROM php:8.2-fpm

# ثبت الأدوات الأساسية (System Dependencies)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# ثبت PHP Extensions الضرورية لـ Laravel
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# جيب Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# حدد مجلد العمل (Working Directory)
WORKDIR /var/www
```
هادي هي "القلب" د المشروع. هنا فين كيتنفذ كود PHP.

---

## 🏗️ 2. docker-compose.yml
دابا غنجمعو كلشي فمكان واحد:

```yaml
version: '3.8'
services:
    # 🔹 PHP App Service
    app:
        build:
            context: .
            dockerfile: docker/php/Dockerfile
        image: laravel-app
        container_name: laravel-app
        restart: unless-stopped
        working_dir: /var/www
        volumes:
            - ./src:/var/www
            - ./docker/php/local.ini:/usr/local/etc/php/conf.d/local.ini
        networks:
            - laravel

    # 🔹 Web Server (Nginx)
    webserver:
        image: nginx:alpine
        container_name: laravel-webserver
        restart: unless-stopped
        ports:
            - "8080:80"
        volumes:
            - ./src:/var/www
            - ./docker/nginx/conf.d/:/etc/nginx/conf.d/
        depends_on:
            - app
        networks:
            - laravel

    # 🔹 Database (MySQL)
    db:
        image: mysql:8.0
        container_name: laravel-db
        restart: unless-stopped
        environment:
            MYSQL_DATABASE: ${DB_DATABASE}
            MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
            MYSQL_PASSWORD: ${DB_PASSWORD}
            MYSQL_USER: ${DB_USERNAME}
            SERVICE_TAGS: dev
            SERVICE_NAME: mysql
        volumes:
            - ./docker/mysql/db_data:/var/lib/mysql
        networks:
            - laravel

networks:
    laravel:
        driver: bridge
```

---

## 💡 تعليقات مهمة
-   **Volumes:** كنربطو كود `src` المحلي بـ `/var/www` فالكونتينر باش التغييرات تبان ديريكت بدون rebuild.
-   **Networks:** كل الخدمات مربوطة بشبكة وحدة `laravel` باش يقدرو يهضرو مع بعضياتهم.
-   **Environment:** القيم بحال `DB_PASSWORD` كنجيبوهم من `.env`.
