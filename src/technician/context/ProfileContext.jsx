import { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const defaultProfile = {
    name: "Roger Curtis",
    email: "roger.curtis@example.com",
    phone: "+1 234 567 8902",
    specialization: "Engine & Transmission",
    photo: null,
    jobs: 127,
    rating: 4.8,
    earnings: 3450,
  };

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("technicianProfile");
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem("technicianProfile", JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (data) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
