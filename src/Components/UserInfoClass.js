import React from "react";
import ChildClass from "./ChildClass";

class UserInfoClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userInfo: {
        name: props.name,
        email: "dummy@gmail.com",
        location: "Pune",
      },
    };
    console.log("Child Constructor", props);
  }

  async componentDidMount() {
    console.log("Child Component Mounted");
    const data = await fetch("https://api.github.com/users/HarishSalve");
    const response = await data.json();
    this.setState({
      userInfo: response,
    });
    console.log("API data", response);
  }

  componentDidUpdate() {
    console.log("Child Component Updated", this.state.userInfo);
  }

  componentWillUnmount() {
    console.log("Child Component will Unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Child Render");

    return (
      <>
        <div>
          <img src={avatar_url} alt="Avatar" />
          <h3>Name: {name}</h3>
          <h3>Email: {"email"}</h3>
          <h3>Address: {location}</h3>
          {/* <ChildClass /> */}
        </div>
      </>
    );
  }
}

export default UserInfoClass;
