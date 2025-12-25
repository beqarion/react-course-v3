import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function SingleQuestion({
  title,
  info,
  activeId,
  id,
  toggleQuestion,
}) {
  const isActive = activeId === id;

  const toggleAnswer = () => {
    toggleQuestion(id);
  };
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={toggleAnswer}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
}
