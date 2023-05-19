"use client";

export default function ShowAPIResponseClient({ resource }: any) {
  const data = resource.read();

  return <p>Text from API Response: {data}</p>;
}
