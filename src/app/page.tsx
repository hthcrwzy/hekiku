import Link from "next/link";
import { NotoSansJPLocal } from "./font";

export default function Home() {
  return (
    <main className={NotoSansJPLocal.className}>
      <div className="bg-gradient-to-b from-sky-200 dark:bg-gradient-to-b dark:from-sky-600 dark:to-slate-900 min-h-screen flex flex-col space-y-4 text-black dark:text-white">
        <header className="flex flex-col justify-center space-y-4 text-center h-96">
          <h1 className="font-extrabold text-5xl">Welcome to Hekiku!</h1>
          <h2 className="opacity-75">AOZORA BUNKO READER</h2>
        </header>
        <Link
          href="reader"
          className="justify-center text-center text-2xl underline underline-offset-1 hover:no-underline"
        >
          Open and Read
        </Link>
      </div>
    </main>
  );
}
