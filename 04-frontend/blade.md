# قوالب بلايد (Blade Templates)

## 🗡️ شنو هو Blade؟
Blade هو محرك القوالب (Templating Engine) القوي والبسيط اللي كيجي مع Laravel.
كيسمح ليك تكتب HTML وتخلط معاه PHP Code بطريقة نظيفة وسهلة، بلا ما تعذب راسك بـ `<?php echo $var; ?>` كل مرة.

الملفات ديال Blade كتكون فـ `resources/views` وكتسالي بـ `.blade.php`.

---

## 🎨 عرض البيانات
باش تافيشي شي متغير (Variable) جاي من Controller:

```html
<h1>Hello, {{ $name }}</h1>
```
لاراڤيل كيحول `{{ }}` لـ `htmlspecialchars` باش يحميك من هجمات XSS.
إذا بغيتي تافيشي HTML كما هو (مثلا جاي من Editor)، استعمل:
```html
{!! $content !!}
```
*(⚠️ رد بالك: استعمل هادي غير إذا كنتي متيقن من المحتوى!)*

---

## 🔄 التحكم (Control Structures)
Blade كيوفر ليك اختصارات (Directives) بحال `@if`, `@foreach`.

### الشروط (Conditionals)
```html
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif
```

### الحلقات (Loops)
```html
@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
```

---

## 📥 تضمين الملفات (Including Sub-Views)
إذا بغيتي تعاود تستعمل شي جزء (مثلا Header):
```html
@include('shared.header')

<div>
    <!-- Content -->
</div>

@include('shared.footer')
```

---

## 💡 الخلاصة
Blade كيسهل عليك تكتب Frontend نظيف. ما كتحتاجش تتعلم لغة جديدة، غير شوية ديال Directives بساط.
