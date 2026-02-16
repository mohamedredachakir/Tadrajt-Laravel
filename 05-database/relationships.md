# العلاقات (Relationships)

## 🤝 أنواع العلاقات
قوة Eloquent الحقيقية كتبان فـ **Relationships**.
كيفاش تربط بين الجداول (مثلا: "User عندو Post"، "Post عندو Comments").

---

### 1. واحد لواحد (One to One)
مثال: User عندو Profile واحد.

```php
// User Model
public function profile()
{
    return $this->hasOne(Profile::class);
}
```
الاستعمال: `$user->profile->bio`.

---

### 2. واحد لعدة (One to Many) – الأكثر استعمالاً
مثال: Post عندو بزاف د Comments.

```php
// Post Model
public function comments()
{
    return $this->hasMany(Comment::class);
}

// Comment Model (العكس)
public function post()
{
    return $this->belongsTo(Post::class);
}
```
الاستعمال:
```php
$comments = $post->comments; // كيجيب ليك Collection د الـ comments
echo $comment->post->title; // كيجيب ليك عنوان البوست مول الكومنت
```

---

### 3. عدة لعدة (Many to Many)
مثال: User عندو Roles، و Role عندو Users. (كتحتاج جدول وسطهم `role_user`).

```php
// User Model
public function roles()
{
    return $this->belongsToMany(Role::class);
}
```
الاستعمال:
```php
$user->roles()->attach($roleId); // زيد رول
$user->roles()->detach($roleId); // حيد رول
```

---

## ⚡ Eager Loading (مشكلة N+1)
تخيل بغيتي تجيب كتب وعناوين المؤلفين دياولهم.
```php
$books = Book::all();
foreach ($books as $book) {
    echo $book->author->name;
}
```
هاد الكود غيدير Query لكل كتاب! (N+1 Queries problem).
الحل: جيبهم دقة وحدة بـ `with`:

```php
$books = Book::with('author')->get();
```
دابا غيديرو غير 2 queries، والكود غيكون أسرع بـ 100 مرة!

---

## 💡 الخلاصة
عرف العلاقات مزيان فـ Models دياولك، وغتربح بزاف د الوقت والقوة فالتعامل مع البيانات المعقدة.
