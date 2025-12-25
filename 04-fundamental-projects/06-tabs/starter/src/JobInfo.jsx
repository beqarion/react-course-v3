import Duties from "./Duties";

export default function JobInfo({ jobs, currentTab }) {
  const { company, dates, duties, title } = jobs[currentTab];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
