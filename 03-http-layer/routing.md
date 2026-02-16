# التوجيه (Routing)

## 🛤️ شنو هو Routing؟
فـ Laravel، الكود ديالك كيبدا من الـ **Route**.
أي رابط (URL) كيدخل المستخدم فالمتصفح خاص يكون معرف فملف **`routes/web.php`**.

الـ Route دورو يشد الرابط، ويصيفطو للمكان المناسب للـ Logic (غالبا Controller).

---

## 🎯 الأساسيات
أبسط Route ممكن تعرفو هو:

```php
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'مرحبا بيك في لاراڤيل!';
});
```
فاش تدخل لـ `your-site.com/greeting`، غتشوف "مرحبا بيك في لاراڤيل!".

الأنواع ديال HTTP Methods:
-   `Route::get('/items', ...)` → للقراءة
-   `Route::post('/items', ...)` → للإضافة
-   `Route::put('/items/{id}', ...)` → للتعديل
-   `Route::delete('/items/{id}', ...)` → للمسح

---

## 🔗 Route Parameters
كيفاش تمشط (Capture) جزء من الرابط (مثلا `id` ديال المستخدم)؟

```php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
```
تقدر تزيد `?` باش يكون اختياري، وتعطيه Default value:
```php
Route::get('/user/{name?}', function ($name = 'Guest') {
    return $name;
});
```

---

## 🏷️ Named Routes (تسمية المسارات)
دائما سمي الـ Routes دياولك! هادشي كيعاونك باش تبدل الرابط في المستقبل بلا ما يتهرس الكود فالـ Views.

```php
Route::get('/user/profile', [UserController::class, 'show'])->name('profile');
```
دابا تقدر تخدم بيه فالـ Blade:
```html
<a href="{{ route('profile') }}">Profile</a>
```
أو فالـ Controller دير Redirect:
```php
return to_route('profile');
```

---

## 📦 Route Groups
باش تنظم الكود، تقدر تجمع الـ Routes اللي عندهم صفات مشتركة (Middleware, Prefix, Name...).

```php
Route::middleware(['auth'])->prefix('admin')->group(function () {
    
    Route::get('/dashboard', function () {
        // Matches "admin/dashboard" URL
    });
    
    Route::get('/settings', function () {
        // Matches "admin/settings" UR
    });
});
```

---

## 💡 الخلاصة
الـ Routes هما البوابة ديال التطبيق ديالك. نظمهم مزيان، واستعمل `Named Routes` ديما.
