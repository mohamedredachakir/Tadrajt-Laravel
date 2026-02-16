# مشروع متكامل (Fullstack E-commerce)

## 📌 الفكرة
تدمج **Livewire 3** مع لاراڤيل لبناء متجر متكامل بدون إعادة تحميل الصفحة (SPA-like).

---

## 🏗️ Models
1.  **Product:** (Name, Price, Inventory, Category)
2.  **CartItem:** (Session/User, Product, Quantity)
3.  **Order:** (Address, Total, PaymentStatus, `stripe_id`)

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
-   Caching (Redis for product list).
