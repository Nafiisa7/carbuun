import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

<button
  onClick={() => navigate(`/technician/job/${job.id}`)}
  className="bg-black text-white w-full py-2 rounded-lg"
>
  View Job
</button>;
