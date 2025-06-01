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
    <button>Book Now</button>
  `;

  // نضيف وظيفة للزر
  const button = div.querySelector("button");
  button.addEventListener("click", () => {
    const bookingData = {
      courseTitle: course.title,
      user: "Test User", // في المستقبل نربطه بنموذج
      date: new Date().toISOString()
    };

    fetch("http://localhost:3000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    })
      .then(response => response.json())
      .then(data => {
        alert("✅ Booking sent! Server says: " + data.message);
        console.log(data);
      })
      .catch(error => {
        alert("❌ Error sending booking.");
        console.error(error);
      });
  });

  courseList.appendChild(div);
});
