import { useState } from "react";
import TechnicianSidebar from "../components/TechnicianSidebar";
import TechnicianTopbar from "../components/TechnicianTopbar";
import { useProfile } from "../context/ProfileContext";
import { FaCamera } from "react-icons/fa";

export default function TechnicianProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { profile, updateProfile } = useProfile();

  const [form, setForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    specialization: profile.specialization,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile({
      name: form.name,
      email: form.email,
      phone: form.phone,
      specialization: form.specialization,
    });

    alert("Profile updated successfully");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      updateProfile({ photo: reader.result });
    };

    reader.readAsDataURL(file);
  };
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <TechnicianSidebar open={sidebarOpen} />

      <div className="flex-1">
        <TechnicianTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8 max-w-4xl mx-auto space-y-6">
          {/* Profile Photo */}

          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-semibold mb-4">Profile Photo</h2>

            <div className="flex items-center gap-6">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center">
                  {initials}
                </div>
              )}

              <label className="border px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                <FaCamera />
                Change Photo
                <input
                  type="file"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

          {/* Personal Info */}

          <div className="bg-white border rounded-xl p-6 space-y-4">
            <h2 className="font-semibold">Personal Information</h2>

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Specialization</label>
              <input
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2"
            >
              Save Changes
            </button>
          </div>

          {/* Statistics */}

          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-semibold mb-4">Statistics</h2>

            <div className="grid grid-cols-3 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">
                  {profile.jobs}
                </p>
                <p className="text-gray-500 text-sm">Jobs Completed</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-green-600">
                  {profile.rating}
                </p>
                <p className="text-gray-500 text-sm">Rating</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-purple-600">
                  ${profile.earnings}
                </p>
                <p className="text-gray-500 text-sm">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
