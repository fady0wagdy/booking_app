const courses = [
  {
    title: "Full Stack Web Development",
    instructor: "Ahmed Hassan",
    date: "2025-07-10",
    price: "$199"
  },
  {
    title: "Intro to Machine Learning",
    instructor: "Sara Mohamed",
    date: "2025-07-15",
    price: "$249"
  }
];

const courseList = document.getElementById("courseList");

courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "course-card";
  div.innerHTML = `
    <h3>${course.title}</h3>
    <p><strong>Instructor:</strong> ${course.instructor}</p>
    <p><strong>Date:</strong> ${course.date}</p>
    <p><strong>Price:</strong> ${course.price}</p>
    
    <form class="booking-form">
      <input type="text" placeholder="Your Name" name="name" required />
      <input type="email" placeholder="Your Email" name="email" required />
      <textarea placeholder="Your Message" name="message"></textarea>
      <button type="submit">Book Now</button>
    </form>
  `;

  const form = div.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ما نخليش الصفحة تعيد التحميل

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const bookingData = {
      courseTitle: course.title,
      name,
      email,
      message,
      date: new Date().toISOString()
    };

    fetch("http://localhost:3000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    })
      .then(res => res.json())
      .then(data => {
        alert("✅ Booking sent successfully!");
        console.log(data);
        form.reset(); // نفضي الفورم بعد الإرسال
      })
      .catch(err => {
        alert("❌ Failed to send booking.");
        console.error(err);
      });
  });

  courseList.appendChild(div);
});
