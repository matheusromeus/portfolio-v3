import Link from "next/link";

export default function NoteToSelf() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#ededed]"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <header className="grid grid-cols-3 items-center px-8 pt-7 pb-2">
        <Link
          href="/writing"
          className="text-sm text-[#ededed]/40 hover:text-[#ededed] transition-colors duration-200 w-fit"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          ←
        </Link>
        <div />
        <div />
      </header>

      <main className="flex-1 px-8 pt-14 pb-16">
        <div className="max-w-xl mx-auto">
          <div className="mb-10">
            <h1 className="text-base font-[400] mb-3">note to self.</h1>
            <p
              className="text-[0.6rem] text-[#ededed]/35 tracking-wide"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              2024-06-26
            </p>
          </div>

          <div className="text-[0.925rem] text-[#ededed]/75 leading-relaxed space-y-5">
            <p>
              Be on your own journey. Embrace it, accept the unknowns. Figure things out yourself.
              Find out what you, and only you, like. And for once, imagine a world where you are
              the only person. Now, how would you survive? There&apos;s not even tutorial hell to
              cope with..
            </p>
            <p>
              Observe. Write down what you see. Reflect. Make mistakes (important!). Iterate.
              Trust where your gut instincts will take you.
            </p>
            <p>
              In this age, with the amount of successful people you see, with the information you
              are bombarded with every second, you might feel that there can&apos;t be any room for
              error. But the truth is, there is no other way. Following others&apos; journey will
              only help/inspire you to a certain extent. Everything else happens on its own. In
              your life.
            </p>
            <p>
              And if you don&apos;t push past this phase, how will you ever reach there? You can
              never be worthy of the good things in life if you have never done the dirty work.
              Do it for the love of the game. Remove that crutch of &quot;other people&quot;. Be the engineer. Be the designer. Of you.
            </p>
          </div>
        </div>
      </main>

      <footer
        className="text-center py-5 text-[0.6rem] text-[#ededed] tracking-wide"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        <p>designer by heart, developer by hands.</p>
      </footer>
    </div>
  );
}
