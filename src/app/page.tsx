"use client";

import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  // null = not yet checked, false = show splash, true = skip splash
  const [splashDone, setSplashDone] = useState<boolean | null>(null);

  useEffect(() => {
    const played = sessionStorage.getItem("splashPlayed");
    setSplashDone(played ? true : false);
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashPlayed", "1");
    setSplashDone(true);
  };

  if (splashDone === null) return null;

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      {splashDone && <HomeContent />}
    </>
  );
}
