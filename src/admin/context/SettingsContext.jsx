import { createContext, useContext, useState } from "react";
import { defaultSettings } from "../store/settingsStore";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings);

  const updatePricing = (pricing) => {
    setSettings((prev) => ({
      ...prev,
      pricing: pricing,
    }));
  };

  const updateCompany = (company) => {
    setSettings((prev) => ({
      ...prev,
      company: company,
    }));
  };

  const updateNotifications = (notifications) => {
    setSettings((prev) => ({
      ...prev,
      notifications: notifications,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updatePricing,
        updateCompany,
        updateNotifications,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
