import Autograph from "@/components/Autograph";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Autograph />
      <Intro />
    </div>
  );
}
