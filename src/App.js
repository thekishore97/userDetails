import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => setUsers(users.filter((user) => user.id !== id)),
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", name1: "", username: "", dob: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      {editing ? (
        <div>
          <h1></h1>
          <EditUserForm
            currentUser={currentUser}
            setEditing={setEditing}
            updateUser={updateUser}
          />
        </div>
      ) : (
        <div>
          {/* <h2>Add user</h2> */}
          <h1></h1>
          <AddUserForm addUser={addUser} />
        </div>
      )}

      <h2>User List</h2>
      <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
