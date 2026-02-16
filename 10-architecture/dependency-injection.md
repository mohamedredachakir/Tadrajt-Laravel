# حقن التبعيات (Dependency Injection)

## 💉 شنو هو Dependency Injection؟
**Dependency Injection (DI)** هو مفهوم مهم فـ Laravel وفالبرمجة الحديثة.
ببساطة، بلاصت ما الكلاس ديالك (مثلا: `TaskController`) تصاوب الكلاسات اللي محتاجها (مثلا: `EmailService`)، كتطلبها من الخارج وهما اللي كيعطيوها ليك (Inject).

---

## 🏗️ علاش؟

### 1. Coupling (الترابط)
إلا درتي `new EmailService()` وسط الكود، غيولي مربوط بيها بقوة.
إلا بغيتي تبدل `StoreService` (مثلا: تبدل من Mailgun لـ SES)، خاصك تبدل فكل بلاصة.

### 2. Testing (الاختبار)
فاش كتجرب الكود، ما بغيتيش تصيفط إيميلات حقيقية.
إلا كنتي مستعمل DI، كتقدر تمرر (Pass) كائن وهمي (Mock Object).

---

## 🛠️ كيفاش كتعمل DI فـ Laravel؟
كتطلب الـ Type Hinting فالـ Constructor أو Method:

```php
// Service اللي بغيناها
use App\Services\PaymentService;

class CheckoutController extends Controller
{
    protected $paymentService;

    // لاراڤيل غيشوف هاد Type Hint وغيعطيك Instance واجدة
    public function __construct(PaymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    public function process()
    {
        $this->paymentService->pay(100);
    }
}
```

---

## 📦 Binding Interfaces
بعض المرات، كتبغي تطلب `Interface` ماشي `Concrete Class` (مثلا `CacheInterface` ماشي `RedisCache`).
هنا كتلزمك تعرف الـ Binding فـ `AppServiceProvider`:

```php
public function register(): void
{
    $this->app->bind(CacheInterface::class, RedisCache::class);
}
```
فاش تطلب `CacheInterface`، لاراڤيل غيعطيك `RedisCache`.

---

## 💡 الخلاصة
DI هي القوة الخفية ديال لاراڤيل. هي اللي كتخليه مرن وسهل فالتوسيع والصيانة.
