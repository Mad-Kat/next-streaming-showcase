import CCBlockingUse from "@/components/cc-blocking-use";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Client components blocking with use</h1>
      <CCBlockingUse />
    </main>
  );
}
