import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const req = await fetch(url);
        const data = await req.json();
        setUsers(data);
      } catch (error) {
        fetchUsers();
      }
    };
  }, []);

  return (
    <section>
      <h3>fetch data example</h3>
      <ul className="users">
        {users.map((user) => {
          return (
            <li className="user" key={user._id}>
              <img src={`${user.avatar_url}`} alt={`${user.login}`} />
              <div>
                <h5>{user.login}</h5>
                <a
                  href={`${user.html_url}`}
                >Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
