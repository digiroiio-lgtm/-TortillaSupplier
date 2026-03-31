/**
 * Global browser type augmentations for third-party scripts
 * loaded at runtime (reCAPTCHA, Google Analytics).
 */

interface Window {
  /**
   * Google reCAPTCHA v3 API (loaded via script tag).
   * https://developers.google.com/recaptcha/docs/v3
   */
  grecaptcha?: {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };

  /**
   * Google Analytics gtag function.
   * https://developers.google.com/analytics/devguides/collection/gtagjs
   */
  gtag?: (
    command: 'event' | 'config' | 'js' | 'set',
    targetIdOrEventName: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: Record<string, any>
  ) => void;
}
