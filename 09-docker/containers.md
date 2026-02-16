# حاويات دوكر (Docker Containers)

## 🐳 علاش Docker من جديد؟
شرحنا الأساسيات فلول، ودابا غنشوفو كيفاش تستعمل **Docker** فالـ Production أو فالعمل المتقدم.
الهدف هو: **Environment موحد** عند الفريق كامل وفي السيرفر.

---

## 📄 Dockerfile
إذا ما كنتيش كتستعمل Sail، خاصك `Dockerfile`.
هذا ملف كيوصف "الصورة" (Image) ديال المشروع.

```dockerfile
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
```

---

## 🐙 Docker Compose
باش تجمع PHP, MySQL, Redis, Nginx فبلاصة وحدة، كنستعملو `docker-compose.yml`.

```yaml
services:
    laravel.test:
        build:
            context: ./vendor/laravel/sail/runtimes/8.2
            dockerfile: Dockerfile
        ports:
            - '${APP_PORT:-80}:80'
        environment:
            WWWUSER: '${WWWUSER}'
        volumes:
            - '.:/var/www/html'
    
    mysql:
        image: 'mysql/mysql-server:8.0'
        ports:
            - '${FORWARD_DB_PORT:-3306}:3306'
        environment:
            MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
            MYSQL_DATABASE: '${DB_DATABASE}'
```

---

## 🚀 أوامر مفيدة
-   `docker-compose up -d`: طلق الخدمات فالخلفية.
-   `docker-compose down`: طفي كلشي.
-   `docker-compose exec app bash`: دخل وسط الكونتينر ديال الـ App.

---

## 💡 الخلاصة
Docker كيخليك تهنى من مشاكل "It works on my machine". كودك خدام عندك = خدام عند صاحبك = خدام فالسيرفر.
