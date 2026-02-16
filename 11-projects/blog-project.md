# مشروع مدونة (Blog Project)

## 📌 الفكرة
بناء موقع مدونة بسيط يسمح للمستخدمين بقراءة المقالات، تسجيل الدخول لكتابة مقالاتهم، والتعليق.

---

## 🏗️ Models & Migrations
1.  **User:** (Email, Password, Name)
2.  **Post:** (Title, Slug, Body, Image, `user_id`, `is_published`)
3.  **Category:** (Name, Slug) - *Relationship: Post hasOne Category*
4.  **Comment:** (Body, `user_id`, `post_id`)

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
-   Middlewares (Admin vs User).
