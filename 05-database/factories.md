# المصانع (Factories)

## 🏭 شنو هي Factories؟
إذا كانت Seeders كتصلح للبيانات الثابتة (مثل Admin, Countries)، فالـ **Factories** كتصلح باش تعمر قاعدة البيانات بآلاف البيانات "الوهمية" (Fake Data) للتجربة.
لاراڤيل كيستعمل مكتبة **Faker** باش يولد هاد البيانات (أسماء، إيميلات، نصوص...).

---

## 🛠️ تعريف Factory
لكل Model، كيكون عندو Factory.
فـ `database/factories/UserFactory.php`:

```php
public function definition(): array
{
    return [
        'name' => fake()->name(),
        'email' => fake()->unique()->safeEmail(),
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
}
```

---

## 🧪 الاستعمال
تقدر تستعمل Factory فـ Seeder أو فـ Tests.

```php
// كريي 10 ديال users وخزنهم فـ DB
User::factory()->count(10)->create();

// كريي user ومعاه 3 ديال posts دياولو (باستعمال العلاقات)
User::factory()
    ->has(Post::factory()->count(3))
    ->create();
```

---

## 💡 الخلاصة
Factories هي أقوى أداة باش تيستي السيت ديالك ببيانات كتيرة وواقعية (Pagination, Search performance...) بلا ما تضرب تمارة.
