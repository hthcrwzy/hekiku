import Link from "next/link";
import Open from "../open";

export default function Page() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Reader</h1>
      <Link href="/">Back to home</Link>
      <Open />
    </section>
  );
}
