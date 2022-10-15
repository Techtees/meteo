import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "react-use";

const defaultSetings = {
  temperature_unit: "celsius",
  windspeed_unit: "kmh",
  precipitation_unit: "mm",
  timezone: "UTC",
  past_days: "0",
};
const SettingContext = createContext(defaultSetings);

export const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage(
    "settingsData",
    defaultSetings
  );
  const [tempUnit, setTempUnit] = useState(settings.temperature_unit);
  const [windUnit, setWindUnit] = useState(settings.windspeed_unit);
  const [precipitationUnit, setPrecipitationUnit] = useState(
    settings.precipitation_unit
  );
  const [timezone, setTimezone] = useState(settings.timezone);
  const [pastDays, setPastDays] = useState(settings.past_days);

//   console.log(setting);

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
        temperature_unit: tempUnit,
        windspeed_unit: windUnit,
        precipitation_unit: precipitationUnit,
        timezone,
        past_days: pastDays,
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
        settings,
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
