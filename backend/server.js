const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// المسار إلى ملف الحجزات
const bookingsFile = path.join(__dirname, 'bookings.json');

// تأكد أن الملف موجود
if (!fs.existsSync(bookingsFile)) {
  fs.writeFileSync(bookingsFile, '[]');
}

// استقبال بيانات الحجز
app.post('/api/book', (req, res) => {
  const newBooking = req.body;
  console.log('✅ New Booking:', newBooking);

  // نقرأ الحجزات القديمة
  const bookings = JSON.parse(fs.readFileSync(bookingsFile, 'utf8'));
  bookings.push(newBooking);

  // نحفظها في الملف
  fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2));

  res.json({ message: 'Booking saved successfully!', data: newBooking });
});

// عرض كل الحجزات (اختياري)
app.get('/api/bookings', (req, res) => {
  const bookings = JSON.parse(fs.readFileSync(bookingsFile, 'utf8'));
  res.json(bookings);
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
