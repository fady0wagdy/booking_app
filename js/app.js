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
    courseList.appendChild(div);
  });
  