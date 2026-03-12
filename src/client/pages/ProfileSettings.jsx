import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";
import { FaUser, FaEnvelope, FaPhone, FaCamera } from "react-icons/fa";

export default function ProfileSettings() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>

        <p className="text-gray-600 mb-10">
          Manage your account information and preferences
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* PROFILE PHOTO */}

          <div className="bg-white rounded-xl border p-6 text-center">
            <h3 className="font-semibold mb-6">Profile Picture</h3>

            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                <FaUser className="text-5xl text-blue-500" />
              </div>

              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                <FaCamera />
              </button>
            </div>

            <h4 className="font-semibold">John Doe</h4>

            <p className="text-gray-500 text-sm">john@example.com</p>

            <button className="mt-4 border px-4 py-2 rounded hover:bg-gray-50">
              Upload New Photo
            </button>
          </div>

          {/* PERSONAL INFORMATION */}

          <div className="bg-white rounded-xl border p-6 lg:col-span-2">
            <h3 className="font-semibold mb-6">Personal Information</h3>

            <div className="space-y-5">
              {/* Name */}

              <div>
                <label className="text-sm text-gray-600">Full Name</label>

                <div className="flex items-center border rounded px-3 py-2 mt-1">
                  <FaUser className="text-gray-400 mr-2" />

                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="text-sm text-gray-600">Email Address</label>

                <div className="flex items-center border rounded px-3 py-2 mt-1">
                  <FaEnvelope className="text-gray-400 mr-2" />

                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              {/* Phone */}

              <div>
                <label className="text-sm text-gray-600">Phone Number</label>

                <div className="flex items-center border rounded px-3 py-2 mt-1">
                  <FaPhone className="text-gray-400 mr-2" />

                  <input
                    type="text"
                    defaultValue="(555) 123-4567"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <hr className="my-6" />

              <h3 className="font-semibold">Change Password</h3>

              {/* Current password */}

              <input
                type="password"
                placeholder="Enter current password"
                className="border rounded w-full px-3 py-2 mt-2"
              />

              {/* New password */}

              <input
                type="password"
                placeholder="Enter new password"
                className="border rounded w-full px-3 py-2 mt-2"
              />

              {/* Confirm password */}

              <input
                type="password"
                placeholder="Confirm new password"
                className="border rounded w-full px-3 py-2 mt-2"
              />

              <div className="flex gap-4 mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                  Save Changes
                </button>

                <button className="border px-6 py-2 rounded">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
