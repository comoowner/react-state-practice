import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addNewUser = (username, userage) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: userage, id: Math.random() },
      ];
    });
  };
  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
