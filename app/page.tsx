import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-24 items-start">
      <h1 className="text-3xl uppercase font-bold bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
        Showcasing Streaming
      </h1>
      <h2 className="text-xl bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
        Showcasing client components
      </h2>
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
            href="/cc-use-effect"
            prefetch={false}
            className="hover:text-blue-400"
          >
            Client components with use effect data fetching
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
      </ul>
      <h2 className="text-xl mt-5 bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
        Showcasing server components
      </h2>
      <ul>
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
      </ul>
      <h2 className="text-xl mt-5 bg-gradient-to-r from-green-300 to-blue-500 text-transparent bg-clip-text">
        Showcasing use
      </h2>
      <ul>
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
