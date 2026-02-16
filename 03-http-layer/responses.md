# الردود (Responses)

## 📤 أنواع الردود
لاراڤيل كيوفر طرق بزاف باش ترد الجواب (Response) للمستخدم من بعد ما تعالج الطلب ديالو.

### 1. Strings & Arrays
```php
Route::get('/', function () {
    return 'Hello World'; // كترجع كـ HTML عادي
});

Route::get('/', function () {
    return [1, 2, 3]; // لاراڤيل كيحولها لـ JSON أوتوماتيكياً!
});
```

### 2. Response Objects
باش تتحكم أكثر (Status Code, Headers):
```php
return response('Hello World', 200)
    ->header('Content-Type', 'text/plain');
```

### 3. Views (صفحات HTML)
هادشي اللي غتستعمل بزاف:
```php
return view('user.profile', ['user' => $user]);
```

### 4. JSON Responses (للـ API)
```php
return response()->json([
    'name' => 'Abigail',
    'state' => 'CA',
]);
```

### 5. Redirects (إعادة التوجيه)
```php
return redirect('/home');
return redirect()->route('login');
return back()->withInput(); // الرجوع للصفحة السابقة مع الحفاظ على المدخلات
```

### 6. File Downloads (تحميل الملفات)
```php
return response()->download($pathToFile);
return response()->download($pathToFile, $name, $headers);
```

---

## ✨ Flash Data (رسائل مؤقتة)
فاش كدير Redirect (مثلا بعد إضافة `Post`)، كتبغي تعرض رسالة نجاح.
```php
return to_route('dashboard')->with('status', 'Profile updated!');
```
فالـ View:
```html
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif
```
هاد البيانات كتبقى غير للطلب الجاي وكتمسح (One-time usage).
