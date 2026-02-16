# مكونات (Components)

## 🧩 شنو هو Component؟
الـ **Component** هو طريقة باش تعزل جزء من الـ UI ديالك (مثل زر، قائمة، بطاقة مستخدم) وتعاود تستعملو ففين ما بغيتي، مع إمكانية تغيير المحتوى والخصائص (Props).

---

## 🛠️ إنشاء المكون
استعمل Artisan باش تكريي مكون جديد:

```bash
php artisan make:component Alert
```

غيتزادو جوج ملفات:
1.  **Class:** `app/View/Components/Alert.php` (للـ Logic).
2.  **View:** `resources/views/components/alert.blade.php` (للتصميم).

---

## 🏗️ كيفاش نستعملوه؟
فالـ View ديال المكون (`alert.blade.php`):
```html
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>
```

فالـ Blade العادي:
```html
<x-alert type="error">
    <strong>Whoops!</strong> Something went wrong!
</x-alert>
```

الـ `<x-alert>` هو اسم المكون (Component).
الـ `type` هو Prop.
المحتوى الوسط هو `$slot`.

---

## 📥 Props (الخصائص)
باش تقبل Props (مثلا `$type`)، خاصك تزيدها فالـ Constructor ديال الكلاس:

```php
// app/View/Components/Alert.php
public function __construct(
    public string $type
) {}
```
أو مباشرة فالـ Anonymous Component (بلا كلاس) عن طريق `@props`:
```html
<!-- components/button.blade.php -->
@props(['type' => 'primary'])

<button class="btn btn-{{ $type }}">
    {{ $slot }}
</button>
```

---

## 💡 علاش المكونات؟
المكونات كتخلي الـ Frontend ديالك منظم (Modular) وسهل فالصيانة. بلاصت ما تعاود نفس الكود فكل صفحة، بدل غير المكون الرئيسي وهادشي غينعكس فالمشروع كامل.
