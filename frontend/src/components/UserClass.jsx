import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      bio: "",
      name: ""
    };

    console.log("constructor")
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aigito");
    const json = await data.json();

    this.timer = setInterval(() => {
      console.log("Timer");
    }, 1000);

    console.log(json)

    this.setState({
      name: json.name,
      bio: json.bio,
      id: json.id,
      ads: "random string"
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate() {
    console.log("Successfully updated the DOM!")
  }

  render() {
    const { location } = this.props;
    const { name, bio, count, id, ads } = this.state;
    const add = () => {
      this.setState({
        count: this.state.count + 1
      })
    };
    console.log("render")

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={add}>+</button>
        <h2>ADS: {ads}</h2>
        <h2>Name: {name}</h2>
        <h2>ID: {id}</h2>
        <h2>Bio: {bio}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: peedylan94@gmail.com</h4>
      </div>
    );
  };
};

export default UserClass;