import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
// import Styles from "./Course.module.css";
import image1 from "/assets/img1.jpg";

// Component.defaultProps not supported
// function Course({
//   name = "Default Course",
//   price = "1 Like + 1 Subscribe",
//   image = image1,
// }) {
//   return (
//     // <div className="card">
//     <div className="card">
//       <img src={image} alt="" />
//       <h2>{name}</h2>
//       <p>{price}</p>
//     </div>
//   );
// }

// Course.defaultProps = {
//   name: "Default Course",
//   price: "1 Like + 1 Subscribe",
// };

function Course(props) {
  let [Purchased, setPurchased] = useState(false);
  const [discount, setDiscount] = useState(props.price);
  // let Purchased = false;  this is local variable an I should change this state variable above I chnaged

  function buyCourse(amount, e) {
    console.log(props.name, " Purchased with ", discount, "%");
    console.log(e);
    // setPurchased = true;
    setPurchased(true);
    setDiscount(discount - amount);
    console.log("Purchased value is : ", Purchased);
  }

  if (true) {
    return (
      // <div className="card">
      props.name && (
        <div className="card">
          <img src={props.image} alt="" />
          <h2>{props.name}</h2>
          <p>{discount}</p>
          <button
            onClick={(event) => {
              buyCourse(20, event);
              // console.log(event);
            }}
          >
            {Purchased ? "Already purchased" : "Get it Now"}
          </button>

          <button onClick={() => props.delete(props.id)}>Delete</button>
          <p></p>
        </div>
      )
    );
  } else {
    return <div className="card">Course Not Available</div>;
  }
}

Course.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  hide: propTypes.bool,
};
export default Course;
