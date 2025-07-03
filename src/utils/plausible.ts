// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const track = (event: string, props?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(event, props ? { props } : undefined);
  }
};
