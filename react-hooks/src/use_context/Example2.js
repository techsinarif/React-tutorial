import React, { createContext,useContext,useState } from "react";

const UserContext = createContext();

export default function Example2() {
  const [user] = useState("Arif 2");
  return (
    <UserContext.Provider value={user}>
      <h1>Example2</h1>
      <Component1 />
    </UserContext.Provider>
  );
}

function Component1() {
  return (
    <>
      <h3>Component 1</h3>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4  />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5  />
    </>
  );
}

function Component5() {

  const user = useContext(UserContext)
  return (
    <>
      <h3>Component 5</h3>
      <h1>{`user is ${user}`}</h1>
    </>
  );
}