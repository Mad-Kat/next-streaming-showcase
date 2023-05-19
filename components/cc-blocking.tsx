"use client";

import ShowAPIResponseClient from "@/components/ShowAPIResponseClient";
import { fetchFromAPI } from "@/lib/fetchFromAPI";
import wrapPromise from "@/lib/wrapPromise";

export default function CCBlocking() {
  const resource = wrapPromise(fetchFromAPI());
  return <ShowAPIResponseClient resource={resource} />;
}
