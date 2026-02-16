# المايغريشن (Migrations)

## 📦 شنو هي Migrations؟
الـ **Migrations** هي بحال "Version Control" لقاعدة البيانات ديالك.
هي ملفات PHP كتوصف شكل الجداول (Tables) والأعمدة (Columns).
بهاد الطريقة، الفريق كامل كيكون عندو نفس الـ Database Structure بلا ما تبارطاجيو ملفات SQL يدوياً.

---

## 🛠️ إنشاء Migration
```bash
php artisan make:migration create_posts_table
```
الملف غيتزاد فـ `database/migrations`.

---

## 📝 كتابة الجدول
في دالة `up()`، كتوصف الجدول:

```php
public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id(); // Auto-increment integer 'id'
        $table->string('title'); // Varchar
        $table->text('body'); // Text
        $table->boolean('is_published')->default(false);
        $table->foreignId('user_id')->constrained(); // Foreign key to users table
        $table->timestamps(); // created_at & updated_at
    });
}
```

في دالة `down()`، كتقول شنو يوقع إلا بغينا نرجعو اللور (Reverse):
```php
public function down(): void
{
    Schema::dropIfExists('posts');
}
```

---

## 🚀 تشغيل Migrations
باش تطبق التغييرات على قاعدة البيانات:
```bash
php artisan migrate
```

إلا بغيتي تمسح كلشي وتعاود من الأول:
```bash
php artisan migrate:fresh
```

---

## 💡 علاش Migrations مهمة؟
1.  **التنظيم:** كتعرف التاريخ ديال التغييرات فقاعدة البيانات.
2.  **التعاون:** أي واحد جديد فالفريق كيدير `php artisan migrate` وها هو واجد.
3.  **الاستقرار:** كتقدر تجرب التغييرات وترجع فيها (Rollback) بسهولة.
