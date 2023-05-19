import { fetchFromAPI } from "@/lib/fetchFromAPI";

export default async function ShowAPIResponseServer() {
  const data = await fetchFromAPI();

  return <p>Text from API Response: {data}</p>;
}
