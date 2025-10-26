import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>THIS IS ABOUT US</h1>
      <User name={"Dylan (function based)"} />
      <UserClass name={"Dylan (class based)"} location={"Greenacres"} />
    </div>
  )
};

export default About;