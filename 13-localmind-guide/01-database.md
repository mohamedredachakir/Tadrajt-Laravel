# قاعدة البيانات (Database Schema)

## 🗄️ تصميم الجداول
مشروع **LocalMind** بسيط وفعال، فيه 4 جداول أساسية:

### 1. **Users** (المستخدمين)
الجدول الأساسي باش المستخدم يسجل الدخول.
غيكون عندو `role` باش نفرقو بين Admin و User (اختياري).
```php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('password');
    $table->enum('role', ['admin', 'user'])->default('user');
    $table->rememberToken();
    $table->timestamps();
});
```

### 2. **Questions** (الأسئلة)
كل سؤال كيحتاج لعنوان، محتوى، والمدينة (Location).
```php
Schema::create('questions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('title');
    $table->text('content');
    $table->string('location')->nullable();
    $table->timestamps();
});
```

### 3. **Responses** (الأجوبة)
المستخدمين كيجابو على أسئلة بعضياتهم.
```php
Schema::create('responses', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('question_id')->constrained()->onDelete('cascade');
    $table->text('content');
    $table->timestamps();
});
```

### 4. **Favorites** (المفضلة)
جدول "Pivot" باش المستخدم يسجل سؤال عجبو.
```php
Schema::create('favorites', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('question_id')->constrained()->onDelete('cascade');
    $table->timestamps();
    
    // المستخدم يقدر يفضل السؤال مرة وحدة فقط
    $table->unique(['user_id', 'question_id']);
});
```

---

## 🏃 تنفيد Migrations
بعدما تقاد ملفات Migration فـ `database/migrations` (باستعمال `php artisan make:migration create_xxx_table`)، دير:
```bash
php artisan migrate
```
مبروك! قاعدة البيانات واجدة.
