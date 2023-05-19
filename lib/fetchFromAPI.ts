import wrapPromise from "@/lib/wrapPromise";

export const fetchFromAPI = () => {
  const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello from API!`);
    }, 2000);
  });

  return promise;
};
