import { createContext, useContext, useState } from "react";
import { assignedJobs, incomingRequests } from "../data/technicianData";

const TechnicianContext = createContext();

export function TechnicianProvider({ children }) {
  const [jobs, setJobs] = useState(assignedJobs);
  const [requests, setRequests] = useState(incomingRequests);
  const [online, setOnline] = useState(true);

  const acceptRequest = (request) => {
    setJobs([...jobs, { ...request, status: "active" }]);
    setRequests(requests.filter((r) => r.id !== request.id));
  };

  const declineRequest = (id) => {
    setRequests(requests.filter((r) => r.id !== id));
  };

  return (
    <TechnicianContext.Provider
      value={{
        jobs,
        requests,
        online,
        setOnline,
        acceptRequest,
        declineRequest,
      }}
    >
      {children}
    </TechnicianContext.Provider>
  );
}

export const useTechnician = () => useContext(TechnicianContext);
