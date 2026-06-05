"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />
      <div className="min-h-screen" />
    </>
  );
}
