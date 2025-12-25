export default function BtnContainer({ jobs, currentTab, setCurrentTab }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={`job-btn ${index === currentTab ? "active-btn" : ""}`}
            onClick={() => {
              setCurrentTab(index);
            }}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}
