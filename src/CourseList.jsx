import image1 from "/assets/img1.jpg";
import image2 from "/assets/img2.jpg";
import image3 from "/assets/img3.jpg";
import gif from "/assets/load.gif";
import Course from "./Course";
import { useFetch } from "./useFetch";

function CourseList() {
  // here a list as useState working......
  // const [dummy, setDummy] = useState(true);
  // const [posts, setPosts] = useState([]);
  // const [error, setError] = useState(null);
  // const [courses, setCourses] = useState(null);

  // const { dummy, data, error, posts } = useFetch(
  //   "http://localhost:3000/courses"
  // ); // order illama {} ithukulla destructure pannalam
  const [courses, dummy, posts, error, setData] = useFetch(
    "http://localhost:3000/courses"
  );
  // This is also good
  // but oru list eduthukittomna kattayam return pannura same order la naanga atha destructuring saiyyanum
  // useFetch Return Order Mismatch
  // Error Will show same return order only destructure

  // const [courses, dummy, posts, error] = useFetch();

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
  // ]);

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

  // function handleDelete(id) {
  //   const newCourses = courses.filter((course) => course.id != id);
  //   setCourses(newCourses);
  // }  Courses Irukkum Poathu after fetch common Hooks it commented

  // Illanu sonna naama array destructuring saithu iruntha antha order la Example kku
  //  return [data, dummy, posts, error];
  //  const [courses, dummy, posts, error] = useFetch();   ippo data return pannurathu courses la assign aahi irukum

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id != id);
    setData(newCourses); //This is not proper way because this is common dataFetched

    // I'm facing an issue while fetching the course
    // list using the useFetch custom hook.
    // The handleDelete function doesn't work properly.
    // Can I use setData() to update the list after deletion?
    //  I'm concerned because setData() is part of the shared state inside useFetch, and using it might affect other components.
    // Should I instead create a separate useState for courses and setCourses in the CourseList component to handle deletion locally?

    // const [fetchedCourses, dummy, posts, error] = useFetch(...);
    // const [courses, setCourses] = useState(null);

    // useEffect(() => {
    //   if (fetchedCourses) {
    //     setCourses(fetchedCourses);
    //   }
    // }, [fetchedCourses]);

    // function handleDelete(id) {
    //   setCourses(courses.filter(course => course.id !== id));
    // }
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

  // Itha comment pannina map function data fetch pannittu vaarathuku muthal work aahina data ethuvumea show aaahathu
  // antha error ah handle panna intha if condition o=poattu irukkan
  if (!courses) {
    return (
      <>
        {!error && <img src={gif} />}
        {error && <p>{error}</p>}
      </>
    );
  }

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
