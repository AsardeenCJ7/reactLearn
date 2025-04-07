import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [dummy, setDummy] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  //   const [courses, setCourses] = useState(null);
  // Fetch oru custom Hooks aahna padiyal Corses nu particular name illama common name ah change pannurean
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    setTimeout(() => {
      //ananymous function in all codes
      //   fetch("http://localhost:3000/courses")
      fetch(url) // Ithu ella components kkum Use Panna Mudium Ovvoru Components Kodukkum pothuma API End Point Different Different Ah Kodukka Veandum
        .then((response) => {
          //customs error - made by me
          // Ithu Naan Ean poadurannu sonna itha hide pannina meaning illama oru error show aahum so i use this error handling
          if (!response.ok) {
            throw Error("Coundn't retrive data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          //   console.log("Image How to generate", data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 100);
  }, []);

  return [data, dummy, posts, error, setData];
};
