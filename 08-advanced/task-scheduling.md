# الجدول الزمني (Scheduling)

## ⏰ شنو هو Task Scheduling؟
شحال هادي، كنتي كتضطر دير **Cron Entry** لكل مهمة بغيتي ديرها كل نهار (مثلا النسخ الاحتياطي).
فـ Laravel، كتعرف جدول واحد فملف `routes/console.php` (أو `Kernel.php` قديما).

---

## 🛠️ تعريف المهام
```php
use Illuminate\Support\Facades\Schedule;
use App\Models\User;

Schedule::call(function () {
    User::where('last_login', '<', now()->subMonth())->delete();
})->daily();
```

أو تعيط لـ Artisan Command:
```php
Schedule::command('emails:send')->weekly();
```

أو Queued Job:
```php
Schedule::job(new Heartbeat)->everyFiveMinutes();
```

---

## ⚙️ الترددات (Frequencies)
-   `->everyMinute()`
-   `->everyHour()`
-   `->dailyAt('13:00')`
-   `->weeklyOn(1, '8:00')`
-   `->monthly()`
-   `->yearly()`

---

## 🚀 تشغيل Scheduler
فالـ Server (Linux)، خاصك تزيد سطر واحد `crontab -e`:

```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```
Cron غيعيط لـ Laravel كل دقيقة، ولاراڤيل هو اللي غيشوف واش كاينا شي مهمة خاص تدار فديك الدقيقة.

---

## 💡 الخلاصة
Scheduling هي الطريقة المنظمة والقوية باش تجدولة المهام الأوتوماتيكية فالسيت ديالك.
