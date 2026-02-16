# نظام تسجيل الدخول (Simple Database Auth)

## 🔑 Authentication
مشروع LocalMind كيستعمل **Manual Auth** (ماشي Breeze/Jetstream)، يعني المطور كتب Controller بيدي (Custom Auth) باش يتحكم فكلشي.

### 1. **User Model**
تأكد بلي الـ User Model (`app/Models/User.php`) فيه `fillable` صحيح:
```php
protected $fillable = [
    'name',
    'email',
    'password',
    'role', // باش نحددو Admin
];
```

### 2. **Auth Controller**
غتصاوب `AuthController.php` باش يتكلف بـ Login و Register.
```php
class AuthController extends Controller
{
    // عرض صفحة التسجيل
    public function showRegister() {
        return view('auth.register');
    }

    // عرض صفحة الدخول
    public function showLogin() {
        return view('auth.login');
    }

    // تسجيل مستخدم جديد
    public function register(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Auth::login($user); // دير ليه تسجيل دخول ديريكت

        return redirect()->route('dashboard');
    }

    // تسجيل الدخول
    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'معلومات الدخول خاطئة.',
        ])->onlyInput('email');
    }

    // تسجيل الخروج
    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
```

### 3. **Routes**
فـ `routes/web.php`، عرف المسارات:
```php
use App\Http\Controllers\AuthController;

// Guest Routes (للناس اللي ما مسجلينش)
Route::middleware('guest')->group(function () {
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});

// Authenticated Routes (للناس المسجلين)
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
```

---

## 🎯 علاش Manual Auth؟
باش تفهم كيفاش `Auth::attempt()` و `Auth::login()` كيتعاملو مع `Sessions` و `Remember Token`.
هادشي كيعطيك تحكم كامل فالـ Flow (مثلا تزيد `role` check وسط Login).
