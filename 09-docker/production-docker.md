# دوكر فالإنتاج (Production Docker)

## 🐳 الفرق بين Local و Production
فالعمل المحلي (Development)، كنخدمو Docker-Compose باش نشوفو التغييرات بسرعة (`volumes`).
ولكن فـ الإنتاج (Production)، خاصنا **الأمان والسرعة**.

---

## 🔒 1. الأمان
-   ما تستغملش `root user` كـ مستخدم PHP داخل الكونتينر.
-   نقص الصور د Docker (Multistage Builds) باش يكونو خفاف.
-   ما تشاركش `.env` أو مفاتيح سرية (Secrets) فـ GitHub، استعمل `Docker Swarm` أو `Kubernetes Secrets`.

---

## 📦 2. Multi-stage Builds (`Dockerfile.prod`)
عوض ما نحطو Composer و Git فالصورة النهائية، كنبنيو مراحل:

```dockerfile
# المرحلة 1: تثبيت Dependencies
FROM composer:2 as vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# المرحلة 2: بناء الصورة النهائية (Final Image)
FROM php:8.2-fpm-alpine
WORKDIR /var/www

# نقل الكود بدون Git ومسائل زائدة
COPY . .
COPY --from=vendor /app/vendor /var/www/vendor

# الصلاحيات (Permissions)
RUN chown -R www-data:www-data /var/www/storage
```

---

## 🚀 3. Orchestration
باش تدير Scalability (تزيد السيرفرات)، استعمل **Kubernetes (K8s)** أو **Docker Swarm**.
هاد الأدوات كتخولك تزيد كونتينرات PHP حسب الضغط (Auto-scaling).

---

## 💡 نصائح ذهبية
-   استعمل **Alpine Images** ديما حيت صغار بزاف.
-   استعمل **Nginx** كـ Proxy أمام التطبيق.
-   دير **Migrate** لقاعدة البيانات فمرحلة Deployment، ماشي فـ `CMD` ديال الكونتينر باش ما يتعاودش كل مرة.
