import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-3xl">Showcasing Streaming</h1>
      <ul>
        <li>
          <Link
            href="/cc-blocking"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Client components blocking
          </Link>
        </li>
        <li>
          <Link
            href="/cc-streaming"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Client components streaming
          </Link>
        </li>
        <li>
          <Link
            href="/rsc-blocking"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Server components blocking
          </Link>
        </li>
        <li>
          <Link
            href="/rsc-streaming"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Server components streaming
          </Link>
        </li>
        <li>
          <Link
            href="/cc-blocking-use"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Client components blocking with use
          </Link>
        </li>
        <li>
          <Link
            href="/cc-streaming-use"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Client components streaming with use
          </Link>
        </li>
      </ul>
    </main>
  );
}
