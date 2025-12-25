import SingleQuestion from "./SingleQuestion";

export default function Questions({ questions, activeId, toggleQuestion }) {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((q) => (
        <SingleQuestion
          {...q}
          key={q.id}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
}
