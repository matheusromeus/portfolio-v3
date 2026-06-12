"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomeContent from "@/components/HomeContent";

let splashPlayed = false;

export default function Home() {
  const [splashDone, setSplashDone] = useState(splashPlayed);

  const handleSplashComplete = () => {
    splashPlayed = true;
    setSplashDone(true);
  };

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      {splashDone && <HomeContent />}
    </>
  );
}
