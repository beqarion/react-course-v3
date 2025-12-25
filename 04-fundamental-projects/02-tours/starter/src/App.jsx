import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Unexpected error occurred";
      console.error(errMsg);
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((t) => t.id !== id));
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
