import { useEffect, useState } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          throw new Error("Error fetching user");
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { isError, isLoading, user };
}
export default useFetch;
