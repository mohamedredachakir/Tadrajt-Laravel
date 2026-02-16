# مشروع إدارة المهام (Task Manager Application)

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
-   Queues (Send reminder emails).
