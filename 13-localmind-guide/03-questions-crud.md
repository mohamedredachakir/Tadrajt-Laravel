# إدارة الأسئلة (Questions CRUD)

## 📌 الفكرة (Concept)
اللب ديال المشروع هو "الأسئلة".
المستخدم كيطرح سؤال، كيحدد العنوان، المحتوى، والمكان (Location).
الأسئلة غتبان فصفحة `index`، والناس يقدرو يجاوبو عليها.

---

## 🛠️ Question Controller
غتصاوب `QuestionController.php` باش يدير CRUD:

### 1. **عرض الأسئلة (Index)**
خاصنا نفرزو الأسئلة حسب **التاريخ** وحسب **المكان** (Search by location).
```php
public function index(Request $request)
{
    $query = Question::with('responses'); // Eager Loading

    if ($request->has('location')) {
        $query->where('location', 'like', '%' . $request->location . '%');
    }

    $questions = $query->latest()->get(); // جيب كلشي

    return view('questions.index', compact('questions'));
}
```

### 2. **إضافة سؤال (Store)**
خاص المستخدم يحدد `title`, `content`, و `location`.
```php
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|max:255',
        'content' => 'required',
        'location' => 'nullable|string',
    ]);

    // Create question with logged-in User ID
    $question = $request->user()->questions()->create($validated);

    return redirect()->route('questions.index')->with('success', 'تم طرح السؤال بنجاح!');
}
```

### 3. **عرض سؤال واحد (Show)**
باش نشوفو الردود (Responses) ديال السؤال.
```php
public function show(Question $question)
{
    // Eager Load responses with their author (User)
    $question->load('responses.user');
    
    return view('questions.show', compact('question'));
}
```

### 4. **Edit & Delete (تعديل وحذف)**
خاص فقط مول السؤال (أو Admin) اللي يقدر يعدل أو يحذف.
```php
public function destroy(Question $question)
{
    // Authorization Check (Policy)
    if (auth()->id() !== $question->user_id) {
        abort(403);
    }

    $question->delete();

    return redirect()->route('questions.index')->with('success', 'تم حذف السؤال.');
}
```

---

## 🎨 Views (Blade)
فملف `resources/views/questions/show.blade.php`:
```blade
<h1>{{ $question->title }}</h1>
<p>{{ $question->content }}</p>

<!-- عرض الردود -->
@foreach($question->responses as $response)
    <div class="response">
        <strong>{{ $response->user->name }}:</strong>
        <p>{{ $response->content }}</p>
    </div>
@endforeach

<!-- إضافة رد -->
<form action="{{ route('responses.store', $question) }}" method="POST">
    @csrf
    <textarea name="content"></textarea>
    <button type="submit">إرسال الرد</button>
</form>
```
هادشي هو الأساس، ومن بعد كتزيد التزواق بـ CSS.
