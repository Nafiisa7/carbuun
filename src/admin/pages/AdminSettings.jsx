import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

export default function AdminSettings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { settings, updatePricing, updateCompany, updateNotifications } =
    useSettings();

  const [pricing, setPricing] = useState(settings.pricing);
  const [company, setCompany] = useState(settings.company);
  const [notifications, setNotifications] = useState(settings.notifications);

  const savePricing = () => {
    updatePricing(pricing);
    alert("Pricing updated");
  };

  const saveCompany = () => {
    updateCompany(company);
    alert("Company info updated");
  };

  const toggleNotification = (type) => {
    const updated = {
      ...notifications,
      [type]: !notifications[type],
    };

    setNotifications(updated);
    updateNotifications(updated);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex-1">
        <AdminTopbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-6 md:p-8 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">System Settings</h1>

          {/* Pricing */}

          <div className="bg-white border rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Pricing Configuration</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm">Carbun Fee ($)</label>
                <input
                  type="number"
                  value={pricing.carbunFee}
                  onChange={(e) =>
                    setPricing({
                      ...pricing,
                      carbunFee: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded p-2 mt-1"
                />
              </div>

              <div>
                <label className="text-sm">Platform Commission (%)</label>

                <input
                  type="number"
                  value={pricing.commission}
                  onChange={(e) =>
                    setPricing({
                      ...pricing,
                      commission: Number(e.target.value),
                    })
                  }
                  className="w-full border rounded p-2 mt-1"
                />
              </div>

              <button
                onClick={savePricing}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Save Pricing
              </button>
            </div>
          </div>

          {/* Company */}

          <div className="bg-white border rounded-xl p-6 mb-6">
            <h2 className="font-semibold mb-4">Company Information</h2>

            <div className="space-y-4">
              <input
                value={company.name}
                onChange={(e) =>
                  setCompany({ ...company, name: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                value={company.email}
                onChange={(e) =>
                  setCompany({ ...company, email: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                value={company.phone}
                onChange={(e) =>
                  setCompany({ ...company, phone: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                value={company.address}
                onChange={(e) =>
                  setCompany({ ...company, address: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <button
                onClick={saveCompany}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Save Information
              </button>
            </div>
          </div>

          {/* Notifications */}

          <div className="bg-white border rounded-xl p-6">
            <h2 className="font-semibold mb-4">Notification Settings</h2>

            <div className="space-y-3">
              {["email", "sms", "push"].map((type) => (
                <label key={type} className="flex items-center justify-between">
                  <span className="capitalize">{type} Notifications</span>

                  <input
                    type="checkbox"
                    checked={notifications[type]}
                    onChange={() => toggleNotification(type)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
