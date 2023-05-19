import CCBlocking from "@/components/cc-blocking";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Client components blocking</h1>
      <CCBlocking />
    </main>
  );
}
