# المصادقة (Authentication)

## 🔑 تسجيل الدخول
**Authentication** هي العملية باش نتأكدو "شكون نتا" (Login).
فـ Laravel، هادشي ساهل بزاف.

---

## 📦 Starter Kits (البداية السريعة)
بلاصة ما تبني Login و Register و Reset Password من الصفر، لاراڤيل كيعطيك **Laravel Breeze**.
هو باكيج كيحط ليك هادشي كامل واجد ومقد.

```bash
composer require laravel/breeze --dev
php artisan breeze:install
php artisan migrate
```
صافي! دابا عندك نظام تسجيل دخول كامل خدام.

---

## 🛠️ التعامل اليدوي (Manually)
إلا بغيتي دير هادشي بيديك، استعمل الـ Facade `Auth`:

### Login
```php
use Illuminate\Support\Facades\Auth;

if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // النجاح
    $request->session()->regenerate();
    return redirect()->intended('dashboard');
}

// الفشل
return back()->withErrors([...]);
```

### معرفة المستخدم الحالي
```php
$user = Auth::user();
$id = Auth::id();
```

### تحقق هل هو مسجل الدخول؟
```php
if (Auth::check()) {
    // The user is logged in...
}
```

### Logout
```php
Auth::logout();
$request->session()->invalidate();
$request->session()->regenerateToken();
```

---

## 💡 الخلاصة
Authentication فـ Laravel مرنة بزاف. بدا بـ Breeze للمشاريع البسيطة، واستعمل الـ Manual Auth إلا بغيتي Customization عالي.
