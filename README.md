# Hotel Backend API

## 🚀 النشر على Render

### 1️⃣ ارفع الكود إلى GitHub
```bash
git add backend/
git commit -m "Add secure backend API"
git push origin main
```



## 📊 API Endpoints

### Health Check
```
GET /api/health
```

### Staff Management
```
GET    /api/staff          - جلب كل الموظفين
POST   /api/staff          - إضافة موظف جديد
PUT    /api/staff/:id      - تحديث موظف
DELETE /api/staff/:id      - حذف موظف
```

## 🔐 الأمان
- ✅ المفاتيح في Environment Variables فقط
- ✅ لا توجد مفاتيح في GitHub
- ✅ CORS مُعد للـ Electron app
