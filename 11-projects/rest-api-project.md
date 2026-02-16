# مشروع REST API

## 📌 الفكرة
بناء واجهة برمجية لمتجر إلكتروني بسيط (Products, Categories, Orders) يمكن استهلاكها من طرف Mobile App أو SPA.

---

## 🏗️ Models & Resources
1.  **Product:** (Name, Price, SKU, `category_id`)
2.  **Category:** (Name, Parent)
3.  **Order:** (Total, Status, `user_id`)
4.  **OrderItems:** (`product_id`, `quantity`, `price`)

---

## 🛠️ المميزات المطلوبة
1.  **API Routes:**
    -   `GET /api/products` (List with Filters).
    -   `GET /api/products/{id}`.
    -   `POST /api/orders` (Auth Required).
    -   `GET /api/orders` (User History).

2.  **Sanctum Auth:** تأمين Endpoints.
3.  **JSON Structure:** استعمال API Resources لتوحيد الاستجابة.

---

## 🎓 مهارات مكتسبة
-   API Controllers & Routing.
-   Authentication (Sanctum Tokens).
-   API Resources & Collections.
-   Validation (FormRequest).
-   Rate Limiting (Throttle Middleware).
