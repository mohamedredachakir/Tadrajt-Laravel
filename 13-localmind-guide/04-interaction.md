# الردود والمفضلات (Interaction)

## 💬 الردود (Responses)
مشروع LocalMind كيقدم نظام ردود بسيط.
كل سؤال (`Question`) عندو بزاف ديال `Responses`.

### 1. **Model Relations**
فـ `Question.php`:
```php
public function responses() {
    return $this->hasMany(Response::class);
}
```

فـ `Response.php`:
```php
public function question() {
    return $this->belongsTo(Question::class);
}
public function user() {
    return $this->belongsTo(User::class);
}
```

### 2. **Controller Logic**
فـ `ResponseController`:
```php
public function store(Request $request, Question $question) {
    $request->validate(['content' => 'required']);
    
    $question->responses()->create([
        'content' => $request->content,
        // user_id automically added if defining `user()` relation or manually:
        'user_id' => auth()->id(),
    ]);
    
    return back(); // رجع لنفس الصفحة
}
```

---

## ⭐ المفضلة (Favorites)
بغيتي المستخدم يقدر يحفظ السؤال فـ "Favorites".

### 1. **Add Favorite**
فـ `FavoriteController`:
```php
public function toggle(Question $question) {
    $user = auth()->user();
    
    // Check existance
    $exists = $user->favorites()->where('question_id', $question->id)->exists();
    
    if ($exists) {
        $user->favorites()->detach($question->id); // Remove
    } else {
        $user->favorites()->attach($question->id); // Add
    }
    
    return back();
}
```
*ملاحظة: هنا كنستعملو علاقة `BelongsToMany` (Many-to-Many) بين User و Question عبر جدول `favorites`.*

### 2. **عرض زر المفضلة**
فـ Blade (`questions.show`):
```blade
<form action="{{ route('questions.favorite', $question) }}" method="POST">
    @csrf
    <button type="submit">
        {{ auth()->user()->hasFavorited($question) ? 'Remove Favorite' : 'Add Favorite' }}
    </button>
</form>
```
*خاصك تزيد `hasFavorited` method فـ User Model.*

---

## 🔒 حماية المسارات (Route Protection)
ما تنساش تحمي الروابط فـ `web.php`:
```php
Route::middleware('auth')->group(function () {
    Route::post('/questions', [QuestionController::class, 'store']);
    Route::post('/questions/{question}/responses', [ResponseController::class, 'store']);
    Route::post('/questions/{question}/favorite', [FavoriteController::class, 'toggle']);
});
```
هادشي كيضمن بلي غير الناس المسجلين هما اللي يقدرو يشاركو.
