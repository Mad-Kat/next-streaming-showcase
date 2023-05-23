"use client";

import { fetchFromAPI } from "@/lib/fetchFromAPI";
import { use } from "react";

export default function ShowAPIResponseClientUse() {
  const data = use(fetchFromAPI());

  return <p>Text from API Response: {data}</p>;
}
