import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("GrandChild Class Constructor");
  }

  componentDidMount() {
    console.log("---> GrandChild Class Component Mounted");
  }

  render() {
    console.log("GrandChild Class Render");

    return (
      <>
        <div>
          <h3>Address: Pune</h3>
        </div>
      </>
    );
  }
}

export default ChildClass;
