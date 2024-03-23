import Link from "next/link";
import Open from "../open";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <section className="flex flex-col items-center p-24 h-screen">
      <h1>Reader</h1>
      <Link href="/">Back to home</Link>
      <Open />
    </section>
  );
}
