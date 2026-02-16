# Laravel Sail

## 🚤 شنو هو Sail؟
**Sail** هو "واجهة سهلة" (Wrappper) لـ Docker Compose.
بلاصت ما تكتب `docker-compose exec ...`، كتكتب `sail ...` وهادشي كيسهل الأمور بزاف.
هو الطريقة الرسمية الموصى بيها لبدء مشروع Laravel جديد.

---

## 🛠️ تثبيت Sail
إذا زدتي باكيج `laravel/sail` لمشروعك:
```bash
php artisan sail:install
```
هاد الأمر غيقاد ليك `docker-compose.yml` فيه PHP, MySql, Redis, Mailpit...

---

## 🏃‍♂️ أوامر Sail اليومية
```bash
# طلق السيرفر
./vendor/bin/sail up -d

# وقف السيرفر
./vendor/bin/sail stop

# دخل أوامر Artisan
./vendor/bin/sail artisan migrate

# دخل أوامر Composer
./vendor/bin/sail composer require some/package

# دخل وسك الكونتينر Shell
./vendor/bin/sail shell
```

**نصيحة:** زيد `alias sail='./vendor/bin/sail'` فـ `.bashrc` ديالك باش متبقاش تكتب المسار كامل.

---

## 🌐 Share Your Site
Sail فيه ميزة زوينة باش تشارك السيت ديالك (Localhost) مع شي حد بعيد:
```bash
sail share
```
غيعطيك رابط عمومي بحال `http://mysite.random.tld` كيوصل للبيسي ديالك مباشرة (باستعمال Expose).

---

## 💡 الخلاصة
Sail كيجمع قوة Docker مع سهولة Laravel. هو أفضل صديق للمطورين الجداد والقدام.
