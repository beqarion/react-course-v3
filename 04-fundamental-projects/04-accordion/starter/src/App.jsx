import { useState } from "react";
import questionsData from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(questionsData || []);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    if (id === activeId) return setActiveId(null);
    setActiveId(id);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
