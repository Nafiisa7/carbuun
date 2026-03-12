import { FaBars, FaBell } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
// import { Navigate } from "react-router-dom";

export default function TechnicianTopbar({ toggleSidebar }) {
  const { profile } = useProfile();
  //   const Navigate = Navigate();

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-xl">
          <FaBars />
        </button>

        <h1 className="font-semibold">Technician Portal</h1>
      </div>

      <div className="flex items-center gap-4">
        <FaBell className="text-gray-500" />
        <div
          //   onClick={() => Navigate("/technician/profile")}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80"
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              className="w-8 h-8 rounded-full object-cover"
              alt="profile"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
              {initials}
            </div>
          )}

          {/* <span className="hidden md:block">{profile.name}</span> */}
        </div>
      </div>
    </header>
  );
}
