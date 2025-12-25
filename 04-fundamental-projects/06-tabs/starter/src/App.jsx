import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  const fetchTabs = async () => {
    setErrors("");
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      const tabs = await response.json();
      setTabs(tabs);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setErrors(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  // loading
  if (loading)
    return (
      <section className="jobs-center">
        <h3>Loading...</h3>
      </section>
    );

  // errors
  if (errors)
    return (
      <section className="jobs-center">
        <h3>Error: {errors}</h3>
      </section>
    );

  // empty
  if (tabs.length === 0)
    return (
      <section className="jobs-center">
        <h3>No data available</h3>
      </section>
    );

  // success
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <JobInfo jobs={tabs} currentTab={currentTab} />
    </section>
  );
};
export default App;
