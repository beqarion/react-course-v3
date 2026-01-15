import { useState } from "react";

import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const onSubmit = (e) => {
    e.preventDefault();
    const idToBe = Math.max(...users.map((u) => u.id)) + 1;
    const userToBe = { id: idToBe, name };

    setUsers((prevUsers) => [...prevUsers, userToBe]);
    setName("");
  };

  const handleUserRemove = (id) => {
    setUsers((prevUsers) => [...prevUsers.filter((u) => u.id !== id)]);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <ul style={{ maxWidth: "400px", margin: "0 auto" }}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} id: {user.id}{" "}
            <button
              onClick={() => {
                handleUserRemove(user.id);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
