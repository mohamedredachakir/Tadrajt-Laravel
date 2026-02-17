# تطبيق عملي: مشروع أسئلة وأجوبة (Q&A App) 🎥

باش نفهمو مزيان، غناخدو المشروع اللي خدامين عليه: **Tadrajt-QA**.
الهدف: مستخدمين كيطرحو أسئلة، ومستخدمين آخرين كيجاوبو، وكاينة إمكانية "J'aime" (Favorites).

---

## 1. Class Diagram (Visual) 🎨
هاد الرسم كيوضح العلاقات بين الجداول ديالنا: `User`, `Question`, `Response`, `Category`.

<div class="mermaid">
classDiagram
    class User {
        +id: int
        +name: string
        +email: string
        +questions()
        +responses()
        +favorites()
    }

    class Question {
        +id: int
        +title: string
        +content: text
        +user_id: int
        +category_id: int
        +responses()
        +user()
        +category()
    }

    class Response {
        +id: int
        +content: text
        +user_id: int
        +question_id: int
        +user()
        +question()
    }

    class Category {
        +id: int
        +name: string
        +questions()
    }

    User "1" --> "*" Question : Has Many
    User "1" --> "*" Response : Has Many
    Category "1" --> "*" Question : Has Many
    Question "1" --> "*" Response : Has Many
    User "*" --> "*" Question : Favorites (Many-to-Many)
</div>

---

## 2. الترجمة لـ Laravel Models & Relationships 💻

### A. User Model
المستخدم يقدر يكتب بزاف الأسئلة وبزاف الأجوبة.
```php
class User extends Authenticatable
{
    // 1 User -> Many Questions
    public function questions() {
        return ->hasMany(Question::class);
    }

    // 1 User -> Many Responses
    public function responses() {
        return ->hasMany(Response::class);
    }

    // Many Users <-> Many Questions (Favorites)
    public function favorites() {
        return ->belongsToMany(Question::class, 'favorites');
    }
}
```

### B. Question Model
السؤال تابع لمستخدم واحد، ومصنف فكاتيكوري وحدة، وعندو بزاف الأجوبة.
```php
class Question extends Model
{
    // Belongs to 1 User
    public function user() {
        return ->belongsTo(User::class);
    }

    // Belongs to 1 Category
    public function category() {
        return ->belongsTo(Category::class);
    }

    // Has Many Responses
    public function responses() {
        return ->hasMany(Response::class);
    }
}
```

### C. Response Model
الجواب تابع لسؤال واحد، وكاتبو مستخدم واحد.
```php
class Response extends Model
{
    public function question() {
        return ->belongsTo(Question::class);
    }

    public function user() {
        return ->belongsTo(User::class);
    }
}
```

---

## 3. كيفاش كنخدمو بهادشي فـ Controller؟ 🎮

### سيناريو 1: عرض سؤال مع الأجوبة ومولاها
بغيتي تجيب سؤال، شكون كتبو، وشنو الأجوبة اللي عليه (وشكون كتب كل جواب).

**Eager Loading (with):**
```php
 = Question::with(['user', 'responses.user'])
                    ->find(1);
```

**فـ Blade View:**
```blade
<h1>{{ ->title }}</h1>
<p>Written by: {{ ->user->name }}</p>

<h2>Responses:</h2>
@foreach(->responses as )
    <div class="response">
        <p>{{ ->content }}</p>
        <small>By: {{ ->user->name }}</small>
    </div>
@endforeach
```

### سيناريو 2: عرض الأسئلة المفضلة للمستخدم
```php
 = Auth::user();
 = ->favorites; // كترجع Collection ديال الأسئلة
```

---

## 4. نصيحة ذهبية 🌟
ديما رسم الـ Diagram فورقة وستيلو (أو فـ Mermaid) **قبل** ما تكتب سطر واحد ديال Code.
إلا عرفتي العلاقات (1..1, 1..*, *..*)، الكود ديال Laravel كيولي غير "ترجمة" حرفية للرسم ديالك.
