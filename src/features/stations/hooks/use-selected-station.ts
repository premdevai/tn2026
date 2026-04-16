"use client";

import { useEffect, useState } from "react";

const selectedStationKey = "selectedStation";

export function useSelectedStation() {
  const [hasStation, setHasStation] = useState<boolean | null>(null);

  useEffect(() => {
    setHasStation(localStorage.getItem(selectedStationKey) === "true");
  }, []);

  function selectStation() {
    localStorage.setItem(selectedStationKey, "true");
    setHasStation(true);
  }

  function clearStation() {
    localStorage.removeItem(selectedStationKey);
    setHasStation(false);
  }

  return {
    hasStation,
    selectStation,
    clearStation
  };
}
