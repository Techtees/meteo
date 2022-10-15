import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "react-use";

const defaultSetings = {
  tempUnit: "celsius",
  windUnit: "km/h",
  precipitationUnit: "mm",
  timezone: "UTC",
  pastDays: "0",
};
const SettingContext = createContext(defaultSetings);

export const SettingProvider = ({ children }) => {
  const [setting, setSettings] = useLocalStorage(
    "settingsData",
    defaultSetings
  );
  const [tempUnit, setTempUnit] = useState(setting.tempUnit);
  const [windUnit, setWindUnit] = useState(setting.windUnit);
  const [precipitationUnit, setPrecipitationUnit] = useState(
    setting.precipitationUnit
  );
  const [timezone, setTimezone] = useState(setting.timezone);
  const [pastDays, setPastDays] = useState(setting.pastDays);

  console.log(setting);

  const handleTemperature = (e) => {
    const tempValue = e.target.value;
    setTempUnit(tempValue);
  };
  const handleWind = (e) => {
    const windValue = e.target.value;
    setWindUnit(windValue);
  };
  const handlePrecipitation = (e) => {
    const prepValue = e.target.value;
    setPrecipitationUnit(prepValue);
  };
  const handleTimezone = (e) => {
    const timeZoneValue = e.target.value;
    setTimezone(timeZoneValue);
  };
  const handlePastDays = (e) => {
    const pastDaysValue = e.target.value;
    setPastDays(pastDaysValue);
  };

  const handleRevertSettings = () => {
    setSettings(defaultSetings);
  };
  const handleDeletefavourite = () => {};

  useEffect(() => {
    setSettings((prevSetting) => {
      return {
        tempUnit,
        windUnit,
        precipitationUnit,
        timezone,
        pastDays,
      };
    });
  }, [tempUnit, windUnit, precipitationUnit, timezone, pastDays]);

  return (
    <SettingContext.Provider
      value={{
        handleTemperature,
        handlePrecipitation,
        handlePastDays,
        handleTimezone,
        handleWind,
        setting,
        setSettings,
        tempUnit,
        windUnit,
        precipitationUnit,
        timezone,
        pastDays,

        handleRevertSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContext;
