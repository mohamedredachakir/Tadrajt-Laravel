window.rawData = `docs/
│
├── 00-overview/
│   ├── introduction.md
│   ├── why-laravel.md
│   ├── laravel-ecosystem.md
│   └── glossary.md
│
├── 01-environment/
│   ├── docker-basics.md
│   ├── installation.md
│   ├── docker-installation.md
│   └── first-project-setup.md
│
├── 02-core/
│   ├── laravel-structure.md
│   ├── lifecycle.md
│   ├── service-container.md
│   └── service-providers.md
│
├── 03-http-layer/
│   ├── routing.md
│   ├── controllers.md
│   ├── middleware.md
│   ├── requests-validation.md
│   └── responses.md
│
├── 04-frontend/
│   ├── blade.md
│   ├── blade-components.md
│   ├── layouts.md
│   └── assets-management.md
│
├── 05-database/
│   ├── database.md
│   ├── migrations.md
│   ├── models-eloquent.md
│   ├── relationships.md
│   ├── query-builder.md
│   ├── seeders.md
│   └── factories.md
│
├── 06-security/
│   ├── security.md
│   ├── authentication.md
│   ├── authorization.md
│   ├── csrf-xss-protection.md
│   └── hashing-encryption.md
│
├── 07-api/
│   ├── api.md
│   ├── rest-concepts.md
│   ├── api-routing.md
│   ├── api-resources.md
│   ├── api-authentication.md
│   └── api-versioning.md
│
├── 08-advanced/
│   ├── advanced.md
│   ├── events-listeners.md
│   ├── queues-jobs.md
│   ├── notifications.md
│   ├── broadcasting-realtime.md
│   └── caching.md
│
├── 09-docker/
│   ├── docker-advanced.md
│   ├── multi-container-setup.md
│   ├── nginx-setup.md
│   ├── database-container.md
│   ├── redis-container.md
│   └── production-docker.md
│
├── 10-architecture/
│   ├── architecture.md
│   ├── mvc-deep-dive.md
│   ├── solid-principles.md
│   ├── repository-pattern.md
│   ├── service-pattern.md
│   └── clean-code.md
│
├── 11-projects/
│   ├── projects.md
│   ├── blog-project.md
│   ├── task-manager-project.md
│   ├── rest-api-project.md
│   └── fullstack-project.md
│
├── 14-key-concepts/
│   └── concepts-qa.md
│
└── 12-final/
    ├── conclusion.md
    ├── best-practices.md
    ├── laravel-roadmap.md
    └── resources.md




00-overview/
هدف: تقديم Laravel ومفاهيمه الأساسية للمبتدئين.
introduction.md → Mo9adima 3la Laravel: شنو هو Laravel، شكون دارو، وشنو كيخدم.


why-laravel.md → علاش تختار Laravel؟ الميزات، syntax زوين، ecosystem.


laravel-ecosystem.md → Toolkit, packages, artisan, homestead/vapor.


glossary.md → Mafahim assasiya: MVC, ORM, Eloquent, routes, controllers، وغيرها.



01-environment/
هدف: إعداد البيئة اللازمة باش تخدم مع Laravel.
docker-basics.md → Concepts b Docker: containers, images, volumes, networks.


installation.md → Install Laravel locally (PHP, Composer, Node.js/NPM).


docker-installation.md → Laravel + Docker setup for local dev.


first-project-setup.md → إنشاء أول مشروع Laravel + تشغيله (php artisan serve).



02-core/
هدف: تعرف على بنية المشروع والـ Core concepts.
laravel-structure.md → Folder structure (app, routes, config, database, resources…).


lifecycle.md → Request lifecycle: من client → server → response.


service-container.md → Concept dyal IoC container, dependency injection.


service-providers.md → Bootstrapping services, registering packages.



03-http-layer/
هدف: Handling HTTP requests/responses.
routing.md → Defining routes, parameters, named routes, route groups.


controllers.md → Controllers, methods, resource controllers, request handling.


middleware.md → Middleware, authentication, logging, modifying requests.


requests-validation.md → Form request validation, custom rules.


responses.md → Returning views, JSON, redirects, HTTP responses.



04-frontend/
هدف: عرض المحتوى وإدارة الـ front-end.
blade.md → Blade templates, directives, loops, conditionals.


blade-components.md → Components, slots, reusable views.


layouts.md → Layouts, extending templates, partials.


assets-management.md → CSS/JS management, Laravel Mix / Vite.



05-database/
هدف: التعامل مع قاعدة البيانات بطريقة Laravel.
database.md → Database connection, .env settings, multiple DBs.


migrations.md → Creating/modifying tables, up/down methods.


models-eloquent.md → Eloquent ORM, models, $fillable, custom methods.


relationships.md → One-to-One, One-to-Many, Many-to-Many, HasManyThrough.


query-builder.md → Fluent DB queries, joins, aggregates.


seeders.md → Filling database with initial data.


factories.md → Generating fake data for testing.



06-security/
هدف: حماية المشروع من الهجمات وضبط صلاحيات المستخدم.
security.md → General security features, best practices.


authentication.md → Login, register, password reset.


authorization.md → Gates, policies, role-based access.


csrf-xss-protection.md → CSRF tokens, XSS prevention.


hashing-encryption.md → Hash passwords, encrypt/decrypt data.



07-api/
هدف: إنشاء APIs باستخدام Laravel.
basics.md -> REST API Basics & Sanctum.


08-advanced/
هدف: مفاهيم متقدمة لإتقان Laravel.
queues-jobs.md -> Queues & Background Jobs.
task-scheduling.md -> Task Scheduling (Cron).
events-listeners.md -> Events & Listeners.


09-docker/
هدف: استخدام Docker بطريقة متقدمة.
docker-advanced.md -> Intro to Advanced Docker.
multi-container-setup.md -> PHP, Nginx, MySQL Setup.
nginx-setup.md -> Nginx Configuration.
database-container.md -> Database Persistence & Management.
redis-container.md -> Redis Integration.
production-docker.md -> Production Best Practices.


10-architecture/
هدف: Design patterns ومبادئ هندسة البرمجيات.
design-patterns.md -> MVC, Repository, Gateway.
dependency-injection.md -> Dependency Injection & Service Container.


11-projects/
هدف: أمثلة عملية على مشاريع Laravel.
projects.md -> Overview of sample projects.
blog-project.md -> Building a Blog.
task-manager-project.md -> Task Manager App.
rest-api-project.md -> REST API Project.
fullstack-project.md -> Fullstack E-commerce.


13-localmind-guide/
هدف: دليل تطبيقي خطوة بخطوة (Step-by-Step Guide).
00-setup.md -> Setup & Config.
01-database.md -> Database Schema.
02-authentication.md -> Manual Authentication.
03-questions-crud.md -> Questions System (CRUD).
04-interaction.md -> Responses & Favorites.


14-key-concepts/
هدف: مراجعة شاملة وأسئلة وأجوبة (Q&A Review).
concepts-qa.md -> Key Questions & Answers.

15-uml-concepts/
هدف: تعلم تصميم الأنظمة والمخططات (UML & Design).
uml-guide.md -> UML Diagrams & Application.
real-project-diagram.md -> Project Diagram (Q&A).


12-final/
هدف: فيديو وقائمة المصادر (Videos & Resources).
conclusion.md -> Video Resources & Github Profile.
`;


