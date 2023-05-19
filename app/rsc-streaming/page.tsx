import RSCStreaming from "@/components/rsc-streaming";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Server components streaming</h1>
      <RSCStreaming />
    </main>
  );
}
