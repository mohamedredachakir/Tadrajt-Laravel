# كونتينر ريديس (Redis Container)

## 📡 شنو هو Redis؟
**Redis** هي قاعدة بيانات Key-Value كتخدم فالذاكرة (RAM)، يعني **سرييعة بزاف**!
فـ Laravel، كنخدموها لـ:
1.  **Cache:** تخزين نتائج الاستعلامات الثقيلة.
2.  **Session:** تخزين Sessions المستخدمين.
3.  **Queues:** إدارة الطوابير (Jobs).

---

## 🛠️ كيفاش نزيدوه فـ Docker؟
فملف `docker-compose.yml`:
```yaml
    redis:
        image: 'redis:alpine'
        ports:
            - '${FORWARD_REDIS_PORT:-6379}:6379'
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
```

---

## 📂 إعداد Laravel
باش تستعمل Redis فـ Laravel، زيد أو بدل هاد القيم فـ `.env`:

```env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
REDIS_HOST=redis
REDIS_PASSWORD=null
REDIS_PORT=6379
```

💡 لاحظ المضيف "REDIS_HOST" سميناه `redis`، حيت هكا سمينا الخدمة فـ `docker-compose`.
Docker كيعرف الاسم وكيبدله بـ IP Address داخلياً.

---

## 🧪 التجربة
باش تجرب، دخل فـ `Tinker`:
```bash
./vendor/bin/sail tinker
> Cache::put('test', 'Hello Redis', 600);
> Cache::get('test');
// Output: "Hello Redis"
```
إيلا طلع ليك "Hello Redis"، راك ناضي! Docker و Redis خدامين.
