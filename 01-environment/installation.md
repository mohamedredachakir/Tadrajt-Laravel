# تثبيت لاراڤيل محلياً (Installation)

## 🛠️ المتطلبات (Requirements)
قبل ما تبدا، خاص يكون عندك هاد الأدوات مثبتة فـ الحاسوب ديالك:
1.  **PHP**: (النسخة 8.1 أو أحدث).
2.  **Composer**: مدير الحزم (Package Manager) ديال PHP.
3.  **Node.js & NPM**: باش تخدم الـ Frontend (اختياري ولكن مهم).

---

## 📥 1. تثبيت PHP و Composer
### Windows
أسهل طريقة هي تستعمل **Laragon** أو **XAMPP**.
-   **Laragon**: كيجيب ليك كلشي واجد (PHP, MySQL, Apache/Nginx, Composer, Node.js). كنصحو بـ Laragon حيت ساهل بزاف.
-   بعد التثبيت، تأكد بلي `php` و `composer` خدامين فالـ Terminal:
    ```bash
    php -v
    composer -v
    ```

### macOS
تقدر تستعمل **Homebrew**:
```bash
brew install php
brew install composer
```

### Linux (Ubuntu)
```bash
sudo apt update
sudo apt install php-cli unzip curl
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

---

## 🚀 2. تثبيت Laravel Installer
من الأحسن تثبت الـ Laravel Installer باش تكريي مشاريع جديدة بسهولة.
افتح الـ Terminal وكتب:

```bash
composer global require laravel/installer
```

من بعد، تأكد بلي الـ Path مقاد باش تقدر تستعمل أمر `laravel`.

---

## ⚡ 3. إنشاء مشروع جديد
دابا تقدر تكريي أول مشروع لاراڤيل ديالك:

```bash
laravel new my-app
```

أو باستعمال Composer مباشرة:

```bash
composer create-project laravel/laravel my-app
```

---

## 🏃‍♂️ 4. تشغيل المشروع
دخل للملف ديال المشروع وخدم السيرفر المحلي:

```bash
cd my-app
php artisan serve
```

دابا، دخل لـ `http://localhost:8000` فالمتصفح، وغتشوف صفحة الاستقبال ديال Laravel! 🎉
