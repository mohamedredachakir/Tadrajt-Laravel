# حاوية الخدمات (Service Container)

## 📦 شنو هو Service Container؟
الـ **Service Container** هو "القلب" ديال لاراڤيل. هو أداة قوية بزاف لإدارة **Class Dependencies** (الاعتماديات) و **Dependency Injection**.

ببساطة: هو "صندوق سحري" كيعرف كيفاش يصاوب أي Class بغيتيها، وكيعرف شنو كتحتاج باش تخدم.

---

## 🧠 Dependency Injection (الحقن)
قبل ما نهضرو على Container، خاصنا نفهمو **Dependency Injection**.

تخيل عندك Class سميتها `UserController` وكتحتاج Class أخرى سميتها `UserRepository` باش تجيب البيانات.

### الطريقة القديمة (بدون Injection):
```php
class UserController extends Controller {
    public function show($id) {
        $userRepo = new UserRepository(); // حنا كرييناها بيدينا (Hard coded)
        return $userRepo->find($id);
    }
}
```
المشكل هنا: صعيب تبدل `UserRepository` من بعد (مثلا للـ Testing).

### طريقة لاراڤيل (Dependency Injection):
```php
class UserController extends Controller {
    protected $userRepo;

    public function __construct(UserRepository $userRepo) { // لاراڤيل غيجيبها ليك!
        $this->userRepo = $userRepo;
    }
}
```
فاش درنا `Type Hint` (يعني كتبنا اسم الكلاس `UserRepository` فـ Constructor)، لاراڤيل فهم بلي خاصنا هاد الكلاس.
الـ **Service Container** هو اللي تكلف: مشا شاف شنو هي `UserRepository`، كرياها (Instantiate)، وعطاها لينا (Inject).

---

## 🔗 Binding (الربط)
مرات، الكلاس كتكون معقدة وكتحتاج إعدادات خاصة باش تكرييها. هنا كنستعملو **Binding**.
كنقولو للـ Container: "فاش شي حد يطلب منك `TwitterService`، ها كيفاش تصاوبها".

هادشي كنديروه غالبا فـ `AppServiceProvider`:

```php
public function register()
{
    $this->app->bind(TwitterService::class, function ($app) {
        return new TwitterService('api-key-here');
    });
}
```

---

## 🦄 Singleton (وحيد)
إلا بغيتي الـ Container يصاوب "نسخة واحدة" فقط من الكلاس، ويعطيها لكلشي (بحال Database Connection)، كتستعمل `singleton`:

```php
$this->app->singleton(Connection::class, function ($app) {
    return new Connection($app['config']['database']);
});
```

---

## 💡 الخلاصة
الـ Service Container هو اللي كيخلي لاراڤيل مرن (Flexible) وسهل فالاختبار (Testable).
ماشي ضروري تفهم كل التفاصيل دابا، غير عرف بلي "أي Class لاراڤيل كيعطيها ليك فـ Constructor، راه الـ Container هو اللي جابها".
