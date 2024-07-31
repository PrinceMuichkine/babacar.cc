// Default export of a function that takes a variable number of arguments
export default async (
  ...args: [input: RequestInfo, init?: RequestInit] 
): Promise<any> => {
  const res = await fetch(...args); 
  return res.json() as Promise<any>; 
};