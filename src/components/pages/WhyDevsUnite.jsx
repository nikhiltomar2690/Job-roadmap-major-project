import "./WhyDevsUnite.css";
import { useState, useEffect } from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Company: {job.company}</p>
      <p>Salary: {job.salary}</p>
      <p>Location: {job.location}</p>
      <a
        href={job.applylink}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-button"
      >
        Apply
      </a>
    </div>
  );
};

export const WhyDevsUnite = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://devsunite-jobapi.onrender.com/api/jobs/"
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
