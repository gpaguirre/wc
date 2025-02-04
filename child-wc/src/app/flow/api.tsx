export interface IMockApiRequest {
  name: string;
}

export const mockApiRequest = (step: string): IMockApiRequest => {
  const fn = async () => {
    const promise = await new Promise<IMockApiRequest>((resolve) => {
      setTimeout(() => {
        console.log(`API request for step ${step} completed`);
        resolve({ name: step });
      }, 1000);
    });
    return promise;
  };

  return fn;
};
