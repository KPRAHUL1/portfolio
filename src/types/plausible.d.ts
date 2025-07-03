/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

declare global {
  interface Plausible {
    (eventName: string, options?: { props: Record<string, any> }): void;
    q?: Array<[string, { props?: Record<string, any> }]>;
  }

  interface Window {
    plausible: Plausible;
  }
}
