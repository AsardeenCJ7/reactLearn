import React, { useState } from "react";
import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";
import Course from "./Course";

function CourseList() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "HTML",
      image: image1,
      price: 199,
      hide: true,
    },
    {
      id: 2,
      name: "CSS",
      image: image2,
      price: 199,
      hide: true,
    },
    {
      id: 3,
      name: "JS",
      image: image3,
      price: 399,
      hide: true,
    },

    {
      id: 4,
      name: "React JS",
      image: image1,
      price: 599,
      hide: true,
    },
    {
      id: 5,
      name: "React JS",
      image: image1,
      price: 599,
      hide: true,
    },
  ]);

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses);
  }

  courses.sort((b, a) => a.price - b.price);
  courses.sort((a, b) => a.price - b.price);

  const courseList = courses.map((course, index) => (
    <Course
      //key={index} // It's a good idea to use a unique key prop
      key={course.id}
      name={course.name}
      image={course.image}
      hide={course.hide}
      price={course.price}
      id={course.id}
      delete={handleDelete}
    />
  ));

  return <>{courseList}</>;
}

export default CourseList;
