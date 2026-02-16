# أنماط التصميم (Design Patterns)

## 🧩 شنو هي Design Patterns؟
الـ **Design Patterns** هي حلول "مجربة ومعروفة" لمشاكل كتكرر ديما فالبرمجة.
ماشي خاصك تستعملهم ديما، ولكن فاش كيكبر المشروع، كيعاونوك تنظم وتسهل الصيانة.
لاراڤيل مبني على هاد الأنماط.

---

## 🏗️ 1. MVC (Model-View-Controller)
هذا هو الأساس.
-   **Model:** Data & Logic (قاعدة البيانات).
-   **View:** Presentation (HTML).
-   **Controller:** Coordinator (الوسيط).

---

## 🏭 2. Repository Pattern (اختياري)
فاش كيكون الـ Controller فيه بزاف د الـ Logic (Complex Queries, Caching)، كدير طبقة (Layer) جديدة سميتها **Repository**.
الهدف: عزل الـ Controller عن تفاصيل قاعدة البيانات.

```php
// UserRepositoryInterface.php
interface UserRepositoryInterface {
    public function all();
}

// EloquentUserRepository.php
class EloquentUserRepository implements UserRepositoryInterface {
    public function all() {
        return User::all();
    }
}
```
فالـ Controller:
```php
public function index(UserRepositoryInterface $users) {
    return $users->all();
}
```
هادشي كيسهل التبديل (مثلا بغيتي تبدل من MySql لـ ElasticSearch) والـ Testing.

---

## 💉 3. Dependency Injection (DI)
لاراڤيل كيستعمل **Service Container** باش يعطيك (Inject) الكلاسات اللي محتاجهم بلا ما دير `new Class()`.
مثلا، باش تخدم بـ Request، ما كديرش `new Request()`، ولكن كطلبها فالـ Constructor أو Method:

```php
public function store(Request $request) { ... }
```
لاراڤيل هو اللي كيتكلف بإنشاء الـ Object.

---

## 🏭 4. Factory Pattern
خدمنا بـ `User::factory()` وهذا تطبيق للـ **Factory Method Pattern**. كيعطيك طريقة موحدة لإنشاء Objects معقدة.

---

## 💡 الخلاصة
فاش تفهم Design Patterns، غتلقى راسك كتفهم "علاش لاراڤيل مصمم هكاك".
بدا بـ MVC و DI، ومن بعد شوف Repository و Decorator و Observer.
