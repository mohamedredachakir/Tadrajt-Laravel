# قاعدة البيانات (Database Container)

## 🗄️ كونتينر MySQL/PostgreSQL
بدل ما تثبت قاعدة البيانات فلابتوب ديالك (XAMPP/MAMP)، استعمل **Docker Image**.
هاد الطريقة نظيفة وكتقدر دير `docker-compose down` بحال كأنك مسحتي كلشي من الزيرو.

---

## 🏗️ إعداد MySQL فـ Docker Compose
فملف `Dockerfile-Compose.yml`:

```yaml
    db:
        image: mysql:8.0
        container_name: mysql_db
        restart: unless-stopped
        environment:
            MYSQL_DATABASE: laravel_db
            MYSQL_ROOT_PASSWORD: root_password
            MYSQL_PASSWORD: user_password
            MYSQL_USER: myuser
        volumes:
            - ./db_data:/var/lib/mysql
        ports:
            - "3306:3306"
```

---

## 💡 علاش Volumes؟
في قسم `volumes`، ربطنا مجلد `./db_data` بالمسار `/var/lib/mysql`.
هادشي **ضروري**! إذا ما درتيهش، فكل مرة تطفي الكونتينر، البيانات **غتمشي**.
بـ Volumes، البيانات كتخزن فجهازك المحلي (Host Machine) وكتبقى محفوظة.

---

## 🛠️ إدارة قاعدة البيانات
باش تدخل وسط MySQL وتشوف الجداول، بلا ما تشارجي PHPMyAdmin:

```bash
docker exec -it mysql_db mysql -u myuser -p
```
دخل الباسوورد ودير `SHOW TABLES;`.

أو نزل **TablePlus** أو **DBeaver** وكونيكتيه بـ `127.0.0.1:3306`.
