# التحقق من الطلبات (Requests & Validation)

## ✅ علاش خاصنا Validation؟
عمرك ما تيق فالمستخدم! (Never trust user input).
أي بيانات جاية من عند المستخدم (Form, Query Params...) خاصك تفيريفيها قبل ما تخدم بيها أو تخزنها فقاعدة البيانات. هادشي باش تحمي راسك من الأخطاء والهجمات.

---

## 🛡️ طرق الـ Validation

### 1. الـ Validation البسيط (داخل Controller)
تقدر تستعمل دالة `validate` مباشرة فالـ Controller:

```php
public function store(Request $request) {
    $validated = $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ]);

    // إذا وصل هنا، يعني الـ Validation داز مزيان
    // إذا فشل، لاراڤيل كيرد المستخدم للصفحة السابقة مع الأخطاء أوتوماتيكياً!
}
```

### 2. Form Requests (الطريقة الاحترافية)
إذا كان عندك Validation معقد، حسن ليك تستعمل **Form Request Class**.
```bash
php artisan make:request StorePostRequest
```
هادشي كينظم الكود:
```php
// app/Http/Requests/StorePostRequest.php
public function rules(): array
{
    return [
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ];
}
```
فالـ Controller، كتعوض `Request` بـ `StorePostRequest`:
```php
public function store(StorePostRequest $request) {
    // الكود ديالك هنا، ما غيوصل هنا غير إذا كان الـ request valid
}
```

---

## 📝 قواعد مشهورة (Common Rules)
-   `required`: الحقل ضروري.
-   `email`: خاصو يكون إيميل صحيح.
-   `numeric`: خاصو يكون رقم.
-   `min:8` / `max:255`: الحد الأدنى والأقصى.
-   `unique:users`: ما كاينش بحالو فالـ Table `users`.
-   `confirmed`: (للـ Pwd) خاصو confirmation field معاه.

---

## 💬 رسائل الخطأ (Error Messages)
لاراڤيل كيجي برسائل جاهزة بالإنجليزي. تقدر ترجمهم فملف `lang/ar/validation.php`.
باش تعرض الأخطاء فالـ Blade:

```html
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
```
أو لكل حقل بوحدو:
```html
@error('title')
    <div class="error">{{ $message }}</div>
@enderror
```
