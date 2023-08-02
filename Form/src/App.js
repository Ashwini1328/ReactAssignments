import React, { useState } from "react";
import userList from "./data.js";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

const App = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };





  return (
    <div className="container">
      <div className="row">
        <div className="five columns">

          <div>
            <h2>Register</h2>
            <AddUserForm addUser={addUser} />
          </div>

        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
