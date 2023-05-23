import CCStreamingUse from "@/components/cc-streaming-use";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Client components streaming with use</h1>
      <CCStreamingUse />
    </main>
  );
}
