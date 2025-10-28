import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // code
    const timer = setInterval(() => {
      console.log("Timer");
    }, 1000);
    console.log("useEffect")

    //unmounting
    return () => {
      clearInterval(timer);
      console.log("Component Unmounted")
    }
  }, []);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Adelaide</h3>
      <h4>Contact: peedylan94@gmail.com</h4>
    </div>
  );
};

export default User;

/*

--- MOUNTING ---
Constructor (dummy)
Render (dummy)
  <HTML> dummy </HTML>

Component Did Mount
  <API Call>
  <this.setState> -> State variable is updated

--- UPDATE ---
Render (API data)
  <HTML> API Data </HTML>

Component Did Update

-- happpens again and again --
Render
Component Did Update
-- until navigates to another page or close browser --

Component Will Unmount

*/
