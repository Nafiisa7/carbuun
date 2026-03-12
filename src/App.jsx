import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./client/pages/Login";
import Signup from "./client/pages/Signup";
import Dashboard from "./client/pages/Dashboard";
import ProfileSettings from "./client/pages/ProfileSettings";
import VehicleSelection from "./client/pages/VehicleSelection";
import ServiceRequest from "./client/pages/ServiceRequest";
import ServiceDetails from "./client/pages/ServiceDetails";
import ServiceHistory from "./client/pages/ServiceHistory";
import ServiceStatus from "./client/pages/ServiceStatus";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminRequests from "./admin/pages/AdminRequests";
import AdminTechnicians from "./admin/pages/AdminTechnicians";
import AdminClients from "./admin/pages/AdminClients";
import AdminPayments from "./admin/pages/AdminPayments";
import AdminSettings from "./admin/pages/AdminSettings";

import { SettingsProvider } from "./admin/context/SettingsContext";

import { TechnicianProvider } from "./technician/context/TechnicianContext";
import { ProfileProvider } from "./technician/context/ProfileContext";

import TechnicianDashboard from "./technician/pages/TechnicianDashboard";
import TechnicianJob from "./technician/pages/TechnicianJob";
import TechnicianHistory from "./technician/pages/TechnicianHistory";
import TechnicianProfile from "./technician/pages/TechnicianProfile";

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          {/* CLIENT ROUTES */}

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/request" element={<VehicleSelection />} />
          <Route path="/service-request/:type" element={<ServiceRequest />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/history" element={<ServiceHistory />} />
          <Route path="/status" element={<ServiceStatus />} />

          {/* ADMIN ROUTES */}

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/requests" element={<AdminRequests />} />
          <Route path="/admin/technicians" element={<AdminTechnicians />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* TECHNICIAN ROUTES */}

          <Route
            path="/technician/*"
            element={
              <TechnicianProvider>
                <ProfileProvider>
                  <Routes>
                    <Route path="dashboard" element={<TechnicianDashboard />} />
                    <Route path="job/:id" element={<TechnicianJob />} />
                    <Route path="history" element={<TechnicianHistory />} />
                    <Route path="profile" element={<TechnicianProfile />} />
                  </Routes>
                </ProfileProvider>
              </TechnicianProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;
