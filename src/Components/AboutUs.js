import UserInfo from "./UserInfo";
import UserInfoClass from "./UserInfoClass";
import React from "react";
import UserContext from "../utils/userContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Harish Salve",
    };
    console.log("ParentAbout Us Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
    this.interval = setInterval(() => {
      console.log("namste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Parent Component Updated", this.state);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("Parent Component Unmounted");
  }

  render() {
    console.log("Parent About Us Render");

    return (
      <div>
        <UserInfo name={"Harish Salve"} />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/*<UserInfoClass name={"Harish Salve"}/>*/}
      </div>
    );
  }
}
// const AboutUs = () => {
//     return (
//         <div>
//             <UserInfo  name={"Harish Salve"}/>
//             <UserInfoClass name={"Harish Salve"}/>
//         </div>
//     )
// }

export default AboutUs;
