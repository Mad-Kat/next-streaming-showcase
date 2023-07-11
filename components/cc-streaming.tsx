"use client";

import ShowAPIResponseClient from "@/components/ShowAPIResponseClient";
import { Spinner } from "@/components/spinner";
import { fetchFromAPI } from "@/lib/fetchFromAPI";
import wrapPromise from "@/lib/wrapPromise";
import { Suspense } from "react";

export default function CCStreaming() {
  const resource = wrapPromise(fetchFromAPI());
  return (
    <Suspense fallback={<Spinner />}>
      <ShowAPIResponseClient resource={resource} />
    </Suspense>
  );
}
