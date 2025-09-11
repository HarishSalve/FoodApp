import { useEffect } from "react";

const UserInfo = ({ name }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Functional Component Mounted");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Functional Component Unmounted");
    };
  });

  console.log("Functional Component Rendered");

  return (
    <>
      <div className="user-info">
        <h2>Functional Component</h2>
        <h2>Name: {name}</h2>
        <h2>Email: Harish.Salve@gmail.com</h2>
        <h2>Address: Pune</h2>
      </div>
    </>
  );
};

export default UserInfo;
