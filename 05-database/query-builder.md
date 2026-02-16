# باني الاستعلامات (Query Builder)

## 🛠️ شنو هو Query Builder؟
بعض المرات، كتكون محتاج دير Query معقدة شوية، أو ما باغيش تستعمل Eloquent Models.
هنا كينفع **Query Builder**. كيعطيك واجهة (Interface) سلسلة لإنشاء SQL Queries.

---

## 📝 أمثلة

### جيب البيانات (Select)
```php
$users = DB::table('users')->get(); // Select *

$user = DB::table('users')->where('name', 'John')->first(); // Row واحد

$email = DB::table('users')->where('name', 'John')->value('email'); // قيمة وحدة
```

### الترتيب والحد (Ordering & Limit)
```php
$users = DB::table('users')
                ->orderBy('name', 'desc')
                ->limit(10)
                ->get();
```

### Joins (الربط)
```php
$users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
            ->get();
```

### Aggregates (الحسابات)
```php
$count = DB::table('users')->count();
$price = DB::table('orders')->max('price');
$avg = DB::table('orders')->avg('price');
```

---

## 🆚 Eloquent vs Query Builder
-   **Eloquent:** كترجع ليك Objects (Models)، ساهلة فالتعامل، وفيها Relationships. (أكثر استعمالاً).
-   **Query Builder:** كترجع ليك Arrays أو stdClass Objects، أسرع شوية فالأداء (Performance) فالعمليات الكبيرة بزاف.

---

## 💡 الخلاصة
لاراڤيل كيعطيك الخيار. بدا بـ Eloquent ديما، وإذا حسيتي بلي الـ Query ثقيلة بزاف أو معقدة، دوز لـ Query Builder.
