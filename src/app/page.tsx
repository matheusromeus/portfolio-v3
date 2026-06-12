"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      {splashDone && <HomeContent />}
    </>
  );
}
