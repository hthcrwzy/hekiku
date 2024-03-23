import Link from "next/link";
import { NotoSansJPLocal } from "./font";

export default function Home() {
  return (
    <main className={NotoSansJPLocal.className}>
      <div className="flex flex-col space-y-4">
        <header className="flex flex-col justify-center space-y-4 text-center h-96 bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="font-extrabold text-5xl">Welcome to Hekiku!</h1>
          <h2 className="opacity-75">AOZORA BUNKO READER</h2>
        </header>
        <Link href="reader">Open and Read</Link>
      </div>
    </main>
  );
}
