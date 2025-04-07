import { useEffect, useState } from "react";
export const useFetch = () => {
  const [dummy, setDummy] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    setTimeout(() => {
      //ananymous function in all codes
      fetch("http://localhost:3000/courses")
        .then((response) => {
          //customs error - made by me
          // Ithu Naan Ean poadurannu sonna itha hide pannina meaning illama oru error show aahum s i use this error handling
          if (!response.ok) {
            throw Error("Coundn't retrive data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setCourses(data);
          console.log("Image How to generate", data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 5000);
  }, []);

  return [courses, dummy, posts, error];
};
