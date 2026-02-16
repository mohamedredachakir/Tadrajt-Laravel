# المتحكمات (Controllers)

## 🕹️ شنو هو Controller؟
بلاصت ما تكتب الـ Logic ديالك كامل فملف `routes/web.php`، من الأحسن تفرقو وتنظمو فـ **Controller** Classes.
الـ Controller كيجمع الـ Logic المتعلق بموضوع واحد (مثلا `UserController` كيتكلف بكلشي اللي عندو علاقة بالمستخدمين).

---

## ✍️ إنشاء Controller
استعمل Artisan باش تكرييه:

```bash
php artisan make:controller UserController
```

الملف غيكون فـ `app/Http/Controllers/UserController.php`.

---

## 🏗️ Basic Controller
مثال ديال Controller بسيط:

```php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\View\View;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function show(string $id): View
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

باش تربطو مع الـ Route:
```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```

---

## 🔄 Resource Controllers (CRUD كامل)
فاش كتبغي دير CRUD (Create, Read, Update, Delete) لشي موديل (مثلا `Post`)، لاراڤيل كتوفر عليك الوقت.

1.  كريي الـ Resource Controller:
    ```bash
    php artisan make:controller PostController --resource
    ```
    لاراڤيل غينشأ ليك الدوال كاملة: `index`, `create`, `store`, `show`, `edit`, `update`, `destroy`.

2.  عرف الـ Route بسطر واحد:
    ```php
    Route::resource('posts', PostController::class);
    ```

هاد السطر الواحد كيكريي 7 ديال Routes! تقدر تشوفهم بـ `php artisan route:list`.

---

## 💡 الخلاصة
الـ Controllers هما "المنظمين" (Organizers) ديال الـ Logic. حاكموهم يكونو "Skinny Controllers, Fat Models" (يعني الـ Logic المعتقد خليه فالـ Model أو Services، والـ Controller غير كينسق).
