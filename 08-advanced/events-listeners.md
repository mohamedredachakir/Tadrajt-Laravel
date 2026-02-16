# الأحداث والمستمعون (Events & Listeners)

## 📡 شنو هما Events؟
فاش كيوقع شي حدث مهم فالتطبيق (مثلا: "تسجيل مستخدم جديد" `UserRegistered`)، خاصك تقول لـ Laravel: "اللي مهتم بهاد الحدث، يدير خدمتو".
هادشي كيتسمى **Event-Driven Programming**.

---

## 👂 Listener (المستمع)
هذا هو اللي كيدير الخدمة فاش كيوقع الحدث (مثلا: يصيفط Welcome Email).

---

## 🔁 الخطوات
1.  **Event:** `php artisan make:event UserRegistered`
2.  **Listener:** `php artisan make:listener SendWelcomeEmail --event=UserRegistered`

ملف `SendWelcomeEmail.php`:
```php
public function handle(UserRegistered $event): void
{
    Mail::to($event->user->email)->send(new WelcomeEmail());
}
```

3.  **Dispatch Event:** (إطلاق الحدث)
    فـ Controller:
    ```php
    use App\Events\UserRegistered;
    
    // ...
    UserRegistered::dispatch($user);
    ```

---

## ⚡ علاش Events؟
باش تخلي الكود ديالك معزول (Decoupled).
دابا "تسجيل المستخدم" ما عندوش علاقة بـ "إرسال الإيميل".
تقدر تزيد Listener آخر (مثلا: `NotifyAdmins`) بلا ما تقيس الـ Controller.

---

## 💡 Queued Listeners
Listener يقدر يكون طويل فالخدمة، إذن دير ليه `implements ShouldQueue` باش يمشي للـ Queue و ما يعطلش الطلب.
```php
class SendWelcomeEmail implements ShouldQueue { ... }
```
