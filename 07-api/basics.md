# REST API

## 🔌 شنو هو REST API؟
API كتعني (Application Programming Interface). فاش كتصاوب **REST API**، نتا كتوفر البيانات (JSON) لتطبيقات أخرى (Mobile App, Frontend SPA like React/Vue) بلاصة ما تصيفط HTML.

---

## 🛠️ إنشاء API Controller
```bash
php artisan make:controller Api/UserController --api
```
الخيار `--api` كيحيد دوال `create` و `edit` اللي كنحتاجوهم غير فالـ Web (حيت API ما فيهش Forms HTML).

---

## 🚦 Defining API Routes
الـ Routes ديال API كيتعرفو فملف `routes/api.php` (فـ Laravel 10) أو كيتزادو يدويا فـ Laravel 11.
الفرق الأساسي هو انهم كياخدو Prefix `/api` وكيكون عندهم Middleware `api` (Throttle, JSON responses...).

```php
Route::apiResource('users', UserController::class);
```
الرابط غيولي: `GET /api/users`.

---

## 🗝️ API Authentication (Sanctum)
أحسن طريقة للـ Auth فالـ API هي **Laravel Sanctum**.

1.  **Install:** `php artisan install:api`
2.  **Login:**
    ```php
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
        
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
        
        $token = $user->createToken('my-app-token')->plainTextToken;
        
        return response()->json(['token' => $token]);
    }
    ```
3.  **Protect Routes:**
    ```php
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    ```

---

## 📦 API Resources (Transformation)
باش تتحكم فالسكل ديال JSON اللي خارج (مثلا تخبي `password`، تبدل `created_at` لـ timestamp)، استعمل **Resources**.

```bash
php artisan make:resource UserResource
```

```php
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'full_name' => $this->first_name . ' ' . $this->last_name,
        'email' => $this->email,
        // 'password' => $this->password, // مخفية
    ];
}
```

استعمالها فالـ Controller:
```php
return new UserResource($user);
// أو
return UserResource::collection(User::all());
```

---

## 💡 الخلاصة
بناء API فـ Laravel ساهل ومنظم بفضل Resources و Sanctum.