window.fileContents = {
    "introduction.md": `# مقدمة على لاراڤيل (Laravel Introduction)

## 📌 شنو هو Laravel؟
Laravel هو واحد الـ Framework مفتوح المصدر (Open Source) مبني بـ PHP، كيعاونك باش تطور مواقع وتطبيقات ويب بطريقة سريعة، منظمة، وأنيقة. 

تخيل معايا Laravel بحال واحد الصندوق عامر بأدوات واجدة وذكية (Toolbox) كتسهل عليك الخدمة، باش بلاصت ما تعاود تكتب نفس الكود كل مرة (بحال Login, Routing, Database connection)، كتلقاهم واجدين ومقدين بطريقة احترافية.

الشعار ديال Laravel هو: **"The PHP Framework for Web Artisans"**، يعني هو مصاوب للناس اللي كيبغيو يكتبو كود نقي، وفيه "فن" وإبداع.

---

## 📅 شكون اللي صاوبو وفوقاش؟
Laravel تصاوب من طرف **Taylor Otwell**، وأول نسخة خرجات في **يونيو 2011**. الهدف الرئيسي ديال Taylor كان هو يطور بديل حسن من CodeIgniter (لي كان مشهور ديك الوقت) ويزيد ميزات بحال Authentication (تسجيل الدخول) والـ Dependency Injection.

من داك الوقت، Laravel تطور بزاف ولا هو الـ Framework نمرة واحد في عالم PHP بلا منازع.

---

## 🛠️ كيفاش كيخدم؟ (MVC Architecture)
Laravel مبني على هندسة سميتها **MVC** (Model-View-Controller). هاد الهندسة كتقسم الكود ديالك لثلاثة طبقات باش يكون منظم:

1.  **Model (الموديل):** هو المسؤول على البيانات (Data) والتعامل مع قاعدة البيانات (Database).
2.  **View (الواجهة):** هو داكشي اللي كيشوف المستخدم (HTML/CSS).
3.  **Controller (المتحكم):** هو العقل المدبر، كيشد الطلب (Request) من عند المستخدم، كيهضر مع Model باش يجيب المعلومات، وكيعطيها لـ View باش تبان.

بهاد الطريقة، الكود ديالك كيبقى نقي وسهل فالتغيير والصيانة (Maintenance).

---

## 🚀 علاش Laravel محبوب؟
-   **سهل التعلم:** واخا فيه بزاف د الميزات، الوثائق ديالو (Documentation) واعرة بزاف وسهلة.
-   **مجتمع كبير (Community):** أي مشكل طحتي فيه، غالبا غتلقى الحل ديالو، وكاينين بزاف د الشروحات والباكيجات (Packages) واجدة.
-   **Security (الأمان):** Laravel كيحميك من بزاف د الثغرات الأمنية المشهورة (بحال SQL Injection, CSRF, XSS) بلا ما تضرب تمارة كبيرة.`,

    "why-laravel.md": `# علاش تختار لاراڤيل؟ (Why Laravel?)

## 🚀 علاش تختار Laravel فالمشروع الجاي ديالك؟
علاش بزاف د الشركات والـ Developers كيهربو لـ Laravel؟ 
هناك بزاف ديال الأسباب اللي كتخلي Laravel الاختيار الأول لآلاف المطورين حول العالم.

---

### 1. **سهولة التعلم (Easy to Learn)**
ال syntax ديال Laravel ساهل، معبر (expressive)، ومفهوم. حتى لو كنتي مبتدئ تقدر تفهم الكود بحال لا كتقرا جملة بالإنجليزية.

### 2. **Authentication (التوثيق) - واجد "من الصندوق"**
شحال من مجهود درتي باش تصاوب نظام تسجيل الدخول (Login System) من الصفر؟ خاصك تكريي قاعدة البيانات، وتشفير كلمة السر، وإدارة الـ Sessions، وحماية الـ CSRF...

فـ Laravel، هادشي كامل كيجيك واجد ومفيني من الأول بفضل باكيجات بحال **Breeze** و **Jetstream**.

### 3. **Database Migrations & Model (Eloquent ORM)**
كتكره تكتب SQL Queries طوال؟ حتى حنا! 😄
فـ Laravel كاين **Eloquent**، هو نظام للتعامل مع قاعدة البيانات بطريقة ديال Objects (Classes):
-   باش تزيد "user" جديد، يكفي دير: \`$user->save()\`.
-   باش تجيب "user" بـ ID، يكفي دير: \`User::find(1)\`.

وزائد كاينين الـ **Migrations**: هما بحال Version Control لقاعدة البيانات، كتقدر تتبع التغييرات فـ DB، وتشاركها مع الفريق ديالك بسهولة.

### 4. **Routing (التوجيه) - قوي وبسيط**
نظام الـ Routing فـ Laravel هو الأقوى والأبسط. تقدر تعرف الروابط (URLs) ديال التطبيق ديالك فملف واحد \`routes/web.php\`:

\`\`\`php
Route::get('/', function () {
    return 'Hello World';
});
\`\`\`

### 5. **Testing (اختبار الكود) - مدمج**
Laravel كيجي مدمج مع **PHPUnit**، وكيوفر أدوات باش تكتب Tests (اختبارات) للكود ديالك بسهولة كبيرة. هادشي كيساعد باش ترتاح وتضمن بلي الكود ديالك كيعمل بطريقة صحيحة قبل ما ترفعو للـ Production.

### 6. **Scheduler (جدولة المهام)**
عندك شي خدمة خاصها تخدم كل نهار مع 12 د الليل؟ (مثلا مسح الملفات القديمة، أو إرسال تقارير يومية). 
فبلاصة ما تزيد Cron job فالسيرفر مباشرة (وهادشي شوية معقد)، Laravel كيعطيك طريقة باش تكتب هاد الجدولة بـ PHP بطريقة مقروءة وسهلة.

---
## 💡 الخلاصة
Laravel كيجمع بين **البساطة**، **القوة**، و **الأناقة**. كيخليك تركز على بناء الـ Features (المميزات) ديال التطبيق ديالك، بلا ما تضيع الوقت فـ Boilerplate code والمشاكل التقنية المعقدة.`,

    "laravel-ecosystem.md": `# عالم Laravel (Ecosystem)

## 🎉 عالم لاراڤيل المتكامل
Laravel ماشي غير framework باش تكتب Code بـ PHP، هو عالم كامل (Ecosystem) عامر أدوات وخدمات (Tools & Services) كتغطي كل الجوانب: من development حتى لـ deployment (النشر).

---

### 🔥 1. أدوات أساسية (Official Packages)
#### **Passport & Sanctum (لإدارة APIs)**
إذا كنت باغي تصاوب API:
-   **Laravel Sanctum**: أسهل حل لل Authentication (توثيق الحسابات) فـ SPAs (Single Page Applications) بحال React أو Vue، وتطبيقات الهاتف.
-   **Laravel Passport**: إذا كنت باغي دير Full OAuth2 server (مثلًا باش المستخدم يقدر يسجل الدخول بحساب Facebook أو Google الخاص به).

#### **Socialite (تسجيل الدخول بالمواقع الاجتماعية)**
باغي تخلي الناس يتسجلو بحساب الفيسبوك أو Google، Github؟
بسطر واحد من الكود، **Laravel Socialite** كيعطيك هاد الميزة (OAuth Authentication) بسهولة خيالية.

#### **Telescope (تلسكوب)**
هي أداة واعرة للمطورين فـ Local Development. كتعطيك نظرة شاملة على كل طلب (Request)، الخطأ (Exception)، قاعدة البيانات (Database query)، والـ Jobs فالخلفية. بحال الـ "x-ray" للتطبيق ديالك.

#### **Horizon (تسيير الـ Queues)**
باش تشوف وتتحكم فالـ \`Queues\` (الصفوف) والـ \`Jobs\` ديالك، وبتحكم كامل في الـ Workers الخاصة بـ Redis.

---

### 💻 2. أدوات التطوير (Dev Tools)
#### **Sail**
Docker container واجد باش تخدم بلا ما تهتم بإعداد بيئة العمل فـ Machine ديالك (PHP, DB, Redis, Mailhog...).

#### **Dusk**
إطار عمل للاختبار (Testing Framework) باش دير Automation للـ Browser وتجرب الموقع ديالك بحال شي مستخدم حقيقي.

---

### 🚀 3. أدوات النشر والسيرفرات (Deployment & Server Management)
#### **Forge**
أداة مدفوعة (Paid Service) كتخليك "تدير إدارة" للسيرفرات ديالك (Deployment) بسهولة كبيرة. كتدعم DigitalOcean, Linode, AWS وغيرها.

#### **Vapor**
منصة Deploy Serverless (بدون خادم) قوية جدا مبنية على AWS Lambda. كتخلي لاراڤيل scale "بشكل لامتناهي" (Infinite Scale) وبلا ما تهتم بإدارة السيرفر.

#### **Envoyer**
باش تضمن Zero Down-time deployment (النشر بدون توقف الموقع).

---

### 🌟 4. الـ Frontend Stacks
Laravel كيعطيك حرية كبيرة فالجهة الأمامية (Frontend):
-   **Livewire:** باش تكتب Full Stack Apps باستعمال PHP فقط (بلا ما تكتب JS بزاف)، ولكن بـ تفاعل (interactivity) عالي.
-   **Inertia.js:** كتربط بين Backend (Laravel) و Frontend (React/Vue/Svelte) بطريقة رهيبة، كتحس براسك كتخدم فـ Monolith كلاسيكي.
-   **Blade:** الـ Template Engine العريق والقوي ديال Laravel.

---

## 💡 الخلاصة
عالم Laravel كبير، وكل ما تعمقتي فيه غتكتشف أدوات جديدة كتسهل حياتك وتخليك تنتج بسرعة وبجودة عالية.`,

    "glossary.md": `# مصطلحات أساسية (Glossary)

## 📖 مصطلحات لاراڤيل بالدارجة
باش تفهم لاراڤيل مزيان، خاصك تكون فاهم هاد المفاهيم والمصطلحات الدارجة فالعالم ديال PHP و Web Development.

---

### **1. MVC (Model-View-Controller)**
هذا هو الباترن (Pattern) اللي مبني عليه لاراڤيل:
-   **Model:** هو تمثيل للـ Table اللي كاين فالـ Database (قاعدة البيانات). مثلا: \`User\` model كيمثل \`users\` table.
-   **View:** هي الصفحة اللي كيشوف المستخدم (HTML/CSS).
-   **Controller:** هو اللي كيجمع بيناتهم. كياخذ بيانات من الموديل، وكيبعثها للفيو.

### **2. Route (المسار/الرابط)**
الـ **Route** هو الرابط اللي المستخدم كيكتبو فالمتصفح (URL)، مثلا: \`mysite.com/profile\`.
فـ لاراڤيل، كتعرف كل رابط وشنو خاصو يدير فـ \`routes/web.php\`.

### **3. Controller (المتحكم)**
الـ **Controller** هو كلاس (Class) فيه "Actions" (دوال) كتعالج طلب المستعمل وترد عليه بجواب (Response).

### **4. Migration (الهجرة/تاريخ قاعدة البيانات)**
الـ **Migrations** هما ملفات ديال PHP كتوصف بنية جدول قاعدة البيانات (Schema).
كتخليك و الفريق ديالك "تنشئ" و "تعدل" الجداول بنفس الطريقة، وبمتابعة للتاريخ (Version Control).

### **5. Eloquent ORM (Object-Relational Mapping)**
الـ **Eloquent** هو نظام قوي جدا فـ لاراڤيل كيخليك تتعامل مع قاعدة البيانات باستعمال **Classes** ديال PHP بلا ما تكتب SQL Queries يدوياً.
مثال: بلاصة \`SELECT * FROM users;\`، كنكتبو: \`User::all();\`.

### **6. Middleware (الوسيط)**
الـ **Middleware** هو كود كيخدم "قبل" أو "بعد" ما الطلب يوصل للـ Controller.
مثلا: تحقق واش المستخدم مسجل الدخول ولا لا (Authentication).

### **7. Artisan (الحرفي)**
الـ **Artisan** هي واجهة الأوامر (Command Line Interface - CLI) ديال لاراڤيل.
كتعاونك، مثلا: \`php artisan make:controller User\` باش تصاوب Controller جديد.

### **8. Composer (الملحن)**
الـ **Composer** هو مدير الحزم (Package Manager) ديال PHP. هو المسؤول على تحميل وتحديث لاراڤيل والمكتبات الإضافية.

### **9. Blade (الشفرة)**
الـ **Blade** هو محرك القوالب (Templating Engine) ديال لاراڤيل. كيسمح ليك تكتب HTML وتدمج معاه PHP Code بطريقة نظيفة وسهلة.
مثلا: \`@foreach($users as $user)\` باش تعرض كل المستخدمين.

### **10. Factory & Seeder**
-   **Factory:** باش تصاوب بيانات "وهمية" (Fake Data) للتجربة.
-   **Seeder:** باش تعمر قاعدة البيانات بهاد البيانات الوهمية.`,

    "laravel-structure.md": `# بنية المشروع (Laravel Structure)

## 🗂️ نظرة عامة على الملفات
فاش كتدخل لمشروع لاراڤيل، كتشوف بزاف د الملفات. كل واحد وعندو الدور ديالو. 
يلاه نكتشفو أهم المجلدات (Folders):

---

### 📂 1. \`app/\` (القلب النابض)
هنا فين كتحط الكود الأساسي ديال التطبيق ديالك.
-   **Models:** كتحطهم هنا (مثلا \`User.php\`).
-   **Http/Controllers:** هنا كدير الـ Logic ديالك.
-   **Http/Middleware:** هنا كتحط "الحراس" (Guards) ديال التطبيق.

### 📂 2. \`routes/\` (المسارات)
هنا كتعرف الروابط (URLs) ديالك:
-   \`web.php\`: للروابط العادية (Web browsing).
-   \`api.php\`: إذا كنت كتصاوب API (Mobile app backend).
-   \`console.php\`: للأوامر الخاصة بـ Artisan.

### 📂 3. \`resources/\` (الموارد)
هنا كاين داكشي اللي مافيهش PHP Code معقد:
-   \`views/\`: ملفات Blade (HTML).
-   \`css/\` و \`js/\`: ملفات الـ Frontend.
-   \`lang/\`: ملفات الترجمة.

### 📂 4. \`database/\` (البيانات)
-   \`migrations/\`: ملفات هيكلة الجداول.
-   \`seeders/\`: ملفات ملء البيانات الوهمية.
-   \`factories/\`: باش تصاوب بيانات للتجربة.

### 📂 5. \`config/\` (الإعدادات)
هنا كاين ملفات الكونفيغوراسيون ديال كلشي (Database, Mail, Cache, Services...).

### 📂 6. \`public/\` (المدخل)
هذا هو الملف الوحيد اللي كيبان للعالم الخارجي. فيه \`index.php\` اللي هو نقطة البداية (Entry Point) ديال أي طلب.

### 📂 7. \`tests/\` (الاختبارات)
هنا فين كتحط الـ Unit Tests و Feature Tests باش تأكد بلي الكود ديالك خدام مزيان.

### 📂 8. \`vendor/\` (المكتبات)
هنا فين Composer كيحط المكتبات (Packages) اللي تيليشارجا. **عمرك ما تقيس هاد الملف!**

---

## 🎯 نصيحة
ماشي ضروري تحفظ كلشي دابا. مع الممارسة، غتولي عارف كل ملف وشنو كيدير. 
ركز دابا على \`app/\`, \`routes/\`, و \`resources/views/\`.`,

    "lifecycle.md": `# دورة حياة الطلب (Request Lifecycle)

## 🔄 رحلة الطلب من البداية للنهاية
فاش شي واحد كيكتب \`mysite.com/profile\` فالنافيكاتور، شنو كيوقع بالضبط؟
كيفاش لاراڤيل كيفهم الطلب وكيرد عليه؟

يلاه نتبعو الرحلة خطوة بخطوة:

---

### 1. **public/index.php**
أي طلب كيجي للسيرفر، أول حاجة كيتلاقها هي ملف \`public/index.php\`.
هاد الملف بسيط بزاف، الدور ديالو هو "يعمر" (Bootstrap) لاراڤيل ويعيط للـ Kernel.

### 2. **Kernel (HTTP / Console)**
الطلب كيمشي للـ **HTTP Kernel** (\`app/Http/Kernel.php\`).
هنا فين كيتم تحديد الـ Middleware (بحال التحقق من الـ maintenance mode, handling sessions, verify CSRF token).
الـ Kernel هو بحال "البواب" اللي كيغربل الطلبات قبل ما يدخلو.

### 3. **Service Providers (مقدمو الخدمات)**
قبل ما نوصلو للكود ديالك، لاراڤيل خاصو "يوجد راسو". هنا فين كيجي دور **Service Providers**.
لاراڤيل كيدوز عليهم واحد بواحد (المسجلين فـ \`config/app.php\`) وكيشغلهم (Register & Boot).
هنا فين كيتم الاتصال بقاعدة البيانات، والبريد، والـ Routes.

### 4. **Routing (التوجيه)**
من بعد ما لاراڤيل وجد، كيشوف الطلب (\`/profile\`) وكيقلب فـ \`routes/web.php\` واش كاين شي Route كيناسبو.
إذا لقاه، كيشوف واش خاصو يدوز من شي Middleware خاص (بحال \`auth\`).

### 5. **Controller (المتحكم)**
الـ Router كيسيفط الطلب للـ **Controller** المناسب (مثلا \`ProfileController@show\`).
الكونترولر كيدير الخدمة: 
-   كيجيب البيانات من Model.
-   كيحسب شي حاجة.
-   كيرجع الجواب (View أو JSON).

### 6. **Response (الجواب)**
فاللخر، الكونترولر كيرد **Response** (صفحة HTML، ملف JSON، تحميل ملف...).
هاد الـ Response كيرجع بنفس الطريق: كيدوز من Middleware مرة أخرى (باش يزيد Headers مثلا)، وكيوصل للمستخدم.

---

## 💡 علاش خاصك تعرف هادشي؟
فهم الـ Lifecycle كيعاونك فاش كطاح فشي مشكل (Debugging). كتعرف فين تقلب: واش المشكل فالـ Route، ولا فالـ Middleware، ولا فالـ Service Provider.`,

    "service-container.md": `# حاوية الخدمات (Service Container)

## 📦 شنو هو Service Container؟
الـ **Service Container** هو "القلب" ديال لاراڤيل. هو أداة قوية بزاف لإدارة **Class Dependencies** (الاعتماديات) و **Dependency Injection**.

ببساطة: هو "صندوق سحري" كيعرف كيفاش يصاوب أي Class بغيتيها، وكيعرف شنو كتحتاج باش تخدم.

---

## 🧠 Dependency Injection (الحقن)
قبل ما نهضرو على Container، خاصنا نفهمو **Dependency Injection**.

تخيل عندك Class سميتها \`UserController\` وكتحتاج Class أخرى سميتها \`UserRepository\` باش تجيب البيانات.

### الطريقة القديمة (بدون Injection):
\`\`\`php
class UserController extends Controller {
    public function show($id) {
        $userRepo = new UserRepository(); // حنا كرييناها بيدينا (Hard coded)
        return $userRepo->find($id);
    }
}
\`\`\`
المشكل هنا: صعيب تبدل \`UserRepository\` من بعد (مثلا للـ Testing).

### طريقة لاراڤيل (Dependency Injection):
\`\`\`php
class UserController extends Controller {
    protected $userRepo;

    public function __construct(UserRepository $userRepo) { // لاراڤيل غيجيبها ليك!
        $this->userRepo = $userRepo;
    }
}
\`\`\`
فاش درنا \`Type Hint\` (يعني كتبنا اسم الكلاس \`UserRepository\` فـ Constructor)، لاراڤيل فهم بلي خاصنا هاد الكلاس.
الـ **Service Container** هو اللي تكلف: مشا شاف شنو هي \`UserRepository\`، كرياها (Instantiate)، وعطاها لينا (Inject).

---

## 🔗 Binding (الربط)
مرات، الكلاس كتكون معقدة وكتحتاج إعدادات خاصة باش تكرييها. هنا كنستعملو **Binding**.
كنقولو للـ Container: "فاش شي حد يطلب منك \`TwitterService\`، ها كيفاش تصاوبها".

هادشي كنديروه غالبا فـ \`AppServiceProvider\`:

\`\`\`php
public function register()
{
    $this->app->bind(TwitterService::class, function ($app) {
        return new TwitterService('api-key-here');
    });
}
\`\`\`

---

## 🦄 Singleton (وحيد)
إلا بغيتي الـ Container يصاوب "نسخة واحدة" فقط من الكلاس، ويعطيها لكلشي (بحال Database Connection)، كتستعمل \`singleton\`:

\`\`\`php
$this->app->singleton(Connection::class, function ($app) {
    return new Connection($app['config']['database']);
});
\`\`\`

---

## 💡 الخلاصة
الـ Service Container هو اللي كيخلي لاراڤيل مرن (Flexible) وسهل فالاختبار (Testable).
ماشي ضروري تفهم كل التفاصيل دابا، غير عرف بلي "أي Class لاراڤيل كيعطيها ليك فـ Constructor، راه الـ Container هو اللي جابها".`,

    "service-providers.md": `# مقدمو الخدمات (Service Providers)

## 🔌 شنو هوما Service Providers؟
إذا كان الـ Service Container هو "القلب"، فالـ **Service Providers** هوما "الشرايين" اللي كيوصلو الدم للأعضاء.
هما المكان المركزي فين كيتم إعداد (Bootstrap) التطبيق ديالك.

أي حاجة كتبغي تخدم فـ Laravel (Database, Routes, Events, Validation...) كتبدا من Service Provider.

---

## 🛠️ شنو كيديرو بالضبط؟
Service Providers عندهم جوج أدوار رئيسية، وكيكونو واضحين فـ الدوال (Methods) دياولهم:

### 1. \`register()\`
هاد الدالة كدار باش **تسجل** شي حاجة فالـ Service Container (كيفما شفنا فدرس \`Binding\`).
⚠️ **تنبيه:** فـ \`register\`، ما تحاولش تستعمل خدمات أخرى (بحال Database)، حيت يقدر يكونو مازال ما وجدوش. دير غير \`bind\` صافي.

### 2. \`boot()\`
هاد الدالة كتخدم **من بعد** ما جميع الـ Service Providers تسجلو.
هنا تقدر دير أي حاجة: 
-   تعرف Events.
-   تزيد Routes.
-   تستعمل Database.
-   تشارك متغيرات مع الـ Views (View Composers).

مثال بسيط:
\`\`\`php
public function boot()
{
    // نشرط بلي schema خاصها تخدم بـ string طوله 191
    Schema::defaultStringLength(191);
}
\`\`\`

---

## 📂 فاين نلقاوهم؟
سير شوف الملف \`config/app.php\` غتلقى واحد المصفوفة سميتها \`providers\`.
فيها ليستة طويلة:
-   **Laravel Framework Service Providers:** هادو دياول لاراڤيل (Auth, Cache, Db, Queue...).
-   **Application Service Providers:** هادو دياولك نتا (غالبا فـ \`app/Providers/\`).

---

## ✍️ كيفاش نكريي Service Provider ديالي؟
باستعمال Artisan:

\`\`\`bash
php artisan make:provider PaymentServiceProvider
\`\`\`

غيتزاد ملف فـ \`app/Providers\`.
من بعد، ما تنساش تمشي تزيدو فـ \`config/app.php\` باش لاراڤيل يعرفو!

---

## 💡 الخلاصة
الـ Service Providers هما المكان المنظم باش تزيد أي "خدمة" أو "إعداد" للمشروع ديالك. بلاصت ما تشتت الكود فكل مكان، كتجمع "Logique d'initialisation" فـ Provider خاص.`,

    "routing.md": `# التوجيه (Routing)

## 🛤️ شنو هو Routing؟
فـ Laravel، الكود ديالك كيبدا من الـ **Route**.
أي رابط (URL) كيدخل المستخدم فالمتصفح خاص يكون معرف فملف **\`routes/web.php\`**.

الـ Route دورو يشد الرابط، ويصيفطو للمكان المناسب للـ Logic (غالبا Controller).

---

## 🎯 الأساسيات
أبسط Route ممكن تعرفو هو:

\`\`\`php
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'مرحبا بيك في لاراڤيل!';
});
\`\`\`
فاش تدخل لـ \`your-site.com/greeting\`، غتشوف "مرحبا بيك في لاراڤيل!".

الأنواع ديال HTTP Methods:
-   \`Route::get('/items', ...)\` → للقراءة
-   \`Route::post('/items', ...)\` → للإضافة
-   \`Route::put('/items/{id}', ...)\` → للتعديل
-   \`Route::delete('/items/{id}', ...)\` → للمسح

---

## 🔗 Route Parameters
كيفاش تمشط (Capture) جزء من الرابط (مثلا \`id\` ديال المستخدم)؟

\`\`\`php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
\`\`\`
تقدر تزيد \`?\` باش يكون اختياري، وتعطيه Default value:
\`\`\`php
Route::get('/user/{name?}', function ($name = 'Guest') {
    return $name;
});
\`\`\`

---

## 🏷️ Named Routes (تسمية المسارات)
دائما سمي الـ Routes دياولهم! هادشي كيعاونك باش تبدل الرابط في المستقبل بلا ما يتهرس الكود فالـ Views.

\`\`\`php
Route::get('/user/profile', [UserController::class, 'show'])->name('profile');
\`\`\`
دابا تقدر تخدم بيه فالـ Blade:
\`\`\`html
<a href="{{ route('profile') }}">Profile</a>
\`\`\`
أو فالـ Controller دير Redirect:
\`\`\`php
return to_route('profile');
\`\`\`

---

## 📦 Route Groups
باش تنظم الكود، تقدر تجمع الـ Routes اللي عندهم صفات مشتركة (Middleware, Prefix, Name...).

\`\`\`php
Route::middleware(['auth'])->prefix('admin')->group(function () {
    
    Route::get('/dashboard', function () {
        // Matches "admin/dashboard" URL
    });
    
    Route::get('/settings', function () {
        // Matches "admin/settings" UR
    });
});
\`\`\`

---

## 💡 الخلاصة
الـ Routes هما البوابة ديال التطبيق ديالك. نظمهم مزيان، واستعمل \`Named Routes\` ديما.`,

    "controllers.md": `# المتحكمات (Controllers)

## 🕹️ شنو هو Controller؟
بلاصت ما تكتب الـ Logic ديالك كامل فملف \`routes/web.php\`، من الأحسن تفرقو وتنظمو فـ **Controller** Classes.
الـ Controller كيجمع الـ Logic المتعلق بموضوع واحد (مثلا \`UserController\` كيتكلف بكلشي اللي عندو علاقة بالمستخدمين).

---

## ✍️ إنشاء Controller
استعمل Artisan باش تكرييه:

\`\`\`bash
php artisan make:controller UserController
\`\`\`

الملف غيكون فـ \`app/Http/Controllers/UserController.php\`.

---

## 🏗️ Basic Controller
مثال ديال Controller بسيط:

\`\`\`php
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
\`\`\`

باش تربطو مع الـ Route:
\`\`\`php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
\`\`\`

---

## 🔄 Resource Controllers (CRUD كامل)
فاش كتبغي دير CRUD (Create, Read, Update, Delete) لشي موديل (مثلا \`Post\`)، لاراڤيل كتوفر عليك الوقت.

1.  كريي الـ Resource Controller:
    \`\`\`bash
    php artisan make:controller PostController --resource
    \`\`\`
    لاراڤيل غينشأ ليك الدوال كاملة: \`index\`, \`create\`, \`store\`, \`show\`, \`edit\`, \`update\`, \`destroy\`.

2.  عرف الـ Route بسطر واحد:
    \`\`\`php
    Route::resource('posts', PostController::class);
    \`\`\`

هاد السطر الواحد كيكريي 7 ديال Routes! تقدر تشوفهم بـ \`php artisan route:list\`.

---

## 💡 الخلاصة
الـ Controllers هما "المنظمين" (Organizers) ديال الـ Logic. حاكموهم يكونو "Skinny Controllers, Fat Models" (يعني الـ Logic المعتقد خليه فالـ Model أو Services، والـ Controller غير كينسق).`,

    "middleware.md": `# الوسيط (Middleware)

## 🛡️ شنو هو Middleware؟
الـ **Middleware** هو "ميكانزم" (Mechanism) للتفتيش والمراقبة على طلبات HTTP اللي كتوصل للتطبيق ديالك.
تخيلو بحال شي باراج (Checkpoint) أو حارس أمن. قبل ما يدخل الطلب (Request) للدار (Controller)، خاصو يدوز من التفتيش.

---

## 🛠️ أمثلة للاستعمال
-   **Authentication:** تأكد واش المستخدم مسجل الدخول قبل ما تخليه يشوف الـ Dashboard.
-   **TrimStrings:** حيد المسافات الزايدة من المدخلات (Input).
-   **Logging:** سجل كل طلب جا للسيرفر فملف (Log file).
-   **CSRF Protection:** تأكد بلي الطلب جاي من الموقع ديالنا ماشي هجمة خارجية.

---

## ✍️ إنشاء Middleware
\`\`\`bash
php artisan make:middleware EnsureTokenIsValid
\`\`\`

الكود كيكون فـ \`app/Http/Middleware\`.
شكل الدالة \`handle\`:
\`\`\`php
public function handle(Request $request, Closure $next): Response
{
    if ($request->input('token') !== 'my-secret-token') {
        return redirect('/home'); // منعنا الطلب
    }

    return $next($request); // دوزنا الطلب للخطوة الجاية
}
\`\`\`

---

## 🔗 تسجيل Middleware
باش لاراڤيل يعرف هاد Middleware، خاصك تسجلو (Register) فـ \`app/Http/Kernel.php\` (فـ Laravel 10 وتحت) أو فـ \`bootstrap/app.php\` (فـ Laravel 11).

تقدر تزيدو كـ:
1.  **Global Middleware:** كيخدم على كاع الـ Routes.
2.  **Route Middleware:** كتسميه (Alias) وكتعطيه لـ Routes محددين.

استعماله فالـ Route:
\`\`\`php
Route::get('/dashboard', function () {
    // ...
})->middleware(['auth', 'verified']);
\`\`\`

---

## 💡 الخلاصة
الـ Middleware هو أداة قوية لحماية ومراقبة الطلبات وتعديلها قبل ما توصل للكود الرئيسي ديالك.`,

    "requests-validation.md": `# التحقق من الطلبات (Requests & Validation)

## ✅ علاش خاصنا Validation؟
عمرك ما تيق فالمستخدم! (Never trust user input).
أي بيانات جاية من عند المستخدم (Form, Query Params...) خاصك تفيريفيها قبل ما تخدم بيها أو تخزنها فقاعدة البيانات. هادشي باش تحمي راسك من الأخطاء والهجمات.

---

## 🛡️ طرق الـ Validation

### 1. الـ Validation البسيط (داخل Controller)
تقدر تستعمل دالة \`validate\` مباشرة فالـ Controller:

\`\`\`php
public function store(Request $request) {
    $validated = $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ]);

    // إذا وصل هنا، يعني الـ Validation داز مزيان
    // إذا فشل، لاراڤيل كيرد المستخدم للصفحة السابقة مع الأخطاء أوتوماتيكياً!
}
\`\`\`

### 2. Form Requests (الطريقة الاحترافية)
إذا كان عندك Validation معقد، حسن ليك تستعمل **Form Request Class**.
\`\`\`bash
php artisan make:request StorePostRequest
\`\`\`
هادشي كينظم الكود:
\`\`\`php
// app/Http/Requests/StorePostRequest.php
public function rules(): array
{
    return [
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
    ];
}
\`\`\`
فالـ Controller، كتعوض \`Request\` بـ \`StorePostRequest\`:
\`\`\`php
public function store(StorePostRequest $request) {
    // الكود ديالك هنا، ما غيوصل هنا غير إذا كان الـ request valid
}
\`\`\`

---

## 📝 قواعد مشهورة (Common Rules)
-   \`required\`: الحقل ضروري.
-   \`email\`: خاصو يكون إيميل صحيح.
-   \`numeric\`: خاصو يكون رقم.
-   \`min:8\` / \`max:255\`: الحد الأدنى والأقصى.
-   \`unique:users\`: ما كاينش بحالو فالـ Table \`users\`.
-   \`confirmed\`: (للـ Pwd) خاصو confirmation field معاه.

---

## 💬 رسائل الخطأ (Error Messages)
لاراڤيل كيجي برسائل جاهزة بالإنجليزي. تقدر ترجمهم فملف \`lang/ar/validation.php\`.
باش تعرض الأخطاء فالـ Blade:

\`\`\`html
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
\`\`\`
أو لكل حقل بوحدو:
\`\`\`html
@error('title')
    <div class="error">{{ $message }}</div>
@enderror
\`\`\`
`,

    "responses.md": `# الردود (Responses)

## 📤 أنواع الردود
لاراڤيل كيوفر طرق بزاف باش ترد الجواب (Response) للمستخدم من بعد ما تعالج الطلب ديالو.

### 1. Strings & Arrays
\`\`\`php
Route::get('/', function () {
    return 'Hello World'; // كترجع كـ HTML عادي
});

Route::get('/', function () {
    return [1, 2, 3]; // لاراڤيل كيحولها لـ JSON أوتوماتيكياً!
});
\`\`\`

### 2. Response Objects
باش تتحكم أكثر (Status Code, Headers):
\`\`\`php
return response('Hello World', 200)
    ->header('Content-Type', 'text/plain');
\`\`\`

### 3. Views (صفحات HTML)
هادشي اللي غتستعمل بزاف:
\`\`\`php
return view('user.profile', ['user' => $user]);
\`\`\`

### 4. JSON Responses (للـ API)
\`\`\`php
return response()->json([
    'name' => 'Abigail',
    'state' => 'CA',
]);
\`\`\`

### 5. Redirects (إعادة التوجيه)
\`\`\`php
return redirect('/home');
return redirect()->route('login');
return back()->withInput(); // الرجوع للصفحة السابقة مع الحفاظ على المدخلات
\`\`\`

### 6. File Downloads (تحميل الملفات)
\`\`\`php
return response()->download($pathToFile);
return response()->download($pathToFile, $name, $headers);
\`\`\`

---

## ✨ Flash Data (رسائل مؤقتة)
فاش كدير Redirect (مثلا بعد إضافة \`Post\`)، كتبغي تعرض رسالة نجاح.
\`\`\`php
return to_route('dashboard')->with('status', 'Profile updated!');
\`\`\`
فالـ View:
\`\`\`html
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif
\`\`\`
هاد البيانات كتبقى غير للطلب الجاي وكتمسح (One-time usage).`,

    "docker-basics.md": `# أساسيات دوكر (Docker Basics)

## 🐳 شنو هو Docker وعلاش كنحتاجوه؟
Docker هو أداة كتعاونك باش "تبالي" (Package) التطبيق ديالك وكل ما كيحتاج (Code, Libraries, System tools) فواحد الصندوق كيتسمى **Container**. 

هاد الـ **Container** كيخدم فنفس الطريقة فين ما حطيتيه: سواء فـ الحاسوب ديالك (Local)، أو عند صاحبك، أو فـ السيرفر (Production). يعني كتهنى من المشكل الشهير: *"It works on my machine"*.

---

## 📦 المفاهيم الأساسية (Core Concepts)

### 1. **Image (الصورة)**
تخيل الـ **Image** بحال شي "Plan" أو "Recette" (وصفة). هي ملف فيه التعليمات باش تصاوب Container.
-   مثلا: \`php:8.2-fpm\` هي Image واجدة فيها PHP 8.2.
-   الـ Image كتكون Read-only (ماكيتبدلش المحتوى ديالها ملي كتكون كتخدم).

### 2. **Container (الحاوية)**
الـ **Container** هو النسخة الحية (Running Instance) ديال الـ Image.
-   إلى كانت Image هي "الخطة"، الـ Container هو "الدار" اللي تبنات بديك الخطة.
-   تقدر تكريي بزاف د Containers من نفس الـ Image.

### 3. **Volume (مساحة التخزين)**
البيانات فـ Container كتكون مؤقتة (Temporary). يعني إلى طفيتي Container، البيانات كتمشي.
باش تحافظ على البيانات (بحال Base de données)، كتستعمل **Volume**. هو بحال شي Disque Dur خارجي ملصق مع Container.

### 4. **Network (الشبكة)**
باش الـ Containers يهضرو مع بعضياتهم (مثلا: Laravel Container يهضر مع MySQL Container)، خاصهم يكونو فـ **Network** وحدة.
Docker كيقاد هادشي أوتوماتيكمون فاش كتستعمل \`docker-compose\`.

---

## 🛠️ كيفاش Docker كيخدم مع Laravel؟
فـ Laravel، كنستعملو أداة سميتها **Laravel Sail**، اللي هي واجهة خفيفة (Lightweight interface) لـ Docker.
كتخليك تخدم بـ PHP, MySQL, Redis بلا ما تحتاج تكون خبير فـ Docker.

---

## 💡 الخلاصة
Docker كيسهل حياتك كمطور. كيعطيك بيئة عمل نظيفة، معزولة، وقابلة للنقل (Portable).`,

    "installation.md": `# تثبيت لاراڤيل محلياً (Installation)

## 🛠️ المتطلبات (Requirements)
قبل ما تبدا، خاص يكون عندك هاد الأدوات مثبتة فـ الحاسوب ديالك:
1.  **PHP**: (النسخة 8.1 أو أحدث).
2.  **Composer**: مدير الحزم (Package Manager) ديال PHP.
3.  **Node.js & NPM**: باش تخدم الـ Frontend (اختياري ولكن مهم).

---

## 📥 1. تثبيت PHP و Composer
### Windows
أسهل طريقة هي تستعمل **Laragon** أو **XAMPP**.
-   **Laragon**: كيجيب ليك كلشي واجد (PHP, MySQL, Apache/Nginx, Composer, Node.js). كنصحو بـ Laragon حيت ساهل بزاف.
-   بعد التثبيت، تأكد بلي \`php\` و \`composer\` خدامين فالـ Terminal:
    \`\`\`bash
    php -v
    composer -v
    \`\`\`

### macOS
تقدر تستعمل **Homebrew**:
\`\`\`bash
brew install php
brew install composer
\`\`\`

### Linux (Ubuntu)
\`\`\`bash
sudo apt update
sudo apt install php-cli unzip curl
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
\`\`\`

---

## 🚀 2. تثبيت Laravel Installer
من الأحسن تثبت الـ Laravel Installer باش تكريي مشاريع جديدة بسهولة.
افتح الـ Terminal وكتب:

\`\`\`bash
composer global require laravel/installer
\`\`\`

من بعد، تأكد بلي الـ Path مقاد باش تقدر تستعمل أمر \`laravel\`.

---

## ⚡ 3. إنشاء مشروع جديد
دابا تقدر تكريي أول مشروع لاراڤيل ديالك:

\`\`\`bash
laravel new my-app
\`\`\`

أو باستعمال Composer مباشرة:

\`\`\`bash
composer create-project laravel/laravel my-app
\`\`\`

---

## 🏃‍♂️ 4. تشغيل المشروع
دخل للملف ديال المشروع وخدم السيرفر المحلي:

\`\`\`bash
cd my-app
php artisan serve
\`\`\`

دابا، دخل لـ \`http://localhost:8000\` فالمتصفح، وغتشوف صفحة الاستقبال ديال Laravel! 🎉`,

    "docker-installation.md": `# لاراڤيل مع دوكر (Docker Installation)

## ⛵ مقدمة على Laravel Sail
**Laravel Sail** هو واجهة سطر أوامر (CLI) خفيفة باش تتعامل مع بيئة Docker الخاصة بـ Laravel.
 Sail كيجي واجد مع Laravel، يعني ما كتحتاجش تكون خبير فـ Docker باش تخدم بيه.

---

## 🚀 التثبيت على macOS و Linux
هاد الأنظمة كتدعم Docker بشكل طبيعي (Native).

1.  **تثبيت Docker Desktop**: تيليشارجيه وانصطاليه من الموقع الرسمي.
2.  **إنشاء مشروع جديد باستعمال Sail**:
    ما كتحتاجش يكون عندك PHP أو Composer مثبتين فالحاسوب! Docker غيتكفل بكلشي.
    
    فتح الـ Terminal وكتب:
    \`\`\`bash
    curl -s "https://laravel.build/my-app" | bash
    \`\`\`
    *(بدل \`my-app\` بسمية المشروع اللي بغيتي)*.

3.  **تشغيل المشروع**:
    دخل لملف المشروع:
    \`\`\`bash
    cd my-app
    \`\`\`
    وخدم Sail:
    \`\`\`bash
    ./vendor/bin/sail up
    \`\`\`

    دابا المشروع خدام فـ \`http://localhost\`.

---

## 🪟 التثبيت على Windows
فـ Windows، خاصك تستعمل **WSL2** (Windows Subsystem for Linux 2).

1.  **ثبت WSL2**: تبع [الخطوات الرسمية](https://learn.microsoft.com/en-us/windows/wsl/install).
2.  **ثبت Docker Desktop**: وتأكد بلي مفعل خيار "Use WSL 2 based engine".
3.  **فتح Windows Terminal**: ودخل لـ Ubuntu (أو أي Distro انصطاليتي).
4.  **طبق نفس الخطوات** ديال Linux (الفوق).

---

## 🕹️ أوامر Sail المهمة
-   **تشغيل السيرفر**: \`./vendor/bin/sail up\`
-   **تشغيل السيرفر فالخلفية (Detached)**: \`./vendor/bin/sail up -d\`
-   **توقيف السيرفر**: \`./vendor/bin/sail down\`
-   **تشغيل أوامر Artisan**:
    بلاصت ما دير \`php artisan migrate\`، كدير:
    \`\`\`bash
    ./vendor/bin/sail artisan migrate
    \`\`\`
-   **تشغيل Composer**: \`./vendor/bin/sail composer require laravel/sanctum\`

---

## 💡 علاش Sail؟
Sail كيعطيك بيئة عمل (Environment) مطابقة تماماً لداكشي اللي غيكون فالسيرفر. ما بقيتيش غتسمع "It works on my machine" حيت كلشي خدام فنفس الـ Containers.`,

    "first-project-setup.md": `# إعداد أول مشروع (First Project Setup)

## 🏁 يلاه نبداو!
فاش كثبت Laravel (سواء بـ Installer أو Docker)، كيجي معاه بزاف د الملفات. ما تخلعش! 😅
غادي نشوفو الخطوات الأولى باش تقاد المشروع ديالك.

---

## ⚙️ 1. ملف الإعدادات (.env)
أهم ملف خاصك تعرفو هو \`.env\`. هذا الملف فيه الإعدادات الحساسة ديال المشروع، بحال:
-   معلومات قاعدة البيانات (Database credentials).
-   معلومات البريد الإلكتروني (Mail settings).
-   مفتاح التطبيق (App Key).

مثال:
\`\`\`env
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:....
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
\`\`\`

⚠️ **ملاحظة:** عمرك ما تبارطاجي ملف \`.env\` مع شي حد أو تحطو فـ GitHub!

---

## 🔑 2. توليد مفتاح التطبيق (App Key)
إذا خديتي مشروع من GitHub، غالبا ما غيكونش فيه \`.env\`. خاصك تدير كوبي لـ \`.env.example\` وتسميه \`.env\`.
من بعد، ضروري generate الـ Key:

\`\`\`bash
php artisan key:generate
\`\`\`
هاد الأمر كيحمي الـ Sessions والبيانات المشفرة ديالك.

---

## 🗄️ 3. إعداد قاعدة البيانات (Migrations)
Laravel كيجي مع جداول واجدة (بحال Users, Password Resets). باش تكرييهم فـ Database ديالك:

1.  قاد معلومات الاتصال فـ \`.env\` (DB_DATABASE, DB_USERNAME...).
2.  خدم الأمر:
    \`\`\`bash
    php artisan migrate
    \`\`\`

هادشي غادي ينشأ الجداول (Tables) فقاعدة البيانات ديالك.

---

## 🌐 4. تشغيل السيرفر
كيفما شفنا قبل، باش تخدم المشروع محلياً:

\`\`\`bash
php artisan serve
\`\`\`

أو بالي Sail:

\`\`\`bash
./vendor/bin/sail up
\`\`\`

---

## 🎉 مبروك!
دابا عندك مشروع Laravel واجد وخدام. الخطوة الجاية هي تكتشف بنية الملفات (Directory Structure) وتفهم فين تحط الكود ديالك.`,

    "blade.md": `# قوالب بلايد (Blade Templates)

## 🗡️ شنو هو Blade؟
Blade هو محرك القوالب (Templating Engine) القوي والبسيط اللي كيجي مع Laravel.
كيسمح ليك تكتب HTML وتخلط معاه PHP Code بطريقة نظيفة وسهلة، بلا ما تعذب راسك بـ \`<?php echo $var; ?>\` كل مرة.

الملفات ديال Blade كتكون فـ \`resources/views\` وكتسالي بـ \`.blade.php\`.

---

## 🎨 عرض البيانات
باش تافيشي شي متغير (Variable) جاي من Controller:

\`\`\`html
<h1>Hello, {{ $name }}</h1>
\`\`\`
لاراڤيل كيحول \`{{ }}\` لـ \`htmlspecialchars\` باش يحميك من هجمات XSS.
إذا بغيتي تافيشي HTML كما هو (مثلا جاي من Editor)، استعمل:
\`\`\`html
{!! $content !!}
\`\`\`
*(⚠️ رد بالك: استعمل هادي غير إذا كنتي متيقن من المحتوى!)*

---

## 🔄 التحكم (Control Structures)
Blade كيوفر ليك اختصارات (Directives) بحال \`@if\`, \`@foreach\`.

### الشروط (Conditionals)
\`\`\`html
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif
\`\`\`

### الحلقات (Loops)
\`\`\`html
@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
\`\`\`

---

## 📥 تضمين الملفات (Including Sub-Views)
إذا بغيتي تعاود تستعمل شي جزء (مثلا Header):
\`\`\`html
@include('shared.header')

<div>
    <!-- Content -->
</div>

@include('shared.footer')
\`\`\`

---

## 💡 الخلاصة
Blade كيسهل عليك تكتب Frontend نظيف. ما كتحتاجش تتعلم لغة جديدة، غير شوية ديال Directives بساط.`,

    "blade-components.md": `# مكونات (Components)

## 🧩 شنو هو Component؟
الـ **Component** هو طريقة باش تعزل جزء من الـ UI ديالك (مثل زر، قائمة، بطاقة مستخدم) وتعاود تستعملو ففين ما بغيتي، مع إمكانية تغيير المحتوى والخصائص (Props).

---

## 🛠️ إنشاء المكون
استعمل Artisan باش تكريي مكون جديد:

\`\`\`bash
php artisan make:component Alert
\`\`\`

غيتزادو جوج ملفات:
1.  **Class:** \`app/View/Components/Alert.php\` (للـ Logic).
2.  **View:** \`resources/views/components/alert.blade.php\` (للتصميم).

---

## 🏗️ كيفاش نستعملوه؟
فالـ View ديال المكون (\`alert.blade.php\`):
\`\`\`html
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>
\`\`\`

فالـ Blade العادي:
\`\`\`html
<x-alert type="error">
    <strong>Whoops!</strong> Something went wrong!
</x-alert>
\`\`\`

الـ \`<x-alert>\` هو اسم المكون (Component).
الـ \`type\` هو Prop.
المحتوى الوسط هو \`$slot\`.

---

## 📥 Props (الخصائص)
باش تقبل Props (مثلا \`$type\`)، خاصك تزيدها فالـ Constructor ديال الكلاس:

\`\`\`php
// app/View/Components/Alert.php
public function __construct(
    public string $type
) {}
\`\`\`
أو مباشرة فالـ Anonymous Component (بلا كلاس) عن طريق \`@props\`:
\`\`\`html
<!-- components/button.blade.php -->
@props(['type' => 'primary'])

<button class="btn btn-{{ $type }}">
    {{ $slot }}
</button>
\`\`\`

---

## 💡 علاش المكونات؟
المكونات كتخلي الـ Frontend ديالك منظم (Modular) وسهل فالصيانة. بلاصت ما تعاود نفس الكود فكل صفحة، بدل غير المكون الرئيسي وهادشي غينعكس فالمشروع كامل.`,

    "layouts.md": `# التصاميم (Layouts)

## 🏗️ علاش Layouts؟
كل موقع كيكون عندو "شكل عام" (Basic Structure) مشترك فكل الصفحات (Header, Sidebar, Footer).
بلاصت ما تعاود تكتب HTML tag و Head و CSSLinks فكل صفحة، كدير **Layout** واحد وكتخلي الصفحات "ترث" (Extend) منو.

---

## 🎨 Layout رئيسي
كريي ملف فالـ \`resources/views/layouts/app.blade.php\`:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>App Name - @yield('title')</title>
</head>
<body>
    @section('sidebar')
        This is the master sidebar.
    @show

    <div class="container">
        @yield('content')
    </div>
</body>
</html>
\`\`\`

المفاهيم:
-   \`@yield('content')\`: هنا فين غيجي المحتوى المختلف (Placeholder).
-   \`@section('sidebar') ... @show\`: هذا قسم Default، وكيبان إلا ما بدلوش فالصفحة الفرعية.

---

## 🔗 استعمال Layout
فصفحة جديدة (مثلا \`resources/views/child.blade.php\`):

\`\`\`html
@extends('layouts.app')

@section('title', 'Page Title')

@section('sidebar')
    @parent <!-- باش تحافظ على السايدبار الأصلي -->

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <p>This is my body content.</p>
@endsection
\`\`\`

النتيجة:
-   لاراڤيل غيمشي للـ \`layout/app.blade.php\`.
-   غيعوض \`@yield('title')\` بـ "Page Title".
-   غيعوض \`@yield('content')\` بالـ Body ديالك.
-   الـ Sidebar غيكون فيه السايدبار الأصلي + المقطع اللي زدتي.

---

## 🧩 Components Layouts
تقدر تستعمل Components كـ Layouts (طريقة جديدة ومحبوبة فـ Laravel 7+):

\`\`\`html
<!-- resources/views/components/layout.blade.php -->
<html>
    <!-- ... -->
    <body>
        {{ $slot }}
    </body>
</html>
\`\`\`

الاستعمال:
\`\`\`html
<x-layout>
    <p>This is my body content.</p>
</x-layout>
\`\`\`

---

## 💡 الخلاصة
Layouts هي العمود الفقري للتصميم فـ Laravel. كتنقص التكرار بزاف وكتجعل التعديلات الشاملة سهلة جداً.`,

    "assets-management.md": `# إدارة الموارد (Assets Management)

## 📦 شنو هي Assets؟
الـ **Assets** هما الملفات الثابتة (Static Files) بحال CSS, JavaScript, الصور (Images), والـ Fonts.
ملي كتخدم بـ HTML الخام، هاد الملفات كنحطوها عادة فـ \`public/\`.
ولكن فـ Laravel الحديث، عندنا طرق قوية جداً لإدارتها: **Vite**.

---

## ⚡ 1. Vite (السرعة القصوى)
### شنو هو Vite؟
هو أداة Build Tool حديثة وسريعة بزاف (بديل لـ Webpack Mix).
Vite كيخدم بـ ES Modules فالـ Dev، وكيبني (Bundle) الملفات للـ Production.

### ملف الإعداد (vite.config.js)
هنا كتقول لـ Vite شنو خاصو يبني:

\`\`\`javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
\`\`\`

⚠️ **مهم:** لاحظ أن الملفات الأصلية كنجيبوها من \`resources/\` ماشي \`public/\`.

---

## 🎨 2. CSS & Tailwind
إذا بغيتي تخدم بـ CSS عادي، حطو فـ \`resources/css/app.css\`.
ولكن Laravel كيجي غالبا مع **Tailwind CSS** مجهز.

### الاستعمال فالـ Blade
باش تودمج ملفات CSS و JS فالـ Layout ديالك، استعمل التوجيه \`@vite\`:

\`\`\`html
<!DOCTYPE html>
<head>
    <!-- ... -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
\`\`\`

فاش تكون \`npm run dev\` خدامة، هاد التوجيه كيحط Hot Module Replacement (HMR) يعني التغييرات كتبان فلحظتها بلا Refresh!
فاش تبني للـ Production (\`npm run build\`)، كيحط ليك ملفات \`css\` و \`js\` مضغوطة ومنظمة فـ \`public/build/\`.

---

## 🖼️ 3. الصور والملفات الأخرى
بالنسبة للصور (Images)، عندك جوج خيارات:
1.  **مباشرة فـ \`public/\`:** (مثلا \`public/images/logo.png\`)
    \`\`\`html
    <img src="{{ asset('images/logo.png') }}" alt="Logo">
    \`\`\`

2.  **فـ \`resources/\` (Processed via Vite):**
    إذا بغيتي Vite يعالج الصور (Optimisation, Versioning)، حطهم فـ \`resources/images/\`.
    ولكن الطريقة الأولى أسهل وأكثر شيوعاً للملفات الثابتة.

---

## 💡 الخلاصة
Vite كيجعل تجربة Front-end Development فـ Laravel ممتعة وسريعة جداً.
ما تنساش دائما تخدم \`npm run dev\` وأنت كتطور، و \`npm run build\` قبل ما ترفع السيت.`,

    "database.md": `# قاعدة البيانات (Database)

## 🗄️ لاراڤيل وقواعد البيانات
لاراڤيل كيخلي التعامل مع قاعدة البيانات (Database) ساهل بزاف.
تقدر تخدم بـ MySQL, PostgreSQL, SQLite, SQL Server بنفس الطريقة وبلا ما تبدل الكود ديالك بزاف.

---

## ⚙️ الإعدادات (Configuration)
أول حاجة، خاصك تقاد ملف \`.env\`:

\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_app
DB_USERNAME=root
DB_PASSWORD=
\`\`\`
هاد المعلومات هي اللي كيستعملها لاراڤيل باش يتكونيكطا مع لاباز.

---

## 🏃‍♂️ تنفيذ استعلامات SQL (Raw SQL)
واخا لاراڤيل عندو أدوات قوية، تقدر تستعمل SQL مباشر:

\`\`\`php
use Illuminate\Support\Facades\DB;

$users = DB::select('select * from users where active = ?', [1]);

DB::insert('insert into users (id, name) values (?, ?)', [1, 'Marc']);
\`\`\`

---

## 🔄 المعاملات (Database Transactions)
باش تضمن بلي مجموعة من العمليات دازو كاملين أو لا وحدة فيهم دازت (مثلا: تحويل بنكي)، استعمل \`transaction\`:

\`\`\`php
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);
    DB::table('posts')->delete();
});
\`\`\`
إذا وقع أي خطأ وسط الدالة، لاراڤيل غيدير \`Rollback\` أوتوماتيكياً.

---

## 💡 ملاحظة
في الدروس الجاية، غنشوفو **Migrations** و **Eloquent**، وهما الطرق "ديال بصح" باش تخدم فـ Laravel, حسن من Raw SQL.`,

    "migrations.md": `# المايغريشن (Migrations)

## 📦 شنو هي Migrations؟
الـ **Migrations** هي بحال "Version Control" لقاعدة البيانات ديالك.
هي ملفات PHP كتوصف شكل الجداول (Tables) والأعمدة (Columns).
بهاد الطريقة، الفريق كامل كيكون عندو نفس الـ Database Structure بلا ما تبارطاجيو ملفات SQL يدوياً.

---

## 🛠️ إنشاء Migration
\`\`\`bash
php artisan make:migration create_posts_table
\`\`\`
الملف غيتزاد فـ \`database/migrations\`.

---

## 📝 كتابة الجدول
في دالة \`up()\`, كتوصف الجدول:

\`\`\`php
public function up(): void
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id(); // Auto-increment integer 'id'
        $table->string('title'); // Varchar
        $table->text('body'); // Text
        $table->boolean('is_published')->default(false);
        $table->foreignId('user_id')->constrained(); // Foreign key to users table
        $table->timestamps(); // created_at & updated_at
    });
}
\`\`\`

في دالة \`down()\`, كتقول شنو يوقع إلا بغينا نرجعو اللور (Reverse):
\`\`\`php
public function down(): void
{
    Schema::dropIfExists('posts');
}
\`\`\`

---

## 🚀 تشغيل Migrations
باش تطبق التغييرات على قاعدة البيانات:
\`\`\`bash
php artisan migrate
\`\`\`

إلا بغيتي تمسح كلشي وتعاود من الأول:
\`\`\`bash
php artisan migrate:fresh
\`\`\`

---

## 💡 علاش Migrations مهمة؟
1.  **التنظيم:** كتعرف التاريخ ديال التغييرات فقاعدة البيانات.
2.  **التعاون:** أي واحد جديد فالفريق كيدير \`php artisan migrate\` وها هو واجد.
3.  **الاستقرار:** كتقدر تجرب التغييرات وترجع فيها (Rollback) بسهولة.`,

    "models-eloquent.md": `# الموديلز (Eloquent ORM)

## 💎 شنو هو Eloquent؟
**Eloquent** هو الـ ORM (Object-Relational Mapper) ديال لاراڤيل.
الفكرة ديالو بسيطة: **كل جدول فقاعدة البيانات عندو Model (كلاس) كيمثلو.**
عوض ما تكتب SQL، كتستعمل هاد الـ Model باش تزيد، تقرا، وتعدل البيانات.

---

## 🏗️ إنشاء Model
\`\`\`bash
php artisan make:model Post
\`\`\`
بشكل افتراضي، لاراڤيل كيفترض بلي Model \`Post\` كيمثل الجدول \`posts\` (الجمع).

---

## 📖 قراءة البيانات (Retrieving Models)

\`\`\`php
// جيب كلشي
$posts = Post::all();

// جيب واحد بالـ ID
$post = Post::find(1);

// جيب بشرط
$posts = Post::where('is_published', true)
             ->orderBy('name')
             ->take(10)
             ->get();
\`\`\`

---

## ➕ إضافة وتعديل البيانات

### إضافة (Create)
\`\`\`php
$post = new Post;
$post->title = 'My New Post';
$post->save();
\`\`\`
أو بطريقة مختصرة (Mass Assignment):
\`\`\`php
$post = Post::create(['title' => 'My New Post']);
\`\`\`
⚠️ باش تخدم \`create\`، خاصك تزيد الحقول المسموح بيها فـ خاصية \`$fillable\` فالـ Model.

### تعديل (Update)
\`\`\`php
$post = Post::find(1);
$post->title = 'Updated Title';
$post->save();
\`\`\`

### مسح (Delete)
\`\`\`php
$post = Post::find(1);
$post->delete();
\`\`\`

---

## 🛡️ Mass Assignment Protection
باش تحمي راسك (ما يجيش شي واحد يبدل \`is_admin\` وهو ما عندوش الحق)، لازم تحدد شنو الحقول اللي ممكن تعمرها:

\`\`\`php
class Post extends Model
{
    protected $fillable = ['title', 'body', 'user_id'];
}
\`\`\`

---

## 💡 الخلاصة
Eloquent كيخلي التعامل مع البيانات متعة. الكود كيولي مقروء وبحال الإنجليزية (\`Post::where(..)->get()\`).`,

    "relationships.md": `# العلاقات (Relationships)

## 🤝 أنواع العلاقات
قوة Eloquent الحقيقية كتبان فـ **Relationships**.
كيفاش تربط بين الجداول (مثلا: "User عندو Post"، "Post عندو Comments").

---

### 1. واحد لواحد (One to One)
مثال: User عندو Profile واحد.

\`\`\`php
// User Model
public function profile()
{
    return $this->hasOne(Profile::class);
}
\`\`\`
الاستعمال: \`$user->profile->bio\`.

---

### 2. واحد لعدة (One to Many) – الأكثر استعمالاً
مثال: Post عندو بزاف د Comments.

\`\`\`php
// Post Model
public function comments()
{
    return $this->hasMany(Comment::class);
}

// Comment Model (العكس)
public function post()
{
    return $this->belongsTo(Post::class);
}
\`\`\`
الاستعمال:
\`\`\`php
$comments = $post->comments; // كيجيب ليك Collection د الـ comments
echo $comment->post->title; // كيجيب ليك عنوان البوست مول الكومنت
\`\`\`

---

### 3. عدة لعدة (Many to Many)
مثال: User عندو Roles، و Role عندو Users. (كتحتاج جدول وسطهم \`role_user\`).

\`\`\`php
// User Model
public function roles()
{
    return $this->belongsToMany(Role::class);
}
\`\`\`
الاستعمال:
\`\`\`php
$user->roles()->attach($roleId); // زيد رول
$user->roles()->detach($roleId); // حيد رول
\`\`\`

---

## ⚡ Eager Loading (مشكلة N+1)
تخيل بغيتي تجيب كتب وعناوين المؤلفين دياولهم.
\`\`\`php
$books = Book::all();
foreach ($books as $book) {
    echo $book->author->name;
}
\`\`\`
هاد الكود غيدير Query لكل كتاب! (N+1 Queries problem).
الحل: جيبهم دقة وحدة بـ \`with\`:

\`\`\`php
$books = Book::with('author')->get();
\`\`\`
دابا غيديرو غير 2 queries، والكود غيكون أسرع بـ 100 مرة!

---

## 💡 الخلاصة
عرف العلاقات مزيان فـ Models دياولك، وغتربح بزاف د الوقت والقوة فالتعامل مع البيانات المعقدة.`,

    "query-builder.md": `# باني الاستعلامات (Query Builder)

## 🛠️ شنو هو Query Builder؟
بعض المرات، كتكون محتاج دير Query معقدة شوية، أو ما باغيش تستعمل Eloquent Models.
هنا كينفع **Query Builder**. كيعطيك واجهة (Interface) سلسلة لإنشاء SQL Queries.

---

## 📝 أمثلة

### جيب البيانات (Select)
\`\`\`php
$users = DB::table('users')->get(); // Select *

$user = DB::table('users')->where('name', 'John')->first(); // Row واحد

$email = DB::table('users')->where('name', 'John')->value('email'); // قيمة وحدة
\`\`\`

### الترتيب والحد (Ordering & Limit)
\`\`\`php
$users = DB::table('users')
                ->orderBy('name', 'desc')
                ->limit(10)
                ->get();
\`\`\`

### Joins (الربط)
\`\`\`php
$users = DB::table('users')
            ->join('contacts', 'users.id', '=', 'contacts.user_id')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'contacts.phone', 'orders.price')
            ->get();
\`\`\`

### Aggregates (الحسابات)
\`\`\`php
$count = DB::table('users')->count();
$price = DB::table('orders')->max('price');
$avg = DB::table('orders')->avg('price');
\`\`\`

---

## 🆚 Eloquent vs Query Builder
-   **Eloquent:** كترجع ليك Objects (Models)، ساهلة فالتعامل، وفيها Relationships. (أكثر استعمالاً).
-   **Query Builder:** كترجع ليك Arrays أو stdClass Objects، أسرع شوية فالأداء (Performance) فالعمليات الكبيرة بزاف.

---

## 💡 الخلاصة
لاراڤيل كيعطيك الخيار. بدا بـ Eloquent ديما، وإذا حسيتي بلي الـ Query ثقيلة بزاف أو معقدة، دوز لـ Query Builder.`,

    "seeders.md": `# البذور (Seeders)

## 🌱 شنو هي Seeders؟
الـ **Seeding** هي العملية باش "تزرع" قاعدة البيانات ديالك ببيانات أولية (Initial Data).
مثلا:
-   حساب Admin افتراضي باش تقدر تدخل للسيت.
-   ليستة ديال الدول والمدن.
-   إعدادات الموقع.

---

## ✍️ إنشاء Seeder
\`\`\`bash
php artisan make:seeder UserSeeder
\`\`\`

فـ \`run()\` method:
\`\`\`php
public function run(): void
{
    DB::table('users')->insert([
        'name' => 'Admin User',
        'email' => 'admin@example.com',
        'password' => Hash::make('password'),
    ]);
}
\`\`\`

---

## 🚀 تشغيل Seeders
باش تخدمهم كاملين، عيط عليهم فـ \`DatabaseSeeder.php\`:

\`\`\`php
public function run(): void
{
    $this->call([
        UserSeeder::class,
        CountrySeeder::class,
    ]);
}
\`\`\`

ومن بعد فالـ Terminal:
\`\`\`bash
php artisan db:seed
\`\`\`
أو ديرها مع migration دقة وحدة:
\`\`\`bash
php artisan migrate:fresh --seed
\`\`\`
(هادي كتمسح كلشي، كتعاود تبني الجداول، وكتعمرهم).

---

## 💡 الخلاصة
Seeders كيعاونوك باش ما تبقاش كل مرة تعمر الـ Database بيدك فاش كتبغي تجرب السيت فجهاز جديد.`,

    "factories.md": `# المصانع (Factories)

## 🏭 شنو هي Factories؟
إذا كانت Seeders كتصلح للبيانات الثابتة (مثل Admin, Countries)، فالـ **Factories** كتصلح باش تعمر قاعدة البيانات بآلاف البيانات "الوهمية" (Fake Data) للتجربة.
لاراڤيل كيستعمل مكتبة **Faker** باش يولد هاد البيانات (أسماء، إيميلات، نصوص...).

---

## 🛠️ تعريف Factory
لكل Model، كيكون عندو Factory.
فـ \`database/factories/UserFactory.php\`:

\`\`\`php
public function definition(): array
{
    return [
        'name' => fake()->name(),
        'email' => fake()->unique()->safeEmail(),
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
}
\`\`\`

---

## 🧪 الاستعمال
تقدر تستعمل Factory فـ Seeder أو فـ Tests.

\`\`\`php
// كريي 10 ديال users وخزنهم فـ DB
User::factory()->count(10)->create();

// كريي user ومعاه 3 ديال posts دياولو (باستعمال العلاقات)
User::factory()
    ->has(Post::factory()->count(3))
    ->create();
\`\`\`

---

## 💡 الخلاصة
Factories هي أقوى أداة باش تيستي السيت ديالك ببيانات كتيرة وواقعية (Pagination, Search performance...) بلا ما تضرب تمارة.`,

    "security.md": `# الأمان (Security)

## 🛡️ لاراڤيل والأمان
واحد من أهم الأسباب علاش الناس كتختار لاراڤيل هو **الأمان**.
لاراڤيل كيجي محصن "Out of the box" ضد أغلب الهجمات المشهورة. ماكتحتاجش تكون خبير أمني باش تصاوب سيت آمن، غير تبع القواعد.

---

## 🚫 الهجمات اللي كيحميك منها

### 1. SQL Injection
بما أنك كتستعمل Eloquent أو Query Builder، لاراڤيل كيستعمل **PDO Parameter Binding**.
يعني واخا المستخدم يكتب SQL فالـ Input، لاراڤيل كيعتبرو "نص" عادي وما كينفذوش.
*(تحذير: تجنب Raw SQL قدر المستطاع).*

### 2. XSS (Cross-Site Scripting)
فـ Blade، فاش كدير \`{{ $variable }}\`، لاراڤيل كينقي (Escape) أي كود HTML أو JS.
داكشي علاش الكود الخبيث ما كيخدمش.

### 3. CSRF (Cross-Site Request Forgery)
شنو يمنع شي موقع خبيث يصيفط Form بوست للموقع ديالك ويمسح شي حاجة؟
لاراڤيل كيزيد **CSRF Token** لكل Session. أي Form عندك، لازم تزيد فيه:
\`\`\`html
<form method="POST" action="/profile">
    @csrf
    ...
</form>
\`\`\`
إلا ماكانش التوكن، لاراڤيل غيرفض الطلب (419 Page Expired).

---

## 🔒 Mass Assignment Vulnerability
هضرنا عليها فالـ Eloquent. ديما حدد \`$fillable\` فالـ Model باش ما يقدرش شي حد يزيد حقول ما بغيتيهم (بحال \`is_admin=1\`).

---

## 💡 الخلاصة
الأمان فـ Laravel ماشي شي حاجة كتزيدها فاللخر، هو "مبني" فالأساس. عليك غير تستعمل الأدوات اللي كيعطيك (Eloquent, Blade, CSRF protection) والطريق غيكون آمن.`,

    "authentication.md": `# المصادقة (Authentication)

## 🔑 تسجيل الدخول
**Authentication** هي العملية باش نتأكدو "شكون نتا" (Login).
فـ Laravel، هادشي ساهل بزاف.

---

## 📦 Starter Kits (البداية السريعة)
بلاصة ما تبني Login و Register و Reset Password من الصفر، لاراڤيل كيعطيك **Laravel Breeze**.
هو باكيج كيحط ليك هادشي كامل واجد ومقد.

\`\`\`bash
composer require laravel/breeze --dev
php artisan breeze:install
php artisan migrate
\`\`\`
صافي! دابا عندك نظام تسجيل دخول كامل خدام.

---

## 🛠️ التعامل اليدوي (Manually)
إلا بغيتي دير هادشي بيديك، استعمل الـ Facade \`Auth\`:

### Login
\`\`\`php
use Illuminate\Support\Facades\Auth;

if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // النجاح
    $request->session()->regenerate();
    return redirect()->intended('dashboard');
}

// الفشل
return back()->withErrors([...]);
\`\`\`

### معرفة المستخدم الحالي
\`\`\`php
$user = Auth::user();
$id = Auth::id();
\`\`\`

### تحقق هل هو مسجل الدخول؟
\`\`\`php
if (Auth::check()) {
    // The user is logged in...
}
\`\`\`

### Logout
\`\`\`php
Auth::logout();
$request->session()->invalidate();
$request->session()->regenerateToken();
\`\`\`

---

## 💡 الخلاصة
Authentication فـ Laravel مرنة بزاف. بدا بـ Breeze للمشاريع البسيطة، واستعمل الـ Manual Auth إلا بغيتي Customization عالي.`,

    "authorization.md": `# التفويض (Authorization)

## 👮‍♂️ شنو هو Authorization؟
إذا كانت Authentication هي "شكون نتا؟"، فالـ **Authorization** هي "واش عندك الحق دير هادشي؟".
(مثلا: واش عندك الحق تمسح هاد البوست؟).

---

## 🚪 Gates (البوابات)
الـ **Gates** هي دوال (Closures) بسيطة كتعرفها فـ \`AppServiceProvider\` (أو \`AuthServiceProvider\` قديما).

\`\`\`php
// تعريف Gate
Gate::define('update-post', function (User $user, Post $post) {
    return $user->id === $post->user_id;
});
\`\`\`

الاستعمال:
\`\`\`php
if (Gate::allows('update-post', $post)) {
    // عندو الحق
}

// أو
Gate::authorize('update-post', $post); // كترمي Exception 403 إلا ماكانش عندو الحق
\`\`\`

---

## 📜 Policies (السياسات)
باش تنظم الكود، لكل Model كتدير ليه **Policy** خاص بيه.
\`\`\`bash
php artisan make:policy PostPolicy --model=Post
\`\`\`

الكلاس كتجمع الـ Logic كامل:
\`\`\`php
class PostPolicy
{
    public function update(User $user, Post $post): bool
    {
        return $user->id === $post->user_id;
    }
    
    public function delete(User $user, Post $post): bool
    {
        return $user->is_admin;
    }
}
\`\`\`

الاستعمال فالـ Controller:
\`\`\`php
public function update(Request $request, Post $post)
{
    $this->authorize('update', $post);
    // ...
}
\`\`\`

الاستعمال فالـ Blade:
\`\`\`html
@can('update', $post)
    <button>Edit Post</button>
@endcan
\`\`\`

---

## 💡 الخلاصة
استعمل **Policies** ديما للمشاريع المتوسطة والكبيرة. كتنظم Logic الصلاحيات وكتخليه واضح.`,

    "csrf-xss-protection.md": `# الحماية من CSRF و XSS

## 🛡️ CSRF Protection
كيفما شرحنا قبل، **Cross-Site Request Forgery** هي هجمة خطيرة.
لاراڤيل كيفعل حماية CSRF افتراضياً لكل \`POST\`, \`PUT\`, \`DELETE\` requests.

### استثناءات (Exceptions)
بعض المرات (مثلا Webhooks جاية من Stripe)، كتبغي تعطل CSRF لروابط معينة.
سير لملف \`bootstrap/app.php\` (أو \`VerifyCsrfToken\` middleware قديما):

\`\`\`php
->withMiddleware(function (Middleware $middleware) {
    $middleware->validateCsrfTokens(except: [
        'stripe/*',
    ]);
})
\`\`\`

---

## 🛡️ XSS Protection
**Cross-Site Scripting** كتعني شي واحد يحقن كود JS فصفحتك باش يسرق Cookies.

### قواعد الحماية:
1.  استعمل \`{{ $content }}\` ديما (Double curly braces).
2.  ما تستعملش \`{!! $content !!}\` إلا إذا كنتي منظف (Sanitized) المحتوى بيدك (باستعمال مكتبة بحال \`HTMLPurifier\`).

### Output Escaping
لاراڤيل كيحول الرموز الخطيرة:
-   \`<\`  إلى \`&lt;\`
-   \`>\`  إلى \`&gt;\`
-   \`"\`  إلى \`&quot;\`

هادشي كيخلي المتصفح يعرض النص بلا ما ينفذو.

---

## 💡 الخلاصة
الحماية مسؤولية مشتركة. لاراڤيل كيدير الجزء الكبير، ونتا عليك الحذر فاش كتستعمل \`Unescaped output\` أو كتعطل \`CSRF\`.`,

    "hashing-encryption.md": `# التشفير (Hashing & Encryption)

## 🔐 Hashing (الهاش)
الـ **Hashing** هو عملية تحويل النص (مثل كلمة السر) لسلسلة رموز غير قابلة للرجوع (One-way).
يعني: \`password\` -> \`hash\`.
ولكن ما يمكنش دير: \`hash\` -> \`password\`.

لاراڤيل كيستعمل **Bcrypt** أو **Argon2**.

الاستعمال:
\`\`\`php
use Illuminate\Support\Facades\Hash;

// إنشاء الهاش
$hashed = Hash::make('password123');

// التحقق من الهاش
if (Hash::check('password123', $hashedPassword)) {
    // الكلمة صحيحة
}
\`\`\`
عمرك ما تخزن كلمات السر Plain text! ديما استعمل \`Hash::make\`.

---

## ✉️ Encryption (التشفير)
الـ **Encryption** هو تحويل النص لرموز قابلة للرجوع (Two-way)، ولكن خاصك المفتاح (APP_KEY) باش تفك التشفير.
تصلح لتخزين بيانات حساسة (رقم بطاقة، عنوان...).

الاستعمال:
\`\`\`php
use Illuminate\Support\Facades\Crypt;

// تشفير
$encrypted = Crypt::encryptString('Secret Message');

// فك التشفير
$decrypted = Crypt::decryptString($encrypted);
\`\`\`

لاراڤيل كيستعمل **AES-256-CBC**. كل القيم المشفرة موقعة (Signed) بـ MAC باش حتى حد ما يقدر يبدل فيها.

---

## 💡 الخلاصة
-   **Hashing:** لكلمات السر (ما يمكنش نرجعو للأصل).
-   **Encryption:** للبيانات الحساسة اللي كنحتاجو نقراوها من بعد.`,

    "basics.md": `# REST API

## 🔌 شنو هو REST API؟
API كتعني (Application Programming Interface). فاش كتصاوب **REST API**، نتا كتوفر البيانات (JSON) لتطبيقات أخرى (Mobile App, Frontend SPA like React/Vue) بلاصة ما تصيفط HTML.

---

## 🛠️ إنشاء API Controller
\`\`\`bash
php artisan make:controller Api/UserController --api
\`\`\`
الخيار \`--api\` كيحيد دوال \`create\` و \`edit\` اللي كنحتاجوهم غير فالـ Web (حيت API ما فيهش Forms HTML).

---

## 🚦 Defining API Routes
الـ Routes ديال API كيتعرفو فملف \`routes/api.php\` (فـ Laravel 10) أو كيتزادو يدويا فـ Laravel 11.
الفرق الأساسي هو انهم كياخدو Prefix \`/api\` وكيكون عندهم Middleware \`api\` (Throttle, JSON responses...).

\`\`\`php
Route::apiResource('users', UserController::class);
\`\`\`
الرابط غيولي: \`GET /api/users\`.

---

## 🗝️ API Authentication (Sanctum)
أحسن طريقة للـ Auth فالـ API هي **Laravel Sanctum**.

1.  **Install:** \`php artisan install:api\`
2.  **Login:**
    \`\`\`php
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
        
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
        
        $token = $user->createToken('my-app-token')->plainTextToken;
        
        return response()->json(['token' => $token]);
    }
    \`\`\`
3.  **Protect Routes:**
    \`\`\`php
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });
    \`\`\`

---

## 📦 API Resources (Transformation)
باش تتحكم فالسكل ديال JSON اللي خارج (مثلا تخبي \`password\`، تبدل \`created_at\` لـ timestamp)، استعمل **Resources**.

\`\`\`bash
php artisan make:resource UserResource
\`\`\`

\`\`\`php
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'full_name' => $this->first_name . ' ' . $this->last_name,
        'email' => $this->email,
        // 'password' => $this->password, // مخفية
    ];
}
\`\`\`

استعمالها فالـ Controller:
\`\`\`php
return new UserResource($user);
// أو
return UserResource::collection(User::all());
\`\`\`

---

## 💡 الخلاصة
بناء API فـ Laravel ساهل ومنظم بفضل Resources و Sanctum.`,

    "queues-jobs.md": `# الوظائف المتأخرة (Queues & Jobs)

## ⏳ علاش Queue؟
فاش تبغي دير مهمة كتاخد وقت طويل (مثلا: صيفط ايميل، دير Convert لفيديو، أو حسب Reports)، ماكاين لاش المستخدم يبقى يتسنى الصفحة تحمل.
رمي المهمة للـ **Queue** باش تدار فالخلفية (Background) والمستخدم يكمل خدمتو.

---

## 🏗️ إنشاء Job
\`\`\`bash
php artisan make:job SendEmail
\`\`\`

فـ \`handle()\`:
\`\`\`php
public function handle(): void
{
    Mail::to('user@example.com')->send(new WelcomeEmail());
}
\`\`\`

الاستعمال:
\`\`\`php
SendEmail::dispatch();
\`\`\`
هاد الأمر غييرجع فوراً (Instant Return)، والمهمة غتزاد لقائمة الانتظار.

---

## 🏃‍♂️ تشغيل Queue Worker
باش الـ Jobs يتخدمو، خاص شي واحد يبقا مراقب الصف (Queue).

\`\`\`bash
php artisan queue:work
\`\`\`
هاد الأمر غيبقى خدام وكيقرا الـ Jobs وحدة بوحدة وينفذهم.

---

## ⚙️ Queue Drivers
لاراڤيل كيدعم بزاف د Drivers:
1.  **Sync:** (Default) كينفذهم فديك اللحظة (بحال إلا ماكاينش queue)، مزيان للتجربة.
2.  **Database:** كيخزن Jobs فجدول \`jobs\`.
3.  **Redis:** (الأفضل للأداء) كيستعمل Redis لتخزين الـ Jobs.

بدل \`QUEUE_CONNECTION\` فملف \`.env\`.

---

## 💡 الخلاصة
Queues هي الحل باش السيت ديالك يبقى خفيف وسريع واخا يكون كيدير عمليات معقدة.`,

    "task-scheduling.md": `# الجدول الزمني (Scheduling)

## ⏰ شنو هو Task Scheduling؟
شحال هادي، كنتي كتضطر دير **Cron Entry** لكل مهمة بغيتي ديرها كل نهار (مثلا النسخ الاحتياطي).
فـ Laravel، كتعرف جدول واحد فملف \`routes/console.php\` (أو \`Kernel.php\` قديما).

---

## 🛠️ تعريف المهام
\`\`\`php
use Illuminate\Support\Facades\Schedule;
use App\Models\User;

Schedule::call(function () {
    User::where('last_login', '<', now()->subMonth())->delete();
})->daily();
\`\`\`

أو تعيط لـ Artisan Command:
\`\`\`php
Schedule::command('emails:send')->weekly();
\`\`\`

أو Queued Job:
\`\`\`php
Schedule::job(new Heartbeat)->everyFiveMinutes();
\`\`\`

---

## ⚙️ الترددات (Frequencies)
-   \`->everyMinute()\`
-   \`->everyHour()\`
-   \`->dailyAt('13:00')\`
-   \`->weeklyOn(1, '8:00')\`
-   \`->monthly()\`
-   \`->yearly()\`

---

## 🚀 تشغيل Scheduler
فالـ Server (Linux)، خاصك تزيد سطر واحد \`crontab -e\`:

\`\`\`bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
\`\`\`
Cron غيعيط لـ Laravel كل دقيقة، ولاراڤيل هو اللي غيشوف واش كاينا شي مهمة خاص تدار فديك الدقيقة.

---

## 💡 الخلاصة
Scheduling هي الطريقة المنظمة والقوية باش تجدولة المهام الأوتوماتيكية فالسيت ديالك.`,

    "events-listeners.md": `# الأحداث والمستمعون (Events & Listeners)

## 📡 شنو هما Events؟
فاش كيوقع شي حدث مهم فالتطبيق (مثلا: "تسجيل مستخدم جديد" \`UserRegistered\`)، خاصك تقول لـ Laravel: "اللي مهتم بهاد الحدث، يدير خدمتو".
هادشي كيتسمى **Event-Driven Programming**.

---

## 👂 Listener (المستمع)
هذا هو اللي كيدير الخدمة فاش كيوقع الحدث (مثلا: يصيفط Welcome Email).

---

## 🔁 الخطوات
1.  **Event:** \`php artisan make:event UserRegistered\`
2.  **Listener:** \`php artisan make:listener SendWelcomeEmail --event=UserRegistered\`

ملف \`SendWelcomeEmail.php\`:
\`\`\`php
public function handle(UserRegistered $event): void
{
    Mail::to($event->user->email)->send(new WelcomeEmail());
}
\`\`\`

3.  **Dispatch Event:** (إطلاق الحدث)
    فـ Controller:
    \`\`\`php
    use App\Events\UserRegistered;
    
    // ...
    UserRegistered::dispatch($user);
    \`\`\`

---

## ⚡ علاش Events؟
باش تخلي الكود ديالك معزول (Decoupled).
دابا "تسجيل المستخدم" ما عندوش علاقة بـ "إرسال الإيميل".
تقدر تزيد Listener آخر (مثلا: \`NotifyAdmins\`) بلا ما تقيس الـ Controller.

---

## 💡 Queued Listeners
Listener يقدر يكون طويل فالخدمة، إذن دير ليه \`implements ShouldQueue\` باش يمشي للـ Queue و ما يعطلش الطلب.
\`\`\`php
class SendWelcomeEmail implements ShouldQueue { ... }
\`\`\`
`,


    "docker-advanced.md": `# Docker Advanced

## 🐳 مقدمة (Intro)
شفنا كيفاش نخدمو بـ Laravel Sail وهذاك هو أسهل حل. ولكن باش تفهم "تحت الغطاء" كيفاش الأمور غادية، ومع الوقت غتحتاج دير Customization (تخصيص) للبيئة ديالك.
فـ Production، ما كنخدموش بـ Sail، كنستعملو Docker Compose بطريقة احترافية أكثر.

---

## 🏗️ المكونات الأساسية (Core Components)
أي تطبيق Laravel احترافي كيحتاج على الأقل 3 ديال Containers:
1.  **App Service:** فين كاين PHP Code ديالك.
2.  **Database Service:** (MySQL/PostgreSQL) فين مخبية الداتا.
3.  **Web Server:** (Nginx/Apache) باش يستقبل الطلبات ويصيفطهم لـ PHP.

فالدروس الجاية غنشرحو كل واحد بوحدو بالتفصيل.

---

## 📂 هيكلة الملفات (Folder Structure)
من الأحسن تنظم ملفات Docker ديالك هكا:
\`\`\`
project/
├── docker/
│   ├── php/
│   │   └── Dockerfile
│   ├── nginx/
│   │   └── default.conf
│   └── mysql/
│       └── my.cnf (optional)
├── docker-compose.yml
├── .env
└── src/ (Laravel Code)
\`\`\`
هاد التنظيم كيخلي المشروع نقي وسهل فالصيانة.`,

    "multi-container-setup.md": `# الإعداد متعدد الحاويات (Multi-Container Setup)

## 🏗️ 1. App Service (PHP)
أول حاجة، خاصنا كونتينر فين كاين الكود ديالنا.
غنديرو \`docker/php/Dockerfile\` بحال هكا:

\`\`\`dockerfile
# استعمل صورة PHP-FPM
FROM php:8.2-fpm

# ثبت الأدوات الأساسية (System Dependencies)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# ثبت PHP Extensions الضرورية لـ Laravel
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# جيب Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# حدد مجلد العمل (Working Directory)
WORKDIR /var/www
\`\`\`
هادي هي "القلب" د المشروع. هنا فين كيتنفذ كود PHP.

---

## 🏗️ 2. docker-compose.yml
دابا غنجمعو كلشي فمكان واحد:

\`\`\`yaml
version: '3.8'
services:
    # 🔹 PHP App Service
    app:
        build:
            context: .
            dockerfile: docker/php/Dockerfile
        image: laravel-app
        container_name: laravel-app
        restart: unless-stopped
        working_dir: /var/www
        volumes:
            - ./src:/var/www
            - ./docker/php/local.ini:/usr/local/etc/php/conf.d/local.ini
        networks:
            - laravel

    # 🔹 Web Server (Nginx)
    webserver:
        image: nginx:alpine
        container_name: laravel-webserver
        restart: unless-stopped
        ports:
            - "8080:80"
        volumes:
            - ./src:/var/www
            - ./docker/nginx/conf.d/:/etc/nginx/conf.d/
        depends_on:
            - app
        networks:
            - laravel

    # 🔹 Database (MySQL)
    db:
        image: mysql:8.0
        container_name: laravel-db
        restart: unless-stopped
        environment:
            MYSQL_DATABASE: \${DB_DATABASE}
            MYSQL_ROOT_PASSWORD: \${DB_PASSWORD}
            MYSQL_PASSWORD: \${DB_PASSWORD}
            MYSQL_USER: \${DB_USERNAME}
            SERVICE_TAGS: dev
            SERVICE_NAME: mysql
        volumes:
            - ./docker/mysql/db_data:/var/lib/mysql
        networks:
            - laravel

networks:
    laravel:
        driver: bridge
\`\`\`

---

## 💡 تعليقات مهمة
-   **Volumes:** كنربطو كود \`src\` المحلي بـ \`/var/www\` فالكونتينر باش التغييرات تبان ديريكت بدون rebuild.
-   **Networks:** كل الخدمات مربوطة بشبكة وحدة \`laravel\` باش يقدرو يهضرو مع بعضياتهم.
-   **Environment:** القيم بحال \`DB_PASSWORD\` كنجيبوهم من \`.env\`.`,

    "nginx-setup.md": `# إعداد Nginx (Nginx Setup)

## 🌐 شنو هو Nginx؟
PHP بوحدو ماقدرش يجاوب على طلبات HTTP اللي جاية من المتصفح (Browser).
خاصو خادم ويب (Web Server) بحال Nginx أو Apache.
Nginx هو الأكثر شهرة وسرعة لتطبيقات Laravel.

---

## 🛠️ ملف التكوين (Configuration)
غتحتاج ملف \`docker/nginx/conf.d/defaul.conf\`:

\`\`\`nginx
server {
    listen 80;
    index index.php index.html;
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
    root /var/www/public;

    # توجيه كلشي لـ index.php
    location / {
        try_files $uri $uri/ /index.php?$query_string;
        gzip_static on;
    }

    # معالجة ملفات PHP
    location ~ \.php$ {
        # توجيه الطلبات لـ PHP-FPM Service (app:9000)
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
\`\`\`

---

## 💡 شرح الكود
-   **listen 80:** كيستمع للمنفذ 80 (داخل الكونتينر).
-   **root /var/www/public:** نقطة البداية هي مجلد \`public\` ديال Laravel.
-   **fastcgi_pass app:9000:** هنا السر! Nginx كيقول لـ PHP-FPM (اللي سميناه \`app\` فـ docker-compose): "هاك عالج هاد الملف ورجع ليا النتيجة".

بهاد الطريقة، Nginx كيتكلف بالملفات الثابتة (images, css) وPHP كيتكلف بالديناميك.`,

    "database-container.md": `# قاعدة البيانات (Database Container)

## 🗄️ كونتينر MySQL/PostgreSQL
بدل ما تثبت قاعدة البيانات فلابتوب ديالك (XAMPP/MAMP)، استعمل **Docker Image**.
هاد الطريقة نظيفة وكتقدر دير \`docker-compose down\` بحال كأنك مسحتي كلشي من الزيرو.

---

## 🏗️ إعداد MySQL فـ Docker Compose
فملف \`Dockerfile-Compose.yml\`:

\`\`\`yaml
    db:
        image: mysql:8.0
        container_name: mysql_db
        restart: unless-stopped
        environment:
            MYSQL_DATABASE: laravel_db
            MYSQL_ROOT_PASSWORD: root_password
            MYSQL_PASSWORD: user_password
            MYSQL_USER: myuser
        volumes:
            - ./db_data:/var/lib/mysql
        ports:
            - "3306:3306"
\`\`\`

---

## 💡 علاش Volumes؟
في قسم \`volumes\`، ربطنا مجلد \`./db_data\` بالمسار \`/var/lib/mysql\`.
هادشي **ضروري**! إذا ما درتيهش، فكل مرة تطفي الكونتينر، البيانات **غتمشي**.
بـ Volumes، البيانات كتخزن فجهازك المحلي (Host Machine) وكتبقى محفوظة.

---

## 🛠️ إدارة قاعدة البيانات
باش تدخل وسط MySQL وتشوف الجداول، بلا ما تشارجي PHPMyAdmin:

\`\`\`bash
docker exec -it mysql_db mysql -u myuser -p
\`\`\`
دخل الباسوورد ودير \`SHOW TABLES;\`.

أو نزل **TablePlus** أو **DBeaver** وكونيكتيه بـ \`127.0.0.1:3306\`.`,

    "redis-container.md": `# كونتينر ريديس (Redis Container)

## 📡 شنو هو Redis؟
**Redis** هي قاعدة بيانات Key-Value كتخدم فالذاكرة (RAM)، يعني **سرييعة بزاف**!
فـ Laravel، كنخدموها لـ:
1.  **Cache:** تخزين نتائج الاستعلامات الثقيلة.
2.  **Session:** تخزين Sessions المستخدمين.
3.  **Queues:** إدارة الطوابير (Jobs).

---

## 🛠️ كيفاش نزيدوه فـ Docker؟
فملف \`docker-compose.yml\`:
\`\`\`yaml
    redis:
        image: 'redis:alpine'
        ports:
            - '\${FORWARD_REDIS_PORT:-6379}:6379'
        volumes:
            - 'redis:/data'
        networks:
            - sail
        healthcheck:
            test:
                - CMD
                - redis-cli
                - ping
            retries: 3
            timeout: 5s
\`\`\`

---

## 📂 إعداد Laravel
باش تستعمل Redis فـ Laravel، زيد أو بدل هاد القيم فـ \`.env\`:

\`\`\`env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
\`\`\`

💡 لاحظ المضيف "REDIS_HOST" سميناه \`redis\`، حيت هكا سمينا الخدمة فـ \`docker-compose\`.
Docker كيعرف الاسم وكيبدله بـ IP Address داخلياً.

---

## 🧪 التجربة
باش تجرب، دخل فـ \`Tinker\`:
\`\`\`bash
./vendor/bin/sail tinker
> Cache::put('test', 'Hello Redis', 600);
> Cache::get('test');
// Output: "Hello Redis"
\`\`\`
إيلا طلع ليك "Hello Redis"، راك ناضي! Docker و Redis خدامين.`,

    "production-docker.md": `# دوكر فالإنتاج (Production Docker)

## 🐳 الفرق بين Local و Production
فالعمل المحلي (Development)، كنخدمو Docker-Compose باش نشوفو التغييرات بسرعة (\`volumes\`).
ولكن فـ الإنتاج (Production)، خاصنا **الأمان والسرعة**.

---

## 🔒 1. الأمان
-   ما تستغملش \`root user\` كـ مستخدم PHP داخل الكونتينر.
-   نقص الصور د Docker (Multistage Builds) باش يكونو خفاف.
-   ما تشاركش \`.env\` أو مفاتيح سرية (Secrets) فـ GitHub، استعمل \`Docker Swarm\` أو \`Kubernetes Secrets\`.

---

## 📦 2. Multi-stage Builds (\`Dockerfile.prod\`)
عوض ما نحطو Composer و Git فالصورة النهائية، كنبنيو مراحل:

\`\`\`dockerfile
# المرحلة 1: تثبيت Dependencies
FROM composer:2 as vendor
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

# المرحلة 2: بناء الصورة النهائية (Final Image)
FROM php:8.2-fpm-alpine
WORKDIR /var/www

# نقل الكود بدون Git ومسائل زائدة
COPY . .
COPY --from=vendor /app/vendor /var/www/vendor

# الصلاحيات (Permissions)
RUN chown -R www-data:www-data /var/www/storage
\`\`\`

---

## 🚀 3. Orchestration
باش تدير Scalability (تزيد السيرفرات)، استعمل **Kubernetes (K8s)** أو **Docker Swarm**.
هاد الأدوات كتخولك تزيد كونتينرات PHP حسب الضغط (Auto-scaling).

---

## 💡 نصائح ذهبية
-   استعمل **Alpine Images** ديما حيت صغار بزاف.
-   استعمل **Nginx** كـ Proxy أمام التطبيق.
-   دير **Migrate** لقاعدة البيانات فمرحلة Deployment، ماشي فـ \`CMD\` ديال الكونتينر باش ما يتعاودش كل مرة.`,

    "design-patterns.md": `# أنماط التصميم (Design Patterns)

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

\`\`\`php
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
\`\`\`
فالـ Controller:
\`\`\`php
public function index(UserRepositoryInterface $users) {
    return $users->all();
}
\`\`\`
هادشي كيسهل التبديل (مثلا بغيتي تبدل من MySql لـ ElasticSearch) والـ Testing.

---

## 💉 3. Dependency Injection (DI)
لاراڤيل كيستعمل **Service Container** باش يعطيك (Inject) الكلاسات اللي محتاجهم بلا ما دير \`new Class()\`.
مثلا، باش تخدم بـ Request، ما كديرش \`new Request()\`. ولكن كطلبها فالـ Constructor أو Method:

\`\`\`php
public function store(Request $request) { ... }
\`\`\`
لاراڤيل هو اللي كيتكلف بإنشاء الـ Object.

---

## 🏭 4. Factory Pattern
خدمنا بـ \`User::factory()\` وهذا تطبيق للـ **Factory Method Pattern**. كيعطيك طريقة موحدة لإنشاء Objects معقدة.

---

## 💡 الخلاصة
فاش تفهم Design Patterns، غتلقى راسك كتفهم "علاش لاراڤيل مصمم هكاك".
بدا بـ MVC و DI، ومن بعد شوف Repository و Decorator و Observer.`,

    "dependency-injection.md": `# حقن التبعيات (Dependency Injection)

## 💉 شنو هو Dependency Injection؟
**Dependency Injection (DI)** هو مفهوم مهم فـ Laravel وفالبرمجة الحديثة.
ببساطة، بلاصت ما الكلاس ديالك (مثلا: \`TaskController\`) تصاوب الكلاسات اللي محتاجها (مثلا: \`EmailService\`)، كتطلبها من الخارج وهما اللي كيعطيوها ليك (Inject).

---

## 🏗️ علاش؟

### 1. Coupling (الترابط)
إلا درتي \`new EmailService()\` وسط الكود، غيولي مربوط بيها بقوة.
إلا بغيتي تبدل \`StoreService\` (مثلا: تبدل من Mailgun لـ SES)، خاصك تبدل فكل بلاصة.

### 2. Testing (الاختبار)
فاش كتجرب الكود، ما بغيتيش تصيفط إيميلات حقيقية.
إلا كنتي مستعمل DI، كتقدر تمرر (Pass) كائن وهمي (Mock Object).

---

## 🛠️ كيفاش كتعمل DI فـ Laravel؟
كتطلب الـ Type Hinting فالـ Constructor أو Method:

\`\`\`php
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
\`\`\`

---

## 📦 Binding Interfaces
بعض المرات، كتبغي تطلب \`Interface\` ماشي \`Concrete Class\` (مثلا \`CacheInterface\` ماشي \`RedisCache\`).
هنا كتلزمك تعرف الـ Binding فـ \`AppServiceProvider\`:

\`\`\`php
public function register(): void
{
    $this->app->bind(CacheInterface::class, RedisCache::class);
}
\`\`\`
فاش تطلب \`CacheInterface\`، لاراڤيل غيعطيك \`RedisCache\`.

---

## 💡 الخلاصة
DI هي القوة الخفية ديال لاراڤيل. هي اللي كتخليه مرن وسهل فالتوسيع والصيانة.`,

    "projects.md": `# أمثلة مشاريع (Project Examples)

## 🏗️ علاش هاد المشاريع؟
باش تعلم لاراڤيل مزيان، خاصك تطبق.
هاد القسم فيه أفكار وهياكل (Structure) ديال مشاريع تقدر تبدا بيها.
حاول تخدمهم وتزيد عليهم اللمسة ديالك.

---
## 🌟 المشاريع المقترحة
1.  **Blog System:** (سهل) للتدرب على CRUD, Auth, Eloquent.
2.  **Task Manager:** (متوسط) للتدرب على AJAX/Livewire, Policies.
3.  **REST API:** (متقدم) للتدرب على API Resources, Sanctum.
4.  **E-commerce:** (صعب) للتدرب على Cart, Stripe, Queues.

---

## 🚀 نصيحة
ما تحاولش دير كلشي دقة وحدة. بدا بـ Blog، وفاش تكملو، زيد عليه Features (مثلا: Comments, Tags).`,

    "blog-project.md": `# مشروع مدونة (Blog Project)

## 📌 الفكرة
بناء موقع مدونة بسيط يسمح للمستخدمين بقراءة المقالات، تسجيل الدخول لكتابة مقالاتهم، والتعليق.

---

## 🏗️ Models & Migrations
1.  **User:** (Email, Password, Name)
2.  **Post:** (Title, Slug, Body, Image, \`user_id\`, \`is_published\`)
3.  **Category:** (Name, Slug) - *Relationship: Post hasOne Category*
4.  **Comment:** (Body, \`user_id\`, \`post_id\`)

---

## 🛠️ المميزات المطلوبة
1.  **الصفحة الرئيسية:** تعرض آخر المقالات المنشورة (Pagination).
2.  **صفحة المقال:** تعرض التفاصيل + التعليقات.
3.  **Dashboard:**
    -   CRUD للمقالات (إضافة، تعديل، مسح).
    -   Upload للصورة (Storage).
    -   Soft Deletes (سلة المهملات).
4.  **Search:** البحث في المقالات.

---

## 🎓 مهارات مكتسبة
-   CRUD Operations & Resource Controllers.
-   Relationships (One-to-Many).
-   File Upload & Storage.
-   Validation & Form Requests.
-   Middlewares (Admin vs User).`,

    "task-manager-project.md": `# مشروع إدارة المهام (Task Manager Application)

## 📌 الفكرة
بناء تطبيق لإدارة المهام وتتبع الإنجاز (Done/Pending) مع تصنيفات المشاريع.

---

## 🏗️ Models
1.  **User:** (Email, Password)
2.  **Project:** (Name, Description, Color) - *Relationship: User hasMany Projects*
3.  **Task:** (Title, Description, Status, DueDate) - *Relationship: Project hasMany Tasks*

---

## 🛠️ المميزات المطلوبة
1.  **Sidebar:** قائمة المشاريع.
2.  **Tasks Board:** عرض قائمة المهام مع Checkbox.
3.  **AJAX:** فاش تكليكي على Checkbox، الحالة تبدل بلا Refresh (استعمل AJAX أو Livewire).
4.  **Date Filtering:** "مهام اليوم"، "مهام الأسبوع".

---

## 🎓 مهارات مكتسبة
-   Many-to-Many Relationships (Tags).
-   Query Constraints (Scopes).
-   Model Observers & Events.
-   AJAX Handling (Axios & Fetch API).
-   Queues (Send reminder emails).`,

    "rest-api-project.md": `# مشروع REST API

## 📌 الفكرة
بناء واجهة برمجية لمتجر إلكتروني بسيط (Products, Categories, Orders) يمكن استهلاكها من طرف Mobile App أو SPA.

---

## 🏗️ Models & Resources
1.  **Product:** (Name, Price, SKU, \`category_id\`)
2.  **Category:** (Name, Parent)
3.  **Order:** (Total, Status, \`user_id\`)
4.  **OrderItems:** (\`product_id\`, \`quantity\`, \`price\`)

---

## 🛠️ المميزات المطلوبة
1.  **API Routes:**
    -   \`GET /api/products\` (List with Filters).
    -   \`GET /api/products/{id}\`.
    -   \`POST /api/orders\` (Auth Required).
    -   \`GET /api/orders\` (User History).

2.  **Sanctum Auth:** تأمين Endpoints.
3.  **JSON Structure:** استعمال API Resources لتوحيد الاستجابة.

---

## 🎓 مهارات مكتسبة
-   API Controllers & Routing.
-   Authentication (Sanctum Tokens).
-   API Resources & Collections.
-   Validation (FormRequest).
-   Rate Limiting (Throttle Middleware).`,

    "fullstack-project.md": `# مشروع متكامل (Fullstack E-commerce)

## 📌 الفكرة
تدمج **Livewire 3** مع لاراڤيل لبناء متجر متكامل بدون إعادة تحميل الصفحة (SPA-like).

---

## 🏗️ Models
1.  **Product:** (Name, Price, Inventory, Category)
2.  **CartItem:** (Session/User, Product, Quantity)
3.  **Order:** (Address, Total, PaymentStatus, \`stripe_id\`)

---

## 🛠️ المميزات المطلوبة
1.  **الصفحة الرئيسية:** قائمة المنتجات مع زر "إضافة للسلة".
2.  **Product Cart:** سلة في الجانب (Slide-over) تعرض المنتجات ومجموع الثمن (Real-time).
3.  **Checkout:** صفحة الدفع (Stripe/Paypal Integration).
4.  **Admin Panel:** لوحة تحكم بسيطة (FilamentPHP هو الخيار الأفضل ولكن جرب بنفسك أولا).

---

## 🎓 مهارات مكتسبة
-   Livewire Components & State Management.
-   Service Layer (Payment Gateways).
-   Events & Listeners (Order Placed -> Email).
-   Queued Jobs (Email processing).
-   Caching (Redis for product list).`,

    "conclusion.md": `# ختاما (Conclusion) 🏁

## 🔗 روابط مهمة (Useful Links)
- **Github Profile:** [mohamedredachakir](https://github.com/mohamedredachakir)
- **LinkedIn:** [Mohamed Reda Chakir](https://www.linkedin.com/in/mohamed-reda-chakir-7339b135a/)

---

## 📚 مصادر للتعمق (More Resources)
باش تزيد تتعلم كتر، كننصحك بهاد المصادر الرسمية:
- **Laravel Official Docs:** [laravel.com/docs](https://laravel.com/docs)
- **Laracasts (Video Tutorials):** [laracasts.com](https://laracasts.com)
- **Laravel News:** [laravel-news.com](https://laravel-news.com)
`,

    "00-setup.md": `# دليل إنشاء مشروع LocalMind

## 🎯 الهدف
فهاد الدليل، غنشوفو كيفاش نصاوبو مشروع **LocalMind** من الصفر.
هاد المشروع هو عبارة عن "StackOverflow مبسط" كيركز على الأسئلة المحلية (Local Questions).
الناس كيسولو أسئلة، وكيتسناو أجوبة، مع إمكانية "الإعجاب" (Favorites).

المشروع الأصلي كاين هنا للمرجع: [LocalMind Repo](https://github.com/mohamedredachakir/LocalMind).

---

## 🛠️ المتطلبات
قبل ما نبداو، تأكد بلي عندك:
-   PHP 8.2+
-   Composer
-   Docker (أو MySQL/XAMPP)

---

## 🚀 1. إنشاء المشروع
غنبداو بإنشاء مشروع Laravel جديد:

\`\`\`bash
composer create-project laravel/laravel localmind
cd localmind
\`\`\`

### إعداد قاعدة البيانات
سير لملف \`.env\` وقاد معلومات قاعدة البيانات:
\`\`\`env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=localmind
DB_USERNAME=root
DB_PASSWORD=
\`\`\`
دير Create لـ Database جديد سميتو \`localmind\` (إلا خدمتي بـ Docker راه غيتصاوب بوحدو).

---

## 🐳 (اختياري) Docker Setup
المشروع الأصلي كيخدم بـ Docker. إلا بغيتي دير نفس الشيء، خاصك تزيد \`docker-compose.yml\` و \`nginx.conf\` (مشروحين فقسم Docker).
ولكن للتبسيط، دابا غنخدمو بـ \`php artisan serve\`.`,

    "01-database.md": `# قاعدة البيانات (Database Schema)

## 🗄️ تصميم الجداول
مشروع **LocalMind** بسيط وفعال، فيه 4 جداول أساسية:

### 1. **Users** (المستخدمين)
الجدول الأساسي باش المستخدم يسجل الدخول.
غيكون عندو \`role\` باش نفرقو بين Admin و User (اختياري).
\`\`\`php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('password');
    $table->enum('role', ['admin', 'user'])->default('user');
    $table->rememberToken();
    $table->timestamps();
});
\`\`\`

### 2. **Questions** (الأسئلة)
كل سؤال كيحتاج لعنوان، محتوى، والمدينة (Location).
\`\`\`php
Schema::create('questions', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('title');
    $table->text('content');
    $table->string('location')->nullable();
    $table->timestamps();
});
\`\`\`

### 3. **Responses** (الأجوبة)
المستخدمين كيجابو على أسئلة بعضياتهم.
\`\`\`php
Schema::create('responses', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('question_id')->constrained()->onDelete('cascade');
    $table->text('content');
    $table->timestamps();
});
\`\`\`

### 4. **Favorites** (المفضلة)
جدول "Pivot" باش المستخدم يسجل سؤال عجبو.
\`\`\`php
Schema::create('favorites', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->foreignId('question_id')->constrained()->onDelete('cascade');
    $table->timestamps();
    
    // المستخدم يقدر يفضل السؤال مرة وحدة فقط
    $table->unique(['user_id', 'question_id']);
});
\`\`\`

---

## 🏃 تنفيد Migrations
بعدما تقاد ملفات Migration فـ \`database/migrations\` (باستعمال \`php artisan make:migration create_xxx_table\`)، دير:
\`\`\`bash
php artisan migrate
\`\`\`
مبروك! قاعدة البيانات واجدة.`,

    "02-authentication.md": `# نظام تسجيل الدخول (Simple Database Auth)

## 🔑 Authentication
مشروع LocalMind كيستعمل **Manual Auth** (ماشي Breeze/Jetstream)، يعني المطور كتب Controller بيدي (Custom Auth) باش يتحكم فكلشي.

### 1. **User Model**
تأكد بلي الـ User Model (\`app/Models/User.php\`) فيه \`fillable\` صحيح:
\`\`\`php
protected $fillable = [
    'name',
    'email',
    'password',
    'role', // باش نحددو Admin
];
\`\`\`

### 2. **Auth Controller**
غتصاوب \`AuthController.php\` باش يتكلف بـ Login و Register.
\`\`\`php
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
\`\`\`

### 3. **Routes**
فـ \`routes/web.php\`، عرف المسارات:
\`\`\`php
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
\`\`\`

---

## 🎯 علاش Manual Auth؟
باش تفهم كيفاش \`Auth::attempt()\` و \`Auth::login()\` كيتعاملو مع \`Sessions\` و \`Remember Token\`.
هادشي كيعطيك تحكم كامل فالـ Flow (مثلا تزيد \`role\` check وسط Login).`,

    "03-questions-crud.md": `# إدارة الأسئلة (Questions CRUD)

## 📌 الفكرة (Concept)
اللب ديال المشروع هو "الأسئلة".
المستخدم كيطرح سؤال، كيحدد العنوان، المحتوى، والمكان (Location).
الأسئلة غتبان فصفحة \`index\`، والناس يقدرو يجاوبو عليها.

---

## 🛠️ Question Controller
غتصاوب \`QuestionController.php\` باش يدير CRUD:

### 1. **عرض الأسئلة (Index)**
خاصنا نفرزو الأسئلة حسب **التاريخ** وحسب **المكان** (Search by location).
\`\`\`php
public function index(Request $request)
{
    $query = Question::with('responses'); // Eager Loading

    if ($request->has('location')) {
        $query->where('location', 'like', '%' . $request->location . '%');
    }

    $questions = $query->latest()->get(); // جيب كلشي

    return view('questions.index', compact('questions'));
}
\`\`\`

### 2. **إضافة سؤال (Store)**
خاص المستخدم يحدد \`title\`, \`content\`, و \`location\`.
\`\`\`php
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
\`\`\`

### 3. **عرض سؤال واحد (Show)**
باش نشوفو الردود (Responses) ديال السؤال.
\`\`\`php
public function show(Question $question)
{
    // Eager Load responses with their author (User)
    $question->load('responses.user');
    
    return view('questions.show', compact('question'));
}
\`\`\`

### 4. **Edit & Delete (تعديل وحذف)**
خاص فقط مول السؤال (أو Admin) اللي يقدر يعدل أو يحذف.
\`\`\`php
public function destroy(Question $question)
{
    // Authorization Check (Policy)
    if (auth()->id() !== $question->user_id) {
        abort(403);
    }

    $question->delete();

    return redirect()->route('questions.index')->with('success', 'تم حذف السؤال.');
}
\`\`\`

---

## 🎨 Views (Blade)
فملف \`resources/views/questions/show.blade.php\`:
\`\`\`blade
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
\`\`\`
هادشي هو الأساس، ومن بعد كتزيد التزواق بـ CSS.`,

    "04-interaction.md": `# الردود والمفضلات (Interaction)

## 💬 الردود (Responses)
مشروع LocalMind كيقدم نظام ردود بسيط.
كل سؤال (\`Question\`) عندو بزاف ديال \`Responses\`.

### 1. **Model Relations**
فـ \`Question.php\`:
\`\`\`php
public function responses() {
    return $this->hasMany(Response::class);
}
\`\`\`

فـ \`Response.php\`:
\`\`\`php
public function question() {
    return $this->belongsTo(Question::class);
}
public function user() {
    return $this->belongsTo(User::class);
}
\`\`\`

### 2. **Controller Logic**
فـ \`ResponseController\`:
\`\`\`php
public function store(Request $request, Question $question) {
    $request->validate(['content' => 'required']);
    
    $question->responses()->create([
        'content' => $request->content,
        // user_id automically added if defining \`user()\` relation or manually:
        'user_id' => auth()->id(),
    ]);
    
    return back(); // رجع لنفس الصفحة
}
\`\`\`

---

## ⭐ المفضلة (Favorites)
بغيتي المستخدم يقدر يحفظ السؤال فـ "Favorites".

### 1. **Add Favorite**
فـ \`FavoriteController\`:
\`\`\`php
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
\`\`\`
*ملاحظة: هنا كنستعملو علاقة \`BelongsToMany\` (Many-to-Many) بين User و Question عبر جدول \`favorites\`.*

### 2. **عرض زر المفضلة**
فـ Blade (\`questions.show\`):
\`\`\`blade
<form action="{{ route('questions.favorite', $question) }}" method="POST">
    @csrf
    <button type="submit">
        {{ auth()->user()->hasFavorited($question) ? 'Remove Favorite' : 'Add Favorite' }}
    </button>
</form>
\`\`\`
*خاصك تزيد \`hasFavorited\` method فـ User Model.*

---

## 🔒 حماية المسارات (Route Protection)
ما تنساش تحمي الروابط فـ \`web.php\`:
\`\`\`php
Route::middleware('auth')->group(function () {
    Route::post('/questions', [QuestionController::class, 'store']);
    Route::post('/questions/{question}/responses', [ResponseController::class, 'store']);
    Route::post('/questions/{question}/favorite', [FavoriteController::class, 'toggle']);
});
\`\`\`
هادشي كيضمن بلي غير الناس المسجلين هما اللي يقدرو يشاركو.`,

    "concepts-qa.md": `# مفاهيم وأسئلة مهمة (Key Laravel Concepts & Q&A)

## 📌 علاش هاد الفصل؟
هاد الفصل كيجاوب على أهم الأسئلة والمفاهيم اللي غتحتاجها باش تفهم وتخدم بـ Laravel مزيان. هو بحال Summary (ملخص) سريع للمفاهيم الأساسية، من البنية (Structure) حتى لقواعد البيانات (Database).

---

## 🏗️ البنية والأساسيات (Architecture & Basics)

### 1. **شنو هو MVC؟**
**MVC** كتعني **Model-View-Controller**. هي طريقة تنظيم الكود باش تفرق المسؤوليات:
-   **Model:** كيمثل الداتا (Database) والبيزنس لوجيك (Business Logic).
-   **View:** هو الواجهة (Interface) اللي كيشوفها المستخدم (HTML/CSS).
-   **Controller:** هو الوسيط اللي كيربط بين Model و View (كيشد Request، كيجيب data، وكيسيفطها للـ View).

### 2. **كيفاش كتمشي الـ Request فـ Laravel؟ (Lifecycle)**
الـ Request كدور فهاد المراحل:
1.  **Start:** المستخدم كيدخل URL وتوصل للـ \`public/index.php\`.
2.  **Kernel:** كدوز للـ HTTP Kernel (اللي كيفلترها بـ Middleware).
3.  **Service Providers:** كتشارجي الخدمات الأساسية (DB, Auth...).
4.  **Routing:** الـ Router كيشوف واش كاين Route مطابق.
5.  **Middleware:** كدوز على أي Middleware إضافي (بحال Auth).
6.  **Controller:** كتوصل للكونترولر باش يتعالج الطلب.
7.  **Response:** الكونترولر كيرد View أو JSON، وكيرجع للمستخدم.

### 3. **شنو هو \`public/index.php\`؟**
هو "باب الدار" (Entry Point) ديال أي تطبيق Laravel. أي Request كتجي للسيرفر كدوز منو، وهو اللي كيبدا يشارجي الـ Framework.

### 4. **شنو هو Artisan؟**
هو الـ CLI (Command Line Interface) ديال Laravel.
كتستعملو باش دير بزاف د المهام بسرعة، بحال: \`php artisan make:controller\`، \`php artisan migrate\`، \`php artisan list\`.

---

## 🛣️ التوجيه والتحكم (Routing & Controllers)

### 5. **شنو هو Route؟**
الـ Route هو الرابط بين الـ URL والـ Code اللي غيخدم. كتعرف الـ Routes ديالك فملف \`routes/web.php\`.

### 6. **كيفاش تعرف Basic GET Route؟**
\`\`\`php
Route::get('/hello', function () {
    return 'Hello World!';
});
\`\`\`

### 7. **كيفاش دوز Parameters فالـ Route؟**
كتحددها بين \`{}\`:
\`\`\`php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
\`\`\`

### 8. **شنو هو Named Route وعلاش كنستعملوه؟**
كنسميو الـ Route باش نقدرو نعيطو ليه فالكود بلا ما نكتبو الـ URL كامل (باش إلى تبدل الـ URL ميبقاش عندنا مشكل).
\`\`\`php
Route::get('/profile', [UserController::class, 'show'])->name('profile');
// Usage: route('profile')
\`\`\`

### 9. **كيفاش تكريي Controller؟**
\`\`\`bash
php artisan make:controller UserController
\`\`\`

### 10. **كيفاش تستقبل Data فالكونترولر؟**
كتستعمل \`Request\` object (Dependency Injection):
\`\`\`php
public function store(Request $request)
{
    $name = $request->input('name');
}
\`\`\`

### 11. **كيفاش دير Validation؟**
\`\`\`php
$validated = $request->validate([
    'title' => 'required|max:255',
    'body' => 'required',
]);
\`\`\`

### 12. **شنو هو FormRequest؟**
هو كلاس خاص بالـ Validation باش تخلي الكونترولر نقي.
\`\`\`bash
php artisan make:request StorePostRequest
\`\`\`
فالكونترولر كتعوض \`Request\` بـ \`StorePostRequest\`.

---

## 🛡️ الـ Middleware

### 13. **شنو هو Middleware؟**
هو بحال "باراج" (Checkpoint) كيدوز منو الـ Request قبل ما يوصل للكونترولر (أو بعد ما يخرج).
مثال: التحقق واش المستخدم مسجل الدخول (\`auth\`).

### 14. **كيفاش تكريي Middleware؟**
\`\`\`bash
php artisan make:middleware CheckRole
\`\`\`

### 15. **كيفاش تزيد Middleware فالـ Route؟**
\`\`\`php
Route::get('/admin', ...)->middleware('auth');
\`\`\`

---

## 🎨 الواجهة (Blade Frontend)

### 16. **شنو هو Blade؟**
هو Template Engine ديال Laravel. الملفات كتكون بـ \`.blade.php\`.

### 17. **كيفاش تسيفط Data للـ View؟**
\`\`\`php
return view('welcome', ['name' => 'John']);
\`\`\`

### 18. **كيفاش تخدم Layout (Master Page)؟**
كتستعمل \`@extends('layouts.app')\` و \`@section('content')\` باش تحط المحتوى ديالك وسط الـ Layout.

### 19. **Loop & Conditions فـ Blade**
\`\`\`blade
@if($users->count() > 0)
    @foreach($users as $user)
        <p>{{ $user->name }}</p>
    @endforeach
@else
    <p>No users found.</p>
@endif
\`\`\`

### 20. **عرض المتغيرات (Displaying Variables)**
\`{{ $variable }}\`: كتحميك من XSS (كتدير escape للـ HTML).
\`{!! $variable !!}\`: كتعرض الـ HTML كيفما هو (خطير إذا مكناش واثقين من المصدر).

---

## 🗄️ قاعدة البيانات (Database & Eloquent)

### 21. **شنو هي Migration؟**
هي ملفات باش تكريي وتعدل جداول قاعدة البيانات (Database Schema) بالكود، بلا SQL manual.
\`\`\`bash
php artisan make:migration create_users_table
php artisan migrate  // لتطبيق التغييرات
php artisan migrate:rollback // للتراجع
\`\`\`

### 22. **شنو هو Eloquent ORM؟**
طريقة باش تتعامل مع قاعدة البيانات باستعمال **Classes** (Models) بلاصة SQL.
مثلا: \`User::all()\` كتجيب ليك جميع المستخدمين.

### 23. **كيفاش تكريي Model؟**
\`\`\`bash
php artisan make:model Product
\`\`\`

### 24. **العلاقات (Relationships)**
-   **One to One:** \`return $this->hasOne(Phone::class);\`
-   **One to Many:** \`return $this->hasMany(Comment::class);\`
-   **Belongs To:** \`return $this->belongsTo(User::class);\`

### 25. **Eager Loading (تجنب N+1 Problem)**
باش تجيب علاقات دقة وحدة ومتبقاش دير Query فكل Loop:
\`\`\`php
$users = User::with('posts')->get();
\`\`\`

### 26. **Query Builder**
طريقة أخرى للتعامل مع الداتا بلا Models:
\`\`\`php
DB::table('users')->where('active', 1)->get();
\`\`\`

### 27. **Factory & Seeder**
-   **Factory:** كتولد داتا وهمية للتجربة.
-   **Seeder:** كتعمر قاعدة البيانات بهاد الداتا.
\`\`\`bash
php artisan db:seed
\`\`\`

### 28. **CRUD Operations بـ Eloquent**
-   **Insert:**
    \`\`\`php
    User::create(['name' => 'Ali', 'email' => 'ali@test.com']);
    \`\`\`
-   **Update:**
    \`\`\`php
    $user->update(['name' => 'New Name']);
    \`\`\`
-   **Delete:**
    \`\`\`php
    $user->delete();
    \`\`\`

---

## 🔒 الأمان والمصادقة (Security & Auth)

### 29. **شنو هو \`.env\`؟**
ملف فيه الإعدادات الحساسة (Environment Variables) بحال معلومات الاتصال بقاعدة البيانات، API Keys، و \`APP_KEY\`. **مخصوش يتبارطاجا!**.

### 30. **CSRF Protection**
حماية ضد هجمات Cross-Site Request Forgery. فكل Form خاصك تزيد \`@csrf\`.

### 31. **Resource Controller**
كونترولر فيه الدوال (Methods) كاملة ديال CRUD (\`index\`, \`create\`, \`store\`, \`show\`, \`edit\`, \`update\`, \`destroy\`).
\`\`\`bash
php artisan make:controller PhotoController --resource
\`\`\`

### 32. **التعامل مع Auth**
-   \`Auth::user()\`: كيعطيك المستخدم المسجل حاليا.
-   \`Auth::check()\`: كتقوليك واش المستخدم مسجل الدخول (True/False).
-   \`Auth::id()\`: كيعطيك الـ ID ديالو.

### 33. **Store vs Edit Method**
-   \`store()\`: كتستقبل الداتا من الفورم وكتسجلها فالقاعدة (POST).
-   \`edit()\`: كتعرض الفورم ديال التعديل مع الداتا القديمة (GET).

---

## 🛠️ أدوات مساعدة و Debugging

### 34. **شنو هو \`dd()\`؟**
هي اختصار لـ **Dump and Die**. أهم دالة غتحتاجها فـ Debugging. كتعرض ليك الداتا (Array, Object, Variable) وكتحبس تنفيذ الكود تم تم باش تشوف شنو واقع.
\`\`\`php
dd($users); // كتحبس هنا وكتوريك المتغير
\`\`\`

### 35. **كيفاش دير Redirect (توجيه)؟**
باش تصيفط المستخدم لصفحة أخرى (مثلا بعد ما يعمر فورم):
\`\`\`php
return redirect()->route('home');
// أو باش ترجعو للور اللور مع رسالة
return redirect()->back()->with('success', 'تمت العملية بنجاح!');
\`\`\`

### 36. **شنو هو \`asset()\`؟**
دالة كتعطيك الرابط الكامل (URL) للملفات اللي حاطها فمجلد \`public\` (بحال CSS, JS, Images).
\`\`\`html
<img src="{{ asset('images/logo.png') }}" alt="Logo">
\`\`\`

### 37. **شنو هي Helper Functions؟**
دوال "واجدة" كتعاونك فبزاف د الحوايج:
- \`url('/posts')\`: كتعطيك رابط كامل.
- \`auth()->user()\`: كتعطيك اللي مكونيكتي دابا.
- \`config('app.name')\`: كتجيب ليك إعدادات من ملفات config.

---

## 🧠 مفاهيم متقدمة مبسطة (Simplified Advanced Concepts)

### 38. **Collections: شنو الفرق بينها وبين Array؟**
الـ **Collection** هي Array "سوبر" (Super Array). فيها بزاف ديال الدوال (Methods) واجدة كتسهل عليك التلاعب بالداتا بلا ما دير Loops معقدة.
\`\`\`php
$prices = collect([10, 20, 30]);
$total = $prices->sum(); // 60
$filtered = $prices->filter(fn($p) => $p > 15); // [20, 30]
\`\`\`
نتائج Eloquent (قاعدة البيانات) غالبا كترجع على شكل Collection.

### 39. **Accessors & Mutators**
طريقة باش "تعدل" الداتا أوتوماتيكيا فالـ Model.
- **Accessor:** باش تموديفي الداتا وهي **خارجة** من القاعدة (مثلا: ديما الاسم يبان Majuscule).
- **Mutator:** باش تموديفي الداتا وهي **داخلة** للقاعدة (مثلا: تشفير الباسورد قبل Save).

### 40. **Soft Deletes (الحذف الناعم/المؤقت)**
باش متمسحش السطر بمرة من القاعدة (delete definitive)، غير "تخفيه". Laravel كيزيد تاريخ فـ \`deleted_at\`. الداتا كتبقى فالتيل ولكن مكتبانش فـ Eloquent Queries العادية.
خاصك تزيد \`use SoftDeletes;\` فالـ Model.

### 41. **Scopes (نطاقات البحث)**
باش تعاود تستعمل شرط (Query Logic) كي يتكرر بزاف.
مثلا، بلا ما دير \`where('active', 1)\` فكل بلاصة، كتعرف scope فالـ Model وكتعيط ليه:
\`\`\`php
User::active()->get();
\`\`\`

---

## 🔌 Web vs API

### 42. **شنو الفرق بين \`api.php\` و \`web.php\`؟**
- **web.php:** مديور للمتصفح (Browser). فيه **Session**، **Cookies**، و **CSRF Protection**.
- **api.php:** مديور للـ APIs (تطبيقات الموبايل أو React/Vue). **Stateless** (مفيهش Session)، وكيستعمل Tokens للمصادقة.

### 43. **كيفاش ترجع JSON Response؟**
فالـ API، مكتستعملش \`view()\`. كتستعمل:
\`\`\`php
return response()->json([
    'status' => 'success',
    'data' => $user 
]);
\`\`\`

### 44. **Storage: فين كنحطو الملفات؟**
الملفات اللي كيأبلوديها المستخدم (Uploads) كنحطوها فـ \`storage/app/public\`.
وباش تبان للناس (على برا)، خاصنا نديرو "رابط رمزي" (Symlink) لأمر:
\`\`\`bash
php artisan storage:link
\`\`\`
هادشي كيخلي \`public/storage\` يشير لـ \`storage/app/public\`.
`
    , "uml-guide.md": `# UML Diagrams & Design for Laravel 📐
## 1. علاش كنحتاجو UML؟ (Why UML?)
قبل ما تبدا تكودي، خاصك "Plan". الـ UML (Unified Modeling Language) هو اللغة باش كرسمو هاد البلان.
كيعاونك:
- **تحلل المشروع (Analysis):** باش تفهم "شنو خاص يدار" قبل "كيفاش يدار".
- **التواصل (Communication):** باش الفريق كامل (Designers, Developers) يطير فنفس النغمة.
- **التوثيق (Documentation):** كيبقى عندك "الدليل" ديال المشروع.

## 2. Use Case Diagram (مخطط حالات الاستخدام) 👤
هادا اول "Diagram" كنبداو بيه. كيوريك "شكون" غيستعمل السيستم و "شنو" يقدر يدير.
- **Components:**
  - **Actor (الممثل):** المستخدم (User)، الأدمين (Admin)، أو سيستم خارجي (بحال Payment Gateway).
  - **Use Case (الحالة):** دوارة فيها Action (مثلا: "تسجيل الدخول", "إضافة منتج").
  - **System Boundary:** مستطيل كيحصر السيستم ديالنا.

### العلاقات فـ Use Case:
- **Include:** شي حاجة **ضرورية** وتتكرر (مثلا: "تأكيد الطلب" خاص "Include" "تسجيل الدخول").
- **Extend:** شي حاجة **إضافية** واختيارية (مثلا: "الدفع عند الاستلام" extend "الدفع").

---

## 3. Class Diagram (مخطط الأصناف) 🏗️
هادا هو "القلب" ديال Laravel Models. كيورينا البنية (Structure) ديال الداتا والعلاقات بيناتها.

### المكونات:
- **Class:** مستطيل مقسم لـ 3:
  1.  **الاسم:** (User, Order).
  2.  **Attributes (الخصائص):** الحوايج اللي كتميز الكلاس (name: string, email: string). هادو كيتحولو لـ Columns فـ Database.
  3.  **Operations (العمليات):** شنو تقدر دير (login(), calculateTotal()). هادو كيتحولو لـ Methods فـ Controller/Model.

### أنواع العلاقات والتحويل لـ Laravel:
أهم حاجة هي الكارديناليتي (1..1, 1..*, *..*)، حيت هي اللي كتقرر العلاقات (hasOne, hasMany...).

#### A. Association (ارتباط عادي) - خط عادي 
علاقة عادية جوج حوايج مرتبطين.

#### B. Aggregation (تجميع) - لوزانج خاوي <>
علاقة "جزء من كل" (Whole-Part)، ولكن الجزء يقدر يعيش بلا الكل.
- **مثال:** القسم (Classroom) والتلميذ (Student). إلا سدينا القسم، التلميذ كيبقى تلميذ ويقدر يمشي لقسم آخر.

#### C. Composition (تركيب) - لوزانج عامر ♦️
علاقة قوية. الجزء ما يقدرش يعيش بلا الكل.
- **مثال:** الفاتورة (Invoice) والأسطر ديالها (InvoiceItems). إلا مسحنا الفاتورة، كيتمسحو الأسطر كاملين (Cascade Delete).

#### D. Generalization (Inheritance) - سهم مثلث 🔼
الوراثة. كلاس كتورث من كلاس أخرى.
- **مثال:** \`Admin\` و \`Customer\` بجوجهم \`User\`.

---

## 4. تطبيق عملي: من الرسم للكود (Diagram to Laravel) 🚀
كيفاش تحول هادشي لبروجي Laravel حقيقي؟

### الخطوة 1: Class -> Model & Migration
كل Class فـ Diagram كتعني Model جديد.
- **Diagram:** Class \`Product\` (name, price)
- **Terminal:**
  \`\`\`bash
  php artisan make:model Product -m
  \`\`\`
- **Migration:**
  \`\`\`php
  $table->string('name');
  $table->decimal('price', 8, 2);
  \`\`\`

### الخطوة 2: Relationships -> Eloquent Methods
كنشوفو الكارديناليتي (الأرقام اللي فالخط).

#### 1. One to One (1..1)
- **مثال:** User عندو Profile واحد.
- **في User Model:**
\`\`\`php
public function profile() {
    return $this->hasOne(Profile::class);
}
\`\`\`
- **في Profile Model:**
\`\`\`php
public function user() {
    return $this->belongsTo(User::class); // Foreign Key: user_id
}
\`\`\`

#### 2. One to Many (1..*)
- **مثال:** Category فيها بزاف Products.
- **في Category Model:**
\`\`\`php
public function products() {
    return $this->hasMany(Product::class);
}
\`\`\`
- **في Product Model:**
\`\`\`php
public function category() {
    return $this->belongsTo(Category::class); // Foreign Key: category_id
}
\`\`\`

#### 3. Many to Many (*..*)
- **مثال:** Student كيقرا فبزاف Courses، و Course فيه بزاف Students.
- **Migration:** خاصنا جدول ثالث وسيط (Pivot Table: \`course_student\`).
- **في Student Model:**
\`\`\`php
public function courses() {
    return $this->belongsToMany(Course::class);
}
\`\`\`
- **في Course Model:**
\`\`\`php
public function students() {
    return $this->belongsToMany(Student::class);
}
\`\`\`

---

## 5. أدوات مقترحة (Recommended Tools) 🛠️
باش ترسم وتجيب Diagrams:
1.  **StarUML:** بروفيشنال وكلاسيكي.
2.  **Draw.io:** ساهل، فابور، وكاين Web Version.
3.  **Laravel Schema Designer:** كترسم الجداول والعلاقات وهو كيعطيك Migrations واجدين! (نصحك بيه للبداية).
4.  **MySQL Workbench:** باش ترسم ERD (Entity Relationship Diagram) من Database واجدة (Reverse Engineering).
`
    ,
    "real-project-diagram.md": `# تطبيق عملي: مشروع أسئلة وأجوبة (Q&A App) 🎥

باش نفهمو مزيان، غناخدو المشروع اللي خدامين عليه: **Tadrajt-QA**.
الهدف: مستخدمين كيطرحو أسئلة، ومستخدمين آخرين كيجاوبو، وكاينة إمكانية "J'aime" (Favorites).

---

## 1. Class Diagram (Visual) 🎨
هاد الرسم كيوضح العلاقات بين الجداول ديالنا: \`User\`, \`Question\`, \`Response\`, \`Category\`.

<div class="mermaid">classDiagram
    class User {
        +int id
        +string name
        +string email
    }
    class Question {
        +int id
        +string title
        +text content
        +int user_id
        +int category_id
    }
    class Response {
        +int id
        +text content
        +int user_id
        +int question_id
    }
    class Category {
        +int id
        +string name
    }
    User "1" --> "*" Question : Has Many
    User "1" --> "*" Response : Has Many
    Category "1" --> "*" Question : Has Many
    Question "1" --> "*" Response : Has Many
    User "*" --> "*" Question : Favorites</div>

---

## 2. الترجمة لـ Laravel Models & Relationships 💻

### A. User Model
المستخدم يقدر يكتب بزاف الأسئلة وبزاف الأجوبة.
\`\`\`php
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
\`\`\`

### B. Question Model
السؤال تابع لمستخدم واحد، ومصنف فكاتيكوري وحدة، وعندو بزاف الأجوبة.
\`\`\`php
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
\`\`\`

### C. Response Model
الجواب تابع لسؤال واحد، وكاتبو مستخدم واحد.
\`\`\`php
class Response extends Model
{
    public function question() {
        return ->belongsTo(Question::class);
    }

    public function user() {
        return ->belongsTo(User::class);
    }
}
\`\`\`

---

## 3. كيفاش كنخدمو بهادشي فـ Controller؟ 🎮

### سيناريو 1: عرض سؤال مع الأجوبة ومولاها
بغيتي تجيب سؤال، شكون كتبو، وشنو الأجوبة اللي عليه (وشكون كتب كل جواب).

**Eager Loading (with):**
\`\`\`php
 = Question::with(['user', 'responses.user'])
                    ->find(1);
\`\`\`

**فـ Blade View:**
\`\`\`blade
<h1>{{ ->title }}</h1>
<p>Written by: {{ ->user->name }}</p>

<h2>Responses:</h2>
@foreach(->responses as )
    <div class="response">
        <p>{{ ->content }}</p>
        <small>By: {{ ->user->name }}</small>
    </div>
@endforeach
\`\`\`

### سيناريو 2: عرض الأسئلة المفضلة للمستخدم
\`\`\`php
 = Auth::user();
 = ->favorites; // كترجع Collection ديال الأسئلة
\`\`\`

---

## 4. نصيحة ذهبية 🌟
ديما رسم الـ Diagram فورقة وستيلو (أو فـ Mermaid) **قبل** ما تكتب سطر واحد ديال Code.
إلا عرفتي العلاقات (1..1, 1..*, *..*)، الكود ديال Laravel كيولي غير "ترجمة" حرفية للرسم ديالك.
`
};
