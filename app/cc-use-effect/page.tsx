import CCBlocking from "@/components/cc-blocking";
import CCUseEffect from "@/components/cc-use-effect";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Client component with use effect data fetching</h1>
      <CCUseEffect />
    </main>
  );
}
