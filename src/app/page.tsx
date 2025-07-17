import Autograph from "@/components/Autograph";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Autograph />
      {/* <Intro /> */}
      <div className="absolute bottom-0 flex items-center justify-center mb-2 w-full">
        <h3>sorry, work in progress.</h3>
      </div>
    </div>
  );
}
