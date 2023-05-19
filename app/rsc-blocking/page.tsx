import RSCBlocking from "@/components/rsc-blocking";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Server components blocking</h1>
      <RSCBlocking />
    </main>
  );
}
