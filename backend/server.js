const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // يسمح للـ frontend يتواصل مع السيرفر
app.use(express.json()); // لتحليل البيانات المرسلة من الـ frontend بصيغة JSON

// نقطة استقبال بيانات الحجز
app.post('/api/book', (req, res) => {
  const bookingData = req.body;
  console.log('New Booking:', bookingData);

  // هنا ممكن تخزن الحجز في قاعدة بيانات، أو تبعته لإيميل، أو غيره
  res.json({ message: 'Booking received successfully!', data: bookingData });
});

// تشغيل السيرفر
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
