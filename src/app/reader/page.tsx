import Link from "next/link";
import Open from "../open";

export default function Page() {
  return (
    <section className="bg-white dark:bg-slate-800 flex flex-col items-center p-24 h-screen">
      <h1>Reader</h1>
      <Link href="/">Back to home</Link>
      <Open />
    </section>
  );
}
