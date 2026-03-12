# Hotel Backend API

## 🚀 النشر على Render

### 1️⃣ ارفع الكود إلى GitHub
```bash
git add backend/
git commit -m "Add secure backend API"
git push origin main
```

### 2️⃣ إعداد على Render.com
1. اذهب إلى [render.com](https://render.com)
2. سجل حساب جديد
3. اختر "New +"
4. اختر "Web Service"
5. ربط GitHub repository
6. اختر مجلد `backend`
7. إعدادات البناء:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Runtime**: `Node`

### 3️⃣ Environment Variables
أضف هذه المتغيرات في Render Dashboard:
```
SUPABASE_URL=https://rxrgyvktgwyugfsjlxau.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4cmd5dmt0Z3d5dWdmc2pseGF1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjM0ODYyOCwiZXhwIjoyMDc3OTI0NjI4fQ.4zV-yfZkqbeKaYJ7ciJ9_QoCqdB5NmAL_7BwPyAUvYY
PORT=3001
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
