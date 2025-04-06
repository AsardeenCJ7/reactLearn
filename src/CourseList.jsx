import React, { useEffect, useState } from "react";
import image1 from "/assets/img1.jpg";
import image2 from "/assets/img2.jpg";
import image3 from "/assets/img3.jpg";
import Course from "./Course";

function CourseList() {
  // here a list as useState working......
  const [dummy, setDummy] = useState(true);
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([
    //   {
    //     id: 1,
    //     name: "HTML",
    //     image: image1,
    //     price: 199,
    //     hide: true,
    //   },
    //   {
    //     id: 2,
    //     name: "CSS",
    //     image: image2,
    //     price: 199,
    //     hide: true,
    //   },
    //   {
    //     id: 3,
    //     name: "JS",
    //     image: image3,
    //     price: 399,
    //     hide: true,
    //   },
    //   {
    //     id: 4,
    //     name: "React JS",
    //     image: image1,
    //     price: 599,
    //     hide: true,
    //   },
    //   {
    //     id: 5,
    //     name: "React JS",
    //     image: image1,
    //     price: 599,
    //     hide: true,
    //   },
    // ]);
  ]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("http://localhost:3000/courses")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data);
        console.log("Image How to generate", data);
      });
  }, []);

  // useEffect(() => {
  //   console.log("inside courseList useEffect");
  //   console.log(dummy);
  // }, [dummy, courses]);

  //[] empty dependencies - only first time render only enough

  /*
🧪 Different Ways to Use Dependencies
Code	Meaning
useEffect(() => {...})	Runs after every render (no dependency array).
useEffect(() => {...}, [])	Runs only once after first render (empty array).
useEffect(() => {...}, [count])	Runs on first render and when count changes.
*/

  // const [dummy, setDummy] = useState([
  //   {
  //     id: 1,
  //     name: "Asardeen",
  //   },
  //   {
  //     id: 2,
  //     name: "Ammar",
  //   },

  //   {
  //     id: 3,
  //     name: "Anshak",
  //   },
  // ]);

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id != id);
    setCourses(newCourses);
  
  }

  // courses.sort((b, a) => a.price - b.price);
  // courses.sort((a, b) => a.price - b.price);

  // const courseList = courses.map((course, index) => (
  //   <Course
  //     //key={index} // It's a good idea to use a unique key prop
  //     key={course.id}
  //     name={course.name}
  //     image={course.image}
  //     hide={course.hide}
  //     price={course.price}
  //     id={course.id}
  //     delete={handleDelete}
  //   />
  // ));

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

  return (
    <>
      {/* <div>
        <h2>Post List</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div> */}

      {/* this is I test API fetching,  Here posts is a state variable */}

      {courseList}
      {/* <button
        onClick={() => {
          // console.log("Dummy Button Clicked");
          setDummy(false);
        }}
      >
        Dummy
      </button> */}
    </>
  );
}

export default CourseList;

// npx json-server --watch data/dummyData.json --port 300 --static ./data
