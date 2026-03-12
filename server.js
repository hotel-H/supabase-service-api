require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase Client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Hotel Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// 👥 Staff Management Routes
app.post('/api/staff', async (req, res) => {
  try {
    console.log('👥 [API] طلب إضافة موظف جديد:', req.body.username);
    
    const { data, error } = await supabase
      .from('hotel_staff')
      .insert([{
        ...req.body,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('❌ [API] خطأ في إضافة الموظف:', error);
      return res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    }

    console.log('✅ [API] تم إضافة الموظف بنجاح:', req.body.username);
    res.json({ 
      success: true, 
      data: data[0] 
    });
    
  } catch (error) {
    console.error('❌ [API] خطأ في الخادم:', error);
    res.status(500).json({ 
      success: false, 
      error: 'خطأ في الخادم' 
    });
  }
});

// Get all staff
app.get('/api/staff', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('hotel_staff')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    }

    res.json({ 
      success: true, 
      data 
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'خطأ في الخادم' 
    });
  }
});

// Update staff
app.put('/api/staff/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('hotel_staff')
      .update({
        ...req.body,
        updated_at: new Date().toISOString()
      })
      .eq('id', req.params.id)
      .select();

    if (error) {
      return res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    }

    res.json({ 
      success: true, 
      data: data[0] 
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'خطأ في الخادم' 
    });
  }
});

// Delete staff
app.delete('/api/staff/:id', async (req, res) => {
  try {
    const { error } = await supabase
      .from('hotel_staff')
      .delete()
      .eq('id', req.params.id);

    if (error) {
      return res.status(400).json({ 
        success: false, 
        error: error.message 
      });
    }

    res.json({ 
      success: true 
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'خطأ في الخادم' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Hotel Backend API running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`👥 Staff API: http://localhost:${PORT}/api/staff`);
});

module.exports = app;
