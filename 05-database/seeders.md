# البذور (Seeders)

## 🌱 شنو هي Seeders؟
الـ **Seeding** هي العملية باش "تزرع" قاعدة البيانات ديالك ببيانات أولية (Initial Data).
مثلا:
-   حساب Admin افتراضي باش تقدر تدخل للسيت.
-   ليستة ديال الدول والمدن.
-   إعدادات الموقع.

---

## ✍️ إنشاء Seeder
```bash
php artisan make:seeder UserSeeder
```

فـ `run()` method:
```php
public function run(): void
{
    DB::table('users')->insert([
        'name' => 'Admin User',
        'email' => 'admin@example.com',
        'password' => Hash::make('password'),
    ]);
}
```

---

## 🚀 تشغيل Seeders
باش تخدمهم كاملين، عيط عليهم فـ `DatabaseSeeder.php`:

```php
public function run(): void
{
    $this->call([
        UserSeeder::class,
        CountrySeeder::class,
    ]);
}
```

ومن بعد فالـ Terminal:
```bash
php artisan db:seed
```
أو ديرها مع migration دقة وحدة:
```bash
php artisan migrate:fresh --seed
```
(هادي كتمسح كلشي، كتعاود تبني الجداول، وكتعمرهم).

---

## 💡 الخلاصة
Seeders كيعاونوك باش ما تبقاش كل مرة تعمر الـ Database بيدك فاش كتبغي تجرب السيت فجهاز جديد.
