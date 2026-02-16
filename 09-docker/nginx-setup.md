# إعداد Nginx (Nginx Setup)

## 🌐 شنو هو Nginx؟
PHP بوحدو ماقدرش يجاوب على طلبات HTTP اللي جاية من المتصفح (Browser).
خاصو خادم ويب (Web Server) بحال Nginx أو Apache.
Nginx هو الأكثر شهرة وسرعة لتطبيقات Laravel.

---

## 🛠️ ملف التكوين (Configuration)
غتحتاج ملف `docker/nginx/conf.d/defaul.conf`:

```nginx
server {
    listen 80;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/public;

    # توجيه كلشي لـ index.php
    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }

    # معالجة ملفات PHP
    location ~ \.php$ {
        # توجيه الطلبات لـ PHP-FPM Service (app:9000)
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```

---

## 💡 شرح الكود
-   **listen 80:** كيستمع للمنفذ 80 (داخل الكونتينر).
-   **root /var/www/public:** نقطة البداية هي مجلد `public` ديال Laravel.
-   **fastcgi_pass app:9000:** هنا السر! Nginx كيقول لـ PHP-FPM (اللي سميناه `app` فـ docker-compose): "هاك عالج هاد الملف ورجع ليا النتيجة".

بهاد الطريقة، Nginx كيتكلف بالملفات الثابتة (images, css) وPHP كيتكلف بالديناميك.
