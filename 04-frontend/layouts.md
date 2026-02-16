# التصاميم (Layouts)

## 🏗️ علاش Layouts؟
كل موقع كيكون عندو "شكل عام" (Basic Structure) مشترك فكل الصفحات (Header, Sidebar, Footer).
بلاصت ما تعاود تكتب HTML tag و Head و CSSLinks فكل صفحة، كدير **Layout** واحد وكتخلي الصفحات "ترث" (Extend) منو.

---

## 🎨 Layout رئيسي
كريي ملف فالـ `resources/views/layouts/app.blade.php`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>App Name - @yield('title')</title>
</head>
<body>
    @section('sidebar')
        This is the master sidebar.
    @show

    <div class="container">
        @yield('content')
    </div>
</body>
</html>
```

المفاهيم:
-   `@yield('content')`: هنا فين غيجي المحتوى المختلف (Placeholder).
-   `@section('sidebar') ... @show`: هذا قسم Default، وكيبان إلا ما بدلوش فالصفحة الفرعية.

---

## 🔗 استعمال Layout
فصفحة جديدة (مثلا `resources/views/child.blade.php`):

```html
@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
    @parent <!-- باش تحافظ على السايدبار الأصلي -->

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <p>This is my body content.</p>
@endsection
```

النتيجة:
-   لاراڤيل غيمشي للـ `layout/app.blade.php`.
-   غيعوض `@yield('title')` بـ "Page Title".
-   غيعوض `@yield('content')` بالـ Body ديالك.
-   الـ Sidebar غيكون فيه السايدبار الأصلي + المقطع اللي زدتي.

---

## 🧩 Components Layouts
تقدر تستعمل Components كـ Layouts (طريقة جديدة ومحبوبة فـ Laravel 7+):

```html
<!-- resources/views/components/layout.blade.php -->
<html>
    <!-- ... -->
    <body>
        {{ $slot }}
    </body>
</html>
```

الاستعمال:
```html
<x-layout>
    <p>This is my body content.</p>
</x-layout>
```

---

## 💡 الخلاصة
Layouts هي العمود الفقري للتصميم فـ Laravel. كتنقص التكرار بزاف وكتجعل التعديلات الشاملة سهلة جداً.
