# إدارة الموارد (Assets Management)

## 📦 شنو هي Assets؟
الـ **Assets** هما الملفات الثابتة (Static Files) بحال CSS, JavaScript, الصور (Images), والـ Fonts.
ملي كتخدم بـ HTML الخام، هاد الملفات كنحطوها عادة فـ `public/`.
ولكن فـ Laravel الحديث، عندنا طرق قوية جداً لإدارتها: **Vite**.

---

## ⚡ 1. Vite (السرعة القصوى)
### شنو هو Vite؟
هو أداة Build Tool حديثة وسريعة بزاف (بديل لـ Webpack Mix).
Vite كيخدم بـ ES Modules فالـ Dev، وكيبني (Bundle) الملفات للـ Production.

### ملف الإعداد (vite.config.js)
هنا كتقول لـ Vite شنو خاصو يبني:

```javascript
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
```

⚠️ **مهم:** لاحظ أن الملفات الأصلية كنجيبوها من `resources/` ماشي `public/`.

---

## 🎨 2. CSS & Tailwind
إذا بغيتي تخدم بـ CSS عادي، حطو فـ `resources/css/app.css`.
ولكن Laravel كيجي غالبا مع **Tailwind CSS** مجهز.

### الاستعمال فالـ Blade
باش تودمج ملفات CSS و JS فالـ Layout ديالك، استعمل التوجيه `@vite`:

```html
<!DOCTYPE html>
<head>
    <!-- ... -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
```

فاش تكون `npm run dev` خدامة، هاد التوجيه كيحط Hot Module Replacement (HMR) يعني التغييرات كتبان فلحظتها بلا Refresh!
فاش تبني للـ Production (`npm run build`)، كيحط ليك ملفات `css` و `js` مضغوطة ومنظمة فـ `public/build/`.

---

## 🖼️ 3. الصور والملفات الأخرى
بالنسبة للصور (Images)، عندك جوج خيارات:
1.  **مباشرة فـ `public/`:** (مثلا `public/images/logo.png`)
    ```html
    <img src="{{ asset('images/logo.png') }}" alt="Logo">
    ```

2.  **فـ `resources/` (Processed via Vite):**
    إذا بغيتي Vite يعالج الصور (Optimisation, Versioning)، حطهم فـ `resources/images/`.
    ولكن الطريقة الأولى أسهل وأكثر شيوعاً للملفات الثابتة.

---

## 💡 الخلاصة
Vite كيجعل تجربة Front-end Development فـ Laravel ممتعة وسريعة جداً.
ما تنساش دائما تخدم `npm run dev` وأنت كتطور، و `npm run build` قبل ما ترفع السيت.
