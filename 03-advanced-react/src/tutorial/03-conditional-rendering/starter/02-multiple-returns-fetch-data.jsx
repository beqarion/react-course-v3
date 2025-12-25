import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "An unknown error occurred";
        console.error(message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>There was an error...</h2>;

  const { name, avatar_url, company, bio } = user;

  return (
    <div>
      <img
        alt={name}
        src={avatar_url}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{name}</h2>
      <h2>works at {company}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
