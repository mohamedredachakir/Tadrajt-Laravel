# التفويض (Authorization)

## 👮‍♂️ شنو هو Authorization؟
إذا كانت Authentication هي "شكون نتا؟"، فالـ **Authorization** هي "واش عندك الحق دير هادشي؟".
(مثلا: واش عندك الحق تمسح هاد البوست؟).

---

## 🚪 Gates (البوابات)
الـ **Gates** هي دوال (Closures) بسيطة كتعرفها فـ `AppServiceProvider` (أو `AuthServiceProvider` قديما).

```php
// تعريف Gate
Gate::define('update-post', function (User $user, Post $post) {
    return $user->id === $post->user_id;
});
```

الاستعمال:
```php
if (Gate::allows('update-post', $post)) {
    // عندو الحق
}

// أو
Gate::authorize('update-post', $post); // كترمي Exception 403 إلا ماكانش عندو الحق
```

---

## 📜 Policies (السياسات)
باش تنظم الكود، لكل Model كتدير ليه **Policy** خاص بيه.
```bash
php artisan make:policy PostPolicy --model=Post
```

الكلاس كتجمع الـ Logic كامل:
```php
class PostPolicy
{
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }
    
    public function delete(User $user, Post $post): bool
    {
        return $user->is_admin;
    }
}
```

الاستعمال فالـ Controller:
```php
public function update(Request $request, Post $post)
{
    $this->authorize('update', $post);
    // ...
}
```

الاستعمال فالـ Blade:
```html
@can('update', $post)
    <button>Edit Post</button>
@endcan
```

---

## 💡 الخلاصة
استعمل **Policies** ديما للمشاريع المتوسطة والكبيرة. كتنظم Logic الصلاحيات وكتخليه واضح.
